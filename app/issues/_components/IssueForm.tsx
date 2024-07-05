"use client";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import { issueSchema } from "@/app/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { issue } from "@prisma/client";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Button, Callout, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

type issueValidation = z.infer<typeof issueSchema>;
interface Props {
  issue?:issue ;
}
const IssueForm: React.FC<Props> = ({ issue }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<issueValidation>({
    resolver: zodResolver(issueSchema),
  });
  const route = useRouter();
  const [err, setErr] = useState("");
  const [isSubmetting, setIsSubmetting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmetting(true);
      if (issue) await axios.patch(`/api/issues/${issue.id}`, data);
      else await axios.post("/api/issues", data);
      route.push("/issues");
    } catch (error) {
      setIsSubmetting(false);
      setErr("Unexpected Error Appeared");
    }
  });

  return (
    <div>
      {err && (
        <Callout.Root color="red" className="max-w-xl mb-5">
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>{err}</Callout.Text>
        </Callout.Root>
      )}
      <form onSubmit={onSubmit} className="max-w-xl space-y-3">
        <TextField.Root>
          <TextField.Input
            defaultValue={issue?.title}
            placeholder="Write your title…"
            {...register("title")}
          />
        </TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          defaultValue={issue?.description}
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Write your description…" {...field} />
          )}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        <Button type="submit">
          {!issue ? "Submit new issue" : "Update issue"}{" "}
          {isSubmetting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default IssueForm;
