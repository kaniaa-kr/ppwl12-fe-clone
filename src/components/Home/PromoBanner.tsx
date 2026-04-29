export function PromoBanner() {
  return (
    <section className="bg-black py-4 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-[#192247] via-[#210e17] to-[#192247] rounded-xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Popcorn Icon */}
          <div className="flex items-center gap-4 flex-1">
            <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-full bg-gradient-to-br from-pink-500/30 to-red-600/30 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-pink-400" fill="currentColor">
                <path d="M7 22H4.5c-.83 0-1.54-.67-1.49-1.5l.9-11c.03-.36.35-.65.71-.65h.93c.54-1.18 1.79-2 3.2-2h.5c.09-.46.23-.89.42-1.28C10.24 4.48 11.14 4 12.1 4h-.01c.95 0 1.85.48 2.42 1.57.19.39.33.82.42 1.28h.5c1.41 0 2.66.82 3.2 2h.93c.36 0 .68.29.71.65l.9 11c.04.83-.66 1.5-1.49 1.5H7z" />
              </svg>
            </div>

            <div className="text-left">
              <h3 className="text-white font-bold text-lg md:text-xl">
                The Netflix you love for just IDR 54,000.
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                Get our most affordable, ad-supported plan.
              </p>
            </div>
          </div>

          {/* Learn More Button */}
          <button
            type="button"
            className="px-6 py-2.5 border border-white/40 rounded text-white font-medium hover:bg-white/10 transition-colors whitespace-nowrap"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
