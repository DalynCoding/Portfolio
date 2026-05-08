import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="text-cyan-400 font-bold text-xl tracking-tighter">DALYN WACHALA</span>
            <p className="text-slate-500 mt-2">Junior Mechatronics Engineering Student</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <a href="mailto:dwachala12@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              dwachala12@gmail.com
            </a>
            <a href="tel:6154992889" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (615) 499-2889
            </a>
            <a href="https://www.linkedin.com/in/dalyn-wachala-58b4852b1" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">LinkedIn</a>
          </div>
          
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Dalyn Wachala. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
