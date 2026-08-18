import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--card-border)] py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-serif font-bold text-sm">
              {portfolioData.name.charAt(0)}
            </div>
            <span className="text-main font-serif text-lg">{portfolioData.name}</span>
          </div>
          <p className="text-muted text-sm max-w-xs">
            Building reliable software and exploring the future of AI.
          </p>
        </div>

        <div className="flex gap-12">
          <div className="flex flex-col gap-3">
            <span className="text-main text-sm font-medium uppercase tracking-wider">Navigation</span>
            <Link to="/" className="text-muted hover:text-main text-sm transition-colors">Home</Link>
            <Link to="/projects" className="text-muted hover:text-main text-sm transition-colors">Projects</Link>
            <Link to="/about" className="text-muted hover:text-main text-sm transition-colors">About</Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-main text-sm font-medium uppercase tracking-wider">Connect</span>
            <a href={`mailto:${portfolioData.email}`} className="text-muted hover:text-main text-sm transition-colors">Email</a>
            <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-main text-sm transition-colors">LinkedIn</a>
            <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-main text-sm transition-colors">GitHub</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-[var(--card-border)] flex flex-col sm:flex-row justify-between items-center gap-4 text-muted text-xs">
        <p>© {currentYear} {portfolioData.name}. All rights reserved.</p>
        <p>Designed & Developed with ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;
