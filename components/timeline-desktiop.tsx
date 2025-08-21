"use client";

import { timelineData } from "@/data/timeline-data";
import * as motion from "motion/react-client";
import { useScroll, useTransform } from "motion/react";

import { useRef, useState, useCallback } from "react";
import { ExperienceItem } from "./experience-item";

export function TimelineDesktop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeItemId, setActiveItemId] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Handle setting active item - only one can be active at a time
  const handleSetActive = useCallback((itemId: string) => {
    setActiveItemId(itemId);
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 hidden md:block mb-40"
    >
      <div className="max-w-5xl mx-auto py-16">
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full rounded-full overflow-hidden">
            <motion.div
              className="w-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full transition-all duration-500 ease-out"
              style={{
                height: height,
              }}
            />
          </div>
          <div className="space-y-16">
            {timelineData.map((item, index) => {
              const shouldAlternate = index % 2 === 0;
              return (
                <ExperienceItem
                  key={item.id}
                  item={item}
                  shouldAlternate={shouldAlternate}
                  isActive={activeItemId === item.id}
                  onSetActive={handleSetActive}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
