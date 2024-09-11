
import React from 'react';
import HomeBanner from '@/app/_landingPage/_component/HomeBanner';
import OffersAndStates from "@/app/_landingPage/_component/OffersAndStates";
import Footer from "@/app/_landingPage/_component/footerSection/Footer";

const LandingPage:React.FC = () => {
    return (
        <div className='w-full bg-[#f0f0f0]'>
            <HomeBanner />
            <OffersAndStates />
            <Footer />
        </div>
    )
}

export default LandingPage;