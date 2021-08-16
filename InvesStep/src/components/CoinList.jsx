import React, { useEffect, useState} from "react";
import axios from 'axios';
import Coin from "./Coin";

const CoinList = () => {
    const [coins, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
      setIsLoading(true);
      axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false"
      ).then(response =>{
        setCoins(response.data);
        setIsLoading(false);
      }).catch(error => console.log(error));
    }, []);
    
    const renderCoins = () => {
      if (isLoading) {
        return <div className="coin-detail-page-loading">Loading...</div>;
      }
  
      return (
        <ul className="coinlist">
          {coins.map((coin) => {
            return (
            <div>
                <Coin key={coin.id} coin={coin} />
            </div>
            );
          })}
        </ul>
      );
    };
  
    return <div>
        <div className="coinlist-item-description">
            <span className="coinList-rank description">Rank</span>
            <span className="coinlist-name description">LOGO</span>
            <span className="coinlist-name description">NAME</span>
            <span className="coinList-price description">PRICE</span>
            <span className="coinList-volume description">24H CHANGE</span>
            <span className="coinList-volume description">VOLUME</span>
             <span className="coinList-marketcap description">MARKET CAP</span>    
        </div>
        {renderCoins()}
        </div>;
  };

export default CoinList;
