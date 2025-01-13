import React from "react";

function HeaderFile() {
  return (
    <div className="flex flex-row justify-between border border-gray-900 items-center p-[20px] ">
      <div>
        <h1 className="text-gray-200 text-sm">Mentoria logo</h1>
      </div>
      <div className=" flex flex-row items-center space-x-2 text-gray-500 text-[20pxpx] font-semibold">
        <div>Students</div>
        <div>College Graduates</div>
        <div>Working Professionals</div>
        <div>Knowledge Gateway</div>
        <div>Career Library</div>
        <div>Pricing</div>
        <div>Contact</div>
        <div> Profile</div>
        <div className="flex flex-row">
          <img
            className="h-[48px] w-[48px ] rounded-[50%]"
            src={require("../../assets/profile.png")}
            alt="profile-img"
          />
        </div>
        <div>User</div>
      </div>
    </div>
  );
}

export default HeaderFile;
