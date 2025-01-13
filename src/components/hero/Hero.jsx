import React from "react";
import MeetTheBannerImg from "../../assets/meet-the-team-banner.png";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-[580px] flex items-center  justify-center"
      style={{ backgroundImage: `url(${MeetTheBannerImg})` }}
    >
      <div className="absolute top-20  text-center">
        <h1 className="text-white text-5xl mx-auto font-bold mb-4">
          Engage Employees By Connecting With Their Families
        </h1>
        <p className="text-white text-3xl font-semibold mx-auto">
          Enable the working parents in your organisation to fulfill their
          ultimate parenting goal.
        </p>
      </div>
    </div>
  );
};

export default Hero;
