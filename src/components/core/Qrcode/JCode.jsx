import React from "react";
import { Globe, Mail } from "lucide-react";
import Logo from "../../../assets/acadewise logo.jpg";

const InternshipTemplate = () => {
  const tableData = [
    ["Name", "Janavi Kanwar"],
    ["Father’s Name", "Shankar Singh Shekhawat"],
    ["Course", "Bachelor of Computer Applications (BCA)"],
    ["Institute", "Acadewise , Sikar"],
    ["Domian", "Full Stack Developer Intern"],
    ["Duration", "1 Month"],
    ["Ref.No", "ACA/intern/01/26/04"],
    ["College Name", "Sh. Bahawani Niketan College for Boys"],
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10">
      <div className="w-[794px] bg-white px-6 py-6 shadow-lg border border-gray-300">
        {/* Header */}
        <div className="relative flex items-start justify-between">
          <div className="flex gap-4 items-start">
            <img
              src={Logo}
              alt="Acadewise Logo"
              className="w-20 h-20 object-contain"
            />

            <div>
              <h1 className="text-3xl font-semibold tracking-[6px] text-gray-800">
                ACADEWISE
              </h1>
              <p className="text-[15px] tracking-wider text-gray-600 mt-1 max-w-[500px]">
                Second floor S3, Shivam Highest, in front of Ramleela maidan,
                Tilak Nagar, Sikar, Rajasthan 332001
              </p>
            </div>
          </div>

          <div className="absolute right-0 top-0 w-56 h-10 bg-orange-500 clip-custom" />
        </div>

        {/* Blue Line */}
        <div className="h-4 bg-indigo-900 mt-10 mb-6" />

        {/* Roll Section */}
        <div className="flex justify-between items-center px-6 mb-5">
          <h2 className="text-3xl font-bold">Roll no.</h2>
          <h2 className="text-3xl font-bold">115724</h2>
          <h2 className="text-3xl font-bold">SEM-VI</h2>
        </div>

        {/* Table */}
        <table className="w-full border-collapse border-2 border-gray-700">
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td className="w-[28%] border-2 border-gray-600 px-3 py-3 text-2xl text-gray-700">
                  {row[0]}
                </td>
                <td className="border-2 border-gray-600 px-3 py-3 text-2xl text-gray-800">
                  {row[1]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Design Arrows */}
        <div className="flex mt-10 mb-3">
          <div className="w-24 h-10 bg-orange-500 arrow-shape" />
          <div className="w-20 h-10 bg-gray-600 arrow-shape -ml-2" />
          <div className="w-24 h-10 bg-orange-500 arrow-shape -ml-2" />
          <div className="w-20 h-10 bg-gray-600 arrow-shape -ml-2" />
        </div>

        <div className="h-4 bg-indigo-900 mb-8" />

        {/* Footer */}
        <div className="flex justify-between items-center text-gray-800 text-[17px]">
          <div className="flex items-center gap-2">
            <Globe size={22} />
            <span>https://acadewise.com/</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={28} />
            <span>acadewise0@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipTemplate;
