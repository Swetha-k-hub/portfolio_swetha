import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Search, Moon, Sun, Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { cn } from '../utils/cn';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsLight(true);
      document.documentElement.classList.add('light');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isLight;
    setIsLight(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-[var(--nav-bg)] backdrop-blur-md border-b border-[var(--card-border)] shadow-xl" : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Name */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-serif font-bold text-xl group-hover:scale-110 transition-transform">
            {portfolioData.name.charAt(0)}
          </div>
          <div className="hidden sm:block">
            <h1 className="font-medium text-lg leading-tight transition-colors">{portfolioData.name}</h1>
            <p className="text-gray-500 text-xs uppercase tracking-widest">Aspiring Dev</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 bg-[var(--card-bg)] border border-[var(--card-border)] px-6 py-2 rounded-full backdrop-blur-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors",
                location.pathname === link.path ? "text-[var(--heading-color)]" : "text-gray-500 hover:text-[var(--heading-color)]"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden sm:flex items-center gap-2">
            <button className="p-2 text-gray-500 hover:text-[var(--heading-color)] transition-colors">
              <Search size={18} />
            </button>
            <a 
              href={portfolioData.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-gray-500 hover:text-[var(--heading-color)] transition-colors"
            >
              <Github size={18} />
            </a>
            <button 
              onClick={toggleTheme}
              className="p-2 text-gray-500 hover:text-[var(--heading-color)] transition-colors"
            >
              {isLight ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
          <Link 
            to="/contact" 
            className="pill-button pill-button-primary text-sm hidden lg:block"
          >
            Get in touch
          </Link>
          <button 
            className="md:hidden p-2 text-[var(--heading-color)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[var(--bg-color)] border-b border-[var(--card-border)] p-6 md:hidden flex flex-col gap-4 animate-in fade-in slide-in-from-top-5 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-lg font-medium py-2",
                location.pathname === link.path ? "text-purple-500" : "text-gray-500"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center justify-between pt-4 border-t border-[var(--card-border)]">
            <div className="flex gap-4">
              <Github className="text-gray-500" />
              <Search className="text-gray-500" />
            </div>
            <button 
              onClick={toggleTheme}
              className="p-2 text-gray-500 hover:text-[var(--heading-color)]"
            >
              {isLight ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
