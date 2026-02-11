import React from "react";

const speakers = [
  {
    name: "Prof. N. Vyas",
    designation: "Professor, Indian Institute of Technology Kanpur",
    image: "/mentors/prof-N.vyas.jpg",
  },
  {
    name: "Mr. Rajesh Ranjan",
    designation: "Designated Partner, O2 Angels Network",
    image: "/mentors/mr-rajesh-ranjan.jpeg",
  },
  {
    name: "Aparna Gupta",
    designation: "Principal Expert & Advisor to the CEO, ANRF",
    image: "/mentors/aparna-gupta.webp",
  },
  {
    name: "Satish A.V.",
    designation: "Chief Operating Officer, Orangewood Labs",
    image: "/mentors/Satish-AV.jpeg",
  },
  {
    name: "Sachin Gupta",
    designation: "Founder and CEO, Probo",
    image: "/mentors/sachin-gupta .jpeg",
  },
  {
    name: "Cmde Bharat Nagpal",
    designation: "CEO, Merlinhawk Composites and Engineering Pvt. Ltd.",
    image: "/mentors/Cmde-Bharat-Bhushan-Nagpal.png",
  },
  {
    name: "Prof. K. Gopinath",
    designation: "Professor, Rishihood University",
    role: "Moderator",
    image: "/mentors/Prof.-K.-Gopinath.webp",
  },
  {
    name: "Rahul Seth",
    designation: "Founder, Industrial 47 & Investor, Pranos Fusion",
    image: "/mentors/rahul-seth.avif",
  },
  {
    name: "Dr. Manoj Kumar",
    designation: "Director – Innovation, STMicroelectronics",
    image: "/mentors/dr-manoj-kumar.jpg",
  },
  {
    name: "Alok Pandey",
    designation:
      "Chief Executive Officer, Atal Incubation Centre (AIC) – IIT Delhi",
    image: "/mentors/Alok-Pandey.png",
  },
  {
    name: "Nishit Gupta",
    designation: "Director (Technology), ISM and Scientist-E, MeitY",
    image: "/mentors/nishit-gupta.png",
  },
  {
    name: "Deekhit Bhattacharya",
    designation:
      "Corporate Lawyer, Author & Analyst on Geopolitics and Technology",
    image: "/mentors/deekhit-bhattacharya.png",
  },
  {
    name: "Prof. Gautam R Desiraju",
    designation: "Professor, Rishihood University | Author and Thought Leader",
    role: "Moderator",
    image: "/mentors/Gautam_R_Desiraju-01.jpg",
  },
];

const MentorsCarousel = () => {
  // Duplicate the array to create a seamless loop
  const extendedSpeakers = [...speakers, ...speakers];

  return (
    <div className="w-full bg-[#ffffff] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 text-center bg-[#ffffff] relative">
        {/* Decorative Leaf Icons */}
        {/* Decorative Leaf Icons - Left */}
        <div className="absolute top-0 left-[20%] hidden md:flex gap-2 -translate-y-1/2">
          {/* Leaf Images */}
          <img
            src="/logo/leaf.png"
            alt="Decorative Leaf"
            className="w-32 h-32 object-contain transform -rotate-12 scale-x-[-1]"
          />
        </div>

        {/* Decorative Leaf Icons - Right */}
        <div className="absolute top-0 right-[20%] hidden md:flex gap-2 -translate-y-1/2">
          {/* Leaf Images */}
          <img
            src="/logo/leaf.png"
            alt="Decorative Leaf"
            className="w-32 h-32 object-contain transform rotate-12"
          />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-[#D11333] mb-4">
          Mentors at Bootcamp
        </h2>
        {/* Decorative elements - leaf shapes from screenshot? (Simplified for now) */}
      </div>

      <div className="relative w-full max-w-6xl mx-auto flex overflow-hidden group mask-fade px-12">
        {" "}
        {/* CSS-based Marquee Implementation */}
        <div className="flex gap-8 animate-marquee whitespace-nowrap hover:[animation-play-state:paused] py-12">
          {extendedSpeakers.map((speaker, index) => {
            // Shape Classes - Consistent for all cards as per new request
            // Top-left and Bottom-right corners are large, others are small
            const shapeClass =
              "rounded-tl-[60px] rounded-br-[60px] rounded-tr-2xl rounded-bl-2xl";

            return (
              <div
                key={`${speaker.name}-${index}`}
                className={`relative w-[240px] h-[300px] bg-white shadow-lg overflow-hidden shrink-0 transform transition-transform duration-300 hover:scale-105 ${shapeClass}`}
              >
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    // Fallback if image not found
                    e.target.src = "https://placehold.co/280x350?text=No+Image";
                  }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-lg font-bold leading-tight mb-1">
                    {speaker.name}
                  </h3>
                  <p className="text-xs text-gray-200 font-medium whitespace-normal leading-snug">
                    {speaker.designation}
                  </p>
                  {speaker.role && (
                    <p className="text-[10px] text-[#D11333] font-bold mt-2 uppercase tracking-wider bg-white/20 w-max px-2 py-0.5 rounded">
                      {speaker.role}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {/* Duplicate simply for length coverage - CSS marquee usually needs 2 copies if width is screen width */}
        {/* We did extendedSpeakers = [...speakers, ...speakers] so we have 2x. */}
        {/* For true seamless CSS marquee:
            - Content width must be > screen width.
            - Animation: translateX(0) -> translateX(-50%).
            Make sure to add the keyframes globally or in style tag.
         */}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
          width: max-content;
        }
        .mask-fade {
           mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
           -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </div>
  );
};

export default MentorsCarousel;
