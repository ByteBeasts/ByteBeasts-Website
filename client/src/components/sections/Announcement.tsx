import AnnouncementCard, { AnnouncementData } from "../ui/AnnouncementCard";

const announcement: AnnouncementData = {
  image: "/announcements/incubatorPlaytesting.png",
  badge: "Coming Soon",
  title: "Incubator Playtesting",
  date: "April 07, 2025",
  description:
    "It's time to kick off the ByteBeasts Tamagotchi Playtesting sessions! 🎮✨ Our first session is exclusively for all Dojo Senseis, happening during the Cartridge incubator call. Let's raise some beasts!🐉😄",
  ctaText: "Join",
  ctaLink: "#", 
  gradientFrom: "from-brand-light",
  gradientTo: "to-brand-dark",
};

const Announcement = () => {
  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <AnnouncementCard {...announcement} />
      </div>
    </section>
  );
};

export default Announcement;
