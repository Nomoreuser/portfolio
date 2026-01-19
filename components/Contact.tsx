"use client";
import { useRef } from "react";

import { useSectionView } from "@/lib/hooks"


export default function Contact(){

    const sectionRef = useRef<HTMLElement>(null);
  
  // Pass the ref and the ID "contact" to the hook
    useSectionView(sectionRef, "Contact", 0.5);

    return (
        <section ref={sectionRef} id="contact" className="h-full bg-amber-300">

        </section>
    )
}