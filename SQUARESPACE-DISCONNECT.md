# Disconnect Domain from Squarespace Hosting

## Problem
Squarespace won't let you edit DNS records because the domain is currently connected to Squarespace hosting.

**Error**: "Custom record not saved - We were unable to save this record"

## Solution: Two Options

### Option 1: Use Vercel's Nameservers (Recommended - Easier)

This is the simplest approach - let Vercel manage your DNS entirely.

#### Step 1: Get Vercel's Nameservers

Vercel will provide custom nameservers. Let me check if they're available:

1. Go to: https://vercel.com/crushhh/trailhead-agency/settings/domains
2. Click on "trailhead.agency"
3. Look for "Nameservers" section
4. Click "Use Vercel Nameservers" or similar option

#### Step 2: Update Nameservers in Squarespace

1. Log into Squarespace: https://account.squarespace.com
2. Go to **Settings** → **Domains** → **trailhead.agency**
3. Click **Advanced Settings** or **DNS Settings**
4. Look for **Nameservers** section
5. Change from "Squarespace Nameservers" to "Custom Nameservers"
6. Enter Vercel's nameservers (you'll get these from Vercel dashboard)
7. Save changes

**Propagation Time**: 15-60 minutes

---

### Option 2: Disconnect Domain from Squarespace Site (Keep Squarespace DNS)

This keeps your DNS at Squarespace but disconnects the hosting.

#### Step 1: Disconnect in Squarespace

1. Log into Squarespace: https://account.squarespace.com
2. Go to your **Squarespace site** (not domains section)
3. Go to **Settings** → **Domains**
4. Find "trailhead.agency"
5. Click **Disconnect** or **Remove Domain**
6. Confirm the disconnection

#### Step 2: Add DNS Records

Now that the domain is disconnected, go back to DNS settings:

1. Go to **Settings** → **Domains** → **trailhead.agency**
2. Click **DNS Settings** or **Advanced DNS**
3. Add the A record:
   ```
   Type: A
   Host: @
   Value: 76.76.21.21
   ```
4. Add the CNAME record:
   ```
   Type: CNAME
   Host: www
   Value: cname.vercel-dns.com
   ```

**Propagation Time**: 15-30 minutes

---

## Option 3: Alternative - Use Subdomain First

If you want to test without touching the main domain:

1. Keep trailhead.agency as-is on Squarespace
2. Add a subdomain in Vercel: `app.trailhead.agency` or `www.trailhead.agency`
3. Add just the CNAME record in Squarespace:
   ```
   Type: CNAME
   Host: app
   Value: cname.vercel-dns.com
   ```

This way you can test at `https://app.trailhead.agency` first!

---

## Current Domain Status

```
Domain: trailhead.agency
Current DNS: Squarespace nameservers
Current Hosting: Squarespace (showing 404)
Current IPs:
  - 198.185.159.145
  - 198.49.23.144
  - 198.49.23.145
  - 198.185.159.144

Target: Vercel
Target IP: 76.76.21.21
```

---

## Recommended Approach

**I recommend Option 1 (Vercel Nameservers)** because:
- ✅ Simplest setup
- ✅ Vercel manages DNS automatically
- ✅ No manual record management
- ✅ Better performance with Vercel's edge network
- ✅ No conflicts with Squarespace

### Quick Steps:
1. Go to Vercel dashboard
2. Request nameservers for trailhead.agency
3. Update nameservers in Squarespace domain settings
4. Wait 30-60 minutes for propagation
5. Done!

---

## Need Help?

If you're unsure which option to choose or need help with the process, let me know and I can:
1. Check Vercel's nameserver options
2. Walk you through the Squarespace disconnection
3. Set up a subdomain for testing first

**Current Site URLs:**
- ✅ **Working Now**: https://trailhead-agency.vercel.app
- ⏳ **Pending DNS**: https://trailhead.agency
