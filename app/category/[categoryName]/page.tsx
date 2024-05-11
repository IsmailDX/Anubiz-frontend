'use client'
import NavbarOne from '@/components/Navbars/NavbarOne'
import NavbarTwo from '@/components/Navbars/NavbarTwo'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useQuery } from '@tanstack/react-query'
import fetchProducts from '@/utils/api'
import ErrorPage from '@/app/errorPage/page'
import Checkbox from '@/components/category/checkbox'

const ProductPage = () => {
    const params = useParams<{ categoryName: string }>()
    const [cookies] = useCookies(['token'])
    const [brand, setBrand] = useState('')

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
        (item: any) => item.category === params.categoryName.toLowerCase()
    )

    return (
        <div className="w-full overflow-x-hidden">
            <NavbarOne name={data.user.name} />
            <NavbarTwo />
            <div className="w-full flex h-full">
                <div className="w-fit h-full bg-[#965A26] flex flex-col text-white p-4 space-y-5">
                    <h1 className="text-3xl">Products Filters</h1>
                    <div className="space-y-5">
                        <div>
                            <h2 className="text-2xl border-b-[1px] mb-2">
                                Brands
                            </h2>
                            <Checkbox
                                id="default-checkbox1"
                                text="Test"
                                checked={brand === 'male'}
                                onChange={() => setBrand('male')}
                            />
                            <Checkbox
                                id="default-checkbox2"
                                text="Test"
                                checked={brand === 'female'}
                                onChange={() => setBrand('female')}
                            />
                            <Checkbox
                                id="default-checkbox3"
                                text="Test"
                                checked={brand === 'Alien'}
                                onChange={() => setBrand('Alien')}
                            />
                        </div>
                        <div>
                            <h2 className="text-2xl border-b-[1px] mb-2">
                                Prices
                            </h2>
                            <Checkbox
                                id="default-checkbox1"
                                text="Test"
                                checked={brand === 'male'}
                                onChange={() => setBrand('male')}
                            />
                            <Checkbox
                                id="default-checkbox2"
                                text="Test"
                                checked={brand === 'female'}
                                onChange={() => setBrand('female')}
                            />
                            <Checkbox
                                id="default-checkbox3"
                                text="Test"
                                checked={brand === 'Alien'}
                                onChange={() => setBrand('Alien')}
                            />
                        </div>
                        <div>
                            <h2 className="text-2xl border-b-[1px] mb-2">
                                Sales
                            </h2>
                            <Checkbox
                                id="default-checkbox1"
                                text="Test"
                                checked={brand === 'male'}
                                onChange={() => setBrand('male')}
                            />
                            <Checkbox
                                id="default-checkbox2"
                                text="Test"
                                checked={brand === 'female'}
                                onChange={() => setBrand('female')}
                            />
                            <Checkbox
                                id="default-checkbox3"
                                text="Test"
                                checked={brand === 'Alien'}
                                onChange={() => setBrand('Alien')}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p>{params.categoryName}</p>
                    {filteredProducts.map((item: any, index: any) => (
                        <React.Fragment key={index}>
                            <p>{item.name}</p>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductPage
