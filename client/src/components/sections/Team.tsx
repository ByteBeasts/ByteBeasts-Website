import { motion } from "framer-motion"
import type { TeamMember } from "../../types/types"
import TeamMemberCard from "../ui/TeamMemberCard"
import Section from "../ui/Section" 

const teamMembers: TeamMember[] = [
  {
    id: "daniel-calderon",
    name: "Daniel Calderón",
    role: "CEO, Core Dev & Co-Founder",
    image: "/team/daniPFP.png",
    specialty: "Backend Engineer",
    social: {
      twitter: "https://x.com/0xCadix",
      github: "https://github.com/danielcdz",
      linkedin: "https://www.linkedin.com/in/daniel-calderon-diaz-50928022b/",
    },
  },
  {
    id: "marco-araya",
    name: "Marco Araya",
    role: "CPO, Core Dev & Co-Founder",
    image: "/team/marcoPFP.png",
    specialty: "Full-Stack Engineer",
    social: {
      twitter: "https://x.com/coxmar_devCR",
      github: "https://github.com/coxmars",
      linkedin: "https://www.linkedin.com/in/marcoarayajimenez/",
    },
  },
  {
    id: "luis-jimenez",
    name: "Luis Jiménez",
    role: "CMO, Core Dev & Co-Founder",
    image: "/team/luisPFP.png",
    specialty: "Full-Stack Engineer",
    social: {
      twitter: "https://x.com/devJimenezz22",
      github: "https://github.com/jimenezz22",
      linkedin: "https://www.linkedin.com/in/luis-jimenez22/",
    },
  },
  {
    id: "rolo-arguello",
    name: "Rolando Arguello",
    role: "COO, Core Dev & Co-Founder",
    image: "/team/roloPFP.png",
    specialty: "Full-Stack Engineer",
    social: {
      twitter: "https://x.com/roloxworld",
      github: "https://github.com/RolandoDrRobot",
      linkedin: "https://www.linkedin.com/in/rolando-arguello-531942186/",
    },
  },
]

const Team = () => {
  // Enhanced motion variants for the team grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <Section
      id="team"
      title="Meet Our Team"
      subtitle="The talented individuals behind ByteBeasts, bringing together expertise in gaming and blockchain industries."
      className="py-40" 
    >
      {/* Team members grid with staggered animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
      >
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={member.id} member={member} index={index} />
        ))}
      </motion.div>
    </Section>
  )
}

export default Team
