import type { Metadata } from "next";
import { DocPage } from "@/components/docs/DocPage";
import { Steps, Step } from "@/components/mdx/Steps";
import { AccordionGroup, Accordion } from "@/components/mdx/Accordion";

export const metadata: Metadata = {
  title: "Factory",
  description: "Connect ASO++ to Factory as an MCP integration.",
};

export default function FactoryPage() {
  return (
    <DocPage
      title="Factory"
      description="Connect ASO++ to Factory as an MCP integration."
      href="/mcp-setup/factory"
    >
      <p>
        <a href="https://factory.ai" target="_blank" rel="noopener noreferrer">
          Factory
        </a>{" "}
        is an AI software engineering platform that automates development workflows. You can add
        ASO++ as an MCP integration so Factory&apos;s Droids can call ASO data directly during
        app-related tasks.
      </p>

      <h2 id="prerequisites">Prerequisites</h2>
      <ul>
        <li>A Factory account with a Droid configured</li>
        <li>
          An ASO++ API token — <a href="/portal/tokens">generate one here</a>
        </li>
      </ul>

      <h2 id="configuration">Configuration</h2>
      <Steps>
        <Step title="Open your Droid settings">
          In the Factory dashboard, navigate to your Droid&apos;s configuration page and open the{" "}
          <strong>Integrations</strong> tab.
        </Step>
        <Step title="Add an MCP integration">
          <p>
            Click <strong>Add integration → MCP server</strong> and fill in the details:
          </p>
          <table>
            <thead>
              <tr>
                <th>Field</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name</td>
                <td>
                  <code>asopp</code>
                </td>
              </tr>
              <tr>
                <td>URL</td>
                <td>
                  <code>https://asopp.cc/mcp</code>
                </td>
              </tr>
              <tr>
                <td>Transport</td>
                <td>
                  <code>SSE</code>
                </td>
              </tr>
              <tr>
                <td>Auth header</td>
                <td>
                  <code>Authorization: Bearer YOUR_TOKEN_HERE</code>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Replace <code>YOUR_TOKEN_HERE</code> with your actual token.
          </p>
        </Step>
        <Step title="Save and activate">
          Click <strong>Save</strong>. The integration is activated immediately — your Droid can now
          call ASO++ tools in workflows.
        </Step>
        <Step title="Verify in a workflow">
          <p>Create a test workflow or open a session with your Droid and type:</p>
          <pre>
            <code className="language-text">
              Run an ASO audit for app 389801252 and summarize the top 5 recommendations
            </code>
          </pre>
          <p>
            The Droid should call <code>aso_audit</code> and return structured recommendations.
          </p>
        </Step>
      </Steps>

      <h2 id="troubleshooting">Troubleshooting</h2>
      <AccordionGroup>
        <Accordion title="Integration shows as disconnected">
          Click <strong>Test connection</strong> in the Factory integration settings. If the test
          fails, verify your token on the <a href="/portal/tokens">Tokens page</a> and check the
          URL is exactly <code>https://asopp.cc/mcp</code>.
        </Accordion>
        <Accordion title="Tools not available in workflows">
          Factory may need to re-fetch the tool manifest after adding the integration. Deactivate
          and re-activate the integration from the settings panel.
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
