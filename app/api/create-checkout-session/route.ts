import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(request: Request) {
  // Initialize Stripe at runtime
  const apiKey = process.env.STRIPE_SECRET_KEY;

  if (!apiKey) {
    console.error('STRIPE_SECRET_KEY not configured');
    return NextResponse.json(
      { error: 'Payment service not configured' },
      { status: 500 }
    );
  }

  const stripe = new Stripe(apiKey, {
    apiVersion: '2025-09-30.clover',
  });

  try {
    const body = await request.json();
    const { priceId, successUrl, cancelUrl } = body;

    if (!priceId) {
      return NextResponse.json(
        { error: 'Missing required field: priceId' },
        { status: 400 }
      );
    }

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: successUrl || `${process.env.NEXT_PUBLIC_SITE_URL || 'https://trailheadmade.com'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${process.env.NEXT_PUBLIC_SITE_URL || 'https://trailheadmade.com'}/#pricing`,
      billing_address_collection: 'required',
      allow_promotion_codes: true, // Enable promo codes
      customer_creation: 'always', // Create customer in Stripe
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
