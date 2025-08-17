import { AnimatedTimeline } from "@/components/animated-timeline";
import { HeroSection } from "@/components/hero-section";
import { ModeToggle } from "@/components/ui/mode-toggle";

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
      <div className="relative z-20">
        <AnimatedTimeline />
      </div>
    </main>
  );
}
