"use client";

import { useState } from "react";
import { trackCheckoutStart } from "@/lib/analytics";

interface CheckoutButtonProps {
  priceId: string;
  productName: string;
  className?: string;
  children?: React.ReactNode;
}

export default function CheckoutButton({
  priceId,
  productName,
  className = "",
  children,
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);

    // Track checkout start
    trackCheckoutStart(priceId, productName);

    try {
      // Create checkout session
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId,
          successUrl: `${window.location.origin}/success?product=${encodeURIComponent(productName)}`,
          cancelUrl: `${window.location.origin}/#pricing`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create checkout session");
      }

      // Redirect to Stripe Checkout URL
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL returned");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      setError(err instanceof Error ? err.message : "Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={handleCheckout}
        disabled={loading || !priceId || priceId.includes("xxxxxxxxxxxxx")}
        className={`
          relative overflow-hidden bg-accent text-dark font-riposte
          px-8 py-4 rounded-full text-base tracking-tight
          transition-all duration-200 uppercase group
          disabled:opacity-50 disabled:cursor-not-allowed
          hover:bg-[#b5d4c8] hover:scale-105
          active:scale-95
          ${className}
        `}
        aria-label={`Purchase ${productName}`}
      >
        <span className="relative z-10">
          {loading ? "Loading..." : children || "Get Started"}
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-[#b5d4c8] to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      </button>

      {error && (
        <p className="text-sm text-red-400 max-w-xs text-center" role="alert">
          {error}
        </p>
      )}

      {priceId.includes("xxxxxxxxxxxxx") && (
        <p className="text-xs text-cream/60 max-w-xs text-center">
          Price not configured - check Stripe dashboard
        </p>
      )}
    </div>
  );
}
