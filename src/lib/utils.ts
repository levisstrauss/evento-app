import {twMerge} from "tailwind-merge";
import clsx, {ClassValue} from "clsx";
import prisma from "@/lib/db";
import {underline} from "next/dist/lib/picocolors";
import {notFound} from "next/navigation";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function capitalize(string: string) {
   return string.charAt(0).toUpperCase() + string.slice(1);
}


export async function getEvents(city: string){
    const events = await prisma.eventoEvent.findMany({
        where: {
            city: city === "all" ? undefined : capitalize(city),
        },
        orderBy: {
            date: "asc",
        }
    });
    return events;
}


export async function getEvent(slug: string){
    const event = await prisma.eventoEvent.findUnique({
        where: {
            slug: slug,
        },
    });

    if (!event) {
        return notFound();
    }
    return event;
}





// export async function sleep(ms: number): Promise<void> {
//     return new Promise(resolve => {
//         setTimeout(resolve, ms);
//     });
// }
