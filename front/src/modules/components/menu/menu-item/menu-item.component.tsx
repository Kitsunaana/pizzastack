import React, { FC } from 'react'

interface MenuItemProps {
    imagePath: string
    weight: number
    title: string
    ingredients: string
    price: number
}

export const MenuItem: FC<MenuItemProps> = ({ imagePath, weight, title, ingredients, price }) => {
    return (
        <div className='w-96 shadow-xl rounded-2xl bg-white'>
            <div className="relative">
                <img className='object-center rounded-t-2xl w-full h-[15rem] object-cover' src={imagePath} alt="Pizza image" />
                <span className='absolute bottom-1.5 right-3 bg-gray-900/50 text-white px-2 rounded-[2rem]'>{weight} г</span>
            </div>
            <div className="p-6">
                <h2 className='text-xl font-semibold mb-2'>{title}</h2>
                <p className="mb-6">{ingredients}</p>
                <span className='text-xl font-semibold'>{price} руб.</span>
            </div>
        </div>
    )
}
