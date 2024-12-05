import { Carousel, Typography } from "@material-tailwind/react";
import { HorizontalCard } from "../cards/HorizontalCard";
import MiniCard from "../cards/MiniCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { useState } from "react";
import MicroCard from "../cards/MicroCard";

export default function MyCarousel() {
  const [active, setActive] = useState(0)
  
  const toggleActive = (index) => {
    setActive(index)
  }

  return (
    <>
      <div className="overflow-hidden my-6 w-screen">
        <Swiper
          spaceBetween={0}
          slidesPerView="auto"
          centeredSlides={false}
          loop={true}
          freeMode={true}
          speed={222222222222222} // Velocità di scorrimento
          autoplay={{
            delay: 2,
            disableOnInteraction: false,
          }}
          modules={[]}
        >
          {/* Ripeti l'immagine panoramica per creare l'effetto continuo */}
          {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index} style={{ width: "auto" }} className="" onClick={() => toggleActive(index)}>
              <HorizontalCard classe={active === index ? "shadow-sm shadow-black grower hidden md:flex" : "smaller hidden md:flex shadow-xs"} />
              <MicroCard classe={active === index ? "shadow-sm md:hidden shadow-black grower hide" : "smaller md:hidden mx-5 shadow-xs hide"}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
