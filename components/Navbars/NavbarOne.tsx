import React, { useState } from 'react'
import Image from 'next/image'
import logo from '@/public/images/logoLight.png'
import { CiSearch } from 'react-icons/ci'
import Link from 'next/link'
import { IoCartOutline } from 'react-icons/io5'
import { FaRegUser } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { useCookies } from 'react-cookie'

type Props = {
    name: String
}

const NavbarOne = ({ name }: Props) => {
    const [open, setOpen] = useState(false)
    const router = useRouter()
    const [cookies, setCookie, removeCookie] = useCookies(['token'])

    const handleSignOut = async () => {
        removeCookie('token')
        router.push('http://localhost:3001/')
    }

    return (
        <div className="w-full bg-[#A4642C] py-1 flex justify-center relative select-none">
            <div className="w-full flex items-center justify-between px-[2%] gap-5 max-w-[1500px]">
                <Link href="http://localhost:3001/home" className="min-w-fit">
                    <div className="flex items-center gap-4">
                        <Image
                            src={logo}
                            width={50}
                            height={50}
                            alt="logo"
                            className="object-contain"
                        />
                        <h1 className="font-[Posterama-Regular] text-white md:text-2xl text-lg font-semibold truncate flex items-center">
                            Anubiz
                            <span className="md:text-2xl text-[0px] md:pl-2">
                                store
                            </span>
                        </h1>
                    </div>
                </Link>
                <div className="md:w-full w-0 bg-white flex items-center justify-end rounded-md md:py-1 md:px-4">
                    <input
                        placeholder="Search on Anubiz!"
                        className="md:w-full w-0 h-8 rounded-md outline outline-0 focus:outline-0"
                    />
                    <CiSearch className="w-7 h-7" />
                </div>
                <div className="flex gap-2">
                    <div className="flex flex-col items-start justify-center md:-space-y-1 text-white md:w-fit md:h-fit md:opacity-100 opacity-0 w-0 h-0">
                        <p className="text-sm font-[AmazonEmber-Light] truncate">{`Hello, ${name}`}</p>
                        <p
                            onClick={handleSignOut}
                            className="underline md:text-xl text-lg hover:text-gray-300 transition-all duration-100 ease-in-out cursor-pointer"
                        >
                            Signout?
                        </p>
                    </div>
                    <div
                        className="flex items-end text-white relative"
                        onClick={() => setOpen(!open)}
                    >
                        <FaRegUser className="md:w-0 md:h-0 w-9 h-9 pb-1" />
                        {open && (
                            <div
                                className="md:text-xl text-lg py-2 pr-3 pl-2 rounded-lg z-50 bg-white text-black absolute right-10 truncate 
                                md:w-0 md:h-0 md:opacity-0 shape"
                                onClick={handleSignOut}
                            >
                                Sign out?
                            </div>
                        )}
                    </div>
                    <div className="text-white flex items-end">
                        <IoCartOutline className="md:w-12 md:h-12 w-10 h-10" />
                        <p className="md:w-fit md:opacity-100 opacity-0 md:h-fit w-0 h-0">
                            Cart
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarOne
