"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full w-10 h-10 transition-colors hover:bg-accent"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 90 : 0, scale: theme === "dark" ? 0 : 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="absolute"
      >
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : -90, scale: theme === "dark" ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
