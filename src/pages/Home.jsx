import About from "./About";
import MentorsCarousel from "../components/MentorsCarousel";
import LifeAtRishihood from "../components/LifeAtRishihood";
import ProgramHighlights from "../components/ProgramHighlights";
import FaqAccordion from "../components/FaqAccordion";
import BlogSection from "../components/BlogSection";

const Home = () => {
  return (
    <div className="w-full bg-white">
      <About />
      <ProgramHighlights />
      <LifeAtRishihood />
      <MentorsCarousel />
      <BlogSection />
      <FaqAccordion />
    </div>
  );
};

export default Home;
