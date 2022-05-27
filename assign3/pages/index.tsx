import { GetServerSideProps } from "next";
import axios from "axios";

let name: String = "Odrer Book";

const url = "https://api1.binance.com/api/v3/depth?symbol=BTCUSDT";
axios.get(url).then((response) => {
  const result = response.data;
  console.log(result);
  function calculateOutputAmount() {
    
    let coin: number = 0;
    let usdtAmount: number = 290000;
    let value = usdtAmount;

    result.asks.map((item: number[], index: number) => {
      const usdt: number = +item[0];
      const btc: number = +item[1];
      const allBTC = value / usdt;
      if (value > 0) {
        let totalBTC;
        if (allBTC > btc) {
          totalBTC = coin + btc;
        } else {
          totalBTC = coin + allBTC;

          value = value - usdt * (totalBTC - coin);
          coin = totalBTC;
        }
        value = value - usdt * (totalBTC - coin);
        coin = totalBTC;
      }
    });
    console.log("Input USDT: " + usdtAmount);
    console.log("Output BTC: " + coin);
  }
  console.log(calculateOutputAmount());
});

export default function IndexPage() {
  return (
    <div>
      <h1>TEST</h1>
    </div>
  );
}