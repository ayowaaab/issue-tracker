"use client";
import Spinner from "@/app/components/Spinner";
import { TrashIcon } from "@radix-ui/react-icons";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const IssueDeleteButton = ({ issueId }: { issueId: number }) => {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const handelDelete = async () => {
    try {
      await axios.delete(`/api/issues/${issueId}`);
      router.push("/issues");
      router.refresh();
      setIsDeleting(true);
    } catch (error) {
      setIsDeleting(false);
    }
  };
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red" disabled={isDeleting}>
          {isDeleting ? <Spinner /> : <TrashIcon />}
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
            <Button onClick={handelDelete} color="red" variant="soft">
              Delete
            </Button>
          </AlertDialog.Action>
          <AlertDialog.Cancel>
            <Button color="gray" variant="soft">
              Cancel
            </Button>
          </AlertDialog.Cancel>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default IssueDeleteButton;
