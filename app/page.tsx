import { Box, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";

const page = () => {
  return (
    <>
      <Box className="w-4/5 mx-auto flex flex-col gap-10 items-center">
        <Heading size={"9"}>Welcome To Our Website</Heading>
        <Image alt="logo" src={"/IssueLogo.png"} width={286} height={286} />
        <h1 className="mt-5 font-medium text-[#211F26] text-xl">
          Our Issue Tracker project is designed to streamline the process of
          managing and resolving bugs and tasks. It provides a user-friendly
          interface for reporting, tracking, and prioritizing issues. Key
          features include real-time updates ⏱️, customizable workflows ⚙️, and
          comprehensive reporting tools 📊, all aimed at enhancing team
          collaboration and project efficiency.
        </h1>
      </Box>
    </>
  );
};

export default page;
