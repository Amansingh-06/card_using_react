import React, { createContext, useState } from 'react';

import menuItems from '../data/MenuItems';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [items] = useState(menuItems);
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prev) => [...prev, item]);
    };
    return <MenuContext.Provider value={{ items,cart,addToCart }}>{children}</MenuContext.Provider>;
};
