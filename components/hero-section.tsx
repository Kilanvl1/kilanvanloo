"use client";

import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Youtube } from "lucide-react";
import { motion } from "motion/react";

// Mouse Scroll Indicator Component
function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 transform -translate-x-4/5 flex-col items-center space-y-2 hidden md:flex"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
    >
      <motion.div
        className="text-sm text-muted-foreground font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.0 }}
      >
        Scroll down
      </motion.div>
      <motion.div
        className="w-6 h-10 border-2 border-muted-foreground rounded-full relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.2, ease: "backOut" }}
      >
        <motion.div
          className="w-1 h-3 bg-muted-foreground rounded-full absolute top-2 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <div className="min-h-[calc(100vh-200px)] bg-gradient-to-br from-background via-background to-muted/20 border border-b flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-16 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Background circle with gradient */}
              <motion.div
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-4 shadow-2xl"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1.0, delay: 0.2, ease: "backOut" }}
              >
                <motion.div
                  className="w-full h-full rounded-full overflow-hidden bg-background/10 backdrop-blur-sm border border-primary/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  {/* Profile Image Placeholder - Replace with your actual image */}
                  <motion.div
                    className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                  >
                    <Avatar className="w-full h-full">
                      <AvatarImage src="/kilan-avatar.jpg" />
                      <AvatarFallback>K</AvatarFallback>
                    </Avatar>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary/20 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  y: [0, -10, 0],
                }}
                transition={{
                  scale: { duration: 0.6, delay: 1.4, ease: "backOut" },
                  opacity: { duration: 0.6, delay: 1.4 },
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    delay: 2,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{ scale: 1.2 }}
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="space-y-8">
              <motion.div
                className="flex gap-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8, ease: "backOut" }}
                >
                  <Badge>
                    <motion.div
                      className="w-2 h-2 bg-accent rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <span className="text-sm font-medium">
                      Full-stack Developer
                    </span>
                  </Badge>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.0, ease: "backOut" }}
                >
                  <Badge>
                    <motion.div
                      className="w-2 h-2 bg-accent rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                    />
                    <span className="text-sm font-medium">
                      AI-automationist
                    </span>
                  </Badge>
                </motion.div>
              </motion.div>
              <motion.h1
                className="text-4xl lg:text-5xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              >
                Hi, I&apos;m{" "}
                <motion.span
                  className="text-primary"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.6, ease: "backOut" }}
                >
                  Kilan
                </motion.span>
                . Nice to meet you, let me introduce myself.
              </motion.h1>

              <motion.p
                className="text-lg text-muted-foreground leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.9, ease: "easeOut" }}
              >
                I&apos;m a passionate full-stack developer that enjoys turning
                ideas into businesses. I have spent 2 years building web/apps
                for both myself, and for others.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 2.0, ease: "easeOut" }}
            >
              <Separator className="my-8" />
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.2, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 2.4, ease: "backOut" }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] transition-all duration-300"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/kilanvanloo",
                      "_blank"
                    )
                  }
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 2.6, ease: "backOut" }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition-all duration-300"
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/@Kilanvanloo",
                      "_blank"
                    )
                  }
                >
                  <Youtube className="h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 2.8, ease: "backOut" }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
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
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </div>
  );
}
