import H1 from "@/components/h1";
import EventsList from "@/components/events-list";
import {Suspense} from "react";
import Loading from "@/app/events/[city]/loading";

import {capitalize} from "@/lib/utils";
import {Metadata} from "next";
import { z } from "zod";

type Props = {
    params: {
        city: string
    }
}

type EventsPageProps = Props &  {
   searchParams: {[key: string]: string | string[] | undefined};
}

export function generateMetadata({ params }: Props): Metadata {
    const city = params.city
    return {
        title: city === "all" ? "All Events" : `Event in ${capitalize(city)}`,
    };
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsPage({ params, searchParams }: EventsPageProps) {
    const city = params.city
    // const page = searchParams.page || 1;

    const parsedPage = pageNumberSchema.safeParse(searchParams.page);
    if (!parsedPage.success) {
        throw new Error("Invalid Page Number");
    }

    return (
        <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
            <H1 className="mb-28">
                {city === 'all' && "All Events"}
                {city !== 'all' && `Events in ${capitalize(city)}`}
            </H1>

            <Suspense key={city + parsedPage.data} fallback={<Loading />}>
                <EventsList city={city} page={parsedPage.data} />
            </Suspense>
        </main>
    )
}
