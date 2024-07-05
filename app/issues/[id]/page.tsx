import { Box, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import IssueEditButton from "./issueEditButton";
import IssueDetails from "./IssueDetails";

interface IParams {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: IParams) => {
  const issue = await prisma?.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue) notFound();

  return (
    <>
      <Grid columns={{ initial: "1", md: "2" }} gap={"2"}>
        <Box>
          <IssueDetails issue={issue} />
        </Box>
        <Box>
          <IssueEditButton issue={issue} />
        </Box>
      </Grid>
    </>
  );
};

export default IssueDetailPage;
