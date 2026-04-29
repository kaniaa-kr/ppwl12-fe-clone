export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-32 py-6">
      <a href="#" className="text-[#e50914] font-black text-2xl md:text-4xl tracking-tighter">
        NETFLIX
      </a>
      
      <div className="flex items-center gap-4">
        <div className="relative group">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <img 
                src="/lang-translate.svg" 
                alt="Translate" 
                className="w-4 h-4 object-contain" 
              />
            
          </div>

          <select
            className="appearance-none bg-black/60 border border-white/50 text-white text-sm font-medium rounded-md pl-9 pr-8 py-1.5 focus:outline-none focus:ring-2 focus:ring-white/80 transition-all cursor-pointer"
            defaultValue="en"
          >
            <option className="bg-gray-800 text-white" value="en">English</option>
            <option className="bg-gray-800 text-white" value="id">Bahasa Indonesia</option>
          </select>

          {/* Ikon Panah Down di Kanan */}
          <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
             <svg 
               width="20" 
               height="20" 
               viewBox="0 0 24 24" 
               fill="white"
             >
               <path d="M7 10l5 5 5-5z" />
             </svg>
          </div>
        </div>

        <a href="#"
          className="bg-[#e50914] hover:bg-[#f40612] text-white text-sm font-semibold px-4 py-1.5 rounded transition-colors">
          Sign In
        </a>
      </div>
    </header>
  );
}