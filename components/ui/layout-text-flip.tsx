"use client";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type LayoutTextFlipProps = {
  text: string;
  words: string[];
  duration?: number;
  className?: string;
};

export function LayoutTextFlip({
  text,
  words,
  duration = 3000,
  className,
}: LayoutTextFlipProps) {
  const safeWords = useMemo(() => (Array.isArray(words) && words.length > 0 ? words : [""]), [words]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (safeWords.length <= 1) return;
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % safeWords.length);
    }, Math.max(800, duration));
    return () => clearInterval(id);
  }, [safeWords.length, duration]);

  return (
    <div className={cn("flex items-baseline gap-2", className)}>
      <span>{text}</span>
      <span className="relative inline-block min-w-[6ch]">
        <span
          key={idx}
          className={
            "absolute left-0 top-0 will-change-transform transition-opacity duration-500 ease-out opacity-100"
          }
        >
          {safeWords[idx]}
        </span>
      </span>
    </div>
  );
}


