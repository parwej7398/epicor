import { Close, Public, Search } from "@mui/icons-material";
import { Collapse, Divider, IconButton } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className="bg-[#022b3bff] text-white px-[10%] z-50 fixed top-o w-full">
        <div className="flex items-center justify-between p-2">
          <div>
            <p className="text-4xl font-serif font-semibold">epicor</p>
          </div>
          <div>
            <Collapse orientation="horizontal" in={open}>
              <div className="bg-white flex rounded-md">
                <input
                  type="search"
                  className="w-[30rem] p-2 rounded-md outline-none text-black"
                  placeholder="Enter your search term..."
                />
                <IconButton>
                  <Search />
                </IconButton>
              </div>
            </Collapse>
          </div>

          <div className="flex gap-2 items-center">
            <IconButton onClick={() => setOpen(!open)}>
              {open ? (
                <Close className="text-white" />
              ) : (
                <Search className="text-white" />
              )}{" "}
            </IconButton>
            <Link to={"/globalside"}>
              <IconButton>
                <Public className="text-white" />
              </IconButton>
            </Link>
            <Link to={"/contectus"}>
              <button className="p-2 rounded-md bg-[#053b54]">
                CONTACT US
              </button>
            </Link>
            <Link to={"/getsupport"}>
              <button className="p-2 rounded-md bg-[#339db8]">
                GET SUPPORT
              </button>
            </Link>
          </div>
        </div>
        <Divider className="!bg-gray-700" />
        {open ? (
          <div className="h-[68px]"></div>
        ) : (
          <div className="flex justify-center gap-12 p-3 *:text-xl">
            <div className="flex flex-col relative py-2 group">
              <div className="cursor-pointer hover:bg-slate-600 hover:rounded-md">
                Solutions
              </div>
              <ul className="absolute cursor-pointer top-10 w-96 h-screen z-50 p-4 *:p-4 !text-xl !text-black border shadow bg-gray-100 rounded-xl hidden group-hover:block">
                <p className="text-sky-700 hover:bg-white hover:rounded-md hover:w-full ">
                  By Industry
                </p>
                <p className="text-sky-700 hover:bg-white hover:rounded-md hover:w-full ">
                  By Technology Initiative
                </p>
                <p className="text-sky-700 hover:bg-white hover:rounded-md hover:w-full ">
                  By Current Software
                </p>
              </ul>
            </div>
            <div className="flex flex-col relative py-2 group">
              <div className="cursor-pointer hover:bg-slate-600 hover:rounded-md">
                Products
              </div>
              <ul className="absolute bg-gray-100 rounded-xl cursor-pointer top-10 w-96 h-screen z-50 p-4 *:p-4 !text-xl !text-black border shadow  hidden group-hover:block">
                <p className="text-sky-700 hover:bg-white hover:rounded-md hover:w-full">
                  All Products A to Z
                </p>
                <p className="text-sky-700 hover:bg-white hover:rounded-md hover:w-full">
                  Bussiness Intelligration
                </p>
                <p className="text-sky-700 hover:bg-white hover:rounded-md hover:w-full">
                  Data Management and Integration
                </p>
                <p className="text-sky-700 hover:bg-white hover:rounded-md hover:w-full">
                  Digital Commerce
                </p>
                <p className="text-sky-700 hover:bg-white hover:rounded-md hover:w-full">
                  Enterprise Resource Planning (ERP)
                </p>
                <p className="text-sky-700 hover:bg-white hover:rounded-md hover:w-full">
                  Finacial Management
                </p>
                <p className="text-sky-700 hover:bg-white hover:rounded-md hover:w-full">
                  Manufacturing Execution (MES)
                </p>
                <p className="text-sky-700 hover:bg-white hover:rounded-md hover:w-full">
                  Supply Chain Management (SCM)
                </p>
              </ul>
            </div>
            <div className="flex flex-col relative py-2 group">
              <div className="cursor-pointer hover:bg-slate-600 hover:rounded-md">
                Customers
              </div>
              <ul className="absolute cursor-pointer top-10 w-96 h-screen z-50 p-4 *:p-4 !text-xl !text-black border shadow bg-gray-100 rounded-xl hidden group-hover:block">
                <p className="text-sky-700 hover:bg-white hover:rounded-md hover:w-full">
                  Customer Support
                </p>
                <p className="text-sky-700 hover:bg-white hover:rounded-md hover:w-full">
                  Epicor Learning
                </p>
                <p className="text-sky-700 hover:bg-white hover:rounded-md hover:w-full">
                  Professional Services
                </p>
                <p className="text-sky-700 hover:bg-white hover:rounded-md hover:w-full">
                  Epicor Insights
                </p>
                <p className="text-sky-700 hover:bg-white hover:rounded-md hover:w-full">
                  Security Services
                </p>
                <p className="text-sky-700 hover:bg-white hover:rounded-md hover:w-full">
                  Upgrades & Migrations
                </p>
              </ul>
            </div>
            <div className="flex flex-col relative py-2 group">
              <div className="cursor-pointer hover:bg-slate-600 hover:rounded-md">
                Resources
              </div>
              <ul className="absolute cursor-pointer top-10 w-96 h-screen z-50 p-4 *:p-4 !text-xl !text-black border shadow bg-gray-100 rounded-xl hidden group-hover:block">
                <p className="text-sky-700 hover:bg-white hover:rounded-md hover:w-full">
                  Blog
                </p>
                <p className="text-sky-700 hover:bg-white hover:rounded-md hover:w-full">
                  eBook and White Papers
                </p>
                <p className="text-sky-700 hover:bg-white hover:rounded-md hover:w-full">
                  Events
                </p>
                <p className="text-sky-700 hover:bg-white hover:rounded-md hover:w-full">
                  Prodcast
                </p>
                <p className="text-sky-700 hover:bg-white hover:rounded-md hover:w-full">
                  Success Stories
                </p>
                <p className="text-sky-700 hover:bg-white hover:rounded-md hover:w-full">
                  Videos
                </p>
              </ul>
            </div>
            <div className="flex flex-col relative py-2 group">
              <div className="cursor-pointer hover:bg-slate-600 hover:rounded-md">
                Company
              </div>
              <ul className="absolute cursor-pointer top-10 w-96 h-screen z-50 p-4 *:p-4 !text-xl !text-black border shadow bg-gray-100 rounded-xl hidden group-hover:block">
                <p className="text-sky-700 hover:bg-white hover:rounded-md hover:w-full">
                  Why Epicor?
                </p>
                <p className="text-sky-700 hover:bg-white hover:rounded-md hover:w-full">
                  Contact
                </p>
                <p className="text-sky-700 hover:bg-white hover:rounded-md hover:w-full">
                  Careers
                </p>
                <p className="text-sky-700 hover:bg-white hover:rounded-md hover:w-full">
                  Newsroom
                </p>
                <p className="text-sky-700 hover:bg-white hover:rounded-md hover:w-full">
                  Leadership
                </p>
              </ul>
            </div>
            <div className="flex flex-col relative py-2 group">
              <div className="cursor-pointer hover:bg-slate-600 hover:rounded-md">
                Partners
              </div>
              <ul className="absolute cursor-pointer top-10 w-96 h-screen z-50 p-4 *:p-4 !text-xl !text-black border shadow bg-gray-100 rounded-xl hidden group-hover:block">
                <p className="text-sky-700 hover:bg-white hover:rounded-md hover:w-full">
                  ISV Partners
                </p>
                <p className="text-sky-700 hover:bg-white hover:rounded-md hover:w-full">
                  Channel Partners
                </p>
                <p className="text-sky-700 hover:bg-white hover:rounded-md hover:w-full">
                  Influencers
                </p>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
