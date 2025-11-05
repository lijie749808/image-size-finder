export const metadata = {
  title: 'Privacy Policy | SquaredSymbol',
  description: 'Privacy Policy for SquaredSymbol.org explaining data collection and cookies.' ,
  alternates: { canonical: 'https://squaredsymbol.org/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Privacy Policy for SquaredSymbol.org</h1>
        <p className="text-slate-500 mb-8">Effective date: {new Date().getFullYear()}</p>

        <h2 className="text-2xl font-semibold text-slate-900 mb-3">Introduction</h2>
        <p className="text-slate-600 mb-4">
          Welcome to SquaredSymbol.org — a free, fast symbol copy paste site focused on the Squared Symbol (²)
          and related characters. Your privacy is important to us. This policy explains what information we
          collect, how we use it, and the choices you have when you use our services.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-3">Information Collection and Use</h2>
        <div className="space-y-5 text-slate-600">
          <div>
            <h3 className="font-semibold text-slate-900 mb-1">Account Information (optional)</h3>
            <p>
              <span className="font-semibold">What We Collect:</span> If we ever offer accounts, this could include your name and email address. You can use SquaredSymbol.org without registration.
            </p>
            <p>
              <span className="font-semibold">Purpose:</span> To manage your account and provide support if you choose to create one.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-1">Usage Details</h3>
            <p>
              <span className="font-semibold">What We Collect:</span> Anonymous information about how you use the site (pages visited, features clicked, copy events count, approximate frequency).
            </p>
            <p>
              <span className="font-semibold">Purpose:</span> To understand engagement and improve our symbol copy paste tools and educational content.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-1">Device Information</h3>
            <p>
              <span className="font-semibold">What We Collect:</span> Technical data such as device type, operating system, browser type, and approximate geolocation based on IP (city/region level, when provided by analytics).
            </p>
            <p>
              <span className="font-semibold">Purpose:</span> To ensure the site works smoothly across devices and to troubleshoot issues.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-1">Cookies</h3>
            <p>
              <span className="font-semibold">What We Collect:</span> Small files placed on your device that can store preferences and anonymous analytics identifiers.
            </p>
            <p>
              <span className="font-semibold">Purpose:</span> To remember basic preferences and measure performance so we can keep symbol copy paste fast and reliable. You can disable cookies in your browser settings; core functionality will largely remain.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-1">Payment and Billing (if applicable)</h3>
            <p>
              <span className="font-semibold">What We Collect:</span> If premium features are introduced, payment processors may collect necessary billing information (e.g., card details, billing address).
            </p>
            <p>
              <span className="font-semibold">Purpose:</span> To process transactions securely through trusted payment partners.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-3">Data Storage and Security</h2>
        <p className="text-slate-600 mb-4">
          We store analytics data securely and use reasonable safeguards such as encryption in transit and access
          controls. However, no method of transmission or storage is 100% secure, and we cannot guarantee
          absolute security.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-3">Information Sharing and Disclosure</h2>
        <ul className="list-disc list-inside text-slate-600 space-y-1 mb-4">
          <li>Compliance with law or lawful requests by public authorities.</li>
          <li>Protection of our rights, property, safety, or that of users and the public.</li>
          <li>
            Service providers (e.g., analytics/CDN) who help us operate the website, bound by confidentiality and
            data‑processing agreements.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-3">Changes to This Policy</h2>
        <p className="text-slate-600 mb-4">
          We may update this Privacy Policy from time to time. Updates will be posted on this page with the
          effective date above. Please review periodically for changes. Changes take effect upon posting.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-3">Contact Us</h2>
        <p className="text-slate-600">
          If you have questions about this Privacy Policy or our data practices, contact us at:
          <br/>
          Copyright Owner: squaredsymbol.org — Email: <span className="font-mono">support@squaredsymbol.org</span>
        </p>
      </div>
    </section>
  );
}


