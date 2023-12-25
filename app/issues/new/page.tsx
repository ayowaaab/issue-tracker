"use client"
import { Box, Button, TextArea, TextField, ThemePanel } from "@radix-ui/themes";

const NewIssue = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Search the docs…" />
      </TextField.Root>
      <TextArea placeholder="Reply to comment…" />
      <Button>Submit new issue</Button>
    </div>
  );
};

export default NewIssue;
