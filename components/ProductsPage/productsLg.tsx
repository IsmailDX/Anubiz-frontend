import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Thumbs } from 'swiper/modules'
import Image from 'next/image'
import cashIcon from '@/public/images/deliveryIcon.png'
import fredeliveryIcon from '@/public/images/freedeliveryIcon.png'
import returnableIcon from '@/public/images/returnableIcon.png'
import { FaCartPlus } from 'react-icons/fa6'
import { Product } from '@/types'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

const IconObject = [
    {
        icon: cashIcon,
        text: 'Cash on Delivery',
    },
    {
        icon: fredeliveryIcon,
        text: 'Free Delivery',
    },
    {
        icon: returnableIcon,
        text: '15 days Returnable',
    },
]

type Props = {
    product: Product[]
    params: { productID: any }
}

const ProductsLg = ({ product, params }: Props) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<
        React.Dispatch<React.SetStateAction<any | null>> | any
    >(null)

    // Function to format numbers with commas
    const formatNumber = (num: number): string => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }

    return (
        <div className="w-full h-fit md:flex justify-center hidden">
            <div className="w-full h-full flex justify-center  max-w-[1500px]">
                <div className="w-full h-full p-5 flex items-start select-none">
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        direction={'vertical'}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Thumbs]}
                        className="mySwiperProduct1 w-fit h-72 cursor-pointer"
                    >
                        {product
                            .filter((item) => item._id === params.productID)
                            .map((item, index) => (
                                <React.Fragment key={index}>
                                    {item.image.map((imageUrl, imageIndex) => (
                                        <SwiperSlide
                                            key={index}
                                            className="w-14 h-14 bg-white"
                                        >
                                            <Image
                                                key={imageIndex}
                                                src={imageUrl}
                                                alt={item.name}
                                                width={500}
                                                height={500}
                                                className="w-14 h-14 object-contain px-1"
                                            />
                                        </SwiperSlide>
                                    ))}
                                </React.Fragment>
                            ))}
                    </Swiper>
                    <Swiper
                        loop={true}
                        spaceBetween={10}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Thumbs]}
                        className="mySwiperProduct2 max-w-[600px] h-[600px]"
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
                    .map((item, index) => (
                        <div className="h-fit flex flex-col max-w-[35%] p-5">
                            <h1 className="2xl:text-3xl lg:text-2xl">
                                {item.name}
                            </h1>
                            <h2 className="2xl:text-xl lg:text-lg pt-4 pb-2">
                                Category: {item.category}
                            </h2>
                            <div className="w-full bg-gray-400/50 p-[0.5px]" />
                            <div className="flex items-end 2xl:text-4xl lg:text-3xl gap-3 pt-4">
                                {item.discountPercentage ? (
                                    <h1 className="font-[AmazonEmber-Light] text-red-500">
                                        -{item.discountPercentage}%
                                    </h1>
                                ) : null}
                                <h2 className="2xl:text-4xl lg:text-3xl flex justify-start">
                                    <span className="2xl:text-base lg:text-sm">
                                        AED
                                    </span>
                                    {typeof item.price === 'number' &&
                                    !isNaN(item.price) &&
                                    item.price.toString().includes('.')
                                        ? item.price.toLocaleString('en-US')
                                        : formatNumber(item.price)}
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
                            <div className="flex items-center py-4">
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
                                        <p className="w-20 text-center">
                                            {icon.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <button
                                className="w-full bg-[#A4642C] p-3 text-white rounded-full mt-4 mb-7 flex justify-center
                             items-center hover:bg-white hover:border-[#A4642C] border-2 hover:text-black transition-all 
                             duration-150 ease-in-out"
                            >
                                Add to Cart
                                <FaCartPlus className="ml-2" />
                            </button>
                            <h3 className="text-lg font-bold">
                                About this item
                            </h3>
                            <ul className="list-disc w-full h-fit ml-4">
                                <li>
                                    Sed ut perspiciatis unde omnis iste natus
                                    error sit voluptatem accusantium doloremque
                                    laudantium.
                                </li>
                                <li>
                                    Neque porro quisquam est, qui dolorem ipsum
                                    quia dolor sit amet.
                                </li>
                                <li>
                                    Nemo enim ipsam voluptatem quia voluptas sit
                                    aspernatur aut odit aut fugit, sed quia
                                    consequuntur magni dolores eos qui ratione
                                    voluptatem sequi nesciunt.
                                </li>
                            </ul>
                        </div>
                    ))}
                <div className="bg-orange-400"></div>
            </div>
        </div>
    )
}

export default ProductsLg
