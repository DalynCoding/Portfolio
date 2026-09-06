import React from 'react';

const BioSection: React.FC = () => {
  const skills = [
    'Robotics & Automation', 'PLC Programming', 'SolidWorks CAD', 
    'Arduino/Microcontrollers', 'Python/C++', 'Circuit Design',
    'Control Systems', 'Additive Manufacturing'
  ];

  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Photo Placeholder */}
          <div className="w-full md:w-1/3">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-square rounded-2xl bg-slate-800 overflow-hidden border border-slate-700">
                <img src="/images/ProfilePhoto.jpg" alt="Dalyn Wachala" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
          
          {/* Bio Text */}
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              I am a Senior Mechatronics Engineering student at Middle Tennessee State University (MTSU) with a passion for designing and implementing intelligent mechanical systems.
              My journey in engineering is driven by the challenge of integrating diverse technologies to solve complex real-world problems.
            </p>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              From competitive combat robotics to industrial automation projects, I thrive in hands-on environments where I can apply theoretical knowledge to physical systems. 
              I am currently focused on expanding my expertise in control systems and advanced manufacturing.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="bg-slate-800 border border-slate-700 p-3 rounded-lg text-cyan-400 text-center text-sm font-medium hover:border-cyan-400/50 transition-colors">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
