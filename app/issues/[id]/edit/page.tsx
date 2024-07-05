import React from "react";
import IssueForm from "../../_components/IssueForm";
import prisma from "@/prisma/db";
import { notFound } from "next/navigation";
interface IParams {
  params: { id: string };
}

const EditIssuePage: React.FC<IParams> = async ({ params }) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!issue) notFound();

  return (
    <div>
      <IssueForm issue={issue} />
    </div>
  );
};

export default EditIssuePage;
