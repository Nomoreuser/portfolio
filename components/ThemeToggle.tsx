
'use client';

import { useRouter } from "next/navigation"
import { setTheme } from '@/app/action';

import { MoonStar, Sun } from 'lucide-react'

export function ThemeToggle({currentTheme}: {currentTheme: string}){

    const router = useRouter();

    const toggle = async ()=>{

        const nt = currentTheme == 'dark' ? 'light' : 'dark';
        await setTheme(nt);
        router.refresh();
    }

    return <button onClick={toggle} className="flex items-center m-auto gap-2 text-sm">
            {currentTheme == 'dark' ? (
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