import React, { Dispatch, SetStateAction, useState } from 'react'
import Checkbox from '@/components/category/checkbox'

type sideBarProps = {
    brand: string
    setBrand: Dispatch<SetStateAction<string>>
    price: number
    setPrice: Dispatch<SetStateAction<number>>
    sale: string
    setSale: Dispatch<SetStateAction<string>>
}

const SideBar = ({
    brand,
    setBrand,
    price,
    setPrice,
    sale,
    setSale,
}: sideBarProps) => {
    return (
        <div className="w-fit bg-[#965A26] flex flex-col text-white p-4 space-y-5 max-md:hidden flex-grow">
            <h1 className="text-3xl">Products Filters</h1>
            <div className="space-y-5">
                <div>
                    <h2 className="text-2xl border-b-[1px] mb-2">Brands</h2>
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
                    <h2 className="text-2xl border-b-[1px] mb-2">Prices</h2>
                    <Checkbox
                        id="default-checkbox1"
                        text="All Prices"
                        checked={price === 1}
                        onChange={() => setPrice(1)}
                    />
                    <Checkbox
                        id="default-checkbox2"
                        text="Lowest to Highest"
                        checked={price === 2}
                        onChange={() => setPrice(2)}
                    />
                    <Checkbox
                        id="default-checkbox3"
                        text="Highest to Lowest"
                        checked={price === 3}
                        onChange={() => setPrice(3)}
                    />
                </div>
                <div>
                    <h2 className="text-2xl border-b-[1px] mb-2">Sales</h2>
                    <Checkbox
                        id="default-checkbox1"
                        text="No Discounts"
                        checked={sale === 'male'}
                        onChange={() => setSale('male')}
                    />
                    <Checkbox
                        id="default-checkbox2"
                        text="Discounts"
                        checked={sale === 'male1'}
                        onChange={() => setSale('male1')}
                    />
                    <Checkbox
                        id="default-checkbox3"
                        text="More than 50% off"
                        checked={sale === 'female'}
                        onChange={() => setSale('female')}
                    />
                </div>
            </div>
        </div>
    )
}

export default SideBar
