import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

const Header = () => {
  return (
    <header className="container mx-auto py-6 px-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" width={180} height={40} className="h-10 w-auto" />
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="#about" className="text-[#FFF6F0] hover:text-[#FFF6F0]/80 transition-colors">
            About
          </Link>
          <Link to="#games" className="text-[#FFF6F0] hover:text-[#FFF6F0]/80 transition-colors">
            Games
          </Link>
          <Link to="#team" className="text-[#FFF6F0] hover:text-[#FFF6F0]/80 transition-colors">
            Team
          </Link>
          <Link to="#community" className="text-[#FFF6F0] hover:text-[#FFF6F0]/80 transition-colors">
            Community
          </Link>
        </nav>
        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none">
          Play Now
        </Button>
      </div>
    </header>
  );
};

export default Header;
