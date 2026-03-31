import type { Metadata } from "next";
import { DocPage } from "@/components/docs/DocPage";
import { Steps, Step } from "@/components/mdx/Steps";
import { AccordionGroup, Accordion } from "@/components/mdx/Accordion";

export const metadata: Metadata = {
  title: "Gemini CLI",
  description: "Connect ASO++ to Gemini CLI using MCP server configuration.",
};

export default function GeminiCliPage() {
  return (
    <DocPage
      title="Gemini CLI"
      description="Connect ASO++ to Gemini CLI using MCP server configuration."
      href="/mcp-setup/gemini-cli"
    >
      <p>
        <a
          href="https://github.com/google-gemini/gemini-cli"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gemini CLI
        </a>{" "}
        is Google&apos;s command-line AI agent. It supports MCP servers via a{" "}
        <code>settings.json</code> configuration file.
      </p>

      <h2 id="prerequisites">Prerequisites</h2>
      <ul>
        <li>
          Gemini CLI installed — follow the{" "}
          <a
            href="https://github.com/google-gemini/gemini-cli"
            target="_blank"
            rel="noopener noreferrer"
          >
            official install guide
          </a>
        </li>
        <li>
          An ASO++ API token — <a href="/portal/tokens">generate one here</a>
        </li>
      </ul>

      <h2 id="configuration">Configuration</h2>
      <Steps>
        <Step title="Open the Gemini settings file">
          <p>
            The configuration file is at <code>~/.gemini/settings.json</code>. Create it if it
            doesn&apos;t exist:
          </p>
          <pre>
            <code className="language-bash">mkdir -p ~/.gemini && touch ~/.gemini/settings.json</code>
          </pre>
        </Step>
        <Step title="Add the ASO++ MCP server">
          <p>
            Edit <code>~/.gemini/settings.json</code> and add:
          </p>
          <pre>
            <code className="language-json">{`{
  "mcpServers": {
    "asopp": {
      "httpUrl": "https://asopp.cc/mcp",
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
            <code className="language-bash">gemini</code>
          </pre>
          <p>Then type:</p>
          <pre>
            <code className="language-text">{`What is the popularity score for the keyword "budget tracker" in the US App Store?`}</code>
          </pre>
          <p>
            Gemini CLI should call <code>get_keyword_popularity</code> and return the score.
          </p>
        </Step>
      </Steps>

      <h2 id="project-config">Project-level configuration</h2>
      <p>
        To use a different token or configuration per project, create a{" "}
        <code>.gemini/settings.json</code> file inside your project directory. Gemini CLI merges
        project-level settings with your global settings, with project settings taking priority.
      </p>

      <h2 id="env-vars">Using environment variables</h2>
      <pre>
        <code className="language-json">{`{
  "mcpServers": {
    "asopp": {
      "httpUrl": "https://asopp.cc/mcp",
      "headers": {
        "Authorization": "Bearer \${ASO_TOKEN}"
      }
    }
  }
}`}</code>
      </pre>
      <p>Set <code>ASO_TOKEN</code> in your shell profile and restart your terminal.</p>

      <h2 id="troubleshooting">Troubleshooting</h2>
      <AccordionGroup>
        <Accordion title="Tools aren't available in the session">
          Run <code>gemini --print-config</code> to see the effective configuration. Confirm the{" "}
          <code>asopp</code> server appears under <code>mcpServers</code>.
        </Accordion>
        <Accordion title="Connection timeout">
          Some ASO++ tools (like <code>aso_audit</code>) take up to 30 seconds. Gemini CLI&apos;s
          default timeout may be too short. Set <code>&quot;mcpTimeout&quot;: 60000</code> (milliseconds) in
          your settings.
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
