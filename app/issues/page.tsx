import { Container } from "@radix-ui/themes";
import Filter from "../components/Filter";
import IssueAction from "../components/IssueAction";
import IssuesTable from "../components/IssuesTable";
import prisma from "@/prisma/db";
import { issue, Status } from "@prisma/client";

interface Props {
  searchParams: { status: Status; sortedBy: string };
}

const IssuePage = async ({ searchParams }: Props) => {
  const statuses = Object.values(Status);

  const statue = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const orderBy = ["title", "status", "createdAt"].includes(
    searchParams.sortedBy
  )
    ? { [searchParams.sortedBy]: "asc" }
    : undefined;

  const issues = await prisma.issue.findMany({
    orderBy,
    where: { status: statue },
  });

  return (
    <Container>
      <div className="flex justify-between mb-5">
        <Filter />
        <IssueAction />
      </div>
      <IssuesTable issues={issues} />
    </Container>
  );
};
export const dynamic = "force-dynamic";
export default IssuePage;
