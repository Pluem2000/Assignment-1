import React from 'react'
import Link from "next/link";
import { useRouter } from "next/router";
import { createChart } from 'lightweight-charts';

const MENUS = [
  {
    href: "/chart",
    text: "30M",
  },
  {
    href: "/chart",
    text: "1H",
  },
  {
    href: "/chart",
    text: "24H",
  },
  {
    href: "/chart",
    text: "1W",
  },
  {
    href: "/chart",
    text: "1M",
  },
  {
    href: "/chart",
    text: "1Y",
  },

];

const ChartGraph = () => {
  const router = useRouter();

  console.log(router.pathname);

  // const chart = createChart(document.body, { width: 400, height: 300 });
  // const candlestickSeries = chart.addCandlestickSeries();
  // candlestickSeries.setData([
  //   {time: "2018-12-22",open: 75.16,high: 82.84,low: 36.16,close: 45.72,},
  //   {time: "2018-12-23",open: 45.12,high: 53.9,low: 45.12,close: 48.09 },
  //   {time: "2018-12-24",open: 60.71,high: 60.71,low: 53.39,close: 59.29,},
  //   {time: "2018-12-25",open: 68.26,high: 68.26,low: 59.04,close: 60.5 },
  //   {time: "2018-12-26",open: 67.71,high: 105.85,low: 66.67,close: 91.04,},
  //   {time: "2018-12-27",open: 91.04,high: 121.4,low: 82.7,close: 111.4 },
  //   {time: "2018-12-28",open: 111.51,high: 142.83,low: 103.34,close: 131.25,},
  //   {time: "2018-12-29",open: 131.33,high: 151.17,low: 77.68,close: 96.43,},
  //   {time: "2018-12-30",open: 106.33,high: 110.2,low: 90.39,close: 98.1,},
  //   {time: "2018-12-31",open: 109.87,high: 114.69,low: 85.66,close: 111.26,},
  // ]);

  // chart.timeScale().fitContent();

  return (
    <div className="flex justify-between items-center ml-36 px-20 py-4 pb-48 bg-white rounded-lg shadow-lg relative">
      <div className="flex">
        <img
          src="/b-logo.png"
          alt="b-logo"
          className="w-[54px] h-[54px] mr-4"
        />
        <img
          src="/t-logo.png"
          alt="t-logo"
          className="w-[54px] h-[54px] mr-4"
        />
        <div className="mt-4">
          <p className="text-black text-base font-bold">BTC/USDT</p>
        </div>
        <img
          src="/bt-logo.png"
          alt="bt-logo"
          className="w-[20px] h-[20px] mx-4 mt-4 "
        />
      </div>

      <div className="flex text-black space-x-8 ml-44">
        {MENUS.map((menu) => (
          <Link key={menu.href} href={menu.href}>
            <button
              className={`bg-white rounded-lg hover:bg-blue-400 focus:ring focus:outline-2 focus:ring-blue-300 focus:bg-blue-400 text-md ${router.pathname === menu.href ? "text-black" : ""
                }`}
            >
              {menu.text}
            </button>
          </Link>
        ))}
      </div>
      <div className="flex absolute top-24">
        <p className="text-2xl font-bold">45,212.30</p>
        <p className="text-md mt-1 ml-4 text-slate-400">BTC/USDT</p>
        <p className="text-md mt-1 ml-4 text-red-600">-0.001(-2.14%)</p>
      </div>
      <div className="flex absolute top-36">
        <p className="text-md mt-1 ml-0 text-slate-400">Apr 05,2022, 07:37 PM</p>
      </div>
    </div>
  )
}

export default ChartGraph