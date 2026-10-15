import React from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const LinkedInSection: React.FC = () => {
  const posts = [
    {
      content: "I had the incredible opportunity to spend 10 weeks of my summer at West Virginia University participating in the NSF-funded Robotics in Appalachia REU program!\n\nI did a lot of interesting research on autonomous navigation in dynamic environments. We focused our project on probing uncertain areas to inform the robot on how to better navigate through those areas.\n\nFor more information on the project, a YouTube link of a project demo is provided here: https://lnkd.in/gZ6awV5K\n\nII would love to thank the entirety of the WVU IRL lab, Dr. Yu Gu, and Dr. Jason Gross for giving me the chance to learn more about the graduate student experience and robotics as a whole.\n\nIAlso, a huge thank you to my group mates Griffin Thomas and Peyton Barnes, as the project would not have came together without you guys.\n\nMy time in West Virginia taught me priceless knowledge that I will cherish as I continue with my career. Go Mountaineers!! 〽️〽️"
    },
    {
      content: "I’m incredibly excited to share that I’ll be spending my summer at West Virginia University as part of the NSF REU: Robotics in Appalachia program! \n\nI’ll be joining Dr. Yu Gu’s lab to work on the Autonomous Driving on Hiking Trails project. I'm looking forward to diving into the unique challenges of off-road navigation and contributing to some cutting-edge robotics research.\n\nA huge thank you to Dr. Jason Gross and Dr. Guilherme Pereira for this opportunity, and to Dr. Ken Currie and Dr. Junlin Ou for their guidance and support in helping me get to this point.\n\nCan’t wait to get started!"
    },
    {
      content: "I’m happy to share that I’m starting a new position as AIMS Robotics Researcher at Middle Tennessee State University (MTSU)!"
    },
  ];

  return (
    <section id="linkedin" className="border-t border-white/10 bg-slate-900/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-24 grid md:grid-cols-[1fr_2fr] gap-8 md:gap-14">
        <Reveal>
          <div className="md:sticky md:top-24">
            <SectionHeading label="Updates" title="LinkedIn Activity" />
            <p className="text-slate-400 mt-3 mb-5">Staying connected with the engineering community.</p>
            <a
              href="https://www.linkedin.com/in/dalyn-wachala-58b4852b1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-400 hover:text-blue-300"
            >
              More on LinkedIn →
            </a>
          </div>
        </Reveal>

        <div className="space-y-5">
          {posts.map((post, index) => (
            <Reveal key={index}>
              <article className="relative bg-slate-900/80 border border-white/10 rounded-xl p-6 pl-7 overflow-hidden">
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-700" aria-hidden="true"></span>
                <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">
                  {post.content}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinkedInSection;
