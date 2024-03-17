"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import axios from "axios";

type Product = {
  _id: string;
  name: string;
  price: number;
  image: string[];
  discount: boolean;
  discountPercentage?: number;
  priceBefore?: number;
  category?: string;
  section?: string;
};

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/home/allProducts",
          { withCredentials: true }
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-full h-fit lg:px-[3%] md:px-3 px-2 py-5 sm:flex justify-center sm:visible hidden select-none">
      <div className="w-full max-w-[1500px] flex flex-col ">
        <h1 className="text-4xl py-10">Discounts</h1>
        <div className="w-full h-fit flex items-center md:gap-3 gap-2">
          <div className="bg-[#D9D9D9]/40 rounded-2xl w-full h-full gap-2 lg:p-5 p-3 flex flex-col">
            <div>
              <h2 className="text-2xl md:text-xl font-bold text-red-500">
                Amazing discounts
              </h2>
              <h3 className="pb-2">
                <span className="bg-yellow-300 rounded-3xl px-2 text-sm mr-2">
                  Choice
                </span>
                Free shipping - 10 day delivery
              </h3>
            </div>

            <div className="w-full h-full bg-white py-[5%] px-2 rounded-2xl flex lg:flex-row flex-col justify-center items-center gap-3">
              {products
                .filter((product) => product._id === "65f74403eb205859667baddc")
                .map((product) => (
                  <div className="h-fit lg:max-w-56 max-w-32 overflow-hidden flex flex-col items-center lg:mt-14">
                    <Image
                      src={product.image[0]}
                      alt={product.name}
                      width={500}
                      height={500}
                      className="w-full h-full object-contain rounded-2xl"
                    />
                    <p className="text-red-500 pt-2">
                      <span className="text-[10px]">$</span>
                      {product.price}
                      <span className="text-red-500 bg-red-200 rounded-md px-1 ml-1">
                        -{product.discountPercentage}%
                      </span>
                    </p>
                  </div>
                ))}
              {products
                .filter((product) => product._id === "65f74403eb205859667badcf")
                .map((product) => (
                  <div className="h-fit max-w-32 overflow-hidden rounded-xl lg:mb-40 flex flex-col items-center">
                    <Image
                      src={product.image[0]}
                      alt={product.name}
                      width={500}
                      height={500}
                      className="w-full h-full object-contain rounded-2xl"
                    />
                    <p className="text-red-500 pt-2">
                      <span className="text-[10px]">$</span>
                      {product.price}
                      <span className="text-red-500 bg-red-200 rounded-md px-1 ml-1">
                        -{product.discountPercentage}%
                      </span>
                    </p>
                  </div>
                ))}
            </div>
          </div>
          <div className="md:w-full md:h-full md:space-y-4 md:opacity-100 w-0 h-0 opacity-0 flex flex-col justify-between">
            <div className="w-full h-full rounded-2xl bg-[#FFB06A]/40 flex flex-col items-start lg:p-5 p-3">
              <div>
                <h2 className="lg:text-2xl md:text-xl font-bold text-red-500 ">
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
                className="mySwiper lg:max-w-[400px] md:max-w-[250px] mt-5"
              >
                {products
                  .filter((product) => product.discount)
                  .map((product) => (
                    <SwiperSlide key={product._id}>
                      <div className="w-full h-fit bg-white p-2 overflow-hidden rounded-2xl flex flex-col items-center">
                        <Image
                          src={product.image[0]}
                          alt={product.name}
                          width={500}
                          height={500}
                          className="w-full h-24 object-contain "
                        />
                      </div>
                      <p className="text-red-500 pt-2 text-base md:text-sm z-10 flex lg:flex-row flex-col">
                        <span className="text-red-500 lg:text-sm md:text-xs font-[AmazonEmber-Light] rounded-md px-1 ml-1">
                          <span className="text-[10px]">$</span>
                          {product.price}
                        </span>
                        {product.discount && (
                          <span
                            className="text-gray-400 lg:text-sm md:text-xs font-[AmazonEmber-Light] rounded-md px-1 ml-1 line-through
                           truncate hover:text-clip"
                          >
                            {product.priceBefore}
                          </span>
                        )}
                      </p>
                    </SwiperSlide>
                  ))
                  .slice(0, 4)}
              </Swiper>
            </div>

            <div className="w-full rounded-2xl h-full bg-[#FFB06A]/40 flex lg:flex-row flex-col justify-between px-5 py-5">
              <div>
                <h2 className="text-2xl md:text-xl font-bold text-red-500">
                  Free shipping
                </h2>
                <h3 className="pb-2">
                  <span className="bg-yellow-300 rounded-3xl px-2 text-sm mr-2">
                    Choice
                  </span>
                  Selected items
                </h3>
              </div>
              <div className="h-full flex items-end">
                <Swiper
                  slidesPerView={2}
                  spaceBetween={10}
                  freeMode={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[FreeMode]}
                  className="mySwiper h-fit 2xl:max-w-[250px] max-w-[200px]"
                >
                  {products
                    .filter((product) => product.category === "clothing")
                    .slice(4)
                    .map((product) => (
                      <SwiperSlide key={product._id}>
                        <div className="w-full h-fit bg-white p-2 overflow-hidden rounded-2xl flex flex-col items-center">
                          <Image
                            src={product.image[0]}
                            alt={product.name}
                            width={500}
                            height={500}
                            className="w-full h-24 object-contain "
                          />
                        </div>
                        <p className="text-red-500 pt-2 text-base md:text-sm z-10 flex lg:flex-row flex-col">
                          <span className="text-red-500 lg:text-sm md:text-xs font-[AmazonEmber-Light] rounded-md px-1 ml-1">
                            <span className="text-[10px]">$</span>
                            {product.price}
                          </span>
                          {product.discount && (
                            <span
                              className="text-gray-400 lg:text-sm md:text-xs font-[AmazonEmber-Light] rounded-md px-1 ml-1 line-through
                             truncate hover:text-clip"
                            >
                              {product.priceBefore}
                            </span>
                          )}
                        </p>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="bg-[#D9D9D9]/40 rounded-2xl w-full h-full lg:p-5 p-3 flex flex-col overflow-hidden">
            <div>
              <h2 className="text-2xl md:text-xl font-bold text-red-500">
                Super <span className="text-black">Deals</span>
              </h2>
              <h3 className="pb-2">New daily deals 50%+ off</h3>
            </div>
            <div className="h-fit w-full overflow-hidden rounded-2xl flex flex-col items-center md:pt-[2%] pt-[10%] pb-[2%]">
              <Image
                src="https://m.media-amazon.com/images/I/41o833IUbjL._AC_.jpg"
                alt="img2"
                width={500}
                height={500}
                className="w-[55%] h-full object-contain rounded-2xl"
              />
              <p className="text-red-500 pt-2">
                AED 3
                <span className="text-gray-400 text-sm font-[AmazonEmber-Light] rounded-md px-1 ml-1 line-through">
                  9.38
                </span>
              </p>
            </div>
            <Swiper
              slidesPerView={2}
              spaceBetween={10}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode]}
              className="mySwiper max-w-[250px]"
            >
              <SwiperSlide className="w-fit">
                <div className="h-fit lg:max-w-32 md:w-fit overflow-hidden rounded-2xl flex flex-col items-center">
                  <Image
                    src="https://m.media-amazon.com/images/I/41o833IUbjL._AC_.jpg"
                    alt="img2"
                    width={500}
                    height={500}
                    className="lg:w-full w-32 h-full object-contain rounded-2xl"
                  />
                  <p className="text-red-500 pt-2">
                    AED 3
                    <span className="text-gray-400 text-sm font-[AmazonEmber-Light] rounded-md px-1 ml-1 line-through">
                      9.38
                    </span>
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-fit">
                <div className="h-fit lg:max-w-32 md:w-fit overflow-hidden rounded-2xl flex flex-col items-center">
                  <Image
                    src="https://m.media-amazon.com/images/I/41o833IUbjL._AC_.jpg"
                    alt="img2"
                    width={500}
                    height={500}
                    className="lg:w-full w-32 h-full object-contain rounded-2xl"
                  />
                  <p className="text-red-500 pt-2">
                    AED 3
                    <span className="text-gray-400 text-sm font-[AmazonEmber-Light] rounded-md px-1 ml-1 line-through">
                      9.38
                    </span>
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-fit">
                <div className="h-fit lg:max-w-32 md:w-fit overflow-hidden rounded-2xl flex flex-col items-center">
                  <Image
                    src="https://m.media-amazon.com/images/I/41o833IUbjL._AC_.jpg"
                    alt="img2"
                    width={500}
                    height={500}
                    className="lg:w-full w-32 h-full object-contain rounded-2xl"
                  />
                  <p className="text-red-500 pt-2">
                    AED 3
                    <span className="text-gray-400 text-sm font-[AmazonEmber-Light] rounded-md px-1 ml-1 line-through">
                      9.38
                    </span>
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-fit">
                <div className="h-fit lg:max-w-32 md:w-fit overflow-hidden rounded-2xl flex flex-col items-center">
                  <Image
                    src="https://m.media-amazon.com/images/I/41o833IUbjL._AC_.jpg"
                    alt="img2"
                    width={500}
                    height={500}
                    className="lg:w-full w-32 h-full object-contain rounded-2xl"
                  />
                  <p className="text-red-500 pt-2">
                    AED 3
                    <span className="text-gray-400 text-sm font-[AmazonEmber-Light] rounded-md px-1 ml-1 line-through">
                      9.38
                    </span>
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
