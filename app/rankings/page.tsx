"use client";

import { useState } from "react";
import Link from "next/link";

interface FIDEPlayer {
  rank: number;
  name: string;
  country: string;
  countryFlag: string;
  rating: number;
  birthYear: number;
  title: string;
}

// Top FIDE players data - Updated January 2026
const fidePlayersOpen: FIDEPlayer[] = [
  { rank: 1, name: "Magnus Carlsen", country: "Norway", countryFlag: "🇳🇴", rating: 2840, birthYear: 1990, title: "GM" },
  { rank: 2, name: "Hikaru Nakamura", country: "USA", countryFlag: "🇺��", rating: 2810, birthYear: 1987, title: "GM" },
  { rank: 3, name: "Fabiano Caruana", country: "USA", countryFlag: "🇺🇸", rating: 2795, birthYear: 1992, title: "GM" },
  { rank: 4, name: "Vincent Keymer", country: "Germany", countryFlag: "🇩🇪", rating: 2776, birthYear: 2004, title: "GM" },
  { rank: 5, name: "Arjun Erigaisi", country: "India", countryFlag: "🇮🇳", rating: 2775, birthYear: 2003, title: "GM" },
  { rank: 6, name: "Anish Giri", country: "Netherlands", countryFlag: "🇳🇱", rating: 2760, birthYear: 1994, title: "GM" },
  { rank: 7, name: "Alireza Firouzja", country: "France", countryFlag: "🇫🇷", rating: 2759, birthYear: 2003, title: "GM" },
  { rank: 8, name: "R Praggnanandhaa", country: "India", countryFlag: "🇮🇳", rating: 2758, birthYear: 2005, title: "GM" },
  { rank: 9, name: "Gukesh Dommaraju", country: "India", countryFlag: "🇮🇳", rating: 2754, birthYear: 2006, title: "GM" },
  { rank: 10, name: "Wei Yi", country: "China", countryFlag: "🇨🇳", rating: 2754, birthYear: 1999, title: "GM" },
  { rank: 11, name: "Wesley So", country: "USA", countryFlag: "🇺🇸", rating: 2753, birthYear: 1993, title: "GM" },
  { rank: 12, name: "Nodirbek Abdusattorov", country: "Uzbekistan", countryFlag: "🇺🇿", rating: 2751, birthYear: 2004, title: "GM" },
  { rank: 13, name: "Viswanathan Anand", country: "India", countryFlag: "🇮🇳", rating: 2743, birthYear: 1969, title: "GM" },
  { rank: 14, name: "Richárd Rapport", country: "Hungary", countryFlag: "🇭🇺", rating: 2741, birthYear: 1996, title: "GM" },
  { rank: 15, name: "Leinier Domínguez", country: "USA", countryFlag: "🇺🇸", rating: 2738, birthYear: 1983, title: "GM" },
  { rank: 16, name: "Maxime Vachier-Lagrave", country: "France", countryFlag: "🇫🇷", rating: 2734, birthYear: 1990, title: "GM" },
  { rank: 17, name: "Jan-Krzysztof Duda", country: "Poland", countryFlag: "🇵🇱", rating: 2731, birthYear: 1998, title: "GM" },
  { rank: 18, name: "Lê Quang Liêm", country: "Vietnam", countryFlag: "🇻🇳", rating: 2731, birthYear: 1991, title: "GM" },
  { rank: 19, name: "Shakhriyar Mamedyarov", country: "Azerbaijan", countryFlag: "🇦🇿", rating: 2730, birthYear: 1985, title: "GM" },
  { rank: 20, name: "Levon Aronian", country: "USA", countryFlag: "🇺🇸", rating: 2729, birthYear: 1982, title: "GM" },
];

const fidePlayersWomen: FIDEPlayer[] = [
  { rank: 1, name: "Hou Yifan", country: "China", countryFlag: "🇨🇳", rating: 2613, birthYear: 1994, title: "GM" },
  { rank: 2, name: "Zhu Jiner", country: "China", countryFlag: "🇨🇳", rating: 2579, birthYear: 2002, title: "IM" },
  { rank: 3, name: "Lei Tingjie", country: "China", countryFlag: "🇨🇳", rating: 2569, birthYear: 1997, title: "GM" },
  { rank: 4, name: "Ju Wenjun", country: "China", countryFlag: "🇨🇳", rating: 2565, birthYear: 1991, title: "GM" },
  { rank: 5, name: "Koneru Humpy", country: "India", countryFlag: "🇮🇳", rating: 2535, birthYear: 1987, title: "GM" },
  { rank: 6, name: "Aleksandra Goryachkina", country: "Russia", countryFlag: "🇷🇺", rating: 2534, birthYear: 2001, title: "GM" },
  { rank: 7, name: "Tan Zhongyi", country: "China", countryFlag: "🇨🇳", rating: 2524, birthYear: 1991, title: "GM" },
  { rank: 8, name: "Anna Muzychuk", country: "Ukraine", countryFlag: "🇺🇦", rating: 2522, birthYear: 1990, title: "GM" },
  { rank: 9, name: "Kateryna Lagno", country: "Russia", countryFlag: "🇷🇺", rating: 2508, birthYear: 1989, title: "GM" },
  { rank: 10, name: "Polina Shuvalova", country: "Russia", countryFlag: "��🇺", rating: 2502, birthYear: 2001, title: "IM" },
];

