import { Button } from "./Button";
import { ArrowRight } from "lucide-react";

export interface AnnouncementData {
  image: string;
  badge: string;
  title: string;
  date?: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  gradientFrom: string;
  gradientTo: string;
}

const AnnouncementCard = ({
  image,
  badge,
  title,
  date,
  description,
  ctaText,
  ctaLink,
  gradientFrom,
  gradientTo,
}: AnnouncementData) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
      <div className="w-full md:w-1/2">
        <div className="relative">
          <div
            className={`absolute -inset-0.5 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-2xl blur opacity-75`}
          />
          <div className="relative bg-[#1C1C1C] rounded-2xl overflow-hidden">
            <img
              src={image}
              alt={title}
              width={600}
              height={400}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <div
          className={`inline-block px-4 py-1 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-full text-sm font-medium mb-4`}
        >
          {badge}
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>
        {date && <p className="text-[#FFF6F0]/80 text-lg mb-6">{date}</p>}
        <p className="text-[#FFF6F0]/80 mb-8">{description}</p>
        <a href={ctaLink}>
        <Button className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} hover:opacity-90 text-white border-none`}>
          {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        </a>
      </div>
    </div>
  );
};

export default AnnouncementCard;
