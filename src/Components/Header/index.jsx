import React, { useState } from "react";
import "./style.css";
import TemporaryDrawer from "./Drawer";
import Button from "../Button";
import { Link, NavLink } from "react-router-dom";
import CustomizedSwitches from "../ThemeButton";
import { ThemeProvider } from "../../Context/ThemeContext";

const Header = () => {
    return (
        <ThemeProvider>
            <div className="navbar">
                <div>
                    <Link to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                        <h1 className="logo">
                            CryptoTalker
                            <span style={{ color: "var(--blue)" }}>.</span>
                        </h1>
                    </Link>
                </div>
                <div className="links-container">
                    <div className="container-inside">
                        <CustomizedSwitches />
                        <div className="links">
                            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                                <p className="link">Home</p>
                            </NavLink>
                            <NavLink to="/compare" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                                <p className="link">Compare</p>
                            </NavLink>
                            <NavLink to="/watchlist" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                                <p className="link">Watchlist</p>
                            </NavLink>
                            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                                <Button
                                    className="dash"
                                    text={"Dashboard"}
                                    outlined={false}
                                    onClick={() => console.log("btn clicked")}
                                />
                            </NavLink>
                        </div>
                    </div>
                    <div className="mobile-drawer">
                        <TemporaryDrawer />
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default Header;
