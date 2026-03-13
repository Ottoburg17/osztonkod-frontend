import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="
      relative 
      bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900/95
      text-emerald-50
      py-10 md:py-10 
      shadow-inner overflow-hidden
    ">

       {/* FEHÉR GLOW – erősen látható */}
  <div className="absolute inset-0 -z-10 pointer-events-none">
    <div className="absolute top-[-20%] left-[5%] w-[60vw] h-[60vw] bg-white blur-[80px] md:blur-[100px] rounded-full"></div>
    <div className="absolute bottom-[-10%] right-[10%] w-[45vw] h-[45vw] bg-white/45 blur-[70px] md:blur-[90px] rounded-full"></div>
    <div className="absolute top-[30%] left-[50%] w-[28vw] h-[28vw] bg-white/75 blur-[60px] md:blur-[80px] rounded-full"></div>
  </div>
     

      {/* TARTALOM */}
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* BRAND */}
          <div>
            <h2 className="text-xl font-extrabold tracking-wide mb-3">
              Ösztönkód
            </h2>
            <p className="text-emerald-100/80 text-sm leading-relaxed">
              Önismereti rendszer a tudattalan érzelmi minták felismerésére és megértésére.
            </p>

            {/* Social icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-white transition"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition"><Youtube size={20} /></a>
              <a href="mailto:info@osztonkod.hu" className="hover:text-white transition"><Mail size={20} /></a>
            </div>
          </div>

          {/* OLDALAK */}
          <div>
            <h3 className="text-sm font-semibold mb-3 text-amber-300 tracking-wider uppercase">
              Oldalak
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-amber-300 transition">Kezdőlap</Link></li>
              <li><Link to="/about" className="hover:text-amber-300 transition">Rólunk</Link></li>
              <li><Link to="/schemas" className="hover:text-amber-300 transition">Ösztönkódok</Link></li>
              <li><Link to="/looprecognitionmobile" className="hover:text-amber-300 transition">Loop-Teszt</Link></li>
            </ul>
          </div>

          {/* ESZKÖZÖK */}
          <div>
            <h3 className="text-sm font-semibold mb-3 text-amber-300 tracking-wider uppercase">
              Eszközök
            </h3>
            <ul className="space-y-2 text-sm">
             
              <li><Link to="/innerloop" className="hover:text-amber-300 transition">Dopamin ciklus</Link></li>
              <li><Link to="/plan" className="hover:text-amber-300 transition">Viselkedési Navigátor</Link></li>
              <li><Link to="/instinctsarticle" className="hover:text-amber-300 transition">Ösztönök áttekintése</Link></li>
              <li><Link to="/innerbarrier" className="hover:text-amber-300 transition">Mentális Blokk – felismerés</Link></li>
            </ul>
          </div>

          {/* KAPCSOLAT */}
          <div>
            <h3 className="text-sm font-semibold mb-3 text-amber-300 tracking-wider uppercase">
              Kapcsolat
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="text-emerald-100/80">ottoburg17@gmail.com</li>
              <li className="text-emerald-100/80">Budapest, Magyarország</li>
              <li><Link to="/contact" className="hover:text-amber-300 transition">Kapcsolat oldal →</Link></li>
            </ul>
          </div>

        </div>

        {/* ALSÓ VONAL */}
        <div className="border-t border-emerald-700/40 mt-10 pt-4 text-center text-emerald-100/70 text-xs">
          © {new Date().getFullYear()} Ösztönkód — Minden jog fenntartva.
                   
                <div className="mt-2 flex justify-center gap-4 text-[11px] text-emerald-100/60 flex-wrap">
                  <Link
                    to="/adatkezeles"
                    className="text-white hover:text-amber-300 hover:underline transition"
                  >
                    Adatkezelés
                  </Link>
               
          
           <span className="opacity-40">|</span>

            <Link
              to="/felhasznalasi-feltetelek"
              className="text-white hover:text-amber-300 hover:underline transition"
            >
              ÁSZF
            </Link>

            <span className="opacity-40">|</span>
  
              
              <Link
                to="/disclaimer"
                className="text-white hover:text-amber-300 hover:underline transition"
              >
                Felelősségkizárás
            </Link>

            
          <span className="opacity-40">|</span>
            <Link
              to="/jogi/elofizetes"
              className="text-white hover:text-amber-300 hover:underline transition"
            >
              Előfizetés
            </Link>
           </div>

          <p className="mt-2 text-[12px] md:text-[12px] text-white-100/50 max-w-3xl mx-auto leading-relaxed">
            Az oldal nem nyújt mentálhigiénés, pszichológiai vagy egészségügyi szolgáltatást.
            Az itt megjelenő információk kizárólag önismereti és edukációs célt szolgálnak.
          </p>
        </div>

      </div>
    </footer>
  );
}
