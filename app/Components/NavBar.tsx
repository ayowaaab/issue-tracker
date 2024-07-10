"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classnames from "classnames";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { Skeleton } from "@/app/components";
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes";

const NavBar = () => {
  return (
    <Container>
      <nav className="flex justify-between items-center space-x-5 mb-5 h-14 px-5 border-b-[1px] ">
        <Flex align={"center"}>
          <NavLinks />
        </Flex>
        <AuthStatus />
      </nav>
    </Container>
  );
};

const AuthStatus = () => {
  const { status, data: session } = useSession();
  if (status === "loading") return <Skeleton width="3rem" height="1.25rem"  />;
  if (status === "unauthenticated")
    return <Link href="/api/auth/signin" className="nav-link">Login</Link>;

  return (
    <Box>
      {status === "authenticated" && (
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Avatar
              className="cursor-pointer"
              size={"2"}
              radius="full"
              src={session.user!.image!}
              fallback="?"
            />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Label>
              <Text>{session.user!.email}</Text>
            </DropdownMenu.Label>
            <DropdownMenu.Item>
              <Link href="/api/auth/signout">Logout</Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      )}
    </Box>
  );
};

const NavLinks = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  const currentPath = usePathname();
  return (
    <Flex gap={"3"} align={"end"}>
      <Link href="/" className="mr-6">
        <Image src="/IssueLogo.png" alt="logo" height={100} width={100} />
      </Link>
      <ul className="flex space-x-5">
        {links.map((link) => (
          <li className="p-0 m-0" key={link.href}>
            <Link
              className={classnames({
                "nav-link": link.href !== currentPath,
                "text-gray-900 font-semibold": link.href === currentPath,
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </Flex>
  );
};
export default NavBar;
