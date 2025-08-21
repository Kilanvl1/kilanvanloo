"use client";

import { timelineData } from "@/data/timeline-data";
import { useScroll, useTransform } from "motion/react";
import { useRef, useState, useCallback } from "react";
import { MobileTimelineItem } from "./mobile-timeline-item";
import { motion } from "motion/react";

export function TimelineMobile() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeItemId, setActiveItemId] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Handle setting active item - only one can be active at a time
  const handleSetActive = useCallback((itemId: string) => {
    setActiveItemId(itemId);
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 block md:hidden pb-40"
    >
      <div className="relative px-4 py-8 max-w-md mx-auto">
        {/* Mobile Timeline Line - Fixed on Left */}
        <div className="absolute left-8 top-8 bottom-8 w-0.5 rounded-full overflow-hidden">
          <motion.div
            className="w-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full"
            style={{
              height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
            }}
          />
        </div>

        {/* Timeline Items */}
        <div className="space-y-8">
          {timelineData.map((item, index) => (
            <MobileTimelineItem
              key={item.id}
              item={item}
              index={index}
              isActive={activeItemId === item.id}
              onSetActive={handleSetActive}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
