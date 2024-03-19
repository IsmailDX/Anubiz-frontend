import ParticlesBackground from "@/components/Particles/ParticlesBackground";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/images/logoLight.png";
import { IoLockClosedSharp } from "react-icons/io5";

const ErrorPage = () => {
  return (
    <div className="w-full h-[100dvh]">
      <ParticlesBackground />
      <div className="w-full h-full flex justify-center items-center">
        <div
          className="2xl:w-[40%] lg:w-[50%] md:w-[60%] sm:w-[70%] w-[80%] h-fit backdrop-blur-md border-2 bg-black/10 border-white rounded-2xl 
        flex lg:flex-row flex-col lg:justify-evenly lg:gap-14 gap-10 justify-center items-center px-5 py-10"
        >
          <div className="w-fit h-[70%] relative">
            <IoLockClosedSharp
              size={70}
              className="text-red-500 absolute bottom-0 right-0 -mr-5"
            />
            <Image
              src={logo}
              alt="logoError"
              width={500}
              height={500}
              className="w-full md:h-52 h-44 object-contain"
              priority={true}
            />
          </div>
          <div className="text-white flex flex-col space-y-3 w-fit lg:text-left text-center">
            <h1 className="text-4xl text-red-500">Sorry!</h1>
            <p className="sm:text-xl text-base">
              You are not authorized to access.
            </p>
            <Link href="/">
              <p className="hover:scale-105 hover:underline hover:text-green-300 transition-all ease-in-out duration-150">
                Click here to Sign in
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
