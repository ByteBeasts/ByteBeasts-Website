import { useState } from "react"
import { SiX, SiGithub, SiLinkedin } from "react-icons/si"
import { motion } from "framer-motion"
import type { TeamMember } from "../../types/types"

interface TeamMemberCardProps {
  member: TeamMember
  index: number
}

const TeamMemberCard = ({ member, index }: TeamMemberCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group font-montserrat relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="relative overflow-hidden rounded-2xl mb-4"
      >
        <motion.div
          className="absolute -inset-0.5 bg-gradient-to-r from-brand-light to-brand-dark rounded-2xl blur opacity-0 transition-opacity duration-300"
          animate={{ opacity: isHovered ? 0.7 : 0 }}
        />
        <div className="relative bg-secondary rounded-2xl overflow-hidden p-1">
          <img
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            width={300}
            height={300}
            className="w-full h-auto rounded-xl"
          />
        </div>
      </motion.div>

      <h3 className="text-xl font-bold mb-1 font-kallisto text-foreground">{member.name}</h3>
      <p className="text-foreground/70 mb-2">{member.role}</p>

      <div className="flex gap-2">
        {member.social.linkedin && (
          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            href={member.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/50 hover:text-primary transition-colors"
          >
            <SiLinkedin className="h-5 w-5" />
          </motion.a>
        )}
        {member.social.twitter && (
          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            href={member.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/50 hover:text-primary transition-colors"
          >
            <SiX className="h-5 w-5" />
          </motion.a>
        )}
        {member.social.github && (
          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            href={member.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/50 hover:text-primary transition-colors"
          >
            <SiGithub className="h-5 w-5" />
          </motion.a>
        )}
      </div>

      {/* Tooltip */}
      {isHovered && member.specialty && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-brand-primary text-white px-4 py-2 rounded-lg text-sm z-10 whitespace-nowrap"
        >
          {member.specialty}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-brand-primary"></div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default TeamMemberCard
