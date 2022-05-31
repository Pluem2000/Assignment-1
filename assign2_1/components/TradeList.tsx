import React from 'react'

const TradeList = () => {
    return (
        <div className="flex">
            <div className="flex pl-44 pr-20">
                <table className="text-left">
                    <thead>
                        <p className="text-2xl font-bold pl-6">Asks</p>
                        <tr>
                            <th className="p-1 px-6">Price (USDT)</th>
                            <th className="p-1 px-6">Amount (BTC)</th>
                            <th className="p-1 px-6">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="-py-5 px-6 text-red-700">41403.12</td>
                            <td className="-py-5 px-6">0.34</td>
                            <td className="-py-5 px-6">10.67</td>
                        </tr>
                        <tr>
                            <td className="-py-5 px-6 text-red-700">41403.12</td>
                            <td className="-py-5 px-6">0.34</td>
                            <td className="-py-5 px-6">10.67</td>
                        </tr>
                        <tr>
                            <td className="-py-5 px-6 text-red-700">41403.12</td>
                            <td className="-py-5 px-6">0.34</td>
                            <td className="-py-5 px-6">10.67</td>
                        </tr>
                        <tr>
                            <td className="-py-5 px-6 text-red-700">41403.12</td>
                            <td className="-py-5 px-6">0.34</td>
                            <td className="-py-5 px-6">10.67</td>
                        </tr>
                        <tr>
                            <td className="-py-5 px-6 text-red-700">41403.12</td>
                            <td className="-py-5 px-6">0.34</td>
                            <td className="-py-5 px-6">10.67</td>
                        </tr>
                        <tr>
                            <td className="-py-5 px-6 text-red-700">41403.12</td>
                            <td className="-py-5 px-6">0.34</td>
                            <td className="-py-5 px-6">10.67</td>
                        </tr>
                        <tr>
                            <td className="-py-5 px-6 text-red-700">41403.12</td>
                            <td className="-py-5 px-6">0.34</td>
                            <td className="-py-5 px-6">10.67</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex">
                <table className="text-left">
                    <thead>
                        <p className="text-2xl font-bold pl-6">Bids</p>
                        <tr>
                            <th className="p-1 px-6">Price (USDT)</th>
                            <th className="p-1 px-6">Amount (BTC)</th>
                            <th className="p-1 px-6">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="-py-6 px-6 text-green-500">31403.12</td>
                            <td className="-py-6 px-6">0.34</td>
                            <td className="-py-6 px-6">10.67</td>
                        </tr>
                        <tr>
                            <td className="-py-6 px-6 text-green-500">31403.12</td>
                            <td className="-py-6 px-6">0.34</td>
                            <td className="-py-6 px-6">10.67</td>
                        </tr>
                        <tr>
                            <td className="-py-6 px-6 text-green-500">31403.12</td>
                            <td className="-py-6 px-6">0.34</td>
                            <td className="-py-6 px-6">10.67</td>
                        </tr>
                        <tr>
                            <td className="-py-6 px-6 text-green-500">31403.12</td>
                            <td className="-py-6 px-6">0.34</td>
                            <td className="-py-6 px-6">10.67</td>
                        </tr>
                        <tr>
                            <td className="-py-6 px-6 text-green-500">31403.12</td>
                            <td className="-py-6 px-6">0.34</td>
                            <td className="-py-6 px-6">10.67</td>
                        </tr>
                        <tr>
                            <td className="-py-6 px-6 text-green-500">31403.12</td>
                            <td className="-py-6 px-6">0.34</td>
                            <td className="-py-6 px-6">10.67</td>
                        </tr>
                        <tr>
                            <td className="-py-6 px-6 text-green-500">31403.12</td>
                            <td className="-py-6 px-6">0.34</td>
                            <td className="-py-6 px-6">10.67</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TradeList