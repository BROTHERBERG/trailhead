export default function Loading() {
  return (
    <div className="min-h-screen bg-[#f5f0e9] flex items-center justify-center">
      <div className="text-center">
        {/* Animated spinner */}
        <div className="inline-block w-16 h-16 border-4 border-[#073742]/20 border-t-[#073742] rounded-full animate-spin mb-4"></div>

        {/* Loading text */}
        <p className="font-riposte text-[#073742] text-lg">
          Loading...
        </p>
      </div>
    </div>
  );
}
