import React from "react";
import Continuous from "../../Asset/web_size_crop_JPG-mfg-two-industry-engineers-working-in-the-factory-workshop.jpg";
import Eliminate from "../../Asset/web_size_crop_JPG-mfg-woman-engineer.jpg";
import Reduce from "../../Asset/web_size_crop_JPG-mfg-industrial-man-woman-engineers-with-tablet.jpg";
import Measure from "../../Asset/web_size_crop_JPG-mfg-woman-worker-in-factory (1).jpg";
import Dont_Risk from "../../Asset/web_size_crop_JPG-mfg-asian-man-power-pose-robotic-arm.jpg";
import Documents from "../../Asset/web_size_crop_JPG-mfg-engineers-using-tablet-at-car-plant.jpg";

const WebinarSeries = () => {
  const product = [
    {
      id: "1",
      images: Continuous,
      session: "Session 1",
      paragraph:
        "Halt the Continuous Bleeding of Sales Revenue by Arming Your Sales Team with Epicor CPQ",
      button: "VIEW RECORDING",
    },
    {
      id: "2",
      images: Eliminate,
      session: "Session 2",
      paragraph:
        "Eliminate the Pain of Backorders and Lost Sales by Using Smartforecasts",
      button: "VIEW RECORDING",
    },
    {
      id: "3",
      images: Reduce,
      session: "Session 3",
      paragraph:
        "Eliminate the Pain of Backorders and Lost Sales by Using Smartforecasts",
      title: "with Inventory Management from Epicor",
      button: "VIEW RECORDING",
    },
    {
      id: "4",
      images: Measure,
      session: "Session 4",
      paragraph:
        "Eliminate the Pain of Backorders and Lost Sales by Using Smartforecasts",
      title:
        "Improve Your Products & Services with Engineering Tools from Epicor",
      button: "VIEW RECORDING",
    },
    {
      id: "5",
      images: Dont_Risk,
      session: "Session 5",
      paragraph:
        "Eliminate the Pain of Backorders and Lost Sales by Using Smartforecasts",
      title:
        "Understand Your Bottom Line with Epicor Financial Planning & Analysis",
      button: "VIEW RECORDING",
    },
    {
      id: "6",
      images: Documents,
      session: "Session 6",
      paragraph:
        "Eliminate the Pain of Backorders and Lost Sales by Using Smartforecasts",
      title: "",
      button: "VIEW RECORDING",
    },
  ];
  return (
    <div>
      <div className="flex flex-col text-center justify-center gap-10 px-96 mt-24 p-24 text-white bg-[#093747]">
        <p>Manufacturing / Critical Tech Tools for Manufacturers</p>
        <p className="text-5xl font-semibold">
          6 Critical Tech Tools for Manufacturers
        </p>
        <p className="text-5xl font-semibold">
          How to Stop the Bleeding and Boost Your Bottom Line
        </p>
      </div>
      <div>
        <div className="flex flex-col gap-12 text-center justify-center *:text-2xl px-44 p-10">
          <p>
            Most companies don’t realize how much money they are bleeding due to
            missed management opportunities, poor understanding of day-to-day
            operations, and a lack of clear, actionable intelligence.
          </p>
          <p>
            Would you rather buy a Band-Aid before or after you're hurt? Epicor
            Kinetic is the Manufacturing ERP Band-Aid that will help reduce
            losses across your organization.
          </p>
          <p>
            Join us for a series of 30-minute webcasts to learn how Epicor
            Kinetic can help your business manage the challenges of today,
            prepare for those of tomorrow—and improve your bottom line.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 p-10 gap-10 justify-between px-44">
        {product.map((event) => (
          <div key={""} className="border rounded-xl shadow-xl">
            <img src={event.images} alt="" className="rounded-xl" />
            <div className="p-3 flex-col gap-5 flex items-center justify-center text-center">
              <p className="text-sm">{event.session}</p>
              <p className="text-2xl">{event.paragraph}</p>
              <p className="text-slate-600 text-xl">{event.title}</p>
              <button className="border p-2 rounded-xl border-black">
                {event.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebinarSeries;
