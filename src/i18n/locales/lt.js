// Lietuvių — Lithuanian.
// Lithuanian has three plural forms; these helpers pick the right one.
const ltPlural = (n, one, few, many) => {
  const m10 = n % 10
  const m100 = n % 100
  if (m10 === 1 && m100 !== 11) return one
  if (m10 >= 2 && m10 <= 9 && !(m100 >= 11 && m100 <= 19)) return few
  return many
}

export default {
  code: 'lt',
  label: 'Lietuvių',
  htmlLang: 'lt',

  meta: {
    title: 'BEAJU — Ranka koduojamos premium svetainės',
    description:
      'Beaju kuria ir ranka koduoja premium svetaines, kurios greitai kraunasi, atrodo brangiai ir pelno pasitikėjimą nuo pirmos sekundės.',
  },

  nav: { works: 'Darbai', about: 'Apie', contact: 'Kontaktai' },

  hero: {
    eyebrow: 'Mes esame Beaju ir mes kuriame',
    lines: ['Svetaines', 'kurios pelno', 'pasitikėjimą'],
    aria: 'Svetaines, kurios pelno pasitikėjimą',
  },

  rail: {
    call: 'Skambinti',
    email: 'El. paštas',
    instagram: 'Insta',
    copy: 'Kopijuoti',
    copied: 'Nukopijuota!',
  },

  showcase: {
    label: 'Sukurta rankomis',
    title: 'Taip atrodo svetainė, kai ',
    titleStrong: 'kiekviena kodo eilutė parašyta jums.',
  },

  work: {
    label: 'Atrinkti darbai',
    visit: 'Atidaryti',
    visitAria: (name) => `Atidaryti ${name} svetainę`,
    details: 'Projekto detalės',
    detailsHint: 'Užveskite pelę',
    duration: 'Trukmė',
    weeks: (n) => `${n} ${ltPlural(n, 'savaitė', 'savaitės', 'savaičių')}`,
    delivered: 'Sukurta',
    pages: (n) => `${n} ${ltPlural(n, 'puslapis', 'puslapiai', 'puslapių')}`,
    stack: 'Technologijos',
    scope: 'Paslaugos',
  },

  projects: {
    '01': {
      category: 'El. parduotuvė',
      description:
        'Nonblaze kreipėsi į mus norėdami pristatyti rinkai savo gaisro gesinimo įrenginį. Sukūrėme el. prekybos patirtį, kuri išryškina geriausias produkto savybes, pelno atsargaus pirkėjo pasitikėjimą ir leidžia saugos produktui atrodyti tikrai brangiai — dar prieš perskaitant specifikacijas.',
      scope: 'Prekės ženklas, parduotuvė, atsiskaitymas',
    },
    '02': {
      category: 'Produkto svetainė',
      description:
        'Outr paprašė mus sukurti visą jų dirbtinio intelekto pardavimų platformos produkto patirtį. Sukūrėme drąsų, neatpažįstamai raudoną prekės ženklą, individualiai animuotą maskotę ir sklandų kelių žingsnių atsiskaitymą, kuris registraciją paverčia be galo paprasta.',
      scope: 'Prekės ženklas, svetainė, atsiskaitymas',
    },
    '03': {
      category: 'Rinkodaros svetainė',
      description:
        'Metrichain reikėjo į konversijas orientuotos svetainės jų B2B šaltų el. laiškų paslaugai. Ranka užkodavome aiškų pozicionavimą, interaktyvų kampanijos skaičiuoklį ir pristatomumo įrodymus — viskas tam, kad šalti lankytojai virstų rezervuotais skambučiais.',
      scope: 'Pozicionavimas, svetainė, skaičiuoklis',
    },
    '04': {
      category: 'Web aplikacija',
      description:
        'Scraperity atėjo su duomenų prisodrintu kūrėjų paieškos įrankiu. Išryškinome geriausias jo savybes tankioje ir greitoje valdymo skydelio sąsajoje su gyvais filtrais, realaus laiko duomenų rinkimo būsenomis ir aiškiais srautais net esant dideliam duomenų kiekiui.',
      scope: 'Produkto dizainas, valdymo skydelis, realaus laiko sąsaja',
    },
    '05': {
      category: 'Portfolio svetainė',
      description:
        'Miisstudio, Nyderlanduose įsikūrusi meno agentūra, norėjo, kad pirmiausia kalbėtų darbai. Ranka užkodavome portfolio lygio svetainę su sklandžiais perėjimais ir apgalvota tipografija, kuri leidžia menui kvėpuoti ir atrodyti tikrai galerijos vertai.',
      scope: 'Meninė kryptis, portfolio, turinio valdymas',
    },
  },

  about: {
    title: 'Apie mus',
    lead: 'Jau trejus metus Beaju kuria ir ranka koduoja premium svetaines, dėl kurių įmonės atrodo rimtai: intuityvias, greitas ir sukurtas su aiškiu tikslu. Darome vieną dalyką aukščiausiu lygiu ir nieko daugiau. Būtent dėl to darbas yra geresnis.',
    years: 'Metai patirties',
    projects: 'Įgyvendinti projektai',
    portrait: 'Portretas',
  },

  process: {
    title: 'Mūsų procesas',
    steps: {
      '01': {
        title: 'Tyrimas',
        body: 'Gilinamės į jūsų vartotojus, rinką ir verslo tikslus, kad išsiaiškintume, ką iš tikrųjų reikia išspręsti, dar prieš pradedant kurti.',
      },
      '02': {
        title: 'Struktūra',
        body: 'Sudėliojame struktūrą ir srautus: kiekvieną ekraną, navigacijos kelią ir turinio hierarchiją, kad patirtis būtų logiška dar prieš tampant gražia.',
      },
      '03': {
        title: 'UI dizainas',
        body: 'Atgaiviname struktūrą vizualiniu identitetu: tipografija, spalvomis, išdėstymu ir detalėmis, sudėliotomis pagal jūsų prekės ženklą.',
      },
      '04': {
        title: 'Prototipas',
        body: 'Sukuriame interaktyvias, paspaudžiamas versijas, kad galėtumėte patirti srautą ir pateikti pastabas dar prieš parašant pirmą kodo eilutę.',
      },
      '05': {
        title: 'Sąveika',
        body: 'Pridedame judesį, perėjimus ir mikrosąveikas, kurios produktą paverčia gyvu ir intuityviai valdomu.',
      },
    },
  },

  faq: {
    label: 'Kaip dirbame',
    title: 'Atsakome į klausimus.',
    items: [
      {
        q: 'Ką tiksliai jūs darote?',
        a: 'Kuriame ir ranka koduojame premium svetaines, rinkodaros puslapius ir produktų sąsajas. Viena sritis, atliekama aukščiausiu lygiu, ir nieko daugiau.',
      },
      {
        q: 'Kiek trunka projektas?',
        a: 'Dauguma svetainių užtrunka nuo 3 iki 6 savaičių, priklausomai nuo apimties. Tikslų terminą pateiksime po trumpo pokalbio.',
      },
      {
        q: 'Kiek tai kainuoja?',
        a: 'Kiekvienas projektas turi fiksuotą apimtį ir fiksuotą kainą. Papasakokite, ko reikia, ir atsiųsime aiškų pasiūlymą dar prieš pradedant darbus, kad nebūtų jokių netikėtumų.',
      },
      {
        q: 'Ar naudojate šablonus arba puslapių konstruktorius?',
        a: 'Niekada. Kiekviena eilutė rašoma ranka — būtent todėl mūsų svetainės kraunasi greičiau, veikia sklandžiau ir tarnauja ilgiau.',
      },
      {
        q: 'Ko iš mūsų reikia, kad pradėtume?',
        a: 'Trumpo pokalbio, jūsų tikslų ir turimos prekės ženklo medžiagos. Visa kita pasirūpiname mes ir informuojame jus kiekviename žingsnyje.',
      },
    ],
  },

  testimonials: {
    label: 'Ką jie sako',
    dotAria: (company) => `Rodyti ${company} atsiliepimą`,
    roles: { t1: 'Įkūrėjas', t2: 'Augimo vadovas', t3: 'Kūrybos vadovas' },
    quotes: {
      t1: 'Žmonės apie svetainę visai negalvoja. Jie tiesiog jaučia, kad įmonė už jos yra rimta. Nuo pirmo skambučio iki paleidimo viskas vyko sklandžiai, o jų sukurtas atsiskaitymo srautas konvertuoja pastebimai geriau nei anksčiau.',
      t2: 'Greita, sklandu ir akivaizdžiai individualu. Pagaliau atrodo verta savo kainos. Jų ranka užkoduotas kampanijų skaičiuoklis tapo geriausiai konvertuojančiu puslapiu, o rezervuotų skambučių padaugėjo jau pirmą mėnesį.',
      t3: 'Jie sukūrė portfolio svetainę, kurioje darbai tikrai kvėpuoja. Galerijos vertė tipografija, perėjimai, kurie niekada nestringa, ir žaibiškas krovimasis. Klientai dabar mus vertina rimčiau dar nespėjus prabilti.',
    },
  },

  contact: {
    availability: 'Priimame naujus projektus · 2026 III ketv.',
    headline: ['Pamatykite', 'skirtumą', 'patys'],
    aria: 'Pamatykite skirtumą patys',
    cta: 'Rezervuoti 20 min. pokalbį',
    ctaSubject: '20 minučių pokalbio rezervacija',
    instagram: 'Instagram',
    rights: '© 2026 Beaju · Visos teisės saugomos',
    tagline: 'Koduojame ranka. Jokių šablonų.',
    privacy: 'Privatumas',
    imprint: 'Rekvizitai',
    backToTop: 'Į viršų ↑',
    close: 'Uždaryti',
    privacyBody: [
      'Jūsų atsiųstus duomenis (el. paštą ir, jei nurodėte, telefono numerį) naudojame tik tam, kad atsakytume į jūsų užklausą. Duomenų neparduodame ir šioje svetainėje nenaudojame trečiųjų šalių reklamos sekimo įrankių.',
      'Norėdami sužinoti, kokius duomenis turime, arba paprašyti juos ištrinti, rašykite hello@beaju.com.',
    ],
    privacyNote:
      'Laikinas tekstas — prieš paleidimą pakeiskite savo patvirtinta privatumo politika.',
    imprintBody: 'Beaju — nepriklausoma interneto svetainių studija.',
    imprintDetails: '[Registruotas įmonės pavadinimas, kodas ir adresas]',
    imprintNote:
      'Laikinas tekstas — prieš paleidimą įrašykite tikrus įmonės registracijos duomenis.',
  },

  lang: { label: 'Kalba', choose: 'Pasirinkite kalbą' },
}
