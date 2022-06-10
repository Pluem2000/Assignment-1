import React from 'react'

const TradeHistory = () => {
  return (
    <div className="border-5 border-black sm:w-full mb-4 w-full max-w-4xl">
      <h3 className="text-left text-3xl font-bold ">Order History</h3>
      <div className=" w-full max-x-4xl overflow-x-auto md:overflow-hidden relative bg-white rounded-lg mt-4 border-2 border-blue">
        <table className="w-full text-center">
          <thead className="border-b-2">
            <tr>
              <th className="w-28 p-4">Order</th>
              <th className="w-28 p-4">Date</th>
              <th className="w-28 p-4">Symbol</th>
              <th className="w-28 p-4">Type</th>
              <th className="w-28 p-4">Price</th>
              <th className="w-28 p-4">Input</th>
              <th className="w-28 p-4">output</th>
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
              <td className="p-4 text-center">0.3</td>
            </tr>
            <tr>
              <td className="p-4">#2</td>
              <td className="p-4">2/5/2022 10:30</td>
              <td className="p-4">BTC_USDT</td>
              <td className="p-4">Sell</td>
              <td className="p-4">40,000</td>
              <td className="p-4">10,000</td>
              <td className="p-4 text-center">0.3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TradeHistory