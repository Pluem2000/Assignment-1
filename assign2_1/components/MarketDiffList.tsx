import React from "react";

const MarketDiffList = () => {
  return (
    <div className="-pt-5">
      <div className="flex px-40 -py-7 w-screen pb-5">
        <h3 className="text-left text-3xl font-bold">List</h3>
      </div>
      <div className="flex px-40 -py-6 w-screen">
        <table className="rounded-lg shadow-lg w-5/6 text-left text-lg bg-white ">
          <thead>
            <tr>
              <th className="p-4">Token 1</th>
              <th className="p-4">Token 2</th>
              <th className="p-4">Binance</th>
              <th className="p-4">FTX</th>
              <th className="p-4">Diff</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4">BTC</td>
              <td className="p-4">USDT</td>
              <td className="p-4">40,000</td>
              <td className="p-4">40,020</td>
              <td className="p-4">-0.049%</td>
              <td className="p-4">
                <button className="bg-red-700 text-white rounded px-5 py-1">Delete</button>
              </td>
            </tr>
            <tr>
              <td className="p-4">ETH</td>
              <td className="p-4">USDT</td>
              <td className="p-4">30,000</td>
              <td className="p-4">2,999</td>
              <td className="p-4">-0.033%</td>
              <td className="p-4">
                <button className="bg-red-700 text-white rounded px-5 py-1">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketDiffList;