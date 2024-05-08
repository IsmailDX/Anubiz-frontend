'use client'
import React from 'react'
import NavbarOne from '@/components/Navbars/NavbarOne'
import NavbarTwo from '@/components/Navbars/NavbarTwo'
import HomePage from '@/components/Home/homePage'
import HomePagePhone from '@/components/Home/homePagePhone'
import wallpaper from '@/public/images/orangeHomeWallpaper.jpg'
import Image from 'next/image'
import { useCookies } from 'react-cookie'
import fetchProducts from '@/utils/api'
import { useQuery } from '@tanstack/react-query'
import ErrorPage from '../errorPage/page'

const Home = () => {
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
                    quality={20}
                    priority={true}
                />
                <div
                    className="absolute top-0 left-0 w-full h-[1000px] bg-gradient-to-t from-white
                 via-white/95 to-transparent"
                />
            </div>

            <HomePage products={data.products} />
            <HomePagePhone products={data.products} />
        </div>
    )
}

export default Home
