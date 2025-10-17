# Resend Email Campaign Setup

## 🎯 What We're Building

A complete email marketing system using Resend that lets you:
- Send promotional emails to leads
- Automated follow-ups for contact form submissions
- Newsletter campaigns
- Transactional emails with beautiful templates

## 📋 Setup Checklist

### 1. Resend Account Setup
- [ ] Sign up at https://resend.com (free tier: 3,000 emails/month)
- [ ] Verify your domain (hello@trailheadmade.com)
- [ ] Get API key from dashboard
- [ ] Add to environment variables

### 2. Domain Verification
- [ ] Add DNS records for email authentication
- [ ] SPF, DKIM, DMARC records
- [ ] Improves deliverability significantly

### 3. Email Templates
- [ ] Welcome email
- [ ] Follow-up email
- [ ] Promo/Campaign email
- [ ] Invoice/Receipt email

---

## 🚀 Quick Start

### Step 1: Sign Up for Resend

1. Go to: https://resend.com
2. Click "Start Building"
3. Sign up with GitHub or email
4. Verify your email

### Step 2: Get Your API Key

1. Go to Dashboard → API Keys
2. Click "Create API Key"
3. Name it: "Trailhead Production"
4. Copy the key (starts with `re_`)

### Step 3: Add to Environment Variables

Add to `.env.local`:
```bash
RESEND_API_KEY=re_your_api_key_here
```

Add to `.env.example`:
```bash
# Resend Email API
RESEND_API_KEY=re_your_api_key_here
```

### Step 4: Verify Domain in Resend

1. Go to Resend Dashboard → Domains
2. Click "Add Domain"
3. Enter: `trailheadmade.com`
4. Resend will show you DNS records to add

You'll need to add these to Hostinger DNS:

```
Type: TXT
Name: @ (or trailheadmade.com)
Value: [SPF record from Resend]

Type: TXT
Name: resend._domainkey
Value: [DKIM record from Resend]

Type: TXT
Name: _dmarc
Value: [DMARC record from Resend]
```

5. Wait 10-30 minutes for verification
6. Resend will auto-verify and show green checkmark

---

## 📧 Email Templates

### 1. Welcome Email (New Lead)

**Subject**: Welcome to Trailhead - Let's Build Something Great

**Template**:
```
Hi {name}!

Thanks for reaching out to Trailhead! We got your message and we're excited to help you build a professional website.

Here's what happens next:
1. We'll review your project details
2. Get back to you within 24 hours
3. If it's a good fit, we'll send over a proposal

In the meantime, check out some of our recent work:
👉 [Your Website URL]/work

Quick reminder of what you'll get:
✅ Custom-designed website in 1 week
✅ $750 flat fee - no surprises
✅ Mobile-optimized & fast
✅ SEO-ready from day one

Questions? Just hit reply!

Best,
Jason
Trailhead
hello@trailheadmade.com
```

### 2. Follow-Up Email (3 days later)

**Subject**: Still interested in your website project?

**Template**:
```
Hi {name},

Just wanted to follow up on your website inquiry from a few days ago.

We know you're busy running your {business_type}, so I wanted to make this easy:

📅 Book a 15-min call: [Calendly link]
💬 Text me: (403) 404-0014
📧 Reply to this email

No pressure - just wanted to make sure you saw our response!

P.S. We're currently booking projects for {current_month}. If you want to launch before the holidays, let's chat this week.

Cheers,
Jason
```

### 3. Promo Campaign Email

**Subject**: Launch Your Website in 1 Week - Limited Spots Open

**Template**:
```
{name}, ready to finally get that website done?

Most agencies take 2-3 months and charge $5,000+.

We do it in 1 week for $750.

Here's what's included:
• Custom design (no templates)
• Mobile-first & lightning fast
• Contact forms that actually work
• SEO optimization
• Free hosting for 1 year

🚀 Only 3 spots available this month

Want in? Reply "YES" or book a call:
[Book 15-min call]

Simple. Fast. Professional.

- Jason at Trailhead
hello@trailheadmade.com
```

