"use client"
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    DoubleArrowLeftIcon,
    DoubleArrowRightIcon
} from "@radix-ui/react-icons";
import { Button, Flex, Text } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  count: number;
  pageSize: number;
  currentPage: number;
}
const Pagination: React.FC<Props> = ({ count, currentPage, pageSize }) => {
  const pageCount = Math.ceil(pageSize / count);
  const router = useRouter();
  const searchParams = useSearchParams();
  const changePage = (page:number)=>{
    const params = new URLSearchParams(searchParams);
    params.set('page',page.toString());
    router.push('?'+params.toString());
  }
  if (pageCount <= 1) return null;
  return (
    <>
      <Flex justify={"center"} my={"5"} align={"center"} gap={"3"}>
        <Button onClick={()=>changePage(1)} disabled={currentPage == 1} color="gray" variant="soft">
          <DoubleArrowLeftIcon />
        </Button>
        <Button onClick={()=>changePage(currentPage-1)} disabled={currentPage == 1} color="gray" variant="soft">
          <ChevronLeftIcon />
        </Button>
        <Text size={"2"}>
          Page {currentPage} of {pageCount}
        </Text>
        <Button onClick={()=>changePage(currentPage+1)} disabled={currentPage == pageCount} color="gray" variant="soft">
          <ChevronRightIcon />
        </Button>
        <Button onClick={()=>changePage(pageCount)} disabled={currentPage == pageCount} color="gray" variant="soft">
          <DoubleArrowRightIcon />
        </Button>
      </Flex>
    </>
  );
};

export default Pagination;
