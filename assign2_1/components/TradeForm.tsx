import React from 'react'

const TradeForm = () => {
  return (
    <div className="rounded-lg shadow-lg w-full max-w-4xl p-12 bg-white z-20 relative">
      <form>
        <h3 className="text-3xl font-bold text-center mb-7">Trade</h3>
        <div className="flex flex-col sm:flex-row justify-around mb-5">
          <div>
            <p className="text-lg">Token 1</p>
            <input
              className="p-3 mt-5 rounded shadow w-full"
              type="text"
              placeholder="Fill in token"
            />
          </div>
          <div>
            <p className="text-lg">Token 2</p>
            <input
              className="p-3 mt-5 rounded shadow w-full"
              type="text"
              placeholder="Fill in token"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button className="rounded bg-darkbg text-white px-12 py-4 font-medium">
            Fetch
          </button>
        </div>
      </form>
    </div>
  );
};

export default TradeForm