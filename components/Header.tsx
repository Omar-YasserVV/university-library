"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex flex-row my-10 w-full justify-between gap-5">
      <Link href="/">
        <Image src="/icons/logo.svg" alt="Logo" width={40} height={40}></Image>
      </Link>

      <ul className="flex flex-row items-center gap-8">
        <li>
          <Link
            href="/library"
            className={cn(
              pathname === "/library" ? "text-light-200" : "text-light-100"
            )}
          >
            library
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
