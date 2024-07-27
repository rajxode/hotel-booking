
import React from 'react';
import HomeBanner from '@/app/_landingPage/_component/HomeBanner';
import HotelsListAndStates from "@/app/_landingPage/_component/HotelsListAndStates";

function LandingPage() {
    return (
        <div className='w-full'>
            <HomeBanner />
            <HotelsListAndStates />
        </div>
    )
}

export default LandingPage;