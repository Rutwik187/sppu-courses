"use client";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="max-w-6xl mx-auto ">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <SwiperSlide key={item}>
            <div className="text-start border-none shadow-none">
              <CardHeader className="flex flex-row gap-2 items-center translate-y-1/3">
                <Image
                  src="/testimonial1.png"
                  alt="testimonial"
                  width={100}
                  height={100}
                />
                <div className="flex flex-col mb-2">
                  <p className="text-base font-semibold">Shri Ramesh Bais</p>
                  <p className="text-sm">Chancellor</p>
                </div>
              </CardHeader>
              <CardContent className="bg-secondary rounded-md px-8 py-8 shadow-md">
                The Governor as Chancellor plays a very constructive role in the
                administration of the Universities. The Chancellor being the
                Governor can help to insulate the Universities from unnecessary
                governmental interference and safeguard their autonomy.
              </CardContent>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
