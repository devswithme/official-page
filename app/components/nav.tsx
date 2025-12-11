"use client";

import Link from "next/link";
import Image from "next/image";
import { logEvent } from "app/lib/utils";
import { ModeToggle } from "./mode-toggle";

const navItems = {
  "/": {
    name: "Home",
  },
  "/project": {
    name: "Project",
  },
  "/event": {
    name: "Event",
  },
  "/talent": {
    name: "Talent",
  },
};

export function Navbar() {
  return (
    <aside className="mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav id="nav" className="flex justify-between">
          <div>
            <Link href="/">
              <Image
                src="/web/logo.svg"
                alt="logo"
                width={100}
                height={100}
                className="dark:hidden"
              />
              <Image
                src="/web/logo-dark.svg"
                alt="logo"
                width={100}
                height={100}
                className="hidden dark:block"
              />
            </Link>
            <div className="flex flex-row space-x-4 mt-8">
              {Object.entries(navItems).map(([path, { name }]) => {
                return (
                  <Link
                    key={path}
                    href={path}
                    onClick={() => logEvent("nav", { path })}
                  >
                    {name}
                  </Link>
                );
              })}
            </div>
          </div>
          <ModeToggle />
        </nav>
      </div>
    </aside>
  );
}
