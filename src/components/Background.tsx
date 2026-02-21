export default function Background() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Panna Glow Shadows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#FDF5E6] opacity-[0.04] blur-[140px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#FDF5E6] opacity-[0.04] blur-[140px] rounded-full"></div>
      
      {/* Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px]"></div>
    </div>
  )
}