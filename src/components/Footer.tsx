import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="text-cyan-400 font-bold text-xl tracking-tighter">DALYN WACHALA</span>
            <p className="text-slate-500 mt-2">Senior Mechatronics Engineering Student</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <a href="mailto:dwachala12@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              dwachala12@gmail.com
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
