
import TopNavbar from "@/components/TopNavbar/TopNavbar";
import { Suspense } from 'react';
import HotelSearchComponent from '@/components/HotelSearch/HotelSearch';

export default function HotelSearchPage() {
    return (
        <div className="w-full relative min-h-screen">
            <TopNavbar parent="" />
            <Suspense>
                <HotelSearchComponent />
            </Suspense>
        </div>
    )
}