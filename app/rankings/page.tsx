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
  peakRating?: number;
}

// Top FIDE players data - Updated January 2026
// Source: FIDE official ratings list (1 January 2026)
const fidePlayersClassical: FIDEPlayer[] = [
  { rank: 1, name: "Magnus Carlsen", country: "Norway", countryFlag: "🇳🇴", rating: 2840, birthYear: 1990, title: "GM", peakRating: 2882 },
  { rank: 2, name: "Hikaru Nakamura", country: "USA", countryFlag: "🇺🇸", rating: 2810, birthYear: 1987, title: "GM", peakRating: 2816 },
  { rank: 3, name: "Fabiano Caruana", country: "USA", countryFlag: "🇺🇸", rating: 2795, birthYear: 1992, title: "GM", peakRating: 2844 },
  { rank: 4, name: "Vincent Keymer", country: "Germany", countryFlag: "��", rating: 2776, birthYear: 2004, title: "GM", peakRating: 2776 },
  { rank: 5, name: "Arjun Erigaisi", country: "India", countryFlag: "🇮🇳", rating: 2775, birthYear: 2003, title: "GM", peakRating: 2778 },
  { rank: 6, name: "Anish Giri", country: "Netherlands", countryFlag: "��", rating: 2760, birthYear: 1994, title: "GM", peakRating: 2798 },
  { rank: 7, name: "Alireza Firouzja", country: "France", countryFlag: "🇫🇷", rating: 2759, birthYear: 2003, title: "GM", peakRating: 2804 },
  { rank: 8, name: "R Praggnanandhaa", country: "India", countryFlag: "🇮🇳", rating: 2758, birthYear: 2005, title: "GM", peakRating: 2758 },
  { rank: 9, name: "Gukesh Dommaraju", country: "India", countryFlag: "🇮🇳", rating: 2754, birthYear: 2006, title: "GM", peakRating: 2794 },
  { rank: 10, name: "Wei Yi", country: "China", countryFlag: "🇨🇳", rating: 2754, birthYear: 1999, title: "GM", peakRating: 2754 },
  { rank: 11, name: "Wesley So", country: "USA", countryFlag: "🇺🇸", rating: 2753, birthYear: 1993, title: "GM", peakRating: 2822 },
  { rank: 12, name: "Nodirbek Abdusattorov", country: "Uzbekistan", countryFlag: "🇺🇿", rating: 2751, birthYear: 2004, title: "GM", peakRating: 2765 },
  { rank: 13, name: "Viswanathan Anand", country: "India", countryFlag: "�🇳", rating: 2743, birthYear: 1969, title: "GM", peakRating: 2817 },
  { rank: 14, name: "Richárd Rapport", country: "Hungary", countryFlag: "��", rating: 2741, birthYear: 1996, title: "GM", peakRating: 2776 },
  { rank: 15, name: "Leinier Domínguez", country: "USA", countryFlag: "🇺🇸", rating: 2738, birthYear: 1983, title: "GM", peakRating: 2768 },
  { rank: 16, name: "Maxime Vachier-Lagrave", country: "France", countryFlag: "��", rating: 2734, birthYear: 1990, title: "GM", peakRating: 2819 },
  { rank: 17, name: "Jan-Krzysztof Duda", country: "Poland", countryFlag: "🇵🇱", rating: 2731, birthYear: 1998, title: "GM", peakRating: 2760 },
  { rank: 18, name: "Lê Quang Liêm", country: "Vietnam", countryFlag: "🇻🇳", rating: 2731, birthYear: 1991, title: "GM", peakRating: 2754 },
  { rank: 19, name: "Shakhriyar Mamedyarov", country: "Azerbaijan", countryFlag: "🇦🇿", rating: 2730, birthYear: 1985, title: "GM", peakRating: 2820 },
  { rank: 20, name: "Levon Aronian", country: "USA", countryFlag: "🇺�", rating: 2729, birthYear: 1982, title: "GM", peakRating: 2830 },
];

