import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useTheme } from "@/hooks/useTheme";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const sunRef = useRef<SVGSVGElement>(null);
  const moonRef = useRef<SVGSVGElement>(null);
  useEffect(() => {
    if (theme === "dark") {
      // Animate Sun out
      gsap.to(sunRef.current, {
        scale: 0,
        rotate: -360,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      });
      // Animate Moon in
      gsap.to(moonRef.current, {
        scale: 1,
        rotate: 360,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
      });
    } else {
      // Animate Moon out
      gsap.to(moonRef.current, {
        scale: 0,
        rotate: -360,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      });
      // Animate Sun in
      gsap.to(sunRef.current, {
        scale: 1,
        rotate: 360,
        opacity: 1,
        duration: 0,
        delay: 1,
        ease: "back.out(1.7)",
      });
    }
  }, [theme]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="cursor-pointer">
          <Sun ref={sunRef} className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon ref={moonRef} className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
