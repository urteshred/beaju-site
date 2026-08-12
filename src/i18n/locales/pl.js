// Polski — Polish.
const plPlural = (n, one, few, many) => {
  if (n === 1) return one
  const m10 = n % 10
  const m100 = n % 100
  if (m10 >= 2 && m10 <= 4 && !(m100 >= 12 && m100 <= 14)) return few
  return many
}

export default {
  code: 'pl',
  label: 'Polski',
  htmlLang: 'pl',

  meta: {
    title: 'VANTHORE — Premium strony pisane ręcznie',
    description:
      'Vanthore projektuje i ręcznie koduje premium strony, które ładują się błyskawicznie, wyglądają drogo i budują zaufanie od pierwszej sekundy.',
  },

  nav: { works: 'Realizacje', about: 'O nas', contact: 'Kontakt' },

  hero: {
    eyebrow: 'Jesteśmy Vanthore i projektujemy',
    lines: ['Strony', 'które budują', 'zaufanie'],
    aria: 'Strony, które budują zaufanie',
  },

  rail: {
    call: 'Zadzwoń',
    email: 'E-mail',
    instagram: 'Insta',
    copy: 'Kopiuj',
    copied: 'Skopiowano!',
  },

  showcase: {
    label: 'Tworzone ręcznie',
    title: 'Tak wygląda strona, gdy ',
    titleStrong: 'każda linia kodu jest pisana dla Ciebie.',
  },

  work: {
    label: 'Wybrane realizacje',
    visit: 'Otwórz',
    visitAria: (name) => `Otwórz stronę ${name}`,
    details: 'Szczegóły projektu',
    detailsHint: 'Najedź kursorem',
    duration: 'Czas realizacji',
    weeks: (n) => `${n} ${plPlural(n, 'tydzień', 'tygodnie', 'tygodni')}`,
    delivered: 'Zakres',
    pages: (n) => `${n} ${plPlural(n, 'strona', 'strony', 'stron')}`,
    stack: 'Technologie',
    scope: 'Usługi',
  },

  projects: {
    '01': {
      category: 'Sklep internetowy',
      description:
        'Nonblaze zgłosili się do nas, aby wprowadzić na rynek swoje urządzenie gaśnicze. Zbudowaliśmy doświadczenie zakupowe, które pokazuje najlepsze cechy produktu, zdobywa zaufanie ostrożnego kupującego i sprawia, że produkt bezpieczeństwa wygląda naprawdę premium — jeszcze przed przeczytaniem specyfikacji.',
      scope: 'Marka, sklep, koszyk',
    },
    '02': {
      category: 'Strona produktu',
      description:
        'Outr poprosili nas o zbudowanie całego doświadczenia produktowego ich platformy AI do cold outreachu. Dostarczyliśmy odważną, rozpoznawalną czerwoną markę, animowaną maskotkę i płynny wieloetapowy koszyk, dzięki któremu rejestracja jest bezwysiłkowa.',
      scope: 'Marka, strona produktu, koszyk',
    },
    '03': {
      category: 'Strona marketingowa',
      description:
        'Metrichain potrzebowali strony nastawionej na konwersję dla swojej usługi B2B cold mailingu. Ręcznie zakodowaliśmy ostre pozycjonowanie, interaktywny kalkulator kampanii i dowody dostarczalności — wszystko po to, by zimny ruch zamieniać w umówione rozmowy.',
      scope: 'Pozycjonowanie, strona, kalkulator',
    },
    '04': {
      category: 'Aplikacja webowa',
      description:
        'Scraperity przyszli do nas z narzędziem do wyszukiwania twórców, pełnym danych. Pokazaliśmy jego najlepsze funkcje w gęstym, szybkim panelu z żywymi filtrami, stanami zbierania danych w czasie rzeczywistym i widokami lejka, które pozostają czytelne nawet przy dużej ilości danych.',
      scope: 'Design produktu, panel, interfejs real-time',
    },
    '05': {
      category: 'Portfolio',
      description:
        'Miisstudio, agencja artystyczna z Holandii, chciała, by mówiły same prace. Ręcznie zakodowaliśmy stronę klasy portfolio z płynnymi przejściami i przemyślaną typografią, która pozwala sztuce oddychać i wyglądać naprawdę galeryjnie.',
      scope: 'Kierunek artystyczny, portfolio, CMS',
    },
  },

  about: {
    title: 'O nas',
    lead: 'Od trzech lat Vanthore projektuje i ręcznie koduje premium strony, dzięki którym firmy wyglądają poważnie: intuicyjne, szybkie i tworzone z intencją. Robimy jedną rzecz na najwyższym poziomie i nic poza tym. Właśnie dlatego efekt jest lepszy.',
    years: 'Lata doświadczenia',
    projects: 'Zrealizowanych projektów',
    portrait: 'Portret',
    readMore: 'Więcej o nas',
  },

  process: {
    title: 'Nasz proces',
    steps: {
      '01': {
        title: 'Research',
        body: 'Zagłębiamy się w Twoich użytkowników, rynek i cele biznesowe, by odkryć, co naprawdę trzeba rozwiązać, zanim cokolwiek zaprojektujemy.',
      },
      '02': {
        title: 'Struktura',
        body: 'Układamy strukturę i ścieżki: każdy ekran, nawigację i hierarchię treści, żeby doświadczenie miało sens, zanim zacznie ładnie wyglądać.',
      },
      '03': {
        title: 'Projekt UI',
        body: 'Ożywiamy strukturę identyfikacją wizualną: typografia, kolor, układ i detal, zbudowane wokół Twojej marki.',
      },
      '04': {
        title: 'Prototyp',
        body: 'Budujemy interaktywne, klikalne wersje, żebyś przeszedł ścieżkę i dał uwagi przed napisaniem pierwszej linijki kodu.',
      },
      '05': {
        title: 'Interakcje',
        body: 'Dodajemy ruch, przejścia i mikrointerakcje, które sprawiają, że produkt jest żywy i intuicyjny.',
      },
    },
  },

  faq: {
    label: 'Jak pracujemy',
    title: 'Odpowiadamy na pytania.',
    items: [
      {
        q: 'Czym dokładnie się zajmujecie?',
        a: 'Projektujemy i ręcznie kodujemy premium strony, landing pages i interfejsy produktów. Jedna dziedzina na najwyższym poziomie i nic poza tym.',
      },
      {
        q: 'Ile trwa projekt?',
        a: 'Większość stron zajmuje od 3 do 6 tygodni w zależności od zakresu. Konkretny termin podamy po krótkiej rozmowie.',
      },
      {
        q: 'Ile to kosztuje?',
        a: 'Każdy projekt ma stały zakres i stałą cenę. Powiedz, czego potrzebujesz, a wyślemy jasną wycenę przed startem prac — bez niespodzianek.',
      },
      {
        q: 'Czy używacie szablonów lub kreatorów stron?',
        a: 'Nigdy. Każda linijka jest pisana ręcznie — właśnie dlatego nasze strony ładują się szybciej, działają płynniej i służą dłużej.',
      },
      {
        q: 'Czego potrzebujecie od nas na start?',
        a: 'Krótkiej rozmowy, Twoich celów i materiałów marki, jeśli je masz. Resztą zajmujemy się my i informujemy Cię na każdym kroku.',
      },
    ],
  },

  testimonials: {
    label: 'Co mówią klienci',
    dotAria: (company) => `Pokaż opinię ${company}`,
    roles: { t1: 'Założyciel', t2: 'Head of Growth', t3: 'Dyrektor kreatywny' },
    quotes: {
      t1: 'Ludzie w ogóle nie myślą o stronie. Po prostu czują, że stoi za nią poważna firma. Od pierwszej rozmowy do startu wszystko poszło gładko, a zbudowany przez nich koszyk konwertuje zauważalnie lepiej niż poprzedni.',
      t2: 'Szybko, płynnie i wyraźnie na zamówienie. Wreszcie wygląda na wartą swojej ceny. Ich kalkulator kampanii stał się najlepiej konwertującą podstroną, a umówionych rozmów przybyło już w pierwszym miesiącu.',
      t3: 'Zbudowali portfolio, w którym prace naprawdę oddychają. Galeryjna typografia, przejścia bez zacięć i błyskawiczne ładowanie. Klienci traktują nas poważniej, zanim powiemy słowo.',
    },
  },

  contact: {
    availability: 'Przyjmujemy nowe projekty · III kw. 2026',
    headline: ['Zobacz', 'różnicę', 'sam'],
    aria: 'Zobacz różnicę sam',
    cta: 'Umów 20-minutową rozmowę',
    ctaSubject: 'Rezerwacja 20-minutowej rozmowy',
    instagram: 'Instagram',
    rights: '© 2026 Vanthore · Wszelkie prawa zastrzeżone',
    tagline: 'Kodowane ręcznie. Nigdy z szablonu.',
    privacy: 'Prywatność',
    imprint: 'Dane firmy',
    backToTop: 'Do góry ↑',
    close: 'Zamknij',
    privacyBody: [
      'Dane, które nam wysyłasz (e-mail i, jeśli podasz, numer telefonu), wykorzystujemy wyłącznie do odpowiedzi na Twoje zapytanie. Nie sprzedajemy danych i nie używamy na tej stronie zewnętrznych trackerów reklamowych.',
      'Aby dowiedzieć się, jakie dane przechowujemy, lub poprosić o ich usunięcie, napisz na hello@vanthore.com.',
    ],
    privacyNote:
      'Tekst tymczasowy — przed startem zastąp go zatwierdzoną polityką prywatności.',
    imprintBody: 'Vanthore — niezależne studio webowe.',
    imprintDetails: '[Nazwa firmy, numer rejestrowy i adres]',
    imprintNote:
      'Tekst tymczasowy — przed startem dodaj prawdziwe dane rejestrowe firmy.',
  },

  lang: { label: 'Język', choose: 'Wybierz język' },
}
