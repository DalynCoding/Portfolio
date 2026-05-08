import React from 'react';

const LinkedInSection: React.FC = () => {
  const posts = [
    {
      date: "New",
      content: "Had a great time at EOSYS today with Gabrielle Miller and Aidan Martin. Got to see “Spot” the Boston Dynamics robot. Thank you very much to Richard Masulis for giving us the run-down on the various uses and functions of the robot. It was a very fun experience!",
      hashtags: ["#Robotics", "#BostonDynamics", "#Spot", "#EOSYS", "#Engineering"],
      likes: "Recent",
      comments: "Active"
    },
    {
      date: "Recent",
      content: "I’m happy to share that I’m starting a new position as AIMS Robotics Researcher at Middle Tennessee State University (MTSU)!",
      hashtags: ["#Robotics", "#Research", "#MTSU", "#Mechatronics"],
      likes: "Recent",
      comments: "Active"
    },
    {
      date: "Recent",
      content: "I’m incredibly excited to share that I’ll be spending my summer at West Virginia University as part of the NSF REU: Robotics in Appalachia program! \n\nI’ll be joining Dr. Yu Gu’s lab to work on the Autonomous Driving on Hiking Trails project. I'm looking forward to diving into the unique challenges of off-road navigation and contributing to some cutting-edge robotics research.\n\nA huge thank you to Dr. Jason Gross and Dr. Guilherme Pereira for this opportunity, and to Dr. Ken Currie and Dr. Junlin Ou for their guidance and support in helping me get to this point.\n\nCan’t wait to get started!",
      hashtags: ["#Robotics", "#NSF", "#REU", "#WVU", "#AutonomousVehicles", "#STEM"],
      likes: "High",
      comments: "Active"
    }
  ];

  return (
    <section id="linkedin" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">LinkedIn Activity</h2>
          <p className="text-slate-400">Staying connected with the engineering community.</p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {posts.map((post, index) => (
            <div key={index} className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:bg-slate-800/80 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center overflow-hidden border border-cyan-400/20 shadow-[0_0_10px_rgba(34,211,238,0.1)]">
                  <img src="/images/ProfilePhoto.jpg" alt="Dalyn Wachala" className="object-cover w-full h-full" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Dalyn Wachala</h4>
                  <p className="text-slate-500 text-xs">Mechatronics Student @ MTSU • {post.date}</p>
                </div>
              </div>
              <div className="text-slate-300 mb-4 leading-relaxed whitespace-pre-wrap">
                {post.content}
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {post.hashtags.map((tag, tIndex) => (
                  <span key={tIndex} className="text-cyan-500 text-sm font-medium hover:underline cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                <div className="flex items-center gap-6">
                  <span className="text-slate-500 text-sm flex items-center gap-1">
                    👍 {post.likes}
                  </span>
                  <span className="text-slate-500 text-sm flex items-center gap-1">
                    💬 {post.comments}
                  </span>
                </div>
                <a href="https://www.linkedin.com/in/dalyn-wachala-58b4852b1" target="_blank" rel="noopener noreferrer" className="text-cyan-500 text-sm font-bold hover:underline">View on LinkedIn</a>
              </div>
            </div>
          ))}
          
          <div className="text-center mt-12">
            <a href="https://www.linkedin.com/in/dalyn-wachala-58b4852b1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-bold">
              Follow my journey on LinkedIn
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInSection;
