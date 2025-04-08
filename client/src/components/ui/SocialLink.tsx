import Link from "next/link";

interface SocialLinkProps {
  icon: React.ReactNode;
  name: string;
  href: string;
}

const SocialLink = ({ icon, name, href }: SocialLinkProps) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 p-4 bg-[#1C1C1C]/80 border border-[#FFF6F0]/10 rounded-xl hover:border-purple-500/50 transition-all"
    >
      {icon}
      <span>{name}</span>
    </Link>
  );
};

export default SocialLink;
