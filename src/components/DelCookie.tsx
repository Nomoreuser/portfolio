
'use client';
import { delCookiesTheme } from "../app/action";

export default function DelCookie({theme}: {theme: string}){

    return (
        <div>
            <h1>This: {theme}</h1>
            <br/>
            <button onClick={()=> delCookiesTheme()}>Clear Cookies</button>
        </div>
    )
}