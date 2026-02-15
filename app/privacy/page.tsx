const Page = () => {
  return (
    <div className="prose">
      <h1>Privacy and Policy</h1>

      <h2>1. Information We Collect</h2>
      <p>When you register for our platform, we collect:</p>
      <ul>
        <li>
          <strong>Google login users:</strong> your basic Google profile
          information (name, email).
        </li>
        <li>
          <strong>Email registration users:</strong> your name and email.
        </li>
        <li>
          <strong>Payment information:</strong> handled securely via{" "}
          <strong>Xendit</strong> when purchasing Meet packages.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use your data to:</p>
      <ul>
        <li>
          Provide private <strong>Google Meet invitations</strong> to users who
          purchase packages.
        </li>
        <li>
          Share private <strong>Google Drive folders</strong> (slides, docs,
          source code) selected by the owner.
        </li>
        <li>Facilitate event registration and communication.</li>
        <li>Manage platform access and authentication.</li>
      </ul>

      <h2>3. Google Drive Integration</h2>
      <ul>
        <li>
          Only the folder explicitly selected by the owner will be shared.
        </li>
        <li>
          Users will only access files they are invited to; no other Drive
          content is visible.
        </li>
      </ul>

      <h2>4. Google Meet Integration</h2>
      <ul>
        <li>
          Users who purchase a Meet package will receive a private invitation
          via email.
        </li>
        <li>
          Invitations are generated per event and cannot be shared with
          unauthorized users.
        </li>
      </ul>

      <h2>5. Registration & Authentication</h2>
      <ul>
        <li>
          You can register using <strong>Google login</strong> or just provide{" "}
          <strong>name and email</strong>.
        </li>
        <li>
          Google login allows seamless integration with Google Calendar, Meet,
          and Drive.
        </li>
      </ul>

      <h2>6. Security</h2>
      <ul>
        <li>
          All sensitive information, including payment data, is encrypted and
          handled via trusted providers like Xendit.
        </li>
        <li>Private assets are only accessible to authorized users.</li>
      </ul>

      <h2>7. Sharing & Third-Party Access</h2>
      <ul>
        <li>
          We do not sell, rent, or share your personal data with third parties,
          except to the extent necessary for Google integrations and payment
          processing.
        </li>
        <li>
          Third-party services (Google, Xendit) follow their own privacy
          policies.
        </li>
      </ul>

      <h2>8. Your Rights</h2>
      <ul>
        <li>
          You can request access to, modification, or deletion of your personal
          information.
        </li>
        <li>
          You can revoke access to shared Google Drive folders at any time.
        </li>
      </ul>

      <h2>9. Changes to Policy</h2>
      <ul>
        <li>
          This policy may be updated occasionally. We will notify users of major
          changes.
        </li>
      </ul>
    </div>
  );
};

export default Page;
