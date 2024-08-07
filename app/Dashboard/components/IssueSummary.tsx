import { Status } from "@prisma/client";
import { Card, Flex, Text, Container } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
interface Props {
  open: number;
  inProgress: number;
  closed: number;
}
const IssueSummary: React.FC<Props> = ({ closed, inProgress, open }) => {
  const statuses: { label: string; value: number; status: Status }[] = [
    { label: "Open Issues", value: open, status: "OPEN" },
    { label: "In Progress Issues", value: inProgress, status: "IN_PROGRESS" },
    { label: "Closed Issues", value: closed, status: "CLOSED" },
  ];
  return (
    <Container mb={"5"}>
      <Flex gap={"3"} justify={{initial:"center",lg:"start"}} >
        {statuses.map((val) => (
          <Link href={`/issues?status=${val.status}`}>
            <Card className="min-w-full">
              <Flex direction={"column"}>
                <Text>{val.label}</Text>
                <Text size={"5"} className="font-bold">
                  {val.value}
                </Text>
              </Flex>
            </Card>
          </Link>
        ))}
      </Flex>
    </Container>
  );
};

export default IssueSummary;
