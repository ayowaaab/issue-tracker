import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import Filter from "../Components/Filter";
import IssuesTable from "../Components/IssuesTable";

const IssuePage = () => {
  return (
    <>
      <div className="flex justify-between mb-5">
        <Filter />
        <Button>
          <Link href="/issues/new">Set Issue</Link>
        </Button>
      </div>
      <IssuesTable />
    </>
  );
};

export default IssuePage;
