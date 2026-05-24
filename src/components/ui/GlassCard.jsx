import React from 'react';

const GlassCard = ({ children, className = "" }) => {
  return (
    <div className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;