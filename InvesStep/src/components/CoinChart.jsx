import React, { useRef, useEffect, useState } from "react";
import Chartjs from "chart.js";

import "../CoinChart.css"

const CoinChart = ({ data }) => {
  const chartRef = useRef();
  const { day, week, month, year, all, detail } = data;
  const [timeFormat, setTimeFormat] = useState("24h");

  const determineTimeFormat = () => {
    switch (timeFormat) {
      case "24h":
        return day;
      case "7d":
        return week;
      case "1m":
        return month;
      case "1y":
        return year;
      case "max":
        return all;
      default:
        return day;
    }
  };

  useEffect(() => {
    if (chartRef && chartRef.current && detail) {
      
      new Chartjs(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: `${detail.name} price`,
              data: determineTimeFormat(),
              backgroundColor: "#EDDFEF", 
              //backgroundColor: "#92DFF3", 
              
              borderColor: "#D5CFE1",
              //borderColor: "#7AD7F0",

              pointRadius: 0,
            },
          ],
        },
        options: {
          
          legend: {
            display: false,
          },
        
          animation: {
            duration: 2000,
          },
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            xAxes: [
              {
                type: "time",
                distribution: "linear",
                
                gridLines: {
                  color: "rgba(0, 0, 0, 0)",
                  
                },
        
                ticks: {
                  //fontColor: "rgba(0,0,0,0.5)",
                  maxTicksLimit: 15,
                  
                  
              }
              },
            ],
            yAxes: [
              {
                beginAtZero: true,
                gridLines: {
                  color: "rgba(0, 0, 0, 0.05)",
                  drawBorder: false,
                },
                ticks: {
                  //fontStyle: "bold",
                }
              }
            ]
          },
        },
      });
    }
  });

  const renderPrice = () => {
    if (detail) {
      return (
        <>
          <span className="coin-chart-name">{detail.name}</span>
          <span className="coin-chart-price">${detail.current_price.toLocaleString()} USD  </span>
          <span className={detail.price_change_24h < 0 ? "coin-chart-percent-red coin-chart-price": "coin-chart-percent-green coin-chart-price"}>
            { detail.price_change_percentage_24h.toFixed(2)}%
          </span>
        </>
      );
    }
  };
  return (
    <div className="chartContainer">
      <span className="coin-price-percent">{renderPrice()}</span>
      <div className="chart-button">
        <button
          onClick={() => setTimeFormat("24h")}
          className="btn-switch"
        >
          24H
        </button>
        <button
          onClick={() => setTimeFormat("7d")}
          className="btn-switch"
        >
          7D
        </button>
        <button
          onClick={() => setTimeFormat("1m")}
          className="btn-switch"
        >
          1M
        </button>
        <button
          onClick={() => setTimeFormat("1y")}
          className="btn-switch"
        >
          1Y
        </button>
        <button
          onClick={() => setTimeFormat("max")}
          className="btn-switch"
        >
          All
        </button>
      </div>
        
      <div className="coin-chart">
        <canvas ref={chartRef} id="myChart" width={900} height={500}></canvas>
      </div> 
    </div>
  );
};

export default CoinChart;

