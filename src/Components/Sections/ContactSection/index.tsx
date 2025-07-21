import { Mail, Github, Twitter, Linkedin } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Join thousands of developers who are already building the future with NexGen.
          Start your journey today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Contact Sales
          </button>
          <button className="border border-slate-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-800/50 transition-all duration-300">
            Schedule Demo
          </button>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection