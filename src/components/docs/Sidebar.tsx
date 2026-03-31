"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationTabs, globalAnchors } from "@/lib/navigation";
import { ExternalLinkIcon } from "@/components/mdx/Icons";

interface SidebarProps {
  open?: boolean;
  onClose?: () => void;
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname === href) return true;
    return false;
  };

  const content = (
    <nav className="h-full overflow-y-auto py-6 px-4">
      {navigationTabs.map((tab) => (
        <div key={tab.tab} className="mb-6">
          {navigationTabs.length > 1 && (
            <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3 px-2">
              {tab.tab}
            </div>
          )}
          {tab.groups.map((group) => (
            <div key={group.group} className="mb-5">
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5 px-2">
                {group.group}
              </div>
              <ul className="space-y-0.5">
                {group.pages.map((page) => (
                  <li key={page.slug}>
                    <Link
                      href={page.href}
                      onClick={onClose}
                      className={`flex items-center px-2 py-1.5 rounded-md text-sm transition-colors ${
                        isActive(page.href)
                          ? "bg-orange-50 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400 font-medium"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100"
                      }`}
                    >
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}

      {/* Global anchors */}
      <div className="border-t border-gray-200 dark:border-gray-800 pt-4 mt-2">
        {globalAnchors.map((anchor) => (
          <a
            key={anchor.anchor}
            href={anchor.href}
            target={anchor.href.startsWith("http") ? "_blank" : undefined}
            rel={anchor.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            {anchor.anchor}
            {anchor.href.startsWith("http") && (
              <ExternalLinkIcon className="w-3 h-3 ml-auto opacity-50" />
            )}
          </a>
        ))}
      </div>
    </nav>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col fixed top-[60px] left-0 bottom-0 w-[260px] bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 z-30">
        {content}
      </aside>

      {/* Mobile sidebar overlay */}
      {open && (
        <>
          <div
            className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <aside className="lg:hidden fixed top-[60px] left-0 bottom-0 w-[280px] bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 z-50 overflow-y-auto">
            {content}
          </aside>
        </>
      )}
    </>
  );
}
