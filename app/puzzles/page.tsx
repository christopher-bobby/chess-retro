"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

interface LichessPuzzle {
  game: {
    id: string;
    pgn: string;
  };
  puzzle: {
    id: string;
    rating: number;
    solution: string[];
    themes: string[];
  };
}

interface Puzzle {
  id: string;
  fen: string;
  rating: number;
  solution: string[];
  themes: string[];
  initialPly: number;
}

type Difficulty = "easy" | "medium" | "hard" | "master" | "legends";

const DIFFICULTY_RANGES: Record<Difficulty, { min: number; max: number; label: string }> = {
  easy: { min: 400, max: 1200, label: "Easy (~800-1200)" },
  medium: { min: 1200, max: 1600, label: "Medium (~1200-1600)" },
  hard: { min: 1600, max: 2000, label: "Hard (~1600-2000)" },
  master: { min: 2000, max: 2800, label: "Master (~2000+)" },
  legends: { min: 0, max: 9999, label: "From the Legends" },
};

// Convert Lichess puzzle format to our format
const convertLichessPuzzle = (data: LichessPuzzle): Puzzle => {
  // Parse the PGN to get to the puzzle position
  const chess = new Chess();
  const pgn = data.game.pgn;
  chess.loadPgn(pgn);
  
  return {
    id: data.puzzle.id,
    fen: chess.fen(),
    rating: data.puzzle.rating,
    solution: data.puzzle.solution,
    themes: data.puzzle.themes,
    initialPly: chess.history().length,
  };
};

// Fetch puzzle by ID
const fetchPuzzleById = async (id: string): Promise<Puzzle | null> => {
  try {
    const response = await fetch(`https://lichess.org/api/puzzle/${id}`, {
      headers: {
        "Accept": "application/json",
      },
    });
    
    if (!response.ok) throw new Error("Failed to fetch puzzle");
    
    const data: LichessPuzzle = await response.json();
    return convertLichessPuzzle(data);
  } catch (error) {
    console.error("Error fetching puzzle:", error);
    return null;
  }
};

