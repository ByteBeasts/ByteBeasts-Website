import SocialLink from "../ui/SocialLink";
import NewsletterForm from "../ui/NewsletterForm";
import { Github, Twitter, Instagram, DiscIcon as Discord } from "lucide-react";

const Community = () => {
  return (
    <section id="community" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Join Our Community</h2>
            <p className="text-[#FFF6F0]/80 text-lg mb-8">
              Connect with fellow beast tamers, participate in events, and help shape the future of the ByteBeasts
              universe.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SocialLink icon={<Discord className="h-6 w-6 text-[#5865F2]" />} name="Discord" href="#" />
              <SocialLink icon={<Twitter className="h-6 w-6 text-[#1DA1F2]" />} name="Twitter" href="#" />
              <SocialLink icon={<Instagram className="h-6 w-6 text-[#E1306C]" />} name="Instagram" href="#" />
              <SocialLink icon={<Github className="h-6 w-6 text-[#FFF6F0]" />} name="GitHub" href="#" />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75" />
              <div className="relative bg-[#1C1C1C] p-8 rounded-2xl border border-[#FFF6F0]/10">
                <h3 className="text-2xl font-bold mb-6">Stay Updated</h3>
                <p className="text-[#FFF6F0]/80 mb-6">
                  Subscribe to our newsletter for the latest news, updates, and exclusive offers.
                </p>
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
