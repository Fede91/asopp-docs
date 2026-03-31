import type { Metadata } from "next";
import { DocPage } from "@/components/docs/DocPage";
import { Steps, Step } from "@/components/mdx/Steps";
import { AccordionGroup, Accordion } from "@/components/mdx/Accordion";

export const metadata: Metadata = {
  title: "Cursor",
  description: "Connect ASO++ to Cursor using the built-in MCP configuration.",
};

export default function CursorPage() {
  return (
    <DocPage
      title="Cursor"
      description="Connect ASO++ to Cursor using the built-in MCP configuration."
      href="/mcp-setup/cursor"
    >
      <p>
        <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer">Cursor</a> supports
        MCP servers natively. You configure them in a JSON file and they&apos;re available to all AI
        features in the editor.
      </p>

      <h2 id="prerequisites">Prerequisites</h2>
      <ul>
        <li>Cursor 0.43 or later</li>
        <li>
          An ASO++ API token —{" "}
          <a href="/portal/tokens">generate one here</a>
        </li>
      </ul>

      <h2 id="configuration">Configuration</h2>
      <Steps>
        <Step title="Open MCP settings">
          In Cursor, open the Command Palette (<code>Cmd+Shift+P</code> on macOS,{" "}
          <code>Ctrl+Shift+P</code> on Windows/Linux) and run{" "}
          <strong>Cursor: Open MCP Configuration</strong>.
          <p className="mt-2">
            This opens <code>~/.cursor/mcp.json</code> (global) or{" "}
            <code>.cursor/mcp.json</code> inside your project (project-level).
          </p>
        </Step>
        <Step title="Add the ASO++ server">
          <p>
            Add the following entry to the <code>mcpServers</code> object:
          </p>
          <pre>
            <code className="language-json">{`{
  "mcpServers": {
    "asopp": {
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
        <Step title="Reload Cursor">
          Press <code>Cmd+R</code> (macOS) or <code>Ctrl+R</code> (Windows/Linux), or reopen the
          window. Cursor re-reads the MCP configuration on startup.
        </Step>
        <Step title="Verify the connection">
          <p>Open a new chat in Cursor Agent mode and type:</p>
          <pre>
            <code className="language-text">{`Search for keywords related to "photo editor" in the US App Store`}</code>
          </pre>
          <p>
            Cursor should call <code>search_keywords</code> and return results.
          </p>
        </Step>
      </Steps>

      <h2 id="env-vars">Using environment variables</h2>
      <p>To avoid hardcoding your token, use Cursor&apos;s environment variable support:</p>
      <pre>
        <code className="language-json">{`{
  "mcpServers": {
    "asopp": {
      "url": "https://asopp.cc/mcp",
      "headers": {
        "Authorization": "Bearer \${ASO_TOKEN}"
      }
    }
  }
}`}</code>
      </pre>
      <p>
        Then set <code>ASO_TOKEN</code> in your shell profile (<code>~/.zshrc</code> or{" "}
        <code>~/.bashrc</code>) and restart Cursor.
      </p>

      <h2 id="troubleshooting">Troubleshooting</h2>
      <AccordionGroup>
        <Accordion title="Tools don't appear in Cursor's tool list">
          Open the MCP panel in Cursor settings and check for a connection error. Verify your token
          is active on the <a href="/portal/tokens">Tokens page</a>.
        </Accordion>
        <Accordion title="Cursor uses a cached version of the tool list">
          Restart Cursor fully (not just the window reload) to force a re-fetch of the MCP
          server&apos;s tool manifest.
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
