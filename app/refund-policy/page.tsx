import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Trailhead",
  description: "Client Satisfaction & Refund Policy for Trailheadmade.com - Our commitment to delivering quality and handling refunds fairly.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar />
    <div className="min-h-screen bg-[#f5f0e9] py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-axel font-bold text-4xl md:text-5xl lg:text-6xl text-[#073742] uppercase mb-6">
            Client Satisfaction &<br/>Refund Policy
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
                At Trailhead (operated by Crush Digital Atelier LLC), we're committed to delivering high-quality websites that meet your expectations.
                This policy outlines our refund procedures, cancellation terms, and our commitment to client satisfaction.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                This policy should be read in conjunction with our <a href="/terms" className="text-accent underline">Terms of Service</a>.
              </p>
            </section>

            {/* 1. Our Satisfaction Commitment */}
            <section>
              <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">1. Our Satisfaction Commitment</h2>

              <p className="mb-4">
                We guarantee:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Two Rounds of Revisions:</strong> Included in every $750 build package during the development process</li>
                <li><strong>6-Day Delivery:</strong> Website launched within 6 days of receiving your Day 1 content</li>
                <li><strong>Quality Standards:</strong> Mobile-responsive, fast-loading, SEO-ready, and secure websites</li>
                <li><strong>Transparent Communication:</strong> Regular updates throughout the build process</li>
              </ul>

              <p className="mt-4 font-medium">
                If we can't deliver what we promised, we'll make it right or refund your build fee according to the terms below.
              </p>
            </section>

            {/* 2. Build Fee Refunds */}
            <section>
              <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">2. Build Fee Refunds ($750)</h2>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">2.1 Before Work Begins (Full Refund)</h3>
              <p className="mb-4">
                <strong>Eligible Period:</strong> Before we start design work (typically within 24 hours of payment)
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full refund minus payment processing fees (~3% or approximately $22.50)</li>
                <li>No work has been started on your project</li>
                <li>Refund processed within 5-7 business days</li>
              </ul>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">2.2 During Build - Days 1-3 (Partial Refund)</h3>
              <p className="mb-4">
                <strong>Eligible Period:</strong> After design work has started but before Day 4
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>50% refund ($375)</strong> for work completed</li>
                <li>You retain rights to any work completed up to cancellation point</li>
                <li>Includes initial design concepts, mockups, and partial development</li>
                <li>Refund processed within 7-10 business days</li>
              </ul>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">2.3 After Day 3 or Site Launch (No Refund)</h3>
              <p className="mb-4">
                <strong>No refunds available after:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Day 4 of the build process</li>
                <li>Site has been launched to production</li>
                <li>Two revision rounds have been used</li>
              </ul>
              <p className="mt-4">
                <strong>Why:</strong> By this point, significant work has been completed, and you still have access to your two included revision rounds
                to address any concerns.
              </p>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">2.4 Exception: Our Failure to Deliver</h3>
              <p className="mb-4">
                If we fail to deliver your website within the agreed timeline <strong>due to our fault</strong> (not client delays), you may be eligible for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Delays 1-3 Days:</strong> $50 credit toward hosting or future services</li>
                <li><strong>Delays 4-7 Days:</strong> $100 credit toward hosting or future services</li>
                <li><strong>Delays 8+ Days:</strong> Full refund option or completion with $150 credit</li>
              </ul>
              <p className="mt-4 font-medium">
                Note: Delays caused by late content delivery, slow client feedback, or force majeure events do not qualify for refunds.
              </p>
            </section>

            {/* 3. Hosting & Maintenance Cancellation */}
            <section>
              <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">3. Hosting & Maintenance Cancellation ($18/mo)</h2>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">3.1 How to Cancel</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Email <a href="mailto:hello@trailheadmade.com" className="text-accent underline">hello@trailheadmade.com</a> with "Cancel Hosting" in the subject line</li>
                <li>Provide 30 days' written notice</li>
                <li>We'll confirm cancellation and final billing date via email</li>
              </ul>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">3.2 Cancellation Terms</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>No Refunds for Partial Months:</strong> If you cancel mid-month, you're charged for the full month</li>
                <li><strong>Site Remains Live:</strong> Your website stays online until the end of your current billing period</li>
                <li><strong>File Delivery:</strong> We'll provide your complete website files within 7 business days of cancellation</li>
                <li><strong>Data Deletion:</strong> After 30 days, we permanently delete all files and backups</li>
              </ul>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">3.3 What Happens After Cancellation</h3>
              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-xl">
                <p className="font-medium mb-2">⚠️ Important:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your website will go offline at the end of the billing period</li>
                  <li>Email forwarding (if set up) will stop working</li>
                  <li>SSL certificate will expire (site will show "Not Secure")</li>
                  <li>Backups will be deleted after 30 days</li>
                  <li>You'll need to arrange alternative hosting to keep your site live</li>
                </ul>
              </div>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">3.4 Reactivation</h3>
              <p>
                If you cancel but want to reactivate within 30 days, contact us. We may be able to restore your site for a $50 reactivation fee.
                After 30 days, files are permanently deleted and the site must be rebuilt.
              </p>
            </section>

            {/* 4. Non-Refundable Fees */}
            <section>
              <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">4. Non-Refundable Fees</h2>

              <p className="mb-4">The following are <strong>never refundable</strong>:</p>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">4.1 Hosting After Site Launch</h3>
              <p>
                Once your site is live, hosting fees for that month are non-refundable. This covers server costs, SSL, monitoring, and backups already incurred.
              </p>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">4.2 Additional Services</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Content Updates:</strong> Work completed is non-refundable ($10 per update)</li>
                <li><strong>Rush Work:</strong> Premium fees for expedited delivery are non-refundable once work begins</li>
                <li><strong>Stock Images:</strong> Licensed images purchased on your behalf are non-refundable</li>
                <li><strong>Content Writing:</strong> Custom copywriting work delivered is non-refundable</li>
                <li><strong>Additional Pages:</strong> Work completed on additional pages follows the same refund schedule as the main build</li>
              </ul>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">4.3 Payment Processing Fees</h3>
              <p>
                Stripe processing fees (~3%) are deducted from all refunds. These fees are charged by Stripe and are non-recoverable.
              </p>
            </section>

            {/* 5. Refund Process */}
            <section>
              <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">5. How to Request a Refund</h2>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">5.1 Step 1: Contact Us</h3>
              <p className="mb-4">
                Email <a href="mailto:hello@trailheadmade.com" className="text-accent underline">hello@trailheadmade.com</a> with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Subject line: "Refund Request - [Your Name]"</li>
                <li>Your project details (name, payment date, invoice number if available)</li>
                <li>Reason for refund request</li>
                <li>Preferred resolution (full/partial refund, revision, credit, etc.)</li>
              </ul>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">5.2 Step 2: We Review</h3>
              <p>
                We'll review your request within 2 business days and respond with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Confirmation of eligibility under this policy</li>
                <li>Refund amount (if applicable)</li>
                <li>Alternative solutions we can offer</li>
                <li>Timeline for processing</li>
              </ul>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">5.3 Step 3: Resolution</h3>
              <p className="mb-4">
                <strong>If Approved:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Refunds processed within 5-10 business days</li>
                <li>Refunded to original payment method via Stripe</li>
                <li>May take additional 3-5 business days to appear on your statement</li>
              </ul>

              <p className="mt-4 mb-4">
                <strong>If Denied:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We'll explain why based on this policy</li>
                <li>Offer alternative solutions (additional revisions, credit, etc.)</li>
                <li>You can escalate to our dispute resolution process (see Terms of Service)</li>
              </ul>
            </section>

            {/* 6. Dispute Resolution */}
            <section>
              <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">6. Dispute Resolution</h2>

              <p className="mb-4">
                If you disagree with our refund decision:
              </p>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">6.1 Internal Escalation</h3>
              <p>
                Request review by our senior team member within 14 days of the initial decision. Email <a href="mailto:hello@trailheadmade.com" className="text-accent underline">hello@trailheadmade.com</a> with
                "Refund Dispute - Escalation" in the subject.
              </p>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">6.2 Chargeback Warning</h3>
              <div className="bg-[#073742]/10 border-l-4 border-[#073742] p-6 rounded-r-xl">
                <p className="font-medium mb-2">⚠️ Before Filing a Chargeback:</p>
                <p>
                  Please contact us first. Chargebacks harm small businesses and often result in:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Immediate account suspension</li>
                  <li>Website taken offline</li>
                  <li>Fees charged by payment processors</li>
                  <li>Legal action for fraudulent claims</li>
                </ul>
                <p className="mt-4">
                  We're committed to fair resolution. Give us a chance to make it right before escalating to your bank.
                </p>
              </div>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">6.3 Legal Disputes</h3>
              <p>
                Formal legal disputes are governed by the dispute resolution terms in our <a href="/terms" className="text-accent underline">Terms of Service</a> (Wyoming law, informal resolution first).
              </p>
            </section>

            {/* 7. Special Circumstances */}
            <section>
              <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">7. Special Circumstances</h2>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">7.1 Force Majeure</h3>
              <p>
                If we cannot complete your project due to events beyond our control (natural disasters, pandemics, extended outages), you'll receive:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full refund of unused fees, or</li>
                <li>Project completion when able, or</li>
                <li>Credit for future services equal to fees paid</li>
              </ul>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">7.2 Client Non-Response</h3>
              <p>
                If you don't respond to our requests for content, feedback, or revisions for 30+ days:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Project considered abandoned</li>
                <li>No refund available</li>
                <li>Hosting continues to be billed if site is live</li>
                <li>You can restart the project within 60 days (files retained)</li>
              </ul>

              <h3 className="font-jetbrains text-xl font-bold text-[#073742] uppercase mb-3 mt-10">7.3 Changes in Scope</h3>
              <p>
                If you request significant changes after work begins (different design direction, new features, additional pages):
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We'll provide a new quote for additional work</li>
                <li>Timeline may be extended</li>
                <li>Original refund terms still apply to base package</li>
              </ul>
            </section>

            {/* 8. Policy Changes */}
            <section>
              <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">8. Changes to This Policy</h2>

              <p>
                We may update this policy from time to time. Material changes will be posted on our website with an updated "Last Updated" date.
                Refund requests are governed by the policy in effect at the time of your original purchase.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">9. Questions?</h2>

              <div className="bg-[#073742] text-cream p-6 rounded-xl">
                <p className="font-jetbrains mb-2"><strong>Contact Us</strong></p>
                <p className="font-riposte">Crush Digital Atelier LLC (Trailhead)</p>
                <p className="font-riposte">Email: <a href="mailto:hello@trailheadmade.com" className="text-accent underline">hello@trailheadmade.com</a></p>
                <p className="font-riposte">Response Time: Within 2 business days</p>
                <p className="font-riposte mt-4">
                  We're here to help. If you have concerns about your project or our services, reach out before requesting a refund.
                  We're committed to finding solutions that work for both parties.
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
      <Footer />
    </>
  );
}
