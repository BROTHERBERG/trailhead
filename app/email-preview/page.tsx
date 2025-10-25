"use client";

import { useState } from "react";
import { dripSequence } from "@/lib/email-templates";

export default function EmailPreviewPage() {
  const [selectedEmail, setSelectedEmail] = useState(0);

  const emails = [
    {
      day: 0,
      subject: "Welcome to Trailhead Weekly Insights",
      getHtml: () => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Trailhead!</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f0e9;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <div style="background: #ffffff; border: 2px solid #073742; border-radius: 8px; padding: 40px 30px;">
      <h1 style="color: #073742; font-size: 32px; margin-bottom: 20px;">Welcome to Trailhead!</h1>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
        Thanks for subscribing to our weekly insights. You'll receive tips on fast website launches, SEO, and running a digital business—delivered straight to your inbox every week.
      </p>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
        Here's what to expect:
      </p>

      <ul style="color: #073742; font-size: 16px; line-height: 1.8; margin-bottom: 30px;">
        <li>Actionable website tips you can implement immediately</li>
        <li>Real business examples and case studies</li>
        <li>SEO strategies that actually work</li>
        <li>Behind-the-scenes from our 6-day launches</li>
      </ul>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
        Need a website? We build professional sites in 6 days for $750 + $18/mo hosting.
      </p>

      <center>
        <a href="https://trailheadmade.com/#contact" style="display: inline-block; background-color: #ff6b35; color: #fcf6ed; padding: 14px 32px; text-decoration: none; border-radius: 50px; font-weight: bold; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">
          Start Your Build
        </a>
      </center>
    </div>

    <div style="text-align: center; padding: 30px 20px; color: #666; font-size: 14px;">
      <p style="margin: 0 0 10px 0;">
        <strong>Trailhead</strong><br>
        Calgary, Alberta<br>
        <a href="https://trailheadmade.com" style="color: #073742; text-decoration: none;">trailheadmade.com</a>
      </p>
    </div>
  </div>
</body>
</html>
      `
    },
    ...dripSequence
  ];

  return (
    <div className="min-h-screen bg-[#f5f0e9] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="font-axel font-bold text-4xl text-[#073742] uppercase mb-2">
            Email Drip Campaign Preview
          </h1>
          <p className="font-riposte text-[#073742]/70">
            Preview and edit your automated email sequence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Email List Sidebar */}
          <div className="lg:col-span-3">
            <div className="bg-white border-2 border-[#073742] rounded-2xl p-4 sticky top-8">
              <h2 className="font-jetbrains text-sm uppercase text-[#073742] tracking-wider mb-4">
                Email Sequence
              </h2>
              <div className="space-y-2">
                {emails.map((email, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedEmail(index)}
                    className={`w-full text-left p-3 rounded-lg font-riposte text-sm transition-colors ${
                      selectedEmail === index
                        ? "bg-[#073742] text-cream"
                        : "bg-[#f5f0e9] text-[#073742] hover:bg-[#073742]/10"
                    }`}
                  >
                    <div className="font-bold mb-1">Day {email.day}</div>
                    <div className="text-xs opacity-80 line-clamp-2">
                      {email.subject}
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-[#073742]/10">
                <a
                  href="/lib/email-templates.ts"
                  className="text-xs font-riposte text-accent hover:underline"
                >
                  → Edit Templates in VS Code
                </a>
              </div>
            </div>
          </div>

          {/* Email Preview */}
          <div className="lg:col-span-9">
            <div className="bg-white border-2 border-[#073742] rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#073742]/10">
                <div>
                  <div className="font-jetbrains text-xs uppercase text-[#073742]/60 mb-1">
                    Subject Line
                  </div>
                  <div className="font-riposte text-lg font-bold text-[#073742]">
                    {emails[selectedEmail].subject}
                  </div>
                </div>
                <div className="bg-accent/20 px-4 py-2 rounded-full">
                  <span className="font-jetbrains text-xs uppercase font-bold text-[#073742]">
                    Day {emails[selectedEmail].day}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex gap-2">
                  <span className="font-jetbrains text-xs uppercase text-[#073742]/60 w-16">
                    From:
                  </span>
                  <span className="font-riposte text-sm text-[#073742]">
                    Trailhead &lt;hello@trailheadmade.com&gt;
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="font-jetbrains text-xs uppercase text-[#073742]/60 w-16">
                    To:
                  </span>
                  <span className="font-riposte text-sm text-[#073742]/60">
                    subscriber@example.com
                  </span>
                </div>
              </div>
            </div>

            {/* Email HTML Preview */}
            <div className="bg-white border-2 border-[#073742] rounded-2xl overflow-hidden">
              <div className="bg-[#073742] text-cream px-6 py-3 flex items-center justify-between">
                <span className="font-jetbrains text-xs uppercase tracking-wider">
                  Email Preview
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      const html = emails[selectedEmail].getHtml();
                      const blob = new Blob([html], { type: "text/html" });
                      const url = URL.createObjectURL(blob);
                      window.open(url, "_blank");
                    }}
                    className="text-xs font-riposte text-accent hover:text-cream transition-colors"
                  >
                    Open in New Tab
                  </button>
                </div>
              </div>
              <div className="p-6 bg-[#f5f0e9]">
                <iframe
                  srcDoc={emails[selectedEmail].getHtml()}
                  className="w-full h-[800px] bg-white rounded-lg border border-[#073742]/20"
                  title="Email Preview"
                />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-6 bg-[#c8e3da]/30 border-2 border-[#073742]/10 rounded-2xl p-6">
              <h3 className="font-jetbrains text-sm uppercase text-[#073742] tracking-wider mb-4">
                Quick Actions
              </h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(emails[selectedEmail].getHtml());
                    alert("HTML copied to clipboard!");
                  }}
                  className="bg-[#073742] text-cream font-riposte px-6 py-3 rounded-full text-sm uppercase tracking-wide hover:bg-[#073742]/90 transition-all"
                >
                  Copy HTML
                </button>
                <button
                  onClick={async () => {
                    const response = await fetch("/api/newsletter", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ email: "test@example.com" })
                    });
                    const data = await response.json();
                    alert(data.success ? "Test email sent!" : "Error: " + data.error);
                  }}
                  className="border-2 border-[#073742] text-[#073742] font-riposte px-6 py-3 rounded-full text-sm uppercase tracking-wide hover:bg-[#073742] hover:text-cream transition-all"
                >
                  Send Test Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
