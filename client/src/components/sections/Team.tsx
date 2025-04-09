import { TeamMember } from "../../types/types";
import TeamMemberCard from "../ui/TeamMemberCard";

const teamMembers: TeamMember[] = [
  {
    id: "daniel-calderon",
    name: "Daniel Calderón",
    role: "CEO, Core Dev & Co-Founder",
    image: "/team/daniPFP.png",
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
    social: {
      twitter: "https://x.com/roloxworld",
      github: "https://github.com/RolandoDrRobot",
      linkedin: "https://www.linkedin.com/in/rolando-arguello-531942186/",
    },
  },
  {
    id: "daniel-villatoro",
    name: "Daniel Villatoro",
    role: "Core Dev",
    image: "/team/villatoroPFP.jpeg",
    social: {
      twitter: "https://x.com/DanielV47204896",
      github: "https://github.com/DanielVillatoro",
      linkedin: "https://www.linkedin.com/in/danielvillatoroc/",
    },
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
            The talented individuals behind ByteBeasts, bringing together expertise in gaming and blockchain industries.
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
