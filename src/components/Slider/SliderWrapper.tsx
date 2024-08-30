
import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props:any) {
    const { onClick } = props;
    return (
      <div
        className="text-black absolute -top-[50px] right-0 bg-gray-100 px-2 py-1 items-center rounded-r-lg hover:bg-gray-200 cursor-pointer"
        onClick={onClick}
      >
        &gt;
        </div>
    );
  }
  
  function SamplePrevArrow(props:any) {
    const { onClick } = props;
    return (
      <div
      className="text-black absolute -top-[50px] right-[26px] flex items-center bg-gray-100 px-2 py-1 rounded-l-lg cursor-pointer hover:bg-gray-200"
        onClick={onClick}
      >
        &lt; 
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