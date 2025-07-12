interface NavigationProps {
    isScrolled: boolean;
    onSectionClick: (sectionId: string) => void;
  }
  
const Header: React.FC<NavigationProps> = ({ isScrolled, onSectionClick }) => {
    const navItems = ['Hero', 'Features', 'About', 'Testimonials', 'Pricing', 'Contact'];
  
    return (
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              NexGen
            </div>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => onSectionClick(item.toLowerCase())}
                  className="hover:text-purple-400 transition-colors duration-300 text-sm font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    );
  };

export default Header;