import { Link } from "react-router-dom";

interface SocialLinkProps {
  icon: React.ReactNode;
  name: string;
  href: string;
}

const SocialLink = ({ icon, name, href }: SocialLinkProps) => {
  return (
    <Link
      to={href}
      className="flex items-center gap-3 p-4 bg-secondary/80 border border-border rounded-xl hover:border-brand-light transition-all text-foreground"
    >
      {icon}
      <span className="font-montserrat">{name}</span>
    </Link>
  );
};

export default SocialLink;
