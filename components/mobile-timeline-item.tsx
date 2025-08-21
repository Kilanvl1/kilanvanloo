"use client";

import { useInView } from "motion/react";
import { useRef, useEffect } from "react";
import { YouTubePlayer } from "./youtube-player";
import { Downloads } from "./downloads";
import { SkillBadge } from "./skill-badge";
import { Card, CardContent } from "./ui/card";
import { Spade } from "lucide-react";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";
import { TimelineItem, typeColors } from "@/data/timeline-data";
import { motion } from "motion/react";

type MobileTimelineItemProps = {
  item: TimelineItem;
  index: number;
  isActive: boolean;
  onSetActive: (id: string) => void;
};

export function MobileTimelineItem({
  item,
  index,
  isActive,
  onSetActive,
}: MobileTimelineItemProps) {
  const ref = useRef(null);

  // Hook for one-time animations (entrance effects)
  const hasEnteredViewport = useInView(ref, {
    amount: 0.3, // Lower threshold for mobile
    once: true,
  });

  // Hook for continuous active tracking
  const isCurrentlyInView = useInView(ref, {
    amount: 0.6, // Require less of the element for mobile
    once: false,
  });

  // Track when item enters viewport to set as active (continuous)
  useEffect(() => {
    if (isCurrentlyInView) {
      onSetActive(item.id);
    }
  }, [isCurrentlyInView, item.id, onSetActive]);

  const handleCardClick = (website?: string) => {
    if (website) {
      window.open(website, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      ref={ref}
      className="relative pl-8"
      initial={{ opacity: 0, x: 30 }}
      animate={
        hasEnteredViewport ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
      }
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1, // Stagger animations
      }}
    >
      {/* Timeline Dot */}
      <motion.div
        className={cn(
          "absolute -left-2 top-6 w-4 h-4 rounded-full border-2 border-background shadow-lg z-10",
          typeColors[item.type]
        )}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{
          scale: hasEnteredViewport ? (isActive ? 1.3 : 1) : 0.5,
          opacity: hasEnteredViewport ? 1 : 0,
          boxShadow: isActive
            ? "0 0 15px rgba(6, 182, 212, 0.6), 0 0 30px rgba(6, 182, 212, 0.3)"
            : "0 0 0px rgba(6, 182, 212, 0)",
        }}
        whileTap={{ scale: hasEnteredViewport ? 1.1 : 0.5 }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
        onClick={() => onSetActive(item.id)}
      />

      {/* Date Badge */}
      <motion.div
        className="mb-3"
        initial={{ opacity: 0, y: 20 }}
        animate={
          hasEnteredViewport ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
        }
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-background/50 backdrop-blur-sm">
          <div className="font-serif text-lg font-light">
            {item.date.split(",")[0]}
          </div>
          {item.date.includes(",") && (
            <div className="font-sans text-xs font-medium text-muted-foreground uppercase">
              {item.date.split(",")[1]?.trim()}
            </div>
          )}
        </div>
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={
          hasEnteredViewport
            ? {
                opacity: 1,
                y: 0,
                scale: isActive ? 1.02 : 1,
              }
            : {
                opacity: 0,
                y: 30,
                scale: 0.95,
              }
        }
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: index * 0.1 + 0.3,
        }}
      >
        <Card
          className={cn(
            "shadow-lg hover:shadow-xl transition-all duration-500 border backdrop-blur-sm cursor-pointer group overflow-hidden",
            isActive ? "ring-2 ring-primary/50 shadow-primary/20 shadow-lg" : ""
          )}
          onClick={() => {
            onSetActive(item.id);
            handleCardClick(item.website);
          }}
        >
          <CardContent className="p-4">
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                {item.logo && (
                  <Image
                    src={item.logo}
                    alt={`${item.company} logo`}
                    height={20}
                    width={100}
                    className="object-contain"
                  />
                )}
                {item.company === "Ace High Club" && (
                  <Spade className="w-5 h-5 text-primary" />
                )}
                {item.company === "Studently" && (
                  <Image
                    src="/studently-logo.svg"
                    alt="Studently logo"
                    height={20}
                    width={20}
                  />
                )}
              </div>
              <div className="text-right ml-2">
                <div className="text-sm font-semibold text-foreground">
                  {item.company}
                </div>
                {item.location && (
                  <div className="text-xs text-muted-foreground">
                    {item.location}
                  </div>
                )}
              </div>
            </div>

            <Separator className="mb-3" />

            {/* Content */}
            <motion.h3
              className="text-lg font-bold mb-2 group-hover:text-accent transition-colors duration-300"
              animate={isActive ? { color: "hsl(var(--accent))" } : {}}
              transition={{ duration: 0.3 }}
            >
              {item.title}
            </motion.h3>
            <p className="text-sm leading-relaxed mb-3 text-muted-foreground">
              {item.description}
            </p>

            {/* Skills Section */}
            {item.skills && item.skills.length > 0 && (
              <motion.div
                className="mb-3"
                initial={{ opacity: 0 }}
                animate={hasEnteredViewport ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              >
                <h4 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {item.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        hasEnteredViewport
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + 0.6 + skillIndex * 0.05,
                      }}
                    >
                      <SkillBadge icon={skill.icon} name={skill.name} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* YouTube Video Section */}
            {item.videoId && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  hasEnteredViewport
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
              >
                <YouTubePlayer videoId={item.videoId} title={item.title} />
              </motion.div>
            )}

            {/* Downloads Section */}
            {item.downloads && item.downloads.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  hasEnteredViewport
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
              >
                <Downloads downloads={item.downloads} />
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
