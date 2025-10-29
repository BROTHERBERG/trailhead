"use client";

import { useEffect, useState } from "react";

interface PriceDisplayProps {
  cadAmount: number;
  className?: string;
  showCurrency?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export default function PriceDisplay({
  cadAmount,
  className = "",
  showCurrency = true,
  size = 'large'
}: PriceDisplayProps) {
  const [displayPrice, setDisplayPrice] = useState({ amount: cadAmount, currency: 'CAD' });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const detectLocale = () => {
      try {
        // Check if user is in US (multiple methods for reliability)
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const isUSTimezone = timezone.includes('America') && !timezone.includes('Vancouver') && !timezone.includes('Toronto');

        // Also check navigator language
        const locale = navigator.language || 'en-CA';
        const isUSLocale = locale.startsWith('en-US');

        return isUSTimezone || isUSLocale;
      } catch {
        return false;
      }
    };

    const convertToUSD = async () => {
      const isUS = detectLocale();

      if (!isUS) {
        setDisplayPrice({ amount: cadAmount, currency: 'CAD' });
        setIsLoading(false);
        return;
      }

      try {
        // Use a reliable exchange rate API (frankfurter.app is free and doesn't require API key)
        const response = await fetch('https://api.frankfurter.app/latest?from=CAD&to=USD');
        const data = await response.json();
        const rate = data.rates.USD;

        // Convert and round to nearest dollar
        const usdAmount = Math.round(cadAmount * rate);

        setDisplayPrice({ amount: usdAmount, currency: 'USD' });
      } catch (error) {
        // Fallback to approximate conversion if API fails (0.73 CAD to USD ratio)
        const usdAmount = Math.round(cadAmount * 0.73);
        setDisplayPrice({ amount: usdAmount, currency: 'USD' });
      } finally {
        setIsLoading(false);
      }
    };

    convertToUSD();
  }, [cadAmount]);

  if (isLoading) {
    // Show CAD by default while loading
    return (
      <span className={className}>
        ${cadAmount}{showCurrency && <span className="opacity-60"> CAD</span>}
      </span>
    );
  }

  return (
    <span className={className}>
      ${displayPrice.amount}{showCurrency && <span className="opacity-60"> {displayPrice.currency}</span>}
    </span>
  );
}
