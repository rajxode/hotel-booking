
import React from 'react';
import HomeBanner from '@/app/_landingPage/_component/HomeBanner';
import OffersAndStates from "@/app/_landingPage/_component/OffersAndStates";

const LandingPage:React.FC = () => {
    return (
        <div className='w-full'>
            <HomeBanner />
            <OffersAndStates />
        </div>
    )
}

export default LandingPage;