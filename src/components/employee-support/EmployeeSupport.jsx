import React from "react";

const EmployeesSupport = () => {
  return (
    <div>
      <div className="text-center m-[50px]">
        <h1 className="text-5xl font-bold text-[#333] mb-[20px]">
          Support your employees where it matters most
        </h1>
        <div className="text-[#666] font-medium text-[24px]">
          Every parent’s ultimate goal is to secure a happy and successful
          future for their children. Some of your employees are all set to guide
          their children in making life choices that will dictate how this
          future turns out. They have a vast array of options, and one wrong
          move could lead to a lifetime of frustration and misery. Ease this
          tremendous burden and fulfill your employees’ ultimate parenting goal
          by sponsoring a holistic career guidance programme for their children
          in Class 8 and above.
        </div>

        <p className="text-[#666] font-medium text-[24px]">
          Here’s how numerous corporates across India have phenomenally
          transformed employee engagement with the Mentoria Solution:
        </p>
      </div>
      <div>
        <h1 className="text-5xl font-bold">
          Benefits of implementing the Mentoria Solution for employees
        </h1>
        <div className="flex flex-row  bg-white items-center justify-center">
          <div className=" flex flex-col mb-20  w-[400px]">
            <div className="mb-[80px]">
              <h2 className="text-[#6c77eb] text-xl font-semibold mb-1 text-[18px]">
                Build a happier, more productive workforce.
              </h2>
              <div className="text-[#666] text-base  items-start gap-8 text-[20px]">
                Parents work hard to provide a safe, secure future for their
                children. De-stressing them by enabling their children to choose
                the right career creates huge amounts of trust, goodwill, and
                happiness amongst employees.
              </div>
            </div>
            <div>
              <h2 className="text-[#6c77eb] text-2xl font-semibold mb-1 mt-[80px] ">
                Build a happier, more productive workforce.
              </h2>
              <div className="text-[#666] text-base  items-start gap-8 text-[20px]">
                Parents work hard to provide a safe, secure future for their
                children. De-stressing them by enabling their children to choose
                the right career creates huge amounts of trust, goodwill, and
                happiness amongst employees.
              </div>
            </div>
          </div>

          <div className="">
            <img
              src={require("../../assets/Corporate-infographic.png")}
              alt="Infographic"
              className="max-w-full w-[480] h-[880px] mt-[180px]"
            />
          </div>

          <div className="flex flex-col w-[400px]">
            <h2 className="text-[#6c77eb] text-2xl font-semibold mb-1 mt-[100px]">
              Employee retention.
            </h2>
            <p className="text-[#666] text-base  items-start gap-8  mb-[100px] text-[20px]">
              When organisations send out a ‘we care’ message, not just to
              employees but their families as well, it is bound to result in
              greater employee retention.
            </p>
            <h2 className="text-[#6c77eb] text-2xl font-semibold mb-1 mt-[200px]">
              Employer branding.
            </h2>
            <p className="text-[#666] text-base  items-start gap-8 text-[20px]">
              Organisations can move beyond superficial employee engagement
              activities and make a sustaining impact on employees. Talent
              Acquisition teams can use this as a welfare initiative to improve
              their branding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeesSupport;
