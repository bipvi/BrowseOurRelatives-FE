import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { ExCard } from "../cards/ExCard";
import ButtonMyP from "../buttons/ButtonMyP";

export default function CuriosoneHeading() {
  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-evenly my-5 px-5 w-screen">
        <div className="min-w-0 flex-1 flex-nowrap">
          <div className="flex items-center justify-between md: pe-4">
            <h2 className="text-2xl/7 font-bold text-start text-txt sm:truncate sm:text-3xl sm:tracking-tight">
              Regno
            </h2>
            <ButtonMyP txt={"mostra altro"} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-almost-screen gap-2">
        <div className="py-2 px-4 sm:px-10 lg:px-2 2xl:px-8 rounded-xl">
          <Swiper
            grabCursor={true}
            pagination={{
              clickable: false,
            }}
            breakpoints={{
              0: {
                spaceBetween: 400,
              },
              320: {
                spaceBetween: 285,
              },
              600: {
                spaceBetween: 150,
              },
              760: {
                spaceBetween: 444,
              },
              800: {
                spaceBetween: 300,
              },
              900: {
                spaceBetween: 170,
              },
              1018: {
                spaceBetween: 333,
              },
              1200: {
                spaceBetween: 222,
              },
              1300: {
                spaceBetween: 160,
              },
              1400: {
                spaceBetween: 100,
              },
              1600: {
                spaceBetween: 70,
              },
              1740: {
                spaceBetween: 10,
              },
            }}
            slidesPerView={2}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <ExCard />
            </SwiperSlide>
            <SwiperSlide>
              <ExCard />
            </SwiperSlide>
            <SwiperSlide>
              <ExCard />
            </SwiperSlide>
            <SwiperSlide>
              <ExCard />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="py-2 px-4 sm:px-10 lg:px-2 2xl:px-8 rounded-xl">
          <Swiper
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                spaceBetween: 285,
              },
              600: {
                spaceBetween: 150,
              },
              760: {
                spaceBetween: 444,
              },
              800: {
                spaceBetween: 300,
              },
              900: {
                spaceBetween: 170,
              },
              1018: {
                spaceBetween: 333,
              },
              1200: {
                spaceBetween: 222,
              },
              1300: {
                spaceBetween: 160,
              },
              1400: {
                spaceBetween: 100,
              },
              1600: {
                spaceBetween: 70,
              },
              1740: {
                spaceBetween: 10,
              },
            }}
            slidesPerView={2}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <ExCard />
            </SwiperSlide>
            <SwiperSlide>
              <ExCard />
            </SwiperSlide>
            <SwiperSlide>
              <ExCard />
            </SwiperSlide>
            <SwiperSlide>
              <ExCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
