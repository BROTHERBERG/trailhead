import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error('RESEND_API_KEY not configured');
    return NextResponse.json(
      { success: false, error: 'Newsletter service not configured' },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'Valid email address required' },
        { status: 400 }
      );
    }

    // Create contact in Resend audience
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    if (!audienceId) {
      console.error('RESEND_AUDIENCE_ID not configured');
      return NextResponse.json(
        { success: false, error: 'Newsletter audience not configured' },
        { status: 500 }
      );
    }

    // Add contact to audience
    const contact = await resend.contacts.create({
      email,
      audienceId,
    });

    // Send welcome email with segmentation
    await resend.emails.send({
      from: 'Trailhead <hello@trailheadmade.com>',
      to: email,
      subject: 'Welcome to Trailhead Weekly Insights',
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f0e9;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <div style="background: #ffffff; border: 2px solid #073742; border-radius: 8px; padding: 40px 30px;">
      <h1 style="color: #073742; font-size: 32px; margin: 0 0 20px 0;">Welcome to Trailhead!</h1>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Thanks for subscribing! I'm going to send you insights on fast website launches, SEO, and digital business—but first:
      </p>

      <div style="background-color: #c8e3da; border-left: 4px solid #1e5c5b; padding: 20px; margin: 30px 0; border-radius: 8px;">
        <p style="color: #073742; font-size: 18px; font-weight: bold; margin: 0 0 15px 0;">
          Quick question: Where are you right now?
        </p>
        <p style="color: #073742; font-size: 14px; margin: 0 0 20px 0;">
          (Click one so I can send you more relevant tips)
        </p>

        <table cellpadding="0" cellspacing="0" style="width: 100%; margin: 0;">
          <tr>
            <td style="padding: 8px 0;">
              <a href="https://trailheadmade.com/api/segment?type=no-website&email=${encodeURIComponent(email)}" style="display: block; background-color: #073742; color: #fcf6ed; padding: 14px 20px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px; text-align: center;">
                I don't have a website yet
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0;">
              <a href="https://trailheadmade.com/api/segment?type=has-website&email=${encodeURIComponent(email)}" style="display: block; background-color: #073742; color: #fcf6ed; padding: 14px 20px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px; text-align: center;">
                I have a website, want to improve it
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0;">
              <a href="https://trailheadmade.com/api/segment?type=social-only&email=${encodeURIComponent(email)}" style="display: block; background-color: #073742; color: #fcf6ed; padding: 14px 20px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px; text-align: center;">
                I'm social media only right now
              </a>
            </td>
          </tr>
        </table>
      </div>

      <p style="color: #073742; font-size: 16px; line-height: 1.6; margin: 30px 0 20px 0;">
        <strong>Here's what you'll get:</strong>
      </p>

      <ul style="color: #073742; font-size: 16px; line-height: 1.8; margin: 0 0 30px 20px;">
        <li>Actionable website tips (no fluff)</li>
        <li>Real business examples and case studies</li>
        <li>SEO strategies that actually work</li>
        <li>Behind-the-scenes from our 6-day launches</li>
      </ul>

      <p style="color: #073742; font-size: 14px; line-height: 1.6; margin: 30px 0 0 0; opacity: 0.8;">
        Talk soon,<br>
        <strong>The Trailhead Team</strong>
      </p>
    </div>

    <div style="text-align: center; padding: 30px 20px; color: #666; font-size: 14px;">
      <p style="margin: 0 0 10px 0;">
        <strong>Trailhead</strong><br>
        Calgary, Alberta<br>
        <a href="https://trailheadmade.com" style="color: #073742; text-decoration: none;">trailheadmade.com</a>
      </p>
    </div>
  </div>
</body>
</html>
      `,
    });

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter',
      data: contact
    });

  } catch (error: unknown) {
    console.error('Newsletter subscription error:', error);

    // Check if email already exists
    if (error instanceof Error && error.message.includes('already exists')) {
      return NextResponse.json(
        { success: false, error: 'This email is already subscribed' },
        { status: 400 }
      );
    }

    const errorMessage = error instanceof Error ? error.message : 'Unknown error';

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
