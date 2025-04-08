import Image from "next/image";
import Link from "next/link";
import { Twitter, Github, Instagram } from "lucide-react";
import { TeamMember } from "../../types/types";

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-2xl mb-4">
        <div
          className={`absolute -inset-0.5 bg-gradient-to-r from-${member.gradientFrom} to-${member.gradientTo} rounded-2xl blur opacity-50 group-hover:opacity-100 transition-opacity`}
        ></div>
        <div className="relative bg-[#1C1C1C] rounded-2xl overflow-hidden p-1">
          <Image
            src={member.image}
            alt={member.name}
            width={300}
            height={300}
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
      <p className="text-[#FFF6F0]/70 mb-2">{member.role}</p>
      <div className="flex gap-2">
        {member.social.twitter && (
          <Link href={member.social.twitter} className="text-[#FFF6F0]/50 hover:text-[#FFF6F0] transition-colors">
            <Twitter className="h-5 w-5" />
          </Link>
        )}
        {member.social.github && (
          <Link href={member.social.github} className="text-[#FFF6F0]/50 hover:text-[#FFF6F0] transition-colors">
            <Github className="h-5 w-5" />
          </Link>
        )}
        {member.social.instagram && (
          <Link href={member.social.instagram} className="text-[#FFF6F0]/50 hover:text-[#FFF6F0] transition-colors">
            <Instagram className="h-5 w-5" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;
