import type { Metadata } from "next";
import { DocPage } from "@/components/docs/DocPage";
import { CardGroup, Card } from "@/components/mdx/Card";
import { Steps, Step } from "@/components/mdx/Steps";
import { Warning, Tip } from "@/components/mdx/Callouts";

export const metadata: Metadata = {
  title: "Quickstart",
  description: "Connect ASO++ to your AI tool in under 5 minutes.",
};

export default function QuickstartPage() {
  return (
    <DocPage
      title="Quickstart"
      description="Connect ASO++ to your AI tool in under 5 minutes."
      href="/quickstart"
    >
      <h2 id="prerequisites">Prerequisites</h2>
      <ul>
        <li>
          An ASO++ account —{" "}
          <a href="https://asopp.cc/sign-up" target="_blank" rel="noopener noreferrer">
            sign up here
          </a>
        </li>
        <li>
          One of the <a href="/mcp-setup/overview">supported AI tools</a>
        </li>
      </ul>

      <h2 id="steps">Steps</h2>

      <Steps>
        <Step title="Create your account">
          <p>
            Go to <a href="https://asopp.cc" target="_blank" rel="noopener noreferrer">asopp.cc</a>{" "}
            and sign up with your email or GitHub account.
          </p>
          <p>
            After signing in, you land on the <strong>Dashboard</strong> where you can see your plan
            and current usage.
          </p>
        </Step>

        <Step title="Generate an API token">
          <p>
            Open the <a href="https://asopp.cc/tokens" target="_blank" rel="noopener noreferrer">Tokens</a>{" "}
            page from the sidebar.
          </p>
          <p>
            Click <strong>New token</strong>, give it a name (for example,{" "}
            <code>cursor-dev</code>), and click <strong>Create</strong>. Copy the token — it&apos;s
            shown only once.
          </p>
          <Warning>
            Store your token securely. ASO++ never displays it again after creation. If you lose it,
            revoke it and create a new one.
          </Warning>
        </Step>

        <Step title="Connect your AI tool">
          <p>Pick your tool and follow the setup guide:</p>
          <CardGroup cols={2}>
            <Card title="Cursor" href="/mcp-setup/cursor" icon="arrow-pointer" />
            <Card title="Claude Code" href="/mcp-setup/claude-code" icon="terminal" />
            <Card title="VS Code" href="/mcp-setup/vscode" icon="code" />
            <Card title="Windsurf" href="/mcp-setup/windsurf" icon="wind" />
          </CardGroup>
          <p>
            All setups follow the same pattern: add ASO++ as an MCP server using your token as the
            Bearer credential.
          </p>
        </Step>

        <Step title="Run your first audit">
          <p>Open a chat with your AI assistant and type:</p>
          <pre>
            <code className="language-text">
              {`Run an ASO audit for app ID 123456789 in the US market`}
            </code>
          </pre>
          <p>
            Replace <code>123456789</code> with your app&apos;s App Store ID. Your assistant will call{" "}
            <code>aso_audit</code> and return prioritized recommendations.
          </p>
          <Tip>
            Find your app&apos;s ID in App Store Connect, or by searching for your app on the App Store and
            copying the number from the URL: <code>apps.apple.com/app/id123456789</code>.
          </Tip>
        </Step>
      </Steps>

      <h2 id="next-steps">Next steps</h2>
      <ul>
        <li>
          <strong>Track keywords</strong> — Use <code>track_keyword</code> to monitor how your app
          ranks over time
        </li>
        <li>
          <strong>Research competitors</strong> — Use <code>get_competitor_keywords</code> to find
          what keywords similar apps rank for
        </li>
        <li>
          <strong>Understand your plan</strong> — Check{" "}
          <a href="/portal/usage">Usage</a> to see how many calls you have remaining this month
        </li>
      </ul>
    </DocPage>
  );
}
