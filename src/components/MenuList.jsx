import React, { useContext } from 'react';
import { MenuContext } from '../context/MenuContext';
import MenuCard from './MenuCard';

const MenuList = () => {
    const { items } = useContext(MenuContext);
    return (
        <div className="max-w-2xl mx-auto mt-8">
            {items.map((item) => (
                <MenuCard key={item.id} item={item} />
            ))}
        </div>
    );
};

export default MenuList;
