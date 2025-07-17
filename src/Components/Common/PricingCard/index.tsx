import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ name, price, period, features, popular = false }) => {
  return (
    <div className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 ${popular
      ? 'border-purple-400 shadow-xl shadow-purple-500/20'
      : 'border-slate-700/50 hover:border-slate-600'
      }`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-4">{name}</h3>
        <div className="mb-2">
          <span className="text-5xl font-bold">{price}</span>
          <span className="text-slate-400">/{period}</span>
        </div>
      </div>
      <ul className="space-y-4 mb-8">
        {features?.map((feature: string, index: number) => (
          <li key={index} className="flex items-center">
            <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
            <span className="text-slate-300">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${popular
        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/25'
        : 'border border-slate-600 text-slate-300 hover:bg-slate-800/50'
        }`}>
        Get Started
      </button>
    </div>
  );
};

export default PricingCard;