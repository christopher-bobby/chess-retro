"use client";

import Link from "next/link";
import { useState } from "react";

interface Legend {
  name: string;
  years: string;
  title: string;
  country: string;
  countryFlag: string;
  description: string;
  style: string;
  achievements: string[];
  famousQuote: string;
  notableGames?: string[];
  rivals?: string[];
  legacy?: string;
}

interface Century {
  id: string;
  name: string;
  period: string;
  description: string;
  legends: Legend[];
}

const centuries: Century[] = [
  {
    id: "18th",
    name: "18th Century",
    period: "1700-1799",
    description: "The Age of Enlightenment brought the first systematic study of chess. Coffee houses became the battlegrounds for the game's earliest masters.",
    legends: [
      {
        name: "François-André Danican Philidor",
        years: "1726-1795",
        title: "Greatest Player of the 18th Century",
        country: "France",
        countryFlag: "🇫🇷",
        description: "A musical composer and chess master who dominated European chess for 50 years. His book 'Analyse du jeu des Échecs' (1749) was the most influential chess book for over a century.",
        style: "Positional, Pawn-focused",
        achievements: [
          "Undefeated in match play for decades",
          "Wrote first comprehensive chess strategy book",
          "Famous for 'Pawns are the soul of chess'",
          "Developed Philidor Defense (1.e4 e5 2.Nf3 d6)",
          "Could play blindfolded against multiple opponents",
        ],
        famousQuote: "Pawns are the soul of chess.",
        notableGames: ["Philidor vs Unknown, 1790 - Demonstrating pawn play"],
        rivals: ["Legall de Kermeur", "Verdoni", "Count Brühl"],
        legacy: "Established the foundation of positional chess theory that would influence all future champions.",
      },
      {
        name: "Legall de Kermeur",
        years: "1702-1792",
        title: "Leading French Master",
        country: "France",
        countryFlag: "🇫🇷",
        description: "Philidor's teacher and a dominant force at the Café de la Régence. Famous for the 'Legall Trap' that still catches players today.",
        style: "Tactical, Trappy",
        achievements: [
          "Mentor to Philidor",
          "Created the famous 'Legall Trap'",
          "Dominated Parisian chess for decades",
          "Master of tactical combinations",
        ],
        famousQuote: "The trap is set, the prey must fall.",
        notableGames: ["Legall Trap - The most famous chess trap"],
        legacy: "His tactical patterns remain studied by beginners and masters alike.",
      },
      {
        name: "Giambattista Lolli",
        years: "1698-1769",
        title: "Italian Chess Theoretician",
        country: "Italy",
        countryFlag: "🇮🇹",
        description: "Author of 'Osservazioni teorico-pratiche sopra il giuoco degli scacchi' (1763), one of the most comprehensive early chess works covering openings, middlegames, and endgames.",
        style: "Theoretical, Analytical",
        achievements: [
          "Wrote comprehensive chess treatise",
          "Advanced Italian Game theory",
          "Analyzed King's Gambit extensively",
          "Influenced Romantic era openings",
        ],
        famousQuote: "Theory lights the path; practice walks it.",
        legacy: "His theoretical work bridged medieval Italian chess tradition with modern analysis.",
      },
    ],
  },
  {
    id: "19th",
    name: "19th Century",
    period: "1800-1899",
    description: "The Romantic Era of chess - an age of brilliant sacrifices, daring attacks, and the birth of international competition.",
    legends: [
      {
        name: "Paul Morphy",
        years: "1837-1884",
        title: "Pride and Sorrow of Chess",
        country: "USA",
        countryFlag: "🇺🇸",
        description: "The first American chess genius who dominated world chess from 1857-1859 before retiring at 22. His games remain perfect teaching examples.",
        style: "Rapid Development, Attacking",
        achievements: [
          "Defeated all European masters in 1858",
          "The Opera Game - most famous game ever",
          "Unofficial World Champion",
          "Retired at peak, never defeated",
        ],
        famousQuote: "Help your pieces so they can help you.",
        notableGames: ["Opera Game vs Duke/Count", "Morphy vs Paulsen 1857"],
        rivals: ["Adolf Anderssen", "Louis Paulsen", "Daniel Harrwitz"],
        legacy: "Set the standard for attacking play that would define the Romantic era.",
      },
      {
        name: "Adolf Anderssen",
        years: "1818-1879",
        title: "King of the Romantic Era",
        country: "Germany",
        countryFlag: "🇩🇪",
        description: "Won the first international tournament (London 1851) and played 'The Immortal Game' and 'The Evergreen Game.'",
        style: "Romantic, Sacrificial",
        achievements: [
          "Won first international tournament (1851)",
          "Played 'The Immortal Game' and 'The Evergreen Game'",
          "World's best player 1851-1858, 1862-1866",
          "Master of King's Gambit",
        ],
        famousQuote: "In the attack, pieces have no value; only position matters.",
        notableGames: ["Immortal Game vs Kieseritzky", "Evergreen Game vs Dufresne"],
        rivals: ["Paul Morphy", "Wilhelm Steinitz", "Louis Paulsen"],
        legacy: "His games embody the romantic spirit of chess.",
      },
      {
        name: "Wilhelm Steinitz",
        years: "1836-1900",
        title: "1st Official World Champion (1886-1894)",
        country: "Austria/USA",
        countryFlag: "🇦🇹",
        description: "The father of positional chess who revolutionized the game by proving small advantages matter.",
        style: "Positional, Scientific",
        achievements: [
          "First official World Chess Champion",
          "Created modern positional theory",
          "Undefeated in matches for 28 years",
          "Founded 'The International Chess Magazine'",
        ],
        famousQuote: "Chess is not for timid souls.",
        notableGames: ["Steinitz vs Von Bardeleben 1895"],
        rivals: ["Johannes Zukertort", "Mikhail Chigorin", "Emanuel Lasker"],
        legacy: "Transformed chess from an art into a science.",
      },
      {
        name: "Emanuel Lasker",
        years: "1868-1941",
        title: "2nd World Champion (1894-1921)",
        country: "Germany",
        countryFlag: "🇩🇪",
        description: "Held the world championship for 27 years - the longest reign in history. A philosopher and mathematician.",
        style: "Psychological, Practical",
        achievements: [
          "Longest reigning World Champion (27 years)",
          "Defeated Steinitz, Tarrasch, Marshall",
          "Philosopher and mathematician",
          "Never lost a match until age 52",
        ],
        famousQuote: "When you see a good move, look for a better one.",
        notableGames: ["Lasker vs Capablanca 1914", "Lasker vs Bauer 1889"],
        rivals: ["Wilhelm Steinitz", "Siegbert Tarrasch", "José Capablanca"],
        legacy: "Proved that psychology matters as much as pure technique.",
      },
      {
        name: "Mikhail Chigorin",
        years: "1850-1908",
        title: "Father of Russian Chess",
        country: "Russia",
        countryFlag: "🇷🇺",
        description: "The founder of the Russian chess school who challenged Steinitz twice for the World Championship.",
        style: "Dynamic, Creative",
        achievements: [
          "Founder of Russian chess school",
          "Two-time World Championship challenger",
          "Chigorin Defense and Chigorin Variation",
          "Promoted chess throughout Russia",
        ],
        famousQuote: "A knight on f5 is worth a pawn.",
        rivals: ["Wilhelm Steinitz", "Emanuel Lasker"],
        legacy: "Planted the seeds for Soviet chess dominance.",
      },
      {
        name: "Harry Nelson Pillsbury",
        years: "1872-1906",
        title: "American Chess Genius",
        country: "USA",
        countryFlag: "🇺🇸",
        description: "Won Hastings 1895 ahead of Lasker and Steinitz on his first European appearance. Died tragically young.",
        style: "Tactical, Aggressive",
        achievements: [
          "Won Hastings 1895 at age 22",
          "Defeated Lasker and Steinitz",
          "Famous blindfold exhibitions",
          "Developed Pillsbury Attack",
        ],
        famousQuote: "When in doubt, push a pawn.",
        rivals: ["Emanuel Lasker", "Wilhelm Steinitz"],
        legacy: "His early death robbed chess of a potential World Champion.",
      },
    ],
  },
  {
    id: "20th",
    name: "20th Century",
    period: "1900-1999",
    description: "The century of Soviet dominance, Cold War battles, and the rise of chess as a professional sport.",
    legends: [
      {
        name: "José Raúl Capablanca",
        years: "1888-1942",
        title: "3rd World Champion (1921-1927)",
        country: "Cuba",
        countryFlag: "🇨🇺",
        description: "The 'Chess Machine' - his technique was so perfect he lost only 34 serious games in his career.",
        style: "Classical, Effortless Perfection",
        achievements: [
          "Lost only 34 serious games in career",
          "8-year unbeaten streak",
          "Learned chess at age 4",
          "Cuban national hero",
        ],
        famousQuote: "You may learn much more from a game you lose than from a game you win.",
        notableGames: ["Capablanca vs Marshall 1918"],
        rivals: ["Emanuel Lasker", "Alexander Alekhine"],
        legacy: "Set the standard for technical perfection.",
      },
      {
        name: "Alexander Alekhine",
        years: "1892-1946",
        title: "4th World Champion (1927-1935, 1937-1946)",
        country: "Russia/France",
        countryFlag: "🇷🇺",
        description: "A fierce combinational player who defeated Capablanca and died as reigning World Champion.",
        style: "Attacking, Deep Calculation",
        achievements: [
          "Defeated 'invincible' Capablanca",
          "Only champion to die holding title",
          "Created Alekhine's Defense",
          "Extraordinary combinational vision",
        ],
        famousQuote: "Chess first of all teaches you to be objective.",
        notableGames: ["Alekhine vs Reti 1925"],
        rivals: ["José Capablanca", "Max Euwe"],
        legacy: "Proved that fighting spirit could defeat the greatest talent.",
      },
      {
        name: "Mikhail Botvinnik",
        years: "1911-1995",
        title: "6th World Champion (1948-1963)",
        country: "Soviet Union",
        countryFlag: "🇷🇺",
        description: "The 'Patriarch of Soviet Chess' who trained Karpov, Kasparov, and Kramnik.",
        style: "Scientific, Prepared",
        achievements: [
          "Father of Soviet chess school",
          "Regained title twice",
          "Trained three future World Champions",
          "Pioneer of computer chess",
        ],
        famousQuote: "Chess is the art of analysis.",
        notableGames: ["Botvinnik vs Capablanca 1938"],
        rivals: ["Vasily Smyslov", "Mikhail Tal"],
        legacy: "Created the training methods that dominated chess for 50 years.",
      },
      {
        name: "Mikhail Tal",
        years: "1936-1992",
        title: "8th World Champion (1960-1961)",
        country: "Soviet Union (Latvia)",
        countryFlag: "🇱🇻",
        description: "The 'Magician from Riga' - his sacrifices seemed to defy the laws of chess.",
        style: "Attacking, Sacrificial Magic",
        achievements: [
          "Youngest World Champion at the time",
          "Six-time Soviet Champion",
          "Sacrifices defied computer analysis",
          "Most entertaining player ever",
        ],
        famousQuote: "You must take your opponent into a deep dark forest where 2+2=5.",
        notableGames: ["Tal vs Larsen 1965"],
        rivals: ["Mikhail Botvinnik", "Bobby Fischer"],
        legacy: "Proved that imagination could triumph over cold calculation.",
      },
      {
        name: "Bobby Fischer",
        years: "1943-2008",
        title: "11th World Champion (1972-1975)",
        country: "USA",
        countryFlag: "🇺🇸",
        description: "The American genius who single-handedly broke Soviet chess hegemony in 1972.",
        style: "Universal, Relentless Perfectionist",
        achievements: [
          "Ended Soviet chess dominance",
          "Perfect 6-0 in Candidates matches",
          "Highest rating ever (at the time)",
          "Only American-born World Champion",
        ],
        famousQuote: "Chess is life.",
        notableGames: ["Game of the Century vs Byrne", "Fischer vs Spassky G6 1972"],
        rivals: ["Boris Spassky", "Tigran Petrosian"],
        legacy: "Made chess a global phenomenon.",
      },
      {
        name: "Anatoly Karpov",
        years: "1951-",
        title: "12th World Champion (1975-1985)",
        country: "Soviet Union/Russia",
        countryFlag: "🇷🇺",
        description: "Master of the positional squeeze. His 'boa constrictor' style suffocated opponents.",
        style: "Positional, Prophylactic",
        achievements: [
          "Over 160 first-place tournament finishes",
          "FIDE World Champion 1993-1999",
          "Karpov-Kasparov rivalry is legendary",
          "Master of small advantages",
        ],
        famousQuote: "Chess is everything: art, science, and sport.",
        rivals: ["Garry Kasparov", "Viktor Korchnoi"],
        legacy: "Showed that quiet positional mastery could dominate.",
      },
      {
        name: "Garry Kasparov",
        years: "1963-",
        title: "13th World Champion (1985-2000)",
        country: "Soviet Union/Russia",
        countryFlag: "🇷🇺",
        description: "The most dominant player of the late 20th century. Fierce competitiveness set new standards.",
        style: "Dynamic, Deeply Prepared, Aggressive",
        achievements: [
          "Youngest World Champion at 22",
          "Highest rating ever (at the time)",
          "15 years as world #1",
          "Played historic matches vs Deep Blue",
        ],
        famousQuote: "Chess is mental torture.",
        notableGames: ["Kasparov vs Topalov 1999"],
        rivals: ["Anatoly Karpov", "Vladimir Kramnik"],
        legacy: "Elevated chess to new heights of popularity.",
      },
      {
        name: "Viktor Korchnoi",
        years: "1931-2016",
        title: "The Uncrowned King",
        country: "Soviet Union/Switzerland",
        countryFlag: "🇨🇭",
        description: "Defected from the Soviet Union and challenged for the World Championship into his 50s.",
        style: "Fighting, Tenacious",
        achievements: [
          "Four-time World Championship Challenger",
          "Defected from Soviet Union 1976",
          "Played at top level until age 80+",
          "Never stopped fighting",
        ],
        famousQuote: "Chess is not for the faint-hearted.",
        rivals: ["Anatoly Karpov", "Tigran Petrosian"],
        legacy: "Symbol of chess survival and the will to fight.",
      },
    ],
  },
];

