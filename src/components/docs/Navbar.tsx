"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MenuIcon, CloseIcon } from "@/components/mdx/Icons";
import { navigationTabs } from "@/lib/navigation";
import { usePathname } from "next/navigation";

export function Navbar({
  onMenuToggle,
  menuOpen,
}: {
  onMenuToggle: () => void;
  menuOpen: boolean;
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[60px] bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between h-full px-4 lg:px-6 max-w-screen-2xl mx-auto">
        {/* Left: hamburger + logo */}
        <div className="flex items-center gap-3">
          <button
            className="lg:hidden p-2 rounded-lg text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={onMenuToggle}
            aria-label="Toggle navigation"
          >
            {menuOpen ? (
              <CloseIcon className="w-5 h-5" />
            ) : (
              <MenuIcon className="w-5 h-5" />
            )}
          </button>
          <Link href="/" className="flex items-center gap-2">
            {mounted ? (
              <Image
                src={
                  resolvedTheme === "dark"
                    ? "/logo/dark.svg"
                    : "/logo/light.svg"
                }
                alt="ASO++"
                width={80}
                height={18}
                className="h-6 w-auto"
                priority
              />
            ) : (
              <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            )}
          </Link>
        </div>

        {/* Right: support + CTA + theme */}
        <div className="flex items-center gap-2">
          <a
            href="mailto:support@asopp.cc"
            className="hidden sm:inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors px-2 py-1"
          >
            Support
          </a>
          {/* <ThemeToggle /> */}
          <a
            href="https://asopp.cc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-lg bg-orange-500 hover:bg-orange-600 text-white transition-colors"
          >
            Open portal
          </a>
        </div>
      </div>
    </header>
  );
}
