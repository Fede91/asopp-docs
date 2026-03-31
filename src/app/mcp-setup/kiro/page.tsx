import type { Metadata } from "next";
import { DocPage } from "@/components/docs/DocPage";
import { Steps, Step } from "@/components/mdx/Steps";
import { AccordionGroup, Accordion } from "@/components/mdx/Accordion";

export const metadata: Metadata = {
  title: "Kiro",
  description: "Connect ASO++ to Kiro using the MCP server configuration.",
};

export default function KiroPage() {
  return (
    <DocPage
      title="Kiro"
      description="Connect ASO++ to Kiro using the MCP server configuration."
      href="/mcp-setup/kiro"
    >
      <p>
        <a href="https://kiro.dev" target="_blank" rel="noopener noreferrer">
          Kiro
        </a>{" "}
        is AWS&apos;s AI IDE. It supports MCP servers via a configuration file in the{" "}
        <code>.kiro</code> project directory or your global Kiro settings.
      </p>

      <h2 id="prerequisites">Prerequisites</h2>
      <ul>
        <li>
          Kiro installed — download from{" "}
          <a href="https://kiro.dev" target="_blank" rel="noopener noreferrer">
            kiro.dev
          </a>
        </li>
        <li>
          An ASO++ API token — <a href="/portal/tokens">generate one here</a>
        </li>
      </ul>

      <h2 id="configuration">Configuration</h2>
      <Steps>
        <Step title="Open MCP settings">
          In Kiro, open the Command Palette (<code>Cmd+Shift+P</code> /{" "}
          <code>Ctrl+Shift+P</code>) and run <strong>Kiro: Open MCP Configuration</strong>.
          <p className="mt-2">
            This opens the <code>mcp.json</code> settings file.
          </p>
        </Step>
        <Step title="Add the ASO++ server">
          <p>
            Add the following to the <code>mcpServers</code> object:
          </p>
          <pre>
            <code className="language-json">{`{
  "mcpServers": {
    "asopp": {
      "url": "https://asopp.cc/mcp",
      "transport": "http",
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
        <Step title="Reload Kiro">
          Press <code>Cmd+Shift+P</code> and run <strong>Developer: Reload Window</strong> to apply
          the changes.
        </Step>
        <Step title="Verify the connection">
          <p>Open a Kiro agent chat and type:</p>
          <pre>
            <code className="language-text">{`Search for keywords related to "habit tracker" in the US App Store`}</code>
          </pre>
          <p>
            Kiro should invoke <code>search_keywords</code> and return results.
          </p>
        </Step>
      </Steps>

      <h2 id="project-config">Project-level configuration</h2>
      <p>
        To scope the configuration to a single project, create a{" "}
        <code>.kiro/mcp.json</code> file in your project root instead of editing the global
        settings. This file follows the same format.
      </p>

      <h2 id="troubleshooting">Troubleshooting</h2>
      <AccordionGroup>
        <Accordion title="ASO++ tools don't appear in Kiro's tool list">
          Open <strong>Kiro Settings → MCP Servers</strong> and look for an error indicator next to{" "}
          <code>asopp</code>. Hover over it to see the error message.
        </Accordion>
        <Accordion title="Tool calls return 401">
          Your token may be expired or revoked. Go to the{" "}
          <a href="/portal/tokens">Tokens page</a>, revoke the old token, create a new one, and
          update the <code>Authorization</code> header in <code>mcp.json</code>.
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
