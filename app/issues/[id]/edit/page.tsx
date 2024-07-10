import prisma from "@/prisma/db";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import React from "react";
import IssueFormSkeleton from "../../_components/IssueFormSkeleton";


const   IssueForm = dynamic(()=> import("../../_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});



const EditIssuePage = async ({ params }: { params: { id: string } }) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!issue) notFound();

  return (
    <>
      <IssueForm issue={issue} />
    </>
  );
};

export default EditIssuePage;
