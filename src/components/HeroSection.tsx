import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-slate-950">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(#22d3ee 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-cyan-500 font-mono mb-4 animate-pulse"># Junior Mechatronics Engineer</h2>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
          Dalyn <span className="text-cyan-400">Wachala</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Bridging the gap between mechanical systems, electronics, and software to build the next generation of automated systems.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#projects" className="bg-slate-100 hover:bg-white text-slate-950 px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105">
            View Projects
          </a>
          <a href="/documents/resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
            Download Resume
          </a>
          <a href="https://www.linkedin.com/in/dalyn-wachala-58b4852b1" target="_blank" rel="noopener noreferrer" className="border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 px-8 py-4 rounded-lg font-bold transition-all backdrop-blur-sm">
            LinkedIn Activity
          </a>
        </div>
        
        {/* Animated Chevron */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
          </svg>
        </div>
      </div>
      
      {/* Decorative Circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-950/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-950/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
