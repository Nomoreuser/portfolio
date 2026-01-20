"use client";
import { useEffect, useRef, useState } from "react";

import { useSectionView } from "@/lib/hooks";

export default function Home(){

    const sectionRef = useRef<HTMLElement>(null);
      
    // Pass the ref and the ID "contact" to the hook
    useSectionView(sectionRef, "Home", 0.5);

    const trys = "Home";
    const [sc, setsc ] = useState(0);
    useEffect(()=>{

        window.addEventListener("resize", ()=> {setsc(window.innerWidth)});

        return ()=> window.removeEventListener("resize", ()=> {setsc(window.innerWidth)})
    },[])

    return (
        <section ref={sectionRef} id="home" className="h-full flex items-center">
            <div className="text-center m-auto">Hi, I am Gerald A. Carvajal</div>
        </section>
    )
}