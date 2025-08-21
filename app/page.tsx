import { HeroSection } from "@/components/hero-section";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { TimelineDesktop } from "@/components/timeline-desktiop";
import { TimelineMobile } from "@/components/timeline-mobile";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>

      {/* Hero Section */}
      <div className="relative z-10">
        <HeroSection />
      </div>

      {/* Animated Timeline with overlap */}
      <div className="z-20">
        <TimelineDesktop />
        <TimelineMobile />
      </div>
    </main>
  );
}
