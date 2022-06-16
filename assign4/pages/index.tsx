import type { NextPage } from 'next';
import * as ethers from "ethers";
import { useEffect, useState } from 'react';

const Home: NextPage = () => {

  const [address, setAddress] = useState<string | null>(null);

  const connectWallet = () => {
    if (typeof window.ethereum !== "undefined" && window.ethereum.request) {
      window.ethereum.request({ method: "eth_requestAccounts" });
    }
  };

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      const walletAddress = (window.ethereum as any).selectedAddress;
      setAddress(walletAddress);
    }
  }, []);

  return (
    <div>
      <p>Hello World</p>

      {address ? (
        <p>Your wallet address is {address}</p>
      ) : (
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={connectWallet}
        >
          Connect
        </button>
      )
      }
    </div>
  );
};

export default Home
