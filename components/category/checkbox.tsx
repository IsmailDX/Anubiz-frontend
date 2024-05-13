import React, { useState } from 'react'

type CheckboxProps = {
    id: string
    text: string
    checked: boolean
    onChange: () => void
    textColor?: string
}

const Checkbox = ({
    id,
    text,
    checked,
    onChange,
    textColor,
}: CheckboxProps) => {
    return (
        <div className="flex items-center space-x-3 pl-2">
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="w-4 h-4"
            />
            <label
                htmlFor={id}
                className={`${textColor} select-none cursor-pointer`}
            >
                {text}
            </label>
        </div>
    )
}

export default Checkbox
