import { issue } from "@prisma/client";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const IssueEditButton = ({ issue }: { issue: issue }) => {
  return (
    <Button color="green">
      <Pencil2Icon />
      <Link href={`/issues/${issue.id}/edit`}>Edit Issue</Link>
    </Button>
  );
};

export default IssueEditButton;
