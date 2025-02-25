import React from 'react'
import Skeleton from "@/components/skeleton";

export default function Loading() {
    return (
        <div className="flex flex-col items-center gap-y-4 pt-28">
            <Skeleton className="h0=-4 w-[550px]"/>
            <Skeleton className="h0=-4 w-[400px]"/>
            <Skeleton className="h0=-4 w-[430px]"/>
        </div>
    )
}
