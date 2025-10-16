# Email Setup: hello@trailheadmade.com (FREE with ImprovMX)

## 🆓 Free Email Forwarding with ImprovMX

Get professional email addresses that forward to your personal Gmail/email - **completely free**.

### What You'll Get:
- ✅ **hello@trailheadmade.com** (currently on site)
- ✅ Unlimited additional aliases
- ✅ Send emails FROM these addresses
- ✅ Free forever

---

## 📋 Setup Instructions (5 minutes)

### Step 1: Sign Up for ImprovMX

1. Go to: https://improvmx.com
2. Click "Get Started Free"
3. Enter your email address
4. Verify your email

### Step 2: Add Your Domain

1. In ImprovMX dashboard, click "Add Domain"
2. Enter: `trailheadmade.com`
3. Click "Add Domain"

### Step 3: Get MX Records

ImprovMX will show you 2 MX records to add. They look like:

```
Type: MX
Name: @ (or leave blank)
Priority: 10
Value: mx1.improvmx.com

Type: MX
Name: @ (or leave blank)
Priority: 20
Value: mx2.improvmx.com
```

### Step 4: Add MX Records to Hostinger DNS

1. Log into Hostinger
2. Go to **Domains** → **trailheadmade.com** → **DNS Records**
3. Click "Add Record"
4. Add **first MX record**:
   - Type: `MX`
   - Name: `@` (or leave blank)
   - Priority: `10`
   - Points to: `mx1.improvmx.com`
   - TTL: `3600`
5. Click "Add Record" again
6. Add **second MX record**:
   - Type: `MX`
   - Name: `@` (or leave blank)
   - Priority: `20`
   - Points to: `mx2.improvmx.com`
   - TTL: `3600`
7. Save

### Step 5: Wait for DNS Propagation

- **Time**: 10-30 minutes
- ImprovMX will verify automatically
- You'll get an email when it's ready

### Step 6: Create Email Aliases

Once verified, create your aliases:

1. In ImprovMX dashboard, click "Add Alias"
2. **Alias**: `hello`
3. **Forward to**: your-personal-email@gmail.com
4. Save

**Repeat for other aliases you want:**
- `contact@trailheadmade.com`
- `info@trailheadmade.com`
- `jason@trailheadmade.com`
- `support@trailheadmade.com`

All forward to your Gmail - you pick!

---

## 📤 Sending Emails FROM hello@trailheadmade.com

### Option 1: Gmail Integration (Easiest)

1. In ImprovMX dashboard:
   - Go to **SMTP Credentials**
   - Generate SMTP password

2. In Gmail:
   - Settings → Accounts and Import
   - "Send mail as" → Add another email
   - Name: `Trailhead`
   - Email: `hello@trailheadmade.com`
   - SMTP Server: `smtp.improvmx.com`
   - Port: `587`
   - Username: `hello@trailheadmade.com`
   - Password: [your SMTP password from ImprovMX]

3. Verify email
4. Done! Now you can send from Gmail as hello@trailheadmade.com

### Option 2: Use ImprovMX Web Interface

- Log into ImprovMX dashboard
- Compose emails directly from there
- Simple, but less convenient than Gmail

---

## 🧪 Test Your Setup

### Test Receiving Emails:

1. Send a test email TO: `hello@trailheadmade.com`
2. Should arrive in your personal inbox
3. May take 10-30 min on first setup

### Test Sending Emails:

1. Reply from Gmail using "From: hello@trailheadmade.com"
2. Recipients see it came from your professional address
3. Professional = trust!

---

## 💡 Pro Tips

### Recommended Aliases to Create:

1. **hello@trailheadmade.com** ⭐ (main contact - already on site)
2. **contact@trailheadmade.com** (classic fallback)
3. **jason@trailheadmade.com** (personal touch)
4. **support@trailheadmade.com** (if you offer support)
5. **invoices@trailheadmade.com** (for payment emails)

### Email Signatures:

Create a professional signature in Gmail:

```
Jason
Trailhead
Sites made simple.

hello@trailheadmade.com
(403) 404-0014
trailheadmade.com
```

### Catch-All Email (Optional):

Set up a catch-all so ANY email to @trailheadmade.com forwards to you:

1. In ImprovMX, create alias: `*` (asterisk)
2. Forward to: your-email@gmail.com
3. Now `anything@trailheadmade.com` works!

---

## 🆚 Why ImprovMX > Paid Email?

### ImprovMX (Free):
- ✅ $0/month
- ✅ Unlimited aliases
- ✅ Can send FROM your addresses
- ✅ Good for solo/small business
- ❌ No dedicated inbox (forwards only)

### Google Workspace ($6/month):
- ✅ Dedicated Gmail inbox
- ✅ Google Drive, Calendar, etc.
- ✅ More "professional" for larger teams
- ❌ $72/year per user

### For Your Use Case:
**ImprovMX is perfect.** You're a solo developer/small studio - email forwarding is all you need. Save $72/year!

---

## 🔐 Security & SPF Records

To prevent your emails being marked as spam, add SPF record:

### In Hostinger DNS:

```
Type: TXT
Name: @ (or leave blank)
Value: v=spf1 include:spf.improvmx.com ~all
TTL: 3600
```

This tells email servers: "ImprovMX is authorized to send emails for trailheadmade.com"

---

## ⏱️ Timeline

### Now:
- [ ] Sign up for ImprovMX
- [ ] Add trailheadmade.com domain
- [ ] Get MX records

### In 5 Minutes:
- [ ] Add MX records to Hostinger DNS
- [ ] Add SPF record (optional but recommended)

### In 30 Minutes:
- [ ] DNS propagates
- [ ] ImprovMX verifies domain
- [ ] Create `hello` alias

### In 1 Hour:
- [ ] Test receiving emails
- [ ] Set up Gmail sending (optional)
- [ ] Test sending emails
- [ ] You're live!

---

## 🆘 Troubleshooting

### "Domain not verified" after 30+ min
- Check MX records are correct in Hostinger
- Make sure Priority is 10 and 20 (not missing)
- Try clicking "Verify" button in ImprovMX again

### Emails not arriving
- Check spam folder
- Wait full 30 minutes for DNS
- Verify alias is set up correctly

### Can't send emails from Gmail
- Double-check SMTP credentials
- Make sure you generated SMTP password in ImprovMX
- Use port 587, not 465

### Emails going to spam
- Add SPF record (see above)
- Send a few emails first to "warm up" your domain
- Ask recipients to mark as "Not Spam"

---

## 📊 Current Setup

### Email on Site:
- **hello@trailheadmade.com** (Footer contact)

### Next Steps:
1. Set up ImprovMX (follow guide above)
2. Create hello@trailheadmade.com alias
3. Test it!
4. Optional: Add more aliases as needed

---

**Total Cost**: $0 forever 🎉

**Time to Set Up**: 5 minutes + 30 min DNS wait

**Professional Impact**: Huge! ✉️
