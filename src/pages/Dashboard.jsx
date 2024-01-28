import React, { useState, useEffect } from "react";
import {
    TabsComponent,
    Search,
    PaginationComponent,
    Loader,
    BackToTop,
} from "../Components";
import { get100Coins } from "../functions";

const DashboardPage = () => {
    const [coins, setCoins] = useState([]);
    const [paginatedCoins, setPaginatedCoins] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const handlePageChange = (event, value) => {
        setPage(value);
        let prevInd = (value - 1) * 10;
        console.log(prevInd);
        setPaginatedCoins(coins.slice(prevInd, prevInd + 10));
    };
    const onSearchChange = (e) => {
        setSearch(e.target.value);
    };
    let filteredCoins = coins.filter(
        (item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.symbol.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        const myCoins = await get100Coins();
        if (myCoins) {
            setCoins(myCoins);
            setPaginatedCoins(myCoins.slice(0, 10));
            setIsLoading(false);
        }
    };
    return (
        <>
            <BackToTop />
            {isLoading ? (
                <Loader />
            ) : (
                <div>
                    <Search search={search} onSearchChange={onSearchChange} />
                    <TabsComponent
                        coins={search ? filteredCoins : paginatedCoins}
                    />
                    {!search && (
                        <PaginationComponent
                            coins={coins}
                            page={page}
                            handlePageChange={handlePageChange}
                        />
                    )}
                </div>
            )}
        </>
    );
};

export default DashboardPage;
