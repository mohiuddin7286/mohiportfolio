import React from 'react';
import GlassCard from '../ui/GlassCard';

const About = () => {
  const education = [
    {
      period: "2024 – 2028",
      degree: "B.Tech in Artificial Intelligence",
      institution: "KL University Hyderabad",
      status: "Ongoing"
    },
    {
      period: "2010 – 2024",
      degree: "Intermediate, Science (PCM)",
      institution: "Bethany Convent Senior Secondary School",
      status: "Completed"
    }
  ];

  const languages = ["English", "Hindi", "Japanese", "Russian"];

  return (
    <section id="about" className="py-20 px-6 relative z-10 w-full max-w-5xl mx-auto">
      <div className="mb-16 md:mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-400">Code</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

        {/* Left Column: Photo & Narrative */}
        <GlassCard className="p-8 md:p-10 lg:col-span-7 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center md:items-start">
          {/* Profile Photo */}
          <div className="relative shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full blur-lg opacity-50"></div>
            <img
              src="/profile.png"
              alt="Mohiuddin Ahmad"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-white/20 shadow-2xl"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://ui-avatars.com/api/?name=Mohiuddin+Ahmad&background=0D8ABC&color=fff&size=256";
              }}
            />
          </div>

          <div className="space-y-4 text-slate-300 text-base md:text-lg leading-relaxed relative z-10">
            <p>
              I am a full-stack engineer and visionary founder passionate about solving complex problems at the intersection of <strong className="text-white font-medium">Artificial Intelligence</strong> and scalable cloud architecture.
            </p>
            <p>
              When I'm away from the terminal, I curate international banknotes-a pursuit that fuels my eye for global history and intricate design. I also study multiple languages to broaden my perspective on global communication and Natural Language Processing.
            </p>

            {/* Spoken Languages */}
            <div className="pt-4 flex flex-wrap gap-2">
              {languages.map(lang => (
                <span key={lang} className="px-3 py-1 text-xs font-semibold text-slate-200 bg-white/5 border border-white/10 rounded-full">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </GlassCard>

        {/* Right Column: Education Timeline */}
        <div className="lg:col-span-5 w-full">
          <h3 className="text-2xl font-bold text-white mb-8 px-2">Academic Journey</h3>
          <div className="relative border-l border-white/20 ml-4 md:ml-6 space-y-10">
            {education.map((item, index) => (
              <div key={index} className="relative pl-8">
                <div className={`absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-slate-950 ${item.status === 'Ongoing' ? 'bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.6)]' : 'bg-slate-500'}`}></div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-teal-400 tracking-wider mb-1 uppercase">{item.period}</span>
                  <h4 className="text-xl font-bold text-white mb-1 leading-snug">{item.degree}</h4>
                  <p className="text-slate-400 font-medium text-sm">{item.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
