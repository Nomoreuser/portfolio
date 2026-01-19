"use client";
import { useEffect, RefObject } from "react";
import { useSection } from "@/src/components/SectionContext";

export function useSectionView(
  ref: RefObject<HTMLElement | null>, // Changed to HTMLElement | null
  sectionId: string, 
  threshold = 0.7,
) {
  const { setActiveSection, lastClick } = useSection();

  useEffect(() => {
    // Safety check: ensure the ref exists before observing
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && Date.now() - lastClick > 1000) {
          setActiveSection(sectionId);
          // window.location.href = `#${sectionId.slice(0,1).toLocaleLowerCase() + sectionId.slice(1)}`; this will refresh so when it change it refresh causing little problem (scroll)
          window.history.pushState(null,"",`#${sectionId.charAt(0).toLocaleLowerCase() + sectionId.slice(1)}`); //just change the url no refresh
          
          // if(sectionId == "Home") {
          //   window.history.pushState(null, "", "/");
          // }else{
          //   window.history.pushState(null, "", `#${sectionId.charAt(0) + sectionId.slice(1)}`);
          // }
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, sectionId, setActiveSection, threshold, lastClick]);
}
