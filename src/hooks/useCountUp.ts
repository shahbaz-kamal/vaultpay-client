// useCountUp.ts
import { useEffect } from "react";
import gsap from "gsap";

interface CountUpOptions {
  duration?: number;
  ease?: string;
}

export const useCountUp = (
    elements: (HTMLElement | SVGElement | null) | (HTMLElement | SVGElement | null)[],
    values: number | number[],
    options: CountUpOptions = {}
  ) => {
    const { duration = 1.5, ease = "power1.inOut" } = options;
  
    useEffect(() => {
      const elems = Array.isArray(elements) ? elements : [elements];
      const vals = Array.isArray(values) ? values : [values];
  
      elems.forEach((el, index) => {
        if (!el) return;
  
        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: vals[index],
            duration,
            ease,
            snap: { innerText: 1 },
          }
        );
      });
    }, [elements, values, duration, ease]);
  };
  
