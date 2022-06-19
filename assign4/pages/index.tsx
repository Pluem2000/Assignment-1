import type { NextPage } from "next";
import * as ethers from "ethers";
import { useEffect, useState } from "react";
import {
  connectWallet,
  getBalance,
  getChainId,
  getEthereum,
  getProvider,
  getWalletAddress,
} from "../services/wallet-service";
import {
  getNetworkCurrency,
  getNetworkName,
  getNetworkTokens,
} from "../constants/network-id";
import { formatEther, formatUnits } from "ethers/lib/utils";
import { Token } from "../types/token.type";
import Topbar from "../components/Topbar";

const Home: NextPage = () => {
  const [address, setAddress] = useState<string | null>(null);
  const [network, setNetwork] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);

  const [tokenBalances, setTokenBalances] = useState<Record<string, string>>(
    {}
  );

  const getTokenBalance = async (
    tokenAddress: string,
    ownerAddress: string
  ) => {
    const abi = ["function balanceOf(address owner) view returns (uint256)"];
    const contract = new ethers.Contract(tokenAddress, abi, getProvider()!);
    return contract.balanceOf(ownerAddress);
  };

  const addTokenToWallet = async (token: Token) => {
    try {

      const wasAdded = await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: token.address,
            symbol: token.symbol,
            decimals: token.decimals,
            image: token.imageUrl,
          },
        },
      });

      if (wasAdded) {
        console.log("Thanks for your interest!");
      } else {
        console.log("Your loss!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loadAccountData = async () => {
    const addr = getWalletAddress();
    setAddress(addr);

    const chainId = await getChainId();
    setNetwork(chainId);

    const bal = await getBalance(addr);
    if (bal) setBalance(formatEther(bal));

    const tokenList = getNetworkTokens(chainId);

    const tokenBalList = await Promise.all(
      tokenList.map((token) =>
        getTokenBalance(token.address, addr).then((res) =>
          formatUnits(res, token.decimals)
        )
      )
    );

    tokenList.forEach((token, i) => {
      tokenBalances[token.symbol] = tokenBalList[i];
    });
    setTokenBalances({ ...tokenBalances });
  };

  useEffect(() => {
    loadAccountData();

    const handleAccountChange = (addresses: string[]) => {
      setAddress(addresses[0]);
      loadAccountData();
    };

    const handleNetworkChange = (networkId: string) => {
      setNetwork(networkId);
      loadAccountData();
    };

    getEthereum()?.on("accountsChanged", handleAccountChange);

    getEthereum()?.on("chainChanged", handleNetworkChange);
  }, []);

  return (
    <div>
      <Topbar address = {address}/>
      <div className="bg-blue-50 min-h-screen pt-4">
        {address ? (
          <div className="flex justify-center bg-blue-50 pt-4">
            <div className="rounded-2xl shadow-xl w-full max-w-2xl p-12 border border-indigo-600">
              <div className="flex justify-center">
                <h4 className="rounded-lg bg-blue-900 text-white px-10 py-2 text-xl font-bold">
                  Wallet
                </h4>
              </div>
              <div className="flex flex-col sm:flex-row justify-between text-gray-600 font-bold mb-5">
                <p className="text-lg">Assets</p>
                <p className="text-lg ml-4">Balances</p>
              </div>

              {getNetworkTokens(network).map((token) => (
                <div
                  key={token.symbol}
                  className="flex mb-4 bg-white p-6 rounded-2xl"
                >
                  <div>
                    <img
                      onClick={() => addTokenToWallet(token)}
                      src={token.imageUrl}
                      className="w-12 h-12 mr-8 cursor-pointer"
                    />
                  </div>
                  <div>
                    <div>
                      {token.name} ({token.symbol})
                    </div>
                    <div>
                      {tokenBalances[token.symbol] || 0} {token.symbol}
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-center mt-10">
                <button className="rounded-lg bg-blue-600 text-white px-10 py-2 text-xl font-bold">
                  Scan QR
                </button>
              </div>
            </div>
          </div>
        ) : (
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={connectWallet}
          >
            Connect
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;