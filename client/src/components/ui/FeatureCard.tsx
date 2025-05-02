import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // 3D tilt + glow effect
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xPct = x / rect.width - 0.5;
      const yPct = y / rect.height - 0.5;

      gsap.to(card, {
        rotationY: xPct * 10,
        rotationX: yPct * -10,
        transformPerspective: 1000,
        duration: 0.5,
        ease: "power2.out",
      });

      const iconEl = card.querySelector(".feature-icon");
      if (iconEl) {
        gsap.to(iconEl, {
          filter: "drop-shadow(0 0 8px rgba(149, 1, 36, 0.8))",
          scale: 1.1,
          duration: 0.3,
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(card, { rotationY: 0, rotationX: 0, duration: 0.5, ease: "power2.out" });
      const iconEl = card.querySelector(".feature-icon");
      if (iconEl) {
        gsap.to(iconEl, {
          filter: "drop-shadow(0 0 0 rgba(0,0,0,0))",
          scale: 1,
          duration: 0.3,
        });
      }
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="p-6 rounded-2xl border border-[#222222] hover:border-[#950124]/50 transition-all relative group overflow-hidden"
      style={{ 
        background: "linear-gradient(to bottom, #250812 0%, #1b0111 50%, #0d0109 100%)",
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
      }}
    >
      <div className="feature-icon mb-4 transition-all duration-300">
        <div className="text-[#950124] w-12 h-12">
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-2 font-kallisto text-white">{title}</h3>
      <p className="text-gray-400 font-montserrat">{description}</p>
    </div>
  );
};

export default FeatureCard;
