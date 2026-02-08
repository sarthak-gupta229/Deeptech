const About = () => {
  return (
    <div className="pt-24 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About Us
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We are building the future of deep technology, solving the world's
          hardest problems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            At DeepTech, we believe that the most significant challenges facing
            humanity can be solved through advanced technology. From artificial
            intelligence to quantum computing, we are at the forefront of
            innovation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our team consists of world-class engineers, researchers, and
            visionaries dedicated to pushing the boundaries of what is possible.
            We don't just predict the future; we create it.
          </p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-200 h-full flex items-center justify-center min-h-[300px]">
          <span className="text-blue-400 text-lg font-mono">
            Placeholder for Team Image or Illustration
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Innovation", desc: "Pushing boundaries everyday." },
          { title: "Integrity", desc: "Doing the right thing, always." },
          { title: "Impact", desc: "Creating measurable change." },
        ].map((value, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500/50 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {value.title}
            </h3>
            <p className="text-gray-600">{value.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
