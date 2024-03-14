import { CropPortrait, Instagram, LinkedIn, X } from "@mui/icons-material";
import { Divider, IconButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import epicor from "../../Asset/WhatsApp_Image_2024-03-12_at_11.15.44_0b64599e-removebg-preview.png";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col gap-12 p-12 lg:px-8 bg-[#184659] text-white">
        <div>
          <img src={epicor} alt="" className=" lg:px-36 h-8" />
        </div>
        <div className="lg:flex lg:justify-between grid grid-cols-2 gap-5 lg:px-[12%]">
          <div className="flex cursor-pointer flex-col lg:gap-5 gap-2">
            <p className="text-xl">COMPANY</p>
            <Link to={"https://www.epicor.com/en-in/jobs/"}>
              <p>Careers</p>
            </Link>
            <p className="hover:underline">Newsroom</p>
            <p className="hover:underline">Locations</p>
            <p className="hover:underline">Contact Sales</p>
            <p className="hover:underline">Brand Guidelines</p>
          </div>
          <div className="flex cursor-pointer flex-col lg:gap-5 gap-2">
            <p className="text-xl">PARTNERS</p>
            <p className="hover:underline">Channel Partners</p>
            <p className="hover:underline">ISV Partners</p>
          </div>
          <div className="flex cursor-pointer flex-col lg:gap-5 gap-2">
            <p className="text-xl">TOPICS</p>
            <p className="hover:underline">Industry 4.0</p>
            <p className="hover:underline">Industry 4.0</p>
            <p className="hover:underline">Omnichannel Retail</p>
          </div>
          <div className="flex cursor-pointer flex-col lg:gap-5 gap-2">
            <p className="text-xl">LEGAL</p>
            <p className="hover:underline">Terms of Use</p>
            <p className="hover:underline">Privacy Policy</p>
            <p className="hover:underline">Cookie Settings</p>
            <p className="hover:underline">Compliance</p>
          </div>
        </div>
        <Divider className="!bg-gray-400" />
        <div className="lg:px-[11%]">
          <Link to={"https://www.linkedin.com/company/epicor"}>
            <IconButton>
              <LinkedIn className="text-white" />
            </IconButton>
          </Link>
          <Link to={"https://twitter.com/Epicor?s=20"}>
            <IconButton>
              <X className="text-white" />
            </IconButton>
          </Link>
          <Link to={"https://www.instagram.com/epicor"}>
            <IconButton>
              <Instagram className="text-white" />
            </IconButton>
          </Link>
          <Link
            to={
              "https://www.glassdoor.co.in/Overview/Working-at-Epicor-Software-EI_IE1421.11,26.htm"
            }
          >
            <IconButton>
              <CropPortrait className="text-white" />
            </IconButton>
          </Link>
          <p>© Epicor Software Corporation 2024.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
