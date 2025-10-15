# Formspree Contact Form Setup

## Quick Setup (5 minutes)

Your contact form is ready to receive submissions! Just need to connect it to Formspree:

### Step 1: Create Formspree Account
1. Go to https://formspree.io/
2. Sign up for free (50 submissions/month included)
3. Verify your email

### Step 2: Create a New Form
1. Click "New Form" in dashboard
2. Name it: "Trailhead Contact Form"
3. Copy the form endpoint ID (looks like: `xyzabc123`)

### Step 3: Update Your Form
Open `/components/ContactForm.tsx` and replace `YOUR_FORM_ID` on line 51:

```typescript
// Change this:
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {

// To this (with your actual form ID):
const response = await fetch("https://formspree.io/f/xyzabc123", {
```

### Step 4: Test It
1. Save the file
2. Fill out your contact form at http://localhost:3001
3. Submit
4. Check your Formspree dashboard - submission should appear
5. Check your email - you'll get notifications

## That's It!

Your form now:
- ✅ Validates input
- ✅ Shows loading states
- ✅ Sends to your email
- ✅ Shows success/error messages
- ✅ Resets on successful submission

## Optional: Customize Formspree

In your Formspree dashboard, you can:
- **Email notifications**: Choose which email receives submissions
- **Spam protection**: Enable reCAPTCHA (recommended)
- **Redirect**: Send users to a thank-you page after submission
- **Auto-responder**: Send confirmation emails to users
- **Webhooks**: Connect to Slack, Zapier, etc.

## Alternative: Netlify Forms

If deploying to Netlify, you can use their built-in forms instead:

1. Add `netlify` attribute to form tag in ContactForm.tsx
2. Add `data-netlify="true"` to form
3. Deploy to Netlify
4. Forms appear in your Netlify dashboard

No code changes needed besides adding those attributes!

## What Data Gets Submitted

The form sends:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "(555) 123-4567",
  "message": "I need a website for my restaurant...",
  "projectType": "one-page"
}
```

You'll receive this as an email notification and can view it in the Formspree dashboard.
