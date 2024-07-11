import prisma from "@/prisma/db";
import { Status } from "@prisma/client";
import { Container } from "@radix-ui/themes";
import Filter from "../components/Filter";
import IssueAction from "../components/IssueAction";
import IssuesTable from "../components/IssuesTable";
import Pagination from "../components/Pagination";

interface Props {
  searchParams: { status: Status; sortedBy: string; page: string };
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
    skip: (parseInt(searchParams.page) - 1 || 0) * 5,
    take: 5,
  });
  const issueCount = await prisma.issue.count({ where: { status: statue } });
  return (
    <Container>
      <div className="flex justify-between mb-5">
        <Filter />
        <IssueAction />
      </div>
      <IssuesTable issues={issues} />
      <Pagination
        currentPage={parseInt(searchParams.page) || 1}
        pageSize={issueCount}
        count={5}
      />
    </Container>
  );
};
export const dynamic = "force-dynamic";
export default IssuePage;
