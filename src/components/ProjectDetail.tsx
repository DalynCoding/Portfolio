import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImage, setActiveImage] = useState(0);

  const projectsData: Record<string, any> = {
    "smartbot": {
      title: "Smartbot - Terrain Traversability Estimation",
      category: "Field Robotics",
      description: "A research project developing a method for robots to estimate terrain traversability in areas they haven't physically driven over.",
      fullDetail: "During an NSF-funded Research Experience for Undergraduates (REU) at West Virginia University's Interdisciplinary Robotics Laboratory, under the guidance of Dr. Yu Gu, I worked on a 3-person team with Griffin Thomas and Peyton Barnes to develop a method for estimating terrain traversability in areas a robot has not physically driven over. Instead of relying on visual terrain classification alone, our approach directly measures surface friction at sampled points and predicts friction across the surrounding, unsampled terrain, producing a continuous friction map with quantified uncertainty that a robot can use to plan paths around risky terrain.\n\nMy role was to design and build the custom 2-DOF friction probe used to take these direct measurements: one joint applies and measures normal contact force through motor torque, while the second joint measures the tangential drag force as the probe traverses the surface. I designed the probe's sensing electronics in KiCad and derived the kinematic and virtual-work model used to convert the probe's raw force readings into a static coefficient of friction at each sampled point. We validated the probe's readings against an ASM 825A digital slipmeter across a multi-material indoor test arena.\n\nGriffin and Peyton extended these point measurements into full terrain maps using a piecewise Gaussian Process Regression model, built and tested in a custom NVIDIA Isaac Sim environment with our simulated robot platform, RayBot, across nine terrain regions of varying friction.",
      specs: ["Sensing: Custom 2-DOF Friction Probe (Motor Torque + Drag Force)", "Validation: Benchmarked Against ASM 825A Digital Slipmeter", "Simulation: NVIDIA Isaac Sim with 'RayBot' Platform Across 9 Terrain Regions", "Output: Continuous Friction Map with Quantified Uncertainty (Piecewise Gaussian Process Regression)"],
      tags: ["ROS", "NVIDIA Isaac Sim", "Python", "Gaussian Process Regression", "KiCad", "Kinematics/Jacobian Analysis", "Sensor Design"],
      images: ["/images/Smartbot1.png", "/images/Smartbot2.png", "/images/Smartbot3.png", "/images/Smartbot4.png"],
      demoVideo: "https://youtu.be/7rt_UMHY8jw?si=MKPP5HPloooTUMMs"
    },
    "spiderbite": {
      title: "SpiderBite - 3lb Combat Robot",
      category: "Robotics & Fabrication",
      description: "A competitive beetleweight combat robot designed for high-impact arena combat.",
      fullDetail: "For the SpiderBite project, I was responsible for the entire electronics integration and significant portions of the mechanical fabrication. I configured and wired the drivetrain and weapon motors to their respective Electronic Speed Controllers (ESCs), ensuring proper current handling and signal routing to the receiver. I also performed the programming for the ESCs and optimized the radio controller mapping for precise drive handling and weapon throttle control.\n\nOn the mechanical side, I led the design and 3D printing of custom motor mounts to ensure secure fitment within the tight chassis constraints. I also contributed to the fabrication of critical metal components, including the weapon shaft, and collaborated on the initial design and structural layout of the robot to ensure it could withstand high-magnitude impacts.",
      specs: ["Weight: 3 lbs", "Electronics: Custom ESC Tuning & RX/TX Configuration", "Chassis: Hybrid 3D Printed / Metal Construction", "Weapon: Brushless Vertical Spinner"],
      tags: ["Electronics Integration", "ESC Programming", "3D Printing", "Metal Fabrication", "SolidWorks"],
      images: ["/images/Combat1.png", "/images/Combat2.png"]
    },
    "da-bedda-car": {
      title: "Da Bedda Car - Micromouse",
      category: "Autonomous Systems",
      description: "An autonomous maze-solving robot designed for speed and precision.",
      fullDetail: "For the Da Bedda Car project, my primary focus was on the electrical system design and sensor integration. I developed a comprehensive wiring diagram to coordinate all mechatronic components within the robot's compact footprint. A key challenge was configuring the custom infrared sensor array, which I built using phototransistors and IR emitters to provide reliable wall detection. Additionally, I designed the custom PCB for the robot using KiCad, ensuring a clean and robust electrical architecture for the power distribution and logic circuits.",
      specs: ["MCU: Teensy / Arduino", "Sensors: Custom IR Emitter/Phototransistor Pair", "PCB: Custom Design in KiCad", "Logic: PID Control Loop"],
      tags: ["KiCad", "PCB Design", "Circuit Diagrams", "Sensor Integration", "Electronics"],
      images: ["/images/Micromouse1.png", "/images/Micromouse2.png", "/images/Micromouse3.png"]
    },
    "custom-speaker": {
      title: "Custom 2-Way Speaker System",
      category: "Electronics & Instrumentation",
      description: "A high-fidelity speaker system built for acoustic performance and clarity.",
      fullDetail: "For the Custom 2-Way Speaker project, I led the mechanical design and contributed heavily to the system's electronic architecture. I performed the CAD design for the speaker enclosure, optimizing the internal volume and port dimensions for the 6.5-inch woofer. Beyond the physical build, I participated in the theoretical calculations for the power amplifiers and the passive crossover filters. This involved determining optimal cutoff frequencies and component values to ensure balanced output between the woofer and the 2-inch tweeter while maintaining system stability and efficiency.",
      specs: ["Woofer: 6.5 Inch", "Tweeter: 2 Inch", "Design: Custom CAD Enclosure", "Electronics: Theoretical Filter & Amp Calculations"],
      tags: ["CAD Design", "Filter Design", "Analog Circuits", "Acoustics", "Prototyping"],
      images: ["/images/Speaker1.png", "/images/Speaker2.png", "/images/Speaker3.png"]
    },
    "autonomous-turret": {
      title: "Autonomous Turret System",
      category: "Digital Circuits",
      description: "A logic-controlled autonomous turret designed for target tracking.",
      fullDetail: "For the Autonomous Turret project, I focused on the mechanical design and the physical electronics assembly. I led the CAD development for the turret structure, ensuring the enclosure could securely hold the ultrasonic sensor and the firing mechanism during rapid movement. On the electronics side, I was responsible for soldering the control circuit components onto a protoboard to create a robust hardware interface. A significant mechanical challenge I managed was the precision alignment of the belt-driven pulleys to ensure smooth rotation. The finished system autonomously pans across a 120-degree field of view and is programmed to immediately halt and engage whenever the ultrasonic sensor detects an object within a predefined distance threshold.",
      specs: ["Pan Range: 120 Degrees", "Sensors: Ultrasonic Ranging", "Drive: Belt-Driven with Aligned Pulleys", "Assembly: Custom Soldered Protoboard"],
      tags: ["CAD Design", "Soldering", "Mechanical Assembly", "Digital Logic", "Mechatronics"],
      images: ["/images/Turret1.png", "/images/Turret2.png", "/images/Turret3.png"]
    }
  };

  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-cyan-400 hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-24 pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors">
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Portfolio
        </Link>
        
        {/* Image Gallery */}
        <div className="mb-12">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 mb-4">
            <img src={project.images[activeImage]} alt={`${project.title} - Image ${activeImage + 1}`} className="object-contain w-full h-full" />
          </div>
          {project.images.length > 1 && (
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {project.images.map((img: string, i: number) => (
                <button 
                  key={i} 
                  onClick={() => setActiveImage(i)}
                  className={`relative flex-shrink-0 w-32 aspect-video rounded-lg overflow-hidden border-2 transition-all ${activeImage === i ? 'border-cyan-400 scale-105' : 'border-slate-800 opacity-50 hover:opacity-100'}`}
                >
                  <img src={img} alt={`${project.title} thumb ${i + 1}`} className="object-cover w-full h-full" />
                </button>
              ))}
            </div>
          )}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
        <div className="text-cyan-400 font-mono mb-8 uppercase tracking-widest">{project.category}</div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-4 whitespace-pre-line">
              {project.fullDetail}
            </p>

            {project.demoVideo && (
              <a
                href={project.demoVideo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-bold mb-8 transition-colors"
              >
                Watch Project Demo
                <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}

            <h2 className="text-2xl font-bold text-white mb-4">Technical Specifications</h2>
            <ul className="space-y-3 mb-8">
              {project.specs.map((spec: string, i: number) => (
                <li key={i} className="flex items-start">
                  <span className="text-cyan-500 mr-2">▹</span>
                  <span className="text-slate-300">{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 sticky top-24">
              <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Skills & Tools</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag: string, i: number) => (
                  <span key={i} className="text-xs font-bold text-slate-400 bg-slate-800 px-3 py-1.5 rounded-md border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="w-full bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold py-3 rounded-lg transition-colors shadow-lg shadow-cyan-900/20">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
