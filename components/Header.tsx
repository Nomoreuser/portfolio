"use client"
import Link from "next/link";
import { motion } from "framer-motion";

import { ThemeToggle } from "./ThemeToggle";
import NavLink from "./NavLinkClick";


export default function Headers(){

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
                    <ThemeToggle />
                </div>

                <div className="absolute bottom-0 left-0 h-px w-full bg-[#8787874e]"></div>
            </div>
        </header>
    )
}