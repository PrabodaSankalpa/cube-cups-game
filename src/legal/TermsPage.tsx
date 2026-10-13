import { CONTACT_EMAIL, DEVELOPER_NAME, PRIVACY_URL } from "../config";
import { LegalLayout } from "./LegalLayout";

export function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions">
      <p>
        By downloading or using Cube Cups (“the app”), developed by {DEVELOPER_NAME}, you agree to these terms. If you
        don’t agree, please don’t use the app.
      </p>

      <h2>Using the app</h2>
      <p>
        The app is free for personal, non-commercial use. Please don’t copy, modify, reverse-engineer or redistribute
        it, or use it in any unlawful way.
      </p>

      <h2>Ownership</h2>
      <p>
        The app, its levels, artwork, sounds and name belong to {DEVELOPER_NAME}. These terms don’t transfer any of
        those rights to you.
      </p>

      <h2>Ads</h2>
      <p>
        The app is supported by ads from Google AdMob. Rewarded ads are optional. We aren’t responsible for the
        content of third-party ads or the sites they link to.
      </p>

      <h2>Privacy</h2>
      <p>
        How the app handles data is explained in our <a href={PRIVACY_URL}>Privacy Policy</a>.
      </p>

      <h2>No warranty</h2>
      <p>
        The app is provided “as is”. We don’t guarantee it will always be available or error-free, and progress stored
        on your device may be lost (for example, if you uninstall the app). To the extent permitted by law, we’re not
        liable for any damages arising from its use.
      </p>

      <h2>Changes</h2>
      <p>
        We may update the app or these terms at any time. Changes will appear on this page with a new date; continuing
        to use the app means you accept them.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalLayout>
  );
}
