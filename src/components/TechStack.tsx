
const stack = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C", icon: "https://cdn.simpleicons.org/c/FDF5E6" }, // [cite: 25]
      { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus/FDF5E6" }, // [cite: 25]
      { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/FDF5E6" }, // [cite: 25]
      { name: "Python", icon: "https://cdn.simpleicons.org/python/FDF5E6" }, // [cite: 25]
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/FDF5E6" }, // [cite: 25]
      { name: "SQL", icon: "https://cdn.simpleicons.org/sqlite/FDF5E6" }, // [cite: 25]
      { name: "Bash", icon: "https://cdn.simpleicons.org/gnubash/FDF5E6" }, // [cite: 25]
      { name: "Assembly", icon: "https://cdn.simpleicons.org/assemblyscript/FDF5E6" }, // [cite: 25]
    ]
  },
  {
    category: "AI, Machine Learning & Data",
    skills: [
      { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow/FDF5E6" }, // 
      { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch/FDF5E6" }, // 
      { name: "NumPy", icon: "https://cdn.simpleicons.org/numpy/FDF5E6" }, // 
      { name: "Pandas", icon: "https://cdn.simpleicons.org/pandas/FDF5E6" }, // 
      { name: "Scikit-learn", icon: "https://cdn.simpleicons.org/scikitlearn/FDF5E6" }, // 
      { name: "Spark", icon: "https://cdn.simpleicons.org/apachespark/FDF5E6" }, 
      { name: "Kafka", icon: "https://cdn.simpleicons.org/apachekafka/FDF5E6" },
      { name: "Python-MIP", icon: "https://cdn.simpleicons.org/python/FDF5E6" }, // 
    ]
  },
  {
    category: "Systems, Security & DevOps",
    skills: [
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/FDF5E6" }, // [cite: 27]
      { name: "Git", icon: "https://cdn.simpleicons.org/git/FDF5E6" }, // [cite: 27]
      { name: "TCP/IP Networking", icon: "https://cdn.simpleicons.org/wireshark/FDF5E6" }, // [cite: 27]
      { name: "Virtualization", icon: "https://cdn.simpleicons.org/virtualbox/FDF5E6" }, // [cite: 27, 18]
      { name: "Binary Exploitation", icon: "https://cdn.simpleicons.org/linux/FDF5E6" }, // 
    ]
  },
  {
    category: "Operating Systems",
    skills: [
      { name: "Ubuntu", icon: "https://cdn.simpleicons.org/ubuntu/FDF5E6" }, // [cite: 27]
      { name: "macOS", icon: "https://cdn.simpleicons.org/apple/FDF5E6" },
      { name: "Windows", icon: "https://cdn.simpleicons.org/windows11/FDF5E6" },
      { name: "Kali Linux", icon: "https://cdn.simpleicons.org/kalilinux/FDF5E6" }, // [cite: 27]
      { name: "Debian", icon: "https://cdn.simpleicons.org/debian/FDF5E6" }, // [cite: 27]
    ]
  }
];

export default function TechStack() {
  return (
    <section id="stack" className="relative z-10 py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-panna/5">
      <div className="flex items-baseline gap-4 mb-16">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-panna">Tech Stack</h2>
        <span className="font-mono text-xs text-[#dc2626]">/003_skills</span>
      </div>

      <div className="space-y-20">
        {stack.map((group) => (
          <div key={group.category} className="space-y-8">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] text-panna/30 border-l border-[#dc2626] pl-4 font-bold">
              {group.category}
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {group.skills.map((skill) => (
                <div key={skill.name} className="group flex flex-col items-center justify-center p-4 bg-panna/[0.02] border border-panna/5 rounded-xl transition-all duration-300 hover:border-[#dc2626]/40 hover:bg-panna/[0.05]">
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-8 h-8 opacity-40 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                    loading="lazy"
                  />
                  <span className="mt-4 font-mono text-[8px] text-center uppercase tracking-widest text-panna/30 group-hover:text-panna transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}