export default function LegendsPage() {
  const [activeTab, setActiveTab] = useState("18th");

  const activeCentury = centuries.find((c) => c.id === activeTab)!;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-950 via-stone-900 to-stone-950 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-amber-100 mb-4">
            Chess Legends Through the Ages
          </h1>
          <p className="text-amber-200/60 font-serif italic text-lg max-w-2xl mx-auto">
            Three centuries of masters who shaped the royal game
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-stone-900/80 rounded-lg p-1 border border-amber-800/30">
            {centuries.map((century) => (
              <button
                key={century.id}
                onClick={() => setActiveTab(century.id)}
                className={`px-6 py-3 rounded-md font-serif text-sm md:text-base transition-all ${
                  activeTab === century.id
                    ? "bg-amber-700 text-amber-100 shadow-lg"
                    : "text-amber-300 hover:text-amber-100 hover:bg-amber-900/50"
                }`}
              >
                {century.name}
              </button>
            ))}
          </div>
        </div>

        {/* Century Description */}
        <div className="text-center mb-8 px-4">
          <p className="text-amber-400 font-mono text-sm">{activeCentury.period}</p>
          <p className="text-amber-200/70 mt-2 max-w-2xl mx-auto">
            {activeCentury.description}
          </p>
        </div>

        {/* Legends Grid */}
        <div className="grid gap-6">
          {activeCentury.legends.map((legend) => (
            <div
              key={legend.name}
              className="bg-gradient-to-br from-amber-950/60 to-stone-900/80 rounded-lg border border-amber-800/30 overflow-hidden hover:border-amber-700/50 transition-all"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-5">
                  {/* Flag */}
                  <div className="flex-shrink-0 text-center md:text-left">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-900/50 rounded-full border-2 border-amber-700 text-2xl">
                      {legend.countryFlag}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h3 className="font-serif text-xl font-bold text-amber-100">
                        {legend.name}
                      </h3>
                      <span className="text-amber-400/60 text-xs">{legend.country}</span>
                    </div>

                    <p className="text-amber-300 font-serif italic text-sm mb-1">{legend.title}</p>
                    <p className="text-amber-500/80 text-xs mb-3">{legend.years}</p>

                    <p className="text-amber-100/70 text-sm mb-3 leading-relaxed">{legend.description}</p>

                    <span className="inline-block px-3 py-1 bg-amber-900/40 text-amber-300 text-xs rounded-full border border-amber-700/30 mb-3">
                      ♔ {legend.style}
                    </span>

                    {/* Achievements */}
                    <div className="mb-3">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                        {legend.achievements.map((achievement, i) => (
                          <li key={i} className="text-amber-100/60 text-xs flex items-start gap-2">
                            <span className="text-amber-600">♟</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Quote */}
                    <blockquote className="border-l-2 border-amber-700 pl-3 italic text-amber-200/80 text-sm">
                      &ldquo;{legend.famousQuote}&rdquo;
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-amber-200/60 font-serif italic">
            From Philidor&apos;s pawns to Kasparov&apos;s combinations - 300 years of chess mastery.
          </p>
          <Link
            href="/classic-games"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-700 hover:bg-amber-600 text-amber-100 font-serif rounded border border-amber-600 transition-all"
          >
            <span>♜</span>
            Study Their Classic Games
          </Link>
        </div>
      </div>
    </div>
  );
}
