import React from "react";
import "./style.css";

const Button = ({ text, outlined, type }) => {
    if (type) {
        return (
            <>
                <button type={type}>{text}</button>
            </>
        );
    }
    return <div className={outlined ? "outlined-btn" : "btn"}>{text}</div>;
};

export default Button;
