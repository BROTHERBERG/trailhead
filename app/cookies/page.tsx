import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Trailhead",
  description: "Cookie Policy for Trailheadmade.com - How we use cookies and tracking technologies.",
};

export default function CookiesPage() {
  return (
    <>
      <Navbar variant="static" />
    <div className="min-h-screen bg-[#f5f0e9] py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="mb-12">
          <h1 className="font-axel font-bold text-4xl md:text-5xl lg:text-6xl text-[#073742] uppercase mb-6">
            Cookie Policy
          </h1>
          <p className="font-riposte text-lg text-[#073742]/70">
            <strong>Last Updated:</strong> January 1, 2025
          </p>
        </div>

        <div className="font-riposte text-[#073742] space-y-8">
          <section>
            <p className="text-lg leading-relaxed">
              This Cookie Policy explains how Crush Digital Atelier LLC ("Trailhead") uses cookies and similar tracking technologies
              on <a href="https://trailheadmade.com" className="text-accent underline">trailheadmade.com</a>.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              By using our website, you consent to our use of cookies in accordance with this policy. You can control cookies through
              your browser settings and our cookie consent banner.
            </p>
          </section>

          <section>
            <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">What Are Cookies?</h2>
            <p className="mb-4">
              Cookies are small text files placed on your device (computer, phone, tablet) when you visit a website. They help the site
              remember your preferences, analyze traffic, and improve user experience.
            </p>
            <p className="mb-4">
              Cookies can be:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Session Cookies:</strong> Temporary cookies deleted when you close your browser</li>
              <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until you delete them</li>
              <li><strong>First-Party Cookies:</strong> Set by trailheadmade.com directly</li>
              <li><strong>Third-Party Cookies:</strong> Set by external services we use (analytics, payments)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">Cookies We Use</h2>

            <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">1. Strictly Necessary Cookies</h3>
            <p className="mb-4">
              <strong>Purpose:</strong> Essential for the website to function. Cannot be disabled.
            </p>
            <div className="bg-white border border-[#073742]/10 rounded-xl p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#073742]/10">
                    <th className="text-left pb-2 font-jetbrains">Cookie Name</th>
                    <th className="text-left pb-2 font-jetbrains">Purpose</th>
                    <th className="text-left pb-2 font-jetbrains">Duration</th>
                  </tr>
                </thead>
                <tbody className="font-riposte">
                  <tr className="border-b border-[#073742]/10">
                    <td className="py-3">cookie_consent</td>
                    <td className="py-3">Remembers your cookie preferences</td>
                    <td className="py-3">1 year</td>
                  </tr>
                  <tr className="border-b border-[#073742]/10">
                    <td className="py-3">session_id</td>
                    <td className="py-3">Maintains your session state</td>
                    <td className="py-3">Session</td>
                  </tr>
                  <tr>
                    <td className="py-3">__stripe_*</td>
                    <td className="py-3">Fraud prevention & payment processing</td>
                    <td className="py-3">Session</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">2. Analytics Cookies</h3>
            <p className="mb-4">
              <strong>Purpose:</strong> Help us understand how visitors use our site so we can improve it.
            </p>
            <div className="bg-white border border-[#073742]/10 rounded-xl p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#073742]/10">
                    <th className="text-left pb-2 font-jetbrains">Cookie Name</th>
                    <th className="text-left pb-2 font-jetbrains">Provider</th>
                    <th className="text-left pb-2 font-jetbrains">Duration</th>
                  </tr>
                </thead>
                <tbody className="font-riposte">
                  <tr className="border-b border-[#073742]/10">
                    <td className="py-3">_ga</td>
                    <td className="py-3">Google Analytics</td>
                    <td className="py-3">2 years</td>
                  </tr>
                  <tr className="border-b border-[#073742]/10">
                    <td className="py-3">_ga_*</td>
                    <td className="py-3">Google Analytics (GA4)</td>
                    <td className="py-3">2 years</td>
                  </tr>
                  <tr>
                    <td className="py-3">_gid</td>
                    <td className="py-3">Google Analytics</td>
                    <td className="py-3">24 hours</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-4 text-sm">
                <strong>What we track:</strong> Pages visited, time on site, device type, location (city-level), referral source
              </p>
              <p className="mt-2 text-sm">
                <strong>What we DON'T track:</strong> Personal identifiable information, specific user identity
              </p>
            </div>

            <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">3. Functional Cookies</h3>
            <p className="mb-4">
              <strong>Purpose:</strong> Remember your preferences and settings.
            </p>
            <div className="bg-white border border-[#073742]/10 rounded-xl p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#073742]/10">
                    <th className="text-left pb-2 font-jetbrains">Cookie Name</th>
                    <th className="text-left pb-2 font-jetbrains">Purpose</th>
                    <th className="text-left pb-2 font-jetbrains">Duration</th>
                  </tr>
                </thead>
                <tbody className="font-riposte">
                  <tr className="border-b border-[#073742]/10">
                    <td className="py-3">theme_preference</td>
                    <td className="py-3">Remembers dark/light mode preference</td>
                    <td className="py-3">1 year</td>
                  </tr>
                  <tr>
                    <td className="py-3">form_data</td>
                    <td className="py-3">Saves contact form progress</td>
                    <td className="py-3">Session</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">4. Marketing Cookies</h3>
            <p className="mb-4">
              <strong>Purpose:</strong> Track effectiveness of marketing campaigns (currently not used).
            </p>
            <p className="text-sm italic">
              We do not currently use marketing or advertising cookies. If we do in the future, we will update this policy
              and request your consent.
            </p>
          </section>

          <section>
            <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">Third-Party Services</h2>
            <p className="mb-4">
              We use the following third-party services that may set cookies:
            </p>

            <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">Google Analytics 4 (GA4)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Measurement ID:</strong> G-KBP3LGE8ZQ</li>
              <li><strong>Purpose:</strong> Website traffic analysis and performance monitoring</li>
              <li><strong>Data collected:</strong> Anonymized visitor behavior, demographics, device info, pages visited, session duration</li>
              <li><strong>IP Anonymization:</strong> Enabled (IP addresses are anonymized before storage)</li>
              <li><strong>Privacy Policy:</strong> <a href="https://policies.google.com/privacy" className="text-accent underline" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a></li>
              <li><strong>Opt-out:</strong> Use our cookie consent banner or <a href="https://tools.google.com/dlpage/gaoptout" className="text-accent underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></li>
            </ul>

            <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">Stripe</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Purpose:</strong> Secure payment processing and fraud prevention</li>
              <li><strong>Data collected:</strong> Payment information, transaction details</li>
              <li><strong>Privacy Policy:</strong> <a href="https://stripe.com/privacy" className="text-accent underline" target="_blank" rel="noopener noreferrer">stripe.com/privacy</a></li>
            </ul>

            <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">Vercel (Hosting)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Purpose:</strong> Website hosting and performance optimization</li>
              <li><strong>Data collected:</strong> Server logs, performance metrics</li>
              <li><strong>Privacy Policy:</strong> <a href="https://vercel.com/legal/privacy-policy" className="text-accent underline" target="_blank" rel="noopener noreferrer">vercel.com/legal/privacy-policy</a></li>
            </ul>
          </section>

          <section>
            <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">How to Control Cookies</h2>

            <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">1. Cookie Consent Banner</h3>
            <p className="mb-4">
              When you first visit our site, you'll see a cookie consent banner. You can:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Accept all cookies</li>
              <li>Accept only necessary cookies</li>
              <li>Customize your preferences</li>
            </ul>
            <p className="mt-4">
              You can change your preferences anytime by clicking the "Cookie Settings" link in the footer.
            </p>

            <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">2. Browser Settings</h3>
            <p className="mb-4">
              Most browsers allow you to control cookies through settings:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
              <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
              <li><strong>Edge:</strong> Settings → Privacy, search, and services → Cookies</li>
            </ul>
            <p className="mt-4 text-sm italic">
              Note: Blocking all cookies may prevent some website features from working properly.
            </p>

            <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">3. Opt-Out Tools</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="http://www.aboutads.info/choices/" className="text-accent underline" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance Opt-Out</a></li>
              <li><a href="http://www.youronlinechoices.com/" className="text-accent underline" target="_blank" rel="noopener noreferrer">Your Online Choices (EU)</a></li>
              <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-accent underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-Out</a></li>
            </ul>
          </section>

          <section>
            <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">Do Not Track Signals</h2>
            <p>
              Some browsers offer a "Do Not Track" (DNT) signal. Currently, there is no industry standard for how to respond to DNT signals.
              We do not currently respond to DNT signals, but we respect your cookie preferences set through our consent banner.
            </p>
          </section>

          <section>
            <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">Mobile Devices</h2>
            <p className="mb-4">
              Mobile devices also use tracking technologies:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>iOS:</strong> Settings → Privacy → Tracking → Ask Apps Not to Track</li>
              <li><strong>Android:</strong> Settings → Google → Ads → Opt out of Ads Personalization</li>
            </ul>
          </section>

          <section>
            <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date.
              We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">Contact Us</h2>
            <div className="bg-[#073742] text-cream p-6 rounded-xl">
              <p className="font-jetbrains mb-2"><strong>Questions About Cookies?</strong></p>
              <p className="font-riposte">Email: <a href="mailto:privacy@trailheadmade.com" className="text-accent underline">privacy@trailheadmade.com</a></p>
              <p className="font-riposte mt-4">
                For general privacy inquiries, see our <a href="/privacy" className="text-accent underline">Privacy Policy</a>.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[#073742]/10">
          <a href="/" className="font-jetbrains text-sm text-accent uppercase hover:underline">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}
