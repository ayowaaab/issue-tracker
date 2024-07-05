import { issue } from "@prisma/client";
import { Heading, Flex, Badge, Card, Text } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";

const IssueDetails = ({ issue }: { issue: issue }) => {
  return (
    <>
      <Heading mb={"2"}>{issue.title}</Heading>
      <Flex gap={"3"}>
        <Badge>{issue.status}</Badge>
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose" mt={"4"}>
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </>
  );
};

export default IssueDetails;
