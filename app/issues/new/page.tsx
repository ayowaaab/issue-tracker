"use client";
import { Button, TextArea, TextField, ThemePanel } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { log } from "console";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssue = () => {
  const { register, handleSubmit, control } = useForm<IssueForm>();
  const route = useRouter();
  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/issues", data);
        route.push("/issues");
      })}
      className="max-w-xl space-y-3"
    >
      <TextField.Root>
        <TextField.Input
          placeholder="Write your title…"
          {...register("title")}
        />
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Write your description…" {...field} />
        )}
      />
      <Button type="submit">Submit new issue</Button>
    </form>
  );
};

export default NewIssue;
