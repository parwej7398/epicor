import React from "react";

const GlobalSide = () => {
  const america = [
    {
      id: 1,
      images:
        "https://assets.epicor.com/m/6bd1fd613da44fa1/mini-corp-global-site-flag-united-states.png",
      heading: "Epicor United States",
      paragraph: "English",
      title: "Products | Press | Support | Blogs",
    },
    {
      id: 2,
      images:
        "https://assets.epicor.com/m/26762815ee8a1669/mini-corp-global-site-flag-canada.png",
      heading: "Epicor Canada",
      paragraph: "In English",
      title: "Products | Support | Blogs",
    },
    {
      id: 3,
      images:
        "https://assets.epicor.com/m/26762815ee8a1669/mini-corp-global-site-flag-canada.png",
      heading: "Epicor Canada (Quebec)",
      paragraph: "En Français",
      title: "Products | Press | Support",
    },
    {
      id: 4,
      images:
        "https://assets.epicor.com/m/371d5f974829b148/mini-corp-global-site-flag-mexico.png",
      heading: "Epicor Mexico",
      paragraph: "En Español",
      title: "Products | Press | Support | Blogs",
    },
    {
      id: 5,
      images:
        "https://assets.epicor.com/m/64b52312bf2f18b4/mini-corp-global-site-flag-colombia.png",
      heading: "Epicor Colombia",
      paragraph: "Español",
      title: "Products | Press | Support | Blogs",
    },
  ];
  const Europe = [
    {
      id: 1,
      imagess:
        "https://assets.epicor.com/m/64284466e88a788a/mini-corp-global-site-flag-united-kingdom.png",
      headings: "Epicor United Kingdom",
      paragraphs: "English",
      titles: "Products | Press | Support",
    },
    {
      id: 2,
      imagess:
        "https://assets.epicor.com/m/35526dc2da1f5383/mini-corp-global-site-flag-germany.png",
      headings: "Epicor Germany",
      paragraphs: "Auf Deutsch",
      titles: "Products | Press | Support",
    },
    {
      id: 3,
      imagess:
        "https://assets.epicor.com/m/22b33bc12c610570/mini-corp-global-site-flag-sweden.png",
      headings: "Epicor Sweden",
      paragraphs: "På Svenska",
      titles: "Products | Press | Support",
    },
    {
      id: 4,
      imagess:
        "https://assets.epicor.com/m/4c8200c91089c72a/mini-corp-global-site-flag-india.png",
      headings: "Epicor India",
      paragraphs: "English",
      titles: "Products | Press | Support",
    },
    {
      id: 5,
      imagess:
        "data:image/png;base64,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",
      headings: "Epicor MEAI",
      paragraphs: "English",
      titles: "Products | Support | Blogs",
    },
  ];
  const asia = [
    {
      id: 1,
      img: "https://assets.epicor.com/m/59e3856e33f5b386/mini-corp-global-site-flag-australia.png",
      headng: "Epicor Australia-New Zealand",
      para: "English",
      titless: "Products | Press | Support | Blogs",
    },
    {
      id: 2,
      img: "https://assets.epicor.com/m/31fec7bfd8a3bf25/mini-corp-global-site-flag-china.png",
      headng: "Epicor China",
      para: "简体中文",
      titless: "Products| Press | Support",
    },
    {
      id: 3,
      img: "https://assets.epicor.com/m/2b896e8774f6c765/mini-corp-global-site-flag-singapore.png",
      headng: "Epicor Singapore",
      para: "English",
      titless: "Products | Press | Support | Blogs",
    },
    {
      id: 4,
      img: "https://assets.epicor.com/m/6a5e02c3aac5312d/mini-corp-global-site-flag-malaysia.png",
      headng: "Epicor Malaysia",
      para: "English",
      titless: "Products | Press | Support",
    },
    {
      id: 5,
      img: "https://assets.epicor.com/m/213bc5025077f8dc/mini-corp-global-site-flag-indonesia.png",
      headng: "Epicor Indonesia",
      para: "English",
      titless: "Products | Press | Support",
    },
    {
      id: 6,
      img: "https://assets.epicor.com/m/7f3bd4ba505b504b/mini-corp-global-site-flag-hong-kong.png",
      headng: "Epicor North Asia - China Hong Kong",
      para: "繁體中文",
      titless: "Products | Press | Support",
    },
    {
      id: 7,
      img: "https://assets.epicor.com/m/37f357372809d32f/mini-corp-global-site-flag-taiwan.png",
      headng: "Epicor North Asia -Taiwan",
      para: "繁體中文",
      titless: "Products | Press | Support",
    },
    {
      id: 8,
      img: "https://assets.epicor.com/m/c57f3ee1ece343f/mini-corp-global-site-flag-thailand.png",
      headng: "Epicor Thailand",
      para: "ภาษาไทย",
      titless: "Products | Press | Support",
    },
    {
      id: 9,
      img: "https://assets.epicor.com/m/312d0c9367aaaea3/mini-corp-global-site-flag-vietnam.png",
      headng: "Epicor Vietnam",
      para: "Việt Nam",
      titless: "Products | Support",
    },
  ];
  return (
    <div>
      <div className="lg:px-32 mt-32 items-center">
        <div className="flex flex-col gap-7 p-14">
          <p>Global Sites</p>
          <p className="text-5xl font-semibold">Epicor Worldwide</p>
          <p className="text-xl text-slate-400">
            Epicor has a global presence with customers in more than 150
            countries. To learn more about Epicor, visit your local or regional
            site.
          </p>
          <button className="bg-[#e00700] p-2 text-lg rounded-md w-48 text-white">
            CONTACT SALES
          </button>
        </div>
        <p className="text-5xl px-14 font-semibold">Americas</p>
        <div className=" p-10 grid grid-cols-3 gap-10 px-12">
          {america.map((event) => (
            <div key={""} className="">
              <div className="p-4 flex flex-col gap-2">
                <img src={event.images} alt="" className="size-6" />
                <p className="text-2xl font-bold text-[#053b54]">
                  {event.heading}
                </p>
                <p className="text-xl">{event.paragraph}</p>
                <p>{event.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-5xl px-48 p-10 font-semibold">
          Europe, Middle East, and Africa
        </p>
      </div>
      <div className=" p-10 px-44 grid grid-cols-3 gap-10">
        {Europe.map((events) => (
          <div key={""} div className="p-4 flex flex-col gap-2">
            <img src={events.imagess} alt="" className="size-6" />
            <p className="text-2xl font-bold text-[#053b54]">
              {events.headings}
            </p>
            <p className="text-xl">{events.paragraphs}</p>
            <p>{events.titles}</p>
          </div>
        ))}
      </div>
      <div>
        <p className="text-5xl px-48 p-10 font-semibold">Asia and Oceania</p>
      </div>
      <div className=" p-10 px-44 grid grid-cols-3 gap-10">
        {asia.map((i) => (
          <div key={""} div className="p-4 flex flex-col gap-2">
            <img src={i.img} alt="no data found" className="size-6" />
            <p className="text-2xl font-bold text-[#053b54]">{i.headng}</p>
            <p className="text-xl">{i.para}</p>
            <p>{i.titless}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlobalSide;
