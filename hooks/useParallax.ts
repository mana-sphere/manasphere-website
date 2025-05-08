import { useRef, RefObject } from "react";
import { useScroll, useTransform, MotionValue } from "motion/react";

// Define the specific offset values you're using
type ScrollOffset = ["start end" | "end end", "start end" | "end end"];

// Define the type for the transform values array
type TransformValues = [number, number];

interface UseParallaxReturn {
  ref: RefObject<HTMLElement | null>;
  y: MotionValue<number>;
}

export const useParallax = (
  offset: ScrollOffset = ["start end", "end end"],
  transformValues: TransformValues = [100, 0]
): UseParallaxReturn => {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  const y = useTransform(scrollYProgress, [0, 1], transformValues);

  return { ref, y };
};