export interface NavPage {
  slug: string;
  label: string;
  href: string;
}

export interface NavGroup {
  group: string;
  pages: NavPage[];
}

export interface NavTab {
  tab: string;
  groups: NavGroup[];
}

export interface NavAnchor {
  anchor: string;
  href: string;
  icon: string;
}

export const siteConfig = {
  name: "ASO++",
  description:
    "App Store Optimization data as MCP tools — directly inside your AI coding environment.",
  primaryColor: "#F97316",
  primaryColorLight: "#FB923C",
  primaryColorDark: "#EA6C0A",
  portalUrl: "https://asopp.cc",
  mcpUrl: "https://asopp.cc/mcp",
  supportEmail: "support@asopp.cc",
  socials: {
    x: "https://x.com/asopp",
    github: "https://github.com/asopp",
  },
};

export const navigationTabs: NavTab[] = [
  {
    tab: "Guides",
    groups: [
      {
        group: "Getting started",
        pages: [
          { slug: "index", label: "Introduction", href: "/" },
          { slug: "quickstart", label: "Quickstart", href: "/quickstart" },
        ],
      },
      {
        group: "Portal",
        pages: [
          {
            slug: "portal/dashboard",
            label: "Dashboard",
            href: "/portal/dashboard",
          },
          { slug: "portal/usage", label: "Usage", href: "/portal/usage" },
          { slug: "portal/tokens", label: "Tokens", href: "/portal/tokens" },
          { slug: "portal/billing", label: "Billing", href: "/portal/billing" },
          { slug: "portal/profile", label: "Profile", href: "/portal/profile" },
        ],
      },
      {
        group: "MCP setup",
        pages: [
          {
            slug: "mcp-setup/overview",
            label: "Overview",
            href: "/mcp-setup/overview",
          },
          {
            slug: "mcp-setup/cursor",
            label: "Cursor",
            href: "/mcp-setup/cursor",
          },
          {
            slug: "mcp-setup/claude-code",
            label: "Claude Code",
            href: "/mcp-setup/claude-code",
          },
          {
            slug: "mcp-setup/vscode",
            label: "VS Code",
            href: "/mcp-setup/vscode",
          },
          {
            slug: "mcp-setup/codex",
            label: "Codex",
            href: "/mcp-setup/codex",
          },
          {
            slug: "mcp-setup/gemini-cli",
            label: "Gemini CLI",
            href: "/mcp-setup/gemini-cli",
          },
          {
            slug: "mcp-setup/windsurf",
            label: "Windsurf",
            href: "/mcp-setup/windsurf",
          },
          { slug: "mcp-setup/goose", label: "Goose", href: "/mcp-setup/goose" },
          {
            slug: "mcp-setup/factory",
            label: "Factory",
            href: "/mcp-setup/factory",
          },
          {
            slug: "mcp-setup/opencode",
            label: "OpenCode",
            href: "/mcp-setup/opencode",
          },
          { slug: "mcp-setup/kiro", label: "Kiro", href: "/mcp-setup/kiro" },
        ],
      },
    ],
  },
];

export const globalAnchors: NavAnchor[] = [
  {
    anchor: "Dashboard",
    href: "https://asopp.cc/dashboard",
    icon: "gauge",
  },
  {
    anchor: "Support",
    href: "mailto:support@asopp.cc",
    icon: "envelope",
  },
];

export function getAllPages(): NavPage[] {
  return navigationTabs.flatMap((tab) =>
    tab.groups.flatMap((group) => group.pages)
  );
}

export function getAdjacentPages(
  currentHref: string
): { prev: NavPage | null; next: NavPage | null } {
  const allPages = getAllPages();
  const currentIndex = allPages.findIndex((p) => p.href === currentHref);
  return {
    prev: currentIndex > 0 ? allPages[currentIndex - 1] : null,
    next: currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null,
  };
}
