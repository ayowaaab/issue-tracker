"use client"
import { Button, TextArea, TextField, ThemePanel } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssue = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Write your title…" />
      </TextField.Root>
      <SimpleMDE placeholder="Write your description…" />;
      <Button>Submit new issue</Button>
    </div>
  );
};

export default NewIssue;
