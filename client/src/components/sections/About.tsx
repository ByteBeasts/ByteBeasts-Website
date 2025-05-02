import React, { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Link as LinkIcon, Cpu, Users } from "lucide-react"
import { gsap } from "gsap"
import Section from "../ui/Section" // Import the Section component

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
}

const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    // 3D tilt + glow
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const xPct = x / rect.width - 0.5
      const yPct = y / rect.height - 0.5

      gsap.to(card, {
        rotationY: xPct * 10,
        rotationX: yPct * -10,
        transformPerspective: 1000,
        duration: 0.5,
        ease: "power2.out",
      })

      const iconEl = card.querySelector(".feature-icon")
      if (iconEl) {
        gsap.to(iconEl, {
          filter: "drop-shadow(0 0 8px rgba(149, 1, 36, 0.8))",
          scale: 1.1,
          duration: 0.3,
        })
      }
    }

    const handleMouseLeave = () => {
      gsap.to(card, { rotationY: 0, rotationX: 0, duration: 0.5, ease: "power2.out" })
      const iconEl = card.querySelector(".feature-icon")
      if (iconEl) {
        gsap.to(iconEl, {
          filter: "drop-shadow(0 0 0 rgba(0,0,0,0))",
          scale: 1,
          duration: 0.3,
        })
      }
    }

    card.addEventListener("mousemove", handleMouseMove)
    card.addEventListener("mouseleave", handleMouseLeave)
    return () => {
      card.removeEventListener("mousemove", handleMouseMove)
      card.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <motion.div
      ref={cardRef}
      className="bg-gradient-to-br from-secondary/80 to-secondary p-6 rounded-2xl border border-border shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="feature-icon text-primary mb-4 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 font-kallisto text-foreground">{title}</h3>
      <p className="text-foreground/70 font-montserrat">{description}</p>
    </motion.div>
  )
}

export default function About() {
  return (
    <Section 
      id="about"
      title="About ByteBeasts"
      subtitle="Reimagining gaming through blockchain technology and nostalgic experiences."
      className="relative"
    >
      {/* Custom overlay radial gradient - you can still add custom elements inside the Section */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(149,1,36,0.05) 0%, rgba(0,0,0,0) 70%)",
        }}
      />

      {/* Feature cards grid - main content goes directly inside the Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<LinkIcon size={48} />}
          title="Interconnected Universe"
          description="All our games exist in the same universe, allowing for cross-game interactions and shared storylines."
          delay={0.1}
        />
        <FeatureCard
          icon={<Cpu size={48} />}
          title="True Ownership"
          description="Own your in-game assets as NFTs with real-world value and transferability between games."
          delay={0.2}
        />
        <FeatureCard
          icon={<Users size={48} />}
          title="Community Driven"
          description="Our community shapes the future of our games through governance and collaborative development."
          delay={0.3}
        />
      </div>
    </Section>
  )
}
