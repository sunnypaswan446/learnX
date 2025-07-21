import { Plane, Play } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About NexGen
            </h2>
            <p className="text-xl text-slate-300 mb-6 leading-relaxed">
              We're passionate about creating tools that empower developers and businesses to achieve more.
              Our platform combines cutting-edge technology with intuitive design.
            </p>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Founded by a team of industry veterans, we understand the challenges of modern development
              and have built solutions that actually work for real-world scenarios.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">50K+</div>
                <div className="text-slate-300">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-slate-300">Uptime</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl p-8 backdrop-blur-sm border border-slate-700/50">
            <div className="aspect-video bg-slate-800/50 rounded-2xl flex items-center justify-center">
              <Play className="w-16 h-16 text-purple-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection