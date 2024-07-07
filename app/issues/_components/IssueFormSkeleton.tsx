import React from "react";
import { Skeleton } from "@/app/components";
import { Container } from "@radix-ui/themes";

const IssueFormSkeleton = () => {
  return (
    <Container>
      <Skeleton width={600} height={30} className="mb-2" />
      <Skeleton width={600} height={350} />
      <Skeleton width={80} height={40} />
    </Container>
  );
};

export default IssueFormSkeleton;
