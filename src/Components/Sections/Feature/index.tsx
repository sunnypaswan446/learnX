import { Zap, Shield, Users } from "lucide-react";
import FeatureCard from "@/Components/Common/FeatureCard";
const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Lightning Fast",
      description:
        "Built for speed with optimized performance that scales with your needs. Experience instant loading and seamless interactions.",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Enterprise Security",
      description:
        "Bank-level security with end-to-end encryption. Your data is protected with the highest industry standards.",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Team Collaboration",
      description:
        "Work together seamlessly with real-time collaboration tools designed for modern teams and workflows.",
    },
  ];

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Everything you need to build, deploy, and scale your applications
            with confidence.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
