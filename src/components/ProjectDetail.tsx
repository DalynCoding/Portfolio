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
      fullDetail: "During an NSF-funded Research Experience for Undergraduates (REU) at West Virginia University's Interdisciplinary Robotics Laboratory, under the guidance of Dr. Yu Gu, I worked on a 3-person team with Griffin Thomas and Peyton Barnes to develop a method for estimating terrain traversability in areas a robot has not physically driven over. Our approach directly measures surface friction at points and predicts friction across the surrounding terrain, producing a friction map with quantified uncertainty that a robot can use to plan paths around risky terrain.\n\nMy role was to implement a custom 2-DOF friction probe used to take normal force and friction force measurements through motor torque readings. This was achieved by modeling the 4 bar linkage probe arm into a Jacobian matrix. With this Jacobian, you can relate the torques at the input with the forces at the output with the principle of virtual work. Then, once we had the equations for the normal and friction force, they just needed to be divided by each other to get a reliable equation for the coefficient of friction. We validated the probe's readings against an ASM 825A digital slipmeter across a multi-material indoor test arena.\n\nGriffin and Peyton extended these point measurements into full terrain maps using a piecewise Gaussian Process Regression model, built and tested in a custom NVIDIA Isaac Sim environment with our simulated robot platform, RayBot, across nine terrain regions of varying friction.",
      tags: ["ROS", "NVIDIA Isaac Sim", "Python", "Gaussian Process Regression", "Kinematics/Jacobian Analysis"],
      images: ["/images/Smartbot1.png", "/images/Smartbot2.png", "/images/Smartbot3.png", "/images/Smartbot4.png"],
      demoVideo: "https://youtu.be/7rt_UMHY8jw?si=MKPP5HPloooTUMMs"
    },
    "spiderbite": {
      title: "SpiderBite - 3lb Combat Robot",
      category: "Robotics & Fabrication",
      description: "A competitive beetleweight combat robot designed for high-impact arena combat.",
      fullDetail: "For the SpiderBite project, I was responsible for the entire electronics integration and significant portions of the mechanical fabrication. I configured and wired the drivetrain and weapon motors to their respective Electronic Speed Controllers (ESCs), ensuring proper current handling and signal routing to the receiver. I also performed the programming for the ESCs and optimized the radio controller mapping for precise drive handling and weapon throttle control.\n\nOn the mechanical side, I led the design and 3D printing of custom motor mounts to ensure secure fitment within the tight chassis constraints. I also contributed to the fabrication of critical metal components, including the weapon shaft, and collaborated on the initial design and structural layout of the robot to ensure it could withstand high-magnitude impacts.",
      tags: ["Electronics Integration", "ESC Programming", "3D Printing", "Metal Fabrication", "SolidWorks"],
      images: ["/images/Combat1.png", "/images/Combat2.png"]
    },
    "da-bedda-car": {
      title: "Da Bedda Car - Micromouse",
      category: "Autonomous Systems",
      description: "An autonomous maze-solving robot designed for speed and precision.",
      fullDetail: "For the Da Bedda Car project, my primary focus was on the electrical system design and sensor integration. I developed a comprehensive wiring diagram to coordinate all mechatronic components within the robot's compact footprint. A key challenge was configuring the custom infrared sensor array, which I built using phototransistors and IR emitters to provide reliable wall detection. Additionally, I designed the custom PCB for the robot using KiCad, ensuring a clean and robust electrical architecture for the power distribution and logic circuits.",
      tags: ["KiCad", "PCB Design", "Circuit Diagrams", "Sensor Integration", "Electronics"],
      images: ["/images/Micromouse1.png", "/images/Micromouse2.png", "/images/Micromouse3.png"]
    },
    "custom-speaker": {
      title: "Custom 2-Way Speaker System",
      category: "Electronics & Instrumentation",
      description: "A high-fidelity speaker system built for acoustic performance and clarity.",
      fullDetail: "For the Custom 2-Way Speaker project, I led the mechanical design and contributed heavily to the system's electronic architecture. I performed the CAD design for the speaker enclosure, optimizing the internal volume and port dimensions for the 6.5-inch woofer. Beyond the physical build, I participated in the theoretical calculations for the power amplifiers and the passive crossover filters. This involved determining optimal cutoff frequencies and component values to ensure balanced output between the woofer and the 2-inch tweeter while maintaining system stability and efficiency.",
      tags: ["CAD Design", "Filter Design", "Analog Circuits", "Acoustics", "Prototyping"],
      images: ["/images/Speaker1.png", "/images/Speaker2.png", "/images/Speaker3.png"]
    },
    "autonomous-turret": {
      title: "Autonomous Turret System",
      category: "Digital Circuits",
      description: "A logic-controlled autonomous turret designed for target tracking.",
      fullDetail: "For the Autonomous Turret project, I focused on the mechanical design and the physical electronics assembly. I led the CAD development for the turret structure, ensuring the enclosure could securely hold the ultrasonic sensor and the firing mechanism during rapid movement. On the electronics side, I was responsible for soldering the control circuit components onto a protoboard to create a robust hardware interface. A significant mechanical challenge I managed was the precision alignment of the belt-driven pulleys to ensure smooth rotation. The finished system autonomously pans across a 120-degree field of view and is programmed to immediately halt and engage whenever the ultrasonic sensor detects an object within a predefined distance threshold.",
      tags: ["CAD Design", "Soldering", "Mechanical Assembly", "Digital Logic", "Mechatronics"],
      images: ["/images/Turret1.png", "/images/Turret2.png", "/images/Turret3.png"]
    }
  };

  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-24">
        <h1 className="text-2xl font-semibold text-white mb-4">Project not found</h1>
        <Link to="/" className="text-blue-400 hover:underline underline-offset-4">Back to home</Link>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full bg-blue-600/15 blur-[120px] pointer-events-none"
        aria-hidden="true"
      ></div>
      <article className="relative max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        <Link to="/#projects" className="inline-block text-sm font-medium text-blue-400 hover:text-blue-300 mb-8 transition-colors">
          ← All projects
        </Link>

        <p className="text-sm font-medium text-blue-400 mb-2">{project.category}</p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-8">{project.title}</h1>

        {/* Image Gallery */}
        <div className="mb-10">
          <div className="aspect-video rounded-xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl shadow-blue-950/40 mb-3">
            <img src={project.images[activeImage]} alt={`${project.title} - Image ${activeImage + 1}`} className="object-contain w-full h-full" />
          </div>
          {project.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-1">
              {project.images.map((img: string, i: number) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  aria-label={`Show image ${i + 1}`}
                  className={`flex-shrink-0 w-24 aspect-video rounded-md overflow-hidden border transition-opacity ${activeImage === i ? 'border-blue-500 ring-2 ring-blue-500/30' : 'border-white/10 opacity-50 hover:opacity-100'}`}
                >
                  <img src={img} alt="" className="object-cover w-full h-full" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="max-w-2xl">
          <h2 className="text-xl font-semibold text-white mb-3">Overview</h2>
          <p className="text-slate-300 leading-relaxed whitespace-pre-line mb-6">
            {project.fullDetail}
          </p>

          {project.demoVideo && (
            <a
              href={project.demoVideo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-5 py-2.5 rounded-md shadow-lg shadow-blue-900/40 transition-colors mb-10"
            >
              Watch the project demo ↗
            </a>
          )}

          <h2 className="text-xl font-semibold text-white mb-3">Skills & Tools</h2>
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <li key={tag} className="text-sm text-blue-200 bg-blue-500/10 border border-blue-400/20 rounded-md px-3 py-1">{tag}</li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
};

export default ProjectDetail;
