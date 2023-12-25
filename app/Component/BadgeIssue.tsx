import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

const statusMap: Record<
  Status,
  { label: string; color: "green" | "violet" | "red" }
> = {
  OPEN: { label: "open", color: "green" },
  IN_PROGRESS: { label: "In Progresse", color: "violet" },
  CLOSED: { label: "Closed", color: "red" },
};

const BadgeIssue = ({ status }: { status: Status }) => {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
};

export default BadgeIssue;
