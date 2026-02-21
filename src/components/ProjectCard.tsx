import { useState } from 'react';

interface ProjectProps {
  title: string;
  category: string;
  description: string;
  techStack: string[];
  link?: string; // Optional link
}

// Added 'link' to the props destructuring
export default function ProjectCard({ title, category, description, techStack, link }: ProjectProps) {  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group h-[400px] w-full perspective cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)} 
    >
      <div className={`relative h-full w-full transition-all duration-700 transform-style-3d 
        ${isFlipped ? 'rotate-y-180' : ''} 
        md:group-hover:rotate-y-180`}
      >
        
        {/* FRONT SIDE */}
        <div className="absolute inset-0 h-full w-full bg-[#FDF5E6]/5 border border-[#FDF5E6]/10 p-8 flex flex-col justify-between backface-hidden">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#dc2626]">{category}</span>
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mt-2 text-[#FDF5E6]">{title}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {techStack.map(tech => (
              <span key={tech} className="text-[9px] font-mono py-1 px-2 border border-[#FDF5E6]/20 text-[#FDF5E6]/40 uppercase">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="absolute inset-0 h-full w-full bg-[#dc2626] p-8 flex flex-col justify-center rotate-y-180 backface-hidden">
          <p className="text-white text-sm md:text-base font-medium leading-relaxed italic">
            "{description}"
          </p>
          
          <a 
            href={link || "#"} // Dynamically uses the GitHub link
            target="_blank"
            rel="noreferrer"
            className="mt-8 self-start px-6 py-2 border-2 border-white text-white font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-[#dc2626] transition-all"
            onClick={(e) => {
              e.stopPropagation(); // Stops the card from flipping back
            }}
          >
            View Source
          </a>
        </div>

      </div>
    </div>
  );
}