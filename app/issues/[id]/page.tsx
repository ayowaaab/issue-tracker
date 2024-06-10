import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}
const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma?.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue) notFound();
  const convertDate = (date: Date) => {
    var month = date.getMonth() + 1,
      year = date.getFullYear(),
      day = date.getDate();
    return day + "/" + month + "/" + year;
  };
  return (
    <>
      <h1>{issue.title}</h1>
      <h1>{issue.description}</h1>
      <h1>{convertDate(issue.createdAt)}</h1>
      <h1>{issue.status}</h1>
      <h1>{convertDate(issue.updatedAt)}</h1>
    </>
  );
};

export default IssueDetailPage;
