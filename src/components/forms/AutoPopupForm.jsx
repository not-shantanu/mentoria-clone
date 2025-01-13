import { useState, useEffect } from "react";
import axios from "axios";

export default function AutoPopupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    designation: "",
    organisation: "",
    city: "",
    phoneNumber: "",
  });

  // Automatically show the popup when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/submit", formData);
      alert("Form submitted successfully!");

      // Reset form and close modal
      setFormData({
        fullName: "",
        designation: "",
        organisation: "",
        city: "",
        phoneNumber: "",
      });
      setIsOpen(false);
    } catch (error) {
      console.error("Error!", error.message);
      alert("An error occurred. Please try again.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={handleOutsideClick}
        >
          {/* Modal Content */}
          <div className="bg-white w-[1040px] rounded-lg h-[580px]">
            <div className="bg-[#eae8e9]  p-[116px] m-[24px]  justify-center items-center max-w-full">
              <h2 className="text-5xl font-semibold text-center mb-6">
                Get a call from us
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Form Fields */}
                <div>
                  <label className="text-sm font-medium items-start text-gray-700">
                    Enter Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex flex-row  gap-2  items-center justify-center">
                  <div>
                    <label className="block text-sm font-normal text-gray-700">
                      Designation
                    </label>
                    <input
                      type="text"
                      name="designation"
                      placeholder="Enter your Designation"
                      value={formData.designation}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border leading-8 p-[20px] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-normal text-gray-700">
                      Organisation
                    </label>
                    <input
                      type="text"
                      name="organisation"
                      placeholder="Enter your Orgnisation"
                      value={formData.organisation}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border leading-8 p-[20px] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-normal text-gray-700">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      placeholder="Enter your City"
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border leading-8 p-[20px]  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm items-center  font-normal  text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="Enter your Phone Number"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border leading-8 p-[20px] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="flex gap-4 justify-center mt-6">
                  <button
                    type="submit"
                    className="px-8 py-2 text-lg  leading-8 p-8 font-semibold text-white  bg-[#6c77eb] rounded-md hover:bg-[#6c77eb] focus:outline-none focus:ring-2 focus:ring-offset-2 "
                  >
                    GET A CALL
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
