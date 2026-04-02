import React from "react";

function GetStarted() {
  return (
    <div className="bg-[#E6F7FF] p-16 mx-40 my-20 flex flex-col gap-5">
      <p className="text-[42px] leading-tight">Get started with Whirl</p>
      <p className="text-lg w-125 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <button className="text-white text-lg py-2 px-8 bg-[#0070A0] w-fit">
        Book a demo
      </button>
      <div className="flex flex-row gap-8">
        <p className="flex flex-row text-[#626A72] text-sm">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 7L8.3333 14L4 10.5"
              stroke="#6D757C"
              stroke-width="1.6"
            />
          </svg>
          Free 30-day trial
        </p>
        <p className="flex flex-row text-[#626A72] text-sm">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 7L8.3333 14L4 10.5"
              stroke="#6D757C"
              stroke-width="1.6"
            />
          </svg>
          No credit-card required
        </p>
      </div>
    </div>
  );
}

export default GetStarted;
