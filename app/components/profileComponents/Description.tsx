import React from 'react';
import { HiMiniRocketLaunch } from "react-icons/hi2"; // Import the icon from react-icons

interface DescriptionProps {
    text: string;
}

const Description: React.FC<DescriptionProps> = ({ text }) => {
    return (
        <p className="description">
            <HiMiniRocketLaunch size={14} color="black" />
            {text}
        </p>
    );
};

export default Description;