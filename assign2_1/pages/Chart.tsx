import React from "react";
import ChartForm from "../components/ChartForm";
import ChartGraph from "../components/ChartGraph";
import NavLayout from "../layouts/NavLayout";

const chart = () => {

  return (
    <NavLayout>
      <div className="bg-lightbg min-h-screen">
        <div className="flex justify-center w-full px-16 relative mb-14">
          <ChartForm />
          <div className="bg-darkbg h-full w-full absolute -top-20" />
        </div>
        <div className="flex w-full px-20 -top-10 relative">
          <ChartGraph />
        </div>
      </div>
    </NavLayout>
  );
};

export default chart;