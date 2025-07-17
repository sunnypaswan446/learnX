import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, role, content, avatar }) => {
	return (
		<div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
			<div className="flex items-center mb-4">
				{[...Array(5)].map((_, i) => (
					<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
				))}
			</div>
			<p className="text-slate-300 mb-6 leading-relaxed italic">"{content}"</p>
			<div className="flex items-center">
				<div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
					{avatar}
				</div>
				<div>
					<div className="font-semibold">{name}</div>
					<div className="text-slate-400 text-sm">{role}</div>
				</div>
			</div>
		</div>
	);
};