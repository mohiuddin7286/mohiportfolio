import React from 'react';
import GlassCard from '../ui/GlassCard';

const Experience = () => {
  const githubProjects = [
    { name: "algotradingbot", desc: "Automated algorithmic trading bot leveraging data structures.", tech: "Python" },
    { name: "SkillIOU", desc: "Full-stack application architecture.", tech: "Java / Spring Boot" },
    { name: "wit-ai-bot", desc: "Natural language processing bot integration.", tech: "AI / Web" },
    { name: "decision_gravity_system", desc: "Complex logic and decision-making framework.", tech: "Data Science" }
  ];

  return (
    <section id="experience" className="py-24 px-6 relative z-10 w-full max-w-5xl mx-auto text-slate-300">
      <div className="mb-16 md:mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"></div>
      </div>

      <div className="space-y-8">

        {/* NEW: EduSkills Internship */}
        <GlassCard className="p-8 md:p-10 border-l-4 border-l-blue-400">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white">Cloud Computing Intern</h3>
              <p className="text-blue-400 font-medium mt-1">EduSkills Foundation (Google Cloud)</p>
            </div>
            <span className="px-4 py-1.5 rounded-full border border-slate-600 text-sm font-medium bg-slate-800/50">
              Apr 2026 – Present
            </span>
          </div>
          <p className="text-lg leading-relaxed mb-4">
            Executing an intensive 8-week AICTE Virtual Internship Program focused on Google Cloud Computing Foundations (GCP). Gaining hands-on expertise in cloud infrastructure, scalability, and deployment pipelines.
          </p>
          <div className="flex gap-2">
            <span className="px-3 py-1 text-xs font-semibold text-slate-300 bg-white/5 border border-white/10 rounded-full">GCP</span>
            <span className="px-3 py-1 text-xs font-semibold text-slate-300 bg-white/5 border border-white/10 rounded-full">Cloud Infrastructure</span>
          </div>
        </GlassCard>

        {/* Existing: Barter Verse */}
        <GlassCard className="p-8 md:p-10 relative overflow-hidden group border-l-4 border-l-teal-400">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-teal-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white">Barter Verse</h3>
                <p className="text-teal-400 font-medium mt-1">Founder & Lead Architect</p>
              </div>
              <span className="px-4 py-1.5 rounded-full border border-slate-600 text-sm font-medium bg-slate-800/50">
                Aug 2024 – Present
              </span>
            </div>
            <p className="text-lg mb-6 leading-relaxed">
              Architected and deployed a decentralized marketplace platform enabling direct peer-to-peer trading of physical goods and digital assets. Engineered AI trade matching and conceptualized smart escrow frameworks.
            </p>
            <div className="flex gap-4">
              <a href="https://www.barterverse.in" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 rounded-full bg-slate-100 text-slate-900 font-semibold text-sm hover:bg-white transition-colors shadow-lg">
                View Live Platform
              </a>
            </div>
          </div>
        </GlassCard>

        {/* NEW: GitHub Repositories */}
        <h3 className="text-2xl font-bold text-white mt-16 mb-6">Open Source & Technical Labs</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {githubProjects.map((repo, idx) => (
            <a key={idx} href={`https://github.com/mohiuddin7286/${repo.name}`} target="_blank" rel="noopener noreferrer" className="block group">
              <GlassCard className="p-6 h-full hover:bg-white/10 transition-colors duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-5 h-5 text-slate-400 group-hover:text-teal-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                    <h4 className="font-bold text-white text-lg">{repo.name}</h4>
                  </div>
                  <p className="text-sm text-slate-400 mb-4">{repo.desc}</p>
                </div>
                <span className="text-xs font-semibold text-teal-400">{repo.tech}</span>
              </GlassCard>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;