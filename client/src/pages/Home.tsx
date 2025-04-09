import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import FeaturedGame from "../components/sections/Announcement";
import About from "../components/sections/About";
import Games from "../components/sections/Games";
import Team from "../components/sections/Team";
import Community from "../components/sections/Community";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Fondo gradiente general detrás de toda la landing */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-dark/40 to-black" />

      {/* Contenido de la landing */}
      <div className="relative z-10 text-foreground">
        <Header />
        <Hero />
        <FeaturedGame />
        <About />
        <Games />
        <Team />
        <Community />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
