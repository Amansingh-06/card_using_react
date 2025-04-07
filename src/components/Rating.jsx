import React from 'react';

const Rating = ({ rating, reviews }) => {
    if (!rating) return null;
    return (
        <div className="text-yellow-500 text-sm flex items-center">
            {'★'.repeat(Math.floor(rating))}
            <span className="text-gray-600 ml-1">({reviews})</span>
        </div>
    );
};

export default Rating;
