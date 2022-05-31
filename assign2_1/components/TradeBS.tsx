import React from 'react'

const TradeBS = () => {
  return (
    <div className="flex pt-11">
      <form className="flex justify-between ">
        <div className="px-32">
          <h3 className="text-2xl font-bold text-left mb-2">Amount</h3>
          <input
            type="text"
            placeholder="Amount"
            className="p-2 rounded shadow w-96">
          </input>
          <div className="pt-4">
            <button className="rounded bg-green-500 text-white px-12 py-2 w-96">Buy</button>
          </div>
        </div>

        <div className="justify-around">
          <h3 className="text-2xl font-bold text-left mb-2">Amount</h3>
          <input
            type="text"
            placeholder="Amount"
            className="p-2 rounded shadow w-96">
          </input>
          <div className="pt-4">
            <button className="rounded bg-red-700 text-white px-12 py-2 w-96 ">Sell</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default TradeBS