import { BadgeIssue, Link } from "@/app/components";
import prisma from "@/prisma/db";
import { Status } from "@prisma/client";
import { Table } from "@radix-ui/themes";

interface IssuesProps {
  id: number;
  title: string;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
}

const IssuesTable = async () => {
  const issues: IssuesProps[] = await prisma.issue.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issues</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.RowHeaderCell>
                <div className="flex gap-5">
                  <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                  <div className="md:hidden">
                    <BadgeIssue status={issue.status} />
                  </div>
                </div>
              </Table.RowHeaderCell>
              <Table.Cell className="hidden md:table-cell">
                <BadgeIssue status={issue.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {issue.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
};

export default IssuesTable;
