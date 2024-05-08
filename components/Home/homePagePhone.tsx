'use client'
import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import HomePageSwiperPhone from './swipers/homePageSwiperPhone'
import { useCookies } from 'react-cookie'

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

type Props = {
    products: Product[]
}

const HomePagePhone = ({ products }: Props) => {
    return (
        <div className="sm:hidden w-full p-5 select-none">
            <h1 className="text-3xl py-5 text-white">Discounts</h1>
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
                    <HomePageSwiperPhone
                        products={products}
                        slidesPerView={3}
                        filter={(product: Product) =>
                            product.category === 'fitness' &&
                            product.discountPercentage
                        }
                        slice={[0, 50]}
                    />
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
                    <HomePageSwiperPhone
                        products={products}
                        slidesPerView={3}
                        filter={(product: Product) => product.discount}
                        slice={[0, 5]}
                    />
                </div>
                <div className="w-full h-full gap-2 p-3 flex flex-col bg-white">
                    <div className="w-full">
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
                    <HomePageSwiperPhone
                        products={products}
                        slidesPerView={3}
                        filter={(product: Product) =>
                            product.category === 'clothing'
                        }
                        slice={[4, 10]}
                    />
                </div>
                <div className="w-full h-full gap-2 p-3 flex flex-col">
                    <div className="w-full">
                        <h2 className="text-2xl font-bold text-red-500">
                            Super <span className="text-black">Deals</span>
                        </h2>
                        <h3 className="pb-2">New daily deals 50%+ off</h3>
                    </div>
                    <HomePageSwiperPhone
                        products={products}
                        slidesPerView={3}
                        filter={(product: Product) => product.discount}
                        slice={[4, 30]}
                    />
                </div>
            </div>
        </div>
    )
}

export default HomePagePhone
