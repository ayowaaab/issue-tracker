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
            await axios.post("/api/issues", data);
            route.push("/issues");
          } catch (error) {
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
        {errors.title && <Text color="red" as="p">{errors.title.message}</Text>}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Write your description…" {...field} />
          )}
        />
        {errors.description && (
          <Text color="red" as="p">{errors.description.message}</Text>
        )}

        <Button type="submit">Submit new issue</Button>
      </form>
    </div>
  );
};

export default NewIssue;
