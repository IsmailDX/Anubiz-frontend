'use client'
import NavbarOne from '@/components/Navbars/NavbarOne'
import NavbarTwo from '@/components/Navbars/NavbarTwo'
import ProductsLg from '@/components/ProductsPage/productsLg'
import ProductsSm from '@/components/ProductsPage/productsSm'
import axios from 'axios'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
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

const ProductPage = () => {
    const params = useParams<{ productID: any }>()
    const [username, setUsername] = useState(String)
    const [product, setProduct] = useState<Product[]>([])
    const router = useRouter()

    const [cookies] = useCookies(['token'])

    useEffect(() => {
        const fetchUsername = async () => {
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

                setUsername(response.data.user.name)
                setProduct(response.data.products)
            } catch (error) {
                router.push('/errorPage')
                console.log('Error fetching username:', error)
            }
        }

        fetchUsername()
    }, [])

    return (
        <div className="w-full h-[100dvh] overflow-x-hidden">
            <NavbarOne name={username} />
            <NavbarTwo />
            <ProductsLg product={product} params={params} />
            <ProductsSm product={product} params={params} />
        </div>
    )
}

export default ProductPage
