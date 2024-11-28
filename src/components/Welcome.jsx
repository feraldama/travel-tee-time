import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import image1 from "../assets/images/cancha.jpg";
import image2 from "../assets/images/cancha2.jpg";
import image3 from "../assets/images/cancha3.jpg";

export default function Welcome() {
  const slides = [
    {
      image: image1,
      title: "Viajes de Golf Exclusivos en Costa Brava, España",
      description:
        "Descubre los mejores circuitos de golf en Costa Brava con paquetes exclusivos que combinan deporte, lujo y paisajes mediterráneos.",
    },
    {
      image: image2,
      title: "Los Mejores Circuitos de Golf de Europa en Costa Brava",
      description:
        "Juega en circuitos de clase mundial en Costa Brava, disfruta de vistas impresionantes y vive una experiencia inolvidable.",
    },
    {
      image: image3,
      title: "Experiencias de Golf Personalizadas en Costa Brava",
      description:
        "Deja en nuestras manos cada detalle de tu viaje. Circuitos exclusivos, alojamientos de lujo y momentos diseñados para ti.",
    },
  ];

  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 6000 }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              className="w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="mx-8 px-5 py-7 xl:px-10 xl:py-20 text-center bg-[#222222] bg-opacity-40 rounded-xl backdrop-blur-sm text-balance">
                <p className="font-bold font-roboto text-white text-[32px] md:text-5xl lg:text-5xl leading-tight mb-3">
                  {slide.title}
                </p>
                <p className="font-roboto text-white text-[20px] md:text-2xl lg:text-3xl leading-tight mb-3">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
