import Link from "next/link";
import { XIcon, GithubIcon } from "@/components/mdx/Icons";
import { siteConfig } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-16 py-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} ASO++. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.socials.x}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            aria-label="X (Twitter)"
          >
            <XIcon className="w-4 h-4" />
          </a>
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
