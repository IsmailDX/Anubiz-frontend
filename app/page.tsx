import Image from "next/image";
import ParticlesBackground from "../components/Particles/ParticlesBackground";
import pattern from "@/public/images/pattern.png";
import logo from "@/public/images/logo.png";

export default function Home() {
  return (
    <main>
      <ParticlesBackground />
      <div className="h-[100dvh] w-full flex items-center justify-center">
        <div className="w-[25%] h-[70%] bg-white text-black rounded-xl overflow-hidden flex flex-col items-center relative">
          <div className="w-full flex flex-col items-center absolute top-[3%] z-10">
            <Image
              width={500}
              height={500}
              alt="logo"
              src={logo}
              className="w-[35%] object-contain"
            />
            <h1 className="pt-4 font-[Posterama-Regular] font-bold text-[20px]">
              Welcome to Anubiz
            </h1>
          </div>
          <div>
            <div className="w-full h-[53%] bg-gradient-to-b from-transparent to-white absolute inset-0" />
            <Image
              width={500}
              height={500}
              alt="pattern"
              src={pattern}
              className="w-full object-contain"
            />
          </div>
          <div className="flex flex-col items-center bg-red-500 w-full mt-[5%]">
            <h1>textfields</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
