import { Container } from "@radix-ui/themes";
import Filter from "../components/Filter";
import IssueAction from "../components/IssueAction";
import IssuesTable from "../components/IssuesTable";

const IssuePage = async () => {
  return (
    <Container>

      <div className="flex justify-between mb-5">
        <Filter />
        <IssueAction />
      </div>
      <IssuesTable />
    </Container>
  );
};
export const dynamic = "force-dynamic";
export default IssuePage;
