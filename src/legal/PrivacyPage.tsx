import { CONTACT_EMAIL, DEVELOPER_NAME } from "../config";
import { LegalLayout } from "./LegalLayout";

export function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <p>
        This policy explains how the Cube Cups mobile game (“the app”), developed by {DEVELOPER_NAME}, handles your
        information.
      </p>

      <h2>What we collect</h2>
      <p>
        Nothing. We don’t collect, store or sell personal information. The app needs no account and doesn’t access
        your contacts, location, camera or microphone.
      </p>

      <h2>Data on your device</h2>
      <p>
        Your progress and settings (sound, haptics) are saved only on your device. They are never sent to us and are
        deleted when you uninstall the app or clear its data.
      </p>

      <h2>Ads (Google AdMob)</h2>
      <p>
        The app is free and shows ads from Google AdMob. To serve and measure ads, Google may collect your device’s
        advertising ID, device information, IP address (and approximate location from it), and ad interactions. This
        data is collected by Google, not by us — see{" "}
        <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">
          how Google uses this data
        </a>{" "}
        and the{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">
          Google Privacy Policy
        </a>
        .
      </p>

      <h2>Your choices</h2>
      <ul>
        <li>
          In the EEA, UK and Switzerland, the app asks for consent before showing personalised ads. You can change this
          anytime in Settings → Privacy Options.
        </li>
        <li>You can reset or delete your advertising ID in your Android device settings.</li>
        <li>Rewarded ads (for hints or an extra cup) are always optional.</li>
      </ul>

      <h2>Children</h2>
      <p>
        The app is not directed at children under 13, and we don’t knowingly collect personal information from
        children. Ads are limited to content suitable for general audiences.
      </p>

      <h2>Changes &amp; contact</h2>
      <p>
        We may update this policy; changes will appear on this page with a new date. Questions? Email{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalLayout>
  );
}
