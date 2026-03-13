export const CHANGE_PROTOCOLS = {

  /* ================================
     INTIMITÁS ÖSZTÖN
  ================================= */
  "Intimitás ösztön": {
    title: "Kapcsolódási minta megszakítási kísérlet",

    activation: {
      title: "Aktiváció felismerése",
      prompts: [
        "Mikor jelenik meg a belső távolságtartás?",
        "Mi az első testi jel?",
        "Milyen gondolat indokolja a visszahúzódást?"
      ]
    },

    intensityGuide: {
      low: "Enyhe aktiváció – itt könnyű tudatosan jelen maradni.",
      medium: "Közepes aktiváció – érdemes szünetet tartani, mielőtt reagálsz.",
      high: "Erős aktiváció – először figyeld meg a testi jelzéseket, és csak utána hozz döntést."
    },

    microShift: {
      title: "1%-os eltérés",
      description:
        "Ha visszahúzódnál, maradj jelen még 10 másodpercig döntés nélkül.",
      options: [
        "Ne lépj ki azonnal a helyzetből.",
        "Engedd meg a kettősséget: lehet egyszerre vonzás és óvatosság.",
        "Figyeld meg a testi érzetet anélkül, hogy azonnal értelmeznéd."
      ]
    },

    communication: {
      title: "Kipróbálható mondat",
      examples: [
        "Most bizonytalan vagyok, de itt maradok.",
        "Fontos nekem ez a kapcsolat.",
        "Szeretnék jelen maradni, csak lassabban haladnék."
      ]
    },

    experiment: {
      title: "7 napos megfigyelési ciklus",
      instruction:
        "A következő héten figyeld meg, hányszor jelenik meg a visszahúzódás késztetése, és próbáld ki az 1%-os eltérést.",
      reflection: [
        "Mi történt, amikor nem reagáltál automatikusan?",
        "Változott-e az érzelmi intenzitás?",
        "Mi volt meglepő a helyzetben?"
      ]
    },

    reframe: {
      statement: "A visszahúzódás nem gyengeség, hanem egy korábbi védekezési minta.",
      direction:
        "A cél nem az, hogy eltűnjön a bizonytalanság, hanem hogy jelen tudj maradni mellette."
    }
  },


  /* ================================
     AGGODALOM ÖSZTÖN
  ================================= */
  "Aggodalom ösztön": {
    title: "Gondolati kör megszakítási kísérlet",

    activation: {
      title: "Aktiváció felismerése",
      prompts: [
        "Melyik 'mi lesz, ha…' gondolat jelenik meg először?",
        "Hol érzed a feszültséget a testedben?",
        "Milyen jövőbeli forgatókönyvet próbál az elméd kiszámolni?"
      ]
    },

    intensityGuide: {
      low: "Enyhe aggódás – könnyű visszatérni a jelenhez.",
      medium: "Közepes intenzitás – érdemes tudatosan megszakítani a gondolatkört.",
      high: "Erős aktiváció – először légzés vagy testi figyelem segíthet stabilizálni."
    },

    microShift: {
      title: "1%-os eltérés",
      description:
        "Nevezd meg: 'Ez most egy feltételezés, nem tény.'",
      options: [
        "Ne elemezd tovább 60 másodpercig.",
        "Térj vissza egy konkrét jelenbeli érzékszervi élményhez.",
        "Írd le egy mondatban a legvalószínűbb, nem a legrosszabb kimenetet."
      ]
    },

    communication: {
      title: "Belső stabilizáló mondat",
      examples: [
        "Nem kell most minden kimenetet kiszámolnom.",
        "Ez csak egy lehetőség, nem bizonyosság."
      ]
    },

    experiment: {
      title: "7 napos megszakítási próba",
      instruction:
        "Minden aggódási ciklusnál alkalmazz legalább egy tudatos megszakítást.",
      reflection: [
        "Csökkent-e a belső nyomás?",
        "Mennyi idő alatt tért vissza a nyugalom?"
      ]
    },

    reframe: {
      statement: "Az aggódás a biztonság keresésének jele.",
      direction:
        "A cél nem az, hogy ne gondolkodj előre, hanem hogy ne ragadj bele a feltételezésekbe."
    }
  },


  /* ================================
     BÜNTETÉSKERÜLŐ ÖSZTÖN
  ================================= */
  "Büntetéskerülő ösztön": {
    title: "Megfelelési minta finom korrekciója",

    activation: {
      title: "Aktiváció felismerése",
      prompts: [
        "Mikor kezdesz azonnal alkalmazkodni?",
        "Mitől tartasz ilyenkor?",
        "Mi az az igény, amit háttérbe szorítasz?"
      ]
    },

    intensityGuide: {
      low: "Enyhe megfelelési késztetés – könnyen korrigálható.",
      medium: "Közepes intenzitás – tudatos határjelzés segíthet.",
      high: "Erős aktiváció – először belső stabilizálás, utána kommunikáció."
    },

    microShift: {
      title: "1%-os eltérés",
      description:
        "Fogalmazz meg egy saját igényt egy rövid, magyarázat nélküli mondatban.",
      options: [
        "Ne magyarázkodj.",
        "Használj rövid, tiszta kijelentést.",
        "Tarts szemkontaktust és nyugodt hangnemet."
      ]
    },

    communication: {
      title: "Kipróbálható mondat",
      examples: [
        "Most ezt másképp látom.",
        "Erre most nemet mondok.",
        "Szeretném ezt a saját tempómban csinálni."
      ]
    },

    experiment: {
      title: "7 napos határ-próba",
      instruction:
        "Legalább egy helyzetben vállald fel tudatosan a saját álláspontod.",
      reflection: [
        "Mi történt, amikor nem alkalmazkodtál automatikusan?",
        "Változott-e a kapcsolat dinamikája?"
      ]
    },

    reframe: {
      statement: "Az alkalmazkodás egy korábban hasznos stratégia lehetett.",
      direction:
        "A cél nem a konfliktus keresése, hanem a belső egyensúly megtartása."
    }
  },


  /* ================================
     HALOGATÁS ÖSZTÖNE
  ================================= */
  "Halogatás ösztöne": {
    title: "Indulási ellenállás csökkentési kísérlet",

    activation: {
      title: "Aktiváció felismerése",
      prompts: [
        "Milyen érzés jelenik meg a feladat előtt?",
        "Mi az első halasztó gondolat?",
        "Mit próbálsz elkerülni ezzel?"
      ]
    },

    intensityGuide: {
      low: "Enyhe ellenállás – könnyű elindítani a feladatot.",
      medium: "Közepes ellenállás – érdemes mikrolépésre bontani.",
      high: "Erős ellenállás – először csak a feladat környezetét rendezd."
    },

    microShift: {
      title: "1%-os eltérés",
      description:
        "Indítsd el a feladatot 2 percre, nem többre.",
      options: [
        "Csak az első lépést csináld meg.",
        "Állíts be időzítőt 2 percre.",
        "Ne gondolkodj a teljes feladaton."
      ]
    },

    communication: {
      title: "Belső indító mondat",
      examples: [
        "Csak két perc.",
        "Nem kell tökéletesen csinálnom."
      ]
    },

    experiment: {
      title: "7 napos mikrolépés próba",
      instruction:
        "Minden halogatási helyzetben indíts el egy 2 perces verziót.",
      reflection: [
        "Könnyebb volt-e elindulni?",
        "Átváltott-e a motiváció?"
      ]
    },

    reframe: {
      statement: "A halogatás az azonnali feszültség csökkentésére szolgál.",
      direction:
        "A cél nem az, hogy eltűnjön az ellenállás, hanem hogy elindulj mellette."
    }
  }

};