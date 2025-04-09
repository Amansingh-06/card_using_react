import React, { useContext } from "react";
import { MenuContext } from "../context/MenuContext";
const CartCounter = () => {
    const { cart } = useContext(MenuContext);;
    return (
        <div className="fixed top-4 right-40 bg-red-500 text-white px-3 py-1 rounded-full shadow-md">
            {/* only show length of the cart */}
            Cart: {cart.length} 
        </div>
    );
};

export default CartCounter