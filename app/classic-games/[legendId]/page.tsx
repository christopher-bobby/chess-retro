"use client";

import { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { getLegendById } from "../gameData";

const GameViewer = dynamic(() => import("../../components/GameViewer"), { ssr: false });

export default function LegendPage({ params }: { params: Promise<{ legendId: string }> }) {
  const { legendId } = use(params);
  const legend = getLegendById(legendId);
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  if (!legend) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-950 via-stone-900 to-stone-950 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back link */}
        <Link
          href="/classic-games"
          className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 mb-8 transition-colors"
        >
          <span>←</span> All Legends
        </Link>

        {/* Legend header */}
        <div className="bg-gradient-to-br from-amber-950/60 to-stone-900/80 rounded-lg border border-amber-800/30 p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-4xl">{legend.country.split(" ")[0]}</span>
                <div>
                  <h1 className="font-serif text-4xl font-bold text-amber-100">
                    {legend.name}
                  </h1>
                  <p className="text-amber-500">{legend.years}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4 mb-4">
                <span className="px-3 py-1 bg-amber-900/40 text-amber-300 text-sm rounded border border-amber-700/30">
                  {legend.title}
                </span>
                {legend.worldChampion && (
                  <span className="px-3 py-1 bg-yellow-900/40 text-yellow-300 text-sm rounded border border-yellow-700/30">
                    👑 World Champion {legend.worldChampion}
                  </span>
                )}
                {legend.peakRating && (
                  <span className="px-3 py-1 bg-stone-800/60 text-stone-300 text-sm rounded border border-stone-600/30">
                    Peak Rating: {legend.peakRating}
                  </span>
                )}
              </div>

              <p className="text-amber-100/80 max-w-2xl leading-relaxed">
                {legend.description}
              </p>

              <div className="mt-4 pt-4 border-t border-amber-800/30">
                <p className="text-amber-400 text-sm">
                  <span className="font-semibold">Playing Style:</span>{" "}
                  <span className="text-amber-200/80">{legend.style}</span>
                </p>
              </div>
            </div>

            <div className="text-center md:text-right">
              <div className="text-6xl font-serif text-amber-700/30">♚</div>
              <p className="text-amber-500 text-sm mt-2">{legend.games.length} Classic Games</p>
            </div>
          </div>
        </div>

        {/* Games list */}
        <h2 className="font-serif text-2xl font-bold text-amber-100 mb-6">
          Masterpiece Games
        </h2>

        <div className="space-y-6">
          {legend.games.map((game) => (
            <div
              key={game.id}
              className="bg-gradient-to-br from-amber-950/60 to-stone-900/80 rounded-lg border border-amber-800/30 overflow-hidden hover:border-amber-700/50 transition-all"
            >
              <div
                className="bg-amber-900/30 px-6 py-4 border-b border-amber-800/30 cursor-pointer"
                onClick={() => setSelectedGame(selectedGame === game.id ? null : game.id)}
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-amber-100 flex items-center gap-2">
                      {game.title}
                      <span className="text-amber-500 text-lg">
                        {selectedGame === game.id ? "▼" : "▶"}
                      </span>
                    </h3>
                    <p className="text-amber-400 text-sm">{game.event}, {game.year}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-amber-200 font-mono text-sm">
                      {game.white} vs {game.black}
                    </p>
                    <p className="text-amber-500 text-sm">Result: {game.result}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-amber-900/40 text-amber-300 text-xs rounded-full border border-amber-700/30">
                    {game.opening}
                  </span>
                </div>

                <p className="text-amber-100/80 mb-6 leading-relaxed">
                  {game.description}
                </p>

                {/* Interactive Game Viewer */}
                {selectedGame === game.id && (
                  <div className="mb-6">
                    <GameViewer
                      pgn={game.pgn}
                      title={game.title}
                      white={game.white}
                      black={game.black}
                    />
                  </div>
                )}

                <div className="bg-stone-900/50 rounded p-4 mb-6 border border-stone-800">
                  <p className="text-amber-400 text-sm font-semibold mb-2">Key Sequence:</p>
                  <p className="font-mono text-amber-200/90 text-sm break-all">
                    {game.keyMoves}
                  </p>
                </div>

                <div>
                  <p className="text-amber-400 text-sm font-semibold mb-3">What You&apos;ll Learn:</p>
                  <div className="flex flex-wrap gap-2">
                    {game.lessons.map((lesson, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-stone-800/50 text-amber-200/80 text-sm rounded border border-stone-700/50"
                      >
                        ♟ {lesson}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedGame !== game.id && (
                  <button
                    onClick={() => setSelectedGame(game.id)}
                    className="mt-4 px-4 py-2 bg-amber-800/50 hover:bg-amber-700/50 text-amber-200 text-sm rounded border border-amber-700/30 transition-colors"
                  >
                    ♞ Analyze this game
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-amber-200/60 font-serif italic">
            Master {legend.name}&apos;s style, then study other legends to become complete.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/classic-games"
              className="inline-flex items-center gap-2 px-6 py-3 bg-stone-800 hover:bg-stone-700 text-amber-100 font-serif rounded border border-stone-600 transition-all"
            >
              <span>←</span>
              Other Legends
            </Link>
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
    </div>
  );
}
