import React, { useState } from 'react';

const Description = ({ text }) => {
    const [expanded, setExpanded] = useState(false);
    const toggleExpand = () => setExpanded(!expanded);

    return (
        <div className="text-gray-600 text-sm mt-1">
            {expanded ? text : `${text.slice(0, 50)}...`}
            <button className="text-blue-500 ml-1" onClick={toggleExpand}>
                {expanded ? 'less' : 'more'}
            </button>
        </div>
    );
};

export default Description;
