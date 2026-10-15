import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/75 backdrop-blur-md border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap justify-between items-center gap-x-6 gap-y-2 py-3.5">
          <Link to="/" className="group flex items-center gap-2.5 font-semibold text-white">
            <span className="grid place-items-center w-8 h-8 rounded-md bg-gradient-to-br from-blue-500 to-blue-700 text-sm group-hover:from-blue-400 group-hover:to-blue-600 transition-colors">DW</span>
            Dalyn Wachala
          </Link>
          <nav className="flex gap-5 text-sm text-slate-400">
            <Link to="/#about" className="hover:text-white transition-colors">About</Link>
            <Link to="/#projects" className="hover:text-white transition-colors">Projects</Link>
            <a href="/documents/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Resume</a>
            <a href="mailto:dwachala12@gmail.com" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
