import React from "react";

const ContactUs = () => {
  const Contact = [
    {
      id: 1,
      images:
        "https://assets.epicor.com/m/36bf100c83cafbe8/original/contact-global-contacts-teal-icon-fill.svg",
      contect: "Id like to contact an Epicor office near me.",
    },
    {
      id: 2,
      images:
        "https://assets.epicor.com/m/7aa170f3797a3abb/original/Contact-Help-Teal-Icon.svg",
      contect: "Id a customer and need support.",
    },
    {
      id: 3,
      images:
        "https://assets.epicor.com/m/1259bf4f613abba7/original/Contact-Demo-Teal-Icon.svg",
      contect: "Id like to schedule a product demo.",
    },
    {
      id: 4,
      images:
        "https://assets.epicor.com/m/551db371562f7f52/original/Contact-Quote-Teal-Icon.svg",
      contect: "Id like to request pricing information.",
    },
    {
      id: 5,
      images:
        "https://assets.epicor.com/m/5f59137f22d55ed9/original/Contact-Partner-Teal-Icon.svg",
      contect: "Im interested in becoming a partner.",
    },
  ];
  return (
    <>
      <div className="lg:flex lg:flex-col gap-5 lg:px-44 pt-[10%] lg:p-24 p-4 text-white bg-[#093747]">
        <p>Contact</p>
        <p className="lg:text-5xl text-2xl font-semibold">Contact Epicor</p>
        <p className="lg:text-xl lg:w-[50%]">
          Whether you'd like to request a demo, talk about curating an Epicor
          solution to meet your business needs, or have a question about our
          products and services, we're here to help. Select an option below or
          call <span className="text-[#97bdcc]">+91 96########</span> .
        </p>
        <div className="flex gap-5">
          <button className="bg-[#e00700] p-2 text-lg rounded-md lg:w-48">
            CHAT WITH SALES
          </button>
          <button className="bg-[#327e9c] p-2 text-lg rounded-md lg:w-36">
            CONTACT FORM
          </button>
        </div>
      </div>
      <div className="lg:grid flex flex-col gap-3 lg:grid-cols-3 lg:justify-between lg:px-36 lg:p-20 p-4 lg:gap-10 bg-slate-300">
        {Contact.map((event) => (
          <div
            key={""}
            className="flex flex-col gap-8 items-center border p-10 rounded-xl shadow-md bg-white"
          >
            <img src={event.images} alt="" className="lg:size-20 size-8" />
            <p className="lg:text-2xl text-lg text-[#12465e] text-center">
              {event.contect}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContactUs;
