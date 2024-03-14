import React from "react";

const Contect = () => {
  return (
    <>
      <div
        id="Contect"
        className="lg:flex justify-between lg:px-36 bg-[#f0f8faff] lg:p-20 p-10"
      >
        <div className="lg:w-[50%]">
          <p className="text-5xl font-semibold">Let's Talk</p>
          <p className="text-xl">
            Thousands of manufacturers rely on Epicor software to help them grow
            and scale. Bring us your questions. Tell us what's working and
            what's not. We'll work with you to curate the right solution for
            your business.
          </p>
        </div>
        <form className="flex flex-col gap-5">
          <p className="text-sm">Fields with an * are required</p>
          <div>
            <p>
              First Name <span className="text-red-600">*</span>
            </p>
            <input
              type="text"
              className="border rounded-md p-2 lg:w-[30rem] w-full"
            />
          </div>
          <div>
            <p>
              Last Name <span className="text-red-600">*</span>
            </p>
            <input
              type="text"
              className="border rounded-md p-2 lg:w-[30rem] w-full"
            />
          </div>
          <div>
            <p>
              Business Email <span className="text-red-600">*</span>
            </p>
            <input
              type="email"
              className="border rounded-md p-2 lg:w-[30rem] w-full"
            />
          </div>
          <div>
            <p>
              Company <span className="text-red-600">*</span>
            </p>
            <input
              type="text"
              className="border rounded-md p-2 lg:w-[30rem] w-full"
            />
          </div>
          <div>
            <p>Message (optional)</p>
            <input
              type="text"
              className="border rounded-md p-2 lg:w-[30rem] w-full"
            />
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
      <div className="flex flex-col gap-4 text-center justify-center bg-[#a9c9d6ff] lg:p-32 p-10">
        <p className="text-5xl font-semibold">Related</p>
        <div className="flex gap-5 *:bg-white *:border text-center justify-center *:p-1 *:rounded-xl">
          <p>Distribution</p>
          <p>Building Supply</p>
          <p>Automotive</p>
        </div>
      </div>
    </>
  );
};

export default Contect;
