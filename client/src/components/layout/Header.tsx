import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="container mx-auto py-6 px-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="ByteBeasts Logo" width={180} height={40} className="h-10 w-auto" />
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-[#FFF6F0] hover:text-[#FFF6F0]/80 transition-colors">
            About
          </Link>
          <Link href="#games" className="text-[#FFF6F0] hover:text-[#FFF6F0]/80 transition-colors">
            Games
          </Link>
          <Link href="#team" className="text-[#FFF6F0] hover:text-[#FFF6F0]/80 transition-colors">
            Team
          </Link>
          <Link href="#community" className="text-[#FFF6F0] hover:text-[#FFF6F0]/80 transition-colors">
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
