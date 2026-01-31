"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/legends", label: "Legends" },
    { href: "/classic-games", label: "Classic Games" },
    { href: "/rankings", label: "Rankings" },
    { href: "/puzzles", label: "Puzzles" },
    { href: "/play", label: "Play" },
  ];

  return (
    <nav className="bg-[var(--background-warm)] border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dark)] text-[var(--background)]">
              <span className="text-xl font-bold">♔</span>
            </div>
            <div className="flex flex-col">
              <span 
                className="text-lg font-semibold text-[var(--text-primary)] tracking-wide"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Chess Retro
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
                Est. MMXXIV
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm transition-colors ${
                    isActive
                      ? "text-[var(--gold)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                  style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
