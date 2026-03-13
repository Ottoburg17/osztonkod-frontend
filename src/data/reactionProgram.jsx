export const REACTION_BREAK_PROGRAM = [

{
  day: 1,
  title: "Sürgetés és elvárás",
  situation: "Amikor úgy érzed, azonnal reagálnod kell.",

  observe: {
    prompt:
      "Figyeld meg, hogyan indul el benned a reakció, mielőtt bármit tennél.",
    questions: [
      "Hol jelent meg először a nyomás a testedben?",
      "Mi lenne a megszokott automatikus reakciód?",
      "Megjelent-e belső sürgetés?"
    ]
  },

  interrupt: {
    prompt:
      "Most avatkozunk be – még a reakció előtt.",
    action:
      "Nézz el oldalra, vegyél két lassú levegőt, és várj 10 másodpercet.",
    reflection:
      "Mi változott a késztetésben a szünet után?"
  },

  closing:
    "A reakció megszakítható, mielőtt cselekvéssé válna.",

  premium: {
    title: "A reakció előtti tér felismerése",

    focus:
      "Ma nem a reakcióval dolgozunk, hanem azzal a nagyon rövid pillanattal, ami közvetlenül előtte jelenik meg.",

    explanation:
      "Az idegrendszer nem a reakció pillanatában dönt. A döntés gyakran már egy kicsivel előtte megszületik. Ha ezt a pillanatot észreveszed, a reakció lassul, és megjelenik a választás lehetősége anélkül, hogy uralnod kellene magad.",

    practice: [
      "Figyeld meg, megjelenik-e belső sietség",
      "Vedd észre, van-e egy gondolat: „Most gyorsan reagálnom kell”",
      "Észreveszel-e testi mikrojelet (összehúzódás, visszatartott levegő, feszülés)"
    ],

    integration:
      "Nem kell mindent észrevenned. Egy jel is elég. Ha csak utólag jut eszedbe, az is észrevétel – a felismerés nem időhöz kötött."
  }
},


{
  day: 2,
  title: "Testi trigger",
  situation: "Amikor a reakció a testedben indul el.",

  observe: {
    prompt:
      "Figyeld meg a testi jelzést anélkül, hogy el akarnád tüntetni.",
    questions: [
      "Hol érzed legerősebben?",
      "Milyen gyorsan erősödik fel?",
      "Milyen gondolat társul hozzá?"
    ],
    options: [
      "Fej",
      "Nyak",
      "Állkapocs",
      "Torok",
      "Mellkas",
      "Gyomor",
      "Has",
      "Láb"
    ]
  },

  interrupt: {
    prompt:
      "A testtel dolgozunk, nem a gondolattal.",
    action:
      "Érintsd meg a jelzett területet, nyomd finoman 5 másodpercig, és mondd ki magadban: „itt”.",
    reflection:
      "Változott-e a testi érzet intenzitása?"
  },

  closing:
    "Ha a testet bevonod, a reakció veszít az erejéből.",

  premium: {
    title: "A reakció irányának felismerése",

    focus:
      "Ma nem azt figyeljük, mit teszel vagy mit mondasz, hanem azt, merre indulna el a reakció, ha nem állítanád meg.",

    explanation:
      "Az idegrendszer irányokban gondolkodik, nem szavakban. Amikor megnevezed az irányt, a reakció elveszíti az automatikusságát, és megjelenik egy apró választási tér anélkül, hogy bármit meg kellene változtatnod.",

    practice: [
      "Tedd fel magadnak: inkább kifelé, befelé vagy elfelé menne?",
      "Ne gondolkodj rajta sokat – az első benyomás elég",
      "Csak nevezd meg magadban az irányt"
    ],

    integration:
      "Ha több irány is megjelent a nap során, az nem ellentmondás. Ez azt jelzi, hogy finomabban észleled a belső mozgást."
  }
},


{
  day: 3,
  title: "Késleltetés",
  situation: "Amikor már reagálnál, de még van egy pillanat.",

  observe: {
    prompt:
      "Figyeld meg azt a rövid rést a késztetés és a reakció között.",
    questions: [
      "Mennyi ideig tart ez a rés?",
      "Erősödik vagy csökken az inger?",
      "Milyen érzés nem reagálni?"
    ]
  },

  interrupt: {
    prompt:
      "A késleltetés aktív beavatkozás.",
    action:
      "Várj tudatosan 30 másodpercet, mielőtt bármit tennél.",
    reflection:
      "Mi történt a késztetéssel a várakozás alatt?"
  },

  closing:
    "A késleltetés már új működés.",

  premium: {
    title: "Az első tudatos mikroválasztás",

    focus:
      "Az elmúlt két napban észrevetted a reakció előtti pillanatot és felismerted az irányt. Ma nem irányt váltunk, csak apró eltérést hozunk létre.",

    explanation:
      "Az idegrendszer nem szereti a nagy változásokat, de észreveszi a finom eltérést. Egy mikroválasztás nem vált ki védekezést, nem igényel akaraterőt, mégis új mintát hoz létre. Ezért működik.",

    practice: [
      "Időbeli eltérés: vársz egy fél másodpercet",
      "Testi eltérés: leengeded a vállad vagy kifújod a levegőt",
      "Figyelmi eltérés: egy pillanatra érzed a talpad a talajon"
    ],

    integration:
      "Nem kell mindig ugyanazt választanod, és nem kell jól csinálnod. Ha csak utólag vetted észre a lehetőséget, az is tanulás – az idegrendszer utólag is frissít."
  }
},


{
  day: 4,
  title: "Védelmi minta",
  situation: "Konfliktus vagy kritika hatására.",

  observe: {
    prompt:
      "Figyeld meg, milyen régi védekezési minta indul el.",
    questions: [
      "Mi lenne az első impulzusod?",
      "Ez a reakció ismerős a múltból?",
      "Mit próbál megvédeni?"
    ],
    options: [
      "Támadás",
      "Megfelelés",
      "Elkerülés",
      "Kontroll"
    ]
  },

  interrupt: {
    prompt:
      "A megnevezés megszakítja az automatizmust.",
    action:
      "Nevezd meg magadban: „Ez most védelem.”",
    reflection:
      "Változott-e a reakció ereje a megnevezés után?"
  },

  closing:
    "Amit megnevezel, az nem irányít tovább.",

  premium: {
    title: "Jelenlét erősebb impulzusnál",

    focus:
      "Ma nem megszakítunk, nem választunk mást, és nem csillapítunk. Csak jelen maradunk akkor is, amikor az impulzus erős. Ez nem passzivitás, hanem stabilitás.",

    explanation:
      "Erős impulzusnál az idegrendszer nem tanul új stratégiát, csak biztonságot keres. Ha ilyenkor nem nyomod el, nem ugrasz bele, és nem hagyod magára az élményt, a rendszer megtanulja: ezt is ki lehet bírni. Ez idegrendszeri tapasztalat, nem gondolat.",

    practice: [
      "Ne nevezd meg az irányt – ma ez túl sok lenne",
      "Válassz egy horgonyt: a talpad súlya, a szék érintése vagy a kifújás",
      "Maradj jelen 3–5 természetes légzésig"
    ],

    integration:
      "Ha elsodort az impulzus és csak utólag vetted észre, az nem kudarc. Ez az impulzus erejének mérése – és a mérés is tanulás."
  }
},


{
  day: 5,
  title: "Nem-cselekvés",
  situation: "Amikor tudatosan nem reagálsz.",

  observe: {
    prompt:
      "Figyeld meg, mi történik benned cselekvés nélkül.",
    questions: [
      "Mi volt a legnehezebb a csendben?",
      "Megjelent-e feszültség vagy megkönnyebbülés?"
    ]
  },

  interrupt: {
    prompt:
      "A nem-cselekvés is aktív döntés.",
    action:
      "Maradj csendben legalább 60 másodpercig.",
    reflection:
      "Mi változott a belső állapotodban?"
  },

  closing:
    "A csend nem üresség – hanem tér.",

  premium: {
    title: "Mi történik, miután az impulzus lecseng",

    focus:
      "Az impulzus nem tart örökké. Ma nem az impulzus alatt, hanem utána figyelünk: mi marad, amikor már nem kell reagálni?",

    explanation:
      "Az idegrendszer nem az impulzusból tanul, hanem abból, ami utána történik. Ha az utótér észrevett, megengedett és nem lett elnyomva, legközelebb az impulzus rövidebb vagy kevésbé éles lehet. Ez nem akarat, hanem tanulás.",

    practice: [
      "Miután egy helyzet elmúlt, állj meg egy pillanatra",
      "Tedd fel magadnak: mi van most a testemben?",
      "Ne elemezd és ne értékeld az érzetet"
    ],

    integration:
      "Ha nem vettél észre semmi különöset, az nem üres válasz. Ez annak a jele, hogy az impulzus lefutott, és a rendszer megnyugodott."
  }
},

{
  day: 6,
  title: "Belső pozícióváltás",
  situation: "Ugyanaz a helyzet, más viszonyulás.",

  observe: {
    prompt:
      "Figyeld meg, hogyan pozícionálod magad a helyzetben.",
    questions: [
      "Mennyire érzed személyesnek?",
      "Beszűkült vagy tág a figyelmed?"
    ],
    options: [
      "Távolabbról figyelem",
      "Kíváncsian",
      "Kevésbé személyesen",
      "Még mindig feszült"
    ]
  },

  interrupt: {
    prompt:
      "Pozíciót váltunk, nem helyzetet.",
    action:
      "Válaszd azt a pozíciót, amelyik nem automatikus.",
    reflection:
      "Milyen érzés ebből a pozícióból jelen lenni?"
  },

  closing:
    "A reakció helyett pozíciót választasz.",

  premium: {
    title: "Az impulzus és a döntés megkülönböztetése",

    focus:
      "Ma nem azért figyelünk, hogy mást válassz, hanem azért, hogy lásd: ami történt, az impulzus volt vagy döntés. A kettő nem ugyanaz.",

    explanation:
      "Az impulzus gyors, kényszerítő, és gyakran utólag magyarázzuk meg. A döntés egy kicsit lassabb, nem sürget, és utólag nem kell mentegetni. A különbség nem tartalmi, hanem időbeli és testi. Ha ezt felismered, megszűnik az önhibáztatás, és megjelenik a belső biztonság.",

    practice: [
      "Egy megtörtént helyzet után kérdezd meg: volt-e ott legalább egy fél pillanat?",
      "Figyeld meg: volt-e levegő, testérzet vagy egy belső „igen”",
      "Ne változtass a történeten – csak nevezd meg: impulzus vagy döntés"
    ],

    integration:
      "Ha ma minden impulzusnak tűnt, az nem visszaesés. Ez a felismerés élesedése. A döntés tere gyakran csak később válik láthatóvá."
  }
},


{
  day: 7,
  title: "Integráció",
  situation: "Visszatekintés és összehangolás.",

  observe: {
    prompt:
      "Tekints vissza a hétre ítélkezés nélkül.",
    questions: [
      "Hol indult el korábban automatikusan a reakció?",
      "Hol jelent meg először a választás lehetősége?",
      "Mi az, ami már nem ugyanaz?"
    ]
  },

  interrupt: {
    prompt:
      "A változás nem eltűnés – hanem irányítás.",
    action:
      "Nevezd meg azt az egy pontot, ahol most már meg tudsz állni.",
    reflection:
      "Mit fogsz másként csinálni a következő hasonló helyzetben?"
  },

  closing:
    "A reakció nem szűnt meg – de már nem ő dönt helyetted.",

  premium: {
    title: "A különbségtétel beépítése a hétköznapokba",

    focus:
      "Az elmúlt napokban észrevetted az impulzust, megtapasztaltad a teret, és különbséget tettél impulzus és döntés között. Ma azt nézzük meg, hogyan marad ez veled akkor is, amikor nem figyelsz rá tudatosan.",

    explanation:
      "Az idegrendszer nem gyakorlatokat jegyez meg, hanem különbségeket. Ha egyszer átélted, milyen impulzusból reagálni és milyen döntésből cselekedni, ezt nem lehet elvenni – legfeljebb ideiglenesen elhalványul. Ezért nem kell fenntartani. Elég emlékezni.",

    practice: [
      "Figyeld meg, mikor emlékszel magadtól a különbségtételre",
      "Vedd észre, mikor nem jut eszedbe",
      "Jegyezd meg azt is, amikor csak utólag válik világossá"
    ],

    integration:
      "Ha visszacsúszol, az nem elvesztése annak, amit tanultál. Ez csak élet. A különbségtétel bármikor újra előhívható."
  }
}
];
