"use client"
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import "../../app/globals.css";
import { motion } from "framer-motion";
import {Menu, X} from "lucide-react";

import {navLink} from "@/lib/data";
import { useSection } from "./SectionContext";

export default function NavLink(){

    const { activeSection ,setActiveSection, setLastClick } = useSection();

    const [ toggle, setToggle ] = useState(false);

    useEffect(()=>{
        const handleState = ()=>{
            if(window.innerWidth < 1024){
                setToggle(false);
            }
        }

        window.addEventListener("resize", handleState);

        window.addEventListener("click", (e)=> {
            e.stopPropagation();
            setToggle(false)
        });

        return ()=> window.removeEventListener("resize", handleState);
    },[])
         
    return (
        <nav className="h-full flex items-center ">
            <Menu className="lg:hidden block" onClick={(e)=> {toggle ? setToggle(false):setToggle(true); e.stopPropagation()}} />

            <div className={` border-l border-[#8787874e] lg:border-none absolute z-100 top-0 lg:relative h-screen w-1/2 lg:h-fit bg-background lg:right-0 lg:bg-transparent transition-transform ${toggle ? "-right-5 sm:-right-20": "-right-300"}`}>
                <X className="lg:hidden block right-0 mt-4 mb-7 ml-5" onClick={()=>setToggle(false)}/>
                <ul className="flex items-center flex-col gap-3 h-full lg:flex-row lg:gap-0">
                    {
                        navLink.map(link => (
                            <li key={link.name} className="relative px-5">
                                <Link href={link.hash} className={`${link.name === activeSection ? "text-foreground":"text-gray-600"}`}
                                onClick={()=> {
                                    setActiveSection(link.name)
                                    setLastClick(Date.now())
                                }} 
                                >
                                    {link.name}

                                    {link.name === activeSection && (
                                        <motion.span className="absolute inset-0 rounded-full flex justify-between"
                                        layoutId="active" transition={{type: 'spring', stiffness: 380, damping: 30}}
                                        >
                                            <span className="-mr-10">{"<"}</span>
                                            <span>{"/>"}</span>
                                        </motion.span>
                                    )}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            
        </nav>
    )
}