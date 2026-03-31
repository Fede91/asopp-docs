import type { Metadata } from "next";
import { DocPage } from "@/components/docs/DocPage";
import { Steps, Step } from "@/components/mdx/Steps";
import { AccordionGroup, Accordion } from "@/components/mdx/Accordion";

export const metadata: Metadata = {
  title: "Goose",
  description: "Connect ASO++ to Goose using the MCP extension configuration.",
};

export default function GoosePage() {
  return (
    <DocPage
      title="Goose"
      description="Connect ASO++ to Goose using the MCP extension configuration."
      href="/mcp-setup/goose"
    >
      <p>
        <a
          href="https://block.github.io/goose/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Goose
        </a>{" "}
        is Block&apos;s open-source AI agent. It uses an extension system where MCP servers are
        registered as extensions.
      </p>

      <h2 id="prerequisites">Prerequisites</h2>
      <ul>
        <li>
          Goose installed — follow the{" "}
          <a
            href="https://block.github.io/goose/docs/getting-started/installation"
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
        <Step title="Open the Goose config file">
          The Goose configuration lives at <code>~/.config/goose/config.yaml</code>. Create it if
          it doesn&apos;t exist.
        </Step>
        <Step title="Add the ASO++ extension">
          <p>
            Add the following to your <code>config.yaml</code>:
          </p>
          <pre>
            <code className="language-yaml">{`extensions:
  asopp:
    type: remote
    uri: https://asopp.cc/mcp
    transport: sse
    headers:
      Authorization: "Bearer YOUR_TOKEN_HERE"
    enabled: true`}</code>
          </pre>
          <p>
            Replace <code>YOUR_TOKEN_HERE</code> with your actual token.
          </p>
        </Step>
        <Step title="Start a Goose session">
          <p>Run:</p>
          <pre>
            <code className="language-bash">goose session</code>
          </pre>
          <p>Type a prompt to test the connection:</p>
          <pre>
            <code className="language-text">{`Search for App Store keywords related to "meditation" in the US`}</code>
          </pre>
          <p>
            Goose should call <code>search_keywords</code> and return a list of relevant keywords.
          </p>
        </Step>
      </Steps>

      <h2 id="verifying">Verifying the extension is loaded</h2>
      <p>
        Run <code>goose session</code> and type <code>/extensions</code> to list all loaded
        extensions. You should see <code>asopp</code> with a <code>connected</code> status.
      </p>

      <h2 id="troubleshooting">Troubleshooting</h2>
      <AccordionGroup>
        <Accordion title="Extension not found or not connected">
          Check the YAML indentation in <code>~/.config/goose/config.yaml</code> — YAML is
          whitespace-sensitive. Use 2-space indentation throughout.
        </Accordion>
        <Accordion title="Authentication errors">
          Verify your token is active on the <a href="/portal/tokens">Tokens page</a>. Update the{" "}
          <code>Authorization</code> header in <code>config.yaml</code> with a fresh token.
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
