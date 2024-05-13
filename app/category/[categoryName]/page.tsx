'use client'
import NavbarOne from '@/components/Navbars/NavbarOne'
import NavbarTwo from '@/components/Navbars/NavbarTwo'
import { useParams, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useQuery } from '@tanstack/react-query'
import fetchProducts from '@/utils/api'
import ErrorPage from '@/app/errorPage/page'
import SideBar from '@/components/category/sideBar'
import Image from 'next/image'
import logoLight from '@/public/images/logoLight.png'
import landscape from '@/public/images/landscape.jpg'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { Product } from '@/types'
import { IoArrowDown } from 'react-icons/io5'
import Checkbox from '@/components/category/checkbox'

const ProductPage = () => {
    const params = useParams<{ categoryName: string }>()
    const [cookies] = useCookies(['token'])

    const [brand, setBrand] = useState('')
    const [price, setPrice] = useState(0)
    const [sale, setSale] = useState('')

    const [modalOn, setModalOn] = useState(false)

    const [modalSect1, setModalSec1] = useState(false)
    const [modalSect2, setModalSec2] = useState(false)
    const [modalSect3, setModalSec3] = useState(false)

    const router = useRouter()

    const { data, error, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetchProducts(cookies.token),
    })

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <ErrorPage message={error.message} />
    }

    const filteredProducts = data.products.filter(
        (item: Product) => item.category === params.categoryName.toLowerCase()
    )

    // Function to format numbers with commas
    const formatNumber = (num: number): string => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }

    return (
        <div
            className={`w-full h-full overflow-x-hidden relative ${
                modalOn && 'max-md:bg-black/50'
            }`}
        >
            <NavbarOne name={data.user.name} />
            <NavbarTwo />
            <div className="w-full flex h-full">
                <SideBar
                    brand={brand}
                    setBrand={setBrand}
                    price={price}
                    setPrice={setPrice}
                    sale={sale}
                    setSale={setSale}
                />

                <div className="w-full h-full flex flex-col">
                    <div className="w-full h-[120px] sm:h-[170px] lg:h-[200px] 2xl:h-[250px] flex justify-between items-center overflow-hidden relative">
                        <div className="flex flex-col lg:w-full space-y-2 pl-[5%] md:pl-[3%]">
                            <h1 className="text-3xl lg:text-4xl 2xl:text-6xl capitalize">
                                {params.categoryName}
                            </h1>
                            <h2 className="text-xl lg:text-2xl 2xl:text-3xl flex">
                                ({filteredProducts.length}) Results
                            </h2>
                        </div>
                        <Image
                            src={logoLight}
                            alt="logo"
                            className={`w-[40%] lg:w-[20%] object-contain pt-14 mr-[3%] ${
                                modalOn && 'max-md:opacity-50'
                            }`}
                        />
                        <Image
                            src={landscape}
                            alt="landscape"
                            className="absolute left-0 -z-10 w-full bg-contain"
                        />
                    </div>
                    <p
                        className="p-3 sm:px-10 flex items-center justify-start gap-1 md:hidden"
                        onClick={() => setModalOn(!modalOn)}
                    >
                        Filters
                        {modalOn === false ? (
                            <IoIosArrowDown className="w-4 h-4 mt-1" />
                        ) : (
                            <IoIosArrowUp className="w-4 h-4 mt-1" />
                        )}
                    </p>
                    <div
                        className="w-full grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 
                        place-items-center gap-7 sm:gap-10 p-3 sm:p-7"
                    >
                        {filteredProducts.map(
                            (item: Product, index: number) => (
                                <div
                                    key={index}
                                    className="w-full h-full border border-[#965A26]/30 rounded-lg p-4
                                    flex sm:flex-col justify-start items-center space-y-3 cursor-pointer transition-all duration-100 
                                    ease-in-out hover:shadow-xl hover:border-[#965A26]"
                                    onClick={() =>
                                        router.push(`/product/${item._id}`)
                                    }
                                >
                                    <Image
                                        src={item.image[0]}
                                        alt={`Image-${index}`}
                                        width={150}
                                        height={150}
                                        className="object-contain w-[130px] sm:w-full h-fit sm:h-[200px] 2xl:h-[250px]"
                                    />
                                    <p className="line-clamp-2 text-lg w-full max-sm:hidden">
                                        {item.name}
                                    </p>
                                    {/* sm and bigger */}
                                    <div className="w-full flex sm:flex-row justify-start items-end space-x-3 flex-grow max-sm:hidden">
                                        <p className="text-2xl flex">
                                            <span className="text-sm">AED</span>
                                            {typeof item.price === 'number' &&
                                            !isNaN(item.price) &&
                                            item.price.toString().includes('.')
                                                ? item.price.toLocaleString(
                                                      'en-US'
                                                  )
                                                : formatNumber(item.price)}
                                            {item.priceBefore ? (
                                                <p className="text-2xl text-gray-400 font-[AmazonEmber-Light] rounded-md line-through pl-2">
                                                    {item.priceBefore}
                                                </p>
                                            ) : null}
                                        </p>
                                        {item.discountPercentage ? (
                                            <p className="text-2xl text-red-500 font-[AmazonEmber-Light] rounded-md px-1 ml-1">
                                                -{item.discountPercentage}%
                                            </p>
                                        ) : null}
                                    </div>

                                    {/* smaller than sm (Mobile Phones) */}
                                    <div className="w-full flex flex-col justify-start items-start sm:items-end space-x-3 flex-grow sm:hidden pl-3">
                                        <p className="line-clamp-3 text-base w-full sm:hidden border-b-[1px] border-black/20 pb-1">
                                            {item.name}
                                        </p>
                                        <p className="text-2xl flex pt-1">
                                            <span className="text-sm">AED</span>
                                            {typeof item.price === 'number' &&
                                            !isNaN(item.price) &&
                                            item.price.toString().includes('.')
                                                ? item.price.toLocaleString(
                                                      'en-US'
                                                  )
                                                : formatNumber(item.price)}
                                        </p>
                                        <div className="flex">
                                            {item.priceBefore ? (
                                                <p className="text-xl text-gray-400 font-[AmazonEmber-Light] rounded-md line-through sm:pl-2 sm:hidden">
                                                    {item.priceBefore}
                                                </p>
                                            ) : null}
                                            {item.discountPercentage ? (
                                                <p className="text-xl text-red-500 font-[AmazonEmber-Light] rounded-md px-1 ml-1 sm:hidden">
                                                    -{item.discountPercentage}%
                                                </p>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
            <div
                className={`bg-white w-full transition-all md:hidden h-0 opacity-0 ease-out duration-300 ${
                    modalOn && 'h-[60%] opacity-100'
                } fixed bottom-0 z-20 flex flex-col rounded-2xl overflow-y-auto`}
            >
                <button
                    className="w-full text-end px-5 py-3"
                    onClick={() => setModalOn(!modalOn)}
                >
                    Close
                </button>
                <ul className="w-full">
                    <li
                        className="p-4 border-b-[0.5px] border-black/40 flex items-center justify-between relative"
                        onClick={() => {
                            setModalSec1(!modalSect1)
                        }}
                    >
                        Brands
                        {modalSect1 === false ? (
                            <IoIosArrowDown className="w-4 h-4 mt-1" />
                        ) : (
                            <IoIosArrowUp className="w-4 h-4 mt-1" />
                        )}
                    </li>
                    <div
                        className={`w-full flex flex-col px-5 pt-1 ${
                            modalSect1 ? 'h-fit' : 'hidden'
                        } `}
                    >
                        <Checkbox
                            id="brands-model-checkbox1"
                            text="Test"
                            checked={brand === 'male1'}
                            onChange={() => setBrand('male1')}
                            textColor="text-black py-2 bg-white z-20"
                        />
                        <Checkbox
                            id="brands-model-checkbox2"
                            text="Test"
                            checked={brand === 'female1'}
                            onChange={() => setBrand('female1')}
                            textColor="text-black py-2"
                        />
                        <Checkbox
                            id="brands-model-checkbox3"
                            text="Test"
                            checked={brand === 'Alien1'}
                            onChange={() => setBrand('Alien1')}
                            textColor="text-black py-2"
                        />
                    </div>
                    <li
                        className="p-4 border-b-[0.5px] border-black/40 flex items-center justify-between relative"
                        onClick={() => {
                            setModalSec2(!modalSect2)
                        }}
                    >
                        Prices{' '}
                        {modalSect2 === false ? (
                            <IoIosArrowDown className="w-4 h-4 mt-1" />
                        ) : (
                            <IoIosArrowUp className="w-4 h-4 mt-1" />
                        )}
                    </li>
                    <div
                        className={`w-full flex flex-col px-5 pt-1 ${
                            modalSect2 ? 'h-fit' : 'hidden'
                        } `}
                    >
                        <Checkbox
                            id="prices-model-checkbox1"
                            text="Test"
                            checked={price === 1}
                            onChange={() => setPrice(1)}
                            textColor="text-black py-2 bg-white z-20"
                        />
                        <Checkbox
                            id="prices-model-checkbox2"
                            text="Test"
                            checked={price === 2}
                            onChange={() => setPrice(2)}
                            textColor="text-black py-2"
                        />
                        <Checkbox
                            id="prices-model-checkbox3"
                            text="Test"
                            checked={price === 3}
                            onChange={() => setPrice(3)}
                            textColor="text-black py-2"
                        />
                    </div>
                    <li
                        className="p-4 border-b-[0.5px] border-black/40 flex items-center justify-between relative"
                        onClick={() => {
                            setModalSec3(!modalSect3)
                        }}
                    >
                        Sales
                        {modalSect3 === false ? (
                            <IoIosArrowDown className="w-4 h-4 mt-1" />
                        ) : (
                            <IoIosArrowUp className="w-4 h-4 mt-1" />
                        )}
                    </li>
                    <div
                        className={`w-full flex flex-col px-5 pt-1 ${
                            modalSect3 ? 'h-fit' : 'hidden'
                        } `}
                    >
                        <Checkbox
                            id="sales-model-checkbox1"
                            text="Test"
                            checked={sale === 'male11'}
                            onChange={() => setSale('male11')}
                            textColor="text-black py-2 bg-white z-20"
                        />
                        <Checkbox
                            id="sales-model-checkbox2"
                            text="Test"
                            checked={sale === 'male111'}
                            onChange={() => setSale('male111')}
                            textColor="text-black py-2"
                        />
                        <Checkbox
                            id="sales-model-checkbox3"
                            text="Test"
                            checked={sale === 'male1111'}
                            onChange={() => setSale('male1111')}
                            textColor="text-black py-2"
                        />
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default ProductPage
