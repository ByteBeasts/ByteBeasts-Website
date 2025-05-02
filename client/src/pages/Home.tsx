import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Games from "../components/sections/Games";
import Team from "../components/sections/Team";
import Community from "../components/sections/Community";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Smooth scroll setup
    window.history.scrollRestoration = "manual";

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Initialize scroll animations
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleClass: { targets: section, className: "active" },
        once: false,
      });
    });

    // Create particles on load
    const createParticles = () => {
      const container = document.querySelector("main");
      if (!container) return;

      // Clean up existing particles first
      document.querySelectorAll(".particle").forEach(el => el.remove());

      for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.width = `${Math.random() * 3 + 1}px`;
        particle.style.height = particle.style.width;
        particle.style.opacity = `${Math.random() * 0.5}`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Apply our brand color to some particles
        if (Math.random() > 0.7) {
          particle.style.backgroundColor = "rgba(149, 1, 36, 0.5)";
        }
        
        container.appendChild(particle);
        
        // Animate each particle
        gsap.to(particle, {
          x: `${Math.random() * 200 - 100}px`,
          y: `${Math.random() * 200 - 100}px`,
          duration: Math.random() * 20 + 10,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: Math.random() * 5,
        });
      }
    };

    // Wait for page load
    window.addEventListener("load", () => {
      setIsLoaded(true);
      createParticles();
    });

    // Run on mount if page is already loaded
    if (document.readyState === "complete") {
      setIsLoaded(true);
      createParticles();
    }

    // Add scroll spotlight effect
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollTop / maxScroll;
      
      // Create a spotlight effect that follows scroll
      document.body.style.setProperty(
        "--spotlight-y", 
        `${scrollPercentage * 100}%`
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.history.scrollRestoration = "auto";
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", () => setIsLoaded(true));
      
      // Kill all ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      // Kill all GSAP animations
      gsap.killTweensOf(".particle");
    };
  }, []);

  return (
    <div className={`min-h-screen text-foreground overflow-hidden transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="fixed inset-0 bg-gradient-to-b from-[#15151c] to-[#0c0c12] -z-10"></div>
      
      {/* Animated gradient background */}
      <div className="fixed inset-0 opacity-30 -z-5">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-60 blur-3xl transform translate-y-[-20%]"></div>
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-60 blur-3xl transform translate-y-[40%] translate-x-[25%]"></div>
      </div>
      
      <Header />
      <main className="relative z-0">
        <Hero />
        <About />
        <Games />
        <Team />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
