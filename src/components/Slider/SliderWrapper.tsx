
import React from "react";
import Slider from "react-slick";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

function SampleNextArrow(props:any) {
    const { onClick } = props;
    return (
      <div
        className="text-black absolute -top-[50px] right-0 bg-gray-100 pl-2 pr-3 py-2 items-center 
          rounded-r-full hover:bg-gray-200 cursor-pointer"
        onClick={onClick}
      >
        <GrLinkNext />
        </div>
    );
  }
  
  function SamplePrevArrow(props:any) {
    const { onClick } = props;
    return (
      <div
      className="text-black absolute -top-[50px] right-[35px] flex items-center bg-gray-100 
        px-3 py-2 rounded-l-full cursor-pointer hover:bg-gray-200"
        onClick={onClick}
      >
        <GrLinkPrevious />
        </div>
    );
}

const SliderWrapper = (
    {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>
) => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 2,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }

    return (
        <Slider {...settings}>
            {children}
        </Slider>
    )
}

export default SliderWrapper;