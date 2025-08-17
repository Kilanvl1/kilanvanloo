"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "./ui/separator";
import {
  SiNextdotjs,
  SiOpenjdk,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiJavascript,
  SiMongodb,
  SiGithub,
  SiElastic,
  SiOpenai,
  SiFastapi,
  SiMysql,
  SiN8N,
  SiLangchain,
  SiYoast,
  SiWordpress,
  SiDjango,
  SiPosthog,
  SiSentry,
  SiFigma,
  SiDigitalocean,
  SiVercel,
} from "react-icons/si";
import { FaGraduationCap } from "react-icons/fa";
import { MdGrade } from "react-icons/md";
import { IconType } from "react-icons";
import { Spade, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  timelineData,
  typeColors,
  type DownloadItem,
} from "@/data/timeline-data";
import { Badge } from "./ui/badge";

// Icon mapping for skills
const iconMap: Record<string, IconType> = {
  nextjs: SiNextdotjs,
  java: SiOpenjdk,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  postgresql: SiPostgresql,
  react: SiReact,
  nodejs: SiNodedotjs,
  python: SiPython,
  javascript: SiJavascript,
  mongodb: SiMongodb,
  github: SiGithub,
  elasticsearch: SiElastic,
  openai: SiOpenai,
  fastapi: SiFastapi,
  mysql: SiMysql,
  n8n: SiN8N,
  langchain: SiLangchain,
  yoast: SiYoast,
  wordpress: SiWordpress,
  django: SiDjango,
  posthog: SiPosthog,
  sentry: SiSentry,
  figma: SiFigma,
  digitalocean: SiDigitalocean,
  vercel: SiVercel,
  "graduation-cap": FaGraduationCap,
  grade: MdGrade,
};

// Skill Badge Component
interface SkillBadgeProps {
  icon: string;
  name: string;
}

function SkillBadge({ icon, name }: SkillBadgeProps) {
  const IconComponent = iconMap[icon];

  return (
    <Badge variant="outline">
      {IconComponent && <IconComponent className="w-4 h-4" />}
      {name}
    </Badge>
  );
}

// YouTube Video Player Component
interface YouTubePlayerProps {
  videoId: string;
  title?: string;
}

function YouTubePlayer({ videoId, title }: YouTubePlayerProps) {
  return (
    <div className="mt-4 pt-4 border-t border-slate-700">
      <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">
        Featured Video
      </h4>
      <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0`}
          title={title || "YouTube video"}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

// Downloads Component
interface DownloadsProps {
  downloads: DownloadItem[];
}

function Downloads({ downloads }: DownloadsProps) {
  const handleDownload = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="mt-4 pt-4 border-t border-slate-700">
      <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">
        Downloads
      </h4>
      <div className="space-y-2">
        {downloads.map((download, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            onClick={() => handleDownload(download.url)}
            className="w-full justify-between text-left"
          >
            <span>{download.name}</span>
            <Download className="w-4 h-4" />
          </Button>
        ))}
      </div>
    </div>
  );
}

export function AnimatedTimeline() {
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = entry.target.getAttribute("data-item-id");
            if (itemId) {
              setVisibleItems((prev) => new Set([...prev, itemId]));
              setActiveItem(itemId);
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-100px 0px",
      }
    );

    Object.values(itemRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const progress = Math.max(
          0,
          Math.min(
            1,
            (window.innerHeight - rect.top) / (rect.height + window.innerHeight)
          )
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCardClick = (website?: string) => {
    if (website) {
      window.open(website, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div ref={containerRef} className="max-w-5xl mx-auto px-4 py-16">
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-slate-800 h-full rounded-full overflow-hidden">
            <div
              className="w-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full transition-all duration-300 ease-out"
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>

          <div className="space-y-16">
            {timelineData.map((item, index) => {
              const isVisible = visibleItems.has(item.id);
              const isActive = activeItem === item.id;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  ref={(el) => {
                    itemRefs.current[item.id] = el;
                  }}
                  data-item-id={item.id}
                  className="relative flex items-center justify-between"
                >
                  {/* Date on the opposite side */}
                  <div
                    className={`w-5/12 flex ${
                      isLeft ? "justify-end pr-8" : "justify-start pl-8"
                    } transition-all duration-700 ease-out ${
                      isVisible
                        ? "translate-x-0 opacity-100 scale-100"
                        : isLeft
                        ? "translate-x-12 opacity-0 scale-95"
                        : "-translate-x-12 opacity-0 scale-95"
                    }`}
                  >
                    <div
                      className={`text-right ${
                        isLeft ? "text-right" : "text-left"
                      }`}
                    >
                      <div className="font-serif text-3xl font-light text-slate-200 tracking-wider">
                        {item.date.split(",")[0]}
                      </div>
                      {item.date.includes(",") && (
                        <div className="font-sans text-sm font-medium text-slate-400 uppercase tracking-widest mt-1">
                          {item.date.split(",")[1]?.trim()}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                    <div
                      className={`w-8 h-8 rounded-full border-4 border-slate-900 shadow-lg transition-all duration-500 cursor-pointer ${
                        typeColors[item.type]
                      } ${
                        isVisible
                          ? "scale-100 opacity-100"
                          : "scale-75 opacity-50"
                      } ${
                        isActive
                          ? "animate-pulse scale-110 shadow-xl shadow-cyan-400/50"
                          : ""
                      }`}
                      onClick={() => handleCardClick(item.website)}
                    />
                  </div>

                  <div
                    className={`w-5/12 transition-all duration-700 ease-out ${
                      isVisible
                        ? "translate-x-0 opacity-100 scale-100"
                        : isLeft
                        ? "-translate-x-12 opacity-0 scale-95"
                        : "translate-x-12 opacity-0 scale-95"
                    } ${isActive ? "scale-105 z-10" : ""}`}
                  >
                    <Card
                      className={`shadow-xl hover:shadow-2xl transition-all duration-500  backdrop-blur-sm cursor-pointer group overflow-hidden ${
                        isActive
                          ? "ring-2 ring-primary/50 shadow-primary/20"
                          : ""
                      }`}
                      onClick={() => handleCardClick(item.website)}
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

                        <h3 className="text-2xl font-bold mb-3">
                          {item.title}
                        </h3>
                        <p className="leading-relaxed text-base">
                          {item.description}
                        </p>

                        {/* Skills Section */}
                        {item.skills && item.skills.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-slate-700">
                            <h4 className="text-sm font-semibold text-slate-400 mb-2 uppercase tracking-wide">
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
                          <YouTubePlayer
                            videoId={item.videoId}
                            title={item.title}
                          />
                        )}

                        {/* Downloads Section */}
                        {item.downloads && item.downloads.length > 0 && (
                          <Downloads downloads={item.downloads} />
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
