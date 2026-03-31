import type { Metadata } from "next";
import { DocPage } from "@/components/docs/DocPage";
import { Steps, Step } from "@/components/mdx/Steps";
import { AccordionGroup, Accordion } from "@/components/mdx/Accordion";

export const metadata: Metadata = {
  title: "Windsurf",
  description: "Connect ASO++ to Windsurf using the Cascade MCP configuration.",
};

export default function WindsurfPage() {
  return (
    <DocPage
      title="Windsurf"
      description="Connect ASO++ to Windsurf using the Cascade MCP configuration."
      href="/mcp-setup/windsurf"
    >
      <p>
        <a href="https://codeium.com/windsurf" target="_blank" rel="noopener noreferrer">
          Windsurf
        </a>{" "}
        by Codeium is an AI-first editor with a built-in AI agent called Cascade. Cascade supports
        MCP servers via a JSON configuration file.
      </p>

      <h2 id="prerequisites">Prerequisites</h2>
      <ul>
        <li>Windsurf (any current version)</li>
        <li>
          An ASO++ API token — <a href="/portal/tokens">generate one here</a>
        </li>
      </ul>

      <h2 id="configuration">Configuration</h2>
      <Steps>
        <Step title="Open MCP configuration">
          In Windsurf, open the Command Palette (<code>Cmd+Shift+P</code> /{" "}
          <code>Ctrl+Shift+P</code>) and run <strong>Windsurf: Open MCP Config</strong>.
          <p className="mt-2">
            This opens <code>~/.codeium/windsurf/mcp_config.json</code>.
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
      "serverUrl": "https://asopp.cc/mcp",
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
        <Step title="Reload Windsurf">
          Press <code>Cmd+Shift+P</code> and run <strong>Developer: Reload Window</strong> to apply
          the new configuration.
        </Step>
        <Step title="Verify in Cascade">
          <p>Open a Cascade chat and type:</p>
          <pre>
            <code className="language-text">Get the App Store details for app 389801252 in the US</code>
          </pre>
          <p>
            Cascade should call <code>get_app_details</code> and return the app&apos;s metadata.
          </p>
        </Step>
      </Steps>

      <h2 id="troubleshooting">Troubleshooting</h2>
      <AccordionGroup>
        <Accordion title="Cascade doesn't list the ASO++ tools">
          Open <strong>Windsurf Settings → MCP</strong> and check the server status. A red indicator
          means the connection failed — verify your token and URL.
        </Accordion>
        <Accordion title="Tool calls fail silently">
          Check the Windsurf output panel for MCP errors. A <code>401</code> means your token is
          invalid; a <code>429</code> means you&apos;ve exceeded your quota.
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
