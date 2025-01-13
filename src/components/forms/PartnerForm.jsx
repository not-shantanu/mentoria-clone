import React, { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to submit form data
      await axios.post("http://localhost:5000/submit", formData);
      alert("Form submitted successfully!");

      // Reset form data
      setFormData({
        fullName: "",
        designation: "",
        organisation: "",
        city: "",
        phoneNumber: "",
        date: "",
        time: "",
        email: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
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
                      {/* Time options */}
                      {[
                        "09:00",
                        "10:00",
                        "11:00",
                        "12:00",
                        "13:00",
                        "14:00",
                        "15:00",
                        "16:00",
                        "17:00",
                      ].map((time) => (
                        <option key={time} value={time}>
                          {time} AM/PM
                        </option>
                      ))}
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
              {/* Get a Call Form */}
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

              {/* Additional fields for Get a Call */}
              <div className="flex flex-row gap-[240px]">
                {/* Designation Field */}
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
                    className="mt-[12px] block w-[280px] rounded-md p-[16px] leading-[20px] shadow-sm "
                    placeholder="Enter your Designation"
                  />
                </div>

                {/* Organisation Field */}
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
                    className="mt-[12px] block rounded-md w-[280px]  p-[16px] leading-[20px] border-gray shadow-sm"
                    placeholder="Enter your Organisation"
                  />
                </div>

                {/* City Field */}
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="mt-[12px] block rounded-md w-[280px]  p-[16px] leading-[20px] border-gray shadow-sm"
                    placeholder="Enter your City"
                  />
                </div>

                {/* Phone Number Field */}
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="mt-[12px] block w-[280px]  p-[16px] leading-[20px] rounded-md  border-gray shadow-sm"
                    placeholder="Enter your Phone Number"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="py-[10px] px-[32px] rounded bg-[#6c77eb] font-semibold text-white"
                >
                  GET A CALL
                </button>
              </div>
            </>
          )}

          {activeTab === "get-email" && (
            <>
              {/* Get an Email Form */}
              <div className="flex flex-row gap-[200px]">
                <div>
                  <label
                    htmlFor="fullEmail"
                    className="block text-sm font-medium text-gray"
                  >
                    Enter Full Name
                  </label>
                  <input
                    type="text"
                    name="fullEmail"
                    id="fullEmail"
                    value={formData.fullEmail}
                    onChange={handleInputChange}
                    className="mt-[12px] block w-full rounded-md p-[8px]"
                    placeholder="Enter your Full Name"
                  />
                </div>

                {/* Additional fields for Get an Email */}
                {/* Designation Field */}
                <div>
                  <label
                    htmlFor="designation"
                    className="block text-sm font-medium text-gray"
                  >
                    Designation
                  </label>
                  <input
                    type="text"
                    name="designation"
                    id="designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                    className="mt-[12px] block w-full rounded-md p-[20px]"
                    placeholder="Enter your Designation"
                  />
                </div>

                {/* Organisation Field */}
                <div>
                  <label
                    htmlFor="organisation"
                    className="block text-sm font-medium text-gray"
                  >
                    Organisation
                  </label>
                  <input
                    type="text"
                    name="organisation"
                    id="organisation"
                    value={formData.organisation}
                    onChange={handleInputChange}
                    className="mt-[12px] block w-full rounded-md p-[20px]"
                    placeholder="Enter your Organisation"
                  />
                </div>

                {/* City Field */}
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    class="mt-[12px ] block w-full rounded-md p-[20px]"
                    placeholder="Enter your City"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    class="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Enter Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    class="mt-[12px ] block rounded-md w-[280px ]"
                    placeholder="Enter your Email"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  class="py -[10 px ] px -[32 px ] rounded bg-[#6c77eb ] font-semibold text-white"
                >
                  {" "}
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
