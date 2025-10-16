# Domain Migration: trailhead.agency → trailheadmade.com

## ✅ Completed Steps

### 1. Domain Registered
- ✅ **trailheadmade.com** registered on Hostinger ($10.19/year)

### 2. DNS Configured
- ✅ A Record: `@ → 76.76.21.21` (Vercel)
- ✅ CNAME Record: `www → cname.vercel-dns.com`

### 3. Domain Added to Vercel
- ✅ trailheadmade.com added to project
- ✅ www.trailheadmade.com added to project
- ✅ Assigned to production deployment

### 4. Local Environment Updated
- ✅ .env.local updated with new domain
- ✅ .env.example updated with new domain

---

## 🔧 Final Step: Update Vercel Environment Variable

You need to update the `NEXT_PUBLIC_SITE_URL` in Vercel:

### Via Vercel Dashboard (Easiest):

1. Go to: https://vercel.com/crushhh/trailhead-agency/settings/environment-variables

2. Find `NEXT_PUBLIC_SITE_URL`

3. Click **Edit** (pencil icon)

4. Change value from:
   ```
   https://trailhead.agency
   ```
   To:
   ```
   https://trailheadmade.com
   ```

5. Make sure it's checked for:
   - ✅ Production
   - ✅ Preview
   - ✅ Development

6. Click **Save**

7. **Redeploy** to apply changes:
   - Go to: https://vercel.com/crushhh/trailhead-agency
   - Click the latest deployment
   - Click "Redeploy" button

---

## ⏱️ DNS Propagation Timeline

DNS records were just updated. Here's what to expect:

### Immediate (Now):
- ✅ Vercel recognizes the domain
- ⏳ DNS propagating globally

### 15-30 Minutes:
- ✅ DNS fully propagated
- ✅ SSL certificates provisioned automatically by Vercel
- ✅ Site accessible at https://trailheadmade.com
- ✅ Redirect from www → root domain working

### Check DNS Propagation:
```bash
dig trailheadmade.com +short
# Should show: 76.76.21.21

dig www.trailheadmade.com +short
# Should show: cname.vercel-dns.com
```

Or use: https://dnschecker.org/#A/trailheadmade.com

---

## 🌐 Your Site URLs

### Current (Working Now):
- ✅ https://trailhead-agency.vercel.app (Vercel subdomain)

### New (After DNS propagates):
- 🎯 https://trailheadmade.com (primary)
- 🎯 https://www.trailheadmade.com (redirects to primary)

### Old (Let expire):
- ❌ trailhead.agency (expires in 1.5 months, don't renew)

---

## 📋 Verification Checklist

Once DNS propagates (15-30 min), verify:

### 1. Domain Access
- [ ] Visit https://trailheadmade.com - loads site ✓
- [ ] Visit https://www.trailheadmade.com - redirects to main ✓
- [ ] Green padlock (SSL) showing ✓

### 2. Contact Form
- [ ] Scroll to contact form
- [ ] Fill out test submission
- [ ] Submit successfully
- [ ] Check https://formspree.io/forms/movkypvy/submissions

### 3. SEO Files
- [ ] Visit https://trailheadmade.com/sitemap.xml
- [ ] Visit https://trailheadmade.com/robots.txt
- [ ] Both should show correct content

### 4. Performance
- [ ] All pages load fast
- [ ] Images loading correctly
- [ ] No console errors

---

## 🎨 Branding Update Needed

Don't forget to update branding materials:

### Code/Content:
- [x] Environment variables (.env.local, .env.example)
- [ ] Any hardcoded domain references in code
- [ ] Meta tags (if any mention domain)

### External:
- [ ] Business cards
- [ ] Email signatures
- [ ] Social media profiles
- [ ] Portfolio sites
- [ ] Google Business (if applicable)

### Marketing:
- [ ] Update any ads/campaigns
- [ ] Update website screenshots
- [ ] Update demo videos showing URL

---

## 💰 Cost Comparison

### Old: trailhead.agency
- Cost: $68/year
- Benefit: Generic TLD
- Issue: Expensive, "agency" contradicts positioning

### New: trailheadmade.com
- Cost: $10.19/year
- Benefit: Better branding, "made" = custom craft
- Savings: **$57.81/year** 🎉

---

## 🚀 What Happens Next

### Immediately:
1. Update `NEXT_PUBLIC_SITE_URL` in Vercel dashboard
2. Redeploy the site

### In 15-30 minutes:
3. DNS propagates globally
4. SSL certificates activate
5. Site goes live at trailheadmade.com

### In 1.5 months:
6. Let trailhead.agency expire (don't renew)
7. Save $68

---

## 🆘 Troubleshooting

### "This site can't be reached"
- DNS not propagated yet - wait 30 minutes
- Check propagation: https://dnschecker.org

### "Not Secure" warning
- SSL certificate still provisioning
- Usually takes 5-10 minutes after DNS propagates
- Vercel handles this automatically

### Contact form not working
- Check environment variable is updated in Vercel
- Make sure you redeployed after changing env var

### WWW not redirecting
- Check CNAME record: `www → cname.vercel-dns.com`
- Give DNS 30 minutes to propagate

---

## 📊 Current Status

```
Domain Registration:    ✅ Complete (Hostinger)
DNS Configuration:      ✅ Complete (A + CNAME)
Vercel Domain Setup:    ✅ Complete (added to project)
Local Env Updated:      ✅ Complete (.env files)
Vercel Env Update:      ⏳ Needs manual update
Production Redeploy:    ⏳ After env var update
DNS Propagation:        ⏳ 15-30 minutes
SSL Certificate:        ⏳ Auto after DNS
Site Live:              ⏳ After propagation
```

**Next Action:** Update environment variable in Vercel dashboard, then redeploy.