### 4. Invoice/Receipt Email

**Subject**: Your Trailhead Invoice - {Project Name}

**Template**:
```
Hi {name},

Thanks for choosing Trailhead! Here's your invoice:

Project: {project_name}
Amount: ${amount}
Due: {due_date}

[View Invoice] [Pay Now]

Once payment is received, we'll kick off your project and have your site live within 7 days.

Questions? Reply to this email or text (403) 404-0014.

Thanks!
Jason
Trailhead
```

---

## 🛠️ Implementation

### API Route: `/api/send-email`

Create `app/api/send-email/route.ts`:

```typescript
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { to, subject, html, from = 'hello@trailheadmade.com' } = body;

    const data = await resend.emails.send({
      from: `Trailhead <${from}>`,
      to: [to],
      subject: subject,
      html: html,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
```

### Email Template Component

Create `lib/email-templates.ts`:

```typescript
export const welcomeEmail = (name: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      line-height: 1.6;
      color: #073742;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: #073742;
      color: #f5f0e9;
      padding: 30px;
      text-align: center;
      border-radius: 8px 8px 0 0;
    }
    .content {
      background: #ffffff;
      padding: 30px;
      border: 2px solid #073742;
      border-top: none;
      border-radius: 0 0 8px 8px;
    }
    .cta-button {
      display: inline-block;
      background: #c8e3da;
      color: #073742;
      padding: 12px 24px;
      text-decoration: none;
      border-radius: 6px;
      font-weight: 600;
      margin: 20px 0;
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
  <div class="header">
    <h1 style="margin:0; font-size: 28px;">Welcome to Trailhead!</h1>
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

    <a href="https://trailheadmade.com/#work" class="cta-button">Check Out Our Work →</a>

    <p><strong>Quick reminder of what you'll get:</strong></p>
    <ul>
      <li>✅ Custom-designed website in 1 week</li>
      <li>✅ $750 flat fee - no surprises</li>
      <li>✅ Mobile-optimized & fast</li>
      <li>✅ SEO-ready from day one</li>
    </ul>

    <p>Questions? Just hit reply!</p>

    <p>Best,<br>
    Jason<br>
    <strong>Trailhead</strong></p>
  </div>
  <div class="footer">
    <p>Trailhead | hello@trailheadmade.com | trailheadmade.com</p>
  </div>
</body>
</html>
`;

export const followUpEmail = (name: string, businessType: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      line-height: 1.6;
      color: #073742;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .content {
      background: #ffffff;
      padding: 30px;
      border: 2px solid #073742;
      border-radius: 8px;
    }
    .cta-button {
      display: inline-block;
      background: #c8e3da;
      color: #073742;
      padding: 12px 24px;
      text-decoration: none;
      border-radius: 6px;
      font-weight: 600;
      margin: 20px 0;
    }
  </style>
</head>
<body>
  <div class="content">
    <p>Hi ${name},</p>

    <p>Just wanted to follow up on your website inquiry from a few days ago.</p>

    <p>We know you're busy running your ${businessType}, so I wanted to make this easy:</p>

    <p>
      📅 <a href="#">Book a 15-min call</a><br>
      💬 Text me: (403) 404-0014<br>
      📧 Reply to this email
    </p>

    <p>No pressure - just wanted to make sure you saw our response!</p>

    <p><em>P.S. We're currently booking projects for ${new Date().toLocaleString('default', { month: 'long' })}. If you want to launch soon, let's chat this week.</em></p>

    <p>Cheers,<br>
    Jason</p>
  </div>
</body>
</html>
`;
```

---

## 🔄 Automated Workflows

### 1. Auto-Send Welcome Email on Form Submit

Update `components/ContactForm.tsx`:

```typescript
// After successful Formspree submission
const response = await fetch('/api/send-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    to: formData.email,
    subject: 'Welcome to Trailhead - Let\'s Build Something Great',
    html: welcomeEmail(formData.name),
  }),
});
```

