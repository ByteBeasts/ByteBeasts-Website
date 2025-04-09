import { Link } from "react-router-dom";
import { SiX, SiGithub, SiLinkedin} from "react-icons/si";
import { TeamMember } from "../../types/types";

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="group font-montserrat">
      <div className="relative overflow-hidden rounded-2xl mb-4">
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
      {member.social.linkedin && (
          <Link to={member.social.linkedin} className="text-foreground/50 hover:text-primary transition-colors">
            <SiLinkedin className="h-5 w-5" />
          </Link>
        )}
        {member.social.twitter && (
          <Link to={member.social.twitter} className="text-foreground/50 hover:text-primary transition-colors">
            <SiX className="h-5 w-5" />
          </Link>
        )}
        {member.social.github && (
          <Link to={member.social.github} className="text-foreground/50 hover:text-primary transition-colors">
            <SiGithub className="h-5 w-5" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;