type Category = "open" | "women";

export default function RankingsPage() {
  const [category, setCategory] = useState<Category>("open");

  const players = category === "open" ? fidePlayersOpen : fidePlayersWomen;

  const getAge = (birthYear: number) => new Date().getFullYear() - birthYear;

  return (
    <div className="min-h-screen bg-[var(--background)] py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--gold-dark)]" />
            <span className="text-[var(--gold)] text-xl">♔</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--gold-dark)]" />
          </div>
          
          <h1 
            className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-3"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            FIDE World Rankings
          </h1>
          <p className="text-[var(--text-muted)] italic mb-2">
            The finest chess players in the world
          </p>
          <p className="text-[var(--text-muted)] text-xs">
            Official ratings as of January 2026 •{" "}
            <a href="https://ratings.fide.com" target="_blank" rel="noopener noreferrer" 
               className="text-[var(--gold-dark)] hover:text-[var(--gold)]">
              FIDE
            </a>
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8">
          <div className="tab-group">
            <button
              onClick={() => setCategory("open")}
              className={`tab ${category === "open" ? "active" : ""}`}
            >
              ♔ Top 20 Open
            </button>
            <button
              onClick={() => setCategory("women")}
              className={`tab ${category === "women" ? "active" : ""}`}
            >
              ♕ Top Women
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="stat-card">
            <div className="value">{players[0]?.name.split(" ").pop()}</div>
            <div className="label">World #1</div>
          </div>
          <div className="stat-card">
            <div className="value">{players[0]?.rating}</div>
            <div className="label">Top Rating</div>
          </div>
          <div className="stat-card">
            <div className="value">{Math.round(players.reduce((sum, p) => sum + p.rating, 0) / players.length)}</div>
            <div className="label">Average</div>
          </div>
          <div className="stat-card">
            <div className="value">{Math.min(...players.map(p => getAge(p.birthYear)))}</div>
            <div className="label">Youngest</div>
          </div>
        </div>

        {/* Rankings Table */}
        <div className="vintage-card overflow-hidden">
          <table className="classic-table">
            <thead>
              <tr>
                <th className="w-16">Rank</th>
                <th>Player</th>
                <th className="text-center hidden md:table-cell">Country</th>
                <th className="text-center hidden sm:table-cell">Age</th>
                <th className="text-right">Rating</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player) => (
                <tr key={`${player.rank}-${player.name}`}>
                  <td>
                    <span className={`font-mono text-sm ${
                      player.rank === 1 ? "rank-1" : 
                      player.rank === 2 ? "rank-2" : 
                      player.rank === 3 ? "rank-3" : "text-[var(--text-muted)]"
                    }`}>
                      {player.rank === 1 ? "🥇" : player.rank === 2 ? "🥈" : player.rank === 3 ? "🥉" : `#${player.rank}`}
                    </span>
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <span className="md:hidden text-lg">{player.countryFlag}</span>
                      <span className="px-1.5 py-0.5 text-xs font-semibold bg-[var(--gold-muted)] text-[var(--gold)]">
                        {player.title}
                      </span>
                      <span className="text-[var(--text-primary)] font-medium">
                        {player.name}
                      </span>
                    </div>
                  </td>
                  <td className="text-center hidden md:table-cell">
                    <span className="text-xl" title={player.country}>{player.countryFlag}</span>
                  </td>
                  <td className="text-center hidden sm:table-cell">
                    <span className="text-[var(--text-secondary)]">{getAge(player.birthYear)}</span>
                  </td>
                  <td className="text-right">
                    <span className="font-mono text-[var(--gold-light)] font-semibold">{player.rating}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* World Champion Banner */}
        <div className="mt-8 vintage-card p-6">
          <div className="flex items-center gap-4">
            <span className="text-4xl">👑</span>
            <div>
              <h3 
                className="text-lg text-[var(--text-primary)] font-semibold mb-1"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Current World Champion
              </h3>
              <p className="text-[var(--text-secondary)]">
                <span className="text-[var(--gold)]">Gukesh Dommaraju</span> (India) — 
                Became the youngest World Chess Champion in history in 2024 at age 18
              </p>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="text-center mt-10 space-y-4">
          <p className="text-[var(--text-muted)] italic">
            Study the games of these masters to improve your own play
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/classic-games" className="btn-primary">
              ♜ Study Classic Games
            </Link>
            <Link href="/puzzles" className="btn-secondary">
              ♞ Solve Puzzles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
