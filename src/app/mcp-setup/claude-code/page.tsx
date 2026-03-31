import type { Metadata } from "next";
import { DocPage } from "@/components/docs/DocPage";
import { Steps, Step } from "@/components/mdx/Steps";
import { AccordionGroup, Accordion } from "@/components/mdx/Accordion";
import { Tip } from "@/components/mdx/Callouts";

export const metadata: Metadata = {
  title: "Claude Code",
  description: "Connect ASO++ to Claude Code using the MCP server configuration.",
};

export default function ClaudeCodePage() {
  return (
    <DocPage
      title="Claude Code"
      description="Connect ASO++ to Claude Code using the MCP server configuration."
      href="/mcp-setup/claude-code"
    >
      <p>
        <a
          href="https://docs.anthropic.com/en/docs/claude-code"
          target="_blank"
          rel="noopener noreferrer"
        >
          Claude Code
        </a>{" "}
        is Anthropic&apos;s terminal-based AI coding agent. It supports MCP servers via a local
        configuration file.
      </p>

      <h2 id="prerequisites">Prerequisites</h2>
      <ul>
        <li>
          Claude Code installed (<code>npm install -g @anthropic-ai/claude-code</code>)
        </li>
        <li>
          An ASO++ API token — <a href="/portal/tokens">generate one here</a>
        </li>
      </ul>

      <h2 id="configuration">Configuration</h2>
      <Steps>
        <Step title="Add the MCP server">
          <p>
            Run the following command in your terminal to register ASO++ as an MCP server:
          </p>
          <pre>
            <code className="language-bash">{`claude mcp add asopp \\
  --transport http \\
  --url https://asopp.cc/mcp \\
  --header "Authorization: Bearer YOUR_TOKEN_HERE"`}</code>
          </pre>
          <p>
            Replace <code>YOUR_TOKEN_HERE</code> with your actual token.
          </p>
          <Tip>
            To add it scoped to a specific project rather than globally, run the command from inside
            the project directory and add <code>--scope project</code>.
          </Tip>
        </Step>
        <Step title="Verify registration">
          <p>Run:</p>
          <pre>
            <code className="language-bash">claude mcp list</code>
          </pre>
          <p>
            You should see <code>asopp</code> in the list with a <code>connected</code> status.
          </p>
        </Step>
        <Step title="Test in a session">
          <p>Start a Claude Code session:</p>
          <pre>
            <code className="language-bash">claude</code>
          </pre>
          <p>Then type:</p>
          <pre>
            <code className="language-text">Run an ASO audit for app 389801252 in the US market</code>
          </pre>
          <p>
            Claude Code will call <code>aso_audit</code> and return the results.
          </p>
        </Step>
      </Steps>

      <h2 id="manual-config">Manual configuration</h2>
      <p>
        If you prefer to edit the config file directly, the global MCP configuration lives at{" "}
        <code>~/.claude/mcp_servers.json</code>. Add:
      </p>
      <pre>
        <code className="language-json">{`{
  "asopp": {
    "type": "http",
    "url": "https://asopp.cc/mcp",
    "headers": {
      "Authorization": "Bearer YOUR_TOKEN_HERE"
    }
  }
}`}</code>
      </pre>

      <h2 id="env-vars">Using environment variables</h2>
      <p>Store your token securely:</p>
      <pre>
        <code className="language-bash">{`export ASO_TOKEN="your_token_here"
claude mcp add asopp \\
  --transport http \\
  --url https://asopp.cc/mcp \\
  --header "Authorization: Bearer $ASO_TOKEN"`}</code>
      </pre>
      <p>
        Add <code>export ASO_TOKEN=...</code> to your <code>~/.zshrc</code> or{" "}
        <code>~/.bashrc</code> to persist it across sessions.
      </p>

      <h2 id="troubleshooting">Troubleshooting</h2>
      <AccordionGroup>
        <Accordion title="Error: server not found">
          Run <code>claude mcp list</code> to confirm the server is registered. If not, repeat the{" "}
          <code>claude mcp add</code> step.
        </Accordion>
        <Accordion title="401 errors during tool calls">
          Your token may have been revoked. Go to the{" "}
          <a href="/portal/tokens">Tokens page</a>, create a new token, and re-run{" "}
          <code>claude mcp add</code> with the updated value.
        </Accordion>
      </AccordionGroup>

      <h2 id="related">Related pages</h2>
      <ul>
        <li>
          <a href="/portal/tokens">Tokens</a> — Generate or revoke tokens
        </li>
        <li>
          <a href="/mcp-setup/overview">MCP setup overview</a> — Troubleshooting tips and other
          supported tools
        </li>
      </ul>
    </DocPage>
  );
}
