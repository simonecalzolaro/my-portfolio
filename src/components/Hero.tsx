export default function Hero() {
  const handleScroll = () => {
  const element = document.getElementById('projects');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-screen overflow-hidden pt-20">
      
      {/* SYSTEM HEADER - Stacks on Mobile */}
      <div className="absolute top-28 md:top-32 w-full max-w-7xl flex flex-col md:flex-row justify-between px-6 font-mono text-[9px] md:text-[11px] uppercase tracking-[0.4em] text-[#FDF5E6]/30 border-b border-[#FDF5E6]/5 pb-4 gap-2">
        <div className="flex flex-col gap-1">
          <span className="text-[#FDF5E6]/60 italic">User: Simone Calzolaro</span> 
          <span>Status: M.Sc. Student</span> 
        </div>
        <div className="md:text-right flex flex-col gap-1">
          <span className="text-[#dc2626]">Politecnico di Milano</span> 
          <span>Dept: Computer Science Engineering</span> 
        </div>
      </div>

      {/* MARQUEE - Back to the big sizes, but with an overflow-hidden parent */}
      <div className="w-full flex flex-col gap-4 py-16 md:py-20 border-y border-[#FDF5E6]/5 bg-[#FDF5E6]/[0.01] rotate-[-2deg]">
        <div className="flex whitespace-nowrap animate-marquee">
          {/* text-6xl for mobile, text-[12rem] for desktop */}
          <h1 className="text-6xl md:text-[12rem] font-black uppercase tracking-tighter leading-none text-[#FDF5E6] pr-12">
            Computer Engineer <span className="text-[#dc2626] italic">/</span> 
          </h1>
          <h1 className="text-6xl md:text-[12rem] font-black uppercase tracking-tighter leading-none text-[#FDF5E6] pr-12">
            Computer Engineer <span className="text-[#dc2626] italic">/</span> 
          </h1>
        </div>
      </div>

      {/* TECHNICAL TAGS - Wrap on mobile */}
      <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 px-6 font-mono text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-[#FDF5E6]/40 text-center">
        <span>// Side-Channel Analysis</span> 
        <span>// Unikernel Research</span> 
        <span>// Distributed Systems</span> 
        <span>// Malware Debugging</span> 
      </div>

      <div className="mt-16 flex gap-4">
        <button className="px-8 md:px-10 py-4 bg-[#FDF5E6] text-black font-black uppercase text-[10px] tracking-[0.3em] hover:bg-[#dc2626] hover:text-white transition-all duration-300" onClick={handleScroll}>
          Archive
        </button>
      </div>
    </section>
  )
}