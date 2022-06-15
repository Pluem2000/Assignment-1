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
import Topbar from "../component/topbar";

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
      <div>
        <Topbar />
      </div>
      <div>
        {address ? (
          <div>
            <p>Your wallet address is {address}</p>
            <p>
              Current network is {getNetworkName(network)} ({network})
            </p>
            <p>
              Your balance is {balance} {getNetworkCurrency(network)}
            </p>
            <h4 className="font-bold text-lg">Token list</h4>
            <div>
              {getNetworkTokens(network).map((token) => (
                <div key={token.symbol} className="flex mb-4">
                  <div>
                    <img
                      onClick={() => addTokenToWallet(token)}
                      src={token.imageUrl}
                      className="w-10 h-10 mr-8 cursor-pointer"
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
            </div>
          </div>
        ) : (
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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