import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

type Product = {
    _id: string
    name: string
    price: number
    image: string[]
    discount: boolean
    discountPercentage?: number
    priceBefore?: number
    category?: string
    section?: string
}

type SwiperTypes = {
    products: Product[]
    slidesPerView: number
    swiperStyle: string
    filter: any
    slice: [number, number]
}

const HomePageSwipers = ({
    products,
    slidesPerView,
    swiperStyle,
    filter,
    slice,
}: SwiperTypes) => {
    // Function to format numbers with commas
    const formatNumber = (num: number): string => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }

    return (
        <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={10}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode]}
            className={swiperStyle}
        >
            {products
                .filter(filter)
                .map((product: Product) => (
                    <SwiperSlide key={product._id}>
                        <Link
                            href={`/product/${product._id}`}
                            className="cursor-pointer"
                        >
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
                                    <span className="text-[7.5px]">AED</span>
                                    {typeof product.price === 'number' &&
                                    !isNaN(product.price) &&
                                    product.price.toString().includes('.')
                                        ? product.price.toLocaleString('en-US')
                                        : formatNumber(product.price)}
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
                        </Link>
                    </SwiperSlide>
                ))
                .slice(slice[0], slice[1])}
        </Swiper>
    )
}

export default HomePageSwipers
