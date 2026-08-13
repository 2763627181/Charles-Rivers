export interface Dictionary {
  meta: {
    siteName: string;
  };
  nav: {
    guide: string;
    aging: string;
    coatColors: string;
    earId: string;
    health: string;
    sexing: string;
    reference: string;
    menu: string;
    backToGuide: string;
    identificationGroup: string;
  };
  language: {
    select: string;
    chooseLanguage: string;
  };
  home: {
    badge: string;
    title: string;
    titleAccent: string;
    description: string;
    quickAccess: string;
    quickAccessSubtitle: string;
    exploreReference: string;
  };
  cards: {
    aging: { title: string; description: string };
    coatColors: { title: string; description: string };
    earId: { title: string; description: string };
    health: { title: string; description: string };
    sexing: { title: string; description: string };
  };
  guideDashboard: {
    badge: string;
    title: string;
    description: string;
    exploreCta: string;
    referenceCta: string;
    referenceTitle: string;
    referenceDescription: string;
  };
  species: {
    chooseSpecies: string;
    mouse: string;
    rat: string;
  };
  aging: {
    title: string;
    subtitle: string;
    viewGrid: string;
    viewTimeline: string;
    day: string;
    birth: string;
    weeks: string;
    viewDetails: string;
    characteristics: string;
    age: string;
  };
  coatColors: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    filterAll: string;
    filterMouse: string;
    filterRat: string;
    mouseOnly: string;
    ratOnly: string;
    bothSpecies: string;
  };
  earId: {
    title: string;
    subtitle: string;
    chartTitle: string;
    identificationMark: string;
    identificationSlice: string;
    correct: string;
    incorrectAngle: string;
    incorrectAmount: string;
    incorrectDepth: string;
    bestPractices: string;
    bestPracticesItems: string[];
  };
  health: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    categories: {
      all: string;
      headBody: string;
      eyes: string;
      reproDigest: string;
      neurological: string;
      emergency: string;
      handbook: string;
    };
    disclaimer: string;
    emergencyWarning: string;
    neurologicalBadge: string;
    handbookTitle: string;
    handbookDescription: string;
    handbookAuthors: string;
    handbookCta: string;
    handbookUnavailable: string;
    signsCount: string;
  };
  sexing: {
    title: string;
    subtitle: string;
    male: string;
    female: string;
    keyDifferences: string;
    anogenitalDistance: string;
    anogenitalDistanceDesc: string;
    testes: string;
    testesDesc: string;
    nipples: string;
    nipplesDesc: string;
  };
  reference: {
    title: string;
    subtitle: string;
    openOriginal: string;
  };
  search: {
    placeholder: string;
    inputPlaceholder: string;
    noResults: string;
    tryAnother: string;
    categories: string;
    signs: string;
    stages: string;
    colors: string;
    pages: string;
    shortcutHint: string;
  };
  footer: {
    tagline: string;
    referenceNote: string;
    rightsNote: string;
  };
  common: {
    noResults: string;
    tryAnother: string;
    explore: string;
    close: string;
    back: string;
    male: string;
    female: string;
  };
}
