import Header from "../components/layout/header";
import Footer from "../components/layout/Footer";
import Hero from "../components/layout/Footer";
import FeaturedGame from "../components/sections/Announcement";
import About from "../components/sections/About";
import Games from "../components/sections/Games";
import Team from "../components/sections/Team";
import Community from "../components/sections/Community";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#1C1C1C] text-[#FFF6F0]">
      <Header />
      <Hero />
      <FeaturedGame />
      <About />
      <Games />
      <Team />
      <Community />
      <Footer />
    </div>
  );
};

export default Home;
