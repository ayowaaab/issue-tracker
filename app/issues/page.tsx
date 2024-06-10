import React from "react";
import Filter from "../Components/Filter";
import IssuesTable from "../Components/IssuesTable";
import delay from "delay";
import IssueAction from "../Components/IssueAction";

const IssuePage = async () => {
  await delay(2000);
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
