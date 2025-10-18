# Stripe Payment Integration Guide

Your Trailhead website now has full Stripe payment processing! Clients can pay directly from the pricing section and you'll get instant notifications.

## 🚀 Quick Start (5 minutes)

### 1. Get Your Stripe API Keys

1. Go to https://dashboard.stripe.com/apikeys
2. Copy your **Publishable key** (starts with `pk_test_` for testing)
3. Copy your **Secret key** (starts with `sk_test_` for testing)

### 2. Add Keys to Vercel

```bash
vercel env add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY production
# Paste your publishable key when prompted

vercel env add STRIPE_SECRET_KEY production
# Paste your secret key when prompted
```

### 3. Create Your Product in Stripe

1. Go to https://dashboard.stripe.com/products
2. Click **+ Add product**
3. Fill in:
   - **Name**: "One-Page Website"
   - **Description**: "Complete website in 6 days"
   - **Price**: $750
   - Click **Save product**
4. Copy the **Price ID** (starts with `price_...`)

### 4. Add Price ID to Your Site

Open `lib/stripe-config.ts` and replace the placeholder:

```typescript
signature: {
  name: 'Signature Package',
  priceId: 'price_YOUR_ACTUAL_PRICE_ID_HERE', // ← Replace this
  // ...
}
```

Or add it as an environment variable:

```bash
vercel env add NEXT_PUBLIC_STRIPE_PRICE_SIGNATURE production
# Paste your price ID
```

### 5. Deploy

```bash
git add .
git commit -m "Add Stripe payment integration"
git push
```

**That's it!** Your payment button is now live at [trailheadmade.com/#pricing](https://trailheadmade.com/#pricing)

---

## 📋 Complete Setup Guide

### Creating All Your Products

You'll want to create products for each pricing tier:

#### One-Page Website ($750)
1. Go to https://dashboard.stripe.com/products
2. Add product:
   - **Name**: One-Page Website
   - **Price**: $750 USD one-time
3. Copy Price ID → Update `NEXT_PUBLIC_STRIPE_PRICE_SIGNATURE`

#### Multi-Page Website ($1,500)
1. Add product:
   - **Name**: Multi-Page Website
   - **Price**: $1,500 USD one-time
2. Copy Price ID → Update in `lib/stripe-config.ts`

#### Add-ons (Optional)
- **Additional Page**: $300
- **E-commerce Integration**: $800
- **Blog/CMS Setup**: $400

### Setting Up Webhooks (Important!)

Webhooks notify your site when a payment succeeds. This lets you:
- Send confirmation emails automatically
- Add customers to your email list
- Track revenue in real-time

**Setup:**

1. Go to https://dashboard.stripe.com/webhooks
2. Click **+ Add endpoint**
3. Enter endpoint URL: `https://trailheadmade.com/api/webhooks/stripe`
4. Select events to listen for:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
5. Click **Add endpoint**
6. Copy the **Signing secret** (starts with `whsec_...`)
7. Add to Vercel:

```bash
vercel env add STRIPE_WEBHOOK_SECRET production
# Paste your webhook secret
```

### Test Mode vs Live Mode

**Test Mode** (for development):
- Use test keys: `pk_test_...` and `sk_test_...`
- Use test cards: `4242 4242 4242 4242` (any future date, any CVC)
- No real money is charged

**Live Mode** (for production):
- Use live keys: `pk_live_...` and `sk_live_...`
- Real credit cards are charged
- Real money goes to your bank account

**Switch to Live Mode when ready:**

1. In Stripe Dashboard, toggle from "Test mode" to "Live mode" (top right)
2. Get your live API keys from https://dashboard.stripe.com/apikeys
3. Update Vercel environment variables with live keys
4. Create live webhook endpoint with live webhook secret

---

## 🧪 Testing Your Integration

### Test the Checkout Flow

1. Go to https://trailheadmade.com/#pricing (or localhost:3000 if testing locally)
2. Click **"Get Started Today"** button
3. Use test card: `4242 4242 4242 4242`
4. Enter any future expiry date (e.g., 12/34)
5. Enter any 3-digit CVC (e.g., 123)
6. Click **Pay**
7. You should be redirected to `/success` page

### Test Webhooks Locally

Use Stripe CLI to forward webhooks to localhost:

```bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe

# Login to Stripe
stripe login

# Forward webhooks to local server
stripe listen --forward-to localhost:3000/api/webhooks/stripe

# In another terminal, trigger a test payment
stripe trigger checkout.session.completed
```

---

## 🎨 Customization

### Changing Button Text

In `components/SimplePricing.tsx`:

```tsx
<CheckoutButton
  priceId={STRIPE_PRODUCTS.signature.priceId}
  productName="One-Page Website"
>
  Your Custom Button Text Here
</CheckoutButton>
```

### Changing Success Page

Edit `app/success/page.tsx` to customize:
- Thank you message
- Next steps
- Branding
- Contact information

### Adding Promo Codes

Promo codes are already enabled! To create them:

1. Go to https://dashboard.stripe.com/coupons
2. Click **+ New**
3. Set percentage off or fixed amount
4. Click **Create coupon**

Customers can enter promo codes at checkout.

---

## 📊 What Happens After a Payment?

### Immediate
1. ✅ Customer is charged
2. ✅ Customer redirected to success page
3. ✅ Stripe sends receipt email to customer
4. ✅ Webhook notifies your server

### Currently Implemented
- Payment confirmation logged to console
- Customer email captured in Stripe
- Session tracking for analytics

### Ready to Implement (in webhook)
- [ ] Send custom confirmation email (using Resend)
- [ ] Send notification to you (hello@trailheadmade.com)
- [ ] Add customer to email campaign list
- [ ] Create project in your project management tool
- [ ] Track conversion in analytics

**To enable these**, edit `app/api/webhooks/stripe/route.ts` and uncomment the TODO items.

---

## 💰 Pricing & Fees

**Stripe Fees:**
- 2.9% + $0.30 per successful card charge
- No monthly fees, setup fees, or hidden costs

**Example:**
- Customer pays $750
- Stripe fee: $22.05 (2.9% of $750 + $0.30)
- You receive: $727.95

**Payout Schedule:**
- First payout: 7 days after first charge
- After that: Every 2 days (rolling basis)
- Money goes directly to your bank account

---

## 🔒 Security & Compliance

Your integration is **PCI compliant** because:
- Card details never touch your server
- Stripe handles all sensitive data
- Checkout happens on Stripe's secure domain

**Best Practices:**
- ✅ Never log or store card numbers
- ✅ Use HTTPS (Vercel handles this)
- ✅ Verify webhook signatures (already implemented)
- ✅ Use environment variables for keys (already implemented)

---

## 🐛 Troubleshooting

### "Payment service not configured" error

**Problem:** Stripe API keys not set in Vercel

**Fix:**
```bash
vercel env add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY production
vercel env add STRIPE_SECRET_KEY production
```

Then redeploy.

### Button shows "Price not configured"

**Problem:** Price ID is still the placeholder value

**Fix:** Update `lib/stripe-config.ts` with your actual Price ID from Stripe Dashboard.

### Webhook signature verification failed

**Problem:** Webhook secret doesn't match

**Fix:**
1. Get webhook secret from https://dashboard.stripe.com/webhooks
2. Update environment variable:
```bash
vercel env add STRIPE_WEBHOOK_SECRET production
```

### Payment succeeds but no webhook received

**Problem:** Webhook endpoint not created in Stripe Dashboard

**Fix:** Follow the "Setting Up Webhooks" section above.

---

## 📞 Support

**Stripe Documentation:**
- [Checkout Quickstart](https://stripe.com/docs/checkout/quickstart)
- [Webhooks Guide](https://stripe.com/docs/webhooks)
- [Testing Guide](https://stripe.com/docs/testing)

**Stripe Support:**
- Email: support@stripe.com
- Dashboard: https://dashboard.stripe.com/support

**Trailhead Support:**
- Email: hello@trailheadmade.com

---

## 🎉 You're All Set!

Your Stripe integration is production-ready. Here's what you have:

- ✅ Secure checkout flow
- ✅ Beautiful success page
- ✅ Webhook notifications
- ✅ Promo code support
- ✅ Mobile-optimized
- ✅ PCI compliant

**Next Steps:**
1. Create your products in Stripe Dashboard
2. Add API keys to Vercel
3. Update price IDs in config
4. Test with test card
5. Switch to live mode when ready
6. Start accepting payments!

Welcome to automated revenue. 🚀
