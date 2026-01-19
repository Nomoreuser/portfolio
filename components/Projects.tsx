"use client";
import { useRef } from "react";

import { useSectionView } from "@/lib/hooks"

export default function Projects(){

    const sectionRef = useRef<HTMLElement>(null);
      
      // Pass the ref and the ID "contact" to the hook
    useSectionView(sectionRef, "Projects", 0.5);

    return (
        <section ref={sectionRef} id="projects" className="h-full">

        </section>
    )
}