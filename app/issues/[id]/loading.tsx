import { Skeleton } from "@/app/components";
import { Box, Container } from "@radix-ui/themes";

const IssueLoadingDetail = async () => {
  return (
    <Container className="max-w-xl">
      <Skeleton />
      <Skeleton height={"20rem"} />
    </Container>
  );
};

export default IssueLoadingDetail;
