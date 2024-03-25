import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import cashIcon from "@/public/images/deliveryIcon.png";
import fredeliveryIcon from "@/public/images/freedeliveryIcon.png";
import returnableIcon from "@/public/images/returnableIcon.png";

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

const IconObject = [
  {
    icon: cashIcon,
    text: "Cash on Delivery",
  },
  {
    icon: fredeliveryIcon,
    text: "Free Delivery",
  },
  {
    icon: returnableIcon,
    text: "15 days Returnable",
  },
];

type Props = {
  product: Product[];
  params: { productID: any };
};

const ProductsSm = ({ product, params }: Props) => {
  return (
    <div className="w-full h-fit flex justify-center md:hidden">
      <div className="w-full h-full flex-col items-center justify-center">
        <div className="w-full h-full px-5 pt-5 flex flex-col justify-center items-start select-none">
          {product
            .filter((item) => item._id === params.productID)
            .map((item) => (
              <h1 className="text-2xl pb-5">{item.name}</h1>
            ))}
          <Swiper
            loop={true}
            spaceBetween={10}
            modules={[FreeMode, Thumbs]}
            className="mySwiperProduct2 w-full h-[400px]"
          >
            {product
              .filter((item) => item._id === params.productID)
              .map((item, index) => (
                <>
                  {item.image.map((imageUrl, imageIndex) => (
                    <SwiperSlide key={index}>
                      <Image
                        key={imageIndex}
                        src={imageUrl}
                        alt={item.name}
                        width={500}
                        height={500}
                        className="w-full h-full object-contain"
                      />
                    </SwiperSlide>
                  ))}
                </>
              ))}
          </Swiper>
        </div>
        {product
          .filter((item) => item._id === params.productID)
          .map((item) => (
            <div className="h-fit flex flex-col w-full justify-start items-start p-5">
              <h2 className="text-xl pt-4 pb-2">Category: {item.category}</h2>
              <div className="w-full bg-gray-400/50 p-[0.5px]" />
              <div className="flex items-end text-3xl gap-3 pt-4">
                {item.discountPercentage ? (
                  <h1 className="font-[AmazonEmber-Light] text-red-500">
                    -{item.discountPercentage}%
                  </h1>
                ) : null}
                <h2 className="text-3xl flex justify-start">
                  <span className="2xl:text-base lg:text-sm">AED</span>
                  {item.price}
                </h2>
              </div>
              {item.priceBefore ? (
                <p className="pt-2">
                  Price before discount:
                  <span className="line-through pl-2">
                    AED{item.priceBefore}
                  </span>
                </p>
              ) : null}

              <p>All prices include VAT.</p>
              <div className="w-full flex justify-evenly items-center py-4">
                {IconObject.map((icon) => (
                  <div
                    className="w-fit flex flex-col justify-center items-center px-[3%]"
                    key={icon.text}
                  >
                    <Image
                      src={icon.icon}
                      alt={icon.text}
                      width={200}
                      height={200}
                      className="w-10 object-contain"
                    />
                    <p className="w-20 text-center">{icon.text}</p>
                  </div>
                ))}
              </div>
              <h3 className="text-lg font-bold">About this item</h3>
              <ul className="list-disc w-full h-fit ml-4 p-2">
                <li>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium.
                </li>
                <li>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet.
                </li>
                <li>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt.
                </li>
              </ul>
            </div>
          ))}
        <div className="bg-orange-400"></div>
      </div>
    </div>
  );
};

export default ProductsSm;
