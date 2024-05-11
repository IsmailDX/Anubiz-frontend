import React, { useState } from 'react'

type CheckboxProps = {
    id: string
    text: string
    checked: boolean
    onChange: () => void
}

const Checkbox: React.FC<CheckboxProps> = ({ id, text, checked, onChange }) => {
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
                className="text-white select-none cursor-pointer"
            >
                {text}
            </label>
        </div>
    )
}

export default Checkbox
