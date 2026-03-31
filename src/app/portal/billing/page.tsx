import type { Metadata } from "next";
import { DocPage } from "@/components/docs/DocPage";
import { CardGroup, Card } from "@/components/mdx/Card";
import { Steps, Step } from "@/components/mdx/Steps";
import { Warning, Note } from "@/components/mdx/Callouts";

export const metadata: Metadata = {
  title: "Billing",
  description: "Manage your plan, view invoices, and update payment details.",
};

export default function BillingPage() {
  return (
    <DocPage
      title="Billing"
      description="Manage your plan, view invoices, and update payment details."
      href="/portal/billing"
    >
      <p>
        The Billing page lets you view your current plan, upgrade or downgrade, and manage your
        payment method.
      </p>

      <h2 id="plans">Plans</h2>
      <p>ASO++ offers three plans:</p>
      <CardGroup cols={3}>
        <Card title="Free" icon="hand-wave">
          <p>
            <strong>50 calls/month</strong>
          </p>
          <p>5 keywords tracked</p>
          <p>Up to 3 tokens</p>
          <p>No credit card required</p>
        </Card>
        <Card title="Starter" icon="rocket">
          <p>
            <strong>More calls/month</strong>
          </p>
          <p>20 keywords tracked</p>
          <p>Up to 10 tokens</p>
          <p>Monthly or annual billing</p>
        </Card>
        <Card title="Pro" icon="star">
          <p>
            <strong>Highest quota</strong>
          </p>
          <p>50 keywords tracked</p>
          <p>Unlimited tokens</p>
          <p>Monthly or annual billing</p>
        </Card>
      </CardGroup>
      <Note>
        Exact call quotas and prices for Starter and Pro are shown on the Billing page in the
        portal. They may change during early access.
      </Note>

      <h2 id="upgrading">Upgrading your plan</h2>
      <Steps>
        <Step title="Open the Billing page">
          Click <strong>Billing</strong> in the sidebar.
        </Step>
        <Step title="Choose a plan">
          Click <strong>Upgrade</strong> next to the plan you want. You&apos;ll be taken to a secure
          checkout.
        </Step>
        <Step title="Enter payment details">
          ASO++ uses{" "}
          <a href="https://polar.sh" target="_blank" rel="noopener noreferrer">
            Polar.sh
          </a>{" "}
          for billing. Enter your card details and confirm the subscription.
        </Step>
        <Step title="Confirm activation">
          After checkout, you&apos;re redirected back to the Billing page. Your new plan is active
          immediately — quota and token limits update right away.
        </Step>
      </Steps>

      <h2 id="downgrading">Downgrading your plan</h2>
      <p>
        To move to a lower plan, click <strong>Change plan</strong> on the Billing page and select
        the plan you want. The downgrade takes effect at the start of your next billing cycle. Until
        then, you keep your current plan&apos;s limits.
      </p>
      <Warning>
        If downgrading would put you over the new plan&apos;s keyword tracking limit, you&apos;ll need to
        remove keywords from the <a href="/portal/usage">Usage</a> page first. The portal will warn
        you if this is the case before confirming the downgrade.
      </Warning>

      <h2 id="cancelling">Cancelling</h2>
      <p>
        To cancel your subscription, click <strong>Cancel plan</strong> on the Billing page. Your
        current plan stays active until the end of the billing period, then drops to the Free tier
        automatically. No data is deleted.
      </p>

      <h2 id="invoices">Invoices</h2>
      <p>
        Past invoices are listed at the bottom of the Billing page. Click <strong>Download</strong>{" "}
        next to any invoice to get the PDF.
      </p>

      <h2 id="payment-method">Updating your payment method</h2>
      <p>
        Click <strong>Update payment method</strong> to replace the card on file. You&apos;ll be taken
        to the Polar.sh payment portal.
      </p>

      <h2 id="billing-questions">Billing questions</h2>
      <p>
        For billing issues — duplicate charges, refunds, or VAT receipts — email{" "}
        <a href="mailto:support@asopp.cc">support@asopp.cc</a> with your account email and a
        description of the issue.
      </p>

      <h2 id="related">Related pages</h2>
      <ul>
        <li>
          <a href="/portal/usage">Usage</a> — Monitor call consumption before upgrading
        </li>
        <li>
          <a href="/portal/tokens">Tokens</a> — Token limits change with your plan
        </li>
      </ul>
    </DocPage>
  );
}
