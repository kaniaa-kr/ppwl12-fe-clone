import type { ReactNode } from "react";

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

const TvSvg = () => (
  <svg viewBox="0 0 100 80" className="w-full h-full" fill="none">
    {/* Stand */}
    <path d="M40 70 L60 70 L52 60 L48 60 Z" fill="#7f1d1d" opacity="0.8" />
    <rect x="35" y="68" width="30" height="2" fill="#ef4444" />
    {/* Monitor */}
    <rect
      x="10"
      y="10"
      width="80"
      height="52"
      rx="4"
      fill="#1e1b4b"
      stroke="#db2777"
      strokeWidth="1"
    />
    {/* Screen */}
    <rect x="12" y="12" width="76" height="48" rx="2" fill="#0f172a" />
    <rect x="12" y="12" width="76" height="48" rx="2" fill="url(#tvGlow)" />
    <defs>
      <radialGradient id="tvGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ec4899" stopOpacity="0.7" />
        <stop offset="60%" stopColor="#4c1d95" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

const DownloadSvg = () => (
  <svg viewBox="0 0 100 80" className="w-full h-full" fill="none">
    {/* Outer glow */}
    <circle
      cx="50"
      cy="40"
      r="28"
      fill="#ec4899"
      opacity="0.3"
      filter="blur(6px)"
    />
    {/* Circle button */}
    <circle cx="50" cy="40" r="24" fill="url(#dlGlow)" />
    <circle cx="50" cy="40" r="22" fill="url(#dlBorder)" />
    {/* Arrow */}
    <path
      d="M50 25 V45 M40 37 L50 48 L60 37"
      stroke="#fdf2f8"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M38 55 H62"
      stroke="#fbcfe8"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <defs>
      <linearGradient id="dlGlow" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#fbcfe8" />
        <stop offset="40%" stopColor="#f43f5e" />
        <stop offset="100%" stopColor="#4c0519" />
      </linearGradient>
      <linearGradient id="dlBorder" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#fbcfe8" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#db2777" stopOpacity="0.1" />
      </linearGradient>
    </defs>
  </svg>
);

const TelescopeSvg = () => (
  <svg viewBox="0 0 100 80" className="w-full h-full" fill="none">
    {/* Stars */}
    <text x="65" y="15" fontSize="12" fill="#f472b6" transform="rotate(15)">
      ★
    </text>
    <text x="50" y="25" fontSize="8" fill="#f43f5e" transform="rotate(-10)">
      ✦
    </text>
    <text x="80" y="30" fontSize="10" fill="#e11d48">
      ✦
    </text>
    <circle cx="70" cy="40" r="1.5" fill="#fbcfe8" />
    <circle cx="45" cy="15" r="1" fill="#fbcfe8" />
    {/* Main body rotated */}
    <g transform="rotate(-35 50 50)">
      {/* Base stand parts */}
      <path d="M40 60 L35 70 L45 70 Z" fill="#9f1239" />
      {/* Tube segments */}
      <rect x="20" y="40" width="45" height="14" rx="2" fill="url(#teleBody)" />
      <rect x="65" y="38" width="8" height="18" rx="1" fill="#be185d" />
      <rect x="73" y="35" width="5" height="24" rx="1" fill="#fbcfe8" />
      <rect x="15" y="42" width="5" height="10" rx="1" fill="#701a75" />
    </g>
    <defs>
      <linearGradient id="teleBody" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#701a75" />
        <stop offset="50%" stopColor="#e11d48" />
        <stop offset="100%" stopColor="#9d174d" />
      </linearGradient>
    </defs>
  </svg>
);

const KidsSvg = () => (
  <svg viewBox="0 0 100 80" className="w-full h-full" fill="none">
    {/* Left Face Light Pink */}
    <rect x="20" y="20" width="34" height="34" rx="6" fill="#fbcfe8" />
    <circle cx="30" cy="32" r="2" fill="#831843" />
    <circle cx="44" cy="32" r="2" fill="#831843" />
    <path
      d="M30 42 Q37 45 44 42"
      stroke="#831843"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />

    {/* Right Face Red/Purple Gradient */}
    <rect x="42" y="38" width="38" height="38" rx="6" fill="url(#kidsGlow)" />
    <circle cx="53" cy="50" r="2.5" fill="#fff" />
    <circle cx="69" cy="50" r="2.5" fill="#fff" />
    <path
      d="M53 62 Q61 66 69 62"
      stroke="#fff"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <defs>
      <linearGradient id="kidsGlow" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ef4444" />
        <stop offset="100%" stopColor="#581c87" />
      </linearGradient>
    </defs>
  </svg>
);

const features: FeatureCard[] = [
  {
    id: 1,
    title: "Enjoy on your TV",
    description:
      "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    icon: <TvSvg />,
  },
  {
    id: 2,
    title: "Download your shows to watch offline",
    description:
      "Save your favorites easily and always have something to watch.",
    icon: <DownloadSvg />,
  },
  {
    id: 3,
    title: "Watch everywhere",
    description:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    icon: <TelescopeSvg />,
  },
  {
    id: 4,
    title: "Create profiles for kids",
    description:
      "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
    icon: <KidsSvg />,
  },
];

export function FeaturesGrid() {
  return (
    <section className="bg-black py-10 md:py-14 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-xl md:text-2xl font-bold mb-6 md:mb-8">
          More Reasons to Join
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-gradient-to-br from-[#192247] to-[#120a16] rounded-2xl p-5 md:p-6 lg:p-7
                        min-h-[200px] md:min-h-[280px] lg:min-h-[200px] flex flex-col justify-start relative
                        overflow-hidden"
            >
              <div>
                <h3 className="text-white text-lg md:text-xl font-bold mb-3 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Device image floating at bottom right */}
              <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-16 h-16 md:w-[72px] md:h-[72px]">
                {feature.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
