"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/legends", label: "Chess Legends" },
    { href: "/classic-games", label: "Classic Games" },
    { href: "/puzzles", label: "Puzzles" },
    { href: "/play", label: "Play vs Stockfish" },
  ];

  return (
    <nav className="bg-amber-950 border-b-4 border-amber-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span className="text-3xl">♔</span>
            <span className="font-serif text-xl font-bold text-amber-100 tracking-wide">
              Chess Retro
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded font-serif text-sm transition-all ${
                  pathname === link.href
                    ? "bg-amber-800 text-amber-100"
                    : "text-amber-200 hover:bg-amber-900 hover:text-amber-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
