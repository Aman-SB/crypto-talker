import React from "react";
import { Header, ScrollDiv , Scroll } from "./Components/index.js";
import { Outlet } from "react-router-dom";

const App = () => { 
    return (
        <>
            <Header />
            <Scroll/>
            <ScrollDiv />
            <Outlet />
        </>
    );
};

export default App;
