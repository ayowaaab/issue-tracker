"use client";
import { BadgeIssue, Link } from "@/app/components";
import { issue } from "@prisma/client";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { Table } from "@radix-ui/themes";
import NextLink from "next/link";
import { useSearchParams } from "next/navigation";

const IssuesTable = async ({ issues }: { issues: issue[] }) => {
  if (issues.length == 0) return <EmptyTable />;
  return <FullTable issues={issues} />;
};


const EmptyTable = () => {
  return (
    <>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issues</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="">Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="">
              Created
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell className="">No Data ❌</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </>
  );
};

const FullTable = ({ issues }: { issues: issue[] }) => {
  const search = useSearchParams();
  const exist = search.get("status");
  const sorted = "sortedBy=";
  const columns: { className?: string; label: string; value: keyof issue }[] = [
    { className: "cursor-pointer", label: "Issue", value: "title" },
    {
      className: "hidden md:table-cell cursor-pointer",
      label: "Status",
      value: "status",
    },
    {
      className: "hidden md:table-cell cursor-pointer",
      label: "Created At",
      value: "createdAt",
    },
  ];
  return (
    <>
      <Table.Root variant="surface">

        <Table.Header>
          <Table.Row>
            {columns.map((val) => (
              <Table.ColumnHeaderCell key={val.label} className={val.className}>
                <NextLink
                  href={
                    exist
                      ? `/issues/?status=${exist + "&" + sorted + val.value}`
                      : "?" + sorted + val.value
                  }
                >
                  {val.label}{" "}
                  {val.value == search.get("sortedBy") && (
                    <ArrowUpIcon className="inline" />
                  )}
                </NextLink>
              </Table.ColumnHeaderCell>
            ))}
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
