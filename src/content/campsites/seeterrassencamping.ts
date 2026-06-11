import type { CampsiteConfig } from "../types";

/**
 * Seeterrassencamping Wolfgangsee — Quelle: raw/digest (eigene Website).
 * 100 % quellbasiert. Preise sind Richtpreise (Website nennt keine) → offen ausgewiesen.
 * Chalets „Ausseerland" sind ein PARTNERBETRIEB an anderem Ort → bewusst nicht aufgenommen.
 */
const IMG = "/campsites/seeterrassencamping";

const seeterrassencamping: CampsiteConfig = {
  name: "Seeterrassencamping",
  shortName: "Seeterrasse",
  slug: "seeterrassencamping",
  ort: "St. Wolfgang im Salzkammergut",
  region: "Salzkammergut",
  brandKind: "Camping am See",
  see: "Wolfgangsee",
  regionLong: "Wolfgangsee · Salzkammergut · Österreich",

  theme: "editorial",
  heroVariant: "left",

  claim: "Der kleine, feine Platz am Wolfgangsee",
  claimEmphasis: "am Wolfgangsee",
  intro:
    "Vierzig Plätze an einer ruhigen Seestraße, terrassiert für den Blick aufs Wasser — zehn Gehminuten an der Promenade entlang liegt das Zentrum von St. Wolfgang.",

  logo: { src: `${IMG}/logo-9b933019ee.png`, alt: "Seeterrassencamping Logo" },

  statement: {
    text: "Durch die angelegten Terrassen schaut fast jeder Platz auf den See — oder auf die Berge ringsum.",
    emphasis: "fast jeder Platz",
  },

  pillars: [
    {
      title: "Direkt am Wolfgangsee",
      text: "Der Platz liegt unmittelbar am Ufer — vom Stellplatz sind es nur wenige Schritte hinunter ans Wasser.",
      image: { src: `${IMG}/amenity-2889de2724.webp`, alt: "Wohnmobil mit Vorzelt am Ufer des Wolfgangsees" },
    },
    {
      title: "Terrassierte Stellplätze",
      text: "Über angelegte Terrassen reicht der Blick von den meisten Plätzen auf den See und das Bergpanorama dahinter.",
      image: { src: `${IMG}/amenity-e89bd693c8.webp`, alt: "Terrassierter Stellplatz mit Seeblick am Wolfgangsee" },
    },
    {
      title: "Bergpanorama ringsum",
      text: "Rundum schließen die Gipfel des Salzkammerguts den See ein — die Aussicht gehört hier zum Stellplatz dazu.",
      image: { src: `${IMG}/amenity-9bf1e33b69.webp`, alt: "Wohnwagen mit Blick auf See und Berge" },
    },
  ],

  usps: [
    "40 Touristenstellplätze",
    "Direkt am Wolfgangsee",
    "10 Gehminuten ins Zentrum",
    "Gratis WLAN",
    "Haustiere an der Leine",
    "Familiär geführt",
  ],

  trust: {
    heading: "Ein Platzerl direkt am See",
    headingEmphasis: "direkt am See",
    intro:
      "Ruhig an einer Sackgasse, gepflegt und überschaubar: hier campst du am Wasser, gehst zu Fuß nach St. Wolfgang und hast Schafbergbahn und Schiffsanleger gleich nebenan.",
  },

  awards: [{ label: "camping.info Top 1001 · 2026" }],

  hero: {
    aerial: { src: `${IMG}/amenity-deb5d87c03.webp`, alt: "Seeterrassencamping: Blick über den Platz auf den Wolfgangsee" },
  },

  breather: {
    image: { src: `${IMG}/amenity-8cfa6bf10f.webp`, alt: "Weiter Blick über den Wolfgangsee und die Berge" },
    line: "Abseits von Lärm, Hektik und Massentourismus.",
  },

  camping: {
    heading: "Camping am Wolfgangsee",
    intro:
      "Vom Stellplatz an der Seestraße zum Ortskern, zur Schafbergbahn oder ins Wasser — hier ist alles fußläufig und der See immer in Sichtweite.",
    features: [
      {
        title: "Plätze mit Seeblick",
        text: "Die Traum- und Herzensplätze liegen terrassiert zum Wasser — morgens als Erstes der Blick auf den Wolfgangsee.",
        image: { src: `${IMG}/amenity-b51684e1df.webp`, alt: "Stellplatz mit Seeblick am Seeterrassencamping" },
      },
      {
        title: "Sonnenterrasse zur Aussicht",
        text: "Oben am Platz lädt die Sonnenterrasse mit dem „Bankerl zur schönen Aussicht“ zum Verweilen über dem See ein.",
        image: { src: `${IMG}/amenity-e9b943b4d2.webp`, alt: "Sonnenterrasse mit Seeblick und Sitzplätzen" },
      },
      {
        title: "Saubere Sanitäranlagen",
        text: "Gepflegte Duschen und WCs, dazu Waschmaschine und Wäschetrockner für die längeren Aufenthalte.",
        image: { src: `${IMG}/amenity-7cabada1a3.webp`, alt: "Saubere Sanitäranlagen mit Duschen am Campingplatz" },
      },
      {
        title: "Sommer am Seeufer",
        text: "Wiese, Wasser und Berge: im Sommer reihen sich Zelte und Wohnwagen entlang der Uferterrassen.",
        image: { src: `${IMG}/amenity-0cb44737bb.webp`, alt: "Zelte und Wohnwagen im Sommer am Wolfgangsee" },
      },
      {
        title: "Weite Panoramaplätze",
        text: "Großzügige Plätze mit freiem Blick über den See bis zu den Bergen — Raum für Vorzelt und Sonnenliege.",
        image: { src: `${IMG}/amenity-87f343d27e.webp`, alt: "Großer Stellplatz mit Panoramablick auf den See" },
      },
      {
        title: "Wiese mit Baumbestand",
        text: "Schöner Baumbestand spendet Schatten, dazwischen liegen offene Wiesenflächen mit Blick Richtung See.",
        image: { src: `${IMG}/amenity-b3043a62a5.webp`, alt: "Wiesenfläche mit Bäumen und Blick zum Wolfgangsee" },
      },
    ],
  },

  mobilheime: {
    heading: "Appartements & Zimmer",
    intro:
      "Südseitig gelegen, mit Balkon und Seeblick: die Ferienwohnungen und Zimmer liegen wenige Schritte vom Campingplatz, mit Gratis-Carport am Haus.",
    items: [
      {
        name: "Ferienwohnung",
        kind: "Appartement für 2 Personen",
        text: "Separates Schlaf- und Wohnzimmer, komplett ausgestattete Küche und ein Balkon mit See- und Panoramablick.",
        image: { src: `${IMG}/accommodation-cc4916507b.webp`, alt: "Wohnzimmer der Ferienwohnung mit Seeblick" },
        features: ["Dusche/WC", "Komplette Küche", "Balkon mit Seeblick", "2× Sat-TV", "Gratis Internet", "Carport am Haus"],
      },
      {
        name: "Doppelzimmer",
        kind: "Zimmer für 1–2 Personen",
        text: "Gemütliches Zimmer mit kleinem Bad, Sat-TV und Balkon mit Blick auf See und Berge — inklusive Schlaf-gut-Kissenauswahl.",
        image: { src: `${IMG}/amenity-5ebbd02ecd.webp`, alt: "Zimmer mit Balkon und Blick auf See und Berge" },
        features: ["Dusche/WC", "Balkon mit Seeblick", "Sat-TV", "Gratis Internet", "Carport am Haus"],
      },
    ],
  },

  anreise: {
    heading: "Anfahrt am See entlang",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Vor dem Ortszentrum St. Wolfgang durch den Tunnel, danach ca. 2 km am See entlang der Beschilderung folgen — nicht dem Navi die Straße bergauf nehmen.",
      },
      {
        title: "Bahn & Schiff",
        text: "Über Bad Ischl oder Salzburg ins Salzkammergut; Schiffsanleger und Schafbergbahn liegen nur wenige Minuten entfernt.",
      },
      {
        title: "Zu Fuß ins Zentrum",
        text: "Entlang der Seepromenade sind es rund zehn Gehminuten bis ins Zentrum von St. Wolfgang.",
      },
    ],
  },

  galerie: {
    heading: "Bilder vom Platz",
    headingEmphasis: "vom Platz",
    intro:
      "Sommer und Herbst, Wiese und Wasser, Plätze und Aussicht — ein paar Eindrücke vom Seeterrassencamping am Wolfgangsee.",
    tag: "Wolfgangsee · Salzkammergut",
    moreCount: 30,
    images: [
      { src: `${IMG}/amenity-f55e8134d2.webp`, alt: "Luftaufnahme des Campingplatzes am Wolfgangsee" },
      { src: `${IMG}/amenity-7e33ad2c2e.webp`, alt: "Terrassenblick über den Platz auf den See" },
      { src: `${IMG}/amenity-cddb8e4f45.webp`, alt: "Sommertag mit Zelten und Wohnwagen am See" },
      { src: `${IMG}/amenity-8b76fe9f7e.webp`, alt: "Ruhiger Stellplatz mit Blick auf den Wolfgangsee" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz am See",
    headingEmphasis: "am See",
    intro:
      "Sag uns Zeitraum und Personenzahl — wir melden uns persönlich mit deiner Verfügbarkeit am Wolfgangsee.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreise — auf der Website sind keine Preise angegeben (bitte bestätigen). Pro Nacht, 2 Personen inkl. Strom, zzgl. Ortstaxe.",
    highlight: { title: "Zehn Minuten ins Zentrum", text: "An der Seepromenade entlang zu Fuß nach St. Wolfgang." },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 34, perExtraGuest: 9 },
      { id: "seeblick", label: "Stellplatz Seeblick", perNight: 39, perExtraGuest: 9 },
      { id: "appartement", label: "Appartement (2 Pers.)", perNight: 110 },
      { id: "zimmer", label: "Doppelzimmer (1–2 Pers.)", perNight: 78 },
    ],
  },

  kontakt: {
    tel: "+43 6138 3201",
    telHref: "tel:+4361383201",
    mail: "kontakt@seeterrassencamping.at",
    adresse: "Ried 18 · 5360 St. Wolfgang im Salzkammergut · Österreich",
    coords: { lat: 47.7419, lng: 13.4328 },
  },

  languages: ["DE", "EN"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Sonnenterrasse", href: "#camping" },
      ],
    },
    { label: "Appartements", href: "#mobilheime" },
    { label: "Galerie", href: "#galerie" },
    {
      label: "Preise & Anfahrt",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anfahrt", href: "#anreise" },
      ],
    },
  ],
};

export default seeterrassencamping;
