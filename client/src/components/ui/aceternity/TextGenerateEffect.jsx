import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import { cn } from "../../../lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.4
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = (words || "").split(" ");

  useEffect(() => {
    if (scope.current) {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration || 0.4,
          delay: (i) => i * 0.05,
        }
      );
    }
  }, [words, animate, filter, duration, scope]);

  return (
    <div className={cn("font-serif", className)}>
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="opacity-0 inline-block mr-1.5"
            style={{
              filter: filter ? "blur(6px)" : "none",
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default TextGenerateEffect;
