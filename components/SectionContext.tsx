"use client";
import { ReactNode, createContext, useState, useContext, Dispatch, SetStateAction } from "react";

interface SectionContextType{
    activeSection: string;
    setActiveSection: (val:string)=>void;
    lastClick: number;
    setLastClick: Dispatch<SetStateAction<number>>;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export function SectionContent({children}:{children: ReactNode}){
    const [activeSection, setActiveSection] = useState("Home");
    const [lastClick, setLastClick] = useState(0);

    return (
        <SectionContext.Provider value={{activeSection, setActiveSection, lastClick, setLastClick}}>
            {children}
        </SectionContext.Provider>
    )
}

export function useSection(){
    const context = useContext(SectionContext);

    if (!context) throw new Error("useSection must be used within SectionProvider");
    return context;
}