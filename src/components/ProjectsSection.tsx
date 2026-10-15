import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: "smartbot",
      title: "Smartbot - Terrain Traversability Estimation",
      category: "Field Robotics",
      description: "NSF REU research project at West Virginia University's Interdisciplinary Robotics Laboratory, developing a custom friction-sensing probe and predictive model to help robots estimate terrain traversability in areas they haven't physically driven over.",
      tags: ["Kinematics", "ROS", "NVIDIA Isaac Sim"],
      image: "/images/Smartbot1.png"
    },
    {
      id: "spiderbite",
      title: "SpiderBite - 3lb Combat Robot",
      category: "Robotics & Fabrication",
      description: "A competitive beetleweight combat robot featuring a high-kinetic energy weapon system and custom-designed chassis for maximum durability in the arena.",
      tags: ["SolidWorks", "Brushless Motors", "Fabrication"],
      image: "/images/Combat1.png"
    },
    {
      id: "da-bedda-car",
      title: "Da Bedda Car - Micromouse",
      category: "Autonomous Systems",
      description: "An autonomous maze-solving robot designed for speed and precision. Implements efficient pathfinding algorithms and infrared sensor feedback.",
      tags: ["KiCad", "PCB Design", "Sensor Integration"],
      image: "/images/Micromouse1.png"
    },
    {
      id: "custom-speaker",
      title: "Custom 2-Way Speaker System",
      category: "Electronics & Instrumentation",
      description: "A high-fidelity speaker featuring a 6.5\" woofer and 2\" tweeter. Developed as a final project focusing on crossover network design and acoustic testing.",
      tags: ["Analog Circuits", "Acoustics", "Prototyping"],
      image: "/images/Speaker1.png"
    },
    {
      id: "autonomous-turret",
      title: "Autonomous Turret System",
      category: "Digital Circuits",
      description: "A logic-controlled autonomous turret designed for target tracking and engagement. Built using digital logic principles and hardware integration.",
      tags: ["Digital Logic", "Hardware", "Integration"],
      image: "/images/Turret1.png"
    }
  ];

  return (
    <section id="projects" className="scroll-mt-16 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-24">
        <Reveal className="mb-12">
          <SectionHeading label="Projects" title="Selected work" />
          <p className="text-slate-400 mt-3">A showcase of my engineering work and academic accomplishments.</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index === 0 ? 0 : (index % 2) * 100} className={index === 0 ? 'md:col-span-2' : ''}>
              <Link
                to={`/project/${project.id}`}
                className={`group h-full flex flex-col bg-slate-900/60 rounded-xl overflow-hidden border border-white/10 hover:border-blue-400/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-950/50 transition-all duration-300 ${index === 0 ? 'md:flex-row' : ''}`}
              >
                <div className={`relative overflow-hidden bg-slate-800 aspect-video ${index === 0 ? 'md:w-1/2 md:aspect-auto md:min-h-80' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" aria-hidden="true"></div>
                  {index === 0 && (
                    <span className="absolute top-4 left-4 text-xs font-medium text-white bg-blue-600 rounded-full px-3 py-1">Featured</span>
                  )}
                </div>
                <div className={`p-6 flex flex-col flex-1 ${index === 0 ? 'md:p-8 md:justify-center' : ''}`}>
                  <p className="text-xs font-medium text-blue-400 mb-2">{project.category}</p>
                  <h3 className={`font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors ${index === 0 ? 'text-xl md:text-2xl' : 'text-lg'}`}>
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between gap-4">
                    <p className="text-xs text-slate-500">{project.tags.join(' · ')}</p>
                    <span className="grid place-items-center w-8 h-8 flex-shrink-0 rounded-full border border-white/10 text-blue-400 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-colors" aria-hidden="true">→</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
