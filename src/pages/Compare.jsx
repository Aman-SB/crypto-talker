import React, { useEffect, useState } from "react";
import {
    SelectCoins,
    SelectDays,
    Loader,
    List,
    CoinInfo,
    LineChart,
    TogglePriceType,
} from "../Components";
import {
    coinObject,
    getCoinData,
    settingChartData,
    getCoinPrices,
} from "../functions";

const Compare = () => {
    const [crypto1, setCrypto1] = useState("bitcoin");
    const [crypto2, setCrypto2] = useState("ethereum");
    const [crypto1Data, setCrypto1Data] = useState({});
    const [crypto2Data, setCrypto2Data] = useState({});
    const [days, setDays] = useState(30);
    const [isLoading, setIsLoading] = useState(true);
    const [priceType, setPriceType] = useState("prices");
    const [chartData, setChartData] = useState({});


    async function fetchingCoinPrice(crypto,days,priceType){
        const price = await getCoinPrices(crypto,days,priceType);
        return price;
    }

    async function handleDaysChange(e) {
        setIsLoading(true);
        setDays(e.target.value);
        // getting the coin price for 1 coin 
        const prices1 = await fetchingCoinPrice(crypto1, e.target.value, priceType);
        const prices2 = await fetchingCoinPrice(crypto2, e.target.value, priceType);
        settingChartData(setChartData, prices1, prices2);
        setIsLoading(false);
    }
    const handlePriceTypeChange = async (e, newType) => {
        setIsLoading(true);
        setPriceType(e.target.value);
        // getting the coin price for 1 coin 
        const prices1 = await fetchingCoinPrice(crypto1, days, e.target.value);
        const prices2 = await fetchingCoinPrice(crypto2, days, e.target.value);
        settingChartData(setChartData, prices1, prices2);
        setIsLoading(false);
    };

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        setIsLoading(true);
        //getting coin data for 1 coin
        const data1 = await getCoinData(crypto1);
        const data2 = await getCoinData(crypto2);
        if (data1) {
            coinObject(setCrypto1Data, data1);
        }
        if (data2) {
            coinObject(setCrypto2Data, data2);
        }
        if (data1 && data2) {
            //getting coin price for 1 coin
            const prices1 = await fetchingCoinPrice(crypto1, days, priceType);
            const prices2 = await fetchingCoinPrice(crypto2, days, priceType);
            settingChartData(setChartData, prices1, prices2);
            console.log(prices1, prices2);
            if (prices1.length > 0 && prices2.length > 0) {
                console.log("Both prices fetched", prices1, prices2);
                setIsLoading(false);
            }
        }
    }

    const handleCoinChange = async (e, isCoin2) => {
        setIsLoading(true);
        if (isCoin2) {
            setCrypto2(e.target.value);
            const data = await getCoinData(e.target.value);
            coinObject(setCrypto2Data, data);
            const prices1 = await fetchingCoinPrice(crypto1, days, priceType);
            const prices2 = await fetchingCoinPrice(crypto2, days, priceType);
            if (prices1.length > 0 && prices2.length > 0) {
                console.log("Both prices fetched", prices1, prices2);
                setIsLoading(false);
            }
        } else {
            setCrypto1(e.target.value);
            const data = await getCoinData(e.target.value);
            coinObject(setCrypto1Data, data);
            const prices1 = await fetchingCoinPrice(crypto1, days, priceType);
            const prices2 = await fetchingCoinPrice(crypto2, days, priceType);
            setIsLoading(false);
        }
    };

    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <div className="coin-days-flex">
                        <SelectCoins
                            crypto1={crypto1}
                            crypto2={crypto2}
                            handleCoinChange={handleCoinChange}
                        />
                        <SelectDays
                            noPTag={true}
                            days={days}
                            handleDaysChange={handleDaysChange}
                        />
                    </div>
                    <div className="grey-wrapper">
                        <List coin={crypto1Data} />
                    </div>
                    <div className="grey-wrapper">
                        <List coin={crypto2Data} />
                    </div>
                    <div className="grey-wrapper">
                        <TogglePriceType
                            priceType={priceType}
                            handlePriceTypeChange={handlePriceTypeChange}
                        />
                        <LineChart
                            chartData={chartData}
                            multiAxis={true}
                            priceType={priceType}
                        />
                    </div>
                    <CoinInfo
                        heading={crypto1Data.name}
                        desc={crypto1Data.desc}
                    />
                    <CoinInfo
                        heading={crypto2Data.name}
                        desc={crypto2Data.desc}
                    />
                </>
            )}
        </div>
    );
};
export default Compare;
