import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./Context/ThemeContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Compare from "./pages/Compare.jsx";
import DashboardPage from "./pages/Dashboard.jsx";
import CoinPage from "./pages/CoinPage.jsx";
import WatchlistPage from "./pages/Watchlist.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import { Provider } from "react-redux";
import store from "./Store/store.js";
import { AuthLayout } from "./Components/index.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <AuthLayout authentication={false}>
                <Login />
            </AuthLayout>
        ),
    },
    {
        path: "/signup",
        element: (
            <AuthLayout authentication={false}>
                <Signup />
            </AuthLayout>
        ),
    },
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/home",
                element: (
                    <AuthLayout authentication>
                        <Home />
                    </AuthLayout>
                ),
            },
            {
                path: "/compare",
                element: (
                    <AuthLayout authentication>
                        <Compare />
                    </AuthLayout>
                ),
            },
            {
                path: "/dashboard",
                element: (
                    <AuthLayout authentication>
                        <DashboardPage />
                    </AuthLayout>
                ),
            },
            {
                path: "/coin/:id",
                element: (
                    <AuthLayout authentication>
                        <CoinPage />
                    </AuthLayout>
                ),
            },
            {
                path: "/watchlist",
                element: (
                    <AuthLayout authentication>
                        <WatchlistPage />
                    </AuthLayout>
                ),
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider>
            <Provider store={store}>
                <RouterProvider router={router}>
                    <App />
                </RouterProvider>
            </Provider>
        </ThemeProvider>
    </React.StrictMode>
);
