import ProjectCard from './ProjectCard';

export default function Projects() {
  const myProjects = [
    {
      title: "Unikernel Real-Time Virtualization",
      category: "Systems & Research",
      description: "Deployed Unikernels on Xen hypervisor to optimize resource isolation and derive worst-case response times for safety-critical Cyber-Physical Systems.",
      techStack: ["Xen", "Virtualization", "RTOS"],
      link: "https://github.com/simonecalzolaro/Unikernel.git" // Add your link here!
    },
    {
      title: "ML Side-Channel Attacks",
      category: "Cybersecurity",
      description: "Conducted hardware-level analysis on microcontrollers via EM traces; trained ML models to detect leakage and recover AES-128 secret keys.",
      techStack: ["Python", "Cryptography", "TensorFlow"],
      link: ""
    },
    {
      title: "Martian Terrain Segmentation",
      category: "Deep Learning",
      description: "Implemented an enhanced U-Net deep learning pipeline to segment high-resolution satellite imagery of Martian terrain into classes.",
      techStack: ["Python", "PyTorch", "Computer Vision"],
      link: "https://github.com/simonecalzolaro/ANN2D-Homework2_20242025.git"
    },
    {
      title: "Blood Cell Classification",
      category: "Medical AI",
      description: "Developed custom CNNs achieving >99% validation accuracy in classifying medical images for cancer detection.",
      techStack: ["TensorFlow", "Keras", "CNN"],
      link:"https://github.com/simonecalzolaro/ANN2D-Homework1_20242025.git"
    },
    {
      title: "MyShelfie: Distributed Game",
      category: "Distributed Systems",
      description: "Client-server Java application utilizing raw TCP socket programming and multi-threading for reliable synchronization.",
      techStack: ["Java", "TCP/IP", "Multithreading"],
      link:"https://github.com/simonecalzolaro/IS23-AM05.git"
    },
    {
      title: "Optimized Route Planning",
      category: "Algorithms",
      description: "Engineered a route planning and fuel optimization algorithm entirely in C for high-efficiency navigation.",
      techStack: ["C", "Optimization", "Algorithms"],
      link:""
    },
    {title: "BeatHub: Full Stack Web Application",
      category: "Web Development",
      description: "Engineered a client-server web application without backend or frontend frameworks, by mean of pure Java servlets and JDBC. The application is an online music playlist. Focus on the backend.",
      techStack:["Java","HTML","CSS","JavaScript"],
      link:"https://github.com/simonecalzolaro/ProgettoTIW_PlaylistMusicale.git"

    }
  ];

  return (
    <section id="projects" className="relative z-10 py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex items-baseline gap-4 mb-12">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[#FDF5E6]">Archive</h2>
        <span className="font-mono text-xs text-[#dc2626]">/001_projects</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}