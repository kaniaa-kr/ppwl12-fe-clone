import bgNetflix from "/src/assets/bg_netflix.jpg";
import curveSvg from "/src/assets/curve.svg";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgNetflix})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/90" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[106.5vh] text-center px-4 pt-32 pb-16">
        <h1 className="text-white font-black text-3xl sm:text-4xl md:text-[40px] leading-[1.3] max-w-2xl">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="text-white text-sm md:text-lg font-bold mt-4">
          Starts at IDR 54,000. Cancel anytime.
        </p>
        <p className="text-white text-sm md:text-sm mt-6 max-w-xl">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form className="mt-4 flex flex-col sm:flex-row gap-2 w-full max-w-[450px] px-4">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 bg-black/60 border border-white/40 text-white placeholder-white/70 rounded px-4 py-4 text-base focus:outline-none focus:border-white"
          />
          <button
            type="button"
            className="bg-[#e50914] hover:bg-[#f40612] text-white font-medium text-lg md:text-xl px-6 py-4 rounded flex items-center justify-center gap-2 whitespace-nowrap"
          >
            Get Started <span className="text-2xl">›</span>
          </button>
        </form>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <img
          src={curveSvg}
          alt=""
          style={{
            display: "block",
            width: "100%",
            height: "65px",
            objectFit: "fill",
            marginBottom: "-1px",
          }}
        />
      </div>
    </section>
  );
}
