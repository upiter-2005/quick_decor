import React, { useState } from "react";
interface IReadMore {
    children: string
}
export const ReadMore:React.FC<IReadMore> = ({ children }) => {
    const text = `${children} `;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <>
        <div className="relative"> 
            <div className="inline text-sm leading-5 min-h-0 md:text-base text-gray md:leading-6 mb-0 transition-all" dangerouslySetInnerHTML={isReadMore ? {__html: text.slice(0, 390) + '...' } : {__html: text }} ></div>

            <span
                onClick={toggleReadMore}
                className="read-or-hide"
                style={{ color: "#ff0000", fontWeight: 800, display: "inline", cursor: "pointer"}}
            >
                {isReadMore ? "...розгорнути" : " Згорнути"}
            </span>    
        </div>
            
            
            
        </>
    );
};