import Link from "next/link";

const legends = [
  {
    name: "Bobby Fischer",
    years: "1943-2008",
    title: "11th World Champion",
    description: "The American prodigy who became the only US-born World Chess Champion, known for his remarkable precision and opening preparation.",
    image: "♚",
    famousGame: "Game of the Century (1956)",
  },
  {
    name: "Garry Kasparov",
    years: "1963-",
    title: "13th World Champion",
    description: "Dominated chess for two decades, known for his aggressive attacking style and deep preparation.",
    image: "♚",
    famousGame: "Kasparov vs Topalov (1999)",
  },
  {
    name: "José Raúl Capablanca",
    years: "1888-1942",
    title: "3rd World Champion",
    description: "The 'Chess Machine' from Cuba, renowned for his seemingly effortless positional play and endgame mastery.",
    image: "♚",
    famousGame: "Capablanca vs Marshall (1918)",
  },
  {
    name: "Mikhail Tal",
    years: "1936-1992",
    title: "8th World Champion",
    description: "The 'Magician from Riga', famous for his dazzling sacrifices and imaginative attacking play.",
    image: "♚",
    famousGame: "Tal vs Larsen (1965)",
  },
];

const featuredGames = [
  {
    title: "The Immortal Game",
    players: "Anderssen vs Kieseritzky",
    year: 1851,
    description: "A brilliant display of romantic chess with multiple piece sacrifices leading to checkmate.",
  },
  {
    title: "The Evergreen Game",
    players: "Anderssen vs Dufresne",
    year: 1852,
    description: "Another masterpiece by Anderssen featuring a stunning queen sacrifice.",
  },
  {
    title: "The Opera Game",
    players: "Morphy vs Duke of Brunswick",
    year: 1858,
    description: "Paul Morphy's elegant demonstration of rapid development and attack.",
  },
  {
    title: "Game of the Century",
    players: "Byrne vs Fischer",
    year: 1956,
    description: "13-year-old Bobby Fischer's stunning queen sacrifice against a seasoned master.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-950 via-stone-900 to-stone-950">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="text-[20rem] font-serif text-amber-500 absolute -top-20 -left-20">♔</div>
          <div className="text-[20rem] font-serif text-amber-500 absolute -bottom-20 -right-20">♕</div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-amber-100 mb-6 tracking-tight">
            Chess Retro
          </h1>
          <p className="text-xl md:text-2xl text-amber-200/80 font-serif italic mb-8">
            &ldquo;Every chess master was once a beginner&rdquo;
          </p>
          <p className="text-lg text-amber-100/60 max-w-2xl mx-auto mb-10">
            Journey through the golden ages of chess. Study the brilliant games of legendary masters 
            and understand the timeless strategies that shaped modern chess.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/classic-games"
              className="px-8 py-3 bg-amber-700 hover:bg-amber-600 text-amber-100 font-serif rounded-sm border-2 border-amber-600 transition-all shadow-lg hover:shadow-xl"
            >
              Explore Classic Games
            </Link>
            <Link
              href="/play"
              className="px-8 py-3 bg-transparent hover:bg-amber-900/50 text-amber-200 font-serif rounded-sm border-2 border-amber-700 transition-all"
            >
              Play Against Engine
            </Link>
          </div>
        </div>
      </section>

      {/* Legends Section */}
      <section className="py-16 px-4 bg-stone-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-amber-100 mb-2 text-center">
            Chess Legends
          </h2>
          <p className="text-amber-200/60 text-center mb-12 font-serif italic">
            The masters who defined the art of chess
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {legends.map((legend) => (
              <div
                key={legend.name}
                className="bg-gradient-to-br from-amber-950/80 to-stone-900 p-6 rounded border border-amber-800/50 hover:border-amber-700 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl text-amber-600 group-hover:text-amber-500 transition-colors">
                    {legend.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-bold text-amber-100">
                      {legend.name}
                    </h3>
                    <p className="text-amber-400/80 text-sm mb-1">{legend.years}</p>
                    <p className="text-amber-300 text-sm font-serif italic mb-2">
                      {legend.title}
                    </p>
                    <p className="text-amber-100/60 text-sm mb-3">
                      {legend.description}
                    </p>
                    <p className="text-amber-500 text-xs">
                      Famous: {legend.famousGame}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/legends"
              className="text-amber-400 hover:text-amber-300 font-serif underline underline-offset-4"
            >
              View All Chess Legends →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-amber-100 mb-2 text-center">
            Immortal Games
          </h2>
          <p className="text-amber-200/60 text-center mb-12 font-serif italic">
            Games that have stood the test of time
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredGames.map((game) => (
              <div
                key={game.title}
                className="bg-stone-900/80 p-5 rounded border border-amber-900/30 hover:border-amber-700/50 transition-all group cursor-pointer"
              >
                <div className="text-amber-500/30 text-4xl font-serif mb-3 group-hover:text-amber-500/50 transition-colors">
                  ♟
                </div>
                <h3 className="font-serif text-lg font-bold text-amber-100 mb-1">
                  {game.title}
                </h3>
                <p className="text-amber-400 text-sm mb-1">{game.players}</p>
                <p className="text-amber-500/60 text-xs mb-3">{game.year}</p>
                <p className="text-amber-100/50 text-sm">
                  {game.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/classic-games"
              className="text-amber-400 hover:text-amber-300 font-serif underline underline-offset-4"
            >
              Browse All Classic Games →
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-4 bg-amber-950/30">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-6xl text-amber-700/50 mb-4">&ldquo;</div>
          <blockquote className="font-serif text-2xl md:text-3xl text-amber-100 italic mb-6">
            Chess is the gymnasium of the mind
          </blockquote>
          <cite className="text-amber-400">— Blaise Pascal</cite>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-amber-100 mb-4">
            Ready to Test Your Skills?
          </h2>
          <p className="text-amber-100/60 mb-8">
            Challenge our Stockfish engine at various difficulty levels
          </p>
          <Link
            href="/play"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-700 hover:bg-amber-600 text-amber-100 font-serif text-lg rounded-sm border-2 border-amber-600 transition-all shadow-lg hover:shadow-xl"
          >
            <span className="text-2xl">♞</span>
            Play Against Stockfish
          </Link>
        </div>
      </section>
    </div>
  );
}
