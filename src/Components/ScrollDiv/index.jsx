import React, { useEffect, useState } from "react";
import { get100Coins } from "../../functions";
import "./style.css";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { LinearProgress } from "@mui/material";

const ScrollDiv = () => {
    const [allCoins, setAllCoins] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const coins = await get100Coins();
            setAllCoins(coins);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <Marquee className="mark">
            {allCoins.length > 0 ? (
                allCoins.map((coin, ind) => (
                    <div className="content coin-price " key={ind}>
                        <Link
                            style={{
                                color:
                                    coin.price_change_percentage_24h > 0
                                        ? "var(--green)"
                                        : "var(--red)",
                            }}
                            to={`/coin/${coin.id}`}
                        >
                            <h3
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <img
                                    src={coin.image}
                                    className="coin-logo"
                                    alt=""
                                    style={{ overflow: "hidden" }}
                                />
                                <span>
                                    {coin.name}
                                    {" - "}${coin.current_price}
                                </span>
                            </h3>
                        </Link>
                    </div>
                ))
            ) : (
                <LinearProgress />
                /* <p>Loading...</p> */
            )}
        </Marquee>
    );
};

export default ScrollDiv;
