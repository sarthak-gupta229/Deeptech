import FaqAccordion from "../components/FaqAccordion";
import BlogSection from "../components/BlogSection";

const Home = () => {
  return (
    <div className="w-full bg-white">
      <BlogSection />
      <FaqAccordion />
    </div>
  );
};

export default Home;
