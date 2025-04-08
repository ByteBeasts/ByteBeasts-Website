import { Link } from "react-router-dom";
import { Twitter, Github, Instagram } from "lucide-react";
import { TeamMember } from "../../types/types";

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="group font-montserrat">
      <div className="relative overflow-hidden rounded-2xl mb-4">
        <div
          className={`absolute -inset-0.5 bg-gradient-to-r ${member.gradientFrom} ${member.gradientTo} rounded-2xl blur opacity-50 group-hover:opacity-100 transition-opacity`}
        ></div>
        <div className="relative bg-secondary rounded-2xl overflow-hidden p-1">
          <img
            src={member.image}
            alt={member.name}
            width={300}
            height={300}
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
      <h3 className="text-xl font-bold mb-1 font-kallisto text-foreground">{member.name}</h3>
      <p className="text-foreground/70 mb-2">{member.role}</p>
      <div className="flex gap-2">
        {member.social.twitter && (
          <Link to={member.social.twitter} className="text-foreground/50 hover:text-primary transition-colors">
            <Twitter className="h-5 w-5" />
          </Link>
        )}
        {member.social.github && (
          <Link to={member.social.github} className="text-foreground/50 hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
          </Link>
        )}
        {member.social.instagram && (
          <Link to={member.social.instagram} className="text-foreground/50 hover:text-primary transition-colors">
            <Instagram className="h-5 w-5" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;
