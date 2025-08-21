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

type ExperienceItemProps = {
  item: TimelineItem;
  shouldAlternate: boolean;
  isActive: boolean;
  onSetActive: (id: string) => void;
};

export function ExperienceItem({
  item,
  shouldAlternate,
  isActive,
  onSetActive,
}: ExperienceItemProps) {
  const ref = useRef(null);

  const hasEnteredViewport = useInView(ref, {
    amount: 0.3,
    once: true,
  });

  const isCurrentlyInView = useInView(ref, {
    amount: 1,
    once: false,
  });

  // Track when item enters viewport to set as active (continuous)
  useEffect(() => {
    if (isCurrentlyInView) {
      onSetActive(item.id);
    }
  }, [isCurrentlyInView, item.id, onSetActive]);

  return (
    <motion.div
      ref={ref}
      key={item.id}
      data-item-id={item.id}
      className="relative flex items-center justify-between"
      initial={{ opacity: 0, y: 50 }}
      animate={
        hasEnteredViewport ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
      }
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div
        className={cn(
          "-order-1 w-5/12",
          shouldAlternate ? "order-10 " : "text-right"
        )}
      >
        <div className="font-serif text-3xl font-light tracking-wider">
          {item.date.split(",")[0]}
        </div>
        {item.date.includes(",") && (
          <div className="font-sans text-sm font-medium  uppercase tracking-widest mt-1">
            {item.date.split(",")[1]?.trim()}
          </div>
        )}
      </div>
      <motion.div
        className={cn(
          "w-8 h-8 rounded-full border-2 border-slate-900 shadow-lg cursor-pointer",
          typeColors[item.type]
        )}
        initial={{ scale: 0.75, opacity: 0.5 }}
        animate={{
          scale: hasEnteredViewport ? (isActive ? 1.2 : 1) : 0.75,
          opacity: hasEnteredViewport ? 1 : 0.5,
          boxShadow: isActive
            ? "0 0 20px rgba(6, 182, 212, 0.6), 0 0 40px rgba(6, 182, 212, 0.3)"
            : "0 0 0px rgba(6, 182, 212, 0)",
        }}
        whileHover={{ scale: hasEnteredViewport ? 1.1 : 0.75 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        onClick={() => onSetActive(item.id)}
      />
      <motion.div
        className={cn("w-5/12 order-10", shouldAlternate ? "-order-1" : "")}
        initial={{ opacity: 0, x: shouldAlternate ? 50 : -50 }}
        animate={
          hasEnteredViewport
            ? {
                opacity: 1,
                x: 0,
                scale: isActive ? 1.02 : 1,
              }
            : {
                opacity: 0,
                x: shouldAlternate ? 50 : -50,
              }
        }
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <Card
          className={cn(
            "shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm cursor-pointer group overflow-hidden",
            isActive ? "ring-2 ring-primary/50 shadow-primary/20" : ""
          )}
          onClick={() => onSetActive(item.id)}
        >
          <CardContent className="flex flex-col gap-y-2">
            <div className="relative flex items-center justify-between">
              {item.logo && (
                <Image
                  src={item.logo}
                  alt={`${item.company} logo`}
                  height={33}
                  width={160}
                />
              )}
              {item.company === "Ace High Club" && (
                <Spade className="w-10 h-10 text-primary" />
              )}
              {item.company === "Studently" && (
                <Image
                  src="/studently-logo.svg"
                  alt="Studently logo"
                  height={33}
                  width={33}
                />
              )}
              <div className="text-right">
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
            <Separator />

            <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
            <p className="leading-relaxed text-base">{item.description}</p>

            {/* Skills Section */}
            {item.skills && item.skills.length > 0 && (
              <div className="mt-4 pt-4 border-t border-slate-700">
                <h4 className="text-sm font-semibold  mb-2 uppercase tracking-wide">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, skillIndex) => (
                    <SkillBadge
                      key={skillIndex}
                      icon={skill.icon}
                      name={skill.name}
                    />
                  ))}
                </div>
              </div>
            )}
            {/* YouTube Video Section */}
            {item.videoId && (
              <YouTubePlayer videoId={item.videoId} title={item.title} />
            )}

            {/* Downloads Section */}
            {item.downloads && item.downloads.length > 0 && (
              <Downloads downloads={item.downloads} />
            )}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
