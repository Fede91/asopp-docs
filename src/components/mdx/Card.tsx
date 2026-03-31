import Link from "next/link";
import {
  BoltIcon,
  GaugeIcon,
  PlugIcon,
  EnvelopeIcon,
  TerminalIcon,
  CodeIcon,
  WindIcon,
  SparklesIcon,
  RobotIcon,
  FeatherIcon,
  IndustryIcon,
  BracketsIcon,
  CircleNodesIcon,
  ArrowPointerIcon,
  StarIcon,
  RocketIcon,
  HandWaveIcon,
} from "./Icons";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  bolt: BoltIcon,
  gauge: GaugeIcon,
  plug: PlugIcon,
  envelope: EnvelopeIcon,
  terminal: TerminalIcon,
  code: CodeIcon,
  wind: WindIcon,
  sparkles: SparklesIcon,
  robot: RobotIcon,
  feather: FeatherIcon,
  industry: IndustryIcon,
  "brackets-curly": BracketsIcon,
  "circle-nodes": CircleNodesIcon,
  "arrow-pointer": ArrowPointerIcon,
  star: StarIcon,
  rocket: RocketIcon,
  "hand-wave": HandWaveIcon,
};

interface CardProps {
  title: string;
  icon?: string;
  href?: string;
  children?: React.ReactNode;
}

export function Card({ title, icon, href, children }: CardProps) {
  const IconComponent = icon ? iconMap[icon] : null;

  const content = (
    <div
      className={`group relative flex flex-col gap-2 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 h-full transition-all duration-200 ${
        href
          ? "hover:border-orange-400 dark:hover:border-orange-500 hover:shadow-sm cursor-pointer"
          : ""
      }`}
    >
      {IconComponent && (
        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-orange-50 dark:bg-orange-950/30">
          <IconComponent className="w-4 h-4 text-orange-500" />
        </div>
      )}
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm leading-snug group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
          {title}
        </h3>
        {children && (
          <div className="mt-1 text-sm text-gray-600 dark:text-gray-400 leading-relaxed docs-prose">
            {children}
          </div>
        )}
      </div>
      {href && (
        <div className="mt-auto pt-1">
          <span className="text-xs text-orange-500 dark:text-orange-400 font-medium group-hover:underline">
            Learn more →
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full no-underline">
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className="block h-full no-underline">
        {content}
      </Link>
    );
  }

  return content;
}

interface CardGroupProps {
  cols?: number;
  children: React.ReactNode;
}

export function CardGroup({ cols = 2, children }: CardGroupProps) {
  const colClasses: Record<number, string> = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${colClasses[cols] || "grid-cols-1 sm:grid-cols-2"} gap-3 my-6`}>
      {children}
    </div>
  );
}
