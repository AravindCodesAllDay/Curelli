import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselCrossfade() {
  const [carouselLap, setCarouselLap] = useState([]);
  const [carouselMobile, setCarouselMobile] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API}carousel`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Add any additional headers if needed
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const products = await response.json();

        const lapItems = products.filter((item) => !item.mobile);
        const mobileItems = products.filter((item) => item.mobile);

        setCarouselLap(lapItems);
        setCarouselMobile(mobileItems);
      } catch (error) {
        console.error("Fetch error:", error);
        // Handle errors here
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures it only runs once on mount

  // Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center items-center -mt-16 space-x-2">{dots}</ul>
      </div>
    ),
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <>
      <div className="hidden lg:block xl:block 2xl:block">
        <Slider {...settings}>
          {carouselLap.map((item, index) => (
            <div key={item._id}>
              <img
                src={`${import.meta.env.VITE_API}carouselImg/${item.photo}`}
                className="block w-full"
                alt="..."
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="lg:hidden xl:hidden 2xl:hidden">
        <Slider {...settings}>
          {carouselMobile.map((item, index) => (
            <div key={item._id}>
              <img
                src={`${import.meta.env.VITE_API}carouselImg/${item.photo}`}
                className="block w-full"
                alt="..."
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
