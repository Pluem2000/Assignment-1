
import { GetServerSideProps } from 'next'

interface IndexPageProps {
  data_1: {
    success: boolean;
    result: any;
  };
  data_2: {
    mins: number;
    price: number;
  };
}

export default function IndexPage({ data_1, data_2 }: IndexPageProps) {
  const Total = data_1.result.price - data_2.price;
  const Diff = Total / data_2.price;

  return (
    <>
      <div style={{ margin: "2rem 4rem 2rem 4rem" }}>
        <h1>โปรแกรมเปรียบเทียบราคาเหรียญ BTC/USDT</h1>
        <p>FTX BTC Price: {data_1.result.price} USDT</p>
        <p>Binance BTC Price: {data_2.price} USDT</p>
        <p>
          Diff: {Total}, ({Diff}%) เมื่อเทียบกับ Binance BTC Price
        </p>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res_1 = await fetch('https://ftx.com/api/markets/BTC/USDT');
  const data_1 = await res_1.json();
  const res_2 = await fetch('https://api1.binance.com/api/v3/avgPrice?symbol=BTCUSDT');
  const data_2 = await res_2.json();
  console.log(data_1, data_2);
  return {
    props: {
      data_1,
      data_2,
    },
  };
};
