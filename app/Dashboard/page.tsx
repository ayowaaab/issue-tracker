import IssueSummary from "./components/IssueSummary";
import LatestIssues from "./components/LatestIssues";
import prisma from "@/prisma/db";

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
    <>
      <IssueSummary
        closed={countClosed}
        inProgress={countProgress}
        open={countOpen}
      />
      <LatestIssues />
    </>
  );
};

export default Dashboard;
