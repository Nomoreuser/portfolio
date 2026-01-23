"use client";
import { useEffect, useRef, useState } from "react";

import { useSectionView } from "@/lib/hooks";
import { useTheme } from "next-themes";

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

    // const {theme} = useTheme();
    return (
        <section ref={sectionRef} id="home" className="h-full w-full flex flex-col items-center justify-center">
            <div className="text-center">Hi, I am Gerald A. Carvajal</div>
            <a href="">Mail</a>
            {/* <h3>{theme}</h3> */}
        </section>
    )
}