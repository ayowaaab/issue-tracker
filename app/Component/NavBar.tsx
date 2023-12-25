"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoLogoIonitron } from "react-icons/io";
import classnames from "classnames";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  const currentPath = usePathname();
  return (
    <nav className="flex items-center space-x-5 border-b-2 mb-5 h-14 px-5 ">
      <Link href="/">
        <IoLogoIonitron />
      </Link>
      <ul className="flex space-x-5">
        {links.map((link) => (
          <Link
            key={link.href}
            className={classnames({
              "text-gray-500": link.href !== currentPath,
              "text-gray-900": link.href === currentPath,
              "hover:text-gray-900 transition-colors": true,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
