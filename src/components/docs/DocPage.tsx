import { TableOfContents } from "@/components/docs/TableOfContents";
import { Footer } from "@/components/docs/Footer";
import { PageNav } from "@/components/docs/PageNav";
import { getAdjacentPages } from "@/lib/navigation";
import { ReactNode } from "react";

interface DocPageProps {
  title: string;
  description?: string;
  href: string;
  children: ReactNode;
}

export function DocPage({ title, description, href, children }: DocPageProps) {
  const { prev, next } = getAdjacentPages(href);

  return (
    <>
      <TableOfContents />
      <div className="docs-content max-w-3xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-2">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
              {description}
            </p>
          )}
        </div>
        <div className="docs-prose">{children}</div>
        <PageNav prev={prev} next={next} />
        <Footer />
      </div>
    </>
  );
}
