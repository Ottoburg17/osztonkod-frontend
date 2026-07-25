// pages/Home.jsx
import React from "react";

import HeroSection from "../sections/HeroSection";


import InfinitySection from "../sections/InfinitySection";
import SchemasSection from "../sections/SchemasSection";
import SocialProofPreview from "../sections/SocialProofPreview";
import WhyItWorks from "../sections/WhyItWorks";
import BlogGrid from "../components/BlogGrid";
import AboutSection from "../sections/AboutSection";
import SEO from "../components/SEO";


export default function Home() {
  return (
    <div className="w-full text-gray-600">

      <SEO
        title="Önismeret és érzelmi minták felismerése – Érzelmi Ösztönkód"
        description="Fedezd fel érzelmi mintáidat és ösztönös reakcióidat. Az Érzelmi Ösztönkód segít megérteni a viselkedési sémákat, felismerni az automatikus reakciókat és mélyebb önismeretet kialakítani."
        canonical="https://www.osztonkod.hu/"
        image="https://www.osztonkod.hu/og-image.jpg"
      />
              
                
      <main>
        <HeroSection />
      
        <WhyItWorks />  
       <AboutSection /> 
        <InfinitySection /> 
       <SchemasSection /> 
        <SocialProofPreview />  
         <BlogGrid /> 

      </main>
    </div>
  );
}
