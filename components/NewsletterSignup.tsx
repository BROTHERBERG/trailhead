"use client";

import { useState, FormEvent } from "react";

type NewsletterSignupProps = {
  variant?: "sidebar" | "inline";
};

export default function NewsletterSignup({ variant = "sidebar" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setMessage("Thanks for subscribing! Check your email for confirmation.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Failed to subscribe. Please try again.");
      console.error("Newsletter subscription error:", error);
    }
  };

  if (variant === "sidebar") {
    return (
      <div className="bg-[#c8e3da]/30 border-2 border-[#073742]/10 rounded-2xl p-6">
        <h3 className="font-jetbrains text-sm uppercase text-[#073742] tracking-wider mb-3">
          Weekly Insights
        </h3>
        <p className="font-riposte text-sm text-[#073742]/80 mb-4">
          Tips on fast launches, SEO, and running a digital business. One email per week.
        </p>

        {status === "success" ? (
          <div className="bg-accent/20 border border-accent rounded-lg p-4 text-center">
            <p className="font-riposte text-sm text-[#073742]">{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              disabled={status === "loading"}
              className="w-full px-4 py-2 rounded-lg border border-[#073742]/20 font-riposte text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-[#073742] text-cream font-riposte font-bold px-6 py-3 rounded-full text-sm tracking-wide transition-all duration-200 uppercase hover:bg-[#073742]/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </button>
            {status === "error" && (
              <p className="text-xs text-red-600 font-riposte">{message}</p>
            )}
          </form>
        )}
      </div>
    );
  }

  // Inline variant (for footer or other sections)
  return (
    <div className="bg-[#073742] rounded-2xl p-6">
      <h3 className="font-axel text-2xl font-bold text-cream uppercase mb-3">
        Weekly Insights
      </h3>
      <p className="font-riposte text-cream/80 text-sm mb-6">
        Tips on fast launches, SEO, and running a digital business. One email per week.
      </p>

      {status === "success" ? (
        <div className="bg-accent/20 border border-accent rounded-lg p-4">
          <p className="font-riposte text-sm text-cream">{message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            disabled={status === "loading"}
            className="w-full px-4 py-3 rounded-full font-riposte text-sm focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-accent text-[#073742] font-riposte font-bold px-6 py-3 rounded-full text-sm tracking-wide transition-all duration-200 uppercase hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
          {status === "error" && (
            <p className="text-xs text-red-300 font-riposte">{message}</p>
          )}
        </form>
      )}
    </div>
  );
}
