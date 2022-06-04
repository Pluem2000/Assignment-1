import React from 'react'

const TradeHistory = () => {
  return (
    <div>
      <div className="flex pl-32  w-screen">
        <h3 className="text-left text-2xl font-bold pb-4">Oder History</h3>
      </div>
      <div className="flex w-5/6 pl-32 pb-4">
        <table className="rounded-lg shadow-lg w-5/6 text-left text-lg bg-white ">
          <thead className="border-b-2">
            <tr>
              <th className="p-4">Order ID</th>
              <th className="p-4">Date</th>
              <th className="p-4">Symbol</th>
              <th className="p-4">Type</th>
              <th className="p-4">Price</th>
              <th className="p-4">Input</th>
              <th className="p-4">Output</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4">#1</td>
              <td className="p-4">2/5/2022 10:30</td>
              <td className="p-4">BTC_USDT</td>
              <td className="p-4">Buy</td>
              <td className="p-4">40,000</td>
              <td className="p-4">10,000</td>
              <td className="p-4">0.3</td>
            </tr>
            <tr>
              <td className="p-4">#2</td>
              <td className="p-4">2/5/2022 10:30</td>
              <td className="p-4">BTC_USDT</td>
              <td className="p-4">Sell</td>
              <td className="p-4">40,000</td>
              <td className="p-4">10,000</td>
              <td className="p-4">0.3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TradeHistory