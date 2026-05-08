import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <span className="text-cyan-400 font-bold text-xl tracking-tighter hover:text-cyan-300 transition-colors">DALYN WACHALA</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/#about" className="text-slate-300 hover:text-cyan-400 transition-colors px-3 py-2 text-sm font-medium">About</Link>
            <Link to="/#projects" className="text-slate-300 hover:text-cyan-400 transition-colors px-3 py-2 text-sm font-medium">Projects</Link>
            <a href="https://www.linkedin.com/in/dalyn-wachala-58b4852b1" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 transition-colors px-3 py-2 text-sm font-medium">LinkedIn</a>
            <a href="mailto:dwachala12@gmail.com" className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 px-4 py-2 rounded-md text-sm font-bold transition-all shadow-[0_0_15px_rgba(34,211,238,0.3)]">Contact Me</a>
          </nav>
          <div className="md:hidden">
            {/* Mobile menu button could go here */}
            <button className="text-slate-300 hover:text-cyan-400">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
