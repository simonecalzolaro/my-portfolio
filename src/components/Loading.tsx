import { useState, useEffect } from 'react'
import logo from '../assets/code.png'

// 1. Define the type for your props
interface LoadingProps {
  onComplete?: () => void;
}

// 2. Apply it to the function
export default function Loading({ onComplete }: LoadingProps) {
  const [progress, setProgress] = useState(0)
  
  // 2. THE STATE MACHINE: We added the 'expanding' phase
  const [phase, setPhase] = useState('loading') 

  // ENGINE 1: The Number Counter
  useEffect(() => {
    if (phase !== 'loading') return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setPhase('erasing'), 300)
          return 100
        }
        return prev + 1
      })
    }, 10) 
    
    return () => clearInterval(timer)
  }, [phase])

  // ENGINE 2: The Cursor & Expansion Sequence
  useEffect(() => {
    if (phase === 'erasing') {
      setTimeout(() => setPhase('writing'), 500)
    } else if (phase === 'writing') {
      setTimeout(() => setPhase('done'), 500)
    } else if (phase === 'done') {
      // Wait 1 second after typing WELCOME, then trigger the expansion
      setTimeout(() => setPhase('expanding'), 100)
    } else if (phase === 'expanding') {
      // The CSS expansion takes 700ms. Wait exactly that long, then tell App.jsx to swap to Home.
      setTimeout(() => {
        if (onComplete) onComplete()
      }, 700)
    }
  }, [phase, onComplete])

  // DYNAMIC WIDTHS
  const loadingWidth = '250px';
  const zeroWidth = '0px';
  const welcomeWidth = '145px';

  // Include 'expanding' in the welcome width so the text doesn't jitter before fading out
  const currentWidth = phase === 'loading' ? loadingWidth : 
                       phase === 'erasing' ? zeroWidth : 
                       (phase === 'writing' || phase === 'done' || phase === 'expanding') ? welcomeWidth : loadingWidth;

  // Boolean flag to make our Tailwind classes easier to read
  const isExpanding = phase === 'expanding';

  return (
    <div className="relative min-h-screen w-full bg-panna flex items-center justify-center overflow-hidden">

      {/* 1. TOP-LEFT LOGO: PNG Version */}
      <div 
        className={`fixed top-6 left-6 md:top-10 md:left-10 z-40 transition-all duration-700 ease-in-out flex items-center
          ${isExpanding ? 'opacity-0 -translate-y-10 scale-95' : 'opacity-100 translate-y-0 scale-100'}`}
      >
        <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
          <img 
            src={logo} 
            alt="Logo" 
            className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(220,38,38,0.3)]"
          />
        </div>
        
        <div className="ml-3 flex flex-col justify-center leading-none">
          <span className="text-black font-black text-sm md:text-lg uppercase tracking-tighter">
            Simone
          </span>
          <span className="text-black font-black text-sm md:text-lg uppercase tracking-tighter">
            Calzolaro
          </span>
        </div>
      </div>

      {/* THE BACKGROUND MARQUEE: Fades out during expansion */}
      <div className={`absolute w-full top-1/2 left-0 -translate-y-1/2 py-8 z-0 flex items-center transition-opacity duration-700 ${isExpanding ? 'opacity-0' : 'opacity-50'}`}>
        <h1 className="text-black font-black text-8xl uppercase tracking-widest whitespace-nowrap animate-marquee">
          Computer Engineer • Computer Engineer • Computer Engineer • Computer Engineer 
        </h1>
      </div>

      {/* THE BUTTON: Expands to 100vw/100vh during the 'expanding' phase */}
      <div 
        className={`relative z-10 bg-black flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)]
          ${isExpanding 
            ? 'w-[100vw] h-[100vh] rounded-none border-0 shadow-none' 
            : 'w-[340px] h-[100px] border-4 border-neon-red rounded-full shadow-[0_0_60px_rgba(220,38,38,0.6)] backdrop-blur-md'
          }`}
      >
        
        {/* THE TERMINAL SCREEN: Fades to black (opacity-0) as the box explodes */}
        <div className={`relative flex items-center h-[40px] transition-opacity duration-300 ${isExpanding ? 'opacity-0' : 'opacity-100'}`} style={{ width: loadingWidth }}>
          
          <div 
            className="overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out h-full flex items-center"
            style={{ width: currentWidth }}
          >
            <span className="text-panna font-mono font-black text-3xl tracking-widest">
              {(phase === 'loading' || phase === 'erasing') ? `Loading: ${progress}%` : 'WELCOME'}
            </span>
          </div>

          <span 
            className={`absolute h-[1.2em] w-[4px] bg-panna transition-all duration-500 ease-in-out
              ${(phase === 'loading' && progress < 100) || phase === 'done' ? 'animate-pulse' : ''}
            `}
            style={{ left: currentWidth }}
          ></span>

        </div>

      </div>

    </div>
  )
}