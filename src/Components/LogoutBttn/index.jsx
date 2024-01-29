import React from "react";
import { useDispatch, useSelector } from "react-redux";

const LogoutBttn = () => {
    
    
    return (
        <button
            onClick={logoutHandler}
        >
            Logout
        </button>
    );
};

export default LogoutBttn;
