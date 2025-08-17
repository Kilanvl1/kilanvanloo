export interface DownloadItem {
  name: string;
  url: string;
  type: "pdf" | "doc" | "zip" | "other";
}

export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  description: string;
  type: "work" | "education" | "project" | "achievement";
  company?: string;
  logo?: string;
  website?: string;
  location?: string;
  videoId?: string; // For YouTube videos
  downloads?: DownloadItem[];
  skills?: {
    icon: string;
    name: string;
  }[];
}

export const timelineData: TimelineItem[] = [
  {
    id: "1",
    date: "2025, February",
    title: "Full Stack Developer",
    description:
      "From component design to typing backend endpoints, fully responsible for the conversion of a Java desktop app into a web app using NextJS.",
    type: "work",
    company: "Migrato",
    logo: "/migrato-logo.png",
    website: "https://migrato.nl/",
    location: "The Netherlands, remote",
    skills: [
      {
        icon: "nextjs",
        name: "NextJS",
      },
      {
        icon: "elasticsearch",
        name: "Elasticsearch",
      },
      {
        icon: "openai",
        name: "OpenAI",
      },
      {
        icon: "fastapi",
        name: "FastAPI",
      },
      {
        icon: "mysql",
        name: "MySQL",
      },
    ],
  },
  {
    id: "2",
    date: "2024, September",
    title: "Wordpress Developer & AI automation",
    description:
      "Developed and maintained WordPress websites for clients, including custom plugins and theme development. Implemented AI automation for content creation and SEO optimization.",
    type: "work",
    company: "Debetonboorder",
    logo: "/debetonboorder-logo.png.webp",
    website: "https://debetonboorder.nl/",
    location: "Amsterdam",
    skills: [
      {
        icon: "wordpress",
        name: "Wordpress",
      },
      {
        icon: "n8n",
        name: "N8N",
      },
      {
        icon: "langchain",
        name: "LangChain",
      },
      {
        icon: "yoast",
        name: "SEO",
      },
    ],
  },
  {
    id: "3",
    date: "2024, August",
    title: "YouTube channel",
    description:
      "Created a YouTube channel to share my knowledge and experiences with the community. I share my knowledge about web development, AI, and other topics.",
    type: "work",
    company: "YouTube",
    logo: "/youtube-logo.png",
    website: "https://www.youtube.com/@Kilanvanloo",
    location: "Amsterdam",
    videoId: "iirV8rD9o2Q", // YouTube video ID
  },
  {
    id: "4",
    date: "2024, March",
    title: "Co-founder of Studently",
    description:
      "Co-founder of Studently, a mini-business aimed at helping international students claim government benefits. Collaborated with a designer and digital marketer to execute the business idea.",
    type: "project",
    company: "Studently",
    website: "https://yan-kilans-projects-8999f100.vercel.app/",
    location: "Amsterdam",
    skills: [
      {
        icon: "posthog",
        name: "PostHog",
      },
      {
        icon: "sentry",
        name: "Sentry",
      },
      {
        icon: "figma",
        name: "Figma",
      },
      {
        icon: "digitalocean",
        name: "DigitalOcean",
      },
    ],
  },
  {
    id: "5",
    date: "2024, February",
    title: "Full Stack Developer Internship",
    description:
      "Collaborated with a team of 3 developers to deploy a full-stack web application using React, NextJS, and Django Python.",
    type: "work",
    company: "Fittery",
    logo: "/fittery-logo.png",
    website: "https://fittery.nl",
    location: "Amsterdam",
    skills: [
      {
        icon: "react",
        name: "React",
      },
      {
        icon: "nodejs",
        name: "Node.js",
      },
      {
        icon: "postgresql",
        name: "PostgreSQL",
      },
      {
        icon: "django",
        name: "Django",
      },
    ],
  },
  {
    id: "6",
    date: "2023, October",
    title: "Full Stack Poker App",
    description:
      "Created my first full-stack web application for settling poker cash games as well as creating a leaderboard system to track the best players.",
    type: "project",
    company: "Ace High Club",
    website: "https://acehighclub.netlify.app/",
    location: "South Africa, Cape Town",
    skills: [
      {
        icon: "react",
        name: "React",
      },
      {
        icon: "nodejs",
        name: "Node.js",
      },
      {
        icon: "vercel",
        name: "Vercel",
      },
      {
        icon: "tailwind",
        name: "TailwindCSS",
      },
    ],
  },
  {
    id: "7",
    date: "2021, September",
    title: "BSc Computer Science",
    description:
      "Started my BSc Computer Science degree at the Vrije Universiteit Amsterdam, The Netherlands. ",
    type: "education",
    company: "Vrije Universiteit Amsterdam",
    logo: "/vu-logo.png",
    website: "https://www.vu.nl/",
    location: "Amsterdam",
    downloads: [
      {
        name: "Grade Transcript",
        url: "/grade-list.pdf",
        type: "pdf",
      },
      {
        name: "Degree Certificate",
        url: "/bachelor-degree.pdf",
        type: "pdf",
      },
    ],
    skills: [
      {
        icon: "grade",
        name: "8.5 avg",
      },
      {
        icon: "graduation-cap",
        name: "2024, Graduated",
      },
    ],
  },
];

export const typeColors = {
  work: "bg-primary",
  education: "bg-secondary",
  project: "bg-accent",
  achievement: "bg-destructive",
};
