import React from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const BioSection: React.FC = () => {
  const skills = [
    'Robotics & Automation', 'PLC Programming', 'SolidWorks CAD',
    'Arduino/Microcontrollers', 'Python/C++', 'Circuit Design',
    'Control Systems', 'Additive Manufacturing'
  ];

  return (
    <section id="about" className="scroll-mt-16 border-t border-white/10 bg-slate-900/40">
      <Reveal className="max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-24 grid md:grid-cols-[1fr_2fr] gap-8 md:gap-14">
        <div>
          <SectionHeading label="About" title="A bit about me" />
        </div>
        <div>
          <p className="text-slate-300 text-lg leading-relaxed mb-10">
            I am a senior Mechatronics Engineering major at MTSU who has an interest in how mechanical systems can interact with electrical/computer systems. Throughout my engineering journey, I have settled into a niche of robotics and controls. I have worked on a multitude of projects that range from combat robotics to paper-worthy research. I am currently working on expanding my knowledge of PLCs and control systems.
          </p>
          <h3 className="text-sm font-semibold text-white mb-3">Skills</h3>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li key={skill} className="text-sm text-blue-200 bg-blue-500/10 border border-blue-400/20 rounded-md px-3 py-1 hover:bg-blue-500/20 hover:border-blue-400/40 transition-colors">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
};

export default BioSection;
