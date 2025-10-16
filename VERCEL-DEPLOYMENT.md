# Vercel Deployment Guide

## ✅ Step 1: Build Successful

Your preview deployment is live at:
**https://trailhead-agency-rbllvpaqz-crushhh.vercel.app**

The build completed successfully with:
- ✅ Static generation working
- ✅ All pages compiling
- ✅ Bundle size: 115 kB (optimized!)

## 🔧 Step 2: Add Environment Variables

Before deploying to production, add your environment variables:

### Option 1: Via Vercel Dashboard (Recommended)

1. Go to: https://vercel.com/crushhh/trailhead-agency/settings/environment-variables

2. Add these variables:

   **Variable Name:** `NEXT_PUBLIC_FORMSPREE_ID`
   **Value:** `movkypvy`
   **Environments:** ✅ Production, ✅ Preview, ✅ Development

   **Variable Name:** `NEXT_PUBLIC_SITE_URL`
   **Value:** `https://trailhead.agency`
   **Environments:** ✅ Production

3. Click "Save"

### Option 2: Via CLI (if you prefer)

```bash
# From your project directory
echo "movkypvy" | vercel env add NEXT_PUBLIC_FORMSPREE_ID production
echo "movkypvy" | vercel env add NEXT_PUBLIC_FORMSPREE_ID preview
echo "https://trailhead.agency" | vercel env add NEXT_PUBLIC_SITE_URL production
```

## 🚀 Step 3: Deploy to Production

Once environment variables are added:

```bash
vercel --prod
```

This will deploy to: **https://trailhead-agency.vercel.app**

## 🌐 Step 4: Connect Your Custom Domain

### Add Domain to Vercel

1. Go to: https://vercel.com/crushhh/trailhead-agency/settings/domains

2. Click "Add Domain"

3. Enter: `trailhead.agency`

4. Vercel will give you DNS records to add

### Update DNS Records

You'll need to add these records at your domain registrar (where you bought trailhead.agency):

**For Root Domain (trailhead.agency):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For WWW Subdomain (www.trailhead.agency):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### SSL Certificate

Vercel automatically provisions SSL certificates once DNS is configured. This usually takes 5-15 minutes after DNS propagation.

## 📊 Monitoring Your Deployment

### Check Deployment Status
```bash
vercel ls
```

### View Recent Deployments
https://vercel.com/crushhh/trailhead-agency

### View Analytics
https://vercel.com/crushhh/trailhead-agency/analytics

## 🔄 Future Deployments

Every time you push to your git repository:
- Vercel automatically builds and deploys
- Preview deployments for branches
- Production deployment for main branch

To manually deploy:
```bash
vercel          # Preview deployment
vercel --prod   # Production deployment
```

## ⚙️ What's Already Configured

✅ Build command: `npm run build`
✅ Framework: Next.js
✅ Output directory: `.next`
✅ Node version: 20.x (automatic)
✅ Legacy peer deps: enabled (for React 19)

## 🎯 Next Steps

1. [ ] Add environment variables in Vercel dashboard
2. [ ] Deploy to production with `vercel --prod`
3. [ ] Add DNS records at your domain registrar
4. [ ] Wait for DNS propagation (5-15 minutes)
5. [ ] Test contact form on production URL
6. [ ] Verify trailhead.agency loads correctly

## 🐛 Troubleshooting

### Build Warnings
The build shows 2 ESLint warnings about using `<a>` instead of `<Link>`. These are just warnings and don't affect functionality. We can fix them later if needed.

### Contact Form Testing
After production deployment, test the form at:
- https://trailhead-agency.vercel.app (production)
- https://trailhead.agency (after DNS setup)

Submissions will appear at:
- https://formspree.io/forms/movkypvy/submissions

### DNS Propagation
Use these tools to check DNS propagation:
- https://dnschecker.org
- https://www.whatsmydns.net

Enter `trailhead.agency` to see if your DNS changes have propagated globally.
