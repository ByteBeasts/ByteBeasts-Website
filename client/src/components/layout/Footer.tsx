import { SiX, SiDiscord, SiGithub, SiLinkedin } from "react-icons/si";

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
    links: [{ name: "Tamagotchi", href: "https://www.bytebeasts.games" }],
  },
  {
    title: "About Us",
    links: [
      { name: "Product Brief", href: "https://byte-beasts-docs.vercel.app/" },
      { name: "Whitepaper", href: "https://drive.google.com/file/d/1fhAqQlW74tjnotdDqXFI3f4l_-RGl0gy/view?usp=sharing" },
      // { name: "FAQ", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Partners", href: "#" },
      // { name: "Contact", href: "#" },
    ],
  },
];

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/bytebeasts/", icon: <SiLinkedin className="h-5 w-5" /> },
  { name: "Twitter", href: "https://x.com/0xByteBeasts", icon: <SiX className="h-5 w-5" /> },
  { name: "Github", href: "https://github.com/ByteBuildersLabs", icon: <SiGithub className="h-5 w-5" /> },
  { name: "Discord", href: "https://discord.gg/3FHprvHHeA", icon: <SiDiscord className="h-5 w-5" /> },
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
            <img src="/logos/lightIcon.png" alt="Logo" width={180} height={40} className="h-10 w-auto mb-6" />
            <p className="text-foreground/70 mb-6">
              ByteBeasts is an interconnected on-chain universe where players collect, nurture, and evolve digital creatures that 
              transcend generations.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/50 hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
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
                    {link.href.startsWith("#") ? (
                      <a href={link.href} className="text-foreground/70 hover:text-primary transition-colors">
                        {link.name}
                      </a>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/70 hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Credits */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 flex-wrap text-foreground/50 text-sm">
            <span>Powered by:</span>
            <a href="https://www.starknet.io" target="_blank" rel="noopener noreferrer">
              <img src="/logos/StarknetLogo.svg" alt="Starknet logo" className="h-6" />
            </a>
            <a href="https://cartridge.gg" target="_blank" rel="noopener noreferrer">
              <img src="/logos/CartridgeLogo.svg" alt="Cartridge logo" className="h-6" />
            </a>
            <a href="https://www.dojoengine.org" target="_blank" rel="noopener noreferrer">
              <img src="/logos/DojoLogo.svg" alt="Dojo logo" className="h-6" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/50 hover:text-primary transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center text-foreground/50 text-xs">
          &copy; {currentYear} ByteBeasts. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
