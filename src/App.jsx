import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Brain, ExternalLink, Send, Briefcase, GraduationCap, Layers } from 'lucide-react';

// Massive brand logo import for the Tech Tree
import {
  SiReact, SiNodedotjs, SiPython, SiDjango, SiSpringboot, SiNextdotjs,
  SiTailwindcss, SiMysql, SiPostgresql, SiMongodb, SiSupabase,
  SiDocker, SiGit, SiPostman, SiFigma,
  SiTensorflow, SiNumpy, SiScikitlearn, SiPandas, SiGoogle, SiAnthropic, SiHackerrank, SiDuolingo, SiJavascript,
  SiGooglecloud,
} from 'react-icons/si';
import { FaGithub, FaLinkedin, FaAws as SiAmazonaws, FaCss3 as SiCss3, FaJava as SiJava, FaMicrosoft as SiMicrosoft } from 'react-icons/fa6';
import { TbBrandVscode as SiVisualstudiocode } from 'react-icons/tb';
import { FaLanguage, FaRobot } from 'react-icons/fa';
import { GrOracle } from 'react-icons/gr';
import Navbar from './components/layout/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const experiences = [
  {
    role: 'Cloud Computing Intern',
    company: 'EduSkills Foundation',
    date: 'Apr 2026 - Present',
    desc: 'Pursuing an 8-week AICTE - EduSkills Virtual Internship Program in Google Cloud Computing Foundations.',
    tech: [SiGooglecloud],
  },
  {
    role: 'Founder & Lead Developer',
    company: 'Barter Verse',
    date: 'Aug 2024 - Present',
    desc: 'Architected a decentralized marketplace platform. Designed backend for an AI-powered Trade Matching system utilizing machine learning to automate complex trade recommendations.',
    tech: [SiJava, SiMysql, SiAnthropic],
  },
];

const education = [
  {
    degree: 'BTech, Artificial Intelligence',
    school: 'KL University, Hyderabad',
    date: '2024 - 2028',
    icons: [SiPython, SiMysql],
  },
  {
    degree: 'Intermediate, Science (PCM)',
    school: 'Bethany Convent Senior Secondary School, Prayagraj',
    date: 'Apr 2010 - May 2024',
    icons: [SiPython],
  },
];

const categories = ["All", "Full Stack", "Backend", "AI", "Data Science", "Machine Learning"];

const filterableProjects = [
  {
    id: 1,
    title: "Barter Verse",
    description: "A decentralized marketplace platform utilizing machine learning for complex trade recommendations and smart escrow workflows.",
    image: "/barterverse.png",
    categories: ["Full Stack", "AI", "Backend"],
    tech: ["Java", "Spring Boot", "Machine Learning", "SQL"],
    github: "https://github.com/yourusername/barter-verse",
    demo: "https://www.barterverse.in"
  },
  {
    id: 2,
    title: "Sustainable Resource API",
    description: "Backend conceptual framework enabling sustainable resource sharing through a secure API with real-time negotiation architectures.",
    image: "/api-project.jpg",
    categories: ["Backend", "Data Science"],
    tech: ["Python", "AWS", "PostgreSQL", "Docker"],
    github: "https://github.com/yourusername/resource-api",
    demo: "https://api-demo.barterverse.in"
  },
  {
    id: 3,
    title: "Trade Matching Algorithm",
    description: "A standalone machine learning model trained to analyze user preferences and output high-probability barter matches.",
    image: "/ml-project.jpg",
    categories: ["AI", "Machine Learning"],
    tech: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
    github: "https://github.com/yourusername/trade-matching-ml",
    demo: "https://github.com/yourusername/trade-matching-ml"
  },
  {
    id: 4,
    title: "Titanic Survival Prediction",
    description:
      "Binary classification model to predict Titanic passenger survivability using feature engineering (titles, family size) and ensemble ML.",
    image: "/avatar.png",
    categories: ["Data Science", "Machine Learning", "AI"],
    tech: ["Python", "Pandas", "NumPy", "Scikit-Learn", "XGBoost", "Logistic Regression", "Random Forest", "Matplotlib", "Seaborn"],
    github: "https://github.com/mohiuddin7286/titanic",
    demo: "https://titanic-ek8kwv5wogrig8jf74fohe.streamlit.app/"
  },
  {
    id: 5,
    title: "Real Estate House Price Prediction",
    description:
      "Regression pipeline to estimate home sale prices from high-dimensional features with robust preprocessing and gradient boosting ensembles.",
    image: "/avatar.png",
    categories: ["Data Science", "Machine Learning"],
    tech: ["Python", "Pandas", "NumPy", "Scikit-Learn", "CatBoost", "XGBoost", "Matplotlib"],
    github: "https://github.com/mohiuddin7286/house_prediction",
    demo: "https://houseprediction-bgns8fnwuuasqstveg6jg2.streamlit.app/"
  },
  {
    id: 6,
    title: "Iris Species Classification",
    description:
      "Multi-class classification of Iris species using EDA + scaling and ML models like SVM and KNN, validated via confusion matrix.",
    image: "/avatar.png",
    categories: ["Data Science", "Machine Learning", "AI"],
    tech: ["Python", "Pandas", "Seaborn", "Matplotlib", "Scikit-Learn", "SVM", "KNN", "Decision Tree"],
    github: "https://github.com/mohiuddin7286/iris",
    demo: "https://ktfgoekn9fd3esmc4qlksg.streamlit.app/"
  }
];


