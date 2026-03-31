import { ReactNode } from "react";

interface CalloutProps {
  children: ReactNode;
}

export function Note({ children }: CalloutProps) {
  return (
    <div className="my-4 flex gap-3 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/30 p-4">
      <div className="flex-shrink-0 mt-0.5">
        <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6.123L16.07 9.8l-.997-.99-4.065 4.083-2.06-2.062-.997.999 3.052 3.047z" />
        </svg>
      </div>
      <div className="text-sm text-blue-800 dark:text-blue-200 docs-prose [&_p]:mb-0 [&_p]:text-blue-800 [&_p]:dark:text-blue-200">
        {children}
      </div>
    </div>
  );
}

export function Tip({ children }: CalloutProps) {
  return (
    <div className="my-4 flex gap-3 rounded-lg border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/30 p-4">
      <div className="flex-shrink-0 mt-0.5">
        <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a7 7 0 015.292 11.65l-.001.014c-.1.12-.3.36-.4.536a4.54 4.54 0 00-.436 1.285l-.003.015-.012.08H7.56l-.012-.08-.003-.015a4.54 4.54 0 00-.436-1.285c-.1-.176-.3-.416-.4-.536L6.708 13.65A7 7 0 0112 2zm2 15v1a2 2 0 11-4 0v-1h4z" />
        </svg>
      </div>
      <div className="text-sm text-green-800 dark:text-green-200 docs-prose [&_p]:mb-0 [&_p]:text-green-800 [&_p]:dark:text-green-200">
        {children}
      </div>
    </div>
  );
}

export function Warning({ children }: CalloutProps) {
  return (
    <div className="my-4 flex gap-3 rounded-lg border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 p-4">
      <div className="flex-shrink-0 mt-0.5">
        <svg className="w-4 h-4 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L1 21h22L12 1zm0 3.99L20.53 19H3.47L12 4.99zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z" />
        </svg>
      </div>
      <div className="text-sm text-amber-800 dark:text-amber-200 docs-prose [&_p]:mb-0 [&_p]:text-amber-800 [&_p]:dark:text-amber-200">
        {children}
      </div>
    </div>
  );
}

export function Info({ children }: CalloutProps) {
  return (
    <div className="my-4 flex gap-3 rounded-lg border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/30 p-4">
      <div className="flex-shrink-0 mt-0.5">
        <svg className="w-4 h-4 text-purple-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z" />
        </svg>
      </div>
      <div className="text-sm text-purple-800 dark:text-purple-200 docs-prose [&_p]:mb-0 [&_p]:text-purple-800 [&_p]:dark:text-purple-200">
        {children}
      </div>
    </div>
  );
}
