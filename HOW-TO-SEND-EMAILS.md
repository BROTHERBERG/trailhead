# How to Send Emails with Resend

## 🎯 You DON'T Create Emails on Resend.com!

Resend.com is just the **delivery service** (like the post office). You create the emails in your code, and Resend delivers them.

Think of it like:
- **Resend = Post office** (delivers mail)
- **Your code = Writing the letter** (already done!)
- **This guide = How to mail letters**

---

## 📧 3 Ways to Send Emails:

### Option 1: Test Email (Right Now!)

Run this command to send yourself a test:

```bash
./test-email.sh
```

Enter your email, and you'll get a test email in ~5 seconds.

---

### Option 2: Send Using curl (Quick & Dirty)

**Send a promo email:**

```bash
curl -X POST https://trailheadmade.com/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "to": "customer@example.com",
    "subject": "Launch Your Website in 1 Week",
    "html": "'"$(cat <<'EOF'
<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h1 style="color: #073742;">Hey there! 🚀</h1>
  <p>Ready to finally get that website done?</p>
  <p><strong>We do it in 1 week for $750.</strong></p>
  <ul>
    <li>Custom design (no templates)</li>
    <li>Mobile-first & lightning fast</li>
    <li>SEO optimization</li>
  </ul>
  <a href="https://trailheadmade.com/#contact" style="display: inline-block; background: #073742; color: white; padding: 12px 24px; text-decoration: none; border-radius: 50px;">
    Book Your Spot →
  </a>
  <p style="margin-top: 30px; color: #666;">
    - Jason at Trailhead<br>
    hello@trailheadmade.com
  </p>
</body>
</html>
EOF
)"'
  }'
```

**Or use the pre-made templates:**

```bash
# Send welcome email
curl -X POST https://trailheadmade.com/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "to": "newlead@example.com",
    "subject": "Welcome to Trailhead!",
    "html": "USE_TEMPLATE_WELCOME"
  }'
```

---

### Option 3: Send to Your Email List (Best for Campaigns)

**Step 1:** Create a file `email-list.txt`:

```
customer1@example.com
customer2@example.com
customer3@example.com
```

**Step 2:** Run this script:

```bash
#!/bin/bash

# Read email list and send promo campaign
while read EMAIL; do
  echo "Sending to $EMAIL..."

  curl -s -X POST https://trailheadmade.com/api/send-email \
    -H "Content-Type: application/json" \
    -d "{
      \"to\": \"$EMAIL\",
      \"subject\": \"Launch Your Website in 1 Week - Limited Spots\",
      \"html\": \"<p>Promo email here...</p>\"
    }"

  echo "✓ Sent to $EMAIL"

  # Wait 100ms to avoid rate limits
  sleep 0.1
done < email-list.txt

echo "✅ Campaign complete!"
```

---

## 🎨 Using the Pre-Made Templates

We already created 3 beautiful templates for you in `lib/email-templates.ts`:

### 1. Welcome Email (New Leads)

**When to use:** Automatically after someone fills out your contact form

**How:**
```typescript
import { welcomeEmail } from '@/lib/email-templates';

await fetch('/api/send-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    to: 'newcustomer@example.com',
    subject: 'Welcome to Trailhead!',
    html: welcomeEmail('John'), // Replace with actual name
  }),
});
```

### 2. Follow-Up Email (Nurture Sequence)

**When to use:** 3 days after initial contact (manually or automated)

**How:**
```typescript
import { followUpEmail } from '@/lib/email-templates';

await fetch('/api/send-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    to: 'customer@example.com',
    subject: 'Still interested in your website project?',
    html: followUpEmail('John', 'restaurant'), // Name + business type
  }),
});
```

### 3. Promo Campaign (Marketing)

**When to use:** Send to your email list for promotions

**How:**
```typescript
import { promoEmail } from '@/lib/email-templates';

await fetch('/api/send-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    to: 'prospect@example.com',
    subject: 'Launch Your Website in 1 Week - Limited Spots',
    html: promoEmail('Sarah'),
  }),
});
```

---

## 🤖 Auto-Send Welcome Email (Recommended!)

Want to automatically send a welcome email when someone fills out your contact form?

**Add this to `components/ContactForm.tsx`** after the Formspree success:

```typescript
// Inside handleSubmit, after successful Formspree response:
if (formspreeResponse.ok) {
  setSubmitStatus("success");

  // Auto-send welcome email
  try {
    await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: formData.email,
        subject: 'Welcome to Trailhead - Let\'s Build Something Great',
        html: welcomeEmail(formData.name),
      }),
    });
    console.log('Welcome email sent!');
  } catch (error) {
    // Don't fail the form if email fails
    console.error('Failed to send welcome email:', error);
  }

  // Reset form...
}
```

Now every new lead automatically gets a welcome email! 🎉

---

## 📊 Check Your Sent Emails

1. Go to: https://resend.com
2. Click "Emails" in the sidebar
3. See all sent emails with:
   - ✅ Delivered
   - 📬 Opens
   - 🖱️ Clicks
   - ❌ Bounces

---

## 💡 Quick Campaign Ideas:

### 1. New Lead Sequence (Automated)
- **Day 0:** Welcome email (auto-sent on form submit)
- **Day 3:** Follow-up email (manual or scheduled)
- **Day 7:** Case study / portfolio showcase
- **Day 14:** Last chance / special offer

### 2. Monthly Newsletter
- Showcase recent projects
- Share web design tips
- Announce promotions
- Industry news

### 3. Re-engagement Campaign
- Target cold leads (30+ days old)
- "Still need a website?" angle
- New pricing or services
- Portfolio updates

---

## 🎯 Best Practices:

✅ **Do:**
- Personalize with {name}
- Keep it short and scannable
- One clear call-to-action
- Test on mobile
- Make unsubscribe easy

❌ **Don't:**
- Buy email lists
- Send to cold contacts
- Spam people
- Use clickbait subjects
- Forget to test first

---

## 📈 Tracking Success:

**Key Metrics:**
- Open rate: Target 20-30%
- Click rate: Target 3-5%
- Conversion rate: Target 1-2%
- Unsubscribe: Keep under 1%

**Track in Resend Dashboard:**
- https://resend.com → Emails tab

---

## 🚀 Quick Start Checklist:

- [x] Resend account created
- [x] API key added to Vercel
- [ ] Send test email to yourself (`./test-email.sh`)
- [ ] Verify email arrived and looks good
- [ ] (Optional) Add auto-welcome to contact form
- [ ] Create your email list
- [ ] Send your first campaign!

---

## 🆘 Need Help?

**Common Issues:**

**"Email service not configured"**
→ Check your Resend API key is set in Vercel environment variables

**Emails not arriving**
→ Check spam folder
→ Verify in Resend dashboard (Emails tab)
→ Wait 1-2 minutes for delivery

**Want to verify domain?**
→ See [RESEND-EMAIL-SETUP.md](RESEND-EMAIL-SETUP.md) for DNS setup

---

**Ready to send your first email?**

```bash
./test-email.sh
```

🎉 That's it! You're now running email campaigns!

---

**P.S.** About trailheadup.com - that IS a cool domain! But trailheadmade.com has that "tailor-made" phonetic vibe which is perfect for your custom website positioning. Stick with what you've got! 💪
