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

// Newsletter Drip Sequence
export type DripEmail = {
  day: number;
  subject: string;
  getHtml: () => string;
};

export const dripSequence: DripEmail[] = [
  // Day 2: Why fast launches matter
  {
    day: 2,
    subject: "Why waiting to launch costs you money",
    getHtml: () => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Why Fast Launches Win</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f0e9;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <div style="background: #ffffff; border: 2px solid #073742; border-radius: 8px; padding: 40px 30px;">
      <h1 style="color: #073742; font-size: 28px; margin: 0 0 20px 0;">Why Fast Launches Win</h1>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Hey there,
      </p>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Most businesses spend 3-6 months building their first website. Committee decisions, endless revisions, feature creep.
      </p>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Meanwhile, they're losing customers every single day.
      </p>

      <h2 style="color: #073742; font-size: 22px; margin: 30px 0 15px 0;">The Real Cost of Waiting</h2>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 15px 0;">
        Let's say you're a local contractor charging $5,000 per job:
      </p>

      <ul style="color: #073742; font-size: 16px; line-height: 1.8; margin: 0 0 20px 20px; padding-left: 20px;">
        <li>Week 1 without website: Lost 2 inquiries = -$10,000</li>
        <li>Week 2 without website: Lost 2 more = -$10,000</li>
        <li>Month 1 total: <strong>-$40,000 in potential revenue</strong></li>
      </ul>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        That "free" DIY website? It's costing you thousands.
      </p>

      <h2 style="color: #073742; font-size: 22px; margin: 30px 0 15px 0;">What a 6-Day Timeline Forces</h2>

      <ul style="color: #073742; font-size: 16px; line-height: 1.8; margin: 0 0 30px 20px; padding-left: 20px;">
        <li>Clear messaging (no time for overthinking)</li>
        <li>Focus on conversion (not just looking pretty)</li>
        <li>Real business results (start testing immediately)</li>
      </ul>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
        <strong>Launched beats perfect. Every single time.</strong>
      </p>

      <center>
        <a href="https://trailheadmade.com/blog/why-6-day-launches-win" style="display: inline-block; background-color: #ff6b35; color: #fcf6ed; padding: 14px 32px; text-decoration: none; border-radius: 50px; font-weight: bold; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 30px;">
          Read the Full Story
        </a>
      </center>

      <p style="color: #073742; font-size: 14px; line-height: 1.6; margin: 30px 0 0 0;">
        Tomorrow I'll share a real client story that proves this works.
      </p>
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

  // Day 4: Real client success story
  {
    day: 4,
    subject: "How Sarah went from $90k to $135k with one website",
    getHtml: () => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>From Instagram DMs to Automated Sales</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f0e9;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <div style="background: #ffffff; border: 2px solid #073742; border-radius: 8px; padding: 40px 30px;">
      <h1 style="color: #073742; font-size: 28px; margin: 0 0 20px 0;">From Instagram DMs to Automated Sales</h1>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Meet Sarah. Wedding photographer. 12,000 Instagram followers.
      </p>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        She was killing it on Instagram—booking 30 weddings a year via DMs. But she was spending 400+ hours a year answering the same questions:
      </p>

      <ul style="color: #073742; font-size: 16px; line-height: 1.8; margin: 0 0 20px 20px; padding-left: 20px;">
        <li>"What are your packages?"</li>
        <li>"Do you travel?"</li>
        <li>"How do we book?"</li>
        <li>"What's your editing style?"</li>
      </ul>

      <h2 style="color: #073742; font-size: 22px; margin: 30px 0 15px 0;">What Changed</h2>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        We built her a simple one-page website in 6 days:
      </p>

      <ul style="color: #073742; font-size: 16px; line-height: 1.8; margin: 0 0 30px 20px; padding-left: 20px;">
        <li>Portfolio gallery with her best work</li>
        <li>Clear pricing and packages</li>
        <li>Contact form that qualifies leads</li>
        <li>Link in her Instagram bio</li>
      </ul>

      <h2 style="color: #073742; font-size: 22px; margin: 30px 0 15px 0;">The Results (Year 2)</h2>

      <div style="background-color: #c8e3da; border-left: 4px solid #1e5c5b; padding: 20px; margin: 30px 0; border-radius: 8px;">
        <p style="color: #073742; font-size: 16px; line-height: 1.8; margin: 0;">
          <strong>45 weddings booked</strong> (up from 30)<br>
          <strong>$135,000 revenue</strong> (up from $90k)<br>
          <strong>50 hours on DMs</strong> (down from 400)<br>
          <strong>350 hours back</strong> to shoot more weddings
        </p>
      </div>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Same Instagram following. Same quality work. But now her website does the selling while she sleeps.
      </p>

      <h2 style="color: #073742; font-size: 22px; margin: 30px 0 15px 0;">The Pattern</h2>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
        Every successful business we work with has the same story: social media drives discovery, the website drives conversion.
      </p>

      <center>
        <a href="https://trailheadmade.com/blog/website-vs-social-media" style="display: inline-block; background-color: #ff6b35; color: #fcf6ed; padding: 14px 32px; text-decoration: none; border-radius: 50px; font-weight: bold; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 30px;">
          Read: Website vs Social Media
        </a>
      </center>

      <p style="color: #073742; font-size: 14px; line-height: 1.6; margin: 30px 0 0 0;">
        Next email: The 3 mistakes I see businesses make with their first website.
      </p>
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

  // Day 6: Common website mistakes
  {
    day: 6,
    subject: "3 mistakes that kill website conversions",
    getHtml: () => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Website Mistakes Costing You Customers</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f0e9;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <div style="background: #ffffff; border: 2px solid #073742; border-radius: 8px; padding: 40px 30px;">
      <h1 style="color: #073742; font-size: 28px; margin: 0 0 20px 0;">The Website Mistakes Costing You Customers</h1>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        I've reviewed hundreds of small business websites. Here are the three killers I see over and over:
      </p>

      <h2 style="color: #073742; font-size: 22px; margin: 30px 0 15px 0;">❌ Mistake #1: Unclear Value Proposition</h2>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 15px 0;">
        <strong>Bad:</strong> "We provide innovative solutions for modern businesses"
      </p>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        <strong>Good:</strong> "Professional websites built in 6 days. $750 + $18/mo hosting."
      </p>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
        People need to know exactly what you do and what it costs—in 3 seconds.
      </p>

      <h2 style="color: #073742; font-size: 22px; margin: 30px 0 15px 0;">❌ Mistake #2: Too Many Options</h2>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Every additional choice reduces conversions by ~10%. If you have 5 different "call-to-action" buttons, nobody knows which one to click.
      </p>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
        <strong>Fix:</strong> One clear path. "Start Your Build" or "Book a Call"—pick one and make it obvious.
      </p>

      <h2 style="color: #073742; font-size: 22px; margin: 30px 0 15px 0;">❌ Mistake #3: No Social Proof</h2>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        "We're the best!" means nothing without proof. You need:
      </p>

      <ul style="color: #073742; font-size: 16px; line-height: 1.8; margin: 0 0 30px 20px; padding-left: 20px;">
        <li>Client testimonials with real names</li>
        <li>Portfolio showing actual results</li>
        <li>Credentials or certifications</li>
      </ul>

      <div style="background-color: #fff7f0; border-left: 4px solid #ff6b35; padding: 20px; margin: 30px 0; border-radius: 8px;">
        <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0;">
          <strong>Pro Tip:</strong> Even 2-3 testimonials increase conversions by 34%. Don't launch without them.
        </p>
      </div>

      <h2 style="color: #073742; font-size: 22px; margin: 30px 0 15px 0;">The Good News</h2>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
        These are all fixable in a day. Most businesses just need someone to tell them what's broken.
      </p>

      <center>
        <a href="https://trailheadmade.com/#contact" style="display: inline-block; background-color: #ff6b35; color: #fcf6ed; padding: 14px 32px; text-decoration: none; border-radius: 50px; font-weight: bold; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 30px;">
          Get a Free Website Audit
        </a>
      </center>

      <p style="color: #073742; font-size: 14px; line-height: 1.6; margin: 30px 0 0 0;">
        Next email: A simple question to help you decide if now is the right time to build.
      </p>
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

  // Day 9: Ready to build?
  {
    day: 9,
    subject: "One question to know if you need a website",
    getHtml: () => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Website Decision</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f0e9;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <div style="background: #ffffff; border: 2px solid #073742; border-radius: 8px; padding: 40px 30px;">
      <h1 style="color: #073742; font-size: 28px; margin: 0 0 20px 0;">The Website Decision</h1>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Over the past week, I've shared why fast launches work, what successful businesses do differently, and the mistakes to avoid.
      </p>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
        But here's the only question that actually matters:
      </p>

      <div style="background-color: #073742; color: #fcf6ed; padding: 30px; margin: 30px 0; border-radius: 12px; text-align: center;">
        <p style="font-size: 20px; line-height: 1.5; margin: 0; font-weight: bold;">
          "Are customers asking for your website?"
        </p>
      </div>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        If you're saying "we're working on it" more than once a week, you already know the answer.
      </p>

      <h2 style="color: #073742; font-size: 22px; margin: 30px 0 15px 0;">What Happens Next</h2>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        If you're ready to build:
      </p>

      <ul style="color: #073742; font-size: 16px; line-height: 1.8; margin: 0 0 20px 20px; padding-left: 20px;">
        <li><strong>Day 1:</strong> You send us content, branding, requirements</li>
        <li><strong>Days 2-3:</strong> We design and build your site</li>
        <li><strong>Day 4:</strong> First review, you provide feedback</li>
        <li><strong>Day 5:</strong> Final touches, testing, optimization</li>
        <li><strong>Day 6:</strong> Launch. Live, secured, tracking</li>
      </ul>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
        <strong>Investment:</strong> $750 one-time + $18/mo for hosting, SSL, updates, backups, and 2 content edits per month.
      </p>

      <center>
        <a href="https://trailheadmade.com/#contact" style="display: inline-block; background-color: #ff6b35; color: #fcf6ed; padding: 16px 40px; text-decoration: none; border-radius: 50px; font-weight: bold; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 30px;">
          Start Your 6-Day Build
        </a>
      </center>

      <h2 style="color: #073742; font-size: 22px; margin: 40px 0 15px 0;">Not Ready Yet?</h2>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        That's totally fine. You'll keep getting our weekly insights on launches, SEO, and digital business strategy.
      </p>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        When you're ready, we'll be here.
      </p>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
        Questions? Just hit reply—I read every email.
      </p>
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
  }
];

// Segmented Drip Sequences
export const segmentedDripSequences = {
  'no-website': [
    // Day 2: When you actually need a website
    {
      day: 2,
      subject: "How to know when you actually need a website",
      getHtml: () => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f0e9;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <div style="background: #ffffff; border: 2px solid #073742; border-radius: 8px; padding: 40px 30px;">
      <h1 style="color: #073742; font-size: 28px; margin: 0 0 20px 0;">The Signal You're Ready</h1>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        You don't have a website yet. Good—that means you're not wasting time on the wrong one.
      </p>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Here's the clearest signal it's time to build:
      </p>

      <div style="background-color: #073742; color: #fcf6ed; padding: 30px; margin: 30px 0; border-radius: 12px; text-align: center;">
        <p style="font-size: 20px; line-height: 1.5; margin: 0; font-weight: bold;">
          "Customers are asking for your website"
        </p>
      </div>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        If you're saying "we're working on it" more than once a week—you're losing money.
      </p>

      <h2 style="color: #073742; font-size: 22px; margin: 30px 0 15px 0;">The Real Cost</h2>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 15px 0;">
        Let's say your service costs $2,000 per customer:
      </p>

      <ul style="color: #073742; font-size: 16px; line-height: 1.8; margin: 0 0 20px 20px; padding-left: 20px;">
        <li>5 inquiries/week normally convert to 1 sale ($2,000/week)</li>
        <li>A website doubles inquiries to 10/week = 2 sales</li>
        <li><strong>Waiting 6 months = $52,000 in lost revenue</strong></li>
      </ul>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
        Suddenly that $750 website seems cheap.
      </p>

      <center>
        <a href="https://trailheadmade.com/blog/when-you-need-a-website" style="display: inline-block; background-color: #ff6b35; color: #fcf6ed; padding: 14px 32px; text-decoration: none; border-radius: 50px; font-weight: bold; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 30px;">
          Read the Full Guide
        </a>
      </center>

      <p style="color: #073742; font-size: 14px; line-height: 1.6; margin: 30px 0 0 0;">
        Tomorrow: The math on why 6-day launches beat 3-month projects.
      </p>
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

    // Day 4: The cost of waiting
    {
      day: 4,
      subject: "Every week you wait costs you this much",
      getHtml: () => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0;">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f0e9;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <div style="background: #ffffff; border: 2px solid #073742; border-radius: 8px; padding: 40px 30px;">
      <h1 style="color: #073742; font-size: 28px; margin: 0 0 20px 0;">The 6-Day Advantage</h1>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Most businesses spend 3-6 months on their first website.
      </p>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Meanwhile, SEO takes 3-6 months to kick in. So by the time they launch, competitors who started earlier are already ranking.
      </p>

      <h2 style="color: #073742; font-size: 22px; margin: 30px 0 15px 0;">What a 6-Day Timeline Forces</h2>

      <ul style="color: #073742; font-size: 16px; line-height: 1.8; margin: 0 0 30px 20px; padding-left: 20px;">
        <li><strong>Clear messaging</strong> — no time for overthinking copy</li>
        <li><strong>Conversion focus</strong> — build what actually sells</li>
        <li><strong>Real testing</strong> — get customer feedback immediately</li>
      </ul>

      <div style="background-color: #fff7f0; border-left: 4px solid #ff6b35; padding: 20px; margin: 30px 0; border-radius: 8px;">
        <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0;">
          <strong>Pro Tip:</strong> "Perfect" is the enemy of launched. Get it live, then improve based on real data.
        </p>
      </div>

      <center>
        <a href="https://trailheadmade.com/blog/why-6-day-launches-win" style="display: inline-block; background-color: #ff6b35; color: #fcf6ed; padding: 14px 32px; text-decoration: none; border-radius: 50px; font-weight: bold; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 30px;">
          Why Speed Wins
        </a>
      </center>

      <p style="color: #073742; font-size: 14px; line-height: 1.6; margin: 30px 0 0 0;">
        Next: The DIY vs professional math you need to see.
      </p>
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

    // Day 6: DIY vs professional
    {
      day: 6,
      subject: "DIY website: $0 or $4,000?",
      getHtml: () => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f0e9;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <div style="background: #ffffff; border: 2px solid #073742; border-radius: 8px; padding: 40px 30px;">
      <h1 style="color: #073742; font-size: 28px; margin: 0 0 20px 0;">The DIY Trap</h1>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        "I'll build it myself" sounds smart. Free is free, right?
      </p>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Wrong. Let me show you the real math:
      </p>

      <h2 style="color: #073742; font-size: 22px; margin: 30px 0 15px 0;">The Hidden Cost</h2>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 15px 0;">
        Average DIY website timeline: <strong>40 hours</strong>
      </p>

      <ul style="color: #073742; font-size: 16px; line-height: 1.8; margin: 0 0 20px 20px; padding-left: 20px;">
        <li>Your hourly rate: $100</li>
        <li>40 hours × $100 = <strong>$4,000 in lost billable time</strong></li>
        <li>Plus: Projects you couldn't take because you were "building the website"</li>
      </ul>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
        That "free" website just cost you $4,000+
      </p>

      <h2 style="color: #073742; font-size: 22px; margin: 30px 0 15px 0;">The Alternative</h2>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Pay $750, launch in 6 days, get back to making money.
      </p>

      <div style="background-color: #c8e3da; border-left: 4px solid #1e5c5b; padding: 20px; margin: 30px 0; border-radius: 8px;">
        <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0;">
          <strong>Math check:</strong> If one new client pays for the website, every client after that is pure ROI.
        </p>
      </div>

      <center>
        <a href="https://trailheadmade.com/#pricing" style="display: inline-block; background-color: #ff6b35; color: #fcf6ed; padding: 14px 32px; text-decoration: none; border-radius: 50px; font-weight: bold; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 30px;">
          See Pricing
        </a>
      </center>

      <p style="color: #073742; font-size: 14px; line-height: 1.6; margin: 30px 0 0 0;">
        Final email tomorrow: One question to know if you're ready.
      </p>
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

    // Day 9: Ready to launch?
    {
      day: 9,
      subject: "Ready to launch your website?",
      getHtml: () => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f0e9;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <div style="background: #ffffff; border: 2px solid #073742; border-radius: 8px; padding: 40px 30px;">
      <h1 style="color: #073742; font-size: 28px; margin: 0 0 20px 0;">The Decision</h1>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Over the past week, I've shown you when you need a website, why speed matters, and what DIY really costs.
      </p>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
        If customers are asking for your website, you already know the answer.
      </p>

      <h2 style="color: #073742; font-size: 22px; margin: 30px 0 15px 0;">What Happens Next</h2>

      <ul style="color: #073742; font-size: 16px; line-height: 1.8; margin: 0 0 20px 20px; padding-left: 20px;">
        <li><strong>Day 1:</strong> You send content, branding, requirements</li>
        <li><strong>Days 2-3:</strong> We build your custom site</li>
        <li><strong>Day 4:</strong> First review, you give feedback</li>
        <li><strong>Day 5:</strong> Final touches, testing, optimization</li>
        <li><strong>Day 6:</strong> Launch. Live, secured, tracking</li>
      </ul>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
        <strong>Investment:</strong> $750 one-time + $18/mo (hosting, SSL, updates, 2 content edits/month)
      </p>

      <center>
        <a href="https://trailheadmade.com/#contact" style="display: inline-block; background-color: #ff6b35; color: #fcf6ed; padding: 16px 40px; text-decoration: none; border-radius: 50px; font-weight: bold; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 30px;">
          Start Your 6-Day Build
        </a>
      </center>

      <h2 style="color: #073742; font-size: 22px; margin: 40px 0 15px 0;">Not Ready Yet?</h2>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        No problem. You'll keep getting weekly insights on launches, SEO, and digital business.
      </p>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
        When you're ready, we'll be here. Questions? Just hit reply.
      </p>
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
    }
  ],

  'has-website': [
    // Day 2: Is your website converting?
    {
      day: 2,
      subject: "Is your website actually converting visitors?",
      getHtml: () => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f0e9;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <div style="background: #ffffff; border: 2px solid #073742; border-radius: 8px; padding: 40px 30px;">
      <h1 style="color: #073742; font-size: 28px; margin: 0 0 20px 0;">The Conversion Test</h1>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        You have a website. Good! But here's the real question:
      </p>

      <div style="background-color: #073742; color: #fcf6ed; padding: 30px; margin: 30px 0; border-radius: 12px; text-align: center;">
        <p style="font-size: 20px; line-height: 1.5; margin: 0; font-weight: bold;">
          "Can you track how many visitors become customers?"
        </p>
      </div>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        If the answer is "not really"—you're flying blind.
      </p>

      <h2 style="color: #073742; font-size: 22px; margin: 30px 0 15px 0;">The 3 Conversion Killers</h2>

      <ul style="color: #073742; font-size: 16px; line-height: 1.8; margin: 0 0 30px 20px; padding-left: 20px;">
        <li><strong>Unclear value prop:</strong> Visitors don't know what you do in 3 seconds</li>
        <li><strong>Too many options:</strong> 5 CTAs = no conversions</li>
        <li><strong>No social proof:</strong> Claims without testimonials = skepticism</li>
      </ul>

      <div style="background-color: #fff7f0; border-left: 4px solid #ff6b35; padding: 20px; margin: 30px 0; border-radius: 8px;">
        <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0;">
          <strong>Quick Test:</strong> Show your homepage to someone for 5 seconds. Can they tell you what you do? If not, you're losing customers.
        </p>
      </div>

      <center>
        <a href="https://trailheadmade.com/#contact" style="display: inline-block; background-color: #ff6b35; color: #fcf6ed; padding: 14px 32px; text-decoration: none; border-radius: 50px; font-weight: bold; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 30px;">
          Get a Free Audit
        </a>
      </center>

      <p style="color: #073742; font-size: 14px; line-height: 1.6; margin: 30px 0 0 0;">
        Tomorrow: Why your website might be slower than you think (and how it's killing conversions).
      </p>
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

    // Day 4: Speed kills conversions
    {
      day: 4,
      subject: "Your website loads in 4 seconds. You just lost 75% of visitors.",
      getHtml: () => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f0e9;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <div style="background: #ffffff; border: 2px solid #073742; border-radius: 8px; padding: 40px 30px;">
      <h1 style="color: #073742; font-size: 28px; margin: 0 0 20px 0;">Speed = Money</h1>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Amazon found that every 100ms of delay costs them 1% in sales.
      </p>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        For a small business? A slow website is even more deadly.
      </p>

      <h2 style="color: #073742; font-size: 22px; margin: 30px 0 15px 0;">The Numbers</h2>

      <ul style="color: #073742; font-size: 16px; line-height: 1.8; margin: 0 0 30px 20px; padding-left: 20px;">
        <li><strong>1 second delay</strong> = 7% fewer conversions</li>
        <li><strong>3 seconds</strong> = 40% of visitors bounce</li>
        <li><strong>4+ seconds</strong> = 75% never come back</li>
      </ul>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Test your site: <a href="https://pagespeed.web.dev/" style="color: #1e5c5b; text-decoration: underline;">PageSpeed Insights</a>
      </p>

      <div style="background-color: #c8e3da; border-left: 4px solid #1e5c5b; padding: 20px; margin: 30px 0; border-radius: 8px;">
        <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0;">
          <strong>Target:</strong> Under 2 seconds on mobile. Anything slower and you're bleeding money.
        </p>
      </div>

      <h2 style="color: #073742; font-size: 22px; margin: 30px 0 15px 0;">Quick Wins</h2>

      <ul style="color: #073742; font-size: 16px; line-height: 1.8; margin: 0 0 30px 20px; padding-left: 20px;">
        <li>Compress images (most sites are 80% images)</li>
        <li>Use modern formats (WebP instead of PNG/JPG)</li>
        <li>Enable caching</li>
        <li>Minimize third-party scripts</li>
      </ul>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
        Or just let us rebuild it fast from day one.
      </p>

      <center>
        <a href="https://trailheadmade.com/#work" style="display: inline-block; background-color: #ff6b35; color: #fcf6ed; padding: 14px 32px; text-decoration: none; border-radius: 50px; font-weight: bold; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 30px;">
          See Our Fast Sites
        </a>
      </center>

      <p style="color: #073742; font-size: 14px; line-height: 1.6; margin: 30px 0 0 0;">
        Next: SEO quick wins that actually work.
      </p>
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

    // Day 6: SEO quick wins
    {
      day: 6,
      subject: "3 SEO fixes that take 10 minutes",
      getHtml: () => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f0e9;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <div style="background: #ffffff; border: 2px solid #073742; border-radius: 8px; padding: 40px 30px;">
      <h1 style="color: #073742; font-size: 28px; margin: 0 0 20px 0;">SEO Isn't Rocket Science</h1>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Most websites miss these 3 basics. Fix them today, rank higher tomorrow.
      </p>

      <h2 style="color: #073742; font-size: 22px; margin: 30px 0 15px 0;">1. Title Tags That Convert</h2>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 15px 0;">
        <strong>Bad:</strong> "Home | ABC Company"
      </p>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        <strong>Good:</strong> "Calgary Wedding Photographer | 500+ Happy Couples"
      </p>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
        Include: Location + Service + Proof
      </p>

      <h2 style="color: #073742; font-size: 22px; margin: 30px 0 15px 0;">2. Alt Text for Every Image</h2>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Google can't see images. Alt text tells it what's there. Every image = another chance to rank.
      </p>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
        Format: "Calgary mountain wedding ceremony at sunset"
      </p>

      <h2 style="color: #073742; font-size: 22px; margin: 30px 0 15px 0;">3. Internal Linking</h2>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Link your pages to each other. Helps Google understand your site structure and keeps visitors exploring.
      </p>

      <div style="background-color: #fff7f0; border-left: 4px solid #ff6b35; padding: 20px; margin: 30px 0; border-radius: 8px;">
        <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0;">
          <strong>Bonus Tip:</strong> Add a sitemap and submit to Google Search Console. Takes 5 minutes, massive impact.
        </p>
      </div>

      <center>
        <a href="https://trailheadmade.com/#contact" style="display: inline-block; background-color: #ff6b35; color: #fcf6ed; padding: 14px 32px; text-decoration: none; border-radius: 50px; font-weight: bold; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 30px;">
          Get an SEO Audit
        </a>
      </center>

      <p style="color: #073742; font-size: 14px; line-height: 1.6; margin: 30px 0 0 0;">
        Final email: Should you rebuild or optimize what you have?
      </p>
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

    // Day 9: Rebuild vs optimize
    {
      day: 9,
      subject: "Rebuild or optimize? Here's how to decide",
      getHtml: () => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f0e9;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <div style="background: #ffffff; border: 2px solid #073742; border-radius: 8px; padding: 40px 30px;">
      <h1 style="color: #073742; font-size: 28px; margin: 0 0 20px 0;">The Rebuild Question</h1>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Should you optimize what you have or start fresh?
      </p>

      <h2 style="color: #073742; font-size: 22px; margin: 30px 0 15px 0;">Optimize If:</h2>

      <ul style="color: #073742; font-size: 16px; line-height: 1.8; margin: 0 0 30px 20px; padding-left: 20px;">
        <li>Your site loads fast (under 2 seconds)</li>
        <li>You're getting traffic but need better conversion</li>
        <li>The design is modern and mobile-friendly</li>
        <li>You just need better copy/SEO</li>
      </ul>

      <h2 style="color: #073742; font-size: 22px; margin: 30px 0 15px 0;">Rebuild If:</h2>

      <ul style="color: #073742; font-size: 16px; line-height: 1.8; margin: 0 0 30px 20px; padding-left: 20px;">
        <li>Built on old tech (WordPress from 2015, Flash, etc.)</li>
        <li>Loads in 4+ seconds</li>
        <li>Not mobile-optimized</li>
        <li>Can't track conversions</li>
        <li>Redesign would cost more than rebuild</li>
      </ul>

      <div style="background-color: #c8e3da; border-left: 4px solid #1e5c5b; padding: 20px; margin: 30px 0; border-radius: 8px;">
        <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0;">
          <strong>The Test:</strong> If fixing it would take longer than 6 days, rebuild. Modern tools make starting fresh faster and cheaper.
        </p>
      </div>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
        Want an honest assessment? Send us your site—we'll tell you which path makes sense (no charge).
      </p>

      <center>
        <a href="https://trailheadmade.com/#contact" style="display: inline-block; background-color: #ff6b35; color: #fcf6ed; padding: 16px 40px; text-decoration: none; border-radius: 50px; font-weight: bold; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 30px;">
          Get Free Site Audit
        </a>
      </center>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Not ready? No problem. Keep getting our weekly tips on optimization, SEO, and conversion.
      </p>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
        Questions? Just hit reply.
      </p>
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
    }
  ],

  'social-only': [
    // Day 2: Algorithm risk
    {
      day: 2,
      subject: "Instagram just changed the algorithm. Again.",
      getHtml: () => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f0e9;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <div style="background: #ffffff; border: 2px solid #073742; border-radius: 8px; padding: 40px 30px;">
      <h1 style="color: #073742; font-size: 28px; margin: 0 0 20px 0;">You're Building on Rented Land</h1>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        You're killing it on Instagram. 10,000 followers, good engagement, customers coming in.
      </p>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Then the algorithm changes. Overnight, your reach drops 70%.
      </p>

      <h2 style="color: #073742; font-size: 22px; margin: 30px 0 15px 0;">This Has Happened Before</h2>

      <ul style="color: #073742; font-size: 16px; line-height: 1.8; margin: 0 0 30px 20px; padding-left: 20px;">
        <li><strong>2018:</strong> Facebook cuts organic reach from 16% to 2%</li>
        <li><strong>2019:</strong> Instagram shadowbans thousands of accounts</li>
        <li><strong>2023:</strong> TikTok changes feed algorithm, kills small creators</li>
      </ul>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        The businesses that survived? They had websites.
      </p>

      <div style="background-color: #fff7f0; border-left: 4px solid #ff6b35; padding: 20px; margin: 30px 0; border-radius: 8px;">
        <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0;">
          <strong>The Risk:</strong> 100% of your traffic comes from platforms you don't control. One algorithm change = business gone.
        </p>
      </div>

      <center>
        <a href="https://trailheadmade.com/blog/website-vs-social-media" style="display: inline-block; background-color: #ff6b35; color: #fcf6ed; padding: 14px 32px; text-decoration: none; border-radius: 50px; font-weight: bold; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 30px;">
          Read: Website vs Social Media
        </a>
      </center>

      <p style="color: #073742; font-size: 14px; line-height: 1.6; margin: 30px 0 0 0;">
        Tomorrow: Why platform ownership beats platform dependence.
      </p>
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

    // Day 4: Platform ownership
    {
      day: 4,
      subject: "Own your platform or rent forever?",
      getHtml: () => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f0e9;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <div style="background: #ffffff; border: 2px solid #073742; border-radius: 8px; padding: 40px 30px;">
      <h1 style="color: #073742; font-size: 28px; margin: 0 0 20px 0;">The Email List Advantage</h1>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Social media follower: You can reach them if the algorithm allows it.
      </p>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Email subscriber: You can reach them whenever you want.
      </p>

      <h2 style="color: #073742; font-size: 22px; margin: 30px 0 15px 0;">The Math</h2>

      <div style="background-color: #c8e3da; border-left: 4px solid #1e5c5b; padding: 20px; margin: 30px 0; border-radius: 8px;">
        <p style="color: #073742; font-size: 16px; line-height: 1.8; margin: 0;">
          <strong>Instagram post:</strong> 10,000 followers = 500 see it (5%)<br>
          <strong>Email to list:</strong> 1,000 subscribers = 250 open it (25%)<br>
          <strong>Winner:</strong> Smaller email list with 5x better engagement
        </p>
      </div>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Plus: you own that list. Instagram can't take it away.
      </p>

      <h2 style="color: #073742; font-size: 22px; margin: 30px 0 15px 0;">The Smart Strategy</h2>

      <ul style="color: #073742; font-size: 16px; line-height: 1.8; margin: 0 0 30px 20px; padding-left: 20px;">
        <li>Keep crushing it on social (that's your traffic source)</li>
        <li>Link in bio → Website with email capture</li>
        <li>Now you own the relationship</li>
        <li>Algorithm changes? You still have your list</li>
      </ul>

      <center>
        <a href="https://trailheadmade.com/#pricing" style="display: inline-block; background-color: #ff6b35; color: #fcf6ed; padding: 14px 32px; text-decoration: none; border-radius: 50px; font-weight: bold; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 30px;">
          See Pricing
        </a>
      </center>

      <p style="color: #073742; font-size: 14px; line-height: 1.6; margin: 30px 0 0 0;">
        Next: How to keep your social momentum while building your platform.
      </p>
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

    // Day 6: Integration strategy
    {
      day: 6,
      subject: "Keep your social + add a website (here's how)",
      getHtml: () => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f0e9;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <div style="background: #ffffff; border: 2px solid #073742; border-radius: 8px; padding: 40px 30px;">
      <h1 style="color: #073742; font-size: 28px; margin: 0 0 20px 0;">The Best of Both Worlds</h1>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        You don't have to choose between social media and a website.
      </p>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Use them together. Here's the playbook:
      </p>

      <h2 style="color: #073742; font-size: 22px; margin: 30px 0 15px 0;">The Integration Strategy</h2>

      <ul style="color: #073742; font-size: 16px; line-height: 1.8; margin: 0 0 30px 20px; padding-left: 20px;">
        <li><strong>Social media:</strong> Discovery engine (new people find you)</li>
        <li><strong>Website:</strong> Conversion engine (visitors become customers)</li>
        <li><strong>Email list:</strong> Retention engine (customers come back)</li>
      </ul>

      <h2 style="color: #073742; font-size: 22px; margin: 30px 0 15px 0;">How It Works</h2>

      <ol style="color: #073742; font-size: 16px; line-height: 1.8; margin: 0 0 30px 20px; padding-left: 20px;">
        <li>Keep posting on Instagram/TikTok (that's working!)</li>
        <li>Link in bio → Your website</li>
        <li>Website has clear CTA + email capture</li>
        <li>Now you own the relationship</li>
      </ol>

      <div style="background-color: #c8e3da; border-left: 4px solid #1e5c5b; padding: 20px; margin: 30px 0; border-radius: 8px;">
        <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0;">
          <strong>Real Example:</strong> Wedding photographer Sarah kept her Instagram (12k followers) but added a website. Bookings went from 30 to 45/year. Same followers, better conversion.
        </p>
      </div>

      <center>
        <a href="https://trailheadmade.com/#work" style="display: inline-block; background-color: #ff6b35; color: #fcf6ed; padding: 14px 32px; text-decoration: none; border-radius: 50px; font-weight: bold; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 30px;">
          See Examples
        </a>
      </center>

      <p style="color: #073742; font-size: 14px; line-height: 1.6; margin: 30px 0 0 0;">
        Final email: The simple question to know if you're ready.
      </p>
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

    // Day 9: Ready to own your platform?
    {
      day: 9,
      subject: "Ready to own your platform?",
      getHtml: () => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f0e9;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <div style="background: #ffffff; border: 2px solid #073742; border-radius: 8px; padding: 40px 30px;">
      <h1 style="color: #073742; font-size: 28px; margin: 0 0 20px 0;">The Platform Question</h1>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Over the past week, I've shown you the algorithm risk, why ownership matters, and how to use both together.
      </p>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
        Here's the question:
      </p>

      <div style="background-color: #073742; color: #fcf6ed; padding: 30px; margin: 30px 0; border-radius: 12px; text-align: center;">
        <p style="font-size: 20px; line-height: 1.5; margin: 0; font-weight: bold;">
          "If Instagram changed its algorithm tomorrow, would your business survive?"
        </p>
      </div>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        If the answer is "probably not"—it's time to build your safety net.
      </p>

      <h2 style="color: #073742; font-size: 22px; margin: 30px 0 15px 0;">What Happens Next</h2>

      <ul style="color: #073742; font-size: 16px; line-height: 1.8; margin: 0 0 20px 20px; padding-left: 20px;">
        <li><strong>Day 1:</strong> You send content, branding</li>
        <li><strong>Days 2-3:</strong> We build your site</li>
        <li><strong>Day 4:</strong> Review & feedback</li>
        <li><strong>Day 5:</strong> Final touches</li>
        <li><strong>Day 6:</strong> Launch. You now own your platform.</li>
      </ul>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
        <strong>Investment:</strong> $750 + $18/mo (hosting, SSL, updates, 2 edits/month)
      </p>

      <center>
        <a href="https://trailheadmade.com/#contact" style="display: inline-block; background-color: #ff6b35; color: #fcf6ed; padding: 16px 40px; text-decoration: none; border-radius: 50px; font-weight: bold; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 30px;">
          Start Your 6-Day Build
        </a>
      </center>

      <h2 style="color: #073742; font-size: 22px; margin: 40px 0 15px 0;">Not Ready Yet?</h2>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Keep doing what's working on social. You'll still get our weekly insights on platforms, algorithms, and digital business.
      </p>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
        When you're ready to own your platform, we'll be here. Questions? Hit reply.
      </p>
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
    }
  ]
};

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
