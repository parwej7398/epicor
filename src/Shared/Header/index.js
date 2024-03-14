import { Close, ExpandMore, Menu, Public, Search } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import epicor from "../../Asset/WhatsApp_Image_2024-03-12_at_11.15.44_0b64599e-removebg-preview.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(0);

  const navItems = [
    {
      id: 1,
      name: "Solutions",
      subItems: [
        {
          id: "1a",
          name: "By Industry",
          element: (
            <div className="flex flex-col gap-4 bg-white text-[#30667b] w-80 p-2 h-full rounded-xl">
              <p>Distribution</p>
              <p>Manufacturing</p>
            </div>
          ),
        },
        {
          id: "1b",
          name: "By Technology Initiative",
          element: (
            <div className="flex flex-col gap-4 bg-white text-[#30667b] w-80 p-2 h-full rounded-xl">
              <p>Epicor Industry ERP Cloud</p>
              <p>Cybersecurity</p>
              <p>Information Management</p>
              <p>Integration</p>
              <p>Low-Code / No-Code Development</p>
              <p>People-Centric Automation</p>
              <p>Supply Chain Resilience</p>
              <p>Sustainability</p>
            </div>
          ),
        },
        {
          id: "1c",
          name: " By Current Software",
          element: (
            <div className="flex flex-col gap-4 bg-white text-[#30667b] w-80 p-2 h-full rounded-xl">
              <p>IFS</p>
              <p>Infor</p>
              <p>Netsuite (Manufacturing)</p>
              <p>Plex</p>
              <p>Sage</p>
            </div>
          ),
        },
      ],
    },

    {
      id: 2,
      name: "Product",
      subItems: [
        {
          id: "1a",
          name: "All Products A to Z",
          element: (
            <div className="flex flex-col gap-4 bg-white text-[#30667b] w-80 p-2 h-full rounded-xl">
              <p>Alphabetical</p>
              <p>By Industry</p>
            </div>
          ),
        },
        {
          id: "1b",
          name: "Bussiness Intelligration",
          element: (
            <div className="flex flex-col gap-4 bg-white text-[#30667b] w-80 p-2 h-full rounded-xl">
              <p>Epicor Data Analytics</p>
              <p>Epicor Grow</p>
              <p>All</p>
            </div>
          ),
        },
        {
          id: "1c",
          name: "Data Management and Integration",
          element: (
            <div className="flex flex-col gap-4 bg-white text-[#30667b] w-80 p-2 h-full rounded-xl">
              <p>Epicor Agent</p>
              <p>Epicor ECM</p>
              <p>All</p>
            </div>
          ),
        },
        {
          id: "1d",
          name: "Digital Commerce",
          element: (
            <div className="flex flex-col gap-4 bg-white text-[#30667b] w-80 p-2 h-full rounded-xl">
              <p>Epicor Commerce</p>
              <p>Epicor CPQ</p>
              <p>Epicor Quick Ship</p>
              <p>All</p>
            </div>
          ),
        },
        {
          id: "1e",
          name: "Enterprise Resource Planning (ERP)",
          element: (
            <div className="flex flex-col gap-4 bg-white text-[#30667b] w-80 p-2 h-full rounded-xl">
              <p>Epicor Kinetic</p>
              <p>Epicor iScala</p>
              <p>All</p>
            </div>
          ),
        },
        {
          id: "1f",
          name: "Finacial Management",
          element: (
            <div className="flex flex-col gap-4 bg-white text-[#30667b] w-80 p-2 h-full rounded-xl">
              <p>Epicor FP&A</p>
              <p>All</p>
            </div>
          ),
        },
        {
          id: "1g",
          name: "Manufacturing Execution (MES)",
          element: (
            <div className="flex flex-col gap-4 bg-white text-[#30667b] w-80 p-2 h-full rounded-xl">
              <p>Epicor Advanced MES</p>
              <p>Epicor Connected Process Control</p>
              <p>All</p>
            </div>
          ),
        },
        {
          id: "1h",
          name: "Supply Chain Management (SCM)",
          element: (
            <div className="flex flex-col gap-4 bg-white text-[#30667b] w-80 p-2 h-full rounded-xl">
              <p>Epicor EDI</p>
              <p>Supplier Relationship Management</p>
              <p>All</p>
            </div>
          ),
        },
      ],
    },

    {
      id: 3,
      name: "Customers",
      subItems: [
        {
          id: "1a",
          name: "Customer Support",
          element: (
            <div className="flex flex-col gap-4 bg-white text-[#30667b] w-80 p-2 h-full rounded-xl">
              <p>EpicCare Customer Login</p>
              <p>Request an EpicCare Account</p>
            </div>
          ),
        },
        {
          id: "1b",
          name: " Epicor Learning",
          element: (
            <div className="flex flex-col gap-4 bg-white text-[#30667b] w-80 p-2 h-full rounded-xl">
              <p>About Epicor Learning</p>
              <p>Customer Login</p>
            </div>
          ),
        },
        {
          id: "1d",
          name: " Professional Services",
          element: (
            <div className="flex flex-col gap-4 bg-white text-[#30667b] w-80 p-2 h-full rounded-xl">
              <p>Professional Services</p>
            </div>
          ),
        },
        {
          id: "1e",
          name: "Epicor Insights",
          element: <div></div>,
        },
        {
          id: "1f",
          name: "Security Services",
          element: (
            <div className="flex flex-col gap-4 bg-white text-[#30667b] w-80 p-2 h-full rounded-xl">
              <p>Security Suite</p>
            </div>
          ),
        },
        {
          id: "1g",
          name: "Upgrades & Migrations",
          element: (
            <div className="flex flex-col gap-4 bg-white text-[#30667b] w-80 p-2 h-full rounded-xl">
              <p>Upgrades & Migrations</p>
            </div>
          ),
        },
      ],
    },

    {
      id: 4,
      name: "Resources",
      subItems: [
        {
          id: "1a",
          name: "Blog",
          element: (
            <div className="flex flex-col gap-4 bg-white text-[#30667b] w-80 p-2 h-full rounded-xl">
              <p>Distribution</p>
              <p>Manufacturing</p>
            </div>
          ),
        },
        {
          id: "1b",
          name: "eBook and White Papers",
          element: (
            <div className="flex flex-col gap-4 bg-white text-[#30667b] w-80 p-2 h-full rounded-xl">
              <p>Distribution</p>
              <p>Manufacturing</p>
            </div>
          ),
        },
        {
          id: "1c",
          name: "Events",
          element: (
            <div className="flex flex-col gap-4 bg-white text-[#30667b] w-80 p-2 h-full rounded-xl">
              <p>Browse All Events</p>
            </div>
          ),
        },
        {
          id: "1d",
          name: "Prodcast",
          element: (
            <div className="flex flex-col gap-4 bg-white text-[#30667b] w-80 p-2 h-full rounded-xl">
              <p>Episodes</p>
              <p>Listen on Apple Music</p>
              <p>Listen on Spotify</p>
              <p>Manufacturing the Future</p>
            </div>
          ),
        },
        {
          id: "1e",
          name: "Success Stories",
          element: (
            <div className="flex flex-col gap-4 bg-white text-[#30667b] w-80 p-2 h-full rounded-xl">
              <p>Distribution</p>
              <p>Manufacturing</p>
            </div>
          ),
        },
        {
          id: "1f",
          name: " Videos",
          element: (
            <div className="flex flex-col gap-4 bg-white text-[#30667b] w-80 p-2 h-full rounded-xl">
              <p>Distribution</p>
              <p>Manufacturing</p>
            </div>
          ),
        },
      ],
    },

    {
      id: 5,
      name: "Company",
      subItems: [
        {
          id: "1a",
          name: " Why Epicor?",
          element: (
            <div className="flex flex-col gap-4 bg-white text-[#30667b] w-80 p-2 h-full rounded-xl">
              <p>Why Epicor?</p>
              <p>For Manufacturers</p>
              <p>For Distributors</p>
              <p>Corporate Citizenship</p>
            </div>
          ),
        },
        {
          id: "1b",
          name: "Contact",
          element: <div></div>,
        },
        {
          id: "1d",
          name: "Careers",
          element: (
            <div className="flex flex-col gap-4 bg-white text-[#30667b] w-80 p-2 h-full rounded-xl">
              <p>Search Jobs</p>
              <p>Join Our Talent Network</p>
            </div>
          ),
        },
        {
          id: "1e",
          name: "Newsroom",
          element: (
            <div className="flex flex-col gap-4 bg-white text-[#30667b] w-80 p-2 h-full rounded-xl">
              <p>News Releases</p>
              <p>Analyst Relations</p>
              <p>In the News</p>
            </div>
          ),
        },
        {
          id: "1f",
          name: "Leadership",
          element: (
            <div className="flex flex-col gap-4 bg-white text-[#30667b] w-80 p-2 h-full rounded-xl">
              <p>Leadership Team</p>
              <p>Board of Directors</p>
            </div>
          ),
        },
      ],
    },

    {
      id: 6,
      name: "Partners",
      subItems: [
        {
          id: "1a",
          name: "  ISV Partners",
          element: (
            <div className="flex flex-col gap-4 bg-white text-[#30667b] w-80 p-2 h-full rounded-xl">
              <p>ISV Partner Login</p>
              <p>Browse ISV Partners</p>
            </div>
          ),
        },
        {
          id: "1b",
          name: "  Channel Partners",
          element: (
            <div className="flex flex-col gap-4 bg-white text-[#30667b] w-80 p-2 h-full rounded-xl">
              <p>Become a Partner</p>
              <p>Find a Partner</p>
            </div>
          ),
        },
        {
          id: "1d",
          name: "Influencers",
          element: (
            <div className="flex flex-col gap-4 bg-white text-[#30667b] w-80 p-2 h-full rounded-xl">
              <p>Independent Consultants</p>
              <p>System Integrators</p>
              <p>Private Equity</p>
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <>
      <div className="hidden lg:flex flex-col">
        <div className="bg-[#022b3bff]  text-white lg:px-[7%] z-50 fixed top-0 w-full">
          <div className="flex items-center justify-between p-3">
            <div>
              <img src={epicor} alt="" className="h-8" />
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
            <div
              key={""}
              className="flex justify-center lg:gap-12 gap-5 p-2 *:text-"
            >
              {navItems.map((i) => {
                return (
                  <div key={""} className="flex flex-col relative py-2 group">
                    <div className="cursor-pointer  hover:bg-slate-600 hover:rounded-md">
                      {i.name}
                    </div>
                    <div className="absolute  cursor-pointer top-10 w-[40rem] h-fit z-50 p-2 *:p-2 !text-xl !text-black border shadow bg-gray-100 rounded-xl hidden group-hover:flex">
                      <div>
                        {i.subItems.map((subItem) => {
                          return (
                            <p
                              className="text-sky-700 p-3 hover:bg-white hover:rounded-md hover:w-full "
                              onMouseEnter={() => setHover(subItem.id)}
                            >
                              {subItem.name}
                            </p>
                          );
                        })}
                      </div>
                      <div>
                        {i?.subItems?.find((sub) => sub.id === hover)
                          ?.element || i?.subItems[0].element}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="flex  lg:hidden bg-[#022b3bff] justify-between p-3">
        <img src={epicor} alt="" className="h-8" />{" "}
        <IconButton onClick={() => setOpen(true)}>
          <Menu className="text-white" />
        </IconButton>
        <Drawer
          className="lg:!hidden"
          anchor="right"
          open={open}
          onClose={() => setOpen(false)}
        >
          <List>
            <ListItem className="!flex !justify-between gap-5">
              <div className="border rounded-xl p-1">
                <input
                  type="search"
                  placeholder="Search Something..."
                  className="outline-none"
                />
                <IconButton>
                  <Search />
                </IconButton>
              </div>
              <IconButton onClick={() => setOpen(false)}>
                <Close />
              </IconButton>
            </ListItem>

            <Divider />

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <p>Solution</p>
              </AccordionSummary>
              <AccordionDetails>
                <span className="flex flex-col gap-4">
                  <p className="text-cyan-800">By Industry</p>
                  <p className="text-cyan-800">By Technology Initiative</p>
                  <p className="text-cyan-800"> By Current Software</p>
                </span>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <p>Product</p>
              </AccordionSummary>
              <AccordionDetails>
                <span className="flex flex-col gap-4">
                  <p className="text-cyan-800">All Products A to Z</p>
                  <p className="text-cyan-800">Bussiness Intelligration</p>
                  <p className="text-cyan-800">
                    Data Management and Integration
                  </p>
                  <p className="text-cyan-800">Digital Commerce</p>
                  <p className="text-cyan-800">
                    Enterprise Resource Planning (ERP)
                  </p>
                  <p className="text-cyan-800">Finacial Management</p>
                </span>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <p>Customers</p>
              </AccordionSummary>
              <AccordionDetails>
                <span className="flex flex-col gap-4">
                  <p className="text-cyan-800">Customer Support</p>
                  <p className="text-cyan-800">Epicor Learning</p>
                  <p className="text-cyan-800">Professional Services</p>
                  <p className="text-cyan-800">Epicor Insights</p>
                  <p className="text-cyan-800">Security Services</p>
                  <p className="text-cyan-800">Upgrades & Migrations</p>
                </span>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <p>Resources</p>
              </AccordionSummary>
              <AccordionDetails>
                <span className="flex flex-col gap-4">
                  <p className="text-cyan-800">Blog</p>
                  <p className="text-cyan-800">eBook and White Papers</p>
                  <p className="text-cyan-800">Events</p>
                  <p className="text-cyan-800">Prodcast</p>
                  <p className="text-cyan-800">Success Stories</p>
                  <p className="text-cyan-800">Videos</p>
                </span>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <p>Company</p>
              </AccordionSummary>
              <AccordionDetails>
                <span className="flex flex-col gap-4">
                  <p className="text-cyan-800">Why Epicor?</p>
                  <p className="text-cyan-800">Leadership</p>
                  <p className="text-cyan-800">Contact</p>
                  <p className="text-cyan-800">Careers</p>
                  <p className="text-cyan-800">Newsroom</p>
                </span>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <p>Partners</p>
              </AccordionSummary>
              <AccordionDetails>
                <span className="flex flex-col gap-4">
                  <p className="text-cyan-800">ISV Partners?</p>
                  <p className="text-cyan-800"> Channel Partners</p>
                  <p className="text-cyan-800">Influencers</p>
                </span>
              </AccordionDetails>
            </Accordion>
            <div className="flex flex-col gap-2 p-2">
              <Link to={"/contectus"}>
                <ListItemButton className="!bg-[#053b54] !rounded-xl !text-white">
                  Contact Us
                </ListItemButton>
              </Link>
              <Link to={"/getsupport"}>
                <ListItemButton className="!bg-[#327e9c] !rounded-xl !text-white">
                  Get Support
                </ListItemButton>
              </Link>
            </div>
          </List>
        </Drawer>
      </div>
    </>
  );
};

export default Header;
