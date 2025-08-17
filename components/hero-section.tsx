"use client";

import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Youtube } from "lucide-react";

// Mouse Scroll Indicator Component
function ScrollIndicator() {
  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-4/5 flex flex-col items-center space-y-2">
      <div className="text-sm text-muted-foreground font-medium">
        Scroll down
      </div>
      <div className="w-6 h-10 border-2 border-muted-foreground rounded-full relative">
        <div className="w-1 h-3 bg-muted-foreground rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <div className="h-[calc(100vh-200px)] bg-gradient-to-br from-background via-background to-muted/20 border border-b">
      <div className="max-w-7xl mx-auto px-4 py-16 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background circle with gradient */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-4 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-background/10 backdrop-blur-sm border border-primary/20">
                  {/* Profile Image Placeholder - Replace with your actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                    <Avatar className="w-full h-full">
                      <AvatarImage src="/kilan-avatar.jpg" />
                      <AvatarFallback>K</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary/20 rounded-full animate-bounce" />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-8">
              <div className="flex gap-2">
                <Badge>
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span className="text-sm font-medium">
                    Full-stack Developer
                  </span>
                </Badge>
                <Badge>
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span className="text-sm font-medium">AI-automationist</span>
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Hi, I&apos;m <span className="text-primary">Kilan</span>. Nice
                to meet you, let me introduce myself.
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                I&apos;m a passionate full-stack developer that enjoys turning
                ideas into businesses. I have spent 2 years building web/apps
                for both myself, and for others.
              </p>
            </div>

            <Separator className="my-8" />

            {/* Social Media Links */}
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] transition-all duration-300"
                onClick={() =>
                  window.open("www.linkedin.com/in/kilanvanloo", "_blank")
                }
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition-all duration-300"
                onClick={() =>
                  window.open("https://www.youtube.com/@Kilanvanloo", "_blank")
                }
              >
                <Youtube className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-[#333333] hover:text-white hover:border-[#333333] transition-all duration-300"
                onClick={() =>
                  window.open("https://github.com/Kilanvl1", "_blank")
                }
              >
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </div>
  );
}
