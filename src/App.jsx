import React from "react";
import { Header, ScrollDiv, Scroll, Footer } from "./Components/index.js";
import { Outlet } from "react-router-dom";

const App = () => {
    return (
        <>
            <Header />
            <Scroll />
            <ScrollDiv />
            <Outlet />
            <Footer />
        </>
    );
};

export default App;
