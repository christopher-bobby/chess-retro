export function Footer() {
  return (
    <footer className="bg-[var(--surface)] border-t border-[var(--border)] py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dark)] text-[var(--background)]">
              <span className="font-bold">♔</span>
            </div>
            <span 
              className="text-lg font-semibold text-[var(--text-primary)]"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Chess Retro
            </span>
          </div>
          
          {/* Tagline */}
          <p className="text-[var(--text-muted)] text-sm italic text-center">
            Learn from the masters of the past
          </p>
          
          {/* Divider */}
          <div className="flex items-center gap-4 w-full max-w-xs">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[var(--border)]" />
            <span className="text-[var(--gold-dark)] text-sm">♟</span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[var(--border)]" />
          </div>
          
          {/* Copyright */}
          <p className="text-[var(--text-muted)] text-xs">
            © {new Date().getFullYear()} Chess Retro • Crafted with passion for chess
          </p>
        </div>
      </div>
    </footer>
  );
}
