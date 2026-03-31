import type { Metadata } from "next";
import { DocPage } from "@/components/docs/DocPage";
import { CardGroup, Card } from "@/components/mdx/Card";
import { AccordionGroup, Accordion } from "@/components/mdx/Accordion";

export const metadata: Metadata = {
  title: "MCP setup overview",
  description: "How to connect ASO++ to any MCP-compatible AI tool or editor.",
};

export default function McpOverviewPage() {
  return (
    <DocPage
      title="MCP setup overview"
      description="How to connect ASO++ to any MCP-compatible AI tool or editor."
      href="/mcp-setup/overview"
    >
      <p>
        ASO++ works as an MCP server — a standardized protocol that lets AI tools call external
        services as tools. Once connected, your AI assistant can search keywords, audit your app,
        and track rankings without leaving your editor.
      </p>

      <h2 id="what-you-need">What you need</h2>
      <p>Before configuring any tool, you&apos;ll need:</p>
      <ol>
        <li>
          <strong>An ASO++ account</strong> —{" "}
          <a href="https://asopp.cc/sign-up" target="_blank" rel="noopener noreferrer">
            Sign up here
          </a>
        </li>
        <li>
          <strong>An API token</strong> — Generate one on the{" "}
          <a href="/portal/tokens">Tokens page</a>
        </li>
        <li>
          <strong>Your MCP server URL:</strong>
        </li>
      </ol>
      <pre>
        <code className="language-text">https://asopp.cc/mcp</code>
      </pre>

      <h2 id="how-it-works">How it works</h2>
      <p>
        ASO++ uses HTTP with Server-Sent Events (SSE) as the MCP transport. Most modern MCP clients
        support this out of the box. Your token is passed as a <code>Bearer</code> authorization
        header with each request.
      </p>

      <h2 id="supported-tools">Supported tools</h2>
      <CardGroup cols={2}>
        <Card title="Cursor" icon="arrow-pointer" href="/mcp-setup/cursor">
          The AI code editor with built-in MCP support
        </Card>
        <Card title="Claude Code" icon="terminal" href="/mcp-setup/claude-code">
          Anthropic&apos;s terminal-based AI coding agent
        </Card>
        <Card title="VS Code" icon="code" href="/mcp-setup/vscode">
          Via the Cline or Continue extension
        </Card>
        <Card title="Codex" icon="robot" href="/mcp-setup/codex">
          OpenAI&apos;s coding agent
        </Card>
        <Card title="Gemini CLI" icon="sparkles" href="/mcp-setup/gemini-cli">
          Google&apos;s command-line AI tool
        </Card>
        <Card title="Windsurf" icon="wind" href="/mcp-setup/windsurf">
          Codeium&apos;s AI editor
        </Card>
        <Card title="Goose" icon="feather" href="/mcp-setup/goose">
          Block&apos;s open-source AI agent
        </Card>
        <Card title="Factory" icon="industry" href="/mcp-setup/factory">
          AI software engineering platform
        </Card>
        <Card title="OpenCode" icon="brackets-curly" href="/mcp-setup/opencode">
          The open-source terminal AI coding agent
        </Card>
        <Card title="Kiro" icon="circle-nodes" href="/mcp-setup/kiro">
          AWS&apos;s AI IDE
        </Card>
      </CardGroup>

      <h2 id="troubleshooting">Troubleshooting</h2>
      <AccordionGroup>
        <Accordion title="My AI assistant says it can't find the ASO++ tools">
          Make sure your MCP server URL and token are correct. Try calling a simple tool like{" "}
          <code>get_app_details</code> with a known app ID to verify the connection. Check the{" "}
          <a href="/portal/tokens">Tokens page</a> to confirm your token is active.
        </Accordion>
        <Accordion title="I'm getting 401 Unauthorized errors">
          Your token is invalid or has been revoked. Go to the{" "}
          <a href="/portal/tokens">Tokens page</a>, revoke the old token, create a new one, and
          update your client configuration.
        </Accordion>
        <Accordion title="I'm getting quota exceeded errors">
          You&apos;ve used all your monthly calls. Check the{" "}
          <a href="/portal/usage">Usage page</a> to see your current consumption. You can upgrade
          your plan on the <a href="/portal/billing">Billing page</a> to get more calls immediately.
        </Accordion>
        <Accordion title="The connection times out">
          Some tools (like <code>aso_audit</code>) can take up to 30 seconds to complete. Make sure
          your MCP client&apos;s timeout is set to at least 60 seconds. See your tool&apos;s setup guide for
          the specific setting.
        </Accordion>
      </AccordionGroup>
    </DocPage>
  );
}
