import { GetServerSideProps } from "next";
import axios from 'axios'

const url = 'https://api1.binance.com/api/v3/depth?symbol=BTCUSDT';
axios.get(url)
  .then(response => {

  }
);

export default function IndexPage() {

  return (
    <div>
      <h1>PARTY TIME</h1>
    </div>
  );
}