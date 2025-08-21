import { IconContext, IconType } from "react-icons";
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

import { FaGraduationCap } from "react-icons/fa";
import { MdGrade } from "react-icons/md";

import { Badge } from "./ui/badge";

// Skill Badge Component
interface SkillBadgeProps {
  icon: string;
  name: string;
}

export function SkillBadge({ icon, name }: SkillBadgeProps) {
  const IconComponent = iconMap[icon];

  return (
    <Badge variant="outline">
      {IconComponent && (
        <IconContext.Provider value={{ color: "#760604" }}>
          <IconComponent className="w-4 h-4" />
        </IconContext.Provider>
      )}
      {name}
    </Badge>
  );
}
