import React, { createContext, useState } from 'react';

import menuItems from '../data/MenuItems';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [items] = useState(menuItems);
    return <MenuContext.Provider value={{ items }}>{children}</MenuContext.Provider>;
};
