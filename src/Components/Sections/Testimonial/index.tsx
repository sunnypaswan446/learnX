import TestimonialCard from '@/Components/Common/TestimonialCard';
import { Play } from 'lucide-react';

const Testimonial: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO at TechFlow",
      content: "NexGen transformed our development workflow. The performance improvements were immediate and substantial.",
      avatar: "S"
    },
    {
      name: "Marcus Rodriguez",
      role: "Lead Developer",
      content: "The best platform I've used in my 10 years of development. Intuitive, powerful, and reliable.",
      avatar: "M"
    },
    {
      name: "Emily Watson",
      role: "Product Manager",
      content: "Our team's productivity increased by 300% after switching to NexGen. Game-changing platform.",
      avatar: "E"
    }
  ];
    return (
      <section id="testimonials" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            What People Say
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our users have to say about their experience.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </section>
    );
  };

  export default Testimonial