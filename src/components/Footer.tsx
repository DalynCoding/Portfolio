import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-white/10 text-slate-400">
      <div
        className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-blue-600/15 blur-[120px]"
        aria-hidden="true"
      ></div>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10 border-b border-white/10">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white mb-2">Get in touch</h2>
            <p className="text-sm">Senior Mechatronics Engineering Student at MTSU</p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-medium">
            <a href="mailto:dwachala12@gmail.com" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-md shadow-lg shadow-blue-900/40 transition-colors">
              dwachala12@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/dalyn-wachala-58b4852b1" target="_blank" rel="noopener noreferrer" className="border border-white/15 hover:border-white/40 hover:bg-white/5 text-white px-5 py-2.5 rounded-md transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
        <p className="pt-6 text-xs text-slate-500">© {new Date().getFullYear()} Dalyn Wachala</p>
      </div>
    </footer>
  );
};

export default Footer;
