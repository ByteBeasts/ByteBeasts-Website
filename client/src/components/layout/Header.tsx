import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

const Header = () => {
  return (
    <header className="container mx-auto py-6 px-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" width={180} height={40} className="h-10 w-auto" />
        </div>
        <nav className="hidden md:flex items-center gap-8 font-montserrat">
          <Link to="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link to="#games" className="text-foreground hover:text-primary transition-colors">
            Games
          </Link>
          <Link to="#team" className="text-foreground hover:text-primary transition-colors">
            Team
          </Link>
          <Link to="#community" className="text-foreground hover:text-primary transition-colors">
            Community
          </Link>
        </nav>
        <Button className="bg-gradient-to-r from-brand-light to-brand-dark hover:opacity-90 text-white font-kallisto">
          Play Now
        </Button>
      </div>
    </header>
  );
};

export default Header;
