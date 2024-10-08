
import React from 'react';
import TopNavbar from '@/components/TopNavbar/TopNavbar';
import BookingCard from '@/app/_landingPage/_component/BookingCard';
import NewReleaseCard from './newRelease/NewReleaseCard';

const HomeBanner:React.FC = () => {

    return (
        <div 
            className='w-full h-[65vh] bg-[url("/images/hero.jpg")] bg-cover bg-center
                flex justify-center items-center relative'
        >
            <TopNavbar />
            <BookingCard />
            <NewReleaseCard />
        </div>
    )
}

export default HomeBanner;