### 2. Scheduled Follow-Up (Manual or Automated)

Option A: Manual via admin panel
Option B: Automated with Vercel Cron Jobs

Create `app/api/cron/follow-ups/route.ts`:

```typescript
// Run daily to check for 3-day-old leads
export async function GET(request: Request) {
  // Check authorization
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', { status: 401 });
  }

  // Query your database for 3-day-old leads
  // Send follow-up emails

  return Response.json({ success: true });
}
```

Add to `vercel.json`:
```json
{
  "crons": [{
    "path": "/api/cron/follow-ups",
    "schedule": "0 9 * * *"
  }]
}
```

---

## 📊 Tracking & Analytics

### Track Email Opens

Resend automatically tracks:
- Opens
- Clicks
- Bounces
- Spam reports

View in: Resend Dashboard → Emails

### Custom Tracking

Add UTM parameters to links:

```html
<a href="https://trailheadmade.com/work?utm_source=email&utm_medium=welcome&utm_campaign=new_lead">
  Check Out Our Work →
</a>
```

Track in Google Analytics or Plausible.

---

## 💰 Pricing & Limits

### Resend Free Tier:
- 3,000 emails/month
- 100 emails/day
- All features included
- Perfect for starting out

### Paid Plans:
- **Pro**: $20/mo - 50,000 emails/month
- **Business**: $80/mo - 100,000 emails/month

**For Trailhead**: Start with free tier, upgrade when you hit 100 leads/month.

---

## 🎯 Campaign Ideas

### 1. New Lead Nurture Sequence
- Day 0: Welcome email (auto)
- Day 3: Follow-up (auto or manual)
- Day 7: Case study email
- Day 14: Last chance / special offer

### 2. Monthly Newsletter
- Recent projects showcase
- Web design tips
- Special promotions
- Industry news

### 3. Re-engagement Campaign
- Target leads from 30+ days ago
- "Still need a website?" angle
- New pricing or services
- Portfolio updates

### 4. Referral Program
- Email past clients
- Offer $100 referral bonus
- Make it easy to forward
- Track referrals with unique codes

---

## 🔒 Best Practices

### 1. Deliverability
- ✅ Verify domain with SPF/DKIM/DMARC
- ✅ Use hello@trailheadmade.com (not noreply@)
- ✅ Warm up your domain (start slow)
- ✅ Clean your email list regularly
- ✅ Make unsubscribe easy

### 2. Content
- ✅ Personalize (use {name}, {company})
- ✅ Clear subject lines
- ✅ Single clear CTA
- ✅ Mobile-friendly design
- ✅ Test before sending

### 3. Legal
- ✅ Include unsubscribe link
- ✅ Add physical address
- ✅ CAN-SPAM compliance
- ✅ GDPR if EU customers
- ✅ Don't buy email lists

---

## 🧪 Testing

### Before Launching:

1. **Send test emails**:
```bash
curl -X POST https://trailheadmade.com/api/send-email \
  -H "Content-Type: application/json" \
  -d '{"to":"your-email@gmail.com","subject":"Test","html":"<p>Test</p>"}'
```

2. **Check spam score**: Use mail-tester.com

3. **Test on devices**:
   - Gmail app
   - iPhone Mail app
   - Outlook
   - Desktop clients

4. **Verify links work**

5. **Check mobile rendering**

---

## 📈 Success Metrics

Track these KPIs:
- **Open rate**: Target 20-30%
- **Click rate**: Target 3-5%
- **Conversion rate**: Target 1-2%
- **Unsubscribe rate**: Keep under 1%
- **Bounce rate**: Keep under 2%

---

## 🚀 Next Steps

1. [ ] Sign up for Resend
2. [ ] Get API key
3. [ ] Verify domain in Resend
4. [ ] Add DNS records to Hostinger
5. [ ] Test sending first email
6. [ ] Set up automated welcome email
7. [ ] Create first campaign

---

**Ready to start?** Go to https://resend.com and sign up! 🎉
