import type { Metadata } from "next";
import { DocPage } from "@/components/docs/DocPage";
import { Steps, Step } from "@/components/mdx/Steps";
import { Warning } from "@/components/mdx/Callouts";

export const metadata: Metadata = {
  title: "Tokens",
  description: "Create and manage the API tokens that authenticate your MCP clients.",
};

export default function TokensPage() {
  return (
    <DocPage
      title="Tokens"
      description="Create and manage the API tokens that authenticate your MCP clients."
      href="/portal/tokens"
    >
      <p>
        API tokens let your MCP clients authenticate with ASO++. Each token is independent — you
        can create one per tool, environment, or team member, and revoke any of them without
        affecting the others.
      </p>

      <h2 id="creating-a-token">Creating a token</h2>
      <Steps>
        <Step title="Open the Tokens page">
          Click <strong>Tokens</strong> in the sidebar, then click <strong>New token</strong>.
        </Step>
        <Step title="Name your token">
          <p>
            Give the token a descriptive name that reminds you where it&apos;s used — for example,{" "}
            <code>cursor-work</code>, <code>claude-code-laptop</code>, or <code>ci-pipeline</code>.
          </p>
          <p>Token names must be unique within your account and can be up to 64 characters.</p>
        </Step>
        <Step title="Copy your token">
          <p>
            After clicking <strong>Create</strong>, the full token value is displayed once. Copy it
            immediately and store it somewhere secure — a password manager or your tool&apos;s secrets
            storage.
          </p>
          <Warning>
            ASO++ never displays the raw token value again after this screen. If you lose it, revoke
            the token and create a new one.
          </Warning>
        </Step>
      </Steps>

      <h2 id="using-a-token">Using a token</h2>
      <p>
        Tokens authenticate requests as Bearer credentials. When configuring your MCP client,
        you&apos;ll set the token as an environment variable or directly in the configuration. See the{" "}
        <a href="/mcp-setup/overview">MCP setup guides</a> for exact instructions per tool.
      </p>
      <p>Your MCP server URL is:</p>
      <pre>
        <code className="language-text">https://asopp.cc/mcp</code>
      </pre>

      <h2 id="managing-tokens">Managing existing tokens</h2>
      <p>The Tokens page lists all your tokens with the following information:</p>
      <table>
        <thead>
          <tr>
            <th>Column</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>The label you chose when creating the token</td>
          </tr>
          <tr>
            <td>Created</td>
            <td>When the token was created</td>
          </tr>
          <tr>
            <td>Last used</td>
            <td>When the token was last used for a successful call (or &quot;Never&quot;)</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>
              <code>active</code> or <code>revoked</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h3 id="revoking-a-token">Revoking a token</h3>
      <p>
        Click the <strong>Revoke</strong> button next to any token to permanently deactivate it. Any
        MCP client using that token will immediately start receiving <code>401 Unauthorized</code>{" "}
        errors.
      </p>
      <Warning>
        Revoking a token is permanent. You cannot re-activate a revoked token. Create a new one and
        update your client configuration.
      </Warning>

      <h3 id="token-limits">Token limits</h3>
      <table>
        <thead>
          <tr>
            <th>Plan</th>
            <th>Max active tokens</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Free</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Starter</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Pro</td>
            <td>Unlimited</td>
          </tr>
        </tbody>
      </table>

      <h2 id="security">Security practices</h2>
      <ul>
        <li>
          <strong>One token per environment</strong> — Use separate tokens for development, staging,
          and production so you can rotate them independently.
        </li>
        <li>
          <strong>One token per tool</strong> — If you use Cursor and Claude Code, give each its own
          token. That way, if one tool is compromised, you only revoke one.
        </li>
        <li>
          <strong>Never commit tokens to source control</strong> — Use environment variables or a
          secrets manager.
        </li>
        <li>
          <strong>Audit last-used dates</strong> — Tokens that haven&apos;t been used in 30+ days
          should be revoked to reduce your attack surface.
        </li>
      </ul>

      <h2 id="related">Related pages</h2>
      <ul>
        <li>
          <a href="/quickstart">Quickstart</a> — How to generate your first token and connect a tool
        </li>
        <li>
          <a href="/portal/usage">Usage</a> — See which token made which calls
        </li>
      </ul>
    </DocPage>
  );
}
