import { Badge, Card } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

interface Props {
  params: { id: string };
}
const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma?.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue) notFound();

  return (
    <>
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold capitalize">{issue.title}</h1>
        <div className="flex gap-5">
          <Badge>{issue.status}</Badge>
          <h1 className=" font-medium">{issue.createdAt.toDateString()}</h1>
        </div>
        <Card className="prose">
          <ReactMarkdown >
            {issue.description}
          </ReactMarkdown>
        </Card>
      </div>
    </>
  );
};

export default IssueDetailPage;
