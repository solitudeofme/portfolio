import { useState, useEffect } from "react";
import Lightning from "../../Backgrounds/Lightning/Lightning";
import Introdunction from "./Introduction";

export default function HomeSection() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 640);
    handleResize(); // Run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-dvh relative">
      <Lightning
        hue={336}
        xOffset={isSmallScreen ? 1.4 : -1}
        speed={isSmallScreen ? 1 : 1}
        intensity={isSmallScreen ? 1.3 : 1.5}
        size={3}
      />
      <Introdunction />
    </div>
  );
}
