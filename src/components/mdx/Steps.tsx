interface StepProps {
  title: string;
  children: React.ReactNode;
}

let stepCounter = 0;

export function Steps({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 space-y-0 relative">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 -z-0" />
      {children}
    </div>
  );
}

export function Step({ title, children }: StepProps) {
  return (
    <div className="relative flex gap-4 pb-6 last:pb-0">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 dark:bg-orange-600 flex items-center justify-center z-10 text-white text-sm font-bold shadow-sm">
        <span>•</span>
      </div>
      <div className="flex-1 pt-1 min-w-0">
        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-sm leading-none">
          {title}
        </h4>
        <div className="text-sm text-gray-700 dark:text-gray-300 docs-prose">
          {children}
        </div>
      </div>
    </div>
  );
}
