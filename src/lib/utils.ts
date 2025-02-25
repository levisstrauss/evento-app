import {twMerge} from "tailwind-merge";
import clsx, {ClassValue} from "clsx";
import prisma from "@/lib/db";
import {notFound} from "next/navigation";
import {unstable_cache} from "next/cache";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function capitalize(string: string) {
   return string.charAt(0).toUpperCase() + string.slice(1);
}


export async function sleep(ms: number): Promise<void> {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}
