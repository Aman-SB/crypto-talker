import React from "react";
import { Header, ScrollDiv, Scroll, Footer } from "./Components/index.js";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <div style={{ width : "100%" , maxWidth : "120px"}}>
            <ToastContainer />
            <Header />
            <Scroll />
            <Outlet />
            <Footer />
        </div>
    );
};

export default App;
