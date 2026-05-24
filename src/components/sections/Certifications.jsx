import React from 'react';
import GlassCard from '../ui/GlassCard';

const Certifications = () => {
  // Replace the "link" values with your actual credential URLs from LinkedIn
  // Place your logo images inside the public/certs/ folder (e.g., public/certs/aws.png)
  const certs = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "May 2026",
      id: "0d178b4be8...",
      image: "/certs/aws.png",
      link: "https://www.credly.com/badges/your-aws-link"
    },
    {
      title: "Google AI Fundamentals",
      issuer: "Google",
      date: "May 2026",
      id: "TR8TN1I3NZZU",
      image: "/certs/google.png",
      link: "https://google.credential-link.com"
    },
    {
      title: "OCI 2025 AI Foundations Associate",
      issuer: "Oracle",
      date: "Apr 2026",
      id: "103442057OCI",
      image: "/certs/oracle.png",
      link: "https://oracle.credential-link.com"
    },
    {
      title: "AI Fluency Framework & Foundations",
      issuer: "Anthropic",
      date: "Apr 2026",
      id: "2itp495yemne",
      image: "/certs/anthropic.png",
      link: "https://anthropic.credential-link.com"
    },
    {
      title: "Introduction to AI Concepts",
      issuer: "Microsoft",
      date: "Mar 2026",
      id: "Verified",
      image: "/certs/microsoft.png",
      link: "https://microsoft.credential-link.com"
    },
    {
      title: "Generative AI and Agents",
      issuer: "Microsoft",
      date: "Mar 2026",
      id: "Verified",
      image: "/certs/microsoft.png",
      link: "https://microsoft.credential-link.com"
    },
    {
      title: "Design & Analysis of Algorithms",
      issuer: "CodeChef",
      date: "Apr 2026",
      id: "9b7d675",
      image: "/certs/codechef.png",
      link: "https://codechef.com/certificates/9b7d675"
    },
    {
      title: "Problem Solving in Python",
      issuer: "CodeChef",
      date: "Dec 2024",
      id: "3bbda21",
      image: "/certs/codechef.png",
      link: "https://codechef.com/certificates/3bbda21"
    },
    {
      title: "Practice Python",
      issuer: "CodeChef",
      date: "Nov 2024",
      id: "e1c43ee",
      image: "/certs/codechef.png",
      link: "https://codechef.com/certificates/e1c43ee"
    },
    {
      title: "Intro to Programming Using Python",
      issuer: "CodeChef",
      date: "Oct 2024",
      id: "d26b29d",
      image: "/certs/codechef.png",
      link: "https://codechef.com/certificates/d26b29d"
    },
    {
      title: "500 Difficulty Rating",
      issuer: "CodeChef",
      date: "Oct 2024",
      id: "3a1ae02",
      image: "/certs/codechef.png",
      link: "https://codechef.com/certificates/3a1ae02"
    },
    {
      title: "SQL (Basic)",
      issuer: "HackerRank",
      date: "Feb 2026",
      id: "3ac5b10a7300",
      image: "/certs/hackerrank.png",
      link: "https://hackerrank.com/certificates/3ac5b10a7300"
    },
    {
      title: "Advanced Automation Professional",
      issuer: "Automation Anywhere",
      date: "Dec 2025",
      id: "Verified",
      image: "/certs/automation.png",
      link: "https://automationanywhere.credential-link.com"
    },
    {
      title: "Russian Language (0 to A1)",
      issuer: "Cursa",
      date: "Apr 2026",
      id: "05da1be6a16",
      image: "/certs/cursa.png",
      link: "https://cursa.credential-link.com"
    }
  ];

  return (
    <section id="certifications" className="py-24 px-6 relative z-10 w-full max-w-6xl mx-auto">

      {/* Header Section */}
      <div className="mb-16 text-center md:text-right flex flex-col items-center md:items-end">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Credentials</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full"></div>
        <p className="mt-4 text-slate-400 max-w-xl text-sm md:text-base">
          A comprehensive portfolio of industry-recognized certifications validating expertise across cloud architecture, artificial intelligence, and algorithmic engineering.
        </p>
      </div>

      {/* The Dense Interactive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {certs.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group h-full focus:outline-none"
          >
            <GlassCard className="p-5 h-full border-white/5 hover:border-white/20 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden">

              {/* Subtle hover glow behind the card */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-colors duration-500 pointer-events-none"></div>

              <div>
                {/* Logo Image Container */}
                <div className="h-12 w-12 mb-5 rounded-lg bg-white/10 p-2 flex items-center justify-center border border-white/10 backdrop-blur-md">
                  <img
                    src={cert.image}
                    alt={`${cert.issuer} logo`}
                    className="max-h-full max-w-full object-contain drop-shadow-md"
                    // Fallback to a generic award icon if the image isn't found
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSIjOTRhM2I4Ij48cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNOSAxMmwyIDIgNC00TTcuODM1IDQuNjk3YTMuNDIgMy40MiAwIDAwMS45NDYtLjgwNiAzLjQyIDMuNDIgMCAwMTQgMCAzLjQyIDMuNDIgMCAwMDEuOTQ2LjgwNiAzLjQyIDMuNDIgMCAwMTMuMTM4IDMuMTM4IDMuNDIgMy40MiAwIDAwLjgwNiAxLjk0NiAzLjQyIDMuNDIgMCAwMTAgNCAzLjQyIDMuNDIgMCAwMC0uODA2IDEuOTQ2IDMuNDIgMy40MiAwIDAxLTMuMTM4IDMuMTM4IDMuNDIgMy40MiAwIDAwLTEuOTQ2LjgwNiAzLjQyIDMuNDIgMCAwMS00IDAgMy40MiAzLjQyIDAgMDAtMS45NDYtLjgwNiAzLjQyIDMuNDIgMCAwMS0zLjEzOC0zLjEzOCAzLjQyIDMuNDIgMCAwMC0uODA2LTEuOTQ2IDMuNDIgMy40MiAwIDAxMC00IDMuNDIgMy40MiAwIDAwLjgwNi0xLjk0NiAzLjQyIDMuNDIgMCAwMTMuMTM4LTMuMTM4eiIvPjwvc3ZnPg==";
                    }}
                  />
                </div>

                <h3 className="text-base font-bold text-white leading-snug mb-1 group-hover:text-blue-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-400 font-medium mb-4">
                  {cert.issuer}
                </p>
              </div>

              <div className="mt-auto pt-4 border-t border-white/5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-slate-500 font-mono tracking-wider truncate mr-2">
                    ID: {cert.id}
                  </span>
                  <span className="text-[10px] text-slate-300 bg-slate-800 px-2 py-1 rounded-md whitespace-nowrap">
                    {cert.date}
                  </span>
                </div>
              </div>

              {/* External Link Icon (appears on hover) */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>

            </GlassCard>
          </a>
        ))}
      </div>

    </section>
  );
};

export default Certifications;