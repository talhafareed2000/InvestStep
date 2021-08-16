import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinChart from "../components/CoinChart";
import CoinData from "../components/CoinData";
import coinGecko from "../APIs/CoinGecko";
import "../CoinChart.css"

const CoinPage = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const formatData = (data) => {
    return data.map((element) => {
      return {
        t: element[0],
        y: element[1].toFixed(4),
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [day, week, month, year, all, detail] = await Promise.all([
        coinGecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "1",
          },
        }),
        coinGecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "7",
          },
        }),
        coinGecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "30",
          },
        }),
        coinGecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "365",
          },
        }),
        coinGecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "max",
          },
        }),
        coinGecko.get("/coins/markets/", {
          params: {
            vs_currency: "usd",
            ids: id,
          },
        }),
      ]);
      console.log(detail);

      setCoinData({
        day: formatData(day.data.prices),
        week: formatData(week.data.prices),
        month: formatData(month.data.prices),
        year: formatData(year.data.prices),
        all: formatData(all.data.prices),
        detail: detail.data[0],
      });
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const renderData = () => {
    if (isLoading) {
      return <div className="coin-detail-page-loading">Loading....</div>;
    }
    return (
      <div className="coinlist">
        <CoinChart data={coinData} />
        <CoinData data={coinData.detail} />
      </div>
    );
  };

  return renderData();
};

export default CoinPage;

