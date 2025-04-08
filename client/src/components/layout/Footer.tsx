import { Link } from "react-router-dom";
import { Twitter, Github, Instagram, DiscIcon as Discord } from "lucide-react";

interface FooterLinkGroup {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
}

const linkGroups: FooterLinkGroup[] = [
  {
    title: "Games",
    links: [
      { name: "CryptoTamers", href: "#" },
      { name: "Beast Arena", href: "#" },
      { name: "Beast Explorers", href: "#" },
      { name: "ODBOOST (Coming Soon)", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Whitepaper", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Blog", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Partners", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
];

const socialLinks = [
  { name: "Twitter", href: "#", icon: <Twitter className="h-5 w-5" /> },
  { name: "Discord", href: "#", icon: <Discord className="h-5 w-5" /> },
  { name: "Instagram", href: "#", icon: <Instagram className="h-5 w-5" /> },
  { name: "Github", href: "#", icon: <Github className="h-5 w-5" /> },
];

const legalLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Cookie Policy", href: "#" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border font-montserrat">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <img src="/logo.png" alt="Logo" width={180} height={40} className="h-10 w-auto mb-6" />
            <p className="text-foreground/70 mb-6">
              ByteBeasts is an interconnected on-chain universe where players collect, train, and battle unique
              beasts.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.href} 
                  className="text-foreground/50 hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Link Groups */}
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-lg font-bold mb-6 text-foreground">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-foreground/70 hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright and Legal Links */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/50 text-sm mb-4 md:mb-0">
            &copy; {currentYear} ByteBeasts. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.href} 
                className="text-foreground/50 hover:text-primary transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
