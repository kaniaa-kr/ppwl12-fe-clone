import { useRef, useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const trendingShows = [
  {
    id: 1,
    title: 'Agak Laen',
    bg: 'linear-gradient(135deg, #111 0%, #333 100%)',
    hasNetflixBadge: false,
  },
  {
    id: 2,
    title: 'Mertua Ngeri Kali',
    bg: 'linear-gradient(135deg, #1a3d00 0%, #3a6600 100%)',
    hasNetflixBadge: true,
  },
  {
    id: 3,
    title: 'Pesugihan Nyi Gagak',
    bg: 'linear-gradient(135deg, #001a3d 0%, #003366 100%)',
    hasNetflixBadge: false,
  },
  {
    id: 4,
    title: 'Luka Makan Cinta',
    bg: 'linear-gradient(135deg, #1a0000 0%, #3d0011 100%)',
    hasNetflixBadge: true,
  },
  {
    id: 5,
    title: 'One Piece',
    bg: 'linear-gradient(135deg, #2d1a00 0%, #5a3300 100%)',
    hasNetflixBadge: true,
  },
  {
    id: 6,
    title: 'Thrash',
    bg: 'linear-gradient(135deg, #1a0000 0%, #660000 100%)',
    hasNetflixBadge: true,
  },
  {
    id: 7,
    title: 'Show 7',
    bg: 'linear-gradient(135deg, #00001a 0%, #000066 100%)',
    hasNetflixBadge: true,
  },
  {
    id: 8,
    title: 'Show 8',
    bg: 'linear-gradient(135deg, #1a001a 0%, #3d003d 100%)',
    hasNetflixBadge: false,
  },
];

export function TrendingSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const handleScroll = () => {
    if (scrollRef.current) {
      setShowLeftArrow(scrollRef.current.scrollLeft > 0);
    }
  };

  useEffect(() => {
    handleScroll();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-black py-8 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto relative group/section">
        <h2 className="text-white font-bold text-xl sm:text-2xl mb-4">
          Trending Now
        </h2>

        <div className="relative">
          {/* Scroll container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-11 overflow-x-auto py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', paddingLeft: '1rem', paddingBottom: '1rem' }}
          >
            {trendingShows.map((show) => (
              <div
                key={show.id}
                className="flex-shrink-0 relative group cursor-pointer transition-all duration-300 hover:scale-[1.05]"
                style={{ width: '130px' }}
              >
                {/* Poster */}
                <div
                  className="relative rounded overflow-hidden shadow-lg"
                  style={{
                    height: '180px',
                    background: show.bg,
                  }}
                >
                  {/* Title overlay since we don't have images */}
                  <div className="absolute inset-0 flex items-center justify-center p-2 text-center text-white/80 font-bold text-sm z-0">
                    {show.title}
                  </div>

                  {/* Netflix badge */}
                  {show.hasNetflixBadge && (
                    <div className="absolute top-2 left-2 z-20 flex items-center gap-0.5">
                      <span
                        className="text-[#e50914] font-black text-base leading-none"
                        style={{ fontFamily: 'Arial Black, sans-serif' }}
                      >
                        N
                      </span>
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-200 z-30" />
                </div>

                {/* Big number */}
                <div
                  className="absolute bottom-6 left-0 font-black leading-none select-none z-40 pointer-events-none"
                  style={{
                    fontSize: '80px',
                    lineHeight: '0.85',
                    color: 'black',
                    WebkitTextStroke: '2px #b3b3b3',
                    fontFamily: 'Arial Black, Impact, sans-serif',
                    marginLeft: '-12px',
                  }}
                >
                  {show.id}
                </div>
              </div>
            ))}
          </div>

          {/* Left arrow */}
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-0 bottom-4 w-12 flex items-center justify-center text-white bg-black/60 hover:bg-black/80 transition-opacity duration-300 z-20 rounded-l opacity-0 group-hover/section:opacity-100"
              aria-label="Scroll left"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* Right arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-0 bottom-4 w-12 flex items-center justify-center text-white bg-black/60 hover:bg-black/80 transition-opacity duration-300 z-20 rounded-r opacity-0 group-hover/section:opacity-100"
            aria-label="Scroll right"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
}