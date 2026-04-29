import { Header } from "../components/Home/Header";
import { Hero } from "../components/Home/Hero";
import { TrendingSection } from "../components/Home/TrendingSection";
import { FeaturesGrid } from "../components/Home/FeaturesGrid";
import { FAQSection } from "../components/Home/FAQSection";
import { Footer } from "../components/Home/Footer";

export function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <TrendingSection />
        <FeaturesGrid />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
