import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const highlights = [
  {
    id: "keynotes",
    title: "Keynotes & Dialogues",
    contentTitle: "Keynotes & Dialogues",
    subtitle: "Strategic vision from India's tech architects",
    description:
      "Decode national missions, AI timelines, and sovereignty roadmaps—straight from policy shapers and global innovation leaders.",
    image: "/photos/programhelight-1.png",
  },
  {
    id: "field-visits",
    title: "Field Visits",
    contentTitle: "Field Visits",
    subtitle: "Enter India's innovation nerve centers",
    description:
      "Step inside India's premier R&D facilities—where national innovation is engineered.",
    image: "/photos/programhelight-2.png",
  },
  {
    id: "panels",
    title: "Panels & Fireside Chats",
    contentTitle: "Panels & Fireside Chats",
    subtitle: "Real-time insights from the frontlines of innovation",
    description:
      "Engage CTOs/CDOs of Fortune India firms, AI CEOs, DeepTech founders, and VCs on business models, IP strategy, and scaling deep-tech ventures.",
    image: "/photos/programhelight-3.png",
  },
  {
    id: "masterclasses",
    title: "Masterclasses & Workshops",
    contentTitle: "Masterclasses & Workshops",
    subtitle: "Ideate. Build. Present. Win.",
    description:
      "Experience hands-on sessions on AI applications, advanced chip design, and emerging deeptech innovations — blending technical learning with real-world problem-solving.",
    image: "/photos/programhelight-4.png",
  },
];

const ProgramHighlights = () => {
  const [activeTab, setActiveTab] = useState("keynotes");

  return (
    <div className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
        {/* Left Side: Navigation Menu */}
        <div className="w-full lg:w-[30%] flex flex-col shrink-0">
          <h2 className="text-[#D11333] text-3xl md:text-[32px] font-bold mb-8 font-['Montserrat']">
            Program Highlights
          </h2>

          <div className="flex flex-col gap-3">
            {highlights.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`text-left px-6 py-5 rounded-lg text-[15px] font-medium transition-all duration-200 relative overflow-hidden group border ${
                  activeTab === item.id
                    ? "bg-[#f0ebe5] border-transparent shadow-sm text-[#1E1E1E]"
                    : "bg-white border border-[#EAEaea] text-[#555555] hover:bg-[#F0EBE5]"
                }`}
              >
                {activeTab === item.id && (
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#D11333] rounded-l-lg" />
                )}
                <span className={activeTab === item.id ? "font-bold" : ""}>
                  {item.title}
                </span>
              </button>
            ))}
            {/* Red Underline for the last item if active? No, screenshot shows red bar on left. */}
          </div>
        </div>

        {/* Right Side: Content Area */}
        <div className="w-full lg:w-[70%]">
          <AnimatePresence mode="wait">
            {highlights.map(
              (item) =>
                item.id === activeTab && (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#f0ebe5] rounded-[24px] p-6 lg:p-8 flex flex-col md:flex-row gap-8 lg:gap-12 shadow-sm min-h-[500px]"
                  >
                    {/* Image Section */}
                    <div className="w-full md:w-[42%] shrink-0">
                      <div className="rounded-[20px] overflow-hidden h-full min-h-[300px] md:min-h-full relative bg-gray-200">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm p-4 text-center">
                          Image for {item.title}
                        </div>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                          onError={(e) => {
                            e.target.style.opacity = "0";
                          }}
                          onLoad={(e) => {
                            e.target.style.opacity = "1";
                          }}
                        />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full md:w-[58%] flex flex-col h-full py-2">
                      <h3 className="text-[#d0072c] text-3xl md:text-[32px] font-bold mb-6 font-['Montserrat']">
                        {item.contentTitle}
                      </h3>

                      <div className="w-full h-px bg-gray-200 mb-6"></div>

                      <h4 className="text-[#3A3A3A] text-xl font-bold mb-6 leading-tight font-['Montserrat']">
                        {item.subtitle}
                      </h4>

                      <div className="w-full h-px bg-gray-200 mb-6"></div>

                      <p className="text-[#2a2a2a] text-lg mb-6 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="mt-auto">
                        <button className="w-full bg-[#d0072c] text-white py-4 rounded-xl text-lg font-bold hover:bg-[#a80623] transition-colors shadow-sm">
                          Download Brochure
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ),
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ProgramHighlights;
