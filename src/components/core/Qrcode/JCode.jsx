import React from "react";
import { Globe, Mail } from "lucide-react";
import Logo from "../../../assets/acadewise logo.jpg";

const tableData = [
  ["Name", "Janavi Kanwar"],
  ["Father’s Name", "Shankar Singh Shekhawat"],
  ["Course", "Bachelor of Computer Applications (BCA)"],
  ["Organisation", "Acadewise , Sikar"],
  ["Domian", "Full Stack Developer Intern"],
  ["Duration", "1 Month"],
  ["Ref.No", "ACA/intern/01/26/04"],
  ["College Name", "Sh. Bahawani Niketan College for Boys"],
];

const InternshipTemplate = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center p-3 sm:p-6">
      <div className="relative w-full max-w-[794px] min-h-[1123px] bg-white px-5 sm:px-8 py-7 shadow-2xl overflow-hidden border border-gray-300">
        {/* Watermark */}
        <img
          src={Logo}
          alt="watermark"
          className="absolute top-[50%] left-1/2 w-72 sm:w-96 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none"
        />

        {/* Top Orange Cut */}
        <div
          className="absolute top-0 right-0 h-12 w-56 sm:w-72 bg-yellow-500"
          style={{
            clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        />

        {/* Header */}
        <div className="flex items-start gap-4 sm:gap-5 relative z-10">
          <img
            src={Logo}
            alt="Logo"
            className="w-14 h-14 sm:w-20 sm:h-20 object-contain"
          />

          <div>
            <h1 className="text-2xl sm:text-4xl font-semibold tracking-[5px] sm:tracking-[8px] text-black">
              ACADEWISE
            </h1>
            <p className="text-xs sm:text-base mt-1 leading-relaxed max-w-[520px] text-gray-700">
              Second floor S3, Shivam Highest, in front of Ramleela maidan,
              Tilak Nagar, Sikar, Rajasthan 332001
            </p>
          </div>
        </div>

        {/* Gradient Line */}
        <div className="h-4 bg-gradient-to-r from-blue-700 via-blue-600 to-yellow-500 mt-12 sm:mt-16 mb-8" />

        {/* Badge */}
        <div className="flex justify-center mb-7 relative z-10">
          <span className="px-5 sm:px-7 py-2 rounded-full bg-yellow-100 text-yellow-700 font-bold tracking-wider border border-yellow-400 shadow-sm text-sm sm:text-base">
            INTERNSHIP DETAILS
          </span>
        </div>

        {/* Roll Section */}
        <div className="grid grid-cols-3 items-center mb-6 px-1 sm:px-6 relative z-10">
          <h2 className="text-lg sm:text-3xl font-bold">Roll no.</h2>
          <h2 className="text-lg sm:text-3xl font-bold text-center">115706</h2>
          <h2 className="text-lg sm:text-3xl font-bold text-right">SEM-VI</h2>
        </div>

        {/* Table */}
        <div className="relative z-10 rounded-xl overflow-hidden border border-gray-300 shadow-sm">
          <table className="w-full border-collapse">
            <tbody>
              {tableData.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="w-[34%] border border-gray-300 px-3 py-3 sm:py-4 text-base sm:text-2xl font-medium text-gray-700">
                    {row[0]}
                  </td>
                  <td className="border border-gray-300 px-3 py-3 sm:py-4 text-base sm:text-2xl text-gray-900 break-words">
                    {row[1]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-14 sm:mt-20 relative z-10">
          <div className="flex mb-4">
            {[
              "bg-yellow-500",
              "bg-blue-700",
              "bg-yellow-500",
              "bg-blue-700",
            ].map((color, i) => (
              <div
                key={i}
                className={`h-8 sm:h-10 w-16 sm:w-28 ${color} -ml-3 first:ml-0`}
                style={{
                  clipPath:
                    "polygon(0 0, 75% 0, 100% 50%, 75% 100%, 0 100%, 18% 50%)",
                }}
              />
            ))}
          </div>

          <div className="h-4 bg-gradient-to-r from-blue-700 via-blue-600 to-yellow-500" />
        </div>

        {/* Footer Strip */}
        <div className="absolute left-0 right-0 bottom-0 bg-blue-900 text-white px-5 sm:px-8 py-4 flex flex-col sm:flex-row gap-3 sm:justify-between text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <Globe size={20} />
            <span>https://acadewise.com/</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={22} />
            <span>acadewise0@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipTemplate;
