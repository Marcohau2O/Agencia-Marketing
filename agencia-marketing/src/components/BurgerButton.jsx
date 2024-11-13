import React from "react";

function BurgerButton({ handleClick, clicked }) {
    return (
        <div
            onClick={handleClick}
            className={`relative w-9 h-8 cursor-pointer transition-all duration-500 ${clicked ? "open" : ""}`}
        >
            <span
                className={`absolute top-0 left-0 w-full h-1 bg-white rounded transition-all duration-500 ${clicked
                    ? "transform rotate-45 top-3"
                    : "hover:rotate-[-3deg] hover:scale-y-110"
                }`}
            ></span>
            <span
                className={`absolute top-3 left-0 w-full h-1 bg-white rounded transition-all duration-500 ${clicked ? "opacity-0" : "hover:rotate-3 hover:scale-y-110"
                }`}
            ></span>
            <span
                className={`absolute bottom-0 left-0 w-full h-1 bg-white rounded transition-all duration-500 ${clicked
                    ? "transform -rotate-45 top-3"
                    : "hover:rotate-[-4deg] hover:scale-y-110"
                }`}
            ></span>
        </div>
    );
}

export default BurgerButton;
