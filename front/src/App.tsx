import React from 'react';
import {Header} from '@app/common/components/header/header.component'
import {MenuList} from '@app/modules/components/menu/menu-list/menu-list.component'
import PizzaMenu from '@app/mocks/pizza.json'
import {Footer} from '@app/common/components/footer/footer.component'

export const App = () => (
    <div className="">

        <Header />
        <div className='mx-auto max-w-7xl'>
            <MenuList items={PizzaMenu} />
        </div>
        <Footer />

    </div>
)

 