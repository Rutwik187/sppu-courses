"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Constructive Finance",
    href: "/docs/primitives/alert-dialog",
    description:
      "Real Value offers Construction Finance to Real Estate Developers for projects in select cities.",
  },
  {
    title: "Loan Against Property",
    href: "/docs/primitives/hover-card",
    description:
      "Real Value offers Construction Finance to Real Estate Developers for projects in select cities.",
  },
  {
    title: "Unsecured Business Loan",
    href: "/docs/primitives/progress",
    description:
      "Real Value offers Construction Finance to Real Estate Developers for projects in select cities.",
  },
  {
    title: "SME Loans",
    href: "/docs/primitives/scroll-area",
    description:
      "Real Value offers Construction Finance to Real Estate Developers for projects in select cities.",
  },
  {
    title: "Life Insurance",
    href: "/docs/primitives/tabs",
    description:
      "Real Value offers Construction Finance to Real Estate Developers for projects in select cities.",
  },
  {
    title: "Home Loan",
    href: "/docs/primitives/tooltip",
    description:
      "Real Value offers Construction Finance to Real Estate Developers for projects in select cities.",
  },
];

export function Navbar() {
  return (
    <div className="hidden max-w-7xl mx-auto px-4 md:flex items-center justify-between my-4  ">
      <div className="flex h-5 items-center space-x-4">
        <Image
          quality={100}
          src="/sppu-logo.png"
          height={80}
          width={80}
          alt="logo"
        ></Image>

        <NavigationMenu className="max-w-max  ">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/courses" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Courses
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Admission
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <Image
        quality={100}
        src="/dot-logo.png"
        height={80}
        width={80}
        alt="logo"
      ></Image>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
