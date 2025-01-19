"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}) => {
  const [scope, animate] = useAnimate();

  // Split words by line breaks
  const lines = words.split("\n");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div 
      delay={2}
       ref={scope}>
        {lines.map((line, lineIdx) => (
          <div key={`line-${lineIdx}`} className="flex">
            {line.split(" ").map((word, wordIdx) => (
              <motion.span
                key={`word-${lineIdx}-${wordIdx}`}
                className="text-white opacity-0"
                style={{
                  filter: filter ? "blur(10px)" : "none",
                }}
              >
                {word}{"  "}
              </motion.span>
            ))}
          </div>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black leading-snug text-lg tracking-widest">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
