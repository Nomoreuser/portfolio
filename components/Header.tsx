"use client"
import Link from "next/link";
import "../../app/globals.css";
import { motion } from "framer-motion";

import { ThemeToggle } from "./ThemeToggle";
import {navLink} from "@/lib/data";
import { useSection } from "./SectionContext";
import { useState } from "react";
import NavLink from "./NavLinkClick";

export default function Headers({currentTheme} : {currentTheme: string}){

    // const [activeSection, setActiveSection] = useState("Home");
    // const { activeSection ,setActiveSection, setLastClick } = useSection();

    // const [ toggle, setToggle ] = useState("close");



    return (
    <header className="fixed top-0 left-0 w-screen h-15 md:px-20 px-5 animate-header bg-background">
        <div className="flex items-center justify-between relative h-full">
            <div className="text-xl" onClick={()=> window.location.reload()}>Gerald Carvajal</div>

            <div className="flex h-full flex-row-reverse lg:flex-row">
                <NavLink />
                        
                <div className="w-px my-5 mx-5 md:mx-10 bg-foreground"></div>

                {/* <div className="flex items-center gap-3 text-sm"> */}
                    {/* <MoonStar/>
                    <span className="hidden md:block">Light</span> */}
                <ThemeToggle currentTheme={currentTheme}/>
            </div>

            <div className="absolute bottom-0 left-0 h-px w-full bg-[#8787874e]"></div>
        </div>
    </header>
    )
}