// Women's Top Players - January 2026
const fidePlayersWomen: FIDEPlayer[] = [
  { rank: 1, name: "Hou Yifan", country: "China", countryFlag: "🇨🇳", rating: 2613, birthYear: 1994, title: "GM", peakRating: 2686 },
  { rank: 2, name: "Zhu Jiner", country: "China", countryFlag: "🇨🇳", rating: 2579, birthYear: 2002, title: "IM", peakRating: 2579 },
  { rank: 3, name: "Lei Tingjie", country: "China", countryFlag: "�🇳", rating: 2569, birthYear: 1997, title: "GM", peakRating: 2569 },
  { rank: 4, name: "Ju Wenjun", country: "China", countryFlag: "��", rating: 2565, birthYear: 1991, title: "GM", peakRating: 2604 },
  { rank: 5, name: "Koneru Humpy", country: "India", countryFlag: "�🇳", rating: 2535, birthYear: 1987, title: "GM", peakRating: 2623 },
  { rank: 6, name: "Aleksandra Goryachkina", country: "Russia", countryFlag: "��", rating: 2534, birthYear: 2001, title: "GM", peakRating: 2599 },
  { rank: 7, name: "Tan Zhongyi", country: "China", countryFlag: "��", rating: 2524, birthYear: 1991, title: "GM", peakRating: 2558 },
  { rank: 8, name: "Anna Muzychuk", country: "Ukraine", countryFlag: "🇺🇦", rating: 2522, birthYear: 1990, title: "GM", peakRating: 2606 },
  { rank: 9, name: "Kateryna Lagno", country: "Russia", countryFlag: "��", rating: 2508, birthYear: 1989, title: "GM", peakRating: 2561 },
  { rank: 10, name: "Polina Shuvalova", country: "Russia", countryFlag: "🇷🇺", rating: 2502, birthYear: 2001, title: "IM", peakRating: 2507 },
  { rank: 11, name: "Bibisara Assaubayeva", country: "Kazakhstan", countryFlag: "🇰🇿", rating: 2497, birthYear: 2004, title: "WGM", peakRating: 2500 },
  { rank: 12, name: "Divya Deshmukh", country: "India", countryFlag: "��", rating: 2497, birthYear: 2005, title: "WGM", peakRating: 2497 },
  { rank: 13, name: "Alexandra Kosteniuk", country: "Switzerland", countryFlag: "��", rating: 2483, birthYear: 1984, title: "GM", peakRating: 2544 },
  { rank: 14, name: "Stavroula Tsolakidou", country: "Greece", countryFlag: "🇬🇷", rating: 2479, birthYear: 2000, title: "IM", peakRating: 2479 },
  { rank: 15, name: "Alina Kashlinskaya", country: "Poland", countryFlag: "��", rating: 2475, birthYear: 1993, title: "IM", peakRating: 2475 },
  { rank: 16, name: "Vaishali Rameshbabu", country: "India", countryFlag: "��", rating: 2473, birthYear: 2001, title: "GM", peakRating: 2473 },
  { rank: 17, name: "Nana Dzagnidze", country: "Georgia", countryFlag: "��", rating: 2469, birthYear: 1987, title: "GM", peakRating: 2545 },
  { rank: 18, name: "Carissa Yip", country: "USA", countryFlag: "��", rating: 2466, birthYear: 2003, title: "IM", peakRating: 2466 },
  { rank: 19, name: "Harika Dronavalli", country: "India", countryFlag: "��", rating: 2466, birthYear: 1991, title: "GM", peakRating: 2539 },
  { rank: 20, name: "Mariya Muzychuk", country: "Ukraine", countryFlag: "��", rating: 2463, birthYear: 1992, title: "GM", peakRating: 2563 },
];

type Category = "open" | "women";

const titleColors: Record<string, string> = {
  GM: "text-red-400 bg-red-900/40",
  IM: "text-orange-400 bg-orange-900/40",
  FM: "text-yellow-400 bg-yellow-900/40",
  WGM: "text-pink-400 bg-pink-900/40",
  WIM: "text-rose-400 bg-rose-900/40",
  WFM: "text-purple-400 bg-purple-900/40",
};

