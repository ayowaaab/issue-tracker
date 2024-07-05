import { Box } from "@radix-ui/themes";
import { Skeleton } from "@/app/Components";


const IssueLoadingDetail = async () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Skeleton height={"20rem"} />
    </Box>
  );
};

export default IssueLoadingDetail;
