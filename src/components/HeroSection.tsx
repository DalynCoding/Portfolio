import React from 'react';
import Reveal from './Reveal';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid" aria-hidden="true"></div>
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-blue-600/20 blur-[120px]"
        aria-hidden="true"
      ></div>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-32 flex flex-col-reverse md:flex-row md:items-center gap-10 md:gap-14">
        <Reveal className="flex-1">
          <p className="inline-flex items-center gap-2 text-xs font-medium text-blue-200 bg-blue-500/10 border border-blue-400/20 rounded-full px-3 py-1 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" aria-hidden="true"></span>
            Senior Mechatronics Engineering Student · MTSU
          </p>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8 bg-gradient-to-br from-white via-white to-blue-300 bg-clip-text text-transparent pb-1">
            Dalyn Wachala
          </h1>
          <div className="flex flex-wrap gap-3 text-sm font-medium">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-md shadow-lg shadow-blue-900/40 transition-colors">
              View Projects
            </a>
            <a href="/documents/resume.pdf" target="_blank" rel="noopener noreferrer" className="border border-white/15 hover:border-white/40 hover:bg-white/5 text-white px-5 py-2.5 rounded-md transition-colors">
              Resume (PDF)
            </a>
            <a href="https://www.linkedin.com/in/dalyn-wachala-58b4852b1" target="_blank" rel="noopener noreferrer" className="border border-white/15 hover:border-white/40 hover:bg-white/5 text-white px-5 py-2.5 rounded-md transition-colors">
              LinkedIn
            </a>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="relative w-fit">
            <div className="absolute -inset-3 rounded-3xl border border-blue-400/20" aria-hidden="true"></div>
            <img
              src="/images/ProfilePhoto.jpg"
              alt="Dalyn Wachala"
              className="relative w-36 h-36 md:w-64 md:h-64 object-cover rounded-2xl ring-1 ring-white/15 shadow-2xl shadow-blue-950/60"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default HeroSection;
