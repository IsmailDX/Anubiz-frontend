"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import NavbarOne from "@/components/Navbars/NavbarOne";
import NavbarTwo from "@/components/Navbars/NavbarTwo";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Home = () => {
  const [username, setUsername] = useState(String);
  const router = useRouter();

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        let token = localStorage.getItem("token");
        let response;

        if (!token) {
          response = await axios.get("http://localhost:3000/home/allProducts", {
            withCredentials: true,
          });
        } else {
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          response = await axios.get(
            "http://localhost:3000/home/allProducts",
            config
          );
          setUsername(response.data.username);
        }

        setUsername(response.data.user.name);
      } catch (error) {
        router.push("/errorPage");
        console.log("Error fetching username:", error);
      }
    };

    fetchUsername();
  }, []);

  return (
    <div className="w-full h-[100dvh]">
      <NavbarOne name={username} />
      <NavbarTwo />
      <div className="w-full lg:px-[3%] sm:px-3 px-[5%] py-5 flex justify-center">
        <div className="w-full max-w-[1500px] flex flex-col">
          <h1 className="text-4xl py-10">Discounts</h1>
          <div className="w-full h-fit flex items-center gap-3">
            <div className="bg-[#D9D9D9]/40 rounded-2xl w-full h-full gap-2 p-5 flex flex-col">
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
              <div className="w-full h-full bg-white py-[5%] px-2 rounded-2xl flex justify-center items-center gap-3">
                <div className="h-fit max-w-56 overflow-hidden flex flex-col items-center mt-14">
                  <Image
                    src="https://m.media-amazon.com/images/I/41o833IUbjL._AC_.jpg"
                    alt="img1"
                    width={500}
                    height={500}
                    className="w-full h-full object-contain rounded-2xl"
                  />
                  <p className="text-red-500 pt-2">
                    AED 3
                    <span className="text-red-500 bg-red-200 rounded-md px-1 ml-1">
                      -47%
                    </span>
                  </p>
                </div>

                <div className="h-fit max-w-32 overflow-hidden rounded-2xl mb-40 flex flex-col items-center">
                  <Image
                    src="https://m.media-amazon.com/images/I/41o833IUbjL._AC_.jpg"
                    alt="img2"
                    width={500}
                    height={500}
                    className="w-full h-full object-contain rounded-2xl"
                  />
                  <p className="text-red-500 pt-2">
                    AED 3
                    <span className="text-red-500 bg-red-200 rounded-md px-1 ml-1">
                      -47%
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-full space-y-4 flex flex-col justify-between">
              <div className="w-full h-full rounded-2xl bg-[#FFB06A]/40 flex flex-col items-start p-5">
                <div>
                  <h2 className="text-2xl font-bold text-red-500 ">
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
                  className="mySwiper max-w-[400px] mt-5"
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
                      <p className="text-red-500 pt-2">
                        AED 3
                        <span className="text-gray-400 text-sm font-[AmazonEmber-Light] rounded-md px-1 ml-1 line-through">
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
                      <p className="text-red-500 pt-2">
                        AED 3
                        <span className="text-gray-400 text-sm font-[AmazonEmber-Light] rounded-md px-1 ml-1 line-through">
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
                      <p className="text-red-500 pt-2">
                        AED 3
                        <span className="text-gray-400 text-sm font-[AmazonEmber-Light] rounded-md px-1 ml-1 line-through">
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

              <div className="w-full rounded-2xl h-full bg-[#FFB06A]/40 flex justify-between px-5 py-5">
                <div>
                  <h2 className="text-2xl font-bold text-red-500">
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
                    className="mySwiper h-fit max-w-[200px]"
                  >
                    <SwiperSlide>
                      <div className="h-fit max-w-32 overflow-hidden rounded-2xl flex flex-col items-center">
                        <Image
                          src="https://m.media-amazon.com/images/I/41o833IUbjL._AC_.jpg"
                          alt="img2"
                          width={500}
                          height={500}
                          className="w-full h-full object-contain rounded-2xl"
                        />
                        <p className="text-red-500 pt-2">
                          AED 3
                          <span className="text-gray-400 text-sm font-[AmazonEmber-Light] rounded-md px-1 ml-1 line-through">
                            9.38
                          </span>
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="h-fit max-w-32 overflow-hidden rounded-2xl flex flex-col items-center">
                        <Image
                          src="https://m.media-amazon.com/images/I/41o833IUbjL._AC_.jpg"
                          alt="img2"
                          width={500}
                          height={500}
                          className="w-full h-full object-contain rounded-2xl"
                        />
                        <p className="text-red-500 pt-2">
                          AED 3
                          <span className="text-gray-400 text-sm font-[AmazonEmber-Light] rounded-md px-1 ml-1 line-through">
                            9.38
                          </span>
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="h-fit max-w-32 overflow-hidden rounded-2xl flex flex-col items-center">
                        <Image
                          src="https://m.media-amazon.com/images/I/41o833IUbjL._AC_.jpg"
                          alt="img2"
                          width={500}
                          height={500}
                          className="w-full h-full object-contain rounded-2xl"
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
            <div className="bg-[#D9D9D9]/40 rounded-2xl w-full h-full p-5 flex flex-col">
              <div>
                <h2 className="text-2xl font-bold text-red-500">
                  Super <span className="text-black">Deals</span>
                </h2>
                <h3 className="pb-2">New daily deals 50%+ off</h3>
              </div>
              <div className="h-fit w-full overflow-hidden rounded-2xl flex flex-col items-center pt-[2%] pb-[2%]">
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
                className="mySwiper max-w-[250px] "
              >
                <SwiperSlide>
                  <div className="h-fit max-w-32 overflow-hidden rounded-2xl flex flex-col items-center">
                    <Image
                      src="https://m.media-amazon.com/images/I/41o833IUbjL._AC_.jpg"
                      alt="img2"
                      width={500}
                      height={500}
                      className="w-full h-full object-contain rounded-2xl"
                    />
                    <p className="text-red-500 pt-2">
                      AED 3
                      <span className="text-gray-400 text-sm font-[AmazonEmber-Light] rounded-md px-1 ml-1 line-through">
                        9.38
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-fit max-w-32 overflow-hidden rounded-2xl flex flex-col items-center">
                    <Image
                      src="https://m.media-amazon.com/images/I/41o833IUbjL._AC_.jpg"
                      alt="img2"
                      width={500}
                      height={500}
                      className="w-full h-full object-contain rounded-2xl"
                    />
                    <p className="text-red-500 pt-2">
                      AED 3
                      <span className="text-gray-400 text-sm font-[AmazonEmber-Light] rounded-md px-1 ml-1 line-through">
                        9.38
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-fit max-w-32 overflow-hidden rounded-2xl flex flex-col items-center">
                    <Image
                      src="https://m.media-amazon.com/images/I/41o833IUbjL._AC_.jpg"
                      alt="img2"
                      width={500}
                      height={500}
                      className="w-full h-full object-contain rounded-2xl"
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
    </div>
  );
};

export default Home;
