import type { Metadata } from "next";
import Link from "next/link";
import { TableOfContents } from "@/components/docs/TableOfContents";
import { Footer } from "@/components/docs/Footer";
import { CardGroup, Card } from "@/components/mdx/Card";

export const metadata: Metadata = {
  title: "ASO++ — Introduction",
  description:
    "App Store Optimization data as MCP tools — directly inside your AI coding environment.",
};

const tools = [
  { name: "search_keywords", desc: "Find ASO keywords for a given query and country" },
  { name: "get_keyword_popularity", desc: "Get popularity score and trend for a keyword" },
  { name: "get_app_ranking", desc: "Check where your app ranks for a keyword" },
  { name: "get_app_details", desc: "Fetch app metadata: title, description, ratings" },
  { name: "get_competitor_keywords", desc: "Discover keywords a competitor ranks for" },
  { name: "get_app_reviews", desc: "Retrieve recent reviews for any app" },
  { name: "track_keyword", desc: "Start tracking a keyword for your app" },
  { name: "get_tracking_history", desc: "View ranking history for tracked keywords" },
  { name: "aso_audit", desc: "Run a full ASO audit and get prioritized recommendations" },
];

export default function HomePage() {
  return (
    <>
      <TableOfContents />
      <div className="docs-content max-w-3xl mx-auto px-6 py-10">
        {/* Hero */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50 mb-3 leading-tight">
            ASO++
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed">
            App Store Optimization data as MCP tools — directly inside your AI coding environment.
          </p>
        </div>

        <h2 id="what-is-asopp" className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-gray-50 scroll-mt-20">
          What is ASO++?
        </h2>
        <p className="text-base leading-7 text-gray-700 dark:text-gray-300 mb-6">
          ASO++ is an MCP server that brings App Store Optimization data directly into the AI tools
          you already use — Cursor, Claude Code, VS Code, and more. Instead of switching between
          dashboards, you can research keywords, audit your app, and track rankings without leaving
          your editor.
        </p>

        <CardGroup cols={2}>
          <Card title="Quickstart" icon="bolt" href="/quickstart">
            Create an account, generate a token, and connect to your first MCP client in under 5
            minutes.
          </Card>
          <Card title="Portal" icon="gauge" href="/portal/dashboard">
            Learn how the dashboard, usage tracking, token management, and billing work.
          </Card>
          <Card title="MCP setup" icon="plug" href="/mcp-setup/overview">
            Step-by-step instructions for every supported AI tool and editor.
          </Card>
          <Card title="Support" icon="envelope" href="mailto:support@asopp.cc">
            Reach out if you run into anything — we reply fast.
          </Card>
        </CardGroup>

        <h2 id="available-tools" className="text-2xl font-semibold mt-10 mb-4 text-gray-900 dark:text-gray-50 scroll-mt-20">
          Available MCP tools
        </h2>
        <p className="text-base leading-7 text-gray-700 dark:text-gray-300 mb-4">
          Once connected, your AI assistant can call these tools on your behalf:
        </p>

        <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <th className="text-left font-semibold text-gray-900 dark:text-gray-100 py-3 px-4 whitespace-nowrap">
                  Tool
                </th>
                <th className="text-left font-semibold text-gray-900 dark:text-gray-100 py-3 px-4">
                  What it does
                </th>
              </tr>
            </thead>
            <tbody>
              {tools.map((tool, i) => (
                <tr
                  key={tool.name}
                  className={`border-b last:border-0 border-gray-100 dark:border-gray-800 ${
                    i % 2 === 0 ? "" : "bg-gray-50/50 dark:bg-gray-900/30"
                  }`}
                >
                  <td className="py-2.5 px-4">
                    <code className="bg-orange-50 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400 px-1.5 py-0.5 rounded text-xs font-mono whitespace-nowrap">
                      {tool.name}
                    </code>
                  </td>
                  <td className="py-2.5 px-4 text-gray-700 dark:text-gray-300">{tool.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="supported-tools" className="text-2xl font-semibold mt-10 mb-4 text-gray-900 dark:text-gray-50 scroll-mt-20">
          Supported tools and editors
        </h2>

        <CardGroup cols={3}>
          <Card title="Cursor" icon="arrow-pointer" href="/mcp-setup/cursor" />
          <Card title="Claude Code" icon="terminal" href="/mcp-setup/claude-code" />
          <Card title="VS Code" icon="code" href="/mcp-setup/vscode" />
          <Card title="Codex" icon="robot" href="/mcp-setup/codex" />
          <Card title="Gemini CLI" icon="sparkles" href="/mcp-setup/gemini-cli" />
          <Card title="Windsurf" icon="wind" href="/mcp-setup/windsurf" />
          <Card title="Goose" icon="feather" href="/mcp-setup/goose" />
          <Card title="Factory" icon="industry" href="/mcp-setup/factory" />
          <Card title="OpenCode" icon="brackets-curly" href="/mcp-setup/opencode" />
          <Card title="Kiro" icon="circle-nodes" href="/mcp-setup/kiro" />
        </CardGroup>

        {/* CTA */}
        <div className="mt-10 p-6 rounded-xl border border-orange-200 dark:border-orange-900/50 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Ready to get started?
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Connect ASO++ to your AI tool in under 5 minutes. No configuration headaches.
          </p>
          <Link
            href="/quickstart"
            className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-orange-500 hover:bg-orange-600 text-white transition-colors no-underline"
          >
            Get started →
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
}
