"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export function MobileNav() {
  return (
    <div className=" md:hidden flex justify-between items-center px-4">
      <div className="flex gap-4">
        <Image
          src="/sppu-logo.png"
          width={100}
          height={100}
          alt="sppu-logo"
          className="object-contain w-20 h-20"
        />
        <Image
          src="/dot-logo.png"
          width={100}
          height={100}
          alt="dot-logo"
          className="object-contain w-20 h-20"
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuItem>Home</DropdownMenuItem>
          <DropdownMenuItem>Courses</DropdownMenuItem>
          <DropdownMenuItem>Admission</DropdownMenuItem>
          <DropdownMenuItem>About Us</DropdownMenuItem>
          <DropdownMenuItem>Contact</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
