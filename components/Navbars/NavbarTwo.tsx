import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const navList = [
    {
        name: 'Electronics',
        link: '/category/electronics',
    },
    {
        name: 'Clothing',
        link: '/category/clothing',
    },
    {
        name: 'Home & Kitchen',
        link: '/category/home',
    },
    {
        name: 'Fitness & Exercise',
        link: '/category/fitness',
    },
    {
        name: 'Toys & Games',
        link: '/category/toys',
    },
]

const NavbarTwo = () => {
    const [open, setOpen] = useState(false)
    const router = useRouter()

    const itemVariants = {
        closed: { opacity: 0 },
        open: { opacity: 1 },
    }

    const sideVariants = {
        closed: {
            transition: {
                staggerChildren: 0.1,
                staggerDirection: -1,
            },
        },
        open: {
            transition: {
                staggerChildren: 0.1,
                staggerDirection: 1,
            },
        },
    }

    return (
        <div className="w-full h-14 bg-[#965A26] flex justify-center items-center lg:px-[3%] sm:px-3 px-[5%] select-none overflow-y-visible relative">
            <div className="w-full flex justify-center items-center max-w-[1500px] ">
                <div className="sm:w-fit w-full z-50 relative">
                    <div
                        className="border-2 border-white sm:min-w-[190px] w-full text-white py-1 px-3 rounded-xl flex justify-between items-center cursor-pointer
           hover:text-gray-300 hover:border-gray-300 transition-all duration-100 ease-in-out"
                        onClick={() => setOpen(!open)}
                    >
                        <div className="flex items-center gap-2">
                            <RxHamburgerMenu className="w-5 h-5" />
                            <p>All Categories</p>
                        </div>
                        {open ? (
                            <IoIosArrowUp className="mt-1" />
                        ) : (
                            <IoIosArrowDown className="mt-1" />
                        )}
                    </div>
                    <motion.ul
                        className="sm:min-w-[190px] w-full absolute top-11"
                        variants={sideVariants}
                        initial="closed"
                        animate={open ? 'open' : 'closed'}
                    >
                        {navList.map((item, index) => (
                            <motion.li
                                key={index}
                                variants={itemVariants}
                                className={`bg-[#965A26]/80 hover:bg-[#965A26]/70 p-2 text-white w-full border-b-[1px] border-white/20 cursor-pointer ${
                                    !open && 'hidden'
                                }`}
                                onClick={() => router.push(item.link)}
                            >
                                {item.name}
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>

                <ul className="sm:w-full w-0 sm:pl-4 flex justify-around items-center pl-0 gap-2 text-white">
                    {navList.map((item, index) => (
                        <li
                            className="md:text-base sm:text-sm text-[0px] text-center cursor-pointer hover:underline hover:text-gray-300 
          transition-all duration-100 ease-in-out"
                            key={index}
                            onClick={() => router.push(item.link)}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default NavbarTwo
