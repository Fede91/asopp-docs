import type { Metadata } from "next";
import { DocPage } from "@/components/docs/DocPage";
import { Steps, Step } from "@/components/mdx/Steps";
import { AccordionGroup, Accordion } from "@/components/mdx/Accordion";

export const metadata: Metadata = {
  title: "Codex",
  description: "Connect ASO++ to OpenAI Codex CLI using MCP server configuration.",
};

export default function CodexPage() {
  return (
    <DocPage
      title="Codex"
      description="Connect ASO++ to OpenAI Codex CLI using MCP server configuration."
      href="/mcp-setup/codex"
    >
      <p>
        <a href="https://github.com/openai/codex" target="_blank" rel="noopener noreferrer">
          OpenAI Codex CLI
        </a>{" "}
        is OpenAI&apos;s terminal-based coding agent. It supports MCP servers via a configuration file
        in your home directory.
      </p>

      <h2 id="prerequisites">Prerequisites</h2>
      <ul>
        <li>
          Codex CLI installed (<code>npm install -g @openai/codex</code>)
        </li>
        <li>
          An ASO++ API token — <a href="/portal/tokens">generate one here</a>
        </li>
      </ul>

      <h2 id="configuration">Configuration</h2>
      <Steps>
        <Step title="Open the Codex config file">
          <p>
            The Codex configuration file lives at <code>~/.codex/config.json</code>. Create it if
            it doesn&apos;t exist.
          </p>
          <pre>
            <code className="language-bash">mkdir -p ~/.codex && touch ~/.codex/config.json</code>
          </pre>
        </Step>
        <Step title="Add the ASO++ MCP server">
          <p>
            Open <code>~/.codex/config.json</code> and add:
          </p>
          <pre>
            <code className="language-json">{`{
  "mcpServers": {
    "asopp": {
      "type": "http",
      "url": "https://asopp.cc/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_TOKEN_HERE"
      }
    }
  }
}`}</code>
          </pre>
          <p>
            Replace <code>YOUR_TOKEN_HERE</code> with your actual token.
          </p>
        </Step>
        <Step title="Start a Codex session">
          <p>Run:</p>
          <pre>
            <code className="language-bash">codex</code>
          </pre>
          <p>Then type a prompt that uses ASO++ tools:</p>
          <pre>
            <code className="language-text">
              Find the top competitor keywords for the Duolingo app in the US market
            </code>
          </pre>
          <p>
            Codex will call <code>get_competitor_keywords</code> and return the results.
          </p>
        </Step>
      </Steps>

      <h2 id="env-vars">Using environment variables</h2>
      <p>To keep your token out of the config file:</p>
      <pre>
        <code className="language-json">{`{
  "mcpServers": {
    "asopp": {
      "type": "http",
      "url": "https://asopp.cc/mcp",
      "headers": {
        "Authorization": "Bearer \${ASO_TOKEN}"
      }
    }
  }
}`}</code>
      </pre>
      <p>Export the variable in your shell profile:</p>
      <pre>
        <code className="language-bash">export ASO_TOKEN="your_token_here"</code>
      </pre>

      <h2 id="troubleshooting">Troubleshooting</h2>
      <AccordionGroup>
        <Accordion title="Codex can't find the ASO++ tools">
          Run <code>codex --list-tools</code> to confirm the MCP server is loaded. If it&apos;s missing,
          double-check the JSON syntax in <code>~/.codex/config.json</code>.
        </Accordion>
        <Accordion title="Authentication errors">
          Verify your token is active on the <a href="/portal/tokens">Tokens page</a>. Re-create
          the token if needed and update <code>~/.codex/config.json</code>.
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
