"use client";
import { Button, Callout, Text, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { issueSchema } from "@/app/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ErrorMessage from "@/app/Components/ErrorMessage";
import Spinner from "@/app/Components/Spinner";

type issue = z.infer<typeof issueSchema>;

const NewIssue = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<issue>({
    resolver: zodResolver(issueSchema),
  });
  const route = useRouter();
  const [err, setErr] = useState("");
  const [isSubmetting, setIsSubmetting] = useState(false);

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
      <form
        onSubmit={handleSubmit(async (data) => {
          try {
            setIsSubmetting(true)
            await axios.post("/api/issues", data);
            route.push("/issues");
          } catch (error) {
            setIsSubmetting(false)
            setErr("Unexpected Error Appeared");
          }
        })}
        className="max-w-xl space-y-3"
      >
        <TextField.Root>
          <TextField.Input
            placeholder="Write your title…"
            {...register("title")}
          />
        </TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Write your description…" {...field} />
          )}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        <Button type="submit">Submit new issue {isSubmetting&&<Spinner />}</Button>
      </form>
    </div>
  );
};

export default NewIssue;