const certifications = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', date: 'May 2026', id: 'Od178b4be8b34a10aef327aa428a9a99', icon: SiAmazonaws, color: 'text-[#FF9900]', image: '/aws-cert.png', verifyLink: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/0d178b4be8b34a10aef327aa428a9a99' },
  { name: 'AWS Cloud Practitioner Essentials', issuer: 'Amazon Web Services', date: 'May 2026', id: '7226be1a-602f...', icon: SiAmazonaws, color: 'text-[#FF9900]', image: '/aws-cloud-practitioner-essentials.jpg', verifyLink: 'https://skillbuilder.aws/7226be1a-602f-47d1-a8e5-ef838d9cd6d4' },
  { name: 'AI Fundamentals', issuer: 'Google', date: 'May 2026', id: 'TR8TN1I3NZZU', icon: SiGoogle, color: 'text-[#4285F4]', image: '/google-ai.png', verifyLink: 'https://www.coursera.org/account/accomplishments/records/TR8TN1I3NZZU' },
  { name: 'AI Fluency Framework & Foundations', issuer: 'Anthropic', date: 'Apr 2026', id: '2itp495yemne', icon: SiAnthropic, color: 'text-[#D97757]', image: '/anthropic-ai-fluency.png', verifyLink: 'https://verify.skilljar.com/c/2itp495yemne' },
  { name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate', issuer: 'Oracle', date: 'Apr 2026', id: 'Verified', icon: GrOracle, color: 'text-[#D97757]', image: '/oracle-ai.png', verifyLink: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=15A6B1B4CD704677CCEF07E5F1612573DE63E0F7788DDA1E2F1C69E62BC56FA5' },
  { name: 'Introduction to generative AI and agents', issuer: 'Microsoft', date: 'Mar 2026', id: 'A3F7C1310F22D39F', icon: SiMicrosoft, color: 'text-[#00A4EF]', image: '/microsoft-gen-ai-agents.png', verifyLink: 'https://learn.microsoft.com/api/achievements/share/en-us/mohiuddinahmad-2535/9RD5XWWU?sharingId=A3F7C1310F22D39F' },
  { name: 'Introduction to AI concepts', issuer: 'Microsoft', date: 'Mar 2026', id: 'Verified', icon: SiMicrosoft, color: 'text-[#00A4EF]', image: '/microsoft-ai-concepts.png', verifyLink: 'https://learn.microsoft.com/api/achievements/share/en-us/mohiuddinahmad-2535/UAJLY2N3?sharingId=A3F7C1310F22D39F' },
  { name: 'Advanced Automation Professional', issuer: 'Automation Anywhere', date: 'Dec 2025', id: 'Verified', icon: FaRobot, color: 'text-[#FBB03B]', image: '/automation-anywhere.png', verifyLink: 'https://certificates.automationanywhere.com/2981df51-5302-4232-ab6a-291505aabe60#acc.B2qWNb0R' },
  { name: 'Design and Analysis of Algorithms', issuer: 'CodeChef', date: 'Apr 2026', id: '9b7d675', icon: SiPython, color: 'text-[#3776AB]', image: '/codechef-daa.png', verifyLink: 'https://www.codechef.com/certificates/public/9b7d675' },
  { name: 'SQL (Basic)', issuer: 'HackerRank', date: 'Feb 2026', id: '3ac5b10a7300', icon: SiHackerrank, color: 'text-[#00EA64]', image: '/hackerrank-sql-basic.png', verifyLink: 'https://www.hackerrank.com/certificates/3ac5b10a7300' },
  { name: 'Problem Solving in Python', issuer: 'CodeChef', date: 'Dec 2024', id: '3bbda21', icon: SiPython, color: 'text-[#3776AB]', image: '/codechef-python-problem-solving.png', verifyLink: 'https://www.codechef.com/certificates/public/3bbda21' },
  { name: 'Practice Python', issuer: 'CodeChef', date: 'Nov 2024', id: 'e1c43ee', icon: SiPython, color: 'text-[#3776AB]', image: '/codechef-practice-python.png', verifyLink: 'https://www.codechef.com/certificates/public/e1c43ee' },
  { name: 'Introduction to Programming Using Python', issuer: 'CodeChef', date: 'Oct 2024', id: 'd26b29d', icon: SiPython, color: 'text-[#3776AB]', image: '/codechef-intro-python.png', verifyLink: 'https://www.codechef.com/certificates/public/d26b29d' },
  { name: '500 Difficulty Rating', issuer: 'CodeChef', date: 'Oct 2024', id: '3a1ae02', icon: SiPython, color: 'text-[#3776AB]', image: '/codechef-500-rating.png', verifyLink: 'https://www.codechef.com/certificates/public/3a1ae02' },
];

const skillTreeData = [
  {
    category: 'Core Architecture & Leadership',
    items: ['Full Stack Development', 'Application Architecture', 'Strategic Planning', 'Agile Project Management', 'Critical Thinking', 'Leadership & Team Coordination'],
    side: 'left',
  },
  {
    category: 'Backend & APIs',
    items: ['Java', 'Spring Boot', 'Node.js', 'Python', 'Django', 'REST API'],
    side: 'right',
  },
  {
    category: 'Frontend & Mobile',
    items: ['React', 'Next.js', 'React Native', 'Tailwind CSS', 'CSS3'],
    side: 'left',
  },
  {
    category: 'Data & Artificial Intelligence',
    items: ['AI & Machine Learning Concepts', 'TensorFlow', 'Scikit-learn', 'NumPy', 'Pandas', 'Data Analysis'],
    side: 'right',
  },
  {
    category: 'Cloud & Infrastructure',
    items: ['Cloud Computing', 'AWS', 'Docker', 'SQL & Database Management', 'MySQL', 'PostgreSQL', 'MongoDB', 'Supabase'],
    side: 'left',
  },
  {
    category: 'Tools & Workflow',
    items: ['Git', 'VS Code', 'Postman', 'Figma'],
    side: 'right',
  },
];

const App = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-100 font-sans relative overflow-x-hidden selection:bg-orange-500 selection:text-white pb-20">
      <div className="fixed top-1/2 right-[-10%] -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <Navbar />

      <main className="max-w-7xl mx-auto px-6 mt-12 relative z-10 space-y-32">
        <section id="hero" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-2">
              <p className="text-xl text-slate-300 font-medium">
                Hey, I am <span className="text-orange-500">Mohiuddin Ahmad</span>
              </p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                AI & Cloud <br /> Developer
              </h1>
              <p className="text-slate-400 text-lg max-w-md pt-4">
                Architecting scalable applications, decentralized marketplace systems, and AI-powered automation.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/mohiuddin-ahmad-a53816380/"
                target="_blank"
                rel="noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg shadow-orange-500/25 inline-flex items-center justify-center"
              >
                Hire me
              </a>
            </div>

            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-6 rounded-3xl max-w-sm mt-12 shadow-2xl relative">
              <div className="absolute -top-4 -left-4 text-orange-500/20 text-6xl font-serif">"</div>
              <p className="text-slate-300 text-sm leading-relaxed relative z-10">
                Founder & Lead Developer of Barter Verse. Built an AI-powered Trade Matching system using machine learning concepts for decentralized peer-to-peer trading.
              </p>
              <div className="flex items-center gap-3 mt-4 relative z-10">
                <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center border border-orange-500/30">
                  <Brain size={18} className="text-orange-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Barter Verse</p>
                  <p className="text-xs text-slate-400">Live Project</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[600px] flex items-center justify-center hidden lg:flex">
            <div className="absolute w-[400px] h-[400px] border border-white/5 rounded-full"></div>
            <div className="absolute w-[600px] h-[600px] border border-white/5 rounded-full"></div>
            <div className="absolute w-[800px] h-[800px] border border-white/5 rounded-full"></div>

            <div className="absolute top-[15%] right-[20%] bg-[#1a1a1a] p-3 rounded-2xl border border-white/10 shadow-xl rotate-12">
              <SiAmazonaws className="text-orange-400 text-3xl" />
            </div>
            <div className="absolute bottom-[25%] left-[10%] bg-[#1a1a1a] p-3 rounded-2xl border border-white/10 shadow-xl -rotate-12">
              <SiJava className="text-blue-400 text-3xl" />
            </div>
            <div className="absolute top-[40%] left-[5%] bg-[#1a1a1a] p-3 rounded-2xl border border-white/10 shadow-xl -rotate-6">
              <SiMysql className="text-emerald-400 text-3xl" />
            </div>

            <div className="relative z-20 w-full h-full flex items-end justify-center pb-10">
              <img
                src="/avatar.png"
                alt="Mohiuddin Ahmad"
                className="h-[500px] object-contain drop-shadow-[0_20px_50px_rgba(249,115,22,0.3)] z-20 relative animate-slide-up"
                style={{ animationDelay: '0.4s' }}
              />
              <div className="absolute bottom-10 w-80 h-80 bg-gradient-to-t from-orange-500/20 to-transparent rounded-full border border-orange-500/20 backdrop-blur-sm pointer-events-none"></div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold flex items-center gap-3 border-b border-white/10 pb-4">
              <Briefcase className="text-orange-500" /> Experience
            </h3>
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-orange-500/30 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-orange-500/10 transition-colors pointer-events-none"></div>
                <div className="flex justify-between items-start mb-2 relative z-10">
                  <div>
                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                    <p className="text-orange-400 text-sm font-medium">{exp.company}</p>
                  </div>
                  <span className="text-xs text-slate-500 font-mono bg-white/5 px-2 py-1 rounded">{exp.date}</span>
                </div>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed relative z-10">{exp.desc}</p>
                <div className="flex gap-3 mt-4 relative z-10">
                  {exp.tech.map((Icon, i) => <Icon key={i} size={20} className="text-slate-500 hover:text-white transition-colors" />)}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold flex items-center gap-3 border-b border-white/10 pb-4">
              <GraduationCap className="text-orange-500" /> Education
            </h3>
            {education.map((edu, idx) => (
              <div key={idx} className="bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-orange-500/30 transition-all">
                <h4 className="text-lg font-bold text-white">{edu.school}</h4>
                <p className="text-orange-400 text-sm font-medium mt-1">{edu.degree}</p>
                <p className="text-xs text-slate-500 font-mono mt-2">{edu.date}</p>
                <div className="flex gap-3 mt-4 pt-4 border-t border-white/5">
                  <span className="text-xs text-slate-500 mr-2 flex items-center">Core Stack:</span>
                  {edu.icons.map((Icon, i) => <Icon key={i} size={16} className="text-slate-400" />)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SKILL TREE SECTION --- */}
        <section id="skills" className="animate-slide-up relative mt-32" style={{ animationDelay: '0.3s' }}>
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight">Tech <span className="text-orange-500">& Skills Tree</span></h2>
            <p className="text-slate-400 mt-2 max-w-2xl mx-auto">A comprehensive map of my technical ecosystem and core competencies.</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-[20px] md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-orange-500/80 via-orange-500/20 to-transparent"></div>

            <div className="space-y-12">
              {skillTreeData.map((node, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row items-center justify-between w-full ${node.side === 'left' ? 'md:flex-row-reverse' : ''}`}>
                  <div className="hidden md:block w-5/12"></div>
                  <div className="absolute left-[15px] md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_10px_#f97316] z-10 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full border border-orange-500/30 animate-ping absolute"></div>
                  </div>
                  <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 w-[8%] h-px bg-orange-500/30 ${node.side === 'left' ? 'right-[46%]' : 'left-[46%]'}`}></div>
                  <div className="w-full md:w-5/12 pl-12 md:pl-0">
                    <div className="bg-[#111]/80 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:border-orange-500/40 transition-all duration-300 shadow-2xl relative overflow-hidden group">
                      <div className={`absolute top-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl -translate-y-1/2 pointer-events-none transition-colors duration-500 group-hover:bg-orange-500/10 ${node.side === 'left' ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}`}></div>
                      <h3 className="text-xl font-bold text-white mb-6 tracking-wide border-b border-white/10 pb-3">{node.category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {node.items.map((item, i) => (
                          <span
                            key={i}
                            className="bg-white/5 border border-white/5 text-slate-300 text-sm px-3 py-1.5 rounded-md hover:text-white hover:border-orange-500/30 transition-colors"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FILTERABLE PROJECTS GALLERY --- */}
        <section id="projects" className="animate-slide-up relative mt-32" style={{ animationDelay: '0.35s' }}>
          
          {/* Header */}
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-4xl font-bold tracking-tight">Featured <span className="text-orange-500">Projects</span></h2>
            <p className="text-slate-400 mt-2">Filter by domain to explore specific architectures and implementations.</p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === category
                    ? "bg-orange-500 text-white border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                    : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Animated Project Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filterableProjects
                .filter((project) => activeCategory === "All" || project.categories.includes(activeCategory))
                .map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
                    className="bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden flex flex-col hover:border-orange-500/30 transition-colors duration-500 shadow-2xl group"
                  >
                    
                    {/* Project Screenshot */}
                    <div className="h-56 overflow-hidden bg-[#111] border-b border-white/5 relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                        {project.description}
                      </p>

                      {/* Tech Stack (Words Only) */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="text-xs font-medium bg-white/5 border border-white/10 text-slate-300 px-2.5 py-1 rounded-md">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons (GitHub & Demo) */}
                      <div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-white/10">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/5 transition-colors text-sm font-semibold"
                        >
                          <FaGithub size={16} /> Code
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 hover:bg-orange-500 hover:text-white transition-all duration-300 text-sm font-semibold hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                        >
                          <ExternalLink size={16} /> Live Demo
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>
        </section>

        <section id="certifications" className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold tracking-tight">Licenses & <span className="text-orange-500">Certifications</span></h2>
              <p className="text-slate-400 mt-2">Swipe to explore verified credentials across Cloud and AI architecture.</p>
            </div>
          </div>

          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            initialSlide={1}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 150,
              modifier: 1.5,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="w-full py-12"
          >
            {certifications.map((cert, idx) => (
              <SwiperSlide key={idx} className="w-[350px] md:w-[400px]">
                <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl h-[450px]">
                  <div className="h-48 bg-[#1a1a1a] relative border-b border-white/5 flex items-center justify-center p-2">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="max-h-full max-w-full object-contain rounded-lg drop-shadow-md"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/400x250/111/444?text=Certificate+Preview';
                      }}
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h4 className="font-bold text-lg text-white leading-tight mb-1">{cert.name}</h4>
                    <p className="text-orange-400/80 text-sm font-medium">{cert.issuer}</p>

                    <div className="mt-4 space-y-1">
                      <p className="text-xs text-slate-400">Issued: <span className="text-slate-300">{cert.date}</span></p>
                      <p className="text-xs text-slate-400 font-mono truncate">ID: {cert.id}</p>
                    </div>

                    <div className="mt-auto pt-6">
                      <a
                        href={cert.verifyLink}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full flex items-center justify-center gap-2 text-sm font-semibold bg-white/5 text-white hover:bg-orange-500 hover:text-white py-3 rounded-xl transition-all duration-300 border border-white/10 hover:border-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.3)]"
                      >
                        Verify Credential <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </main>

      <footer className="border-t border-white/10 mt-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Mohiuddin Ahmad. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/mohiuddin7286" className="text-slate-500 hover:text-orange-400 transition-colors" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/mohiuddin-ahmad-a53816380/" className="text-slate-500 hover:text-orange-400 transition-colors" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
