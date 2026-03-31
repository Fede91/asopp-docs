import type { Metadata } from "next";
import { DocPage } from "@/components/docs/DocPage";
import { Steps, Step } from "@/components/mdx/Steps";
import { Note, Warning } from "@/components/mdx/Callouts";

export const metadata: Metadata = {
  title: "Profile",
  description: "Update your account details, email address, and connected accounts.",
};

export default function ProfilePage() {
  return (
    <DocPage
      title="Profile"
      description="Update your account details, email address, and connected accounts."
      href="/portal/profile"
    >
      <p>The Profile page is where you manage your personal account information.</p>

      <h2 id="account-details">Account details</h2>
      <p>Your profile shows:</p>
      <ul>
        <li>
          <strong>Display name</strong> — The name used in the portal and in emails from ASO++
        </li>
        <li>
          <strong>Email address</strong> — The address your account is registered under
        </li>
        <li>
          <strong>Sign-in method</strong> — Email/password or GitHub (shown as a badge)
        </li>
      </ul>

      <h3 id="updating-name">Updating your name</h3>
      <p>
        Click <strong>Edit</strong> next to your display name, type the new name, and click{" "}
        <strong>Save</strong>.
      </p>

      <h3 id="changing-email">Changing your email</h3>
      <Steps>
        <Step title="Click Change email">
          On the Profile page, click <strong>Change email</strong> next to your current address.
        </Step>
        <Step title="Enter your new email">
          Type the new address and click <strong>Send verification email</strong>.
        </Step>
        <Step title="Verify the new address">
          Open the verification email sent to the new address and click the link inside. Your email
          updates immediately.
        </Step>
      </Steps>
      <Note>
        Until the new address is verified, your old address remains active and continues to receive
        billing receipts and notifications.
      </Note>

      <h2 id="password">Password</h2>
      <p>
        If you signed up with email and password, you can change your password from the Profile
        page:
      </p>
      <ol>
        <li>
          Click <strong>Change password</strong>
        </li>
        <li>Enter your current password</li>
        <li>Enter and confirm your new password</li>
        <li>
          Click <strong>Save</strong>
        </li>
      </ol>
      <p>
        If you signed up via GitHub and want to add a password, click <strong>Add password</strong>{" "}
        and follow the same flow.
      </p>

      <h2 id="connected-accounts">Connected accounts</h2>
      <p>
        If you signed up with email, you can connect your GitHub account for faster sign-in. Click{" "}
        <strong>Connect GitHub</strong> and authorize the OAuth prompt.
      </p>
      <p>
        To disconnect GitHub, click <strong>Disconnect</strong> next to the GitHub badge. You must
        have a password set before you can disconnect a social login.
      </p>

      <h2 id="deleting">Deleting your account</h2>
      <p>To permanently delete your account and all associated data:</p>
      <ol>
        <li>
          Click <strong>Delete account</strong> at the bottom of the Profile page
        </li>
        <li>Type your email address to confirm</li>
        <li>
          Click <strong>Delete permanently</strong>
        </li>
      </ol>
      <Warning>
        Account deletion is irreversible. All your tokens are immediately revoked, tracked keywords
        are deleted, and your call history is removed. If you have an active subscription, it is
        cancelled immediately with no refund for the remaining period.
      </Warning>

      <h2 id="related">Related pages</h2>
      <ul>
        <li>
          <a href="/portal/tokens">Tokens</a> — Manage your API tokens
        </li>
        <li>
          <a href="/portal/billing">Billing</a> — Manage your plan and payment details
        </li>
      </ul>
    </DocPage>
  );
}