export default function RankingsPage() {
  const [category, setCategory] = useState<Category>("open");

  const players = category === "open" ? fidePlayersClassical : fidePlayersWomen;

  const getRankBadge = (rank: number) => {
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return `#${rank}`;
  };

  const getAge = (birthYear: number) => {
    return new Date().getFullYear() - birthYear;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-950 via-stone-900 to-stone-950 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-amber-100 mb-4">
            FIDE World Rankings
          </h1>
          <p className="text-amber-200/60 font-serif italic text-lg max-w-2xl mx-auto">
            Top chess players in the world by FIDE classical rating
          </p>
          <p className="text-amber-400/40 text-xs mt-2">
            Data based on{" "}
            <a
              href="https://ratings.fide.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-amber-300"
            >
              FIDE official ratings
            </a>
            {" "}• Last updated: January 2026
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-stone-900/80 rounded-lg p-1 border border-amber-800/30">
            <button
              onClick={() => setCategory("open")}
              className={`px-6 py-3 rounded-md font-serif text-sm md:text-base transition-all flex items-center gap-2 ${
                category === "open"
                  ? "bg-amber-700 text-amber-100 shadow-lg"
                  : "text-amber-300 hover:text-amber-100 hover:bg-amber-900/50"
              }`}
            >
              <span>♔</span>
              <span>Top 20 Players</span>
            </button>
            <button
              onClick={() => setCategory("women")}
              className={`px-6 py-3 rounded-md font-serif text-sm md:text-base transition-all flex items-center gap-2 ${
                category === "women"
                  ? "bg-amber-700 text-amber-100 shadow-lg"
                  : "text-amber-300 hover:text-amber-100 hover:bg-amber-900/50"
              }`}
            >
              <span>♕</span>
              <span>Top Women</span>
            </button>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-stone-900/50 rounded-lg p-4 border border-amber-800/20 text-center">
            <div className="text-2xl font-bold text-amber-100">{players[0]?.name.split(" ").pop()}</div>
            <div className="text-xs text-amber-400/60">World #1</div>
          </div>
          <div className="bg-stone-900/50 rounded-lg p-4 border border-amber-800/20 text-center">
            <div className="text-2xl font-bold text-amber-100">{players[0]?.rating}</div>
            <div className="text-xs text-amber-400/60">Highest Rating</div>
          </div>
          <div className="bg-stone-900/50 rounded-lg p-4 border border-amber-800/20 text-center">
            <div className="text-2xl font-bold text-amber-100">
              {Math.round(players.reduce((sum, p) => sum + p.rating, 0) / players.length)}
            </div>
            <div className="text-xs text-amber-400/60">Average Rating</div>
          </div>
          <div className="bg-stone-900/50 rounded-lg p-4 border border-amber-800/20 text-center">
            <div className="text-2xl font-bold text-amber-100">
              {Math.min(...players.map(p => getAge(p.birthYear)))}
            </div>
            <div className="text-xs text-amber-400/60">Youngest Age</div>
          </div>
        </div>

        {/* Rankings Table */}
        <div className="bg-gradient-to-br from-amber-950/60 to-stone-900/80 rounded-lg border border-amber-800/30 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-amber-800/30 bg-stone-900/50">
                  <th className="px-4 py-3 text-left text-amber-400 font-serif text-sm w-16">
                    Rank
                  </th>
                  <th className="px-4 py-3 text-left text-amber-400 font-serif text-sm">
                    Player
                  </th>
                  <th className="px-4 py-3 text-center text-amber-400 font-serif text-sm w-20 hidden md:table-cell">
                    Country
                  </th>
                  <th className="px-4 py-3 text-center text-amber-400 font-serif text-sm w-16 hidden sm:table-cell">
                    Age
                  </th>
                  <th className="px-4 py-3 text-right text-amber-400 font-serif text-sm w-20">
                    Rating
                  </th>
                  <th className="px-4 py-3 text-right text-amber-400 font-serif text-sm w-20 hidden sm:table-cell">
                    Peak
                  </th>
                </tr>
              </thead>
              <tbody>
                {players.map((player) => {
                  const age = getAge(player.birthYear);
                  return (
                    <tr
                      key={`${player.rank}-${player.name}`}
                      className={`border-b border-amber-800/10 hover:bg-amber-900/20 transition-colors ${
                        player.rank <= 3 ? "bg-amber-900/10" : ""
                      }`}
                    >
                      <td className="px-4 py-3">
                        <span
                          className={`font-mono text-sm ${
                            player.rank <= 3 ? "text-amber-300" : "text-amber-500/60"
                          }`}
                        >
                          {getRankBadge(player.rank)}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <span className="md:hidden">{player.countryFlag}</span>
                          <span
                            className={`px-1.5 py-0.5 rounded text-xs font-bold ${
                              titleColors[player.title] || "text-gray-400 bg-gray-900/40"
                            }`}
                          >
                            {player.title}
                          </span>
                          <span className="text-amber-100 font-medium">
                            {player.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center hidden md:table-cell">
                        <span className="text-lg" title={player.country}>
                          {player.countryFlag}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center hidden sm:table-cell">
                        <span className="text-amber-200/70 text-sm">{age}</span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <span className="font-mono text-amber-100 font-semibold">
                          {player.rating}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right hidden sm:table-cell">
                        <span className="font-mono text-amber-400/60 text-sm">
                          {player.peakRating}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* World Champion Banner */}
        <div className="mt-8 bg-gradient-to-r from-amber-900/40 to-amber-800/20 rounded-lg border border-amber-700/30 p-6">
          <div className="flex items-center gap-4">
            <span className="text-4xl">👑</span>
            <div>
              <h3 className="font-serif text-lg text-amber-100 font-bold">
                Current World Champion
              </h3>
              <p className="text-amber-200/80">
                <span className="font-semibold">Gukesh Dommaraju</span> (India) — 
                Became the youngest World Chess Champion in history in 2024 at age 18
              </p>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-amber-400/60">
          <div className="flex items-center gap-1">
            <span className={`px-1.5 py-0.5 rounded ${titleColors.GM}`}>GM</span>
            Grandmaster
          </div>
          <div className="flex items-center gap-1">
            <span className={`px-1.5 py-0.5 rounded ${titleColors.IM}`}>IM</span>
            International Master
          </div>
          <div className="flex items-center gap-1">
            <span className={`px-1.5 py-0.5 rounded ${titleColors.WGM}`}>WGM</span>
            Woman Grandmaster
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 space-y-4">
          <p className="text-amber-200/60 font-serif italic text-sm">
            Study the games of these masters to improve your own play
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/classic-games"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-700 hover:bg-amber-600 text-amber-100 font-serif rounded border border-amber-600 transition-all"
            >
              <span>♜</span>
              Study Classic Games
            </Link>
            <Link
              href="/puzzles"
              className="inline-flex items-center gap-2 px-6 py-3 bg-stone-800 hover:bg-stone-700 text-amber-100 font-serif rounded border border-stone-600 transition-all"
            >
              <span>♞</span>
              Solve Puzzles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
