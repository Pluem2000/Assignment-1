import React from "react";

const MarketDiffList = () => {
  return (
    <div className="border-5 border-black sm:w-full mb-4 w-full max-w-4xl">
      <p className="font-bold text-3xl pb-2">List</p>
      <div className="relative overflow-x-auto shadow-lg sm:rounded-lg max-x-4xl">
        <table className="w-full text-left">
          <thead className="border-b-2 bg-white rounded-md">
            <tr>
              <th className="w-28 p-4">
                Token1
              </th>
              <th  className="w-28 p-4">
                Token2
              </th>
              <th  className="w-28 p-4">
                Binance
              </th>
              <th  className="w-28 p-4">
                FTX
              </th>
              <th  className="w-28 p-4">
                Diff
              </th>
              <th  className="w-28 p-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="w-28 p-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                BTC
              </th>
              <td className="w-28 p-4">
                USDT
              </td>
              <td className="w-28 p-4">
                40,000
              </td>
              <td className="w-28 p-4">
                40,020
              </td>
              <td className="w-28 p-4">
                -0.049%
              </td>
              <td className="w-28 p-4 text-right">
                <button className=" text-white bg-red-700 rounded-md px-2 py-1">Delete</button>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th className="w-28 p-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                ETH
              </th>
              <td className="w-28 p-4">
                USDT
              </td>
              <td className="w-28 p-4">
                30,000
              </td>
              <td className="w-28 p-4">
                2,999
              </td>
              <td className="w-28 p-4">
                -0.033%
              </td>
              <td className="w-28 p-4 text-right">
                <button className="text-white bg-red-700 rounded-md px-2 py-1">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketDiffList;