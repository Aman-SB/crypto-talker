import axios from "axios";
import conf from "../conf";

export const getCoinPrices = (id, days, priceType) => {
    const url =
        conf.coingeckourl +
        `${id}` +
        "/market_chart?vs_currency=usd&days=" +
        `${days}` +
        "&interval=daily";
    const prices = axios
        .get(url)
        .then((response) => {
            return response.data[priceType];
        })
        .catch((error) => console.log("Error :: coin price :: ", error));
    return prices;
};
