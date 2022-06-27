import React from "react";
import Topbar from "../components/Topbar";
import TransferForm from "../components/transferForm";

const transfer = () => {
  return (
    <div>
      <Topbar />
      <div className="flex justify-center w-full px-16 relative mb-14">
        <TransferForm />
        <div className="h-full w-full absolute -top-20" />
      </div>
    </div>
  );
};

export default transfer;
