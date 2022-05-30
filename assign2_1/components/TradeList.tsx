import React from 'react'

const TradeList = () => {
    return (
        <div className="flex">
            <div className="flex pl-48 pr-20">
                <table className="text-left">
                    <thead>
                        <p className="text-2xl font-bold pl-4">Asks</p>
                        <tr>
                            <th className="p-4">Price (USDT)</th>
                            <th className="p-4">Amount (BTC)</th>
                            <th className="p-4">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-4 text-red-700">41403.12</td>
                            <td className="p-4">0.34</td>
                            <td className="p-4">10.67</td>
                        </tr>
                        <tr>
                            <td className="p-4 text-red-700">41403.12</td>
                            <td className="p-4">0.34</td>
                            <td className="p-4">10.67</td>
                        </tr>
                        <tr>
                            <td className="p-4 text-red-700">41403.12</td>
                            <td className="p-4">0.34</td>
                            <td className="p-4">10.67</td>
                        </tr>
                        <tr>
                            <td className="p-4 text-red-700">41403.12</td>
                            <td className="p-4">0.34</td>
                            <td className="p-4">10.67</td>
                        </tr>
                        <tr>
                            <td className="p-4 text-red-700">41403.12</td>
                            <td className="p-4">0.34</td>
                            <td className="p-4">10.67</td>
                        </tr>
                        <tr>
                            <td className="p-4 text-red-700">41403.12</td>
                            <td className="p-4">0.34</td>
                            <td className="p-4">10.67</td>
                        </tr>
                        <tr>
                            <td className="p-4 text-red-700">41403.12</td>
                            <td className="p-4">0.34</td>
                            <td className="p-4">10.67</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex">
                <table className="text-left">
                    <thead>
                        <p className="text-2xl font-bold pl-4">Bids</p>
                        <tr>
                            <th className="p-4">Price (USDT)</th>
                            <th className="p-4">Amount (BTC)</th>
                            <th className="p-4">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-4 text-green-500">31403.12</td>
                            <td className="p-4">0.34</td>
                            <td className="p-4">10.67</td>
                        </tr>
                        <tr>
                            <td className="p-4 text-green-500">31403.12</td>
                            <td className="p-4">0.34</td>
                            <td className="p-4">10.67</td>
                        </tr>
                        <tr>
                            <td className="p-4 text-green-500">31403.12</td>
                            <td className="p-4">0.34</td>
                            <td className="p-4">10.67</td>
                        </tr>
                        <tr>
                            <td className="p-4 text-green-500">31403.12</td>
                            <td className="p-4">0.34</td>
                            <td className="p-4">10.67</td>
                        </tr>
                        <tr>
                            <td className="p-4 text-green-500">31403.12</td>
                            <td className="p-4">0.34</td>
                            <td className="p-4">10.67</td>
                        </tr>
                        <tr>
                            <td className="p-4 text-green-500">31403.12</td>
                            <td className="p-4">0.34</td>
                            <td className="p-4">10.67</td>
                        </tr>
                        <tr>
                            <td className="p-4 text-green-500">31403.12</td>
                            <td className="p-4">0.34</td>
                            <td className="p-4">10.67</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TradeList