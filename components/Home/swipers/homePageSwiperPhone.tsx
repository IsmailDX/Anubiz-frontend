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

    filter: any
    slice: [number, number]
}

const HomePageSwiperPhone = ({
    products,
    slidesPerView,
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
            className="mySwiper w-full"
        >
            {products
                .filter(filter)
                .map((product) => (
                    <SwiperSlide key={product._id}>
                        <Link
                            href={`/product/${product._id}`}
                            className="cursor-pointer"
                        >
                            <div className="h-fit max-w-60 overflow-hidden rounded-xl flex flex-col items-center bg-white">
                                <Image
                                    src={product.image[0]}
                                    alt={product.name}
                                    width={500}
                                    height={500}
                                    className="w-full h-32 object-contain p-2"
                                />
                                <p className="text-red-500 pt-2 flex flex-col justify-center items-center">
                                    $
                                    {typeof product.price === 'number' &&
                                    !isNaN(product.price) &&
                                    product.price.toString().includes('.')
                                        ? product.price.toLocaleString('en-US')
                                        : formatNumber(product.price)}
                                    {product.discountPercentage && (
                                        <span className="text-red-500 bg-red-200 rounded-md w-fit px-1 ml-1">
                                            -{product.discountPercentage}%
                                        </span>
                                    )}
                                </p>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))
                .slice(slice[0], slice[1])}
        </Swiper>
    )
}

export default HomePageSwiperPhone
