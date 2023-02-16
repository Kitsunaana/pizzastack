import { Pizza } from '@app/modules/types/pizza'
import { MenuItem } from '@app/modules/components/menu/menu-item/menu-item.component'
import { FC } from 'react'

interface MenuItemProps {
    items: Pizza[]
}

export const MenuList: FC<MenuItemProps> = ({ items }) => {
    return (
        <div className='flex flex-wrap gap-10 justify-center mb-12'>
            {items.map((item, index) => (
                <MenuItem imagePath={`./assets/pizza/${item.image}`} {...item} key={'pizza-' + item.id} />
            ))}
        </div>
    )
}