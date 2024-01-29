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
import { Provider } from "react-redux";
import store from "./Store/store.js"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/compare",
                element: <Compare />,
            },
            {
                path: "/dashboard",
                element: <DashboardPage />,
            },
            {
                path: "/coin/:id",
                element: <CoinPage />,
            },
            {
                path: "/watchlist",
                element: <WatchlistPage />,
            },
            {
                path: "/signup",
                element: <Signup />,
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
