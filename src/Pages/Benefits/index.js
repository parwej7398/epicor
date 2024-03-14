import React from "react";
import Grow_Efficiently from "../../Asset/st-engineer-manufacturing-tool-pc.png";
import Drive_Supply_Chain_Agility from "../../Asset/st-employee-boxes-mms.png";
import Deepen_Customer_Relationships from "../../Asset/st-employee-devices-sell.png";
import Slider from "react-slick";

const Benefits = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
  };
  return (
    <>
      <div
        id="Benefits"
        className="flex p-10 flex-col gap-10 text-center lg:px-32"
      >
        <p className="lg:text-5xl text-4xl text-center font-semibold">
          Benefits to Manufacturers
        </p>
        <p className="text-xl">
          Market Research company IDC reported that Epicor customers benefit, on
          average, by more than five times their investment costs.
        </p>
        <div className="lg:flex max-lg:flex max-lg:flex-col gap-6  lg:justify-between lg:px-32">
          <div className="*:text-xl *:font-semibold text-[#053b54ff]">
            <p>14.5%</p>
            <p>Higher Total Revenue</p>
          </div>
          <div className="*:text-xl *:font-semibold text-[#053b54ff]">
            <p>373%</p>
            <p>3-Year ROI</p>
          </div>
          <div className="*:text-xl *:font-semibold text-[#053b54ff]">
            <p>9 mos.</p>
            <p>Payback Period</p>
          </div>
          <div className="*:text-xl *:font-semibold text-[#053b54ff]">
            <p>94%</p>
            <p>Orders Delivered On Time</p>
          </div>
        </div>
        <p className=" rounded-xl lg:ml-[34rem] bg-[#278271ff] lg:w-44 p-3 items-center text-center text-white">
          GET THE REPORT
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="lg:flex lg:items-center p-4 lg:px-36">
          <div>
            <img src={Grow_Efficiently} alt="" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="lg:text-5xl text-3xl font-semibold">
              Grow Efficiently
            </p>
            <p className="text-lg text-slate-500">
              Accelerate your growth with business solutions that continually
              innovate with the latest technology including IoT, AI, and ML.
            </p>
            <div className="text-lg text-slate-500">
              <p>
                • Drive automation throughout the business from the top floor to
                the plant floor.
              </p>
              <p>
                • Empower your workforce with collaborative experiences,
                intelligent insight, and productivity tools.
              </p>
              <p>
                • Streamline operations with a foundation of best practices for
                manufacturers, easily extended as your business needs change.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:items-center lg:px-36">
          <div>
            <img
              src={Drive_Supply_Chain_Agility}
              alt=""
              className="lg:w-[80rem]"
            />
          </div>
          <div className="lg:flex lg:flex-col p-4 gap-1">
            <p className="lg:text-5xl text-3xl font-semibold">
              Drive Supply Chain Agility
            </p>
            <p className="text-lg text-slate-500">
              Leverage advanced tools in forecasting, MRP II, planning and
              scheduling alongside flexible business insights to anticipate
              supply needs and supplier performance.
            </p>
            <div className="text-lg text-slate-500">
              <p>
                • Ensure visibility across your extended enterprise for a more
                sustainable and flexible supply chain.
              </p>
              <p>
                • Digitally collaborate with suppliers across all activities
                from RFQ to Purchase Receipt, all while benchmarking success.
              </p>
              <p>
                • More tightly manage inventories with "at the point of
                activity" tracking via mobile devices.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex p-4 lg:items-center lg:px-36">
          <div>
            <img src={Deepen_Customer_Relationships} alt="" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="lg:text-5xl text-3xl font-semibold">
              Deepen Customer Relationships
            </p>
            <p className="text-lg text-slate-500">
              Strengthen customer connections to increase revenues and expand
              profits with innovative digital solutions.
            </p>
            <div className="text-lg text-slate-500">
              <p>
                • Enhance customer relationships with eCommerce and dealer
                portals enabled with visual configure, price, quote (CPQ).
              </p>
              <p>
                • Be more responsive and grow revenues by leveraging data
                insights for manufacturers.
              </p>
              <p>
                • Know your costs to deliver competitive pricing without
                compromising your bottom line.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-[15%] px-[5%]">
        <Slider {...settings}>
          <div className="bg-[#bae3d6] rounded-xl lg:h-64 lg:text-2xl lg:p-10 p-2">
            <div className="lg:flex max-lg:flex max-lg:flex-col  gap-5">
              <p>
                “National Instruments can now digitally transform the test and
                measurement industry by coupling its rich software heritage with
                the Epicor CPQ innovative cloud capabilities to help customers
                rapidly create what’s next.”
              </p>
              <p>Scott Studer Senior Director of Global Customer Operations</p>
            </div>
          </div>
          <div className="bg-[#bae3d6] rounded-xl lg:h-64 lg:text-2xl lg:p-10 p-2">
            <div className="lg:flex max-lg:flex max-lg:flex-col  gap-5">
              <p>
                “The driving reason for moving to Epicor EDI was speed to
                market. Now, onboarding is complete in two to six weeks – a
                massive improvement”
              </p>
              <p>Ken Hayes Senior Director of IT | Ergobaby</p>
            </div>
          </div>
          <div className="bg-[#bae3d6] rounded-xl lg:h-64 lg:text-2xl lg:p-10 p-2">
            <div className="lg:flex max-lg:flex max-lg:flex-col  gap-5">
              <p>
                “Over time, we've expanded Epicor to integrate with every part
                of our business. We've also grown at roughly 11 or 12%, compound
                annual growth rate, during that time...And Epicor just kept pace
                with us every step of the way.”
              </p>
              <p>Chris Inverso CEO | Rainier Industries</p>
            </div>
          </div>
          <div className="bg-[#bae3d6] rounded-xl lg:h-64 lg:text-2xl lg:p-10 p-2">
            <div className="lg:flex max-lg:flex max-lg:flex-col  gap-5">
              <p>
                “Epicor provides an easily accessible assembly process that can
                be digitally updated at any time. It also gives new team members
                the confidence to build products they've never assembled before,
                with minimal training.”
              </p>
              <p>
                Matt Holtman Director of Manufacturing Engineering & Quality |
                Gray Manufacturing Company, Inc.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Benefits;
