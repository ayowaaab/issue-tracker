"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classnames from "classnames";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { Box, Container, Flex } from "@radix-ui/themes";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  const currentPath = usePathname();
  const { status, data: session } = useSession();
  return (
    <Container>
      <nav className="flex justify-between items-center space-x-5 mb-5 h-14 px-5 border-b-[1px] ">
        <Flex align={"center"}>
          <Link href="/" className="mr-6">
            <Image src="/IssueLogo.png" alt="logo" height={100} width={100} />
          </Link>
          <ul className="flex space-x-5">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  className={classnames({
                    "text-gray-500": link.href !== currentPath,
                    "text-gray-900 font-semibold": link.href === currentPath,
                    "hover:text-gray-900 transition-colors": true,
                  })}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Flex>
        <Box>
          {status === "authenticated" && (
            <Link href="/api/auth/signout">Logout</Link>
          )}
          {status === "unauthenticated" && (
            <Link href="/api/auth/signin">Login</Link>
          )}
        </Box>
      </nav>
    </Container>
  );
};

export default NavBar;
