// pages/Home.jsx
import React from "react";
import { Helmet } from "react-helmet";

import HeroSection from "../sections/HeroSection";


import InfinitySection from "../sections/InfinitySection";
import SchemasSection from "../sections/SchemasSection";
import SocialProofPreview from "../sections/SocialProofPreview";
import WhyItWorks from "../sections/WhyItWorks";
import BlogGrid from "../components/BlogGrid";
import AboutSection from "../sections/AboutSection";


export default function Home() {
  return (
    <div className="w-full text-gray-600">
      <Helmet>
      <title>
      Önismeret és érzelmi minták felismerése – Érzelmi Ösztönkód
      </title>

      <meta
      name="description"
      content="Fedezd fel érzelmi mintáidat és ösztönös reakcióidat. Az Érzelmi Ösztönkód segít megérteni a viselkedési sémákat és mélyebb önismeretet ad."
      />

      <link rel="canonical" href="https://osztonkod.hu/" />

      <meta property="og:title" content="Érzelmi Ösztönkód – Mély önismeret" />
      <meta property="og:description" content="Ismerd fel érzelmi mintáidat és automatikus reakcióidat modern önismereti módszerrel." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://osztonkod.hu/" />
      <meta property="og:site_name" content="Érzelmi Ösztönkód" />
      <meta property="og:locale" content="hu_HU" />
      <meta property="og:image" content="https://osztonkod.hu/og-image.jpg" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Érzelmi Ösztönkód – Mély önismeret" />
      <meta name="twitter:description" content="Ismerd fel érzelmi mintáidat és automatikus reakcióidat modern önismereti módszerrel." />
      <meta name="twitter:image" content="https://osztonkod.hu/og-image.jpg" />
      </Helmet>
          
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
