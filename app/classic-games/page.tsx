"use client";

import Link from "next/link";
import { useState } from "react";
import { centuries } from "./gameData";

export default function ClassicGamesPage() {
  const [activeTab, setActiveTab] = useState("19th");

  const activeCentury = centuries.find((c) => c.id === activeTab)!;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-950 via-stone-900 to-stone-950 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-amber-100 mb-4">
            Learn from the Legends
          </h1>
          <p className="text-amber-200/60 font-serif italic text-lg max-w-2xl mx-auto">
            Study the greatest games from chess history, played by the masters who defined the art
          </p>
        </div>

        {/* Century Tabs */}
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
        <div className="grid gap-6 md:grid-cols-2">
          {activeCentury.legends.map((legend) => (
            <Link
              key={legend.id}
              href={`/classic-games/${legend.id}`}
              className="group bg-gradient-to-br from-amber-950/60 to-stone-900/80 rounded-lg border border-amber-800/30 overflow-hidden hover:border-amber-600/50 hover:shadow-xl hover:shadow-amber-900/20 transition-all"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-amber-100 group-hover:text-amber-50 transition-colors">
                      {legend.name}
                    </h2>
                    <p className="text-amber-500 text-sm">{legend.years}</p>
                  </div>
                  <span className="text-2xl">{legend.country.split(" ")[0]}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-amber-900/40 text-amber-300 text-xs rounded border border-amber-700/30">
                    {legend.title}
                  </span>
                  {legend.worldChampion && (
                    <span className="px-2 py-1 bg-yellow-900/40 text-yellow-300 text-xs rounded border border-yellow-700/30">
                      👑 {legend.worldChampion}
                    </span>
                  )}
                  {legend.peakRating && (
                    <span className="px-2 py-1 bg-stone-800/60 text-stone-300 text-xs rounded border border-stone-600/30">
                      Peak: {legend.peakRating}
                    </span>
                  )}
                </div>

                <p className="text-amber-100/70 text-sm mb-4 line-clamp-3">
                  {legend.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-amber-800/20">
                  <div className="text-amber-400/60 text-sm">
                    <span className="font-medium text-amber-300">{legend.games.length}</span> classic games
                  </div>
                  <div className="flex items-center gap-1 text-amber-500 text-sm group-hover:text-amber-400 transition-colors">
                    Study games
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>

              {/* Game previews */}
              <div className="bg-stone-900/50 px-6 py-3 border-t border-amber-800/20">
                <div className="flex flex-wrap gap-2">
                  {legend.games.slice(0, 3).map((game) => (
                    <span
                      key={game.id}
                      className="text-xs text-amber-200/60 bg-stone-800/50 px-2 py-1 rounded"
                    >
                      {game.title}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-amber-200/60 font-serif italic">
            Each legend has a unique style. Study them all to become a complete player.
          </p>
          <Link
            href="/play"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-700 hover:bg-amber-600 text-amber-100 font-serif rounded border border-amber-600 transition-all"
          >
            <span>♞</span>
            Practice Against Stockfish
          </Link>
        </div>
      </div>
    </div>
  );
}
