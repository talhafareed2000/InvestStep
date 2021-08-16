import React from "react";
import "../CoinChart.css"

const CoinData = ({ data }) => {

  const renderData = () => {
    if (data) {
      return (
        <div className="coin-data-containter">
          <div className="coin-data-row1">
            <div className="coin-data-row-elements">
              <span className="coin-data-category late-change">Market Cap </span>
              <span className="coin-data late-change">Volume(24H)</span>
            </div>

            <div className="coin-data-row-elements">
              <span className="coin-data-category late-change">High 24h</span>
              <span className="coin-data late-change">Low 24h</span>
            </div>
            <div className="coin-data-row-elements">
              <span className="coin-data-category late-change">Circulating Supply</span>
              <span className="coin-data late-change">Total Supply </span>
            </div>
          </div>



          <div className="coin-data-row2">

            <div className="coin-data-row-elements">
              <span className="coin-data-category">${data.market_cap.toLocaleString("en-US")}</span>
              <span className="coin-data">${data.total_volume.toLocaleString("en-US")}</span>
            </div>

            <div className="coin-data-row-elements">
              <span className="coin-data-category">${data.high_24h.toLocaleString("en-US")}</span>
              <span className="coin-data">${data.low_24h.toLocaleString("en-US")}</span>
            </div>

            <div className="coin-data-row-elements">
              <span className="coin-data-category">{data.circulating_supply.toLocaleString("en-US")}</span>
              <span className="coin-data">{data.total_supply == null?"-":data.total_supply.toLocaleString()}</span>
            </div>
          </div>
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinData;
