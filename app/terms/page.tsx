import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Trailhead",
  description: "Terms of Service for Trailheadmade.com - Legal terms governing the use of our website design and hosting services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f5f0e9] py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-axel font-bold text-4xl md:text-5xl lg:text-6xl text-[#073742] uppercase mb-6">
            Terms of Service
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
                These Terms of Service ("Terms") govern your use of services provided by Crush Digital Atelier LLC ("we," "us," "our"),
                operating as Trailhead at <a href="https://trailheadmade.com" className="text-accent underline">trailheadmade.com</a> ("Website").
              </p>
              <p className="text-lg leading-relaxed mt-4">
                By accessing our Website or purchasing our services, you agree to be bound by these Terms. If you do not agree, do not use our services.
              </p>
            </section>

            {/* 1. Services */}
            <section>
              <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">1. Services Provided</h2>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">1.1 Website Build Package ($750 USD)</h3>
              <p className="mb-4">Our standard package includes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Custom one-page website design</li>
                <li>Mobile-optimized responsive layout</li>
                <li>Professional SEO setup (meta tags, sitemap, robots.txt)</li>
                <li>Google Analytics integration</li>
                <li>SSL certificate setup</li>
                <li>Contact form integration</li>
                <li>Two (2) rounds of revisions during the build process</li>
                <li>Launch in 6 days (contingent on Day 1 content delivery)</li>
              </ul>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">1.2 Care & Hosting ($18 USD/month)</h3>
              <p className="mb-4">Our monthly hosting and maintenance plan includes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Website hosting on enterprise-grade infrastructure</li>
                <li>SSL certificate renewal and security updates</li>
                <li>Uptime monitoring and backups</li>
                <li>Performance optimization</li>
                <li>Two (2) content updates per month (up to 30 minutes each)</li>
                <li>Priority email support</li>
              </ul>
              <p className="mt-4 font-medium">
                <strong>IMPORTANT:</strong> The Care & Hosting plan is required for all websites we build. Declining this service voids the 6-day delivery SLA
                and all uptime/security coverage. Without hosting, you must arrange alternative hosting and may incur additional setup fees.
              </p>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">1.3 Additional Services</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Additional Content Updates:</strong> $10 USD per update (beyond 2/month included)</li>
                <li><strong>Additional Pages:</strong> Custom quote (discussed during kickoff call)</li>
                <li><strong>Content Writing:</strong> Custom quote for copywriting services</li>
                <li><strong>Stock Images:</strong> Custom quote for image sourcing and licensing</li>
                <li><strong>Rush Delivery:</strong> Custom quote (subject to availability)</li>
              </ul>
            </section>

            {/* 2. Client Obligations */}
            <section>
              <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">2. Client Obligations</h2>

              <p className="mb-4">To meet the 6-day delivery timeline, you must:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Deliver Content on Day 1:</strong> Provide all required content (text, images, branding materials) within 24 hours of project kickoff</li>
                <li><strong>Respond Promptly:</strong> Review drafts and provide feedback within 24-48 hours</li>
                <li><strong>Provide Accurate Information:</strong> Supply correct business details, contact information, and content</li>
                <li><strong>Own or License Content:</strong> Ensure you have rights to all provided materials (images, text, logos)</li>
                <li><strong>Maintain Active Email:</strong> Check email regularly for project updates and revision requests</li>
              </ul>

              <p className="mt-4 font-medium">
                Failure to provide timely content or feedback may delay your project launch. The 6-day timeline restarts from the date we receive complete materials.
              </p>
            </section>

            {/* 3. Payment Terms */}
            <section>
              <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">3. Payment Terms</h2>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">3.1 Build Fee</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>$750 USD one-time payment for website build</li>
                <li>Payment due in full before project kickoff</li>
                <li>Accepted methods: Credit card, debit card (via Stripe)</li>
                <li>All fees in U.S. dollars (approximate CAD equivalent shown at checkout)</li>
              </ul>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">3.2 Hosting & Maintenance</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>$18 USD per month, billed monthly via Stripe</li>
                <li>First payment due upon site launch</li>
                <li>Automatically renews each month until cancelled</li>
                <li>Cancellation requires 30 days' notice</li>
              </ul>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">3.3 Late Payment</h3>
              <p>
                If a hosting payment fails, we will attempt to charge your payment method for 7 days. After 7 days, your website may be suspended.
                After 30 days of non-payment, we reserve the right to delete your website and all associated files.
              </p>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">3.4 Taxes</h3>
              <p>
                Prices do not include applicable sales taxes (GST, PST, HST, or sales tax in your jurisdiction). Taxes will be calculated and added at checkout where required.
              </p>
            </section>

            {/* 4. Refunds & Cancellations */}
            <section>
              <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">4. Refunds & Cancellations</h2>

              <p className="mb-4">
                See our <a href="/refund-policy" className="text-accent underline">Client Satisfaction & Refund Policy</a> for complete details. Summary:
              </p>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">4.1 Build Fee Refunds</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Before Work Begins:</strong> Full refund minus payment processing fees (≈3%)</li>
                <li><strong>During Build (Days 1-3):</strong> 50% refund for work completed</li>
                <li><strong>After Day 3 or Site Launch:</strong> No refunds (two revision rounds still available)</li>
              </ul>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">4.2 Hosting Cancellation</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cancel anytime with 30 days' notice</li>
                <li>No refunds for partial months</li>
                <li>We will provide your website files upon request</li>
                <li>Site taken offline at end of billing period</li>
              </ul>
            </section>

            {/* 5. Intellectual Property */}
            <section>
              <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">5. Intellectual Property</h2>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">5.1 Client Owns Final Website</h3>
              <p className="mb-4">
                Upon full payment of the build fee, you own:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All custom design elements created specifically for your site</li>
                <li>All content you provided</li>
                <li>The final compiled website files</li>
              </ul>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">5.2 We Retain Rights To</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Underlying code frameworks and tools (Next.js, React, libraries)</li>
                <li>Reusable components and templates we developed</li>
                <li>Our design processes and methodologies</li>
                <li>Use of your site in our portfolio (with permission)</li>
              </ul>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">5.3 Portfolio Use</h3>
              <p>
                We may showcase your website in our portfolio, case studies, and marketing materials. You can request removal at any time by emailing
                <a href="mailto:hello@trailheadmade.com" className="text-accent underline ml-1">hello@trailheadmade.com</a>.
              </p>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">5.4 Third-Party Assets</h3>
              <p>
                Stock photos, fonts, or other third-party assets remain property of their respective owners and are subject to their license terms.
              </p>
            </section>

            {/* 6. Warranties & Disclaimers */}
            <section>
              <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">6. Warranties & Disclaimers</h2>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">6.1 What We Guarantee</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your website will be mobile-responsive and function across modern browsers (Chrome, Firefox, Safari, Edge)</li>
                <li>Your site will load quickly and meet industry-standard performance benchmarks</li>
                <li>We will deliver within 6 days if you provide content on Day 1</li>
                <li>Your site will be secure with SSL encryption</li>
              </ul>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">6.2 What We Don't Guarantee</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Search Engine Rankings:</strong> We provide baseline SEO setup but cannot guarantee specific rankings</li>
                <li><strong>Traffic or Sales:</strong> Website performance depends on your marketing, content, and market conditions</li>
                <li><strong>100% Uptime:</strong> While rare, hosting providers may experience occasional downtime for maintenance or outages</li>
                <li><strong>Compatibility with All Devices:</strong> We test on modern devices; legacy browsers (IE11, older mobile devices) may have limited support</li>
              </ul>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">6.3 Disclaimer</h3>
              <p className="font-medium">
                SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES INCLUDING MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT TO THE FULLEST EXTENT PERMITTED BY LAW.
              </p>
            </section>

            {/* 7. Limitation of Liability */}
            <section>
              <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">7. Limitation of Liability</h2>

              <p className="mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Our total liability for any claim arising from these Terms or our services shall not exceed the amount you paid us in the 12 months
                  preceding the claim (or $750 USD, whichever is greater)
                </li>
                <li>
                  We are not liable for indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, use, or goodwill
                </li>
                <li>
                  We are not responsible for losses caused by third-party services (hosting providers, payment processors, email services), though we will
                  assist with resolving issues
                </li>
                <li>
                  We are not liable for client-provided content that infringes third-party rights or violates laws
                </li>
              </ul>
            </section>

            {/* 8. Indemnification */}
            <section>
              <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">8. Indemnification</h2>

              <p>
                You agree to indemnify and hold harmless Crush Digital Atelier LLC, its officers, employees, and contractors from any claims, damages,
                losses, or expenses (including legal fees) arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your breach of these Terms</li>
                <li>Content you provide that infringes third-party intellectual property rights</li>
                <li>Your use of the website in violation of applicable laws</li>
                <li>Any misrepresentation of ownership or licensing of materials you provide</li>
              </ul>
            </section>

            {/* 9. Acceptable Use */}
            <section>
              <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">9. Acceptable Use Policy</h2>

              <p className="mb-4">You agree not to use our services to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Host or distribute illegal content, malware, or spam</li>
                <li>Infringe intellectual property rights of others</li>
                <li>Engage in fraudulent, deceptive, or misleading practices</li>
                <li>Violate privacy rights or applicable data protection laws</li>
                <li>Distribute hate speech, harassment, or harmful content</li>
                <li>Overload or disrupt our infrastructure</li>
              </ul>

              <p className="mt-4 font-medium">
                We reserve the right to suspend or terminate services immediately if we determine your use violates this policy.
              </p>
            </section>

            {/* 10. Termination */}
            <section>
              <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">10. Termination</h2>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">10.1 By Client</h3>
              <p>
                You may cancel hosting services with 30 days' written notice. Build projects may be cancelled subject to our refund policy.
              </p>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">10.2 By Trailhead</h3>
              <p className="mb-4">We may terminate services immediately if:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You breach these Terms or our Acceptable Use Policy</li>
                <li>Payment is 30+ days overdue</li>
                <li>We are required to do so by law or court order</li>
                <li>Continuing service would cause legal or reputational harm</li>
              </ul>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">10.3 Effect of Termination</h3>
              <p>
                Upon termination, we will provide you with your website files within 7 business days. After 30 days, we may permanently delete all files.
              </p>
            </section>

            {/* 11. Dispute Resolution */}
            <section>
              <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">11. Dispute Resolution & Governing Law</h2>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">11.1 Informal Resolution</h3>
              <p>
                Before pursuing formal legal action, you agree to contact us at <a href="mailto:hello@trailheadmade.com" className="text-accent underline">hello@trailheadmade.com</a> to
                seek informal resolution. We commit to working in good faith to resolve disputes within 30 days.
              </p>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">11.2 Governing Law</h3>
              <p>
                These Terms are governed by the laws of the State of Wyoming, United States, without regard to conflict of law principles.
              </p>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">11.3 Jurisdiction</h3>
              <p>
                Any legal action must be brought in the state or federal courts located in Wyoming, USA. You consent to personal jurisdiction in these courts.
              </p>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">11.4 Arbitration (Optional)</h3>
              <p>
                By mutual agreement, disputes may be resolved through binding arbitration under the American Arbitration Association rules.
              </p>
            </section>

            {/* 12. General Provisions */}
            <section>
              <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">12. General Provisions</h2>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">12.1 Entire Agreement</h3>
              <p>
                These Terms, together with our Privacy Policy and Refund Policy, constitute the entire agreement between you and Crush Digital Atelier LLC
                regarding our services.
              </p>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">12.2 Severability</h3>
              <p>
                If any provision is found unenforceable, the remaining provisions remain in full effect.
              </p>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">12.3 No Waiver</h3>
              <p>
                Our failure to enforce any right or provision does not constitute a waiver of that right.
              </p>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">12.4 Assignment</h3>
              <p>
                You may not assign or transfer these Terms. We may assign our rights to any affiliate or successor.
              </p>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">12.5 Force Majeure</h3>
              <p>
                We are not liable for delays or failures caused by events beyond our reasonable control (natural disasters, pandemics, internet outages, etc.).
              </p>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">12.6 Changes to Terms</h3>
              <p>
                We may update these Terms from time to time. Material changes will be posted on our website with an updated "Last Updated" date.
                Continued use after changes constitutes acceptance.
              </p>
            </section>

            {/* 13. Contact */}
            <section>
              <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">13. Contact Information</h2>

              <div className="bg-[#073742] text-cream p-6 rounded-xl">
                <p className="font-jetbrains mb-2"><strong>Crush Digital Atelier LLC</strong></p>
                <p className="font-riposte">Operating as: Trailhead</p>
                <p className="font-riposte">Email: <a href="mailto:hello@trailheadmade.com" className="text-accent underline">hello@trailheadmade.com</a></p>
                <p className="font-riposte">Website: <a href="https://trailheadmade.com" className="text-accent underline">trailheadmade.com</a></p>
                <p className="font-riposte mt-4">
                  Business Location: Red Deer, Alberta, Canada<br />
                  Legal Entity: Wyoming, USA
                </p>
              </div>
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
  );
}
