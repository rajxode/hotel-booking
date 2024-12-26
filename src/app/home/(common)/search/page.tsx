
import React from "react";
import TopNavWrapper from "@/components/TopNavbar/TopNavWrapper";
import { Suspense } from "react";
import HotelSearchComponent from "@/components/HotelSearch/HotelSearch";

const SearchPage = () => {
    return (
        <div className="w-full relative min-h-screen">
            <TopNavWrapper />
            <Suspense>
                <HotelSearchComponent />
            </Suspense>
        </div>
    )
}

export default SearchPage;