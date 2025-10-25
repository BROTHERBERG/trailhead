import { Resend } from 'resend';
import { NextResponse } from 'next/server';

/**
 * Segment API - Tag subscribers based on their self-selected category
 *
 * When someone clicks a link in the welcome email, we tag them in Resend
 * so they receive the appropriate drip campaign.
 *
 * Segments:
 * - no-website: Don't have a website yet (needs education + urgency)
 * - has-website: Have a website but want to improve (needs optimization tips)
 * - social-only: Social media only (needs platform ownership education)
 */

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');
  const segment = searchParams.get('type');

  if (!email || !segment) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  const validSegments = ['no-website', 'has-website', 'social-only'];
  if (!validSegments.includes(segment)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    console.error('Missing RESEND_API_KEY or RESEND_AUDIENCE_ID');
    return NextResponse.redirect(new URL('/', request.url));
  }

  const resend = new Resend(apiKey);

  try {
    // Find the contact by email
    const { data: contacts } = await resend.contacts.list({
      audienceId,
    });

    const contact = contacts?.data.find((c) => c.email === email);

    if (!contact) {
      console.error(`Contact not found: ${email}`);
      return NextResponse.redirect(new URL('/', request.url));
    }

    // Update contact with segment metadata
    await resend.contacts.update({
      audienceId,
      id: contact.id,
      unsubscribed: contact.unsubscribed,
      // @ts-ignore - Resend types don't include arbitrary metadata yet
      segment: segment,
      segmented_at: new Date().toISOString(),
    });

    console.log(`Tagged ${email} as ${segment}`);

    // Redirect to thank you page with personalized message
    return NextResponse.redirect(
      new URL(`/segment-thank-you?type=${segment}`, request.url)
    );

  } catch (error) {
    console.error('Segmentation error:', error);
    return NextResponse.redirect(new URL('/', request.url));
  }
}
