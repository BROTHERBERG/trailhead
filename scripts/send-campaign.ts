#!/usr/bin/env ts-node
/**
 * Send Email Campaign Script
 *
 * Usage:
 *   npm run send-campaign
 *
 * This script sends emails to your contact list using Resend.
 */

import { welcomeEmail, followUpEmail, promoEmail } from '../lib/email-templates';

// Your email list (replace with actual emails)
const emailList = [
  'test@example.com', // Replace with real email to test
  // 'customer2@example.com',
  // 'customer3@example.com',
];

// Configuration
const CAMPAIGN_TYPE: 'welcome' | 'followup' | 'promo' = 'promo'; // Change this
const API_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

async function sendCampaign() {
  console.log(`\n🚀 Starting ${CAMPAIGN_TYPE} campaign...`);
  console.log(`📧 Sending to ${emailList.length} recipients\n`);

  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < emailList.length; i++) {
    const email = emailList[i];

    try {
      // Get email template based on campaign type
      let subject = '';
      let html = '';

      switch (CAMPAIGN_TYPE) {
        case 'welcome':
          subject = 'Welcome to Trailhead - Let\'s Build Something Great';
          html = welcomeEmail('there'); // Replace with actual name if you have it
          break;
        case 'followup':
          subject = 'Still interested in your website project?';
          html = followUpEmail('there', 'business');
          break;
        case 'promo':
          subject = 'Launch Your Website in 1 Week - Limited Spots Open';
          html = promoEmail('there');
          break;
      }

      // Send email
      const response = await fetch(`${API_URL}/api/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: email,
          subject,
          html,
        }),
      });

      const result = await response.json();

      if (result.success) {
        successCount++;
        console.log(`✅ [${i + 1}/${emailList.length}] Sent to ${email}`);
      } else {
        errorCount++;
        console.error(`❌ [${i + 1}/${emailList.length}] Failed to send to ${email}:`, result.error);
      }

      // Rate limit: Wait 100ms between emails to avoid hitting limits
      if (i < emailList.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }

    } catch (error) {
      errorCount++;
      console.error(`❌ [${i + 1}/${emailList.length}] Error sending to ${email}:`, error);
    }
  }

  // Summary
  console.log(`\n📊 Campaign Complete!`);
  console.log(`   ✅ Success: ${successCount}`);
  console.log(`   ❌ Failed: ${errorCount}`);
  console.log(`   📧 Total: ${emailList.length}\n`);
}

// Run the campaign
sendCampaign().catch(console.error);
