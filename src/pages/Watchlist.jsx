import React, { useEffect, useState } from "react";
import { Button } from "../Components";
import { Header } from "../Components";
import { Loader } from "../Components";
import { get100Coins } from "../functions/get100Coins";
import { TabsComponent } from "../Components";
import { Link } from "react-router-dom";

function WatchlistPage() {
    const coins = JSON.parse(localStorage.getItem("watchlist"));
    const [myWatchlist, setMyWatchlist] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getData();
    },[myWatchlist])

    const getData = async () => {
        const allCoins = await get100Coins();
        if (coins) {
            setMyWatchlist(allCoins.filter((item) => coins.includes(item.id)));
        }
        setLoading(false);
    };

    return (
        <div>
            {loading || !coins ? (
                <Loader />
            ) : (
                <div style={{ minHeight: "90vh" }}>
                    {myWatchlist?.length === 0 || !coins ? (
                        <div>
                            <h1
                                style={{
                                    textAlign: "center",
                                    marginBottom: "2rem",
                                    color : "var(--black)"
                                }}
                            >
                                No Items in the Watchlist
                            </h1>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <Link to="/dashboard">
                                    <Button text={"Dashboard"} />
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div style={{ height: "95vh" }}>
                            <TabsComponent
                                coins={myWatchlist}
                                isWatchlistPage={true}
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default WatchlistPage;
