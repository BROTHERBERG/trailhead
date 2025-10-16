# Rebrand Checklist: trailhead.agency → trailheadmade.com

## ✅ Completed Changes

### Domain & Infrastructure
- [x] Registered trailheadmade.com ($10.19/year vs $68/year for .agency)
- [x] Configured DNS in Hostinger (A + CNAME records)
- [x] Added domain to Vercel
- [x] SSL certificate provisioned automatically
- [x] Site live at https://trailheadmade.com

### Code Updates
- [x] Updated email address in Footer.tsx
  - Old: jason@trailhead.agency
  - New: jason@trailheadmade.com
- [x] Updated .env.local with new domain
- [x] Updated .env.example with new domain

### Documentation
- [x] Created VERCEL-PROJECT-RENAME.md
- [x] Created DOMAIN-MIGRATION.md
- [x] Created SQUARESPACE-DISCONNECT.md
- [x] Created DNS-SETUP.md

---

## 🔲 Manual Steps Required

### 1. Rename Vercel Project
**Current**: trailhead-agency
**Target**: trailhead

**Instructions**: See [VERCEL-PROJECT-RENAME.md](VERCEL-PROJECT-RENAME.md)

1. Go to https://vercel.com/crushhh/trailhead-agency/settings
2. Scroll to "Project Name"
3. Click Edit
4. Change to: `trailhead`
5. Save

Then locally:
```bash
rm -rf .vercel
vercel link
# Select: trailhead
```

### 2. Update Environment Variable in Vercel
**Variable**: NEXT_PUBLIC_SITE_URL
**Current**: https://trailhead.agency
**Target**: https://trailheadmade.com

**Instructions**:
1. Go to https://vercel.com/crushhh/trailhead-agency/settings/environment-variables
2. Edit NEXT_PUBLIC_SITE_URL
3. Change to: `https://trailheadmade.com`
4. Save
5. **Redeploy** the site

### 3. Set Up Email Forwarding
**Action Required**: Configure jason@trailheadmade.com email

**Options**:

**A) Hostinger Email Forwarding** (Usually Free)
1. Go to Hostinger dashboard
2. Email → Email Forwarding
3. Create: jason@trailheadmade.com → your-actual-email@gmail.com

**B) Google Workspace** ($6/month)
- Full Gmail with custom domain
- Professional solution

**C) Cloudflare Email Routing** (Free)
- Transfer domain to Cloudflare
- Use their free email routing
- Best free option

**D) Improvmx.com** (Free tier available)
- Email forwarding service
- 500 forwards/day on free tier

### 4. Let Old Domain Expire
**Domain**: trailhead.agency
**Registrar**: GoDaddy
**Expires**: ~1.5 months
**Action**: Don't renew (save $68/year)

---

## 🎨 External Branding Updates

### Business Materials
- [ ] Business cards (if printed)
- [ ] Email signatures
- [ ] LinkedIn profile
- [ ] Twitter/X bio
- [ ] Instagram bio
- [ ] Portfolio site
- [ ] Resume/CV

### Marketing Materials
- [ ] Pitch decks
- [ ] Proposals/templates
- [ ] Client contracts (header/footer)
- [ ] Invoice templates

### Social Proof
- [ ] Update screenshots with new domain
- [ ] Update demo videos showing URL bar
- [ ] Case study references

### Advertising
- [ ] Google Ads (if running)
- [ ] Facebook/Meta ads (if running)
- [ ] Update any landing page URLs

---

## 💰 Financial Impact

### Cost Savings
- Old domain: $68/year (trailhead.agency)
- New domain: $10.19/year (trailheadmade.com)
- **Annual savings: $57.81** 🎉

### Email Costs (Optional)
- Free forwarding: $0
- Google Workspace: $72/year
- Still cheaper than keeping .agency!

---

## 🧠 Brand Positioning Update

### Old Messaging Issues:
- ❌ "trailhead.agency" implies agency (contradicts positioning)
- ❌ Expensive domain
- ❌ ".agency" TLD is less memorable

### New Messaging Wins:
- ✅ "trailheadmade.com" = custom, craft, tailor-made
- ✅ Affordable domain matches affordable service
- ✅ ".com" = trusted, familiar
- ✅ Three-word ideogram potential: Trail + Head + Made 🛤️🧭✨

### Tagline Ideas:
- "Sites made simple"
- "Made for your business"
- "Made in 6 days"
- "Custom-made, quick-delivered"

---

## 🔍 SEO Considerations

### Domain Authority
- Starting fresh with new domain
- Old domain had minimal history anyway (expires soon)
- No backlinks to redirect

### Action Items:
- [ ] Submit sitemap to Google Search Console
  - Already generated: https://trailheadmade.com/sitemap.xml
- [ ] Submit site to Google Search Console
- [ ] Set up Google Analytics (optional)
- [ ] Set up Plausible/Fathom for privacy-friendly analytics

---

## 📊 Post-Launch Verification

### Technical Checks
- [x] DNS propagated (15-30 min)
- [x] SSL certificate active
- [x] Site loads at trailheadmade.com
- [x] WWW redirects to root
- [ ] Contact form tested
- [ ] Email forwarding tested (once set up)

### Performance Checks
- [x] Lighthouse score (should be 90+)
- [x] Core Web Vitals passing
- [x] Mobile responsive
- [x] All images loading

---

## 🎯 Timeline

### Completed (Today):
- ✅ Domain registered
- ✅ DNS configured
- ✅ Site deployed
- ✅ Email address updated in code
- ✅ Documentation created

### This Week:
- [ ] Rename Vercel project
- [ ] Update Vercel environment variable
- [ ] Set up email forwarding
- [ ] Test everything thoroughly

### This Month:
- [ ] Update external materials
- [ ] Submit to Google Search Console
- [ ] Set up analytics

### Next 1.5 Months:
- [ ] Let trailhead.agency expire (don't renew)

---

## 📝 Notes

### Why This Rebrand Works:
1. **Cost-effective**: Saves $58/year
2. **Better positioning**: "Made" > "Agency" for messaging
3. **More memorable**: Rolls off tongue like "tailor-made"
4. **Visual identity**: Three-word logo potential
5. **Professional**: .com is the gold standard

### What Doesn't Change:
- ✅ Existing deployments keep working
- ✅ Git history preserved
- ✅ Environment variables (after manual update)
- ✅ Formspree integration
- ✅ All code and content
- ✅ Performance and SEO setup

---

**Current Status**: Site is live at trailheadmade.com! Just need to complete the manual steps above for full migration. 🚀
