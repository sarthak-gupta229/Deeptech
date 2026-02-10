import React from "react";

const BlogCard = ({ image, tag, title, description, date, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group h-full"
    >
      <div className="flex flex-col h-full">
        {/* Image Container - Fully Rounded */}
        <div className="relative h-40 mb-3 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content Container */}
        <div className="flex flex-col flex-grow">
          {/* Tag */}
          <div className="mb-3">
            <span className="bg-[#FFEDD2] text-[#C65830] text-xs font-bold px-3 py-1.5 rounded inline-block">
              {tag}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-[18px] font-bold text-[#1E1E1E] mb-2 leading-snug font-['Montserrat'] group-hover:text-[#D00636] transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-[14px] text-[#3A3A3A] mb-3 leading-relaxed line-clamp-3">
            {description}
          </p>

          {/* Date */}
          <div className="mt-auto">
            <p className="text-[13px] text-[#5D5D5D] font-medium">{date}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

const BlogSection = () => {
  const blogs = [
    {
      image: "/blogs/blog1.avif",
      tag: "Artificial Inteligence",
      title: "India's Deep Tech Ambition: A Call for Innovation",
      description:
        "Commerce Minister Piyush Goyal set the stage ablaze at Startup Mahakumbh 2025 (April,3rd) challenging India's startup ecosystem to pivot from consumer-driven ventures like artisanal ice creams to transformative technologies like AI and semiconductor chips.",
      date: "11 September 2025",
      link: "https://rishihood.edu.in/blogs/featured-blogs/india’s-deep-tech-ambition-a-call-for-innovation",
    },
    {
      image: "/blogs/blog2.avif",
      tag: "Entrepreneurship",
      title: "The Next Silicon Valley? It Might Be a Remote Village in India",
      description:
        "From villages to governance to AI—India's future lies in reimagining talent where the world least expects it.",
      date: "05 June 2025",
      link: "https://rishihood.edu.in/blogs/featured-blogs/sharing-numbers",
    },
    {
      image: "/blogs/blog3.avif",
      tag: "National Transformation",
      title:
        "Delimitation Woes: Can India balance Democracy and Representation in the Next Delimitation Exercise?",
      description:
        "Since the establishment of the Delimitation Commission in 1952, the exercise of redrawing electoral boundaries continues to remain a matter of debate in the Indian Constitution. In a country as diverse and populous as India, delimitation is not merely limited to redrawing the boundaries",
      date: "11 July 2025",
      link: "https://rishihood.edu.in/blogs/featured-blogs/delimitation-woes-can-india-balance-democracy-and-representation-in-the-next-delimitation-exercise",
    },
  ];

  return (
    <section className="py-10 bg-[#FBF7EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-semibold text-[#D00636] mb-3 font-['Montserrat']">
            Explore Our Blogs
          </h2>
          <p className="text-[#555555] text-base max-w-3xl mx-auto leading-relaxed">
            Explore insights, stories, and articles on design, innovation, and
            creative thinking by faculty, mentors, and students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 mb-6">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://rishihood.edu.in/blogs/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#D00636] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#b0052d] transition-colors"
          >
            View more blogs
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
