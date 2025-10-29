"use client";

export default function LaunchBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-[#C8E4DA] text-[#073742] py-3 px-4 text-center z-[60]">
      <p className="font-riposte text-sm md:text-base">
        <span className="font-bold">🔥 Launch Special: $750 USD</span>
        {" "}(regularly $950) - Only taking our first 10 North American clients at this rate
      </p>
    </div>
  );
}
