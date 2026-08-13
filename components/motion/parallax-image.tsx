"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Wraps an image (typically a fill-mode next/image) with scroll-linked motion.
 *
 * - "parallax": the image drifts vertically as the page scrolls past it, for
 *   large hero-style photos. Self-contained: manages its own overflow clip
 *   and an oversized inner layer so the drift never reveals empty edges.
 * - "reveal-scale": a subtle scale + opacity settle tied to the element's own
 *   scroll position, for grid thumbnails. Positions itself absolute inset-0;
 *   the caller's existing container supplies overflow-hidden + aspect ratio.
 */
export function ParallaxImage({
  children,
  className,
  mode = "reveal-scale",
  strength = 24,
}: {
  children: ReactNode;
  className?: string;
  mode?: "parallax" | "reveal-scale";
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const y = useTransform(scrollYProgress, [0, 1], [strength, -strength]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.55, 1, 1, 0.55]);

  if (mode === "parallax") {
    return (
      <div ref={ref} className={cn("relative overflow-hidden", className)}>
        {reduceMotion ? (
          <div className="absolute inset-0">{children}</div>
        ) : (
          <motion.div style={{ y }} className="absolute inset-[-8%]">
            {children}
          </motion.div>
        )}
      </div>
    );
  }

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} style={{ scale, opacity }} className={className}>
      {children}
    </motion.div>
  );
}
