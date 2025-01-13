import React, { useState } from "react";

export default function PartnerForm() {
  const [activeTab, setActiveTab] = useState("call-meeting");
  const [formData, setFormData] = useState({
    fullName: "",
    designation: "",
    organisation: "",
    city: "",
    phoneNumber: "",
    date: "",
    time: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const tabs = [
    { id: "call-meeting", label: "Call us for a meeting" },
    { id: "get-call", label: "Get a call from us" },
    { id: "get-email", label: "Get an email from us" },
  ];

  return (
    <div className="bg-[#eae8e9] py-12 px-4 sm:px-6 lg:px-8">
      <div className="p-4 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#333] mb-4">
            Partner With Us
          </h1>
          <p className="text-[24px] leading-7 font-normal text-[#666]">
            Invite us over for a meeting and we'll be happy to take you through
            our full solution.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-between mb-8 border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`pb-4 px-4 text-sm font-medium ${
                activeTab === tab.id
                  ? "text-gray-500 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {activeTab === "call-meeting" && (
            <>
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md p-[8px] border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your Full Name"
                />
              </div>
              {/* Additional fields for Call Meeting */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <label
                    htmlFor="designation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Designation
                  </label>
                  <input
                    type="text"
                    name="designation"
                    id="designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md p-[8px] border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter your Designation"
                  />
                </div>
                <div>
                  <label
                    htmlFor="organisation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Organisation
                  </label>
                  <input
                    type="text"
                    name="organisation"
                    id="organisation"
                    value={formData.organisation}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md p-[8px] border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter your Organisation"
                  />
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md p-[8px] border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter your City"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md p-[8px] border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter your Phone Number"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  When would you like us to come over for a meeting?
                </h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md p-[8px] leading-8 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="time"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Time
                    </label>
                    <select
                      name="time"
                      id="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md p-[12px] leading-8 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="">Select a time</option>
                      <option value="09:00">09:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">01:00 PM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                      <option value="17:00">05:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="py-4 px-8 rounded bg-[#6c77eb] font-semibold text-white"
                >
                  LET'S MEET
                </button>
              </div>
            </>
          )}

          {activeTab === "get-call" && (
            <>
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md p-[8px] border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your Full Name"
                />
              </div>
              <div className="flex flex-row gap-[240px]">
                <div>
                  <label
                    htmlFor="designation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Designation
                  </label>
                  <input
                    type="text"
                    name="designation"
                    id="designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                    className="mt-1 block w-[280] rounded-md p-[16px] leading-5  shadow-sm "
                    placeholder="Enter your Designation"
                  />
                </div>
                <div>
                  <label
                    htmlFor="organisation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Organisation
                  </label>
                  <input
                    type="text"
                    name="organisation"
                    id="organisation"
                    value={formData.organisation}
                    onChange={handleInputChange}
                    className="mt-1 block rounded-md w-[280px]  p-[16px]  leading-5 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter your Organisation"
                  />
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="mt-1 block rounded-md w-[280px]  p-[16px]  leading-5 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter your City"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="mt-1 block w-[280px]  p-[16px]  leading-5 rounded-md  border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter your Phone Number"
                  />
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="py-4 px-8 rounded bg-[#6c77eb] font-semibold text-white"
                >
                  GET A CALL
                </button>
              </div>
            </>
          )}

          {activeTab === "get-email" && (
            <>
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md p-[8px] border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your Full Name"
                />
              </div>
              <div className="flex flex-row gap-[246px] items-center ">
                <div>
                  <label
                    htmlFor="designation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Designation
                  </label>
                  <input
                    type="text"
                    name="designation"
                    id="designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                    className="mt-1 block w-[280] rounded-md p-[20px] leading-7  shadow-sm "
                    placeholder="Enter your Designation"
                  />
                </div>
                <div>
                  <label
                    htmlFor="organisation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Organisation
                  </label>
                  <input
                    type="text"
                    name="organisation"
                    id="organisation"
                    value={formData.organisation}
                    onChange={handleInputChange}
                    className="mt-1 block rounded-md w-[280px]  p-[20px]  leading-7 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter your Organisation"
                  />
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="mt-1 block rounded-md w-[280px]  p-[20px]  leading-7 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter your City"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Enter Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block rounded-md w-[280px]  p-[20px]  leading-7 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter your Email"
                  />
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="py-4 px-8 rounded bg-[#6c77eb] font-semibold text-white"
                >
                  GET AN EMAIL
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
