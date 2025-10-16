# Rename Vercel Project: trailhead-agency → trailhead

## Instructions

The Vercel CLI doesn't support renaming projects directly. You need to do this through the dashboard:

### Step 1: Rename in Vercel Dashboard

1. Go to: https://vercel.com/crushhh/trailhead-agency/settings

2. Scroll down to **"Project Name"** section

3. Click **Edit** button

4. Change name from:
   ```
   trailhead-agency
   ```
   To:
   ```
   trailhead
   ```

5. Click **Save**

### Step 2: Update Local Project Link

After renaming in the dashboard, update your local `.vercel` folder:

```bash
# From your project directory
rm -rf .vercel
vercel link
```

When prompted:
- Link to existing project? **Yes**
- Select project: **trailhead** (your renamed project)
- Link to Production? **Yes**

### What Changes:

**Project URL:**
- Old: `https://vercel.com/crushhh/trailhead-agency`
- New: `https://vercel.com/crushhh/trailhead`

**Deployment URLs (Vercel subdomain):**
- Old: `trailhead-agency.vercel.app`
- New: `trailhead.vercel.app`

**Custom Domain (No Change):**
- Still: `trailheadmade.com` ✓
- Your custom domain is unaffected!

### Documentation Updates Needed:

After renaming, update these files:
- [ ] VERCEL-DEPLOYMENT.md
- [ ] DNS-SETUP.md
- [ ] DOMAIN-MIGRATION.md
- [ ] Any internal documentation referencing the old project name

### Why Rename?

1. ✅ Shorter, cleaner project name
2. ✅ Removes "agency" which contradicts positioning
3. ✅ Matches brand: just "Trailhead"
4. ✅ Better Vercel subdomain: `trailhead.vercel.app`

---

**Note:** This is purely cosmetic - your site, deployments, and custom domain will continue working without interruption.
