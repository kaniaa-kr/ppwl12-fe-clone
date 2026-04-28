import { useState, useEffect, useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Movie {
  id: number;
  image: string;
  match: number;
  type: string;
  genres: string;
  isHD: boolean;
}

interface SliderSection {
  title: string;
  movies: Movie[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────
  <section className="trending-now">
          <div className="container">
            <h2 className="section-header">Trending Now</h2>
            <div className="movie-container">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <img key={i} src={`/img/netflix-movie-${i}.jpg`} alt="movie" className="netflix-movie" />
              ))}
            </div>
          </div>
        </section>

const TRENDING_MOVIES: Movie[] = [
  { id: 1, image: "./images/trending/img6.jpeg",  match: 97, type: "Limited Series", genres: "Provocative • Psychological • Thriller", isHD: true },
  { id: 2, image: "./images/trending/img2.jpeg",  match: 95, type: "Movie",           genres: "Action • Adventure • Drama",            isHD: true },
  { id: 3, image: "./images/trending/img3.webp",  match: 92, type: "TV Show",         genres: "Comedy • Romance",                     isHD: true },
  { id: 4, image: "./images/trending/img4.jpeg",  match: 89, type: "Documentary",     genres: "True Crime • Mystery",                 isHD: true },
  { id: 5, image: "./images/trending/img1.webp",  match: 98, type: "Limited Series",  genres: "Sci-Fi • Thriller",                    isHD: true },
  { id: 6, image: "./images/trending/img2.jpeg",  match: 91, type: "Movie",           genres: "Horror • Suspense",                    isHD: true },
];

const HOLLYWOOD_MOVIES: Movie[] = [
  { id: 7,  image: "./images/trending/img4.jpeg",  match: 96, type: "Movie", genres: "Action • Blockbuster",  isHD: true },
  { id: 8,  image: "./images/trending/img1.webp",  match: 94, type: "Movie", genres: "Drama • Oscar-Winning", isHD: true },
  { id: 9,  image: "./images/trending/img3.webp",  match: 88, type: "Movie", genres: "Comedy • Family",       isHD: true },
  { id: 10, image: "./images/trending/img6.jpeg",  match: 97, type: "Movie", genres: "Thriller • Suspense",   isHD: true },
  { id: 11, image: "./images/trending/img2.jpeg",  match: 93, type: "Movie", genres: "Romance • Drama",       isHD: true },
  { id: 12, image: "./images/trending/img4.jpeg",  match: 90, type: "Movie", genres: "Animation • Family",    isHD: true },
];

const BOLLYWOOD_MOVIES: Movie[] = [
  { id: 13, image: "./images/trending/img2.jpeg",  match: 95, type: "Movie",           genres: "Musical • Romance",  isHD: true },
  { id: 14, image: "./images/trending/img6.jpeg",  match: 97, type: "Movie",           genres: "Drama • Family",     isHD: true },
  { id: 15, image: "./images/trending/img1.webp",  match: 91, type: "Movie",           genres: "Action • Thriller",  isHD: true },
  { id: 16, image: "./images/trending/img3.webp",  match: 89, type: "Movie",           genres: "Comedy • Drama",     isHD: true },
  { id: 17, image: "./images/trending/img4.jpeg",  match: 93, type: "Movie",           genres: "Romance • Musical",  isHD: true },
  { id: 18, image: "./images/trending/img2.jpeg",  match: 96, type: "Limited Series",  genres: "Crime • Drama",      isHD: true },
];

const SECTIONS: SliderSection[] = [
  { title: "Trending Now", movies: TRENDING_MOVIES },
  { title: "Hollywood",    movies: HOLLYWOOD_MOVIES },
  { title: "Bollywood",    movies: BOLLYWOOD_MOVIES },
];

const NAV_LINKS = ["Home", "TV Shows", "Movies", "New & Popular", "My List"];

const FOOTER_LINKS = [
  ["Audio and Subtitle",  "Media Center",       "Privacy",      "Contact Us"   ],
  ["Audio Description",   "Investor Relations", "Terms of Use", "Legal Notices"],
  ["Help Center",         "Jobs"                                                ],
  ["Gift Cards",          "Subscription"                                        ],
];

// ─── SVG Icons ────────────────────────────────────────────────────────────────

const IconPlay     = () => <svg viewBox="0 0 24 24" fill="currentColor"       width="20" height="20"><path d="M8 5v14l11-7z"/></svg>;
const IconSearch   = () => <svg viewBox="0 0 24 24" fill="currentColor"       width="20" height="20"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>;
const IconBell     = () => <svg viewBox="0 0 24 24" fill="currentColor"       width="20" height="20"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>;
const IconInfo     = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8"  x2="12.01" y2="8"/></svg>;
const IconPlus     = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8"  x2="12" y2="16"/><line x1="8"  y1="12" x2="16" y2="12"/></svg>;
const IconDownload = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><circle cx="12" cy="12" r="10"/><polyline points="8,12 12,16 16,12"/><line x1="12" y1="8" x2="12" y2="16"/></svg>;
const IconChevL    = () => <svg viewBox="0 0 24 24" fill="currentColor"       width="20" height="20"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>;
const IconChevR    = () => <svg viewBox="0 0 24 24" fill="currentColor"       width="20" height="20"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>;

