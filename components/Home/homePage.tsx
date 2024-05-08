'use client'
import React, { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import Link from 'next/link'
import HomePageSwipers from './swipers/homePageSwipers'

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

const HomePage = () => {
    const [productsData, setProductsData] = useState<Product[]>([])
    const [cookies] = useCookies(['token'])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let token = cookies.token
                let response

                if (!token) {
                    response = await axios.get(
                        'http://localhost:3000/home/allProducts',
                        {
                            withCredentials: true,
                        }
                    )
                } else {
                    const config = {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                    response = await axios.get(
                        'http://localhost:3000/home/allProducts',
                        config
                    )
                }

                setProductsData(response.data.products)
            } catch (error) {
                console.error('Error fetching products:', error)
            }
        }

        fetchProducts()
    }, [])

    const products = useMemo(() => productsData, [productsData])

    return (
        <div className="w-full h-fit lg:px-[3%] md:px-3 px-2 py-5 sm:flex justify-center sm:visible hidden select-none">
            <div className="w-full max-w-[1500px] flex flex-col ">
                <h1 className="text-4xl py-10 text-white">Discounts</h1>
                <div className="w-full h-fit flex items-center md:gap-3 gap-2">
                    <div className="bg-[#D9D9D9]/40 rounded-2xl w-full h-full gap-2 lg:p-5 p-3 flex flex-col">
                        <div className="w-full">
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
                                .filter(
                                    (product) =>
                                        product._id ===
                                        '65f74403eb205859667baddc'
                                )
                                .map((product) => (
                                    <Link
                                        href={`/product/${product._id}`}
                                        className="cursor-pointer"
                                        key={product._id}
                                    >
                                        <div className="w-full h-fit lg:max-w-56 max-w-32 overflow-hidden flex flex-col items-center lg:mt-14">
                                            <Image
                                                src={product.image[0]}
                                                alt={product.name}
                                                width={500}
                                                height={500}
                                                className="w-full h-full object-contain rounded-2xl"
                                            />
                                            <p className="text-red-500 pt-2">
                                                <span className="text-[10px]">
                                                    $
                                                </span>
                                                {product.price}
                                                <span className="text-red-500 bg-red-200 rounded-md px-1 ml-1">
                                                    -
                                                    {product.discountPercentage}
                                                    %
                                                </span>
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            {products
                                .filter(
                                    (product) =>
                                        product._id ===
                                        '65f74403eb205859667badcf'
                                )
                                .map((product) => (
                                    <Link
                                        href={`/product/${product._id}`}
                                        className="cursor-pointer"
                                        key={product._id}
                                    >
                                        <div className="w-full h-fit max-w-32 overflow-hidden rounded-xl lg:mb-40 flex flex-col items-center">
                                            <Image
                                                src={product.image[0]}
                                                alt={product.name}
                                                width={500}
                                                height={500}
                                                className="w-full h-full object-contain rounded-2xl"
                                            />
                                            <p className="text-red-500 pt-2">
                                                <span className="text-[10px]">
                                                    $
                                                </span>
                                                {product.price}
                                                <span className="text-red-500 bg-red-200 rounded-md px-1 ml-1">
                                                    -
                                                    {product.discountPercentage}
                                                    %
                                                </span>
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </div>
                    <div className="md:w-full md:h-full md:space-y-4 md:opacity-100 w-0 h-0 opacity-0 flex flex-col justify-between">
                        <div className="w-full h-full rounded-2xl bg-[#FFB06A]/40 flex flex-col items-start lg:p-5 p-3">
                            <div className="w-full">
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
                            <HomePageSwipers
                                products={products}
                                slidesPerView={3}
                                swiperStyle="mySwiper1 w-full lg:max-w-[400px] md:max-w-[250px] mt-5"
                                filter={(product: Product) => product.discount}
                                slice={[0, 4]}
                            />
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
                                <HomePageSwipers
                                    products={products}
                                    slidesPerView={2}
                                    swiperStyle="mySwiper2 w-full h-fit 2xl:max-w-[250px] max-w-[200px]"
                                    filter={(product: Product) =>
                                        product.category === 'clothing'
                                    }
                                    slice={[4, 10]}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#D9D9D9]/40 rounded-2xl w-full h-full lg:p-5 p-3 flex flex-col overflow-hidden justify-between">
                        <div>
                            <h2 className="text-2xl md:text-xl font-bold text-red-500">
                                Super <span className="text-black">Deals</span>
                            </h2>
                            <h3 className="pb-2">New daily deals 50%+ off</h3>
                        </div>
                        {products
                            .filter(
                                (product) =>
                                    product._id === '65f74403eb205859667baddf'
                            )
                            .map((product) => (
                                <Link
                                    href={`/product/${product._id}`}
                                    className="cursor-pointer"
                                    key={product._id}
                                >
                                    <div className="h-fit w-full overflow-hidden rounded-2xl flex flex-col items-center md:pt-[2%] pt-[10%] pb-[2%]">
                                        <Image
                                            src={product.image[0]}
                                            alt={product.name}
                                            width={500}
                                            height={500}
                                            className="w-[55%] h-full object-contain rounded-2xl"
                                        />
                                        <p className="text-red-500 pt-2">
                                            <span className="text-[10px]">
                                                $
                                            </span>
                                            {product.price}
                                            <span className="text-gray-400 text-sm font-[AmazonEmber-Light] rounded-md px-1 ml-1 line-through">
                                                9.38
                                            </span>
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        <HomePageSwipers
                            products={products}
                            slidesPerView={2}
                            swiperStyle="mySwiper3 w-full max-w-[250px]"
                            filter={(product: Product) => product.discount}
                            slice={[4, 30]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
