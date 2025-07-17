import PricingCard from "@/Components//Common/PricingCard";
const PricingSection: React.FC = () => {
	const plans = [
		{
			name: "Starter",
			price: "$19",
			period: "month",
			features: [
				"Up to 5 projects",
				"Basic support",
				"1GB storage",
				"Standard security"
			]
		},
		{
			name: "Professional",
			price: "$49",
			period: "month",
			features: [
				"Unlimited projects",
				"Priority support",
				"10GB storage",
				"Advanced security",
				"Team collaboration",
				"Custom integrations"
			],
			popular: true
		},
		{
			name: "Enterprise",
			price: "$99",
			period: "month",
			features: [
				"Everything in Pro",
				"24/7 dedicated support",
				"Unlimited storage",
				"Enterprise security",
				"Custom solutions",
				"SLA guarantee"
			]
		}
	];

	return (
		<section id="pricing" className="py-24 px-6">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
						Simple Pricing
					</h2>
					<p className="text-xl text-slate-300 max-w-3xl mx-auto">
						Choose the perfect plan for your needs. All plans include our core features with no hidden fees.
					</p>
				</div>
				<div className="grid md:grid-cols-3 gap-8">
					{plans.map((plan, index) => (
						<PricingCard
							key={index}
							name={plan.name}
							price={plan.price}
							period={plan.period}
							features={plan.features}
							popular={plan.popular}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default PricingSection