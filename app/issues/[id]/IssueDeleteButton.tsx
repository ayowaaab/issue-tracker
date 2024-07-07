"use client";
import { TrashIcon } from "@radix-ui/react-icons";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import Link from "next/link";

const IssueDeleteButton = ({ issueId }: { issueId: number }) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red">
          <TrashIcon />
          Delete Issue
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
        <AlertDialog.Description>
          Are you sure you wanna delete this issue? This action cannot be undone{" "}
        </AlertDialog.Description>
        <Flex mt={"4"} gap={"2"}>
          <AlertDialog.Action>
            <Button color="red" variant="soft">Delete</Button>
          </AlertDialog.Action>
          <AlertDialog.Cancel>
            <Button color="gray" variant="soft">Cancel</Button>
          </AlertDialog.Cancel>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default IssueDeleteButton;
