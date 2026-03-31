import type { Metadata } from "next";
import { DocPage } from "@/components/docs/DocPage";
import { Info } from "@/components/mdx/Callouts";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "An overview of your ASO++ account: plan status, quota, and quick actions.",
};

export default function DashboardPage() {
  return (
    <DocPage
      title="Dashboard"
      description="An overview of your ASO++ account: plan status, quota, and quick actions."
      href="/portal/dashboard"
    >
      <p>
        The dashboard is the first page you see after signing in. It gives you a snapshot of your
        account at a glance.
      </p>

      <h2 id="sections">Sections</h2>

      <h3 id="plan-and-quota">Plan and quota</h3>
      <p>
        The top of the dashboard shows your current plan, how many API calls you&apos;ve used this
        month, and how many remain.
      </p>
      <Info>
        The quota resets on the first day of each calendar month. Your plan name and keyword
        tracking limit are shown next to the quota bar.
      </Info>
      <p>The quota bar changes color as you approach your limit:</p>
      <table>
        <thead>
          <tr>
            <th>Color</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Green</td>
            <td>You have plenty of calls remaining</td>
          </tr>
          <tr>
            <td>Amber</td>
            <td>You&apos;ve used more than 75% of your monthly quota</td>
          </tr>
          <tr>
            <td>Red</td>
            <td>You&apos;re at or near your limit</td>
          </tr>
        </tbody>
      </table>
      <p>When the quota bar is amber or red, a prompt to upgrade your plan appears below it.</p>

      <h3 id="stats">Stats</h3>
      <p>Four metric cards give you a quick view of recent activity:</p>
      <ul>
        <li>
          <strong>Calls this month</strong> — Total MCP tool calls made in the current billing cycle
        </li>
        <li>
          <strong>Keywords tracked</strong> — Number of keywords you&apos;re currently monitoring
        </li>
        <li>
          <strong>Apps monitored</strong> — Distinct app IDs used across your tool calls
        </li>
        <li>
          <strong>Last active</strong> — When your most recent tool call happened
        </li>
      </ul>

      <h3 id="onboarding-checklist">Onboarding checklist</h3>
      <p>If you haven&apos;t completed setup, the dashboard shows a three-step checklist:</p>
      <ol>
        <li>
          <strong>Create your account</strong> — Done when you sign in for the first time
        </li>
        <li>
          <strong>Generate a token</strong> — Completed once you create your first API token
        </li>
        <li>
          <strong>Connect an MCP client</strong> — Completed after your first successful tool call
        </li>
      </ol>
      <p>The checklist disappears automatically once all three steps are done.</p>

      <h3 id="recent-activity">Recent activity</h3>
      <p>
        A feed of your most recent tool calls appears at the bottom of the dashboard. Each row shows
        the tool name, timestamp, and the app ID or keyword it ran against.
      </p>

      <h2 id="actions">Actions from the dashboard</h2>
      <ul>
        <li>
          Click <strong>New token</strong> to jump directly to the token creation flow
        </li>
        <li>
          Click <strong>Upgrade plan</strong> to open the billing page
        </li>
        <li>Click any tool call in the activity feed to see the full input and output</li>
      </ul>

      <h2 id="related">Related pages</h2>
      <ul>
        <li>
          <a href="/portal/usage">Usage</a> — Detailed breakdown of your call history
        </li>
        <li>
          <a href="/portal/tokens">Tokens</a> — Manage your API tokens
        </li>
        <li>
          <a href="/portal/billing">Billing</a> — Change your plan or update payment details
        </li>
      </ul>
    </DocPage>
  );
}
