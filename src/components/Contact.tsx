import React from 'react';

export default function Contact() {

const handleEmailClick = (e: React.MouseEvent) => {
  e.preventDefault();
  window.location.href = "mailto:simocalzo.business@gmail.com";
};

const socials = [
    { 
      name: "GitHub", 
      url: "https://github.com/simonecalzolaro", // Update with your actual handle
      icon: "https://cdn.simpleicons.org/github/FDF5E6" 
    },
    { 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/simone-calzolaro-159a3a223/", 
      icon: "https://img.icons8.com/ios-filled/50/FDF5E6/linkedin.png" 
    },
    { 
      name: "Instagram", 
      url: "https://www.instagram.com/simone.calzolaro/", 
      icon: "https://cdn.simpleicons.org/instagram/FDF5E6" 
    },
    { 
      name: "Facebook", 
      url: "https://www.facebook.com/profile.php?id=100007347077469", 
      icon: "https://cdn.simpleicons.org/facebook/FDF5E6" 
    }
  ];

  return (
    <section id="contacts" className="relative z-10 py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-panna/10">
      
      {/* HEADER: Simple and Clear */}
      <div className="mb-16">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-panna mb-4">Get in Touch</h2>
        <div className="h-1 w-20 bg-[#dc2626]"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* COLUMN 1: THE CONTACT FORM (User-Friendly) */}
        <div className="space-y-8">
          <div>
            <h3 className="text-panna font-bold uppercase tracking-widest text-sm mb-2">Send a Message</h3>
            <p className="text-panna/40 text-xs">Fill out the form below and it will be sent directly to my inbox.</p>
          </div>

  // ... inside your Contact component ...

<form 
  action="https://formspree.io/f/mnjbgpdz" // Get this from formspree.io
  method="POST"
  className="space-y-6"
>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <input 
      type="text" 
      name="name" // Added name
      placeholder="Your Name"
      className="w-full bg-panna/5 border border-panna/10 px-4 py-3 text-panna text-sm outline-none focus:border-[#dc2626] transition-all"
      required
    />
    <input 
      type="email" 
      name="email" // Added name
      placeholder="Your Email Address"
      className="w-full bg-panna/5 border border-panna/10 px-4 py-3 text-panna text-sm outline-none focus:border-[#dc2626] transition-all"
      required
    />
  </div>
  <textarea 
    name="message" // Added name
    placeholder="How can I help you?"
    className="w-full bg-panna/5 border border-panna/10 px-4 py-3 text-panna text-sm outline-none focus:border-[#dc2626] transition-all resize-none"
    required
  ></textarea>
  
  <button 
    type="submit" // Ensure type is submit
    className="px-10 py-4 bg-panna text-black font-black uppercase text-xs tracking-widest hover:bg-[#dc2626] hover:text-white transition-all w-full md:w-auto"
  >
    Send Message
  </button>
</form>
        </div>

        {/* COLUMN 2: DIRECT INFO & SOCIALS */}
        <div className="flex flex-col justify-between">
          <div className="space-y-12">
            
            {/* Quick Mail Button: Triggers mailto automatically */}
{/* Quick Mail Button */}
<div className="relative z-30"> {/* High Z-index just in case */}
    <h3 className="text-panna font-bold uppercase tracking-widest text-sm mb-6">
      Prefer your own mail app?
    </h3>
    <button 
      onClick={handleEmailClick}
      className="flex items-center gap-4 px-6 py-4 border border-panna/20 bg-panna/[0.05] hover:bg-panna/10 hover:border-[#dc2626] transition-all group w-full sm:w-auto cursor-pointer relative"
    >
      <div className="flex-shrink-0 pointer-events-none">
        <img 
          src="https://cdn.simpleicons.org/gmail/dc2626" 
          className="w-6 h-6 grayscale group-hover:grayscale-0 transition-all" 
          alt="Gmail" 
        />
      </div>
      <div className="text-left pointer-events-none">
        <span className="block text-panna font-black text-xs uppercase tracking-widest group-hover:text-[#dc2626] transition-colors">
          Open Mail Client
        </span>

      </div>
    </button>
  </div>

            {/* Factual Details from CV */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 font-mono text-xs uppercase tracking-widest">
              <div className="space-y-2">
                <span className="text-[#dc2626]">Location</span>
                <p className="text-panna/60">Forlì & Milan, Italy</p> {/*  */}
              </div>
              <div className="space-y-2">
                <span className="text-[#dc2626]">Phone</span>
                <p className="text-panna/60">+39 3801964290</p> {/*  */}
              </div>
                 <div className="space-y-2">
                <span className="text-[#dc2626]">E-mail</span>
                <p className="text-panna/60">simocalzo.business@gmail.com</p> {/*  */}
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="pt-12 border-t border-panna/10">
            <h4 className="text-panna/20 font-mono text-[10px] uppercase tracking-[0.4em] mb-6">Social Directories</h4>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-panna/10 bg-panna/[0.02] hover:border-[#dc2626] hover:bg-[#dc2626]/10 transition-all group"
                  title={social.name}
                >
                  <img src={social.icon} className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" alt={social.name} />
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}