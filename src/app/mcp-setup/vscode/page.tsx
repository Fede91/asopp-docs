import type { Metadata } from "next";
import { DocPage } from "@/components/docs/DocPage";
import { Steps, Step } from "@/components/mdx/Steps";
import { AccordionGroup, Accordion } from "@/components/mdx/Accordion";
import { Tabs, Tab } from "@/components/mdx/Tabs";

export const metadata: Metadata = {
  title: "VS Code",
  description: "Connect ASO++ to VS Code via the GitHub Copilot MCP or an extension like Cline.",
};

export default function VscodePage() {
  return (
    <DocPage
      title="VS Code"
      description="Connect ASO++ to VS Code via the GitHub Copilot MCP or an extension like Cline."
      href="/mcp-setup/vscode"
    >
      <p>
        VS Code supports MCP servers through GitHub Copilot&apos;s agent mode (VS Code 1.99+) or
        through third-party extensions like{" "}
        <a
          href="https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cline
        </a>
        .
      </p>

      <Tabs>
        <Tab title="GitHub Copilot (built-in)">
          <h2 id="copilot-prerequisites">Prerequisites</h2>
          <ul>
            <li>VS Code 1.99 or later</li>
            <li>GitHub Copilot subscription with agent mode enabled</li>
            <li>
              An ASO++ API token — <a href="/portal/tokens">generate one here</a>
            </li>
          </ul>

          <h2 id="copilot-config">Configuration</h2>
          <Steps>
            <Step title="Open user settings (JSON)">
              Press <code>Cmd+Shift+P</code> (macOS) or <code>Ctrl+Shift+P</code> (Windows/Linux)
              and run <strong>Preferences: Open User Settings (JSON)</strong>.
            </Step>
            <Step title="Add the MCP server">
              <p>Add the following inside the JSON object:</p>
              <pre>
                <code className="language-json">{`{
  "mcp": {
    "servers": {
      "asopp": {
        "type": "http",
        "url": "https://asopp.cc/mcp",
        "headers": {
          "Authorization": "Bearer YOUR_TOKEN_HERE"
        }
      }
    }
  }
}`}</code>
              </pre>
              <p>
                Replace <code>YOUR_TOKEN_HERE</code> with your actual token.
              </p>
            </Step>
            <Step title="Reload VS Code">
              Press <code>Cmd+Shift+P</code> and run <strong>Developer: Reload Window</strong>.
            </Step>
            <Step title="Verify in Copilot agent mode">
              <p>
                Open a Copilot chat, switch to <strong>Agent</strong> mode, and type:
              </p>
              <pre>
                <code className="language-text">{`Search for keywords related to "fitness tracker" in the US App Store`}</code>
              </pre>
              <p>
                Copilot should call <code>search_keywords</code> and return results.
              </p>
            </Step>
          </Steps>
        </Tab>
        <Tab title="Cline extension">
          <h2 id="cline-prerequisites">Prerequisites</h2>
          <ul>
            <li>
              VS Code with the{" "}
              <a
                href="https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cline extension
              </a>{" "}
              installed
            </li>
            <li>
              An ASO++ API token — <a href="/portal/tokens">generate one here</a>
            </li>
          </ul>

          <h2 id="cline-config">Configuration</h2>
          <Steps>
            <Step title="Open Cline MCP settings">
              Click the Cline icon in the sidebar, then click the <strong>MCP Servers</strong> tab,
              then <strong>Edit MCP settings</strong>.
            </Step>
            <Step title="Add the ASO++ server">
              <p>In the config file that opens, add:</p>
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
            <Step title="Restart Cline">
              Click <strong>Done</strong> or close and reopen the Cline panel to apply the new
              configuration.
            </Step>
            <Step title="Verify the connection">
              <p>Open a Cline chat and type:</p>
              <pre>
                <code className="language-text">{`Check the App Store ranking for app 389801252 for the keyword "photo editor" in the US`}</code>
              </pre>
              <p>
                Cline should invoke <code>get_app_ranking</code> and return the result.
              </p>
            </Step>
          </Steps>
        </Tab>
      </Tabs>

      <h2 id="troubleshooting">Troubleshooting</h2>
      <AccordionGroup>
        <Accordion title="The ASO++ tools don't appear in agent mode">
          Make sure agent mode is enabled in GitHub Copilot settings. Go to{" "}
          <strong>Settings → Extensions → GitHub Copilot</strong> and ensure{" "}
          <strong>Agent mode</strong> is turned on.
        </Accordion>
        <Accordion title="Connection refused or timeout">
          Confirm your token is active on the <a href="/portal/tokens">Tokens page</a>. Also check
          that your VS Code version is 1.99 or later for built-in MCP support.
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
