import prisma from "@/prisma/db";
import { Badge, Table } from "@radix-ui/themes";
import BadgeIssue from "./BadgeIssue";
import { Status } from "@prisma/client";

interface IssuesProps {
  id: number;
  title: string;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
}

const IssuesTable = async () => {
  const issues: IssuesProps[] = await prisma.issue.findMany();

  return (
    <>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issues</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Created</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.RowHeaderCell>{issue.title}</Table.RowHeaderCell>
              <Table.Cell>
                <BadgeIssue status={issue.status} />
              </Table.Cell>
              <Table.Cell>{issue.createdAt.toDateString()}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
};

export default IssuesTable;
