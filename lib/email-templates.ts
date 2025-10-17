/**
 * Email Templates for Trailhead
 *
 * Beautiful, responsive email templates for customer communication
 */

export const welcomeEmail = (name: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Trailhead</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
      line-height: 1.6;
      color: #073742;
      background-color: #f5f0e9;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: #073742;
      color: #f5f0e9;
      padding: 40px 30px;
      text-align: center;
      border-radius: 8px 8px 0 0;
    }
    .header h1 {
      margin: 0;
      font-size: 32px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: -1px;
    }
    .content {
      background: #ffffff;
      padding: 40px 30px;
      border: 2px solid #073742;
      border-top: none;
      border-radius: 0 0 8px 8px;
    }
    .content p {
      margin: 0 0 16px 0;
      font-size: 16px;
    }
    .content strong {
      color: #073742;
      font-weight: 600;
    }
    .content ol, .content ul {
      margin: 16px 0;
      padding-left: 24px;
    }
    .content li {
      margin-bottom: 8px;
    }
    .cta-button {
      display: inline-block;
      background: #c8e3da;
      color: #073742;
      padding: 14px 28px;
      text-decoration: none;
      border-radius: 50px;
      font-weight: 600;
      margin: 24px 0;
      text-transform: uppercase;
      font-size: 14px;
      letter-spacing: 0.5px;
    }
    .cta-button:hover {
      background: #b3d4c7;
    }
    .footer {
      text-align: center;
      padding: 30px 20px;
      color: #666;
      font-size: 14px;
    }
    .footer a {
      color: #073742;
      text-decoration: none;
    }
    @media only screen and (max-width: 600px) {
      .container {
        padding: 10px;
      }
      .header {
        padding: 30px 20px;
      }
      .header h1 {
        font-size: 24px;
      }
      .content {
        padding: 30px 20px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Welcome to Trailhead!</h1>
    </div>
    <div class="content">
      <p>Hi ${name}!</p>

      <p>Thanks for reaching out! We got your message and we're excited to help you build a professional website.</p>

      <p><strong>Here's what happens next:</strong></p>
      <ol>
        <li>We'll review your project details</li>
        <li>Get back to you within 24 hours</li>
        <li>If it's a good fit, we'll send over a proposal</li>
      </ol>

      <center>
        <a href="https://trailheadmade.com/#work" class="cta-button">Check Out Our Work →</a>
      </center>

      <p><strong>Quick reminder of what you'll get:</strong></p>
      <ul>
        <li>✅ Custom-designed website in 1 week</li>
        <li>✅ $750 flat fee - no surprises</li>
        <li>✅ Mobile-optimized & fast</li>
        <li>✅ SEO-ready from day one</li>
      </ul>

      <p>Questions? Just hit reply!</p>

      <p style="margin-top: 24px;">
        Best,<br>
        <strong>Jason</strong><br>
        Trailhead
      </p>
    </div>
    <div class="footer">
      <p>
        <strong>Trailhead</strong><br>
        <a href="mailto:hello@trailheadmade.com">hello@trailheadmade.com</a><br>
        <a href="https://trailheadmade.com">trailheadmade.com</a>
      </p>
      <p style="margin-top: 20px; font-size: 12px; color: #999;">
        You're receiving this because you contacted us through our website.
      </p>
    </div>
  </div>
</body>
</html>
`;

export const followUpEmail = (name: string, businessType: string = "business") => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Following up on your website project</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      line-height: 1.6;
      color: #073742;
      background-color: #f5f0e9;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .content {
      background: #ffffff;
      padding: 40px 30px;
      border: 2px solid #073742;
      border-radius: 8px;
    }
    .content p {
      margin: 0 0 16px 0;
      font-size: 16px;
    }
    .contact-options {
      background: #f5f0e9;
      padding: 20px;
      border-radius: 6px;
      margin: 24px 0;
    }
    .contact-options p {
      margin: 8px 0;
      font-size: 16px;
    }
    .footer {
      text-align: center;
      padding: 20px;
      color: #666;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="content">
      <p>Hi ${name},</p>

      <p>Just wanted to follow up on your website inquiry from a few days ago.</p>

      <p>We know you're busy running your ${businessType}, so I wanted to make this easy:</p>

      <div class="contact-options">
        <p>📅 <a href="https://trailheadmade.com/#contact">Book a 15-min call</a></p>
        <p>💬 Text me: (403) 404-0014</p>
        <p>📧 Reply to this email</p>
      </div>

      <p>No pressure - just wanted to make sure you saw our response!</p>

      <p style="font-style: italic; color: #666; font-size: 15px;">
        P.S. We're currently booking projects for ${new Date().toLocaleString('default', { month: 'long' })}.
        If you want to launch soon, let's chat this week.
      </p>

      <p style="margin-top: 24px;">
        Cheers,<br>
        <strong>Jason</strong>
      </p>
    </div>
    <div class="footer">
      <p style="font-size: 12px; color: #999;">
        <a href="https://trailheadmade.com" style="color: #073742; text-decoration: none;">Unsubscribe</a>
      </p>
    </div>
  </div>
</body>
</html>
`;

export const promoEmail = (name: string = "there") => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Launch Your Website in 1 Week</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      line-height: 1.6;
      color: #073742;
      background-color: #f5f0e9;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: #c8e3da;
      color: #073742;
      padding: 40px 30px;
      text-align: center;
      border-radius: 8px 8px 0 0;
      border: 2px solid #073742;
      border-bottom: none;
    }
    .header h1 {
      margin: 0 0 10px 0;
      font-size: 28px;
      font-weight: 700;
      text-transform: uppercase;
    }
    .header p {
      margin: 0;
      font-size: 18px;
      font-weight: 500;
    }
    .content {
      background: #ffffff;
      padding: 40px 30px;
      border: 2px solid #073742;
      border-top: none;
      border-radius: 0 0 8px 8px;
    }
    .content p {
      margin: 0 0 16px 0;
      font-size: 16px;
    }
    .highlight-box {
      background: #f5f0e9;
      border-left: 4px solid #c8e3da;
      padding: 20px;
      margin: 24px 0;
    }
    .cta-button {
      display: inline-block;
      background: #073742;
      color: #ffffff;
      padding: 16px 32px;
      text-decoration: none;
      border-radius: 50px;
      font-weight: 600;
      margin: 24px 0;
      text-transform: uppercase;
      font-size: 16px;
    }
    .footer {
      text-align: center;
      padding: 20px;
      color: #666;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🚀 Limited Spots Open</h1>
      <p>Launch in 1 Week for $750</p>
    </div>
    <div class="content">
      <p>Hey ${name}, ready to finally get that website done?</p>

      <p>Most agencies take 2-3 months and charge $5,000+.</p>

      <p><strong>We do it in 1 week for $750.</strong></p>

      <div class="highlight-box">
        <p><strong>Here's what's included:</strong></p>
        <ul style="margin: 12px 0; padding-left: 20px;">
          <li>Custom design (no templates)</li>
          <li>Mobile-first & lightning fast</li>
          <li>Contact forms that actually work</li>
          <li>SEO optimization</li>
          <li>Free hosting for 1 year</li>
        </ul>
      </div>

      <p style="font-size: 18px; font-weight: 600; color: #c8e3da;">
        🚀 Only 3 spots available this month
      </p>

      <center>
        <a href="https://trailheadmade.com/#contact" class="cta-button">Book Your Spot →</a>
      </center>

      <p style="font-size: 15px; color: #666;">
        Want to chat first? Reply to this email or text (403) 404-0014.
      </p>

      <p style="margin-top: 24px;">
        Simple. Fast. Professional.<br><br>
        <strong>- Jason at Trailhead</strong>
      </p>
    </div>
    <div class="footer">
      <p>
        <a href="mailto:hello@trailheadmade.com" style="color: #073742;">hello@trailheadmade.com</a>
      </p>
      <p style="margin-top: 10px; font-size: 12px; color: #999;">
        <a href="https://trailheadmade.com" style="color: #999;">Unsubscribe</a>
      </p>
    </div>
  </div>
</body>
</html>
`;
