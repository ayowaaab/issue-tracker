import { TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const IssueDeleteButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button style={{ cursor: "pointer" }} color="red">
      <TrashIcon />
      <Link href={`/issues`}>Delete Issue</Link>
    </Button>
  );
};

export default IssueDeleteButton;
