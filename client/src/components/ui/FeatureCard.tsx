interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
}

const FeatureCard = ({ icon, title, description, gradientFrom, gradientTo }: FeatureCardProps) => {
  return (
    <div className="bg-gradient-to-br from-secondary/80 to-secondary p-8 rounded-2xl border border-border hover:border-brand-light/50 transition-all">
      <div className={`w-16 h-16 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-xl flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 font-kallisto text-foreground">{title}</h3>
      <p className="text-foreground/70 font-montserrat">{description}</p>
    </div>
  );
};

export default FeatureCard;
