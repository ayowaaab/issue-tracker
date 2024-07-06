import prisma from "@/prisma/db";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import React from "react";
import IssueFormSkeleton from "../../_components/IssueFormSkeleton";

const IssueForm = dynamic(import("../../_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

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