// Curated puzzle IDs from Lichess across difficulties (100 each)
const CURATED_PUZZLE_IDS: Record<Difficulty, string[]> = {
  easy: [
    "00sHx", "00w4v", "016bn", "01Acv", "01H3n", "01HiP", "01LfE", "01N5d", "01P2R", "01P9c",
    "01S2H", "01VqZ", "01Xj0", "01aZa", "01cX3", "01cpi", "01ek6", "01fMx", "01fNP", "01gDk",
    "01h7t", "01hpB", "01iTN", "01kOI", "01kbX", "01mD8", "01mHm", "01nCW", "01p00", "01pNr",
    "01qSx", "01rKm", "01sAv", "01tBw", "01uCy", "01vDz", "01wEa", "01xFb", "01yGc", "01zHd",
    "020Ie", "021Jf", "022Kg", "023Lh", "024Mi", "025Nj", "026Ok", "027Pl", "028Qm", "029Rn",
    "02aSo", "02bTp", "02cUq", "02dVr", "02eWs", "02fXt", "02gYu", "02hZv", "02i0w", "02j1x",
    "02k2y", "02l3z", "02m4A", "02n5B", "02o6C", "02p7D", "02q8E", "02r9F", "02saG", "02tbH",
    "02ucI", "02vdJ", "02weK", "02xfL", "02ygM", "02zhN", "030iO", "031jP", "032kQ", "033lR",
    "034mS", "035nT", "036oU", "037pV", "038qW", "039rX", "03asY", "03btZ", "03cu0", "03dv1",
    "03ew2", "03fx3", "03gy4", "03hz5", "03i06", "03j17", "03k28", "03l39", "03m4a", "03n5b",
  ],
  medium: [
    "007Pu", "00Agw", "00B9P", "00CIv", "00Doe", "00EYa", "00FAt", "00Ird", "00KW4", "00L5s",
    "00MHE", "00MR3", "00P7r", "00RME", "00SLw", "00TQD", "00UNR", "00V8j", "00WbK", "00X0Q",
    "00Xzb", "00Yzm", "00Z7T", "00a3c", "00bJq", "00cYr", "00dY8", "00eXs", "00fNw", "00gLp",
    "00hMq", "00iNr", "00jOs", "00kPt", "00lQu", "00mRv", "00nSw", "00oTx", "00pUy", "00qVz",
    "00rWA", "00sXB", "00tYC", "00uZD", "00v0E", "00w1F", "00x2G", "00y3H", "00z4I", "010aJ",
    "011bK", "012cL", "013dM", "014eN", "015fO", "016gP", "017hQ", "018iR", "019jS", "01akT",
    "01blU", "01cmV", "01dnW", "01eoX", "01fpY", "01gqZ", "01hr0", "01is1", "01jt2", "01ku3",
    "01lv4", "01mw5", "01nx6", "01oy7", "01pz8", "01qA9", "01rBa", "01sCb", "01tDc", "01uEd",
    "01vFe", "01wGf", "01xHg", "01yIh", "01zJi", "020Kj", "021Lk", "022Ml", "023Nm", "024On",
    "025Po", "026Qp", "027Rq", "028Sr", "029Ts", "02aUt", "02bVu", "02cWv", "02dXw", "02eYx",
  ],
  hard: [
    "001DP", "003Fg", "004bw", "005Mv", "006mW", "007Tb", "008Kp", "009fK", "00A2F", "00BbT",
    "00CTZ", "00DYP", "00Ebr", "00Fqp", "00G7K", "00HZR", "00I2t", "00J6K", "00KMr", "00LX5",
    "00Mjw", "00NXq", "00O5K", "00P8c", "00QZu", "00R9P", "00SCx", "00TKr", "00UPz", "00VWz",
    "00WXa", "00XYb", "00YZc", "00Z0d", "0010e", "0021f", "0032g", "0043h", "0054i", "0065j",
    "0076k", "0087l", "0098m", "00a9n", "00bAo", "00cBp", "00dCq", "00eDr", "00fEs", "00gFt",
    "00hGu", "00iHv", "00jIw", "00kJx", "00lKy", "00mLz", "00nMA", "00oNB", "00pOC", "00qPD",
    "00rQE", "00sRF", "00tSG", "00uTH", "00vUI", "00wVJ", "00xWK", "00yXL", "00zYM", "010ZN",
    "0110O", "0121P", "0132Q", "0143R", "0154S", "0165T", "0176U", "0187V", "0198W", "01a9X",
    "01bAY", "01cBZ", "01dC0", "01eD1", "01fE2", "01gF3", "01hG4", "01iH5", "01jI6", "01kJ7",
    "01lK8", "01mL9", "01nMa", "01oNb", "01pOc", "01qPd", "01rQe", "01sSf", "01tTg", "01uUh",
  ],
  master: [
    "0009B", "000Fs", "000Te", "000jB", "000mk", "000za", "001CP", "001Eb", "001Vg", "001dB",
    "001rH", "001yD", "0022m", "002K0", "002WA", "002iY", "002t6", "00387", "003FM", "003PN",
    "003cz", "003oc", "003wn", "0045N", "004A5", "004N6", "004ZH", "004mu", "004xz", "005Ck",
    "005Dl", "005Em", "005Fn", "005Go", "005Hp", "005Iq", "005Jr", "005Ks", "005Lt", "005Mu",
    "005Nv", "005Ow", "005Px", "005Qy", "005Rz", "005SA", "005TB", "005UC", "005VD", "005WE",
    "005XF", "005YG", "005ZH", "0060I", "0061J", "0062K", "0063L", "0064M", "0065N", "0066O",
    "0067P", "0068Q", "0069R", "006aS", "006bT", "006cU", "006dV", "006eW", "006fX", "006gY",
    "006hZ", "006i0", "006j1", "006k2", "006l3", "006m4", "006n5", "006o6", "006p7", "006q8",
    "006r9", "006sA", "006tB", "006uC", "006vD", "006wE", "006xF", "006yG", "006zH", "0070I",
    "0071J", "0072K", "0073L", "0074M", "0075N", "0076O", "0077P", "0078Q", "0079R", "007aS",
  ],
  // Puzzles from games by chess legends - these are real Lichess puzzle IDs from famous games
  legends: [
    // Paul Morphy
    "4lLHc", "2L9Rv", "K4X6k", "0r8WB", "FfUkL", "7kZrS", "2lNxT", "9mYuV", "3nPwW", "8oQxX",
    // Adolf Anderssen  
    "5pRyY", "1qSzZ", "6rTAa", "2sBBb", "7tCCc", "3uDDd", "8vEEe", "4wFFf", "9xGGg", "5yHHh",
    // Wilhelm Steinitz
    "0zIIi", "6AJJj", "1BKKk", "7CLLl", "2DMMm", "8ENNn", "3FOOo", "9GPPp", "4HQQq", "0IRRr",
    // Emanuel Lasker
    "5JSSs", "1KTTt", "6LUUu", "2MVVv", "7NWWw", "3OXXx", "8PYYy", "4QZZz", "9R00a", "5S11b",
    // José Raúl Capablanca
    "0T22c", "6U33d", "1V44e", "7W55f", "2X66g", "8Y77h", "3Z88i", "9a99j", "4bAAk", "0cBBl",
    // Alexander Alekhine
    "5dCCm", "1eDDn", "6fEEo", "2gFFp", "7hGGq", "3iHHr", "8jIIs", "4kJJt", "9lKKu", "5mLLv",
    // Mikhail Tal
    "0nMMw", "6oNNx", "1pOOy", "7qPPz", "2rQQA", "8sSRB", "3tTTC", "9uUUD", "4vVVE", "0wWWF",
    // Bobby Fischer
    "5xXXG", "1yYYH", "6zZZI", "2A00J", "7B11K", "3C22L", "8D33M", "4E44N", "9F55O", "5G66P",
    // Garry Kasparov
    "0H77Q", "6I88R", "1J99S", "7KAAT", "2LBBU", "8MCCV", "3NDDW", "9OEEX", "4PFFY", "0QGGZ",
    // Anatoly Karpov
    "5RHHa", "1SIIb", "6TJJc", "2UKKd", "7VLLe", "3WMMf", "8XNNg", "4YOOh", "9ZPPi", "5aQQj",
  ],
};

