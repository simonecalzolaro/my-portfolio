import logo from '../assets/code.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-black border-t border-[#FDF5E6]/10 px-6 py-12 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          
          {/* LOGO & BRANDING */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="w-8 h-8 object-contain opacity-80" />
              <div className="ml-3 flex flex-col leading-none">
                <span className="text-[#FDF5E6] font-black text-xs uppercase tracking-tighter">Simone</span>
                <span className="text-[#FDF5E6] font-black text-xs uppercase tracking-tighter">Calzolaro</span>
              </div>
            </div>
            <p className="text-[#FDF5E6]/40 font-mono text-[10px] uppercase tracking-widest max-w-[200px]">
              Computer Science Engineer // Politecnico di Milano
            </p>
          </div>

          {/* SYSTEM INFO (Metadata style) */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-4 font-mono text-[9px] uppercase tracking-[0.2em]">
            <div className="space-y-1">
              <span className="text-[#dc2626]">Built With</span>
              <p className="text-[#FDF5E6]/60">React + Tailwind</p>
            </div>
            <div className="space-y-1">
              <span className="text-[#dc2626]">Deployment</span>
              <p className="text-[#FDF5E6]/60">Vercel</p>
            </div>
            <div className="space-y-1">
              <span className="text-[#dc2626]">Location</span>
              <p className="text-[#FDF5E6]/60">Milan, IT</p>
            </div>
            <div className="space-y-1">
              <span className="text-[#dc2626]">Status</span>
              <p className="text-[#FDF5E6]/60">Active_v2.0</p>
            </div>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="mt-16 pt-8 border-t border-[#FDF5E6]/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-[#FDF5E6]/20">
            © {currentYear} Simone Calzolaro // No Rights Reserved (Open Source)
          </span>
          
          <div className="flex gap-6">
            <a href="#about" className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#FDF5E6]/30 hover:text-[#dc2626] transition-colors">Back_to_top</a>
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#FDF5E6]/30 hover:text-[#dc2626] transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}