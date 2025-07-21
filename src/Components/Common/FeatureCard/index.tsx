interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10">
      <div className="text-purple-400 mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">
        {title}
      </h3>
      <p className="text-slate-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
export default FeatureCard;
