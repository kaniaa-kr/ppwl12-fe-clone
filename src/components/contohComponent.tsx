interface FeaturedChampionCardProps {
  id: string;
  name: string;
  role: string;
  region: string;
  regionIcon: string;
  image: string;
}

export default function FeaturedChampionCard({
  name,
  role,
  region,
  regionIcon,
  image,
}: FeaturedChampionCardProps) {
  return (
    <div className="champion-card group cursor-pointer">
      {/* Image container */}
      <div className="relative aspect-4/5 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0c] via-transparent to-transparent" />

        {/* Hover overlay */}
        <div className="card-overlay absolute inset-0 bg-[#c8aa6e]/10 opacity-0 transition-opacity duration-300" />
      </div>

      {/* Info card */}
      <div className="bg-[#0d0d0f] border border-[#1e1e21] p-4 md:p-5">
        {/* Top row - Region icon and name */}
        <div className="flex items-center gap-4 mb-3">
          {/* Region icon */}
          <div className="w-12 h-12 flex items-center justify-center">
            <img
              src={regionIcon}
              alt={region}
              className="w-10 h-10 object-contain opacity-80"
            />
          </div>

          {/* Vertical divider */}
          <div className="w-px h-10 bg-[#c8aa6e]/30" />

          {/* Name */}
          <h3 className="font-display text-2xl md:text-3xl text-[#f0e6d2] tracking-wider uppercase">
            {name}
          </h3>
        </div>

        {/* Bottom row - Role and Region */}
        <div className="flex border-t border-[#1e1e21] pt-3">
          <div className="flex-1 border-r border-[#1e1e21] pr-4">
            <p className="text-[#7a7a7a] text-[10px] tracking-[0.2em] uppercase mb-1">Role</p>
            <p className="text-[#c8aa6e] text-sm tracking-wider uppercase">{role}</p>
          </div>
          <div className="flex-1 pl-4">
            <p className="text-[#7a7a7a] text-[10px] tracking-[0.2em] uppercase mb-1">Region</p>
            <p className="text-[#c8aa6e] text-sm tracking-wider uppercase">{region}</p>
          </div>
        </div>

        {/* Explore button */}
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center justify-center gap-2 text-[#c8aa6e] text-xs tracking-wider py-2 border border-[#c8aa6e]/30 hover:bg-[#c8aa6e]/10 transition-colors">
            <span>Explore</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
