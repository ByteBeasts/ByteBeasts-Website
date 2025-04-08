import { TeamMember } from "../../types/types";
import TeamMemberCard from "../ui/TeamMemberCard";

const teamMembers: TeamMember[] = [
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    image: "/team1.png",
    social: {
      twitter: "#",
      github: "#",
    },
    gradientFrom: "purple-600",
    gradientTo: "pink-600",
  },
  {
    id: "marcus-johnson",
    name: "Marcus Johnson",
    role: "CTO & Co-Founder",
    image: "/team2.png",
    social: {
      twitter: "#",
      github: "#",
    },
    gradientFrom: "blue-600",
    gradientTo: "cyan-600",
  },
  {
    id: "elena-rodriguez",
    name: "Elena Rodriguez",
    role: "Art Director",
    image: "/team3.png",
    social: {
      twitter: "#",
      instagram: "#",
    },
    gradientFrom: "pink-600",
    gradientTo: "orange-600",
  },
  {
    id: "jamal-williams",
    name: "Jamal Williams",
    role: "Lead Game Designer",
    image: "/team4.png",
    social: {
      twitter: "#",
      github: "#",
    },
    gradientFrom: "purple-600",
    gradientTo: "blue-600",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-secondary relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-kallisto text-foreground">
            Meet Our Team
          </h2>
          <p className="text-lg text-foreground/80 font-montserrat">
            The talented individuals behind ByteBeasts, bringing together expertise in gaming, blockchain, and art.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>

  );
};

export default Team;
