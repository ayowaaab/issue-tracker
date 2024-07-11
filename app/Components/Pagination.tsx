import {
    ChevronLeftIcon,
    ChevronRightIcon,
    DoubleArrowLeftIcon,
    DoubleArrowRightIcon
} from "@radix-ui/react-icons";
import { Button, Flex, Text } from "@radix-ui/themes";

interface Props {
  count: number;
  pageSize: number;
  currentPage: number;
}
const Pagination: React.FC<Props> = ({ count, currentPage, pageSize }) => {
  const pageCount = Math.ceil(pageSize / count);
  if (pageCount <= 1) return null;
  return (
    <>
      <Flex align={"center"} gap={"3"}>
        <Button disabled={currentPage == 1} color="gray" variant="soft">
          <DoubleArrowLeftIcon />
        </Button>
        <Button disabled={currentPage == 1} color="gray" variant="soft">
          <ChevronLeftIcon />
        </Button>
        <Text size={"2"}>
          Page {currentPage} of {pageCount}
        </Text>
        <Button disabled={currentPage == pageCount} color="gray" variant="soft">
          <ChevronRightIcon />
        </Button>
        <Button disabled={currentPage == pageCount} color="gray" variant="soft">
          <DoubleArrowRightIcon />
        </Button>
      </Flex>
    </>
  );
};

export default Pagination;
