import React from 'react';
import { Link } from 'react-router-dom';

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
      tags: ["Sensor Design", "KiCad", "Kinematics"],
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
      tags: ["C++", "PID Control", "Sensors"],
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
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-slate-400">A showcase of my engineering work and academic accomplishments.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link to={`/project/${project.id}`} key={index} className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]">
              <div className="aspect-video relative overflow-hidden">
                <img src={project.image} alt={project.title} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-cyan-400 border border-cyan-400/30">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="text-[10px] uppercase tracking-wider font-bold text-slate-500 bg-slate-800 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 text-cyan-400 text-sm font-bold flex items-center group-hover:translate-x-1 transition-transform">
                  View Case Study
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};


export default ProjectsSection;
