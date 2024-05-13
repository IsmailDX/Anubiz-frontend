'use client'
import NavbarOne from '@/components/Navbars/NavbarOne'
import NavbarTwo from '@/components/Navbars/NavbarTwo'
import ProductsLg from '@/components/ProductsPage/productsLg'
import ProductsSm from '@/components/ProductsPage/productsSm'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'
import { useCookies } from 'react-cookie'
import { useQuery } from '@tanstack/react-query'
import fetchProducts from '@/utils/api'
import ErrorPage from '@/app/errorPage/page'
import { IoIosArrowBack } from 'react-icons/io'

const ProductPage = () => {
    const params = useParams<{ productID: any }>()
    const [cookies] = useCookies(['token'])
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

    return (
        <div className="w-full h-[100dvh] overflow-x-hidden">
            <NavbarOne name={data.user.name} />
            <NavbarTwo />
            <div className="w-full flex flex-col justify-center items-center">
                <button
                    className="w-full max-w-[1300px] flex items-center gap-2 underline cursor-pointer pt-2
                hover:no-underline hover:text-[#A4642C]"
                    onClick={() => router.back()}
                >
                    <IoIosArrowBack />
                    Go Back
                </button>
                <ProductsLg product={data.products} params={params} />
                <ProductsSm product={data.products} params={params} />
            </div>
        </div>
    )
}

export default ProductPage
