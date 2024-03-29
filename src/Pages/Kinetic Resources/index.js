import React from "react";
import Kinetic_Resources from "../../Asset/solutions-grid-videos2.webp";

const KineticResources = () => {
  return (
    <div id="KineticResources" className="flex flex-col gap-5 p-10">
      <div className="text-center lg:text-5xl text-4xl font-semibold p-5">
        <p>Kinetic Resources</p>
      </div>
      <div>
        <button className=" rounded-xl lg:ml-[42rem] bg-[#183c54ff] lg:w-44 p-2 items-center text-center text-white">
          Product Tours
        </button>
      </div>
      <div className="lg:flex border justify-between lg:gap-10 items-center bg-[#f2ddd3ff] lg:w-[77rem] lg:ml-24 lg:px-36 p-4 lg:p-10 rounded-xl">
        <div className="flex flex-col gap-4">
          <p className="lg:text-4xl text-3xl text-red-700 font-semibold">
            Product Tours
          </p>
          <div className="flex flex-col gap-2 lg:gap-4 *:text-xl">
            <p>Epicor Kinetic Overview</p>
            <p>Epicor Kinetic Supply Chain Planning</p>
            <p>Epicor Kinetic Demand & Order Management</p>
            <p>Epicor Kinetic Integration and Extensibility</p>
            <p>Epicor Kinetic Direct Procurement</p>
          </div>
          <p className="border border-red-600 w-fit p-1 rounded-md bg-white">
            MORE PRODUCT TOURS ▶
          </p>
        </div>
        <div>
          <img
            src={Kinetic_Resources}
            alt=""
            className="lg:size-96 lg:rounded-full max-lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default KineticResources;