// ─── MovieCard ────────────────────────────────────────────────────────────────

function MovieCard({ movie }: { movie: Movie }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`movie-card${hovered ? " hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="card-image-wrapper">
        <img src={movie.image} alt="Movie thumbnail" className="card-thumbnail" />
        {hovered && <div className="card-overlay-gradient" />}
      </div>

      {hovered && (
        <div className="card-info">
          <div className="card-actions">
            <div className="actions-left">
              <button className="card-play-btn" title="Play">
                <IconPlay />
              </button>
              <button className="card-icon-btn" title="Add to list">
                <IconPlus />
              </button>
            </div>
            <button className="card-icon-btn" title="Download">
              <IconDownload />
            </button>
          </div>

          <div className="card-meta">
            <span className="match-pct">{movie.match}% Match</span>
            <span className="meta-tag">{movie.type}</span>
            {movie.isHD && <span className="hd-badge">HD</span>}
          </div>

          <p className="card-genres">{movie.genres}</p>
        </div>
      )}
    </div>
  );
}

// ─── MovieRow ─────────────────────────────────────────────────────────────────

function MovieRow({ section }: { section: SliderSection }) {
  const [slide, setSlide] = useState(0);
  const viewportRef       = useRef<HTMLDivElement>(null);
  const VISIBLE           = 6;
  const PAGES             = Math.ceil(section.movies.length / VISIBLE);

  const scrollToSlide = (index: number) => {
    if (!viewportRef.current) return;
    const cardW = viewportRef.current.offsetWidth / VISIBLE;
    viewportRef.current.scrollTo({ left: cardW * VISIBLE * index, behavior: "smooth" });
    setSlide(index);
  };

  return (
    <section className="movie-row">
      <div className="row-header">
        <h2 className="row-title">{section.title}</h2>
        <div className="dot-indicators">
          {Array.from({ length: PAGES }).map((_, i) => (
            <button
              key={i}
              className={`dot${i === slide ? " active" : ""}`}
              onClick={() => scrollToSlide(i)}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="row-slider-wrapper">
        <button
          className={`slider-btn prev${slide === 0 ? " hidden" : ""}`}
          onClick={() => scrollToSlide(Math.max(0, slide - 1))}
          aria-label="Previous"
        >
          <IconChevL />
        </button>

        <div className="cards-viewport" ref={viewportRef}>
          <div className="cards-track">
            {section.movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>

        <button
          className={`slider-btn next${slide === PAGES - 1 ? " hidden" : ""}`}
          onClick={() => scrollToSlide(Math.min(PAGES - 1, slide + 1))}
          aria-label="Next"
        >
          <IconChevR />
        </button>
      </div>
    </section>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`netflix-navbar${scrolled ? " scrolled" : ""}`}>
      <div className="netflix-row">
        {/* Left side */}
        <div className="left">
          <a href="#" className="navbar-brand">
            <img src="./images/logo.png" alt="Netflix" />
          </a>

          {/* Desktop nav — hidden on mobile via CSS */}
          <div className="netflix-nav">
            {NAV_LINKS.map((link) => (
              <button key={link}>{link}</button>
            ))}
          </div>

          {/* Mobile browse dropdown — shown on mobile via CSS */}
          <div className="netflix-dropdown-box">
            <button
              className="netflix-dropdown"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              Browse ▾
            </button>
            {menuOpen && (
              <ul className="dropdown-menu">
                {NAV_LINKS.map((link) => (
                  <li key={link}>
                    <a href="#" className="dropdown-item">{link}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Right side */}
        <div className="right">
          <button className="nav-icon" aria-label="Search">
            <IconSearch />
          </button>
          <button className="nav-icon" aria-label="Notifications">
            <IconBell />
          </button>
          <div className="netflix-profile" />
        </div>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="netflix-home-video money-heist-hero">
      <div className="top" />
      <div className="bottom" />

      <div className="content">
        <section className="left">
          <h1 className="money-title">
            MONEY <span>HEIST</span>
          </h1>

          <p className="money-subtitle">PART 4</p>

          <div className="hero-buttons">
            <button className="btn-play">
              <IconPlay /> Play
            </button>
            <button className="btn-info">
              <IconInfo /> More Info
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          {FOOTER_LINKS.map((col, i) => (
            <ul key={i} className="footer-col">
              {col.map((link) => (
                <li key={link}>
                  <a href="#" className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <p className="copy-right">© Netflix, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

// ─── Page Export ──────────────────────────────────────────────────────────────

export default function NetflixHome() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="slider-box">
        {SECTIONS.map((section) => (
          <MovieRow key={section.title} section={section} />
        ))}
      </div>
      <Footer />
    </>
  );
}