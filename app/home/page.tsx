'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import NavbarOne from '@/components/Navbars/NavbarOne'
import NavbarTwo from '@/components/Navbars/NavbarTwo'
import HomePage from '@/components/Home/homePage'
import HomePagePhone from '@/components/Home/homePagePhone'
import wallpaper from '@/public/images/orangeHomeWallpaper.jpg'
import Image from 'next/image'
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

const Home = () => {
    const [username, setUsername] = useState(String)
    const [productsData, setProductsData] = useState<Product[]>([])
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
                setProductsData(response.data.products)
                setUsername(response.data.user.name)
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
            <div className="w-full h-[30%] xl:h-[20%] relative -z-10">
                <div className="w-full absolute h-fit text-white text-center pt-[100px]">
                    <h1 className="md:text-6xl text-4xl">Welcome to Anubiz!</h1>
                    <h2 className="md:text-xl text-base">
                        We are delighted to have you here.
                    </h2>
                </div>
                <Image
                    src={wallpaper}
                    width={2960}
                    height={1000}
                    alt="wallpaper"
                    className="w-full h-[1000px] select-none object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-[1000px] bg-gradient-to-t from-white via-white/95 to-transparent" />
            </div>

            <HomePage products={productsData} />
            <HomePagePhone products={productsData} />
        </div>
    )
}

export default Home
