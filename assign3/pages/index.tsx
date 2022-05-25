import { GetServerSideProps } from "next";
import axios from 'axios'

let name: String = "Oder Book";
console.log(name);

const url = 'https://api1.binance.com/api/v3/depth?symbol=BTCUSDT';
axios.get(url)
  .then(response => {
    const output = response.data;
    console.log(output);


    function calculateOutputAmount() {
      let usdtAmount: number = 290000;
      let totalBTC: number = 0;

      for (let i = 0; i <= 99; i++) {
        if (usdtAmount > response.data.bids[i][0]) {
          let price: number = parseFloat(response.data.bids[i][1]);
          console.log(price);

          usdtAmount = usdtAmount - response.data.bids[i][0];
          totalBTC += price;

          console.log("Test");

        } else if (usdtAmount < response.data.bids[i][0]) {

          console.log("Test1");

        } else {
          console.log("test2");
        }
      }

      console.log("เงินต้น :" + "290,000 USDT");
      console.log("เงินทอน : " + usdtAmount+ " USDT");
      console.log("จำนวนเหรียญ BTC : " + totalBTC + " BTC");
    }

    console.log(calculateOutputAmount());

  }

  );

export default function IndexPage() {

  return (
    <div>
      <h1>PARTY TIME</h1>
    </div>
  );
}