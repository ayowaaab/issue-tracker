import { Skeleton } from "@/app/components";
import { Container, Table } from "@radix-ui/themes";
import Filter from "../components/Filter";
import IssueAction from "../components/IssueAction";
const LoadingIssuesPage = () => {
  const issues = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <Container>
        <div className="flex justify-between mb-5">
          <Filter />
          <IssueAction />
        </div>
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
              <Table.Row key={issue}>
                <Table.Cell>
                  <Skeleton />
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  <Skeleton />
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  <Skeleton />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Container>
    </>
  );
};

export default LoadingIssuesPage;
