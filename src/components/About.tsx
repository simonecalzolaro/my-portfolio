export default function About() {
  const skills = [
    { category: "Languages", items: ["C", "C++", "Java", "Python", "Assembly", "Bash"] },
    { category: "Security", items: ["Reverse Engineering", "Binary Exploitation", "Cryptography"] },
    { category: "DevOps", items: ["Linux", "Docker", "Git", "TCP/IP Networking"] }
  ];

  return (
    <section id="about" className="relative z-10 py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#FDF5E6]/5">
      <div className="flex items-baseline gap-4 mb-16">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[#FDF5E6]">Profile</h2>
        <span className="font-mono text-xs text-[#dc2626]">/002_about</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-6">
          <p className="text-xl md:text-2xl text-[#FDF5E6] font-medium leading-relaxed">
            I am a Computer Science Engineering student currently pursuing my Master's at <span className="text-[#dc2626]">Politecnico di Milano</span>. My experience spans full-stack development, low-level programming, and hardware/software security.
          </p>
          <p className="text-[#FDF5E6]/50 leading-relaxed">
Combines technical versatility with leadership and discipline developed as a professional sports team captain and civic volunteer.          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="space-y-4">
              <h4 className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#dc2626] font-bold">
                {skillGroup.category}
              </h4>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="text-[#FDF5E6]/70 font-mono text-sm tracking-tight border-l border-[#dc2626]/30 pl-3">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}