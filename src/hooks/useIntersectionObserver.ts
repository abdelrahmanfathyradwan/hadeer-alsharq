"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>(
  options: UseIntersectionObserverOptions = {}
): [RefObject<T | null>, boolean] {
  const { threshold = 0.15, rootMargin = "0px", triggerOnce = true } = options;
  const ref = useRef<T | null>(null);
  // Start as true so SSR HTML shows visible content (SEO-critical)
  const [isVisible, setIsVisible] = useState(true);
  const [hasSetup, setHasSetup] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // On mount, hide elements that haven't been scrolled into view yet
    // This enables the scroll-reveal animation while keeping SSR content visible
    if (!hasSetup) {
      setIsVisible(false);
      setHasSetup(true);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, hasSetup]);

  return [ref, isVisible];
}
