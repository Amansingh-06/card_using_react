import React, { useState } from 'react';
import Rating from './Rating';
import Description from './Description';

const MenuCard = ({ item }) => {
    return (
        <div className="border-b border-dashed p-4 flex flex-col md:flex-row gap-4 items-start">
            {/* Left Section */}
            <div className="flex-1">
                <div className="flex items-center gap-2">
                    {item.isVeg && (
                        <span className="w-3 h-3 border border-green-700 rounded-sm bg-green-800"></span>
                    )}
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                </div>
                <Rating rating={item.rating} reviews={item.reviews} />
                {item.deliveryTime && (
                    <div className="text-green-700 text-sm font-medium">{item.deliveryTime}</div>
                )}
                <div className="text-lg font-semibold mt-1">₹{item.price}</div>
                <Description className="text-md" text={item.description} />

                <div className="flex gap-4 mt-2">
                    <button className="text-gray-500 text-lg">🔖</button>
                    <button className="text-gray-500 text-lg">↗</button>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col items-center w-full sm:w-auto">
                <div className="relative  w-40 h-40">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full rounded-md object-cover"
                    />
                    <button className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-red-500 border border-red-500 px-4 py-1 text-sm font-bold rounded shadow">
                        ADD +
                    </button>
                </div>
                {item.customisable && (
                    <div className="text-center text-gray-400 text-sm mt-3">customisable</div>
                )}
            </div>
        </div>
    );
};

export default MenuCard;
