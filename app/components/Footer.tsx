export function Footer() {
  return (
    <footer className="bg-amber-950 border-t-4 border-amber-800 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">♔</span>
            <span className="font-serif text-amber-100">Chess Retro</span>
          </div>
          <p className="text-amber-300/60 text-sm font-serif">
            Learn from the masters of the past
          </p>
          <p className="text-amber-300/40 text-xs">
            © {new Date().getFullYear()} Chess Retro
          </p>
        </div>
      </div>
    </footer>
  );
}
