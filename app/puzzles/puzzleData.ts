// Puzzle data types and utility functions
// This file contains shared types and helper functions for the puzzle trainer

export interface Puzzle {
  id: string;
  fen: string;
  moves: string[];
  rating: number;
  themes: string[];
}

// Rating-based difficulties + Legendary players by era (without anderssen)
export type Difficulty = 
  | "easy" | "medium" | "hard" | "master" 
  // Modern Era (20th-21st century)
  | "fischer" | "kasparov" | "botvinnik" | "capablanca"
  // Romantic Era (19th century)  
  | "morphy" | "rubinstein"
  // Classical Era (pre-19th century)
  | "greco" | "philidor" | "staunton";

// Difficulty categories for UI organization
export const DIFFICULTY_CATEGORIES = {
  byRating: ["easy", "medium", "hard", "master"] as Difficulty[],
  modern: ["fischer", "kasparov", "botvinnik", "capablanca"] as Difficulty[],
  romantic: ["morphy", "rubinstein"] as Difficulty[],
  classical: ["philidor", "greco", "staunton"] as Difficulty[],
};

// Color styling for difficulty buttons
export const getDifficultyColor = (diff: Difficulty): string => {
  const colors: Record<Difficulty, string> = {
    easy: "text-green-400 bg-green-900/30 border-green-700/50",
    medium: "text-yellow-400 bg-yellow-900/30 border-yellow-700/50",
    hard: "text-orange-400 bg-orange-900/30 border-orange-700/50",
    master: "text-red-400 bg-red-900/30 border-red-700/50",
    // 20th Century Legends
    fischer: "text-blue-400 bg-blue-900/30 border-blue-700/50",
    kasparov: "text-purple-400 bg-purple-900/30 border-purple-700/50",
    botvinnik: "text-cyan-400 bg-cyan-900/30 border-cyan-700/50",
    capablanca: "text-amber-400 bg-amber-900/30 border-amber-700/50",
    // 19th Century / Romantic Era
    morphy: "text-emerald-400 bg-emerald-900/30 border-emerald-700/50",
    rubinstein: "text-rose-400 bg-rose-900/30 border-rose-700/50",
    // Classical Era / Pre-19th Century
    greco: "text-fuchsia-400 bg-fuchsia-900/30 border-fuchsia-700/50",
    philidor: "text-teal-400 bg-teal-900/30 border-teal-700/50",
    staunton: "text-indigo-400 bg-indigo-900/30 border-indigo-700/50",
  };
  return colors[diff];
};

// Display labels for difficulty buttons
export const getDifficultyLabel = (diff: Difficulty): string => {
  const labels: Record<Difficulty, string> = {
    easy: "Easy (800-1000)",
    medium: "Medium (1200-1400)",
    hard: "Hard (1600-1800)",
    master: "Master (2000+)",
    // 20th Century Legends
    fischer: "Bobby Fischer",
    kasparov: "Garry Kasparov",
    botvinnik: "Mikhail Botvinnik",
    capablanca: "José Capablanca",
    // 19th Century / Romantic Era
    morphy: "Paul Morphy",
    rubinstein: "Akiba Rubinstein",
    // Classical Era / Pre-19th Century
    greco: "Gioachino Greco",
    philidor: "François-André Philidor",
    staunton: "Howard Staunton",
  };
  return labels[diff];
};

// Format theme names for display (converts camelCase to Title Case)
export const formatThemes = (themes: string[]): string[] => {
  return themes
    .map(t => t.replace(/([A-Z])/g, ' $1').trim())
    .map(t => t.charAt(0).toUpperCase() + t.slice(1))
    .slice(0, 3);
};

// Check if a puzzle is from a legendary player (for UI display purposes)
export const isLegendPuzzle = (puzzleId: string): boolean => {
  const legendPrefixes = [
    "fischer", "kasparov", "botvinnik", "capablanca",
    "morphy", "rubinstein", "greco", "philidor", "staunton"
  ];
  return legendPrefixes.some(prefix => puzzleId.startsWith(prefix));
};

// Get legend name from puzzle ID
export const getLegendName = (puzzleId: string): string | null => {
  const legendNames: Record<string, string> = {
    fischer: "♔ Bobby Fischer",
    kasparov: "♔ Garry Kasparov",
    botvinnik: "♔ Mikhail Botvinnik",
    capablanca: "♔ José Capablanca",
    morphy: "♔ Paul Morphy",
    rubinstein: "♔ Akiba Rubinstein",
    greco: "♔ Gioachino Greco",
    philidor: "♔ François-André Philidor",
    staunton: "♔ Howard Staunton",
  };
  
  for (const [prefix, name] of Object.entries(legendNames)) {
    if (puzzleId.startsWith(prefix)) return name;
  }
  return null;
};
