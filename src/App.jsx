import React from "react";
import { Header, ScrollDiv, Scroll, Footer } from "./Components/index.js";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <>
            <ToastContainer />
            <Header />
            <Scroll />
            <Outlet />
            <Footer />
        </>
    );
};

export default App;