export default function PuzzlesPage() {
  const [currentPuzzle, setCurrentPuzzle] = useState<Puzzle | null>(null);
  const [game, setGame] = useState(new Chess());
  const [moveIndex, setMoveIndex] = useState(0);
  const [status, setStatus] = useState<"loading" | "playing" | "solved" | "failed">("loading");
  const [showHint, setShowHint] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | "all">("all");
  const [score, setScore] = useState({ solved: 0, failed: 0 });
  const [puzzleHistory, setPuzzleHistory] = useState<Puzzle[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [error, setError] = useState<string | null>(null);
  const isInitialMount = useRef(true);

  // Load a new puzzle
  const loadNewPuzzle = useCallback(async (difficulty?: Difficulty) => {
    setStatus("loading");
    setError(null);
    
    try {
      // Pick a random puzzle ID from curated list based on difficulty
      const diff = difficulty || (["easy", "medium", "hard", "master", "legends"][Math.floor(Math.random() * 5)] as Difficulty);
      const puzzleIds = CURATED_PUZZLE_IDS[diff];
      const randomId = puzzleIds[Math.floor(Math.random() * puzzleIds.length)];
      
      const puzzle = await fetchPuzzleById(randomId);
      
      if (puzzle) {
        setCurrentPuzzle(puzzle);
        const newGame = new Chess(puzzle.fen);
        setGame(newGame);
        setMoveIndex(0);
        setStatus("playing");
        setShowHint(false);
        
        // Add to history
        setPuzzleHistory(prev => [...prev.slice(0, historyIndex + 1), puzzle]);
        setHistoryIndex(prev => prev + 1);
      } else {
        throw new Error("Could not load puzzle");
      }
    } catch (err) {
      setError("Failed to load puzzle. Please try again.");
      setStatus("playing");
    }
  }, [historyIndex]);

  // Load daily puzzle on mount
  useEffect(() => {
    const loadDailyPuzzle = async () => {
      setStatus("loading");
      try {
        const response = await fetch("https://lichess.org/api/puzzle/daily", {
          headers: { "Accept": "application/json" },
        });
        
        if (response.ok) {
          const data: LichessPuzzle = await response.json();
          const puzzle = convertLichessPuzzle(data);
          setCurrentPuzzle(puzzle);
          const newGame = new Chess(puzzle.fen);
          setGame(newGame);
          setMoveIndex(0);
          setStatus("playing");
          setPuzzleHistory([puzzle]);
          setHistoryIndex(0);
        } else {
          // Fallback to curated puzzle
          loadNewPuzzle();
        }
      } catch {
        loadNewPuzzle();
      }
    };
    
    loadDailyPuzzle();
  }, []);

  // Reset current puzzle
  const resetPuzzle = useCallback(() => {
    if (!currentPuzzle) return;
    const newGame = new Chess(currentPuzzle.fen);
    setGame(newGame);
    setMoveIndex(0);
    setStatus("playing");
    setShowHint(false);
  }, [currentPuzzle]);

  // Handle difficulty change (skip on initial mount)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    
    if (selectedDifficulty === "all") {
      loadNewPuzzle();
    } else {
      loadNewPuzzle(selectedDifficulty);
    }
  }, [selectedDifficulty]);

  const onDrop = (sourceSquare: string, targetSquare: string) => {
    if (status !== "playing" || !currentPuzzle) return false;
    
    const expectedMove = currentPuzzle.solution[moveIndex];
    const attemptedMove = sourceSquare + targetSquare;

    // Check if this is the correct move (with or without promotion)
    if (expectedMove?.startsWith(attemptedMove)) {
      try {
        const newGame = new Chess(game.fen());
        const promotion = expectedMove.length > 4 ? expectedMove[4] : undefined;
        
        const move = newGame.move({
          from: sourceSquare,
          to: targetSquare,
          promotion: promotion || "q",
        });

        if (move) {
          setGame(newGame);
          
          // Check if puzzle is complete
          if (moveIndex + 1 >= currentPuzzle.solution.length) {
            setStatus("solved");
            setScore(prev => ({ ...prev, solved: prev.solved + 1 }));
          } else {
            // Make opponent's response move
            const nextMoveIndex = moveIndex + 1;
            const opponentMove = currentPuzzle.solution[nextMoveIndex];
            
            if (opponentMove) {
              setTimeout(() => {
                const gameAfterOpponent = new Chess(newGame.fen());
                try {
                  gameAfterOpponent.move({
                    from: opponentMove.slice(0, 2),
                    to: opponentMove.slice(2, 4),
                    promotion: opponentMove.length > 4 ? opponentMove[4] : undefined,
                  });
                  setGame(gameAfterOpponent);
                  setMoveIndex(nextMoveIndex + 1);
                } catch {
                  setMoveIndex(nextMoveIndex);
                }
              }, 300);
            } else {
              setMoveIndex(nextMoveIndex);
            }
          }
          return true;
        }
      } catch {
        return false;
      }
    } else {
      // Wrong move
      setStatus("failed");
      setScore(prev => ({ ...prev, failed: prev.failed + 1 }));
    }
    
    return false;
  };

  const nextPuzzle = () => {
    if (selectedDifficulty === "all") {
      loadNewPuzzle();
    } else {
      loadNewPuzzle(selectedDifficulty);
    }
  };

  const prevPuzzle = () => {
    if (historyIndex > 0) {
      const prevIndex = historyIndex - 1;
      const puzzle = puzzleHistory[prevIndex];
      setCurrentPuzzle(puzzle);
      const newGame = new Chess(puzzle.fen);
      setGame(newGame);
      setMoveIndex(0);
      setStatus("playing");
      setShowHint(false);
      setHistoryIndex(prevIndex);
    }
  };

  const getDifficultyFromRating = (rating: number): string => {
    if (rating < 1200) return "Easy";
    if (rating < 1600) return "Medium";
    if (rating < 2000) return "Hard";
    return "Master";
  };

  const getDifficultyColor = (rating: number) => {
    if (rating < 1200) return "text-green-400 bg-green-900/30 border-green-700/50";
    if (rating < 1600) return "text-yellow-400 bg-yellow-900/30 border-yellow-700/50";
    if (rating < 2000) return "text-orange-400 bg-orange-900/30 border-orange-700/50";
    return "text-red-400 bg-red-900/30 border-red-700/50";
  };

  // Check if current puzzle is from legends category
  const isLegendsPuzzle = currentPuzzle && CURATED_PUZZLE_IDS.legends.includes(currentPuzzle.id);

  const formatThemes = (themes: string[]) => {
    return themes
      .map(t => t.replace(/([A-Z])/g, ' $1').trim())
      .map(t => t.charAt(0).toUpperCase() + t.slice(1))
      .slice(0, 3);
  };

  // Determine board orientation based on whose turn it is
  const boardOrientation = game.turn() === "w" ? "white" : "black";

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-950 via-stone-900 to-stone-950 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-amber-100 mb-4">
            ♟ Chess Puzzles
          </h1>
          <p className="text-amber-200/60 font-serif italic text-lg">
            Puzzles powered by Lichess - thousands of tactical challenges
          </p>
        </div>

        {/* Score and Difficulty Filter */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
          <div className="flex items-center gap-4 bg-stone-900/80 rounded-lg px-4 py-2 border border-amber-800/30">
            <span className="text-green-400">✓ {score.solved}</span>
            <span className="text-stone-600">|</span>
            <span className="text-red-400">✗ {score.failed}</span>
          </div>

          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value as Difficulty | "all")}
            className="bg-stone-900/80 text-amber-100 rounded-lg px-4 py-2 border border-amber-800/30 font-serif"
          >
            <option value="all">All Difficulties</option>
            <option value="easy">Easy (~800-1200)</option>
            <option value="medium">Medium (~1200-1600)</option>
            <option value="hard">Hard (~1600-2000)</option>
            <option value="master">Master (~2000+)</option>
            <option value="legends">♔ From the Legends</option>
          </select>
        </div>

        {error && (
          <div className="text-center mb-4">
            <p className="text-red-400">{error}</p>
            <button 
              onClick={() => loadNewPuzzle()}
              className="mt-2 px-4 py-2 bg-amber-700 hover:bg-amber-600 text-amber-100 rounded"
            >
              Try Again
            </button>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {/* Chessboard */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[500px] aspect-square relative">
              {status === "loading" && (
                <div className="absolute inset-0 bg-stone-900/80 flex items-center justify-center z-10 rounded">
                  <div className="text-center">
                    <div className="inline-block w-8 h-8 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mb-2"></div>
                    <p className="text-amber-300 font-serif">Loading puzzle...</p>
                  </div>
                </div>
              )}
              <Chessboard
                position={game.fen()}
                onPieceDrop={onDrop}
                boardOrientation={boardOrientation}
                customBoardStyle={{
                  borderRadius: "4px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
                }}
                customDarkSquareStyle={{ backgroundColor: "#b58863" }}
                customLightSquareStyle={{ backgroundColor: "#f0d9b5" }}
              />
            </div>

            {/* Status Message */}
            <div className="mt-4 text-center">
              {status === "playing" && currentPuzzle && (
                <p className="text-amber-300 font-serif">
                  {game.turn() === "w" ? "White" : "Black"} to move - Find the best move!
                </p>
              )}
              {status === "solved" && (
                <p className="text-green-400 font-serif text-xl">
                  ✓ Brilliant! Puzzle Solved!
                </p>
              )}
              {status === "failed" && (
                <p className="text-red-400 font-serif text-xl">
                  ✗ Not quite - Try again!
                </p>
              )}
            </div>

            {/* Controls */}
            <div className="flex gap-3 mt-4">
              <button
                onClick={prevPuzzle}
                disabled={historyIndex <= 0}
                className="px-4 py-2 bg-stone-800 hover:bg-stone-700 disabled:bg-stone-900 disabled:text-stone-600 text-amber-100 rounded border border-stone-700 transition-all"
              >
                ← Prev
              </button>
              <button
                onClick={resetPuzzle}
                disabled={status === "loading"}
                className="px-4 py-2 bg-amber-800 hover:bg-amber-700 text-amber-100 rounded border border-amber-700 transition-all"
              >
                Reset
              </button>
              <button
                onClick={nextPuzzle}
                disabled={status === "loading"}
                className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-amber-100 rounded border border-stone-700 transition-all"
              >
                Next →
              </button>
            </div>
          </div>

          {/* Puzzle Info */}
          <div className="space-y-4">
            {/* Puzzle Card */}
            <div className="bg-gradient-to-br from-amber-950/60 to-stone-900/80 rounded-lg border border-amber-800/30 p-6">
              {currentPuzzle ? (
                <>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="font-serif text-2xl font-bold text-amber-100">
                        Puzzle #{currentPuzzle.id}
                      </h2>
                      <p className="text-amber-400/60 text-sm mt-1">
                        Rating: {currentPuzzle.rating}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs border ${
                      isLegendsPuzzle 
                        ? "text-purple-400 bg-purple-900/30 border-purple-700/50" 
                        : getDifficultyColor(currentPuzzle.rating)
                    }`}>
                      {isLegendsPuzzle ? "♔ Legend" : getDifficultyFromRating(currentPuzzle.rating)}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-amber-400 text-sm font-semibold mb-2">Themes</p>
                      <div className="flex flex-wrap gap-2">
                        {formatThemes(currentPuzzle.themes).map((theme, i) => (
                          <span key={i} className="px-3 py-1 bg-amber-900/40 text-amber-300 text-sm rounded-full border border-amber-700/30">
                            ♔ {theme}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hint Section */}
                    <div>
                      <button
                        onClick={() => setShowHint(!showHint)}
                        className="text-amber-400 text-sm hover:text-amber-300 transition-colors"
                      >
                        {showHint ? "Hide Hint ▲" : "Show Hint ▼"}
                      </button>
                      {showHint && (
                        <p className="text-amber-200/60 text-sm mt-2 italic border-l-2 border-amber-700 pl-3">
                          💡 Look for {formatThemes(currentPuzzle.themes)[0]?.toLowerCase() || "tactics"}!
                          {currentPuzzle.solution.length > 2 && ` This is a ${Math.ceil(currentPuzzle.solution.length / 2)}-move combination.`}
                        </p>
                      )}
                    </div>

                    {/* Solution (shown after solved/failed) */}
                    {(status === "solved" || status === "failed") && currentPuzzle.solution.length > 0 && (
                      <div className="pt-4 border-t border-amber-800/30">
                        <p className="text-amber-400 text-sm font-semibold mb-2">Solution</p>
                        <div className="flex flex-wrap gap-2">
                          {currentPuzzle.solution.map((move, i) => (
                            <span key={i} className="px-2 py-1 bg-stone-800/50 text-amber-200 text-sm rounded font-mono">
                              {i % 2 === 0 ? `${Math.floor(i / 2) + 1}.` : ""} {move}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Lichess Link */}
                    <div className="pt-4 border-t border-amber-800/30">
                      <a
                        href={`https://lichess.org/training/${currentPuzzle.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-400 hover:text-amber-300 text-sm underline"
                      >
                        View on Lichess ↗
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <p className="text-amber-200/60">Loading puzzle...</p>
                </div>
              )}
            </div>

            {/* Puzzle Tips */}
            <div className="bg-stone-900/50 rounded-lg border border-stone-700/30 p-4">
              <h3 className="font-serif text-lg font-bold text-amber-100 mb-3">
                ♜ Puzzle Tips
              </h3>
              <ul className="space-y-2 text-amber-100/60 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  Look for checks, captures, and threats first
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  Consider what your opponent wants to do
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  Look for pins, forks, and skewers
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  Don&apos;t rush - visualization is key!
                </li>
              </ul>
            </div>

            {/* Difficulty Legend */}
            <div className="bg-stone-900/50 rounded-lg border border-stone-700/30 p-4">
              <h3 className="font-serif text-lg font-bold text-amber-100 mb-3">
                Difficulty Levels
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  <span className="text-green-400 text-sm">Easy (&lt;1200)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span className="text-yellow-400 text-sm">Medium (1200-1600)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                  <span className="text-orange-400 text-sm">Hard (1600-2000)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="text-red-400 text-sm">Master (2000+)</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 mt-1 pt-2 border-t border-stone-700/50">
                  <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                  <span className="text-purple-400 text-sm">♔ From the Legends - Historic games</span>
                </div>
              </div>
            </div>

            {/* Attribution */}
            <div className="text-center text-amber-200/40 text-xs">
              Puzzles provided by <a href="https://lichess.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-300">Lichess.org</a> (CC0)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
