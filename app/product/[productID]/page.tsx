'use client'
import NavbarOne from '@/components/Navbars/NavbarOne'
import NavbarTwo from '@/components/Navbars/NavbarTwo'
import ProductsLg from '@/components/ProductsPage/productsLg'
import ProductsSm from '@/components/ProductsPage/productsSm'
import { useParams } from 'next/navigation'
import React from 'react'
import { useCookies } from 'react-cookie'
import { useQuery } from '@tanstack/react-query'
import fetchProducts from '@/utils/api'
import ErrorPage from '@/app/errorPage/page'
const ProductPage = () => {
    const params = useParams<{ productID: any }>()

    const [cookies] = useCookies(['token'])

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
            <ProductsLg product={data.products} params={params} />
            <ProductsSm product={data.products} params={params} />
        </div>
    )
}

export default ProductPage
