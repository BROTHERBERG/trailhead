import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Trailhead",
  description: "Privacy policy for Trailheadmade.com - How we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f5f0e9] py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-axel font-bold text-4xl md:text-5xl lg:text-6xl text-[#073742] uppercase mb-6">
            Privacy Policy
          </h1>
          <p className="font-riposte text-lg text-[#073742]/70">
            <strong>Effective Date:</strong> January 1, 2025<br />
            <strong>Last Updated:</strong> January 1, 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="font-riposte text-[#073742] space-y-8">

            {/* Introduction */}
            <section>
              <p className="text-lg leading-relaxed">
                Crush Digital Atelier LLC ("we," "us," "our"), operating as Trailhead at <a href="https://trailheadmade.com" className="text-accent underline">trailheadmade.com</a>,
                is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information
                when you visit our website or use our services.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                This policy complies with the Personal Information Protection and Electronic Documents Act (PIPEDA), Alberta's Personal Information Protection Act (PIPA),
                the California Consumer Privacy Act (CCPA), and incorporates GDPR principles for international visitors.
              </p>
            </section>

            {/* 1. Information We Collect */}
            <section>
              <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">1. Information We Collect</h2>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">1.1 Information You Provide</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact Information:</strong> Name, email address, phone number, business name</li>
                <li><strong>Project Information:</strong> Project descriptions, business details, website content, images, branding materials</li>
                <li><strong>Payment Information:</strong> Processed securely by Stripe (we do not store full credit card numbers)</li>
                <li><strong>Communications:</strong> Messages sent through contact forms, email correspondence, support inquiries</li>
              </ul>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">1.2 Information Collected Automatically</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Usage Data:</strong> Pages visited, time spent, click patterns, referral sources</li>
                <li><strong>Device Information:</strong> Browser type, operating system, device type, IP address</li>
                <li><strong>Cookies & Similar Technologies:</strong> Analytics cookies, session cookies, preference cookies (see our <a href="/cookies" className="text-accent underline">Cookie Policy</a>)</li>
                <li><strong>Performance Metrics:</strong> Website load times, error logs, server analytics</li>
              </ul>
            </section>

            {/* 2. How We Use Your Information */}
            <section>
              <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">2. How We Use Your Information</h2>

              <p className="mb-4">We use your information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Delivery:</strong> Building and launching your website, providing hosting and maintenance, responding to inquiries</li>
                <li><strong>Payment Processing:</strong> Processing transactions, managing subscriptions, issuing invoices</li>
                <li><strong>Communication:</strong> Sending project updates, support responses, service announcements, renewal reminders</li>
                <li><strong>Marketing:</strong> Sending promotional emails (with your consent), showcasing portfolio work (with permission)</li>
                <li><strong>Analytics & Improvement:</strong> Understanding how visitors use our site, improving user experience, optimizing performance</li>
                <li><strong>Legal Compliance:</strong> Meeting tax obligations, responding to legal requests, enforcing our Terms of Service</li>
                <li><strong>Security:</strong> Detecting fraud, preventing abuse, protecting against security threats</li>
              </ul>
            </section>

            {/* 3. Legal Basis for Processing */}
            <section>
              <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">3. Legal Basis for Processing (GDPR)</h2>

              <p className="mb-4">We process your personal data based on:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contract Performance:</strong> Processing necessary to deliver services you've requested</li>
                <li><strong>Consent:</strong> Marketing communications, portfolio showcasing, optional cookies</li>
                <li><strong>Legitimate Interests:</strong> Analytics, security, fraud prevention, business operations</li>
                <li><strong>Legal Obligation:</strong> Tax compliance, legal discovery, regulatory requirements</li>
              </ul>
            </section>

            {/* 4. How We Share Your Information */}
            <section>
              <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">4. How We Share Your Information</h2>

              <p className="mb-4">We share your information only as described below:</p>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">4.1 Service Providers</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Hosting:</strong> Vercel (U.S.) - website hosting and deployment</li>
                <li><strong>Payment Processing:</strong> Stripe (U.S.) - secure payment processing</li>
                <li><strong>Email Services:</strong> Resend (U.S.) - transactional and marketing emails</li>
                <li><strong>Analytics:</strong> Google Analytics (U.S.) - website traffic and behavior analysis</li>
                <li><strong>Cloud Storage:</strong> Various providers for project file storage and backups</li>
              </ul>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">4.2 Legal Requirements</h3>
              <p>We may disclose your information if required by law, court order, or to protect our rights, safety, or property.</p>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">4.3 Business Transfers</h3>
              <p>If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</p>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">4.4 With Your Consent</h3>
              <p>We may showcase your website in our portfolio with your explicit permission. You can request removal at any time.</p>
            </section>

            {/* 5. Data Retention */}
            <section>
              <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">5. Data Retention</h2>

              <p className="mb-4">We retain your personal information for the following periods:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Active Clients:</strong> Duration of service relationship plus 7 years for tax/legal purposes</li>
                <li><strong>Inquiries (No Purchase):</strong> 2 years, then deleted unless you opt into marketing</li>
                <li><strong>Marketing Lists:</strong> Until you unsubscribe or request deletion</li>
                <li><strong>Project Files:</strong> 1 year after project completion, then archived or deleted</li>
                <li><strong>Analytics Data:</strong> 26 months (Google Analytics default retention)</li>
                <li><strong>Legal/Compliance Records:</strong> As required by law (typically 7 years)</li>
              </ul>
            </section>

            {/* 6. Data Security */}
            <section>
              <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">6. Data Security</h2>

              <p className="mb-4">We implement industry-standard security measures:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Encryption:</strong> SSL/TLS encryption for data in transit, encryption at rest for sensitive data</li>
                <li><strong>Access Controls:</strong> Limited employee access, role-based permissions, multi-factor authentication</li>
                <li><strong>Secure Payment Processing:</strong> PCI-DSS compliant payment processing via Stripe</li>
                <li><strong>Regular Backups:</strong> Automated backups with encrypted storage</li>
                <li><strong>Monitoring:</strong> Security monitoring, intrusion detection, regular security audits</li>
              </ul>
              <p className="mt-4">
                While we strive to protect your information, no method of transmission over the Internet is 100% secure.
                We cannot guarantee absolute security.
              </p>
            </section>

            {/* 7. Breach Notification */}
            <section>
              <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">7. Data Breach Notification</h2>

              <p className="mb-4">
                In the event of a data breach that poses a real risk of significant harm, we will:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Notify affected individuals within 72 hours of discovering the breach (PIPEDA/GDPR requirement)</li>
                <li>Report the breach to the Office of the Privacy Commissioner of Canada if required</li>
                <li>Provide details about the breach, data affected, and steps we're taking to mitigate harm</li>
                <li>Offer guidance on protective measures you can take</li>
              </ul>
            </section>

            {/* 8. Your Privacy Rights */}
            <section>
              <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">8. Your Privacy Rights</h2>

              <p className="mb-4">You have the following rights regarding your personal information:</p>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">Under PIPEDA/PIPA (Canada)</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal information we hold</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Withdrawal of Consent:</strong> Withdraw consent for marketing or non-essential processing</li>
                <li><strong>Complaint:</strong> File a complaint with the Office of the Privacy Commissioner of Canada</li>
              </ul>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">Under CCPA (California Residents)</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Know:</strong> Request disclosure of data collected, sources, purposes, and third parties</li>
                <li><strong>Delete:</strong> Request deletion of your personal information (subject to exceptions)</li>
                <li><strong>Opt-Out:</strong> Opt out of sale of personal information (we do not sell your data)</li>
                <li><strong>Non-Discrimination:</strong> We will not discriminate against you for exercising your rights</li>
              </ul>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">Under GDPR (EU Visitors)</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access & Portability:</strong> Receive your data in a structured, machine-readable format</li>
                <li><strong>Rectification:</strong> Correct inaccurate personal data</li>
                <li><strong>Erasure:</strong> Request deletion (right to be forgotten)</li>
                <li><strong>Restriction:</strong> Limit how we process your data</li>
                <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
              </ul>

              <p className="mt-6">
                <strong>To exercise any of these rights, contact us at:</strong><br />
                Email: <a href="mailto:privacy@trailheadmade.com" className="text-accent underline">privacy@trailheadmade.com</a><br />
                We will respond within 30 days (45 days for CCPA requests).
              </p>
            </section>

            {/* 9. Cross-Border Data Transfers */}
            <section>
              <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">9. Cross-Border Data Transfers</h2>

              <p className="mb-4">
                We are a U.S.-based company (Wyoming LLC). Your data may be transferred to and stored in the United States
                and other countries where our service providers operate.
              </p>
              <p>
                These countries may have different data protection laws. By using our services, you consent to this transfer.
                We use contractual safeguards (Standard Contractual Clauses) where required to ensure adequate protection.
              </p>
            </section>

            {/* 10. Cookies */}
            <section>
              <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">10. Cookies & Tracking Technologies</h2>

              <p className="mb-4">
                We use cookies and similar technologies to improve your experience. For detailed information, see our <a href="/cookies" className="text-accent underline">Cookie Policy</a>.
              </p>
              <p>
                You can control cookies through your browser settings and our cookie consent banner.
              </p>
            </section>

            {/* 11. Children's Privacy */}
            <section>
              <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">11. Children's Privacy</h2>

              <p>
                Our services are not directed to individuals under 18. We do not knowingly collect personal information from children.
                If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            {/* 12. Marketing Communications */}
            <section>
              <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">12. Marketing Communications</h2>

              <p className="mb-4">
                We comply with Canada's Anti-Spam Legislation (CASL) and CAN-SPAM Act:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We only send marketing emails with your express or implied consent</li>
                <li>Every email includes a clear unsubscribe link</li>
                <li>We honor unsubscribe requests within 10 business days</li>
                <li>Our emails clearly identify the sender (Trailhead / Crush Digital Atelier LLC)</li>
              </ul>
              <p className="mt-4">
                To unsubscribe: Click the unsubscribe link in any email or contact <a href="mailto:privacy@trailheadmade.com" className="text-accent underline">privacy@trailheadmade.com</a>
              </p>
            </section>

            {/* 13. Changes to This Policy */}
            <section>
              <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">13. Changes to This Policy</h2>

              <p>
                We may update this Privacy Policy from time to time. We will notify you of material changes by:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Posting a notice on our website</li>
                <li>Updating the "Last Updated" date at the top of this page</li>
                <li>Sending an email to active clients (for significant changes)</li>
              </ul>
              <p className="mt-4">
                Continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* 14. Contact Us */}
            <section>
              <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">14. Contact Us</h2>

              <p className="mb-4">
                For questions about this Privacy Policy or to exercise your privacy rights:
              </p>
              <div className="bg-[#073742] text-cream p-6 rounded-xl">
                <p className="font-jetbrains mb-2"><strong>Crush Digital Atelier LLC</strong></p>
                <p className="font-riposte">Operating as: Trailhead</p>
                <p className="font-riposte">Privacy Contact: <a href="mailto:privacy@trailheadmade.com" className="text-accent underline">privacy@trailheadmade.com</a></p>
                <p className="font-riposte">Website: <a href="https://trailheadmade.com" className="text-accent underline">trailheadmade.com</a></p>
                <p className="font-riposte mt-4">
                  Canadian Address: Red Deer, Alberta, Canada<br />
                  U.S. Registered Entity: Wyoming, USA
                </p>
              </div>

              <p className="mt-6">
                <strong>Regulatory Bodies:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Canada:</strong> Office of the Privacy Commissioner of Canada<br />
                  Website: <a href="https://www.priv.gc.ca" className="text-accent underline" target="_blank" rel="noopener noreferrer">priv.gc.ca</a><br />
                  Phone: 1-800-282-1376
                </li>
                <li>
                  <strong>California:</strong> California Attorney General's Office<br />
                  Website: <a href="https://oag.ca.gov/privacy" className="text-accent underline" target="_blank" rel="noopener noreferrer">oag.ca.gov/privacy</a>
                </li>
              </ul>
            </section>

          </div>
        </div>

        {/* Back Link */}
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
