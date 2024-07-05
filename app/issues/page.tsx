import Filter from "../Components/Filter";
import IssueAction from "../Components/IssueAction";
import IssuesTable from "../Components/IssuesTable";

const IssuePage = async () => {
  return (
    <>
      <div className="flex justify-between mb-5">
        <Filter />
        <IssueAction />
      </div>
      <IssuesTable />
    </>
  );
};

export default IssuePage;
