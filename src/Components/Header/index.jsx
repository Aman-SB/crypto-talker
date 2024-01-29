import React, { useState } from "react";
import "./style.css";
import TemporaryDrawer from "./Drawer";
import Button from "../Button";
import { Link, NavLink, useNavigate } from "react-router-dom";
import CustomizedSwitches from "../ThemeButton";
import { ThemeProvider } from "../../Context/ThemeContext";
import LogoutBttn from "../LogoutBttn";
import { useDispatch, useSelector } from "react-redux";
import authService from "../../Appwrite/auth";
import {logout} from "../../Store/authSlice"

const Header = () => {
    const authStatus = useSelector((state) => state.auth?.status);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
            navigate("/");
        });
    };
    return (
        <ThemeProvider>
            <div className="navbar">
                <div>
                    {authStatus && (
                        <div className="logoutbtn"                         
                            onClick={logoutHandler}
                        >
                            <h1 className="logo">
                                CryptoTalker
                                <span style={{ color: "var(--blue)" }}>.</span>
                            </h1>
                        </div>
                    )}
                </div>
                <div className="links-container">
                    <div className="container-inside">
                        <CustomizedSwitches />
                        <div className="links">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "active" : "inactive"
                                }
                            >
                                <p className="link">Home</p>
                            </NavLink>
                            <NavLink
                                to="/compare"
                                className={({ isActive }) =>
                                    isActive ? "active" : "inactive"
                                }
                            >
                                <p className="link">Compare</p>
                            </NavLink>
                            <NavLink
                                to="/watchlist"
                                className={({ isActive }) =>
                                    isActive ? "active" : "inactive"
                                }
                            >
                                <p className="link">Watchlist</p>
                            </NavLink>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    isActive ? "active" : "inactive"
                                }
                            >
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
