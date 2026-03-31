import Link from "next/link";
import { ChevronRightIcon } from "@/components/mdx/Icons";
import { NavPage } from "@/lib/navigation";

interface PageNavProps {
  prev: NavPage | null;
  next: NavPage | null;
}

export function PageNav({ prev, next }: PageNavProps) {
  if (!prev && !next) return null;

  return (
    <div className="flex items-center justify-between gap-4 mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
      {prev ? (
        <Link
          href={prev.href}
          className="group flex flex-col gap-0.5 text-sm max-w-[calc(50%-8px)]"
        >
          <span className="text-xs text-gray-400 dark:text-gray-500">Previous</span>
          <span className="flex items-center gap-1 text-gray-700 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors font-medium">
            <ChevronRightIcon className="w-3.5 h-3.5 rotate-180 flex-shrink-0" />
            <span className="truncate">{prev.label}</span>
          </span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={next.href}
          className="group flex flex-col gap-0.5 text-sm items-end max-w-[calc(50%-8px)]"
        >
          <span className="text-xs text-gray-400 dark:text-gray-500">Next</span>
          <span className="flex items-center gap-1 text-gray-700 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors font-medium">
            <span className="truncate">{next.label}</span>
            <ChevronRightIcon className="w-3.5 h-3.5 flex-shrink-0" />
          </span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
