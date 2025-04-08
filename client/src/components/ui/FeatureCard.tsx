interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    gradientFrom: string;
    gradientTo: string;
  }
  
  const FeatureCard = ({ icon, title, description, gradientFrom, gradientTo }: FeatureCardProps) => {
    return (
      <div className="bg-gradient-to-br from-[#1C1C1C]/80 to-[#1C1C1C] p-8 rounded-2xl border border-[#FFF6F0]/10 hover:border-purple-500/50 transition-all">
        <div className={`w-16 h-16 bg-gradient-to-br from-${gradientFrom} to-${gradientTo} rounded-xl flex items-center justify-center mb-6`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-[#FFF6F0]/70">{description}</p>
      </div>
    );
  };
  
  export default FeatureCard;
  