
'use client';

import { MoonStar, Sun } from 'lucide-react';
import { useTheme } from "next-themes";
import { useEffect, useState } from 'react';

export function ThemeToggle(){

    const {theme, setTheme, resolvedTheme} = useTheme();
    const [mount, setMount] = useState(false);
    useEffect(()=>{
        setMount(true)
    },[])

    if(!mount) return null;
    
    return <button onClick={()=> setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} className="flex items-center m-auto gap-2 text-sm">
            {resolvedTheme === 'dark' ? (
                <>
                    <Sun className="size-5"/> <span className="hidden lg:block">Light</span>
                </>
            ) : (
                    <>
                        <MoonStar className="size-5"/> <span className="hidden lg:block">Dark</span>
                    </>
                )
            }
        </button>
    ;
}