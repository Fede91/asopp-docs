import type { Metadata } from "next";
import { DocPage } from "@/components/docs/DocPage";
import { Steps, Step } from "@/components/mdx/Steps";
import { AccordionGroup, Accordion } from "@/components/mdx/Accordion";

export const metadata: Metadata = {
  title: "OpenCode",
  description: "Connect ASO++ to OpenCode using the MCP server configuration.",
};

export default function OpencodePage() {
  return (
    <DocPage
      title="OpenCode"
      description="Connect ASO++ to OpenCode using the MCP server configuration."
      href="/mcp-setup/opencode"
    >
      <p>
        <a href="https://github.com/sst/opencode" target="_blank" rel="noopener noreferrer">
          OpenCode
        </a>{" "}
        is an open-source terminal AI coding agent built by SST. It supports MCP servers via a{" "}
        <code>opencode.json</code> configuration file.
      </p>

      <h2 id="prerequisites">Prerequisites</h2>
      <ul>
        <li>
          OpenCode installed — follow the{" "}
          <a href="https://github.com/sst/opencode" target="_blank" rel="noopener noreferrer">
            official install guide
          </a>
        </li>
        <li>
          An ASO++ API token — <a href="/portal/tokens">generate one here</a>
        </li>
      </ul>

      <h2 id="configuration">Configuration</h2>
      <Steps>
        <Step title="Open the OpenCode config file">
          <p>
            OpenCode looks for <code>opencode.json</code> in your home directory (
            <code>~/opencode.json</code>) or in the current project directory (
            <code>.opencode.json</code>).
          </p>
          <p>Create the file if it doesn&apos;t exist:</p>
          <pre>
            <code className="language-bash">touch ~/opencode.json</code>
          </pre>
        </Step>
        <Step title="Add the ASO++ MCP server">
          <p>
            Edit <code>~/opencode.json</code> and add:
          </p>
          <pre>
            <code className="language-json">{`{
  "mcp": {
    "asopp": {
      "type": "remote",
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
        <Step title="Start a session and verify">
          <p>Run:</p>
          <pre>
            <code className="language-bash">opencode</code>
          </pre>
          <p>Then type:</p>
          <pre>
            <code className="language-text">{`Get the App Store ranking for app 389801252 for keyword "photo editor" in the US`}</code>
          </pre>
          <p>
            OpenCode should call <code>get_app_ranking</code> and return the rank.
          </p>
        </Step>
      </Steps>

      <h2 id="project-config">Project-scoped configuration</h2>
      <p>
        For project-specific setups, create a <code>.opencode.json</code> file in your project
        root. This is useful when working on multiple apps that each need different ASO++ tokens or
        configurations.
      </p>

      <h2 id="troubleshooting">Troubleshooting</h2>
      <AccordionGroup>
        <Accordion title="OpenCode doesn't recognize the ASO++ tools">
          <p>Confirm the JSON in your config file is valid. You can validate it with:</p>
          <pre>
            <code className="language-bash">cat ~/opencode.json | python3 -m json.tool</code>
          </pre>
        </Accordion>
        <Accordion title="Connection errors at startup">
          Check that your token is active on the <a href="/portal/tokens">Tokens page</a>. If the
          token was revoked, create a new one and update the config file.
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
