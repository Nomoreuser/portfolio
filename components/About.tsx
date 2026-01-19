"use client";
import { useRef } from "react";

import { useSectionView } from "@/lib/hooks"

export default function About(){

    const sectionRef = useRef<HTMLElement>(null);
      
    // Pass the ref and the ID "contact" to the hook
    useSectionView(sectionRef, "About", 0.5);

    return (
        <section ref={sectionRef} id="about" className="h-full">

        </section>
    )
}