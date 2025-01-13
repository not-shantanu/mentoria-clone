import { useState } from "react";

// Import images directly
import partner1Logo from "../../assets/Hari Krishna Jewels.png"; // Update path according to your project structure
import partner2Logo from "../../assets/holisticinformation1.png";
import partner3Logo from "../../assets/testimonials1.png";
import partner4Logo from "../../assets/testimonial2.png";
import partner5Logo from "../../assets/k raheja.png";

const partners = [
  {
    id: 1,
    name: "Partner 1",
    // If using public folder:
    // logo: '/images/partner1.png'
    // If using imported images:
    logo: partner1Logo,
  },
  {
    id: 2,
    name: "Partner 2",
    logo: partner2Logo,
  },
  {
    id: 3,
    name: "Partner 3",
    logo: partner3Logo,
  },
  {
    id: 4,
    name: "Partner 4",
    logo: partner4Logo,
  },
  {
    id: 5,
    name: "Partner 5",
    logo: partner5Logo,
  },
  {
    id: 6,
    name: "Partner 1",
    // If using public folder:
    // logo: '/images/partner1.png'
    // If using imported images:
    logo: partner1Logo,
  },
  {
    id: 7,
    name: "Partner 2",
    logo: partner2Logo,
  },
  {
    id: 8,
    name: "Partner 3",
    logo: partner3Logo,
  },
  {
    id: 9,
    name: "Partner 4",
    logo: partner4Logo,
  },
  {
    id: 10,
    name: "Partner 5",
    logo: partner5Logo,
  },
];

const PARTNERS_PER_PAGE = 4;

export default function ClientTestimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(partners.length / PARTNERS_PER_PAGE);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Meet Our Partners
        </h2>

        <div className="relative">
          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-50"
            aria-label="Previous partners"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-50"
            aria-label="Next partners"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentPage * 100}%)`,
              }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div
                  key={pageIndex}
                  className="flex min-w-full justify-around items-center gap-8 px-8 py-12"
                >
                  {partners
                    .slice(
                      pageIndex * PARTNERS_PER_PAGE,
                      (pageIndex + 1) * PARTNERS_PER_PAGE
                    )
                    .map((partner) => (
                      <div
                        key={partner.id}
                        className="w-1/4 flex items-center justify-center px-4"
                      >
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="max-w-full h-auto object-contain"
                        />
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                  currentPage === index ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
