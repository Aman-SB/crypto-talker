import axios from "axios";
import conf from "../conf";

export const get100Coins = () => {
    const url =
        conf.coingeckourl +
        "markets?vs_currency=usd&x_cg_demo_api_key=CG-P9pA4WokEwF3Rg1HNoAwBsHQ&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en";
    const myCoins = axios
        .get(url)
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            console.log("Error :: 100 coins :: ", error);
        });
    return myCoins;
};
