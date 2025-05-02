import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
// import FeaturedGame from "../components/sections/Announcement";
import About from "../components/sections/About";
import Games from "../components/sections/Games";
import Team from "../components/sections/Team";
import Community from "../components/sections/Community";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.history.scrollRestoration = "manual"

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault()
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href")
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: "smooth",
          })
        }
      })
    })

    return () => {
      window.history.scrollRestoration = "auto"
    }
  }, [])

  return (
    <div className="min-h-screen bg-secondary text-foreground overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Games />
        <Team />
        <Community />
      </main>
      <Footer />
    </div>
  )
}

