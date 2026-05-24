import React from 'react';
import GlassCard from '../ui/GlassCard';

const Skills = () => {
  const skillCategories = [
    {
      title: "Full Stack & Frontend",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
      skills: ["React & React Native", "Next.js", "Node.js", "Tailwind CSS", "Figma"]
    },
    {
      title: "Backend & Architecture",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />,
      skills: ["Java & Spring Boot", "Python & Django", "PostgreSQL & MySQL", "MongoDB & Supabase", "AWS & Docker Containerization"]
    },
    {
      title: "AI & Data Science",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />,
      skills: ["Machine Learning Concepts", "Generative AI & RAG", "TensorFlow & Scikit-learn", "Pandas & NumPy", "Data Analysis"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative z-10 w-full max-w-5xl mx-auto text-slate-300">
      <div className="mb-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-500">Arsenal</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full mx-auto md:mx-0"></div>
        </div>
        <p className="max-w-md text-sm md:text-base text-slate-400 text-center md:text-right">
          A comprehensive breakdown of the frameworks, languages, and tools I use to architect intelligent and scalable systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <GlassCard key={index} className="p-8 hover:-translate-y-1 transition-transform duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-teal-400 shadow-inner group-hover:scale-110 group-hover:text-teal-300 transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {category.icon}
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-5">{category.title}</h3>
            <ul className="space-y-3.5">
              {category.skills.map((skill, idx) => (
                <li key={idx} className="flex items-center text-sm md:text-base text-slate-300 group-hover:text-white transition-colors duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3 shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default Skills;