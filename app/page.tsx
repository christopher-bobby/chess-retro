import Link from "next/link";

const legends = [
  {
    name: "Bobby Fischer",
    years: "1943-2008",
    title: "11th World Champion",
    description: "The American prodigy who became the only US-born World Chess Champion, known for his remarkable precision and opening preparation.",
    famousGame: "Game of the Century (1956)",
  },
  {
    name: "Garry Kasparov",
    years: "1963-",
    title: "13th World Champion",
    description: "Dominated chess for two decades, known for his aggressive attacking style and deep preparation.",
    famousGame: "Kasparov vs Topalov (1999)",
  },
  {
    name: "José Raúl Capablanca",
    years: "1888-1942",
    title: "3rd World Champion",
    description: "The 'Chess Machine' from Cuba, renowned for his seemingly effortless positional play and endgame mastery.",
    famousGame: "Capablanca vs Marshall (1918)",
  },
  {
    name: "Mikhail Tal",
    years: "1936-1992",
    title: "8th World Champion",
    description: "The 'Magician from Riga', famous for his dazzling sacrifices and imaginative attacking play.",
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
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Decorative chess pattern */}
        <div className="absolute inset-0 chess-pattern pointer-events-none" />
        
        {/* Decorative pieces */}
        <div className="absolute top-10 left-10 text-[12rem] text-[var(--surface)] opacity-50 select-none pointer-events-none">♔</div>
        <div className="absolute bottom-10 right-10 text-[12rem] text-[var(--surface)] opacity-50 select-none pointer-events-none">♕</div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Ornamental top */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[var(--gold-dark)]" />
            <span className="text-[var(--gold)] text-2xl">♔</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[var(--gold-dark)]" />
          </div>
          
          <h1 
            className="text-5xl md:text-7xl font-bold text-[var(--text-primary)] mb-6 tracking-tight"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Chess Retro
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-[var(--gold-light)] italic mb-6"
            style={{ fontFamily: '"Crimson Text", Georgia, serif' }}
          >
            "Every chess master was once a beginner"
          </p>
          
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed">
            Journey through the golden ages of chess. Study the brilliant games of legendary masters 
            and understand the timeless strategies that shaped modern chess.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/classic-games" className="btn-primary">
              Explore Classic Games
            </Link>
            <Link href="/play" className="btn-secondary">
              Play Against Engine
            </Link>
          </div>
          
          {/* Ornamental bottom */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <span className="h-px w-24 bg-gradient-to-r from-transparent to-[var(--border)]" />
            <span className="text-[var(--text-muted)] text-xs uppercase tracking-widest">Since 2024</span>
            <span className="h-px w-24 bg-gradient-to-l from-transparent to-[var(--border)]" />
          </div>
        </div>
      </section>

      {/* Legends Section */}
      <section className="py-20 px-6 bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-3"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Chess Legends
            </h2>
            <p className="text-[var(--text-muted)] italic">
              The masters who defined the art of chess
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {legends.map((legend, index) => (
              <div
                key={legend.name}
                className="vintage-card p-6 group animate-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 flex items-center justify-center bg-[var(--gold-muted)] text-[var(--gold)] text-3xl flex-shrink-0">
                    ♚
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 
                      className="text-xl font-semibold text-[var(--text-primary)] mb-1 group-hover:text-[var(--gold-light)] transition-colors"
                      style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                    >
                      {legend.name}
                    </h3>
                    <p className="text-[var(--gold-dark)] text-sm mb-1">{legend.years}</p>
                    <p className="text-[var(--text-accent)] text-sm italic mb-3">{legend.title}</p>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">
                      {legend.description}
                    </p>
                    <p className="text-[var(--text-muted)] text-xs">
                      <span className="text-[var(--gold-dark)]">Famous:</span> {legend.famousGame}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link
              href="/legends"
              className="text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors inline-flex items-center gap-2"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              View All Chess Legends
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-3"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Immortal Games
            </h2>
            <p className="text-[var(--text-muted)] italic">
              Games that have stood the test of time
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredGames.map((game, index) => (
              <div
                key={game.title}
                className="vintage-card p-5 group cursor-pointer animate-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-[var(--gold-dark)] text-4xl mb-4 opacity-40 group-hover:opacity-70 transition-opacity">
                  ♟
                </div>
                <h3 
                  className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--gold-light)] transition-colors"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                  {game.title}
                </h3>
                <p className="text-[var(--gold)] text-sm mb-1">{game.players}</p>
                <p className="text-[var(--text-muted)] text-xs mb-3">{game.year}</p>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {game.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link
              href="/classic-games"
              className="text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors inline-flex items-center gap-2"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Browse All Classic Games
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-6 bg-[var(--surface)]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-6xl text-[var(--gold-dark)] mb-6 opacity-50">"</div>
          <blockquote 
            className="text-2xl md:text-3xl text-[var(--text-primary)] italic mb-6 leading-relaxed"
            style={{ fontFamily: '"Crimson Text", Georgia, serif' }}
          >
            Chess is the gymnasium of the mind
          </blockquote>
          <cite className="text-[var(--gold)] not-italic">— Blaise Pascal</cite>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Ready to Test Your Skills?
          </h2>
          <p className="text-[var(--text-secondary)] mb-8">
            Challenge our Stockfish engine at various difficulty levels
          </p>
          <Link href="/play" className="btn-primary inline-flex items-center gap-3 text-lg">
            <span className="text-2xl">♞</span>
            Play Against Stockfish
          </Link>
        </div>
      </section>
    </div>
  );
}
