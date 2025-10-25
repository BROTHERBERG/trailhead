import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { dripSequence, segmentedDripSequences } from '@/lib/email-templates';

/**
 * Drip Campaign Cron Job
 *
 * This endpoint is called daily by Vercel Cron to send scheduled drip emails
 * to newsletter subscribers based on their subscription date.
 *
 * How it works:
 * 1. Fetches all contacts from Resend audience
 * 2. For each contact, calculates days since subscription
 * 3. Checks if they need a drip email today (day 2, 4, 6, or 9)
 * 4. Sends the appropriate email if not already sent
 *
 * Contact metadata tracks:
 * - subscribed_at: ISO date string of subscription
 * - drip_emails_sent: comma-separated list of days (e.g., "2,4,6")
 */

export async function GET(request: Request) {
  // Verify this is a cron request (security)
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    console.error('Missing RESEND_API_KEY or RESEND_AUDIENCE_ID');
    return NextResponse.json(
      { error: 'Email service not configured' },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    // Fetch all contacts from audience
    const { data: contacts } = await resend.contacts.list({
      audienceId,
    });

    if (!contacts || contacts.data.length === 0) {
      return NextResponse.json({
        success: true,
        message: 'No contacts to process',
        emailsSent: 0
      });
    }

    const emailsSent: Array<{ email: string; day: number }> = [];
    const today = new Date();

    // Process each contact
    for (const contact of contacts.data) {
      // Skip if no subscription date metadata
      if (!contact.created_at) continue;

      const subscribedAt = new Date(contact.created_at);
      const daysSinceSubscription = Math.floor(
        (today.getTime() - subscribedAt.getTime()) / (1000 * 60 * 60 * 24)
      );

      // Determine which drip sequence to use based on subscriber segment
      const segment = (contact as any).segment as 'no-website' | 'has-website' | 'social-only' | undefined;
      const sequenceToUse = segment && segmentedDripSequences[segment]
        ? segmentedDripSequences[segment]
        : dripSequence;

      // Check if they need a drip email today
      const emailToSend = sequenceToUse.find(email => email.day === daysSinceSubscription);

      if (!emailToSend) continue;

      // Check if this email was already sent (stored in contact metadata)
      const dripEmailsSent = (contact as any).drip_emails_sent || '';
      const sentDays = dripEmailsSent.split(',').filter(Boolean).map(Number);

      if (sentDays.includes(emailToSend.day)) {
        console.log(`Email day ${emailToSend.day} already sent to ${contact.email}`);
        continue;
      }

      // Send the drip email
      try {
        await resend.emails.send({
          from: 'Trailhead <hello@trailheadmade.com>',
          to: contact.email,
          subject: emailToSend.subject,
          html: emailToSend.getHtml(),
          replyTo: 'hello@trailheadmade.com',
        });

        // Update contact metadata to mark this email as sent
        const newSentDays = [...sentDays, emailToSend.day].join(',');
        await resend.contacts.update({
          audienceId,
          id: contact.id,
          unsubscribed: contact.unsubscribed,
          // @ts-ignore - Resend types don't include arbitrary metadata yet
          drip_emails_sent: newSentDays,
        });

        emailsSent.push({
          email: contact.email,
          day: emailToSend.day
        });

        const segmentLabel = segment ? ` (${segment} sequence)` : ' (generic sequence)';
        console.log(`Sent day ${emailToSend.day} email to ${contact.email}${segmentLabel}`);
      } catch (emailError) {
        console.error(`Failed to send email to ${contact.email}:`, emailError);
      }
    }

    return NextResponse.json({
      success: true,
      message: `Drip campaign completed`,
      emailsSent: emailsSent.length,
      details: emailsSent
    });

  } catch (error) {
    console.error('Drip campaign error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}

// Also allow POST for manual testing
export async function POST(request: Request) {
  return GET(request);
}
