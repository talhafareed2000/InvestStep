import React from "react";
import { Link } from "react-router-dom";
import '../Coin.css';

const Coin = ({ coin }) => {
  
    return (
        <Link to={`/coins/${coin.id}`} className="coint">
            <div className="coint">
                <div className="coinlist-item">
                    <span className="coinList-rank">{coin.market_cap_rank}</span>
                    <img className="coinlist-image" src={coin.image} alt="" />
                    <span className="coinlist-name">{coin.name}</span>
                    <span className="coinList-price">${coin.current_price.toLocaleString("en-US")}</span>
            
                    <span
                    className={
                        coin.price_change_percentage_24h < 0
                        ? "text-red"
                        : "text-green"
                    }>
                        {coin.price_change_percentage_24h.toFixed(2)}%
                    </span>
                    <span className="coinList-volume">${coin.total_volume.toLocaleString()}</span>

                    <span className="coinList-marketcap">${coin.market_cap.toLocaleString()}</span>
                    
                </div>
          </div>
        </Link>
      
  );
};

export default Coin;
