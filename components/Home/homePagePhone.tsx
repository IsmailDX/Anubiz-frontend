import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const HomePagePhone = () => {
  return (
    <div className="sm:hidden w-full p-5 select-none">
      <h1 className="text-3xl py-5">Discounts</h1>
      <div className="flex flex-col items-start">
        <div className="w-full h-full gap-2 p-3 flex flex-col">
          <div>
            <h2 className="text-2xl font-bold text-red-500">
              Amazing discounts
            </h2>
            <h3 className="pb-2">
              <span className="bg-yellow-300 rounded-3xl px-2 text-sm mr-2">
                Choice
              </span>
              Free shipping - 10 day delivery
            </h3>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode]}
            className="mySwiper w-full"
          >
            <SwiperSlide>
              <div className="h-fit max-w-60 overflow-hidden rounded-2xl flex flex-col items-center">
                <Image
                  src="https://m.media-amazon.com/images/I/41o833IUbjL._AC_.jpg"
                  alt="img2"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain rounded-2xl"
                />
                <p className="text-red-500 pt-2 text-base">
                  AED 3
                  <span className="text-gray-400 font-[AmazonEmber-Light] rounded-md px-1 ml-1 line-through">
                    9.38
                  </span>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-fit max-w-60 overflow-hidden rounded-2xl flex flex-col items-center">
                <Image
                  src="https://m.media-amazon.com/images/I/41o833IUbjL._AC_.jpg"
                  alt="img2"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain rounded-2xl"
                />
                <p className="text-red-500 pt-2 text-base">
                  AED 3
                  <span className="text-gray-400 font-[AmazonEmber-Light] rounded-md px-1 ml-1 line-through">
                    9.38
                  </span>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-fit max-w-60 overflow-hidden rounded-2xl flex flex-col items-center">
                <Image
                  src="https://m.media-amazon.com/images/I/41o833IUbjL._AC_.jpg"
                  alt="img2"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain rounded-2xl"
                />
                <p className="text-red-500 pt-2 text-base">
                  AED 3
                  <span className="text-gray-400 font-[AmazonEmber-Light] rounded-md px-1 ml-1 line-through">
                    9.38
                  </span>
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-full h-full gap-2 p-3 flex flex-col">
          <div>
            <h2 className="font-bold text-2xl text-red-500 ">
              Great deals and offers!
            </h2>
            <h3 className="pb-2">
              <span className="bg-yellow-300 rounded-3xl px-2 text-sm mr-2">
                Choice
              </span>
              Free shipping - 10 day delivery
            </h3>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode]}
            className="mySwiper w-full"
          >
            <SwiperSlide>
              <div className="h-fit max-w-60 overflow-hidden rounded-2xl flex flex-col items-center">
                <Image
                  src="https://m.media-amazon.com/images/I/41o833IUbjL._AC_.jpg"
                  alt="img2"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain rounded-2xl"
                />
                <p className="text-red-500 pt-2 text-base">
                  AED 3
                  <span className="text-gray-400 font-[AmazonEmber-Light] rounded-md px-1 ml-1 line-through">
                    9.38
                  </span>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-fit max-w-60 overflow-hidden rounded-2xl flex flex-col items-center">
                <Image
                  src="https://m.media-amazon.com/images/I/41o833IUbjL._AC_.jpg"
                  alt="img2"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain rounded-2xl"
                />
                <p className="text-red-500 pt-2 text-base">
                  AED 3
                  <span className="text-gray-400 font-[AmazonEmber-Light] rounded-md px-1 ml-1 line-through">
                    9.38
                  </span>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-fit max-w-60 overflow-hidden rounded-2xl flex flex-col items-center">
                <Image
                  src="https://m.media-amazon.com/images/I/41o833IUbjL._AC_.jpg"
                  alt="img2"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain rounded-2xl"
                />
                <p className="text-red-500 pt-2 text-base">
                  AED 3
                  <span className="text-gray-400 font-[AmazonEmber-Light] rounded-md px-1 ml-1 line-through">
                    9.38
                  </span>
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-full h-full gap-2 p-3 flex flex-col">
          <div>
            <h2 className="text-2xl font-bold text-red-500">Free shipping</h2>
            <h3 className="pb-2">
              <span className="bg-yellow-300 rounded-3xl px-2 text-sm mr-2">
                Choice
              </span>
              Selected items
            </h3>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode]}
            className="mySwiper w-full"
          >
            <SwiperSlide>
              <div className="h-fit max-w-60 overflow-hidden rounded-2xl flex flex-col items-center">
                <Image
                  src="https://m.media-amazon.com/images/I/41o833IUbjL._AC_.jpg"
                  alt="img2"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain rounded-2xl"
                />
                <p className="text-red-500 pt-2 text-base">
                  AED 3
                  <span className="text-gray-400 font-[AmazonEmber-Light] rounded-md px-1 ml-1 line-through">
                    9.38
                  </span>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-fit max-w-60 overflow-hidden rounded-2xl flex flex-col items-center">
                <Image
                  src="https://m.media-amazon.com/images/I/41o833IUbjL._AC_.jpg"
                  alt="img2"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain rounded-2xl"
                />
                <p className="text-red-500 pt-2 text-base">
                  AED 3
                  <span className="text-gray-400 font-[AmazonEmber-Light] rounded-md px-1 ml-1 line-through">
                    9.38
                  </span>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-fit max-w-60 overflow-hidden rounded-2xl flex flex-col items-center">
                <Image
                  src="https://m.media-amazon.com/images/I/41o833IUbjL._AC_.jpg"
                  alt="img2"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain rounded-2xl"
                />
                <p className="text-red-500 pt-2 text-base">
                  AED 3
                  <span className="text-gray-400 font-[AmazonEmber-Light] rounded-md px-1 ml-1 line-through">
                    9.38
                  </span>
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-full h-full gap-2 p-3 flex flex-col">
          <div>
            <h2 className="text-2xl font-bold text-red-500">
              Super <span className="text-black">Deals</span>
            </h2>
            <h3 className="pb-2">New daily deals 50%+ off</h3>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode]}
            className="mySwiper w-full"
          >
            <SwiperSlide>
              <div className="h-fit max-w-60 overflow-hidden rounded-2xl flex flex-col items-center">
                <Image
                  src="https://m.media-amazon.com/images/I/41o833IUbjL._AC_.jpg"
                  alt="img2"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain rounded-2xl"
                />
                <p className="text-red-500 pt-2 text-base">
                  AED 3
                  <span className="text-gray-400 font-[AmazonEmber-Light] rounded-md px-1 ml-1 line-through">
                    9.38
                  </span>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-fit max-w-60 overflow-hidden rounded-2xl flex flex-col items-center">
                <Image
                  src="https://m.media-amazon.com/images/I/41o833IUbjL._AC_.jpg"
                  alt="img2"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain rounded-2xl"
                />
                <p className="text-red-500 pt-2 text-base">
                  AED 3
                  <span className="text-gray-400 font-[AmazonEmber-Light] rounded-md px-1 ml-1 line-through">
                    9.38
                  </span>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-fit max-w-60 overflow-hidden rounded-2xl flex flex-col items-center">
                <Image
                  src="https://m.media-amazon.com/images/I/41o833IUbjL._AC_.jpg"
                  alt="img2"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain rounded-2xl"
                />
                <p className="text-red-500 pt-2 text-base">
                  AED 3
                  <span className="text-gray-400 font-[AmazonEmber-Light] rounded-md px-1 ml-1 line-through">
                    9.38
                  </span>
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HomePagePhone;
