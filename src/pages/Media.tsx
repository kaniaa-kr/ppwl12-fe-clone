import { useState } from "react";
import { Search, Menu, ChevronDown, Film, Tv, FileText, Play, Mic, Gamepad2, X } from "lucide-react";

// Content data
const featuredContent = [
  { id: 1, title: "Fury vs Makhmudov", image: "https://ext.same-assets.com/2862108679/751765164.jpeg", link: "#" },
  { id: 2, title: "Thrash", image: "https://ext.same-assets.com/2862108679/222679081.jpeg", link: "#" },
  { id: 3, title: "Beef", image: "https://ext.same-assets.com/2862108679/2545556021.jpeg", link: "#" },
  { id: 4, title: "Cave", image: "https://ext.same-assets.com/2862108679/3560079199.jpeg", link: "#" },
];

const categories = [
  { id: "film", label: "Film", icon: Film },
  { id: "series", label: "Series", icon: Tv },
  { id: "documentary", label: "Documentary", icon: FileText },
  { id: "reality", label: "Reality", icon: Play },
  { id: "standup", label: "Stand-Up Comedy", icon: Mic },
  { id: "game", label: "Game", icon: Gamepad2 },
];

const upcomingTitles = [
  { id: 1, title: "Eat Pray Bark", date: "April 1, 2026", image: "https://ext.same-assets.com/2862108679/3154579283.jpeg" },
  { id: 2, title: "Love on the Spectrum", date: "April 1, 2026", image: "https://ext.same-assets.com/2862108679/322132426.jpeg" },
  { id: 3, title: "Sins of Kujo", date: "April 2, 2026", image: "https://ext.same-assets.com/2862108679/1993038278.jpeg" },
  { id: 4, title: "Agent from Above", date: "April 2, 2026", image: "https://ext.same-assets.com/2862108679/32866069.jpeg" },
  { id: 5, title: "XO, Kitty", date: "April 2, 2026", image: "https://ext.same-assets.com/2862108679/1930425254.jpeg" },
  { id: 6, title: "The Ramparts of Ice", date: "April 2, 2026", image: "https://ext.same-assets.com/2862108679/1338077435.jpeg" },
  { id: 7, title: "Gangs of Galicia", date: "April 3, 2026", image: "https://ext.same-assets.com/2862108679/1909496203.jpeg" },
  { id: 8, title: "Bloodhounds", date: "April 3, 2026", image: "https://ext.same-assets.com/2862108679/2796548984.jpeg" },
  { id: 9, title: "High Tides", date: "April 3, 2026", image: "https://ext.same-assets.com/2862108679/2570162012.jpeg" },
  { id: 10, title: "Untold: Chess Mates", date: "April 7, 2026", image: "https://ext.same-assets.com/2862108679/3835355915.jpeg" },
  { id: 11, title: "The Jackbox Party Essentials", date: "April 7, 2026", image: "https://ext.same-assets.com/2862108679/4051700569.jpeg" },
  { id: 12, title: "Trust Me: The False Prophet", date: "April 8, 2026", image: "https://ext.same-assets.com/2862108679/3497203224.jpeg" },
  { id: 13, title: "Bandi", date: "April 9, 2026", image: "https://ext.same-assets.com/2862108679/3421491128.jpeg" },
  { id: 14, title: "Big Mistakes", date: "April 9, 2026", image: "https://ext.same-assets.com/2862108679/3892587682.jpeg" },
  { id: 15, title: "Thrash", date: "April 10, 2026", image: "https://ext.same-assets.com/2862108679/222679081.jpeg" },
  { id: 16, title: "Temptation Island", date: "April 10, 2026", image: "https://ext.same-assets.com/2862108679/3886550987.jpeg" },
  { id: 17, title: "Turn of the Tide", date: "April 10, 2026", image: "https://ext.same-assets.com/2862108679/2704760760.jpeg" },
  { id: 18, title: "Tyson Fury vs. Arslanbek Makhmudov", date: "April 12, 2026", image: "https://ext.same-assets.com/2862108679/751765164.jpeg" },
  { id: 19, title: "At Home With The Furys", date: "April 12, 2026", image: "https://ext.same-assets.com/2862108679/1121778995.jpeg" },
  { id: 20, title: "Noah Kahan: Out of Body", date: "April 13, 2026", image: "https://ext.same-assets.com/2862108679/4010341465.jpeg" },
];

const latestNews = [
  {
    id: 1,
    region: "Japan, Global",
    title: "'Soul Mate' Main Trailer Shows a Decade Guided by Fate",
    image: "https://ext.same-assets.com/2862108679/1113852331.webp",
    link: "#",
  },
  {
    id: 2,
    region: "Argentina, Global",
    title: "Netflix announces El sobrino, the new film by Damian Szifron starring Leonardo Sbaraglia",
    image: "https://ext.same-assets.com/2862108679/3131543598.jpeg",
    link: "#",
  },
  {
    id: 3,
    region: "United States",
    title: "'Running Point' Season 2 Shoots and Scores With All-Star Brand Partners",
    image: "https://ext.same-assets.com/2862108679/2609405785.jpeg",
    link: "#",
  },
];

export default function MediaPage() {
  const [selectedMonth, setSelectedMonth] = useState("April");
  const [showAllTitles, setShowAllTitles] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const displayedTitles = showAllTitles ? upcomingTitles : upcomingTitles.slice(0, 12);

  return (
    <main className="min-h-screen bg-[#141414]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#141414]/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src="https://ext.same-assets.com/2862108679/1633257960.svg"
                alt="Netflix"
                className="h-6 sm:h-7"
              />
              <span className="text-white text-sm sm:text-base font-light tracking-wide">
                Media Center
              </span>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <Search className="w-5 h-5 text-white" />
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <Menu className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {searchOpen && (
            <div className="pb-4">
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for Netflix titles and news"
                  className="w-full bg-white/10 border border-white/20 rounded-full py-3 pl-12 pr-10 text-white placeholder:text-gray-400 focus:outline-none focus:border-white/40 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 pt-20">
          <div className="p-6 space-y-6">
            <nav className="space-y-4">
              <a href="#" className="block text-xl text-white hover:text-gray-300 transition-colors">Home</a>
              <a href="#" className="block text-xl text-white hover:text-gray-300 transition-colors">Newsroom</a>
              <a href="#" className="block text-xl text-white hover:text-gray-300 transition-colors">Company Assets</a>
              <a href="#" className="block text-xl text-white hover:text-gray-300 transition-colors">Contact Us</a>
            </nav>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-4 right-4 p-2 text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-16">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
              Discover stories and experiences to share with the world.
            </h1>
            <div className="relative max-w-xl mx-auto mb-12">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for Netflix titles and news"
                className="w-full bg-white/10 border border-white/20 rounded-full py-4 pl-12 pr-6 text-white placeholder:text-gray-400 focus:outline-none focus:border-white/40 transition-colors text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Featured Content Carousel */}
          <div className="max-w-6xl mx-auto">
            <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 px-4 sm:px-0">
              {featuredContent.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  className="flex-shrink-0 w-52 sm:w-60 md:w-72 content-card rounded-lg overflow-hidden group"
                >
                  <div className="relative aspect-[3/4]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Filter Section */}
      <section className="bg-[#1a1a1a] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-white text-lg sm:text-xl">
              I'm interested in covering titles releasing in
            </span>
            <button
              type="button"
              className="inline-flex items-center gap-2 text-white text-lg sm:text-xl font-medium hover:text-gray-300 transition-colors"
            >
              {selectedMonth}
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  type="button"
                  className="category-pill flex items-center gap-2 text-white"
                >
                  <IconComponent className="w-4 h-4" />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <div className="h-px bg-gray-700 max-w-7xl mx-auto" />

      {/* Content Grid */}
      <section className="py-12 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {displayedTitles.map((title) => (
              <a key={title.id} href="#" className="content-card group">
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-3">
                  <img
                    src={title.image}
                    alt={title.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
                <p className="text-gray-400 text-sm">{title.date}</p>
              </a>
            ))}
          </div>

          {!showAllTitles && (
            <div className="text-center mt-10">
              <button
                type="button"
                onClick={() => setShowAllTitles(true)}
                className="px-6 py-3 bg-transparent border border-white/30 text-white rounded-md hover:bg-white/10 transition-colors text-sm font-medium"
              >
                Show {upcomingTitles.length - 12} more in {selectedMonth}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">Latest news</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestNews.map((news) => (
              <a
                key={news.id}
                href={news.link}
                className="group relative rounded-xl overflow-hidden aspect-[4/5] content-card"
              >
                <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 news-card-overlay" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-gray-400 text-sm mb-2">{news.region}</span>
                  <h3 className="text-white text-lg sm:text-xl font-semibold mb-4 line-clamp-3">
                    {news.title}
                  </h3>
                  <button
                    type="button"
                    className="self-start px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm rounded-md hover:bg-white/20 transition-colors"
                  >
                    Read more
                  </button>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              type="button"
              className="px-6 py-3 bg-transparent border border-white/30 text-white rounded-md hover:bg-white/10 transition-colors text-sm font-medium"
            >
              Read more news in the Newsroom
            </button>
          </div>
        </div>
      </section>

      {/* Company Assets Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#141414]">
          <div className="absolute inset-0 diagonal-stripes" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 italic">
            Looking for company assets?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Get more images and information about Netflix on our company site.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition-colors"
          >
            Go to About Netflix
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
              <nav className="space-y-3">
                <a href="#" className="block text-white hover:text-gray-300 transition-colors">About Netflix</a>
                <a href="#" className="block text-white hover:text-gray-300 transition-colors">Newsroom</a>
                <a href="#" className="block text-white hover:text-gray-300 transition-colors">Company Assets</a>
                <a href="#" className="block text-white hover:text-gray-300 transition-colors">Start watching</a>
              </nav>
            </div>
            <div>
              <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-4">Connect</h3>
              <nav className="space-y-3">
                <a href="#" className="block text-white hover:text-gray-300 transition-colors">Contact Us</a>
              </nav>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-4">Legal</h3>
              <nav className="space-y-3">
                <a href="#" className="block text-white hover:text-gray-300 transition-colors">Terms and Conditions</a>
                <a href="#" className="block text-white hover:text-gray-300 transition-colors">Privacy</a>
                <a href="#" className="block text-white hover:text-gray-300 transition-colors">Cookie Preferences</a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}