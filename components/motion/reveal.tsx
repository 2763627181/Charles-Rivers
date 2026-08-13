"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const OFFSET = 22;

function getVariants(direction: Direction): Variants {
  const offset =
    direction === "up"
      ? { y: OFFSET }
      : direction === "down"
        ? { y: -OFFSET }
        : direction === "left"
          ? { x: OFFSET }
          : direction === "right"
            ? { x: -OFFSET }
            : {};

  return {
    hidden: { opacity: 0, ...offset },
    visible: { opacity: 1, x: 0, y: 0 },
  };
}

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.5,
  direction = "up",
  once = true,
  as: Component = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  once?: boolean;
  as?: "div" | "span" | "li";
}) {
  const reduceMotion = useReducedMotion();
  const MotionComponent = motion[Component];

  if (reduceMotion) {
    const Static = Component;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <MotionComponent
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-64px" }}
      variants={getVariants(direction)}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionComponent>
  );
}
