// Lietuvių — Lithuanian FAQ bank. Mirrors the shape of faq.js exactly.
// `tags` are search-only keywords; English terms (WordPress, SEO…) are kept
// alongside the Lithuanian ones because people search for them either way.

export const faqCategories = {
  basics: 'Pagrindai',
  process: 'Procesas',
  pricing: 'Kainos',
  tech: 'Technologijos',
  design: 'Dizainas',
  launch: 'Paleidimas ir pagalba',
}

export const faqData = {
  basics: [
    {
      q: 'Ką tiksliai veikia Beaju?',
      a: 'Kuriame ir ranka koduojame premium svetaines: rinkodaros puslapius, produktų svetaines, el. parduotuves ir web aplikacijas. Viena sritis, atliekama aukščiausiu lygiu, ir nieko daugiau. Būtent dėl šio susitelkimo darbas yra geresnis.',
      tags: 'paslaugos ką darote agentūra studija services',
    },
    {
      q: 'Su kuo dirbate?',
      a: 'Su įmonėmis, kurios svetainę laiko pirmuoju įspūdžiu, o ne formalumu. Dažniausiai tai įkūrėjai, rinkodaros vadovai ir prekės ženklų savininkai, žinantys, kad šabloninė svetainė nuvertintų tai, ką jie iš tikrųjų daro.',
      tags: 'klientai kam tinka b2b startupai clients',
    },
    {
      q: 'Kuo skiriatės nuo šablono ar svetainių konstruktoriaus?',
      a: 'Dauguma „individualių“ svetainių yra nupirkta tema su konstruktoriaus įskiepiu. Ekrano nuotraukoje jos atrodo gerai, bet subyra detalėse: išpūstas kodas, lėtas krovimasis, trūkčiojanti animacija. Mes kiekvieną eilutę rašome ranka, todėl kontroliuojame kiekvieną sluoksnį — būtent tai ir pajunta jūsų lankytojai.',
      tags: 'skirtumas individualus vs šablonas wordpress wix squarespace',
    },
    {
      q: 'Ar kuriate tik svetaines?',
      a: 'Taip, ir tai sąmoningas pasirinkimas. Nesame pilno serviso agentūra, išsiskaidžiusi po keliolika sričių. Kuriame išskirtines svetaines, ir būtent šis siauras susitelkimas leidžia jas padaryti geriau, nei pavyktų universaliai studijai.',
      tags: 'apimtis tik svetainės specializacija focus',
    },
    {
      q: 'Ar galite atnaujinti esamą mūsų svetainę?',
      a: 'Dažnai būtent tai ir darome. Įvertiname, ką turite, pasiliekame tai, kas veikia, o likusią dalį perkuriame iš naujo — gaunate ranka koduotos svetainės greitį ir kokybę neprarasdami turinio ar paieškos pozicijų.',
      tags: 'perkūrimas atnaujinimas redesign migracija existing',
    },
    {
      q: 'Ar dirbate su klientais už Lietuvos ribų?',
      a: 'Taip. Nuotoliniu būdu dirbame su klientais visoje Europoje ir už jos ribų. Viskas vyksta per skambučius, el. paštą ir bendrai peržiūrimas versijas, todėl vieta niekada nebuvo apribojimas.',
      tags: 'tarptautinis nuotoliniu užsienis europa international remote',
    },
    {
      q: 'Kokiomis kalbomis gali būti svetainė?',
      a: 'Bet kokiomis. Daugiakalbes svetaines kuriame reguliariai, įskaitant automatinį kalbos atpažinimą pagal lankytoją ir rankinį perjungėją. Ši svetainė veikia anglų, lietuvių, rusų ir lenkų kalbomis.',
      tags: 'daugiakalbė vertimas kalbos lokalizacija multilingual i18n',
    },
    {
      q: 'Kokio dydžio komanda?',
      a: 'Maža ir patyrusi — taip sugalvota. Dirbate tiesiogiai su žmonėmis, kuriančiais jūsų svetainę, o ne per projektų vadovą, perduodantį žinutes. Todėl sprendimai ir pataisymai vyksta greitai.',
      tags: 'komanda dydis kas dirba team',
    },
  ],

  process: [
    {
      q: 'Kaip atrodo procesas nuo pradžios iki galo?',
      a: 'Penki etapai: tyrimas, struktūra, UI dizainas, prototipas, tada kūrimas ir paleidimas. Kiekvieno etapo pabaigoje darbą pamatote ir patvirtinate, todėl gale nebūna netikėto „didžiojo atskleidimo“, kuris nepataiko.',
      tags: 'procesas etapai žingsniai kaip vyksta process',
    },
    {
      q: 'Kiek laiko užima projektas?',
      a: 'Dauguma svetainių — nuo 3 iki 6 savaičių, priklausomai nuo apimties. Vienas fokusuotas puslapis gali užimti mažiau nei dvi savaites; duomenų prisodrinta web aplikacija — ilgiau. Tikslų terminą gaunate po trumpo pokalbio, dar prieš bet kokius pasirašymus.',
      tags: 'terminai trukmė kiek laiko savaitės greitai timeline',
    },
    {
      q: 'Ko iš mūsų reikia, kad pradėtume?',
      a: 'Trumpo pokalbio, jūsų tikslų ir turimos prekės ženklo medžiagos. Jei turite tekstų, logotipų ar fotografijų — puiku. Jei ne, tiksliai pasakysime, ką surinkti, o visa kita pasirūpinsime patys.',
      tags: 'ko reikia pradžia startas onboarding requirements',
    },
    {
      q: 'Kiek turime įsitraukti?',
      a: 'Maždaug vienas skambutis per etapą ir atsakymai į tai, ką atsiunčiame. Paprastai tai kelios valandos per visą projektą. Informuojame kiekviename žingsnyje, bet nepaverčiame to antru darbu.',
      tags: 'įsitraukimas laikas susitikimai komunikacija involvement',
    },
    {
      q: 'Kiek pataisymų etapų įskaičiuota?',
      a: 'Du pataisymų etapai kiekvienoje stadijoje įskaičiuoti į kiekvieną projektą. Kadangi kiekvieną etapą patvirtinate prieš judant toliau, daugiau paprastai neprireikia.',
      tags: 'pataisymai korekcijos revisions changes',
    },
    {
      q: 'Ar pamatysime svetainę prieš jos sukūrimą?',
      a: 'Visada. Prieš parašant pirmą produkcinio kodo eilutę gaunate paspaudžiamą interaktyvų prototipą, todėl galite pereiti tikrą srautą ir pakeisti sprendimą, kol pakeitimai dar nekainuoja.',
      tags: 'prototipas peržiūra maketas prototype preview',
    },
    {
      q: 'O jei dar neturime prekės ženklo medžiagos?',
      a: 'Tai nėra problema. Vizualinį identitetą galime sukurti kaip projekto dalį: šriftus, spalvas, išdėstymą ir detales, sudėliotas pagal tai, ką jūsų verslas iš tikrųjų daro.',
      tags: 'nėra logotipo identitetas iš nulio branding',
    },
    {
      q: 'Ar galite dirbti pagal fiksuotą terminą?',
      a: 'Taip, jei pasakysite iš anksto. Jei turite paleidimą, investicijų raundą ar mugę, projektą planuojame atgaline data nuo tos datos ir sutariame, kas į ją įtelpa.',
      tags: 'terminas skubu data deadline',
    },
  ],

  pricing: [
    {
      q: 'Kiek kainuoja svetainė?',
      a: 'Priklauso nuo apimties, todėl kainuojame pagal projektą, o ne skelbiame kainoraštį. Per trumpą pokalbį papasakokite, ko reikia, ir dar prieš darbų pradžią gausite aiškų, detalizuotą pasiūlymą.',
      tags: 'kaina kiek kainuoja biudžetas pasiūlymas price cost',
    },
    {
      q: 'Kaip veikia kainodara?',
      a: 'Fiksuota apimtis, fiksuota kaina. Visą sumą žinote dar prieš pradžią, ir ji nesikeičia, nebent paprašysite kažko už sutartos apimties ribų.',
      tags: 'fiksuota kaina valandinis įkainis pricing model',
    },
    {
      q: 'Kaip vyksta apmokėjimas?',
      a: 'Paprastai 50 % projektui rezervuoti ir darbams pradėti, ir 50 % pabaigus, prieš paleidimą. Ilgesniems projektams sumą paskirstome per etapus.',
      tags: 'apmokėjimas avansas sąskaita mokėjimas payment',
    },
    {
      q: 'Ar yra pastovių išlaidų?',
      a: 'Už pačią svetainę jokio licencijos mokesčio mums nemokate. Mokate už savo domeną ir talpinimą (paprastai nedaug), taip pat už pasirinktas trečiųjų šalių paslaugas, pvz., turinio valdymo ar el. pašto platformą. Apie visa tai pasakome dar prieš įsipareigojimą.',
      tags: 'mėnesinis prenumerata palaikymas hostingas ongoing',
    },
    {
      q: 'Kas neįskaičiuota?',
      a: 'Domeno ir talpinimo mokesčiai, mokamos trečiųjų šalių paslaugos, nuotraukų bankų licencijos ir turinio rašymas po paleidimo. Viskas, kas neįskaičiuota, aiškiai išvardyta pasiūlyme.',
      tags: 'neįskaičiuota papildomai paslėptos išlaidos excluded',
    },
    {
      q: 'Kas nutinka, jei apimtis pasikeičia projekto viduryje?',
      a: 'Prieš atlikdami darbus pasakome, kaip tai paveiks kainą ir terminą, o jūs nusprendžiate. Į sąskaitą niekada nepatenka tai, kam iš anksto nepritarėte.',
      tags: 'apimties keitimas papildomi darbai scope change',
    },
    {
      q: 'Ar pirmas pokalbis apmokamas?',
      a: 'Ne. Pirmas 20 minučių pokalbis yra nemokamas, kaip ir po jo pateikiamas pasiūlymas. Mokate tik tada, kai nusprendžiate tęsti.',
      tags: 'nemokama konsultacija pirmas skambutis free',
    },
  ],

  tech: [
    {
      q: 'Kokias technologijas naudojate?',
      a: 'Daugiausia React, Next.js ir Astro su TypeScript, o judesiui — Framer Motion arba GSAP. Renkamės pagal projektą, o ne verčiame visus klientus į tą pačią technologiją.',
      tags: 'technologijos react next astro javascript typescript stack',
    },
    {
      q: 'Kodėl koduojate ranka, o ne naudojate WordPress, Webflow ar Squarespace?',
      a: 'Nes kiekvieno sluoksnio kontrolę pajunta jūsų lankytojai. Ranka koduotos svetainės kraunasi greičiau, todėl žmonės neišeina dar nespėję jūsų pamatyti, o Google reitinguoja aukščiau. Judesys veikia 60 kadrų per sekundę. Išdėstymas kuriamas pagal jūsų prekės ženklą, o ne pritempiamas prie temos. Ir kodas išlieka pakankamai švarus, kad jį būtų galima plėsti metus, o ne pūti į įskiepių raizgalynę.',
      tags: 'wordpress webflow squarespace wix konstruktorius kodėl ranka',
    },
    {
      q: 'Kur talpinama svetainė?',
      a: 'Modernioje „edge“ infrastruktūroje, pvz., Vercel, Netlify ar Cloudflare, todėl svetainė pateikiama iš arti jūsų lankytojų. Viską sukonfigūruojame ir perduodame jums visas paskyros teises.',
      tags: 'talpinimas hostingas serveris vercel netlify cloudflare',
    },
    {
      q: 'Ar galėsime patys redaguoti turinį?',
      a: 'Taip, jei to norite. Galime prijungti „headless“ turinio valdymo sistemą, kad jūsų komanda tekstus ir vaizdus redaguotų per paprastą administravimo skydelį, nerizikuodama sugadinti išdėstymo.',
      tags: 'cms turinio redagavimas atnaujinimas administravimas edit',
    },
    {
      q: 'Kokią turinio valdymo sistemą naudojate?',
      a: 'Dažniausiai Sanity, Contentful ar Storyblok — pagal tai, kaip dirba jūsų komanda. Jei jau kažką naudojate, paprastai prisijungiame prie to, o ne verčiame migruoti.',
      tags: 'cms sanity contentful storyblok headless',
    },
    {
      q: 'Ar kuriate el. parduotuves?',
      a: 'Taip. El. prekybą kuriame su Shopify arba „headless“ sprendimu, įskaitant individualius produktų puslapius ir kelių žingsnių atsiskaitymo srautus, sukurtus tikrai konvertuoti.',
      tags: 'el parduotuvė ecommerce shopify atsiskaitymas mokėjimai',
    },
    {
      q: 'Ar galite integruoti mūsų CRM, analitiką ar rezervacijų įrankius?',
      a: 'Taip. Formos, CRM sistemos, pvz., HubSpot ar Pipedrive, analitika, rezervacijų įrankiai kaip Calendly, mokėjimų tiekėjai ir el. pašto platformos integruojami sklandžiai. Pasakykite, ką naudojate, ir prijungsime.',
      tags: 'integracija crm hubspot analitika calendly stripe api',
    },
    {
      q: 'Ar svetainė bus pritaikyta prieinamumui?',
      a: 'Kuriame pagal WCAG AA kaip bazinį standartą: taisyklinga antraščių struktūra, navigacija klaviatūra, matomos fokuso būsenos, pakankamas spalvų kontrastas ir sumažinto judesio palaikymas. Prieinamumas yra kūrimo dalis, o ne papildomas pardavimas.',
      tags: 'prieinamumas wcag a11y klaviatūra kontrastas accessibility',
    },
    {
      q: 'Ar kuriate web aplikacijas, ne tik svetaines?',
      a: 'Taip. Valdymo skydeliai, duomenų prisodrintos sąsajos ir produktų priekinės dalys yra mūsų darbo dalis, įskaitant realaus laiko būsenas ir sudėtingą filtravimą, kurie išlieka greiti esant dideliam kiekiui duomenų.',
      tags: 'web aplikacija dashboard saas produktas app',
    },
  ],

  design: [
    {
      q: 'Ar kuriate ir prekės ženklą?',
      a: 'Galime sudėlioti vizualinį identitetą aplink jūsų svetainę: tipografiją, spalvas, išdėstymą ir detales. Jei reikia pilnos prekės ženklo programos su vardo kūrimu ir spauda, sąžiningai pasakysime, kada geriau kreiptis į prekės ženklo specialistą.',
      tags: 'prekės ženklas identitetas logotipas branding',
    },
    {
      q: 'Ar galite dirbti pagal esamas mūsų prekės ženklo gaires?',
      a: 'Taip. Jei turite gaires, dirbame jų ribose ir išplečiame jas internetui ten, kur jos nepasiekia — tai dažnai pasitaiko prekės ženklams, sukurtiems pirmiausia spaudai.',
      tags: 'gairės stilius brand guidelines esamas',
    },
    {
      q: 'O kaip su animacija ir judesiu?',
      a: 'Judesys yra didelė dalis to, kodėl mūsų svetainės atrodo brangiai. Naudojame tikslias 60 kadrų per sekundę sąveikas, kurios byloja apie kokybę be žodžių, ir niekada neleidžiame animacijai užstoti skaitymo ar pirkimo.',
      tags: 'animacija judesys sąveikos perėjimai motion 60fps',
    },
    {
      q: 'Ar svetainė veiks telefone?',
      a: 'Kiekviena svetainė nuo pat pradžių kuriama prisitaikanti ir testuojama realiais telefonų bei planšečių dydžiais. Daugumai mūsų klientų mobilieji įrenginiai yra ten, kur atkeliauja didžioji dalis lankytojų.',
      tags: 'mobilus responsive telefonas planšetė ekranai',
    },
    {
      q: 'Ar rašote tekstus?',
      a: 'Struktūrą, antraštes ir pozicionavimą formuojame kaip dizaino dalį, nes išdėstymo ir žodžių atskirti neįmanoma. Ilgesniam turiniui dirbame su jūsų medžiaga arba pasitelkiame tekstų kūrėją.',
      tags: 'tekstai turinys copywriting antraštės',
    },
    {
      q: 'Iš kur atsiranda vaizdai ir fotografijos?',
      a: 'Jūsų pačių fotografijos visada geriausios, ir prireikus paruošime fotosesijos briefą. Kitu atveju naudojame licencijuotus arba sugeneruotus vaizdus, parinktus taip, kad atrodytų apgalvotai, o ne bendrai.',
      tags: 'vaizdai nuotraukos fotografija stock images',
    },
    {
      q: 'Ar galime pamatyti dizainą prieš programavimą?',
      a: 'Taip, būtent tam yra prototipo etapas. Nieko nekoduojame, kol nepamatėte tikro rezultato ir jo nepatvirtinote.',
      tags: 'dizainas patvirtinimas peržiūra figma approval',
    },
  ],

  launch: [
    {
      q: 'Kas vyksta paleidimo metu?',
      a: 'Prijungiame jūsų domeną, sukonfigūruojame talpinimą ir analitiką, atliekame galutinį greičio, prieinamumo ir naršyklių suderinamumo patikrinimą, tada paleidžiame kartu su jumis. Niekas neperjungiama be jūsų sutikimo.',
      tags: 'paleidimas go live domenas dns publish',
    },
    {
      q: 'Ar pasirūpinate SEO?',
      a: 'Techninis SEO įtrauktas: švari semantinė struktūra, greitas krovimasis, taisyklingi meta duomenys, svetainės žemėlapiai, struktūrizuoti duomenys ir socialinių tinklų peržiūros. Nuolatinė raktinių žodžių strategija ir turinio rinkodara yra atskira sritis, kurios neapsimetame valdantys.',
      tags: 'seo google paieška reitingai metaduomenys sitemap',
    },
    {
      q: 'Kaip greita svetainė iš tikrųjų bus?',
      a: 'Siekiame stiprių Core Web Vitals rodiklių ir paprastai patenkame gerokai į Google nustatytas ribas. Greitis čia nėra malonus priedas: tai pirmas dalykas, kurį įvertina lankytojas, ir vienas iš dalykų, kuriuos matuoja Google.',
      tags: 'greitis našumas core web vitals lighthouse speed',
    },
    {
      q: 'Kokią pagalbą gauname po paleidimo?',
      a: 'Kiekvienas projektas apima pagalbos periodą po paleidimo, kad ištaisytume viską, kas išryškėja realiame naudojime. Vėliau siūlome nuolatinį aptarnavimą arba tiesiog imamės darbų pagal poreikį.',
      tags: 'pagalba palaikymas po paleidimo garantija support',
    },
    {
      q: 'Kam priklauso kodas ir svetainė?',
      a: 'Jums, visiškai. Gaunate kodo repozitoriją, talpinimo paskyrą ir kiekvieną failą. Jokio pririšimo ir jokios situacijos, kai jums reikėtų mūsų leidimo pasitraukti.',
      tags: 'nuosavybė kodas repozitorija teisės ownership',
    },
    {
      q: 'Ar galėsite vėliau pridėti funkcijų?',
      a: 'Taip, ir kodas parašytas taip, kad tai išliktų paprasta. Švarų, ranka rašytą kodą galima plėsti ir po kelerių metų — tai priešingybė tam, kas nutinka įskiepių krūvai.',
      tags: 'naujos funkcijos plėtra vėliau antras etapas',
    },
    {
      q: 'O jei kažkas nustos veikti?',
      a: 'Rašykite mums. Pagalbos periodu taisymai nemokami, o vėliau reaguojame greitai, nes kodą rašėme mes ir tiksliai žinome, kur žiūrėti.',
      tags: 'klaida sugedo bug pagalba fix problema',
    },
  ],
}

export const faqCount = Object.values(faqData).reduce((n, a) => n + a.length, 0)
