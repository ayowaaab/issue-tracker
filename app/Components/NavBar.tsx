"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classnames from "classnames";
import Image from "next/image";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  const currentPath = usePathname();
  return (
    <nav className="flex items-center space-x-5 mb-5 h-14 px-5 ">
      <Link href="/" className="mr-6">
        <Image
          src="/IssueLogo.png"
          alt="logo"
          height={100}
          width={100}
        />
      </Link>
      <ul className="flex space-x-5">
        {links.map((link) => (
          <Link
            key={link.href}
            className={classnames({
              "text-gray-500": link.href !== currentPath,
              "text-gray-900 font-semibold": link.href === currentPath,
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
