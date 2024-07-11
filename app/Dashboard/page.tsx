import prisma from "@/prisma/db";
import { Container, Grid } from "@radix-ui/themes";
import { Metadata } from "next";
import IssueChart from "./components/IssueChart";
import IssueSummary from "./components/IssueSummary";
import LatestIssues from "./components/LatestIssues";

const Dashboard = async () => {
  const countOpen = await prisma.issue.count({
    where: {
      status: "OPEN",
    },
  });
  const countProgress = await prisma.issue.count({
    where: {
      status: "IN_PROGRESS",
    },
  });
  const countClosed = await prisma.issue.count({
    where: {
      status: "CLOSED",
    },
  });
  return (
    <Container>
      <Grid columns={{ initial: "1", md: "2", lg: "3" }} rows={"1"} gap={"5"}>
        <div className="col-span-1 md:col-span-2">
          <IssueSummary
            closed={countClosed}
            inProgress={countProgress}
            open={countOpen}
          />
          <IssueChart
            closed={countClosed}
            inProgress={countProgress}
            open={countOpen}
          />
        </div>
        <LatestIssues />
      </Grid>
    </Container>
  );
};

export default Dashboard;

export const metadata: Metadata = {
  title: "ITracker | Dashboard",
  description: "View a Summary of Project Issues",
};