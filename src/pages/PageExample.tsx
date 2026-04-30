import { useState, useEffect } from "react";
import { heroChampions } from "@/lib/contoh-data";

import FeaturedChampionCard from "@/components/contohComponent";

import RiotLogo from "@/assets/RiotLogo";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0c]/95 backdrop-blur-sm">
            <div className="flex items-center justify-between px-6 py-4">
                {/* Riot Games Logo */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <RiotLogo />
                </div>

                {/* Right side */}
                <div className="flex items-center gap-6">
                    {/* Language selector */}
                    <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="text-white"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="2" y1="12" x2="22" y2="12" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                    </button>

                    {/* Menu button */}
                    <button
                        className="w-12 h-12 flex items-center justify-center bg-[#1a1a1d] rounded-full hover:bg-[#2a2a2d] transition-colors"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <div className="flex flex-col gap-1.5">
                            <span className="w-5 h-0.5 bg-white rounded-full" />
                            <span className="w-5 h-0.5 bg-white rounded-full" />
                            <span className="w-5 h-0.5 bg-white rounded-full" />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile menu overlay */}
            {menuOpen && (
                <div className="absolute top-full left-0 right-0 bg-[#0a0a0c]/98 backdrop-blur-md p-6 border-t border-[#1e1e21]">
                    <nav className="flex flex-col gap-4">
                        <a href="#" className="text-white hover:text-[#c8aa6e] transition-colors font-display tracking-wider">CHAMPIONS</a>
                        <a href="#" className="text-white hover:text-[#c8aa6e] transition-colors font-display tracking-wider">REGIONS</a>
                        <a href="#" className="text-white hover:text-[#c8aa6e] transition-colors font-display tracking-wider">STORIES</a>
                        <a href="#" className="text-white hover:text-[#c8aa6e] transition-colors font-display tracking-wider">COMICS</a>
                    </nav>
                </div>
            )}
        </header>
    );
}

function HeroCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const goToSlide = (index: number) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex(index);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const goToPrev = () => {
        const newIndex = currentIndex === 0 ? heroChampions.length - 1 : currentIndex - 1;
        goToSlide(newIndex);
    };

    const goToNext = () => {
        const newIndex = currentIndex === heroChampions.length - 1 ? 0 : currentIndex + 1;
        goToSlide(newIndex);
    };

    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev === heroChampions.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const currentChampion = heroChampions[currentIndex];
    const prevIndex = currentIndex === 0 ? heroChampions.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === heroChampions.length - 1 ? 0 : currentIndex + 1;

    return (
        <section className="relative h-[85vh] min-h-150 overflow-hidden pt-16">
            {/* Background slides */}
            <div className="absolute inset-0">
                {heroChampions.map((champion, index) => (
                    <div
                        key={champion.id}
                        className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <img
                            src={champion.image}
                            alt={champion.name}
                            className="w-full h-full object-cover object-top"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0c]/60 via-transparent to-[#0a0a0c]" />
                        <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0c]/80 via-transparent to-[#0a0a0c]/80" />
                    </div>
                ))}
            </div>

            {/* Navigation arrows */}
            <button
                onClick={goToPrev}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-white/60 hover:text-white transition-colors"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6" />
                </svg>
            </button>

            <button
                onClick={goToNext}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-white/60 hover:text-white transition-colors"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                </svg>
            </button>

            {/* Side previews */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/5 h-2/3 opacity-30 hidden lg:block">
                <img
                    src={heroChampions[prevIndex].image}
                    alt=""
                    className="w-full h-full object-cover object-top rounded-r-lg"
                />
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/5 h-2/3 opacity-30 hidden lg:block">
                <img
                    src={heroChampions[nextIndex].image}
                    alt=""
                    className="w-full h-full object-cover object-top rounded-l-lg"
                />
            </div>

            {/* Champion info card - Bottom center */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 w-full max-w-lg px-4">
                <div
                    className={`relative bg-[#0d0d0f]/90 backdrop-blur-sm border border-[#c8aa6e]/30 p-6 text-center ${isAnimating ? "animate-slide-in" : ""
                        }`}
                    style={{
                        clipPath: "polygon(10% 0, 90% 0, 100% 20%, 100% 100%, 0 100%, 0 20%)",
                    }}
                >
                    {/* Gold top border */}
                    <div className="absolute top-0 left-[10%] right-[10%] h-0.5 bg-linear-to-r from-transparent via-[#c8aa6e] to-transparent" />

                    {/* Shield icon */}
                    <div className="flex justify-center mb-3">
                        <img
                            src="https://ext.same-assets.com/156606680/4079577695.png"
                            alt=""
                            className="w-8 h-8 shield-glow"
                        />
                    </div>

                    {/* Title */}
                    <p className="text-[#c8aa6e] text-xs md:text-sm tracking-[0.3em] uppercase mb-2">
                        {currentChampion.title}
                    </p>

                    {/* Name */}
                    <h1 className="font-display text-2xl md:text-4xl text-[#f0e6d2] tracking-wider uppercase">
                        {currentChampion.name}
                    </h1>
                </div>
            </div>

            {/* Slide indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {heroChampions.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                ? "bg-[#c8aa6e] w-6"
                                : "bg-white/30 hover:bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}

interface SectionTitleProps {
    title: string;
    icon?: string;
}

function SectionTitle({ title, icon }: SectionTitleProps) {
    return (
        <div className="flex flex-col items-center justify-center py-12">
            {/* Shield Icon */}
            {icon && (
                <img
                    src={icon}
                    alt=""
                    className="w-12 h-12 mb-4 shield-glow opacity-80"
                />
            )}

            {/* Title with decorative lines */}
            <div className="flex items-center justify-center w-full max-w-4xl px-4">
                {/* Left decorative line */}
                <div className="flex-1 h-px bg-linear-to-r from-transparent via-[#785a28] to-[#c8aa6e]" />

                {/* Decorative element left */}
                <svg
                    width="20"
                    height="10"
                    viewBox="0 0 20 10"
                    fill="none"
                    className="mx-2 text-[#c8aa6e]"
                >
                    <path d="M0 5L10 0L20 5L10 10L0 5Z" fill="currentColor" opacity="0.5" />
                </svg>

                {/* Title */}
                <h2 className="section-title text-lg md:text-xl mx-4">{title}</h2>

                {/* Decorative element right */}
                <svg
                    width="20"
                    height="10"
                    viewBox="0 0 20 10"
                    fill="none"
                    className="mx-2 text-[#c8aa6e]"
                >
                    <path d="M0 5L10 0L20 5L10 10L0 5Z" fill="currentColor" opacity="0.5" />
                </svg>

                {/* Right decorative line */}
                <div className="flex-1 h-px bg-linear-to-l from-transparent via-[#785a28] to-[#c8aa6e]" />
            </div>
        </div>
    );
}

interface ChampionCardProps {
    id: string;
    name: string;
    title: string;
    image: string;
    featured?: boolean;
}

function ChampionCard({
    name,
    title,
    image,
    featured = false,
}: ChampionCardProps) {
    return (
        <div
            className={`champion-card relative overflow-hidden cursor-pointer group ${featured ? "row-span-2 col-span-1 md:col-span-1" : ""
                }`}
        >
            {/* Image */}
            <div className={`relative ${featured ? "h-full min-h-125" : "aspect-3/4"}`}>
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0c] via-[#0a0a0c]/30 to-transparent" />

                {/* Hover overlay */}
                <div className="card-overlay absolute inset-0 bg-[#c8aa6e]/10 opacity-0 transition-opacity duration-300" />
            </div>

            {/* Info section */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                {/* Shield icon */}
                <div className="flex justify-center mb-3">
                    <div className="w-10 h-10 rounded-full border border-[#c8aa6e]/50 flex items-center justify-center bg-[#0a0a0c]/50 backdrop-blur-sm">
                        <img
                            src="https://ext.same-assets.com/156606680/4079577695.png"
                            alt=""
                            className="w-5 h-5"
                        />
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-center mb-1">
                    {title}
                </h3>

                {/* Name */}
                <h1 className="font-display text-lg md:text-xl text-[#f0e6d2] tracking-wider uppercase text-center">
                    {name}
                </h1>

                {/* Explore button on hover */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-center gap-2 text-[#c8aa6e] text-xs tracking-wider">
                        <span>Explore</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Border glow on hover */}
            <div className="absolute inset-0 border border-transparent group-hover:border-[#c8aa6e]/30 transition-colors duration-300 pointer-events-none" />
        </div>
    );
}


interface RegionCardProps {
    id: string;
    name: string;
    icon: string;
    image: string;
}

function RegionCard({ name, icon, image }: RegionCardProps) {
    return (
        <div className="champion-card group cursor-pointer w-full">
            {/* Image container */}
            <div className="relative aspect-video md:aspect-21/9 overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0c] via-[#0a0a0c]/30 to-transparent" />

                {/* Hover overlay */}
                <div className="card-overlay absolute inset-0 bg-[#c8aa6e]/5 opacity-0 transition-opacity duration-300" />
            </div>

            {/* Info card */}
            <div className="bg-[#0d0d0f] border border-[#1e1e21] p-5 md:p-6 max-w-3xl mx-auto -mt-16 relative z-10">
                {/* Top row - Region icon and name */}
                <div className="flex items-center justify-center gap-6">
                    {/* Region icon */}
                    <div className="w-16 h-16 flex items-center justify-center">
                        <img
                            src={icon}
                            alt={name}
                            className="w-14 h-14 object-contain shield-glow"
                        />
                    </div>

                    {/* Vertical divider */}
                    <div className="w-[1px] h-12 bg-[#c8aa6e]/30" />

                    {/* Name */}
                    <h3 className="font-display text-3xl md:text-5xl text-[#f0e6d2] tracking-[0.3em] uppercase">
                        {name}
                    </h3>
                </div>

                {/* Explore button */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-center gap-2 text-[#c8aa6e] text-xs tracking-wider py-3 border border-[#c8aa6e]/30 hover:bg-[#c8aa6e]/10 transition-colors">
                        <span>Explore Region</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

import { footerLinks, legalLinks } from "@/lib/contoh-data";

function Footer() {
    return (
        <footer className="bg-[#0a0a0c] border-t border-[#1e1e21] mt-20">
            {/* Main links */}
            <div className="py-12">
                <nav className="flex flex-col items-center gap-6">
                    {footerLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-white text-sm tracking-[0.2em] hover:text-[#c8aa6e] transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>

            {/* Divider */}
            <div className="decorative-line w-full" />

            {/* Bottom section */}
            <div className="py-10 px-6">
                {/* Riot Games logo */}
                <div className="flex justify-center mb-6">
                    <div className="flex items-center gap-2 opacity-60">
                        <svg
                            width="24"
                            height="28"
                            viewBox="0 0 30 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-white"
                        >
                            <path
                                d="M2.38 33.15L0 6.56L21.33 0L30 7.47V26.26L23.54 33.15H15.94L15.22 29.32H20.36L24.03 25.27V9.39L21.07 6.91L5.48 11.08L6.79 28.73L2.38 33.15Z"
                                fill="currentColor"
                            />
                        </svg>
                        <span className="text-white font-bold tracking-wide text-xs">RIOT<br />GAMES</span>
                    </div>
                </div>

                {/* Copyright */}
                <p className="text-center text-[#7a7a7a] text-xs leading-relaxed max-w-2xl mx-auto mb-8">
                    TM & © 2026 Riot Games, Inc. League of Legends and all related logos, characters, names and
                    distinctive likenesses thereof are exclusive property of Riot Games, Inc. All Rights Reserved.
                </p>

                {/* Legal links */}
                <nav className="flex flex-col items-center gap-4 mb-8">
                    {legalLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-white text-xs tracking-[0.15em] hover:text-[#c8aa6e] transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* ESRB Rating */}
                <div className="flex justify-center">
                    <div className="flex items-start gap-4 bg-[#111113] p-4 border border-[#1e1e21]">
                        {/* ESRB Logo */}
                        <div className="flex flex-col items-center border-2 border-white/80 px-2 py-1">
                            <span className="text-white text-[10px] font-bold tracking-wider">TEEN</span>
                            <span className="text-white text-2xl font-bold leading-none">T</span>
                            <span className="text-white text-[8px] font-bold tracking-wider">ESRB</span>
                        </div>

                        {/* Rating descriptors */}
                        <div className="text-white text-xs leading-relaxed">
                            <p>Blood</p>
                            <p>Fantasy Violence</p>
                            <p>Mild Suggestive Themes</p>
                            <p>Use of Alcohol and Tobacco</p>
                            <p className="text-[#7a7a7a] mt-2">Online Interactions Not Rated by the ESRB</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

import {
    latestChampions,
    featuredChampions,
    featuredChampionsLarge,
    regions,
} from "@/lib/contoh-data";

export default function App() {
    return (
        <main className="min-h-screen bg-[#0a0a0c]">
            <Header />

            {/* Hero Carousel */}
            <HeroCarousel />

            {/* Latest Section */}
            <section className="relative">
                <SectionTitle
                    title="Latest"
                    icon="https://ext.same-assets.com/156606680/158895728.png"
                />

                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        {/* First two small cards */}
                        {latestChampions.slice(0, 2).map((champion) => (
                            <ChampionCard key={champion.id} {...champion} />
                        ))}

                        {/* Featured large card */}
                        <div className="row-span-2 hidden md:block">
                            <ChampionCard {...latestChampions[2]} featured />
                        </div>

                        {/* Mobile version of featured card */}
                        <div className="col-span-2 md:hidden">
                            <ChampionCard {...latestChampions[2]} />
                        </div>

                        {/* Last two small cards */}
                        {latestChampions.slice(3, 5).map((champion) => (
                            <ChampionCard key={champion.id} {...champion} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Section */}
            <section className="relative mt-8">
                <SectionTitle
                    title="Featured"
                    icon="https://ext.same-assets.com/156606680/3023445828.png"
                />

                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        {/* First two small cards */}
                        {featuredChampions.slice(0, 2).map((champion) => (
                            <ChampionCard key={champion.id} {...champion} />
                        ))}

                        {/* Featured large card */}
                        <div className="row-span-2 hidden md:block">
                            <ChampionCard {...featuredChampions[2]} featured />
                        </div>

                        {/* Mobile version of featured card */}
                        <div className="col-span-2 md:hidden">
                            <ChampionCard {...featuredChampions[2]} />
                        </div>

                        {/* Last two small cards */}
                        {featuredChampions.slice(3, 5).map((champion) => (
                            <ChampionCard key={champion.id} {...champion} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Champions Section - Large Cards */}
            <section className="relative mt-8">
                <SectionTitle
                    title="Featured Champions"
                    icon="https://ext.same-assets.com/156606680/4079577695.png"
                />

                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    {/* Horizontal scroll wrapper */}
                    <div className="relative">
                        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
                            {featuredChampionsLarge.map((champion) => (
                                <div
                                    key={champion.id}
                                    className="shrink-0 w-70 md:w-[320px] snap-start"
                                >
                                    <FeaturedChampionCard {...champion} />
                                </div>
                            ))}
                        </div>

                        {/* Fade indicators */}
                        <div className="absolute right-0 top-0 bottom-6 w-20 bg-linear-to-l from-[#0a0a0c] to-transparent pointer-events-none hidden md:block" />
                    </div>
                </div>
            </section>

            {/* Regions Section */}
            <section className="relative mt-8">
                <SectionTitle title="Explore Regions" />

                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    {regions.map((region) => (
                        <RegionCard key={region.id} {...region} />
                    ))}
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    );
}
