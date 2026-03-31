import type { Metadata } from "next";
import { DocPage } from "@/components/docs/DocPage";
import { Tip, Note } from "@/components/mdx/Callouts";

export const metadata: Metadata = {
  title: "Usage",
  description: "Track your MCP tool call history and monthly quota consumption.",
};

export default function UsagePage() {
  return (
    <DocPage
      title="Usage"
      description="Track your MCP tool call history and monthly quota consumption."
      href="/portal/usage"
    >
      <p>
        The Usage page gives you a detailed breakdown of every API call your tokens have made, and
        how much of your monthly quota you&apos;ve consumed.
      </p>

      <h2 id="quota-summary">Quota summary</h2>
      <p>At the top of the page, a banner shows:</p>
      <ul>
        <li>
          <strong>Calls used</strong> this billing cycle
        </li>
        <li>
          <strong>Calls remaining</strong> before you hit your plan limit
        </li>
        <li>
          <strong>Reset date</strong> — the first day of next month when your quota refreshes
        </li>
      </ul>
      <Tip>
        If you&apos;re on the Free plan and running low, you can upgrade at any time during the month.
        Your remaining calls on the new plan are available immediately.
      </Tip>

      <h2 id="usage-chart">Usage chart</h2>
      <p>
        A bar chart visualizes daily call volume over the past 30 days. Hover over any bar to see
        the exact count for that day.
      </p>
      <p>The chart is broken down by tool name so you can see which tools you use most:</p>
      <table>
        <thead>
          <tr>
            <th>Tool</th>
            <th>Typical use case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>aso_audit</code>
            </td>
            <td>Full audits — high call weight</td>
          </tr>
          <tr>
            <td>
              <code>search_keywords</code>
            </td>
            <td>Keyword discovery</td>
          </tr>
          <tr>
            <td>
              <code>get_keyword_popularity</code>
            </td>
            <td>Popularity scoring</td>
          </tr>
          <tr>
            <td>
              <code>get_app_ranking</code>
            </td>
            <td>Rank checks</td>
          </tr>
          <tr>
            <td>
              <code>get_competitor_keywords</code>
            </td>
            <td>Competitor analysis</td>
          </tr>
          <tr>
            <td>
              <code>get_app_reviews</code>
            </td>
            <td>Review monitoring</td>
          </tr>
          <tr>
            <td>
              <code>track_keyword</code>
            </td>
            <td>Adding keywords to tracking</td>
          </tr>
          <tr>
            <td>
              <code>get_tracking_history</code>
            </td>
            <td>Reading ranking history</td>
          </tr>
          <tr>
            <td>
              <code>get_app_details</code>
            </td>
            <td>App metadata lookups</td>
          </tr>
        </tbody>
      </table>

      <h2 id="call-log">Call log</h2>
      <p>
        Below the chart, a paginated table lists every tool call in reverse chronological order.
        Each row shows:
      </p>
      <ul>
        <li>
          <strong>Timestamp</strong> — Date and time of the call (in your local timezone)
        </li>
        <li>
          <strong>Tool</strong> — Name of the MCP tool invoked
        </li>
        <li>
          <strong>Token</strong> — The token name used (not the raw value)
        </li>
        <li>
          <strong>App / Keyword</strong> — Primary input parameter from the call
        </li>
        <li>
          <strong>Country</strong> — The App Store country code used
        </li>
        <li>
          <strong>Status</strong> — <code>success</code>, <code>quota_exceeded</code>, or{" "}
          <code>error</code>
        </li>
      </ul>

      <h3 id="filtering">Filtering</h3>
      <p>Use the filters above the table to narrow results:</p>
      <ul>
        <li>
          Filter by <strong>token name</strong> to see usage from a specific integration
        </li>
        <li>
          Filter by <strong>tool</strong> to focus on one type of call
        </li>
        <li>
          Filter by <strong>status</strong> to find errors or quota hits
        </li>
        <li>
          Set a <strong>date range</strong> to look at a specific period
        </li>
      </ul>

      <h3 id="exporting">Exporting</h3>
      <p>
        Click <strong>Export CSV</strong> to download the full call log for the current filter
        selection. The export includes all columns shown in the table.
      </p>

      <h2 id="quota-limits">Quota limits by plan</h2>
      <table>
        <thead>
          <tr>
            <th>Plan</th>
            <th>Calls per month</th>
            <th>Keywords tracked</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Free</td>
            <td>50</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Starter</td>
            <td>TBD</td>
            <td>20</td>
          </tr>
          <tr>
            <td>Pro</td>
            <td>TBD</td>
            <td>50</td>
          </tr>
        </tbody>
      </table>
      <Note>
        Calls that return an error due to invalid input still count against your quota. Calls that
        fail due to a server-side error do not.
      </Note>

      <h2 id="related">Related pages</h2>
      <ul>
        <li>
          <a href="/portal/dashboard">Dashboard</a> — Monthly summary and quick stats
        </li>
        <li>
          <a href="/portal/billing">Billing</a> — Upgrade your plan if you need more calls
        </li>
      </ul>
    </DocPage>
  );
}
