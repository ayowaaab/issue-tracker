import prisma from "@/prisma/db";
import {
  Avatar,
  Card,
  Container,
  Flex,
  Heading,
  Table,
} from "@radix-ui/themes";
import { BadgeIssue, Link } from "../../components";

const LatestIssues = async () => {
  const issues = await prisma.issue.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
    include: { assignedToUser: true },
  });
  return (
    <Container>
      <Card>
        <Heading m={"2"} size={"4"} mb={"5"}>
          Latest Issues
        </Heading>
        <Table.Root>
          <Table.Body>
            {issues.map((issue) => (
              <Table.Row>
                <Table.Cell>
                  <Flex justify={"between"}>
                    <Flex direction={"column"} align={"start"} gap={"2"}>
                      <Link href={`/issues/${issue.id}`}>{issue.title}</Link>

                      <BadgeIssue status={issue.status} />
                    </Flex>
                    {issue.assignedToUser && (
                      <Avatar
                        className="cursor-pointer"
                        size={"2"}
                        radius="full"
                        src={issue.assignedToUser.image!}
                        fallback="?"
                      />
                    )}
                  </Flex>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Card>
    </Container>
  );
};

export default LatestIssues;
