import React from "react";
import audiotonixs from "../../Asset/customer-audiotonix-logo-dark-gray.png";
import tuffaloy from "../../Asset/customer-tuffaloy-logo-dark-gray.png";
import betco from "../../Asset/customer-betco-logo-dark-gray.png";
import onoff from "../../Asset/customer-onoff-logo-dark-gray.png";
import stephen from "../../Asset/customer-stephen-gould-logo-dark-gray.png";
import visa from "../../Asset/customer-visa-cash-app-dark-gray-logo-landscape.png";
import { Link } from "react-router-dom";

const Overview = () => {
  const handleClick = (id) => {
    const element = document.getElementById(id);
    element && element.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <>
      <div id="Overview" className="lg:flex justify-between lg:px-36 p-10">
        <div className="lg:w-[50%] flex flex-col gap-4">
          <p className="lg:text-5xl text-xl font-semibold">
            Made With Manufacturers, For Manufacturers
          </p>
          <p className="text-slate-500">
            Ready to take your manufacturing business to the next level? Epicor
            can help you get crystal-clear on where your business is right now
            and where it needs to go next. Our innovative solutions, powered by
            cognitive ERP, are designed to help you supercharge efficiency, turn
            your data into action, and stand out from the competition. Plus,
            with Epicor, you'll work with experts in your specific{" "}
            <span className="text-blue-600">industry</span> or{" "}
            <span className="text-blue-600">manufacturing mode.</span>{" "}
          </p>
        </div>

        <div className="flex flex-col p-4 *:cursor-pointer gap-4 *:border-sky-400 *:border *:p-3 *:rounded-md *:font-semibold">
          <div className="flex border gap-5 justify-between *:font-semibold items-center">
            <div>
              <Link
                to={
                  "https://drift-lp-19510799.drift.click/40bfbd3b-589d-45e2-9b55-6c017169e5b3"
                }
              >
                <button>Brochure: Epicor for Manufacturings </button>
              </Link>{" "}
            </div>
            <div>
              <p className=" !text-sky-700">▶</p>
            </div>
          </div>
          <div className="flex border gap-5 justify-between *:font-semibold items-center">
            <div>
              <Link to={"/cybersecurity"}>
                <p>Cybersecurity in Manufacturing </p>
              </Link>{" "}
            </div>
            <div>
              <p className=" !text-sky-700">▶</p>
            </div>
          </div>
          <div className="flex border gap-5 justify-between *:font-semibold items-center">
            <div>
              <Link to={"/webinar_ceries_critical_tech_for_manufacturers"}>
                <p>Webinar Series: Critical Tech for Manufacturers</p>
              </Link>{" "}
            </div>
            <div>
              <p className=" !text-sky-700">▶</p>
            </div>
          </div>
          <div className="flex border gap-5 justify-between *:font-semibold items-center">
            <div>
              {" "}
              <Link
                to={
                  "https://www.epicor.com/en-in/blog/why-modern-erp-is-the-foundation-for-data-analytics-in-manufacturing/"
                }
              >
                <p>Article: Data Analytics for Modern ERP </p>
              </Link>
            </div>
            <div>
              <p className=" !text-sky-700">▶</p>
            </div>
          </div>
          <div className="flex border gap-5 justify-between *:font-semibold items-center">
            <div>
              <button onClick={() => handleClick("KineticResources")}>
                More Resources{" "}
              </button>
            </div>
            <div>
              <p className=" !text-sky-700">▶</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:justify-between grid grid-cols-2 gap-5 lg:px-32 p-10">
        <Link to={"/auditonix"}>
          <img src={audiotonixs} alt="" />
        </Link>
        <Link to={"/"}>
          <img src={tuffaloy} alt="" />
        </Link>
        <Link to={"/"}>
          <img src={betco} alt="" />
        </Link>
        <Link to={"/"}>
          <img src={onoff} alt="" />
        </Link>
        <Link to={"/"}>
          <img src={stephen} alt="" />
        </Link>
        <Link to={"/"}>
          <img src={visa} alt="" />
        </Link>
      </div>
    </>
  );
};

export default Overview;
