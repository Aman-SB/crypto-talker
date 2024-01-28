import axios from "axios";
import conf from "../conf"

export const getCoinData=(id)=>{
  const url = conf.coingeckourl + `${id}` + "?x_cg_demo_api_key=CG-P9pA4WokEwF3Rg1HNoAwBsHQ";
    const myData= axios.get(url)
        .then((response)=>{
          console.log("coin data" , response.data);
            return response.data;
          })
        .catch((error)=>{console.log( "Error :: coin data :: " , error)
          })
          return myData;
}