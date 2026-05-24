import React from 'react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 font-sans antialiased pt-20"
    >
      {/* Cinematic Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[128px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[128px] pointer-events-none animate-pulse" style={{ animationDuration: '10s' }}></div>

      {/* Subtle Tech Grid Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdHRlcm4gZD0iTTAgNDBoNDBWMEgwem0zOS0zOXYzOEgxVjFoMzh6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDEpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+")`
        }}
      ></div>

      {/* Main Content Area - Personal Focus */}
      <main className="relative z-10 px-6 w-full max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Availability Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-700/50 backdrop-blur-md mb-8 shadow-lg">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
          </span>
          <span className="text-sm font-medium text-slate-300 tracking-wide">
            Available for Software Engineering Roles
          </span>
        </div>

        {/* Personal Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 text-white leading-[1.1]">
          Hi, I'm <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-teal-200 drop-shadow-sm pb-2">
            Mohiuddin Ahmad.
          </span>
        </h1>
        
        {/* Direct, "About Me" Copy */}
        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          I am an <strong className="text-slate-200 font-semibold">AI Engineer</strong> and <strong className="text-slate-200 font-semibold">Full-Stack Developer</strong>. I build decentralized marketplaces, integrate generative AI models, and architect scalable web applications.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-5 w-full sm:w-auto">
          <a 
            href="#experience" 
            className="px-8 py-4 rounded-full bg-slate-100 text-slate-950 font-bold text-base hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(45,212,191,0.3)]"
          >
            Explore My Work
          </a>
          <a 
            href="/Mohiuddin_Ahmad_Resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-slate-900/50 border border-slate-700 text-slate-300 font-semibold text-base hover:bg-slate-800 hover:text-white hover:border-slate-500 transition-all duration-300 backdrop-blur-sm"
          >
            Download Resume
          </a>
        </div>

      </main>
    </section>
  );
};

export default Hero;