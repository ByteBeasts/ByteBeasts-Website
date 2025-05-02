import { useInView } from "react-intersection-observer"
import { motion, useAnimationControls } from "framer-motion"
import { useEffect } from "react"
import SocialLink from "../ui/SocialLink"
import NewsletterForm from "../ui/NewsletterForm"
import { SiX, SiDiscord, SiGithub, SiLinkedin } from "react-icons/si"

const Community = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Animation control for the box border
  const borderControls = useAnimationControls()

  // Trigger animation when the component is in view
  useEffect(() => {
    if (inView) {
      borderControls.start({
        opacity: [0.4, 0.8, 0.4],
        scale: [0.98, 1.02, 0.98],
        filter: [
          "blur(8px) brightness(0.8)",
          "blur(12px) brightness(1.2)",
          "blur(8px) brightness(0.8)"
        ],
        transition: {
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }
      })
    }
  }, [inView, borderControls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="community" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col md:flex-row items-center gap-12 md:gap-16"
        >
          <motion.div variants={itemVariants} className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-kallisto text-foreground">Join Our Community</h2>
            <p className="text-foreground/80 text-lg mb-8 font-montserrat">
              Connect with fellow Beast tamers, join events, access exclusive content, and help shape the future of
              ByteBeasts. From AMAs to seasonal challenges, there's always something happening.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SocialLink
                icon={<SiDiscord className="h-6 w-6 text-[#5865F2]" />}
                name="Discord"
                href="https://discord.gg/3FHprvHHeA"
              />
              <SocialLink
                icon={<SiX className="h-6 w-6 text-foreground" />}
                name="Twitter"
                href="https://x.com/0xByteBeasts"
              />
              <SocialLink
                icon={<SiLinkedin className="h-6 w-6 text-[#1DA1F2]" />}
                name="Linkedin"
                href="https://www.linkedin.com/company/bytebeasts"
              />
              <SocialLink
                icon={<SiGithub className="h-6 w-6 text-foreground" />}
                name="GitHub"
                href="https://github.com/ByteBuildersLabs"
              />
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="w-full md:w-1/2">
            <div className="relative">
              {/* Animated border */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-brand-light to-brand-dark rounded-2xl blur"
                initial={{ opacity: 0.4 }}
                animate={borderControls}
              />

              {/* Particle effect (optional) */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    initial={{
                      x: Math.random() * 100 - 50 + "%",
                      y: Math.random() * 100 - 50 + "%",
                      opacity: 0
                    }}
                    animate={{
                      x: [
                        Math.random() * 100 - 50 + "%",
                        Math.random() * 100 - 50 + "%",
                        Math.random() * 100 - 50 + "%"
                      ],
                      y: [
                        Math.random() * 100 - 50 + "%",
                        Math.random() * 100 - 50 + "%",
                        Math.random() * 100 - 50 + "%"
                      ],
                      opacity: [0, 0.8, 0],
                      scale: [0.8, 1.5, 0.8]
                    }}
                    transition={{
                      duration: Math.random() * 5 + 5,
                      repeat: Infinity,
                      delay: Math.random() * 5
                    }}
                  />
                ))}
              </div>

              {/* Box content */}
              <div className="relative bg-secondary p-8 rounded-2xl border border-border backdrop-blur-sm z-10">
                <motion.h3
                  className="text-2xl font-bold mb-6 font-kallisto text-foreground neon-glow"
                  animate={{
                    textShadow: [
                      "0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(149, 1, 36, 0.3)",
                      "0 0 7px rgba(255, 255, 255, 0.7), 0 0 15px rgba(149, 1, 36, 0.5)",
                      "0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(149, 1, 36, 0.3)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  Stay Updated
                </motion.h3>
                <p className="text-foreground/80 mb-6 font-montserrat">
                  Get the latest updates, alpha invites, and special offers by subscribing to our newsletter.
                </p>
                <NewsletterForm />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Community
