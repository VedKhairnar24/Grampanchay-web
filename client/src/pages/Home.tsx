import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Team } from "@/components/home/Team";
import { Stats } from "@/components/home/Stats";
import { Gallery } from "@/components/home/Gallery";
import { InfoSection } from "@/components/home/InfoSection";
import { MapSection } from "@/components/home/MapSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <InfoSection />
        <Team />
        <Gallery />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}
