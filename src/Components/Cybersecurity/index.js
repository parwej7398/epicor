import React from "react";
import cyber from "../../Asset/web_size_crop_JPG-corp-woman-reviewing-online-data-in-laptop.jpg";
import worker_in_factory from "../../Asset/web_size_crop_JPG-mfg-woman-worker-in-factory (1).jpg";

const Cybersecurity = () => {
  return (
    <div>
      <div className="flex px-32 mt-32 bg-[#093747] items-center">
        <div className="flex flex-col w-[60%] gap-7 p-14 text-white bg-[#093747]">
          <p>Manufacturing</p>
          <p className="bg-slate-600 w-fit rounded-md p-1">
            Cybersecurity in Manufacturing
          </p>
          <p className="text-5xl font-semibold">
            Defend Your Data and Operations
          </p>
          <p className="text-xl">
            In today's digital landscape, cybersecurity protection is critical
            in a manufacturer's ERP system.
          </p>
          <button className="bg-[#e00700] p-2 text-lg rounded-md w-fit">
            GET IN TOUCH
          </button>
        </div>
        <div>
          <img src={cyber} alt="" className="rounded-xl" />
        </div>
      </div>

      <div className="flex mx-32 p-10 mt-10 bg-slate-100 rounded-md items-center">
        <div className="flex flex-col gap-7 p-14">
          <p className="text-5xl font-semibold">
            Manufacturing: The Most-Attacked Industry
          </p>
          <p className="text-xl">
            Cybercriminals increasingly attack manufacturing companies more than
            any other.
          </p>
          <button className="border border-black p-2 text-lg rounded-md w-fit">
            LEARN MORE
          </button>
        </div>
        <div>
          <img src={worker_in_factory} alt="" className="rounded-xl" />
        </div>
      </div>
      <div className="flex mx-32 p-10 bg-[#053b54] rounded-md items-center text-white">
        <div>
          <img
            src={
              "https://www.epicor.com/globalassets/uploadedimages/shared/general-images/ransdsome-trends%20copy.png"
            }
            alt=""
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-7 p-14">
          <p className="text-5xl font-semibold">How Secure Is Your ERP?</p>
          <p className="text-xl">
            Evaluate your business security with a few quick questions.
          </p>
          <button className="bg-[#327e9c] p-2 text-lg rounded-md w-fit">
            ASSESS THE RISK
          </button>
        </div>
      </div>
      <div className="flex mx-32 p-10 rounded-md items-center">
        <div className="flex flex-col gap-7 p-14">
          <p className="text-5xl font-semibold">
            Protect Your Manufacturing Business
          </p>
          <p className="text-xl">
            25% of cyberattacks are directed at manufacturers. Get tips for
            staying safe.
          </p>
          <button className="border border-black p-2 text-lg rounded-md w-fit">
            WATCH NOW
          </button>
        </div>
        <div>
          <img
            src={
              "https://assets.epicor.com/m/145d713a0acf7e84/web_size_crop_JPG-mfg-woman-engineer-checking-data.jpg"
            }
            alt=""
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="flex mx-32 p-10 rounded-md items-center">
        <div>
          <img
            src={
              "https://assets.epicor.com/m/5f4c55e9debe3f6d/web_size_crop_JPG-corp-man-fixing-office-network.jpg"
            }
            alt=""
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-7 p-14">
          <p className="text-5xl font-semibold">
            Secure Your Business From Trending Cybercrime
          </p>
          <p className="text-xl">
            The dark web has seen a 300% increase in the number of references to
            manufacturing organizations.
          </p>
          <button className="border border-black p-2 text-lg rounded-md w-fit">
            WATCH NOW
          </button>
        </div>
      </div>

      <div className="bg-slate-100">
        <div className="flex flex-col gap-5 justify-center text-center px-80 p-10">
          <p className="text-4xl font-semibold">Protect Your Business</p>
          <p className="text-2xl text-slate-700">
            Manufacturing replaced financial services as the top attacked
            industry in 2021, according to IBM. In an evolving threat landscape,
            you need to develop a strategy—and deploy the technology—to defend
            your company.
          </p>
        </div>

        <div className="flex mx-32 p-10 mt-10 bg-slate-100 rounded-md items-center">
          <div className="flex flex-col gap-7 p-14">
            <p className="text-5xl font-semibold">Increase Your Awareness</p>
            <p className="text-xl">Learn the Anatomy of a Ransomware Attack</p>
            <p>
              In this webinar, Epicor CIO Rich Murr breaks down the stages of a
              ransomware attack to help you develop solutions for defending
              against the threat.
            </p>
            <button className="border border-black p-2 text-lg rounded-md w-fit">
              WATCH NOW
            </button>
          </div>
          <div>
            <img
              src={
                "https://assets.epicor.com/m/2f2a35d233c532e3/web_size_crop_JPG-business-persons-having-a-meeting-in-the-office.jpg"
              }
              alt=""
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="flex mx-32 p-10 rounded-md items-center">
          <div>
            <img
              src={
                "https://assets.epicor.com/m/4f4e0a61f001c51a/web_size_crop_JPG-corp-coworkers-view-tablet-in-factory.jpg"
              }
              alt=""
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-2 p-14">
            <p className="text-5xl font-semibold">Develop A Strategy</p>
            <p>
              It’s easier to develop a cybersecurity strategy that protects your
              business when you understand the basics. Read this article for
              insights about:
            </p>
            <li>5 types of cyberattacks.</li>
            <li>7 types of cybersecurity defenses.</li>
            <li>The latest cybersecurity trends.</li>
            <li>
              The people, processes, and technology needed for a strong
              cybersecurity strategy.
            </li>
            <button className=" p-2 text-lg rounded-md border border-black w-fit">
              LEARN MORE
            </button>
          </div>
        </div>

        <div className="flex mx-32 p-10 rounded-md items-center">
          <div className="flex flex-col gap-7 p-14">
            <p className="text-5xl font-semibold">
              Explore Cloud ERP with Cybersecurity Expertise
            </p>
            <p className="text-xl">
              Free Up Resources While Increasing Security
            </p>
            <p>
              Operating your business in the cloud gives you the cybersecurity
              protection—plus the power and flexibility—to thrive in the digital
              world. Enable secure remote operations, save on IT costs, and
              empower your teams to grow and scale.
            </p>
            <button className="border border-black p-2 text-lg rounded-md w-fit">
              LEARN ABOUTCLOUD ERP SOLUCTION
            </button>
          </div>
          <div>
            <img
              src={
                "https://assets.epicor.com/m/7589cc938344e3e/web_size_crop_JPG-mfg-electronics-development-engineer-working-on-computer.jpg"
              }
              alt=""
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="flex mx-32 p-10 rounded-md items-center">
          <div>
            <img
              src={
                "https://assets.epicor.com/m/4e4e647dcb1e2332/web_size_crop_JPG-sonic-wall-partners-awards-web-image.jpg"
              }
              alt=""
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-7 p-14">
            <p className="text-5xl font-semibold">
              Secure Your Business From Trending Cybercrime
            </p>
            <p>
              Three Layers of Security Managed by Epicor Security Suite services
              are fully operated and managed by Epicor security experts. Ideal
              for companies with limited or no IT security staff or expertise.
            </p>
            <button className="border border-black p-2 text-lg rounded-md w-fit">
              LEARN ABOUT SECOURTY SUITE
            </button>
          </div>
        </div>

        <div className="flex mx-32 p-10 bg-[#b0d2d6] rounded-md items-center">
          <div>
            <img
              src={
                "https://www.epicor.com/globalassets/uploadedimages/shared/epicor-mfg-podcast-web.png"
              }
              alt=""
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-7 p-14 w-[90%]">
            <p className="text-4xl font-semibold">
              “...I don’t have to spend resources now to take care of something
              that they take care of for me.”
            </p>
            <p>
              David Boyer | President of Boyer Machine & Tool on moving to
              Kinetic in the Cloud
            </p>
            <button className="border border-black bg-white text-black p-2 text-lg rounded-xl w-fit">
              LISTEN TO THE FULL EPISODE
            </button>
          </div>
        </div>
      </div>

      <div
        id="Contect"
        className="flex justify-between px-36 bg-[#f0f8faff] p-20"
      >
        <div className="w-[50%]">
          <p className="text-5xl font-semibold">Have a Question?</p>
          <p className="text-xl">
            Strong security is critical in the digital universe. That’s why we
            are here. Tell us what’s on your mind, and we will help you find the
            right solution for your business.
          </p>
        </div>
        <form className="flex flex-col gap-5">
          <p className="text-sm">Fields with an * are required</p>
          <div>
            <p>
              First Name <span className="text-red-600">*</span>
            </p>
            <input type="text" className="border rounded-md p-2 w-[30rem]" />
          </div>
          <div>
            <p>
              Last Name <span className="text-red-600">*</span>
            </p>
            <input type="text" className="border rounded-md p-2 w-[30rem]" />
          </div>
          <div>
            <p>
              Business Email <span className="text-red-600">*</span>
            </p>
            <input type="email" className="border rounded-md p-2 w-[30rem]" />
          </div>
          <div>
            <p>
              Company <span className="text-red-600">*</span>
            </p>
            <input type="text" className="border rounded-md p-2 w-[30rem]" />
          </div>
          <div>
            <p>Message (optional)</p>
            <input type="text" className="border rounded-md p-2 w-[30rem]" />
          </div>
          <div className="flex gap-1 items-center">
            <input type="checkbox" className="size-5" />
            <p>
              <span className="text-red-600">*</span> i agree to the Website
              terms and conditions.
            </p>
          </div>
          <button
            type="submit"
            className="border w-fit p-2 rounded-xl bg-[#ff2003ff] text-white font-semibold"
          >
            SUBMIT
          </button>
          <p className="text-sm">
            Epicor values your privacy. Website terms and conditions.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Cybersecurity;
