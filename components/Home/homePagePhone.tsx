"use client";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import axios from "axios";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Link from "next/link";

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

const HomePagePhone = () => {
  const [productsData, setProductsData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/home/allProducts",
          { withCredentials: true }
        );
        setProductsData(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const products = useMemo(() => productsData, [productsData]);

  return (
    <div className="sm:hidden w-full p-5 select-none">
      <h1 className="text-3xl py-5">Discounts</h1>
      <div className="flex flex-col items-start w-full">
        <div className="w-full h-full gap-2 p-3 flex flex-col">
          <div className="w-full">
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
            {products
              .filter(
                (product) =>
                  product.category === "fitness" && product.discountPercentage
              )
              .map((product) => (
                <SwiperSlide>
                  <Link
                    href={`/product/${product._id}`}
                    className="cursor-pointer"
                  >
                    <div className="h-fit max-w-60 overflow-hidden rounded-2xl flex flex-col items-center">
                      <Image
                        src={product.image[0]}
                        alt={product.name}
                        width={500}
                        height={500}
                        className="w-full h-32 object-contain rounded-2xl"
                      />
                      <p className="text-red-500 pt-2">
                        <span className="text-[10px]">$</span>
                        {product.price}
                        <span className="text-red-500 bg-red-200 rounded-md px-1 ml-1">
                          -{product.discountPercentage}%
                        </span>
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <div className="w-full h-full gap-2 p-3 flex flex-col">
          <div className="w-full">
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
            {products
              .filter((product) => product.discount)
              .map((product) => (
                <SwiperSlide>
                  <Link
                    href={`/product/${product._id}`}
                    className="cursor-pointer"
                  >
                    <div className="h-fit max-w-60 overflow-hidden rounded-2xl flex flex-col items-center">
                      <Image
                        src={product.image[0]}
                        alt={product.name}
                        width={500}
                        height={500}
                        className="w-full h-32 object-contain rounded-2xl"
                      />
                      <p className="text-red-500 pt-2">
                        <span className="text-[10px]">$</span>
                        {product.price}
                        {product.discountPercentage && (
                          <span className="text-red-500 bg-red-200 rounded-md px-1 ml-1">
                            -{product.discountPercentage}%
                          </span>
                        )}
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
              ))
              .slice(0, 5)}
          </Swiper>
        </div>
        <div className="w-full h-full gap-2 p-3 flex flex-col">
          <div className="w-full">
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
            {products
              .filter((product) => product.category === "clothing")
              .slice(4)
              .map((product) => (
                <SwiperSlide>
                  <Link
                    href={`/product/${product._id}`}
                    className="cursor-pointer"
                  >
                    <div className="h-fit max-w-60 overflow-hidden rounded-2xl flex flex-col items-center">
                      <Image
                        src={product.image[0]}
                        alt={product.name}
                        width={500}
                        height={500}
                        className="w-full h-32 object-contain rounded-2xl"
                      />
                      <p className="text-red-500 pt-2">
                        <span className="text-[10px]">$</span>
                        {product.price}
                        {product.discountPercentage && (
                          <span className="text-red-500 bg-red-200 rounded-md px-1 ml-1">
                            -{product.discountPercentage}%
                          </span>
                        )}
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <div className="w-full h-full gap-2 p-3 flex flex-col">
          <div className="w-full">
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
            {products.slice(42).map((product) => (
              <SwiperSlide>
                <Link
                  href={`/product/${product._id}`}
                  className="cursor-pointer"
                >
                  <div className="h-fit max-w-60 overflow-hidden rounded-2xl flex flex-col items-center">
                    <Image
                      src={product.image[0]}
                      alt={product.name}
                      width={500}
                      height={500}
                      className="w-full h-32 object-contain rounded-2xl"
                    />
                    <p className="text-red-500 pt-2">
                      <span className="text-[10px]">$</span>
                      {product.price}
                      {product.discountPercentage && (
                        <span className="text-red-500 bg-red-200 rounded-md px-1 ml-1">
                          -{product.discountPercentage}%
                        </span>
                      )}
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HomePagePhone;
