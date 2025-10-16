# DNS Setup for trailhead.agency

## ✅ Status: Ready to Configure DNS

Your site is deployed and ready at:
- **Production URL**: https://trailhead-agency.vercel.app
- **Custom Domain**: trailhead.agency (pending DNS configuration)

## 🌐 Current DNS Configuration

Your domain is currently using **Squarespace DNS**:
- connect1.squarespacedns.com
- connect2.squarespacedns.com

## 📋 Required DNS Records

Add these records in your **Squarespace DNS settings**:

### For Root Domain (trailhead.agency)

```
Type: A
Host: @
Value: 76.76.21.21
TTL: 3600 (or Automatic)
```

### For WWW Subdomain (www.trailhead.agency)

```
Type: CNAME
Host: www
Value: cname.vercel-dns.com
TTL: 3600 (or Automatic)
```

## 🔧 How to Update DNS in Squarespace

1. **Log into Squarespace**
   - Go to https://account.squarespace.com
   - Navigate to your domains

2. **Find trailhead.agency**
   - Click on "trailhead.agency"
   - Go to "DNS Settings" or "Advanced Settings"

3. **Add A Record**
   - Click "Add Record" or "+"
   - Select "A Record"
   - Host: `@` (this represents the root domain)
   - Points to: `76.76.21.21`
   - Save

4. **Add CNAME Record**
   - Click "Add Record" or "+"
   - Select "CNAME Record"
   - Host: `www`
   - Points to: `cname.vercel-dns.com`
   - Save

## ⏱️ DNS Propagation

- **Time**: 5-60 minutes (usually ~15 minutes)
- **What happens**: DNS changes spread globally
- **Check progress**: Use https://dnschecker.org

## ✅ Verification

### Check DNS Propagation
Visit https://dnschecker.org and enter:
- `trailhead.agency` - Should show `76.76.21.21`
- `www.trailhead.agency` - Should show `cname.vercel-dns.com`

### Test Your Site
Once DNS propagates, visit:
- https://trailhead.agency
- https://www.trailhead.agency

Both should load your site with SSL (secure connection).

### Verify Contact Form
1. Go to https://trailhead.agency
2. Scroll to "Start Your Project" form
3. Fill it out and submit
4. Check https://formspree.io/forms/movkypvy/submissions

## 🔐 SSL Certificate

Vercel automatically provisions SSL certificates. You'll see:
- ✅ Automatic HTTPS
- ✅ Free SSL certificate
- ✅ Auto-renewal
- ✅ Both root and www domains secured

**Status**: Vercel is creating SSL certificates now (this happens automatically after DNS is configured)

## 🚨 Troubleshooting

### "This site can't be reached"
- **Cause**: DNS not propagated yet
- **Fix**: Wait 15-30 minutes, clear browser cache

### "Not Secure" Warning
- **Cause**: SSL certificate still provisioning
- **Fix**: Wait 5-10 minutes after DNS propagates

### Site loads but form doesn't work
- **Cause**: Environment variables not set
- **Fix**: Already configured! Should work fine.

### Squarespace blocking changes
- **Cause**: Domain might be locked or have auto-renewal
- **Fix**: Contact Squarespace support or check domain settings

## 📊 After Setup

### Monitor Your Site
- **Vercel Dashboard**: https://vercel.com/crushhh/trailhead-agency
- **Analytics**: https://vercel.com/crushhh/trailhead-agency/analytics
- **Deployments**: https://vercel.com/crushhh/trailhead-agency

### Form Submissions
- **Dashboard**: https://formspree.io/forms/movkypvy/submissions
- **Email**: You'll receive notifications for each submission

## 🎯 Current Configuration Summary

✅ **Deployed to Production**
- URL: https://trailhead-agency.vercel.app
- Status: Live and working
- Build: Successful (115 KB bundle)

✅ **Environment Variables Set**
- NEXT_PUBLIC_FORMSPREE_ID: movkypvy
- NEXT_PUBLIC_SITE_URL: https://trailhead.agency

✅ **Domain Added to Vercel**
- Domain: trailhead.agency
- WWW: www.trailhead.agency
- SSL: Provisioning (will activate after DNS)

⏳ **Waiting for DNS Configuration**
- You need to add the A and CNAME records above
- This is the ONLY remaining step

## 🎉 What's Next?

1. [ ] Add DNS records in Squarespace (instructions above)
2. [ ] Wait 15-30 minutes for propagation
3. [ ] Visit https://trailhead.agency to verify
4. [ ] Test the contact form
5. [ ] Share your new site with the world!

---

**Need Help?**
- Vercel Docs: https://vercel.com/docs/projects/domains
- Squarespace DNS: https://support.squarespace.com/hc/en-us/articles/205812378
