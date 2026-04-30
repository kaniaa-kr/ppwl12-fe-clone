import { useRef, useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import pangku from "../../assets/pangku.jpg";
import mertua from "../../assets/mertua_ngeri_kali.jpg";
import pesugihan from "../../assets/pesugihan_sate_gagak.jpg";
import luka from "../../assets/luka_makan_cinta.jpg";
import onePiece from "../../assets/one_piece.jpg";
import thrash from "../../assets/thrash.jpg";
import phantom from "../../assets/phantom_lawyer.jpg";
import wishes from "../../assets/if_wishes.jpg";

const trendingShows = [
  {
    id: 1,
    image: pangku,                 
  },
  {
    id: 2,
    image: mertua,             
  },
  {
    id: 3,
    image: pesugihan,
  },
  {
    id: 4,
    image: luka,
  },
  {
    id: 5,
    image: onePiece,
  },
  {
    id: 6,
    image: thrash,
  },
  {
    id: 7,
    image: phantom,
  },
  {
    id: 8,
    image: wishes,
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
                    backgroundImage: `url(${show.image})`,
                    
                  }}
                >
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