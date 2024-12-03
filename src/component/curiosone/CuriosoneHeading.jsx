import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { ExCard } from "../cards/ExCard";
import ButtonMyP from "../buttons/ButtonMyP";
import { Carousel } from "flowbite-react";
import AliceCarousel from "react-alice-carousel";

export default function CuriosoneHeading() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
  <ExCard key={1}/>,
];
  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-evenly my-5 px-5 w-screen">
        <div className="min-w-0 flex-1 flex-nowrap">
          <div className="flex items-center justify-between sm:me-6 lg:me-0">
            <h2 className="text-2xl/7 font-bold text-start text-txt sm:truncate sm:text-3xl sm:tracking-tight">
              Regno
            </h2>
            <ButtonMyP txt={"mostra altro"} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-screen gap-4 nav:gap-2">
        <div className="py-2 px-8 lg:px-5 2xl:px-8 rounded-xl">
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
                spaceBetween: 380,
              },
              826: {
                spaceBetween: 222,
              },
              900: {
                spaceBetween: 170,
              },
              1018: {
                spaceBetween: 280,
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
        <div className="py-2 px-8 lg:px-5 2xl:px-8 rounded-xl">
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
                spaceBetween: 380,
              },
              826: {
                spaceBetween: 222,
              },
              900: {
                spaceBetween: 170,
              },
              1018: {
                spaceBetween: 280,
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

      <AliceCarousel
       mouseTracking
       items={items}
       responsive={responsive}
       controlsStrategy="alternate"/>
    </>
  );
}
