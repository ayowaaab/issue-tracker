import React from "react";
import { Skeleton } from "@/app/components";

const IssueFormSkeleton = () => {
  return (
    <div>
      <Skeleton width={600} height={30} className="mb-2" />
      <Skeleton width={600} height={350} />
      <Skeleton width={80} height={40} />
    </div>
  );
};

export default IssueFormSkeleton;
