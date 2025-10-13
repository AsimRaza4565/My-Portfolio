"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Menu, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-800/80 backdrop-blur-md">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-8 sm:py-3 xs:py-1">
        {/* Logo */}
        <a href="#home">
          <div className="flex items-center w-[150] h-[84]">
            <Image
              src="/Asim.png"
              alt="Author Asim-Raza"
              width={136}
              height={36}
            />
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent className="flex gap-2 text-blue-700">
                  <Link href="#home">
                    <NavigationMenuLink>Home</NavigationMenuLink>
                  </Link>
                  <Link href="#background">
                    <NavigationMenuLink>Background</NavigationMenuLink>
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Expertise</NavigationMenuTrigger>
                <NavigationMenuContent className="flex gap-2 text-blue-700">
                  <Link href="#skills">
                    <NavigationMenuLink>Skills</NavigationMenuLink>
                  </Link>
                  <Link href="#services">
                    <NavigationMenuLink>Services</NavigationMenuLink>
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Work</NavigationMenuTrigger>
                <NavigationMenuContent className="flex gap-2 text-blue-700">
                  <Link href="#projects">
                    <NavigationMenuLink>Projects</NavigationMenuLink>
                  </Link>
                  <Link href="#experience">
                    <NavigationMenuLink>Experience</NavigationMenuLink>
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="#blogs"
                  className="rounded-sm px-4 py-2 text-md font-medium mr-4 text-white hover:text-gray-200 hover:underline"
                >
                  Blogs
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="#contact"
                  className="rounded-sm bg-background px-4 py-2 text-md font-medium hover:bg-gray-200 hover:text-accent-foreground disabled:pointer-events-none"
                >
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu (Sheet + Collapsibles) */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button title="Menu" className="p-2 text-white">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="bg-gray-900 text-white border-l border-gray-700 w-[200px]"
            >
              <nav className="flex flex-col gap-5 mt-12 text-lg px-10">
                {/* About Section */}
                <Collapsible className="">
                  <CollapsibleTrigger className="flex justify-between items-center font-semibold w-full">
                    About
                    <ChevronDown className="w-5 h-5" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 space-y-1">
                    <Link href="#home" className="block hover:underline">
                      Home
                    </Link>
                    <Link href="#background" className="block hover:underline">
                      Background
                    </Link>
                  </CollapsibleContent>
                </Collapsible>

                {/* Expertise Section */}
                <Collapsible>
                  <CollapsibleTrigger className="flex justify-between items-center font-semibold w-full">
                    Expertise
                    <ChevronDown className="w-5 h-5" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 space-y-1">
                    <Link href="#skills" className="block hover:underline">
                      Skills
                    </Link>
                    <Link href="#services" className="block hover:underline">
                      Services
                    </Link>
                  </CollapsibleContent>
                </Collapsible>

                {/* Work Section */}
                <Collapsible>
                  <CollapsibleTrigger className="flex justify-between items-center font-semibold w-full">
                    Work
                    <ChevronDown className="w-5 h-5" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 space-y-1">
                    <Link href="#projects" className="block hover:underline">
                      Projects
                    </Link>
                    <Link href="#experience" className="block hover:underline">
                      Experience
                    </Link>
                  </CollapsibleContent>
                </Collapsible>

                {/* Direct Links */}
                <Link href="#blogs" className="font-semibold hover:underline">
                  Blogs
                </Link>
                <Link
                  href="#contact"
                  className="font-semibold bg-white text-black px-3 py-1 rounded-md w-fit"
                >
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
