"use client";

import { useState, Children, isValidElement } from "react";

interface TabProps {
  title: string;
  children: React.ReactNode;
}

interface TabsProps {
  children: React.ReactNode;
}

export function Tabs({ children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = Children.toArray(children).filter(
    (child): child is React.ReactElement<TabProps> =>
      isValidElement(child) && (child.props as TabProps).title !== undefined
  );

  if (tabs.length === 0) return null;

  return (
    <div className="my-6">
      <div className="flex border-b border-gray-200 dark:border-gray-700 mb-4 overflow-x-auto">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors border-b-2 -mb-px ${
              activeTab === i
                ? "border-orange-500 text-orange-600 dark:text-orange-400"
                : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            }`}
          >
            {tab.props.title}
          </button>
        ))}
      </div>
      <div className="docs-prose">{tabs[activeTab].props.children}</div>
    </div>
  );
}

export function Tab({ title, children }: TabProps) {
  return <div data-title={title}>{children}</div>;
}
