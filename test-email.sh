#!/bin/bash

# Test Email Script
# Send a test email to yourself to verify Resend is working

echo "📧 Resend Email Test"
echo "===================="
echo ""
read -p "Enter your email address: " EMAIL

if [ -z "$EMAIL" ]; then
  echo "❌ Email address is required"
  exit 1
fi

echo ""
echo "🚀 Sending test email to $EMAIL..."
echo ""

curl -X POST https://trailheadmade.com/api/send-email \
  -H "Content-Type: application/json" \
  -d "{
    \"to\": \"$EMAIL\",
    \"subject\": \"Test Email from Trailhead\",
    \"html\": \"<h1>🎉 It Works!</h1><p>Your Resend integration is live and ready to send campaigns.</p><p>This email was sent from <strong>Trailhead</strong> using Resend.</p>\"
  }"

echo ""
echo ""
echo "✅ Test email sent!"
echo "📬 Check your inbox: $EMAIL"
echo ""
