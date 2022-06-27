import { ethers } from "ethers";
import React, { useState } from "react";
import { getProvider } from "../services/wallet-service";

const transferForm = () => {
  const [Token1, setToken1] = useState("");
  const [RecipientAddress, setRecipientAddress] = useState("");
  const [Amount, setAmount] = useState("");

  const transferBalance = async () => {
    const abi = ["function transfer(address to, uint amount)"];
    const contract = new ethers.Contract(Token1, abi, getProvider()!);
    const TokenSigner = contract.connect(getProvider()!.getSigner());
    const amountToken = ethers.utils.parseUnits(Amount, 18);
    const tx = await TokenSigner.transfer(RecipientAddress, amountToken);
  };

  return (
    <div className="rounded-lg shadow-lg w-1/3 max-w-4xl p-12 mt-10 bg-green-50 border border-green-500 z-20 relative">
      <form>
        <h3 className="text-3xl font-bold text-center mb-7">Transfer</h3>
        <div className="flex-col sm:flex-col justify-around mb-5">
          <p className="text-lg font-bold mt-10 mb-6">
            Transfer your token here.
          </p>
          <div>
            <p className="text-lg">Address</p>
            <input
              className="p-3 mt-2 rounded shadow w-full"
              type="text"
              placeholder="Recipient Address"
              onChange={(event) => {
                setRecipientAddress(event.target.value);
              }}
            />
          </div>
          <div className="mt-8">
            <p className="text-lg">Token Address</p>
            <input
              className="p-3 mt-2 rounded shadow w-full"
              type="text"
              placeholder="Token Address"
              onChange={(event) => {
                setToken1(event.target.value);
              }}
            ></input>
          </div>
          <div className="mt-8">
            <p className="text-lg">Token Amount</p>
            <input
              className="p-3 mt-2 rounded shadow w-full"
              type="text"
              placeholder="Amount"
              onChange={(event) => {
                setAmount(event.target.value);
              }}
            />
          </div>
        </div>
      </form>
      <div className="flex justify-center">
        <button
          className="rounded-full bg-green-500 text-white px-12 py-4 mt-6"
          onClick={transferBalance}
        >
          Transfer
        </button>
      </div>
    </div>
  );
};

export default transferForm;