import prisma from "@/prisma/db";
import { Box, Container, Flex, Grid } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import { cache } from "react";
import AssigneeSelect from "./AssigneeSelect";
import IssueDeleteButton from "./DeleteIssueButton";
import IssueEditButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";

interface IParams {
  params: { id: string };
}
const fetchUser = cache((issueId: number) =>
  prisma.issue.findUnique({ where: { id: issueId } })
);

const IssueDetailPage = async ({ params }: IParams) => {
  const session = await getServerSession();
  const issue = await fetchUser(parseInt(params.id));
  
  if (!issue) notFound();

  return (
    <Container>
      <Grid columns={{ initial: "1", md: "5" }} gap={"2"}>
        <Box className="lg:col-span-4">
          <IssueDetails issue={issue} />
        </Box>
        {session && (
          <Flex direction={"column"} gap={"2"}>
            <AssigneeSelect issue={issue} />
            <IssueEditButton issue={issue} />
            <IssueDeleteButton issueId={issue.id} />
          </Flex>
        )}
      </Grid>
    </Container>
  );
};


export async function generateMetadata({ params }: IParams) {
  const issue = await fetchUser(parseInt(params.id));
  return {
    title: issue?.title,
    description: `Details of issue ${issue?.id}`,
  };
}

export default IssueDetailPage;
