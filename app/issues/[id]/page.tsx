import prisma from "@/prisma/db";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import IssueEditButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import IssueDeleteButton from "./DeleteIssueButton";

interface IParams {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: IParams) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue) notFound();

  return (
    <>
      <Grid columns={{ initial: "1", md: "5" }} gap={"2"}>
        <Box className="lg:col-span-4">
          <IssueDetails issue={issue} />
        </Box>
        <Flex direction={"column"} gap={"2"}>
          <IssueEditButton issue={issue} />
          <IssueDeleteButton issueId={issue.id} />
        </Flex>
      </Grid>
    </>
  );
};

export default IssueDetailPage;
