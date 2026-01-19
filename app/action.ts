
'use server';
import {cookies} from 'next/headers';
import { revalidatePath } from 'next/cache';

export async function setTheme(theme: string){

    const cookieStore = await cookies();
    cookieStore.set('theme', theme, {
        path: '/',
        maxAge: 31536000, // 1year
        sameSite: 'lax'
    })
}

export async function delCookiesTheme(){
    const cookieStore = await cookies();
    cookieStore.delete('theme');

    revalidatePath('/');
}