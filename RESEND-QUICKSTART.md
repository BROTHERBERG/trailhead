# Resend Email Campaigns - Quick Start

## 🚀 Get Started in 5 Minutes

### Step 1: Sign Up & Get API Key (2 min)

1. Go to https://resend.com
2. Click "Start Building" → Sign up
3. Dashboard → API Keys → "Create API Key"
4. Copy your API key (starts with `re_`)

### Step 2: Add API Key to Environment (1 min)

Create or edit `.env.local`:

```bash
RESEND_API_KEY=re_your_actual_api_key_here
```

That's it! You're ready to send emails.

---

## 📧 Send Your First Email (Test)

### Option 1: Using curl

```bash
curl -X POST https://trailheadmade.com/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "to": "your-email@gmail.com",
    "subject": "Test Email from Trailhead",
    "html": "<h1>It works!</h1><p>Your Resend integration is live.</p>"
  }'
```

### Option 2: Using the Email Templates

```typescript
import { welcomeEmail } from '@/lib/email-templates';

// Send welcome email
const response = await fetch('/api/send-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    to: 'customer@example.com',
    subject: 'Welcome to Trailhead!',
    html: welcomeEmail('John'),
  }),
});
```

---

## 📋 Available Templates

### 1. Welcome Email
```typescript
import { welcomeEmail } from '@/lib/email-templates';

const html = welcomeEmail('John');
// Send to new leads who fill out contact form
```

### 2. Follow-Up Email
```typescript
import { followUpEmail } from '@/lib/email-templates';

const html = followUpEmail('John', 'restaurant');
// Send 3 days after initial contact
```

### 3. Promo Campaign
```typescript
import { promoEmail } from '@/lib/email-templates';

const html = promoEmail('John');
// Send to email list for promotions
```

---

## 🎯 Common Use Cases

### Auto-Send Welcome Email After Form Submission

Update `components/ContactForm.tsx`:

```typescript
// After successful Formspree submission
try {
  // Send welcome email
  await fetch('/api/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      to: formData.email,
      subject: 'Welcome to Trailhead - Let\'s Build Something Great',
      html: welcomeEmail(formData.name),
    }),
  });
} catch (error) {
  console.error('Failed to send welcome email:', error);
  // Don't fail the form submission if email fails
}
```

### Manual Campaign to Email List

```typescript
const emailList = [
  'customer1@example.com',
  'customer2@example.com',
  'customer3@example.com',
];

for (const email of emailList) {
  await fetch('/api/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      to: email,
      subject: 'Launch Your Website in 1 Week - Limited Spots',
      html: promoEmail(),
    }),
  });

  // Rate limit: Wait 100ms between emails
  await new Promise(resolve => setTimeout(resolve, 100));
}
```

---

## ⚡ Domain Verification (Optional but Recommended)

**Why?** Better deliverability, custom from address, no "via resend.dev"

1. Resend Dashboard → Domains → "Add Domain"
2. Enter: `trailheadmade.com`
3. Resend shows DNS records
4. Add these to Hostinger DNS:
   - SPF record (TXT)
   - DKIM record (TXT)
   - DMARC record (TXT)
5. Wait 10-30 minutes
6. Resend auto-verifies

**Until verified:** Emails send from `onboarding@resend.dev` (but still delivered)
**After verified:** Emails send from `hello@trailheadmade.com` (professional!)

---

## 📊 Track Your Emails

### View in Resend Dashboard

1. Go to https://resend.com
2. Click "Emails" in sidebar
3. See all sent emails with:
   - Opens
   - Clicks
   - Bounces
   - Status

### Track Conversions

Add UTM parameters to links in emails:

```html
<a href="https://trailheadmade.com/work?utm_source=email&utm_campaign=welcome">
  View Our Work →
</a>
```

Track in Google Analytics or Plausible.

---

## 🆓 Free Tier Limits

- **3,000 emails/month**
- **100 emails/day**
- All features included
- No credit card required

**Perfect for:**
- Small business with <100 leads/month
- Testing and MVP
- Automated transactional emails

**When to upgrade ($20/mo):**
- Sending 100+ emails/day
- Need 50,000 emails/month
- Running large campaigns

---

## ✅ Next Steps

1. [x] Sign up for Resend
2. [x] Add API key to `.env.local`
3. [ ] Test sending your first email
4. [ ] (Optional) Verify domain for better deliverability
5. [ ] Integrate welcome email into contact form
6. [ ] Plan your first email campaign

---

## 📖 Full Documentation

See [RESEND-EMAIL-SETUP.md](RESEND-EMAIL-SETUP.md) for:
- Complete setup guide
- All email templates
- Campaign ideas
- Deliverability tips
- Best practices
- Troubleshooting

---

## 🆘 Quick Troubleshooting

**"Email service not configured" error**
→ Check `.env.local` has `RESEND_API_KEY=re_...`

**Emails not arriving**
→ Check spam folder
→ Verify API key is correct
→ Check Resend dashboard for errors

**"From address not verified"**
→ Normal before domain verification
→ Emails still send from `onboarding@resend.dev`
→ Verify domain to use `hello@trailheadmade.com`

---

**Ready to send?** Test it now:

```bash
# Replace with your email
curl -X POST http://localhost:3000/api/send-email \
  -H "Content-Type: application/json" \
  -d '{"to":"your-email@gmail.com","subject":"Test","html":"<p>It works!</p>"}'
```

🎉 Welcome to easy email marketing!
