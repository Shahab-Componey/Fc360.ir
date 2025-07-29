"use client";
import React, {useEffect, useLayoutEffect, useState} from "react";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import "swiper/css";
import "swiper/css/pagination";
// import "./Main.scss";
import "swiper/css/autoplay";
import image1 from "../public/images/main/1.jpg";
import image2 from "../public/images/main/2.jpg";
import image3 from "../public/images/main/3.jpg";
import image4 from "../public/images/main/4.jpg";
function reSize(func: any) {
  window.matchMedia("(max-width: 1280px)").matches ? func(2) : func(3);
  window.matchMedia("(max-width: 550px)").matches && func(1);
}

function Main() {
  const [picCount, setCount] = useState();
  const images = [
    {id: 1, src: image1},
    {id: 2, src: image2},
    {id: 3, src: image3},
    {id: 4, src: image4},
  ];
  useGSAP(() => {
    gsap.fromTo(".main", {opacity: 0}, {opacity: 1, duration: 1});
  });

  useLayoutEffect(() => {
    reSize(setCount);
  }, []);

  return (
    <div className=" main bg-Background h-full">
      {picCount && (
        <Swiper
          onResize={() => {
            reSize(setCount);
          }}
          modules={[Autoplay]}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 3500,
          }}
          slidesPerView={picCount}
          spaceBetween={10}
          className="mySwiper h-full "
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <Image
                src={image.src}
                className="object-cover rounded-xl"
                loading="lazy"
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default Main;
