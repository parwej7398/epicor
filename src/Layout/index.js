import React, { useState } from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import epicer from "../Asset/download.jpeg";

import { ChatBubble, Close, Send, Settings } from "@mui/icons-material";
import { Fade, IconButton } from "@mui/material";

const Layout = ({ children }) => {
  const [opens, setOpens] = useState();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  return (
    <div className="flex relative flex-col">
      <Header />
      {children}

      <div
        className="fixed lg:right-8 right-2 bottom-2 lg:bottom-8 bg-[#12465e] rounded-md"
        onClick={() => setOpens(true)}
      >
        <img src={epicer} alt="" className="size-14 rounded-lg" />
      </div>
      {opens ? (
        <div>
          <div className="fixed lg:right-8 right-2 bottom-2 lg:bottom-8 bg-[#12465e] p-1 rounded-md">
            <IconButton
              onClick={(e) =>
                anchorEl ? setAnchorEl(null) : setAnchorEl(e.currentTarget)
              }
            >
              {open ? (
                <Close className="text-white !text-3xl" />
              ) : (
                <ChatBubble className="text-white !text-3xl" />
              )}
            </IconButton>
          </div>
          <Fade in={Boolean(open)}>
            <div className="fixed z-50 lg:right-8 right-2 max-lg:left-2 shadow border lg:h-[34rem] bg-white lg:w-96 bottom-24">
              <div className="flex flex-col justify-between">
                <div className="flex items-center gap-4 text-white p-1 bg-[#025063]">
                  <img
                    src={epicer}
                    alt=""
                    className="h-10 rounded-full bg-white"
                  />
                  <p>EpicorSalesBot</p>
                </div>
                <div>
                  <p className="text-center text-sm">TODAY 12:59 PM</p>
                </div>

                <div className="flex flex-col mt-5">
                  <div className="flex flex-col gap-2 px-12">
                    {" "}
                    <p className="text-sm">EpicorSalesBot</p>
                    <p className="border w-fit p-1 rounded-xl">
                      Thanks for stopping by! 🙌{" "}
                    </p>
                    <p className="border w-fit p-1 rounded-xl">
                      I just have a few quick questions so I can connect you
                      with the right person.
                    </p>
                    <p className="border w-fit p-1 rounded-xl">
                      In case we get disconnected, what is your business email
                      address?
                    </p>
                  </div>
                </div>

                <div className="flex justify-center mt-48 gap-2 p-2">
                  <div className="flex border rounded-xl p-2">
                    <input
                      type="search"
                      className="outline-none "
                      placeholder="Write a reply..."
                    />
                    <button>😊</button>
                  </div>
                  <div>
                    <IconButton>
                      <Settings />
                    </IconButton>
                  </div>

                  <div>
                    <IconButton type="submit">
                      <Send />
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      ) : null}

      <Footer />
    </div>
  );
};

export default Layout;
