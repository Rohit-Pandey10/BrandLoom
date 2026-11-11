import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";

export function BackgroundLines({
  children,
  className,
  svgOptions,
}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        className
      )}
    >
      <SVGContainer className="opacity-60" svgOptions={svgOptions} />
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}

const SVGContainer = ({ className }) => {
  // Graceful architectural curve paths
  const paths = [
    "M-100 80 Q 300 240 700 80 T 1500 120",
    "M-80 160 Q 320 320 720 160 T 1520 200",
    "M-60 240 Q 340 400 740 240 T 1540 280",
    "M-40 320 Q 360 480 760 320 T 1560 360",
    "M-20 400 Q 380 560 780 400 T 1580 440",
  ];

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]",
        className
      )}
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="warmLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C65A3A" stopOpacity="0.08" />
            <stop offset="35%" stopColor="#DCC8B1" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#C65A3A" stopOpacity="0.30" />
            <stop offset="100%" stopColor="#8A8F6A" stopOpacity="0.10" />
          </linearGradient>
        </defs>

        {paths.map((d, index) => (
          <motion.path
            key={index}
            d={d}
            stroke="url(#warmLineGradient)"
            strokeWidth={1.5}
            strokeDasharray="4 8"
            initial={{ pathOffset: 0 }}
            animate={{
              pathOffset: [0, 1],
            }}
            transition={{
              duration: 25 + index * 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default BackgroundLines;
