import React from "react";
import TradeBS from "../components/TradeBS";
import TradeForm from "../components/TradeForm";
import TradeHistory from "../components/TradeHistory";
import TradeList from "../components/TradeList";
import NavLayout from "../layouts/NavLayout";

const trade = () => {
  return (
    <NavLayout>
      <div className="bg-lightbg min-h-screen">
        <div className="flex justify-center w-full px-16 relative mb-14">
          <TradeForm />
          <div className="bg-darkbg h-full w-full absolute -top-20" />
        </div>
        <div className="flex justify-center -top-10 relative">
          <TradeList />
        </div>
        <div className="flex justify-center w-full -top-10 relative">
          <TradeBS />
        </div>
        <div className="flex justify-center w-full px-16 -top-10 relative">
          <TradeHistory />
        </div>
      </div>
    </NavLayout>
  );
};

export default trade;