import React from 'react'
import menuPizza from '../../../../mocks/pizza.json'
import { MenuItem } from '../menu-item/menu-item.component'

export const MenuList = () => {
    return (
        <div className='flex flex-wrap gap-10'>
            {menuPizza.map((item, index) => (
                <MenuItem imagePath={`./assets/pizza/${item.image}`} {...item} key={item.id} />
            ))}
        </div>
    )
}