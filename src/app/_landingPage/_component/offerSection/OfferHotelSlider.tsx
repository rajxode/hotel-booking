
"use client";
import React from "react";
import SliderWrapper from '@/components/Slider/SliderWrapper';
import OfferHotelCard from "./OfferHotelCard";
import pattayaImage from "/public/images/pattaya.jpg";
import phuketImage from "/public/images/phuket.jpg";
import baliImage from "/public/images/bali.jpg";
import maldivesImage from "/public/images/maldives.jpg";
import othersImage from "/public/images/others.jpg";
import goaImage from "/public/images/goa.jpg";

const cardArray = [
    [
        {image:pattayaImage, heading:"PRICE DROP ALERT:", des:"Up to 25% OFF* On Best Western Hotels"},
        {image: baliImage, heading:"Presenting MMT Luxe Selections:", des:"Ultra-indulgent stays with handpicked services, for your rare taste."}
    ],
    [
        {image:phuketImage, heading:"Unwind in Modern & Comfortable Stays!", des:"Enjoy Up to 45% OFF* on WelcomeHeritage Hotels."},
        {image: maldivesImage, heading:"Grab FLAT 15% OFF* at Oyo Hotels", des:"on select properties!"}
    ],
    [
        {image:othersImage, heading:"Travel Plans Can Change. We Get It!", des:"Book hotels with no payment now and pay later."},
        {image: goaImage, heading:"#SUPERSAVER OFFER:FLAT 10% OFF*", des:"on domestic flights & hotels"},
    ],
    [
        {image:pattayaImage, heading:"Worry-Free Stays Asured at TOP-RATED Affordable Price", des:"Or get 100% Money Back. Book now @ Up to 30% OFF*"},
        {image: baliImage, heading:"INTRODUCING Hourly Stays: Stays-by-the-Hour That Can something big text", des:"With flexible check-ins for 3,6 or 9 hours!"},
    ],
    [
        {image:phuketImage, heading:"SPECIALLY CURATED FOR YOU:", des:"International Hotels Loved by Indians for your comfortable travel experience"},
        {image: maldivesImage, heading:"AVAIL: Up to 15% OFF* + Interest-free EMI on", des:"domestic & international flights + stays."},
    ],
    [
        {image:othersImage, heading:"FOR YOUR INTERNATIONAL TRIPS:", des:"Grab HUGE SAVINGS on International Hotels"},
        {image: goaImage, heading:"CHOOSE MAGICAL STAYS IN WITH:", des:"Up to 30% OFF* on Hotels or get BIG savings & cashback."},
    ],
]

const OfferHotelSlider:React.FC = () => {
    return (
        <div>
            <div className="flex jusitfy-center items-center w-full">
                <div className="w-full mt-2">
                <SliderWrapper>
                    {
                        cardArray.map((cardSubArr,i) => (
                            <div key={i}>
                                <OfferHotelCard imageSrc={cardSubArr[0].image} cardHeading={cardSubArr[0].heading} cardDescri={cardSubArr[0].des} />
                                <OfferHotelCard imageSrc={cardSubArr[1].image} cardHeading={cardSubArr[1].heading} cardDescri={cardSubArr[1].des} />
                            </div>
                        ))
                    }
                </SliderWrapper>
                </div>
            </div>
        </div>
    )
}

export default OfferHotelSlider;