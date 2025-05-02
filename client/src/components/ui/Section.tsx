import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  customTitle?: React.ReactNode; // New prop for custom title component
  subtitle?: string;
  noPadding?: boolean;
  centerContent?: boolean;
  darkBackground?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  children, 
  title, 
  customTitle,
  subtitle,
  noPadding = false,
  centerContent = false,
  darkBackground = false,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  
  const sectionRef = useRef<HTMLElement>(null);
  
  // Effect for spotlight when section is in view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
      
      // Add active class (applied from global CSS)
      if (sectionRef.current) {
        sectionRef.current.classList.add('active');
      }
    } else {
      controls.start('hidden');
      
      // Remove active class
      if (sectionRef.current) {
        sectionRef.current.classList.remove('active');
      }
    }
  }, [controls, inView]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut" 
      } 
    }
  };

  // Conditional styles
  const sectionClasses = `
    relative
    ${!noPadding ? 'py-20 md:py-24' : ''}
    ${darkBackground ? 'bg-gradient-to-b from-secondary/80 to-secondary' : ''}
    ${className}
  `;
  
  const contentClasses = `
    container mx-auto px-4
    ${centerContent ? 'flex flex-col items-center text-center' : ''}
  `;

  return (
    <section
      id={id}
      ref={sectionRef}
      className={sectionClasses}
    >
      {/* Soft spotlight overlay when section is active */}
      <div 
        className="absolute inset-0 opacity-0 transition-opacity duration-1000 pointer-events-none z-0 overflow-hidden"
        style={{ opacity: inView ? 0.1 : 0 }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent blur-2xl transform scale-150"></div>
      </div>
      
      <div className={contentClasses}>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Handle either custom title component or text title */}
          {(customTitle || title || subtitle) && (
            <motion.div 
              className="mb-14"
              variants={itemVariants}
            >
              {customTitle ? (
                // Use the custom title component if provided
                <h2 className="text-3xl md:text-5xl font-bold mb-6 font-kallisto">
                  {customTitle}
                </h2>
              ) : title ? (
                // Otherwise use the text title
                <h2 className="text-3xl md:text-5xl font-bold mb-6 font-kallisto">
                  <span className="neon-glow">{title}</span>
                </h2>
              ) : null}
              
              {subtitle && (
                <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
                  {subtitle}
                </p>
              )}
            </motion.div>
          )}
          
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;