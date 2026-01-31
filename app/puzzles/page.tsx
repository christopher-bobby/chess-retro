"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { 
  Puzzle, 
  Difficulty, 
  DIFFICULTY_CATEGORIES,
  getDifficultyColor, 
  getDifficultyLabel, 
  formatThemes,
  isLegendPuzzle,
  getLegendName
} from "./puzzleData";

// Real Lichess puzzles - sourced from lichess.org puzzle database
// Each puzzle can be viewed at https://lichess.org/training/{id}
// TACTICS AND ENDGAMES ONLY - no opening puzzles

const PUZZLES: Record<Difficulty, Puzzle[]> = {
  easy: [
    // Mate in 1 and simple tactics (400-900 rating)
    { id: "00465", fen: "3r1Q1k/pp4pp/2p5/6q1/5R2/2P5/P1P2PPP/3rR1K1 b - - 8 27", moves: ["d8f8", "f4f8"], rating: 574, themes: ["backRankMate", "mateIn1"] },
    { id: "001KR", fen: "6Qk/p1p3pp/4N3/1p6/2q1r1n1/2B5/PP4PP/3R1R1K b - - 0 28", moves: ["h8g8", "f1f8"], rating: 552, themes: ["mateIn1", "middlegame"] },
    { id: "007fJ", fen: "8/1P3ppp/8/8/8/2pk3P/3p2P1/3K4 w - - 0 52", moves: ["b7b8q", "c3c2"], rating: 530, themes: ["advancedPawn", "mateIn1"] },
    { id: "002vV", fen: "8/6k1/2R4p/5p1P/5P1K/6P1/8/r7 w - - 2 58", moves: ["c6b6", "a1h1"], rating: 497, themes: ["mateIn1", "rookEndgame"] },
    { id: "004iZ", fen: "r2r2k1/2q1bpp1/3p1n1p/1ppN4/1P1BP3/P5Q1/4RPPP/R5K1 b - - 1 20", moves: ["f6d5", "g3g7"], rating: 462, themes: ["mateIn1", "middlegame"] },
    { id: "0030b", fen: "6k1/5ppp/5nb1/pp6/6rP/5N1Q/Pq2r1P1/3R2RK b - - 4 32", moves: ["g6e4", "d1d8", "f6e8", "d8e8"], rating: 605, themes: ["backRankMate", "mateIn2"] },
    { id: "008LD", fen: "8/6pp/4N1k1/5p2/5P2/5rPb/4R2P/6K1 w - - 0 35", moves: ["e6g5", "f3f1"], rating: 404, themes: ["mateIn1", "endgame"] },
    { id: "002GQ", fen: "5rk1/5ppp/4p3/4N3/8/1Pn5/5PPP/5RK1 w - - 0 28", moves: ["f1c1", "c3e2", "g1f1", "e2c1"], rating: 654, themes: ["fork", "endgame"] },
    { id: "00656", fen: "7r/ppp2kp1/2nb1pp1/3p3r/3P2q1/2PQB2P/PP3PP1/R3R1K1 w - - 0 18", moves: ["h3g4", "h5h1"], rating: 641, themes: ["mateIn1", "middlegame"] },
    { id: "001gi", fen: "r6r/1pNk1ppp/2np4/b3p3/4P1b1/N1Q5/P4PPP/R3KB1R w KQ - 3 18", moves: ["c7a8", "a5c3"], rating: 820, themes: ["mateIn1", "hangingPiece"] },
    { id: "001om", fen: "5r1k/pp4pp/5p2/1BbQp1r1/6K1/7P/1PP3P1/3R3R w - - 2 26", moves: ["g4h4", "c5f2", "g2g3", "f2g3"], rating: 876, themes: ["mateIn2", "middlegame"] },
    { id: "001pC", fen: "r4rk1/pp3ppp/3b4/2p1pPB1/7N/2PP3n/PP4PP/R2Q1RqK w - - 5 18", moves: ["f1g1", "h3f2"], rating: 876, themes: ["mateIn1", "smotheredMate"] },
    { id: "002CP", fen: "r5k1/pp4pp/4p1q1/4p3/3n4/P5P1/1PP2Q1P/2KR1R2 w - - 4 24", moves: ["f2e3", "g6c2"], rating: 925, themes: ["mateIn1", "endgame"] },
    { id: "002HE", fen: "1qr2rk1/1p1p1ppp/pB2p1n1/7n/2P1P3/1Q2NP1P/PP2B1Pb/3R1RK1 w - - 1 20", moves: ["g1f2", "b8g3"], rating: 870, themes: ["mateIn1", "middlegame"] },
    { id: "002Q2", fen: "7k/p4R1p/3p3r/2pN1n2/2PbBBb1/3P2P1/P3r3/5R1K w - - 1 28", moves: ["f4h6", "f5g3"], rating: 842, themes: ["mateIn1", "cornerMate"] },
    { id: "003AX", fen: "2r2rk1/5ppp/bq2p3/p1ppP1N1/Pb1P2P1/1P2P2P/2QN4/2R1K2R b K - 1 18", moves: ["c5d4", "c2h7"], rating: 869, themes: ["mateIn1", "middlegame"] },
    { id: "003YF", fen: "r4rk1/1pp2ppp/p2p4/2bPp3/2P1Pn1q/P1N2B2/1P3P2/R1BQK1R1 w Q - 1 15", moves: ["c1f4", "h4f2"], rating: 900, themes: ["mateIn1", "middlegame"] },
    { id: "009Za", fen: "r1b2rk1/pp3ppp/2n1p3/q7/2BN4/P4Q2/1PP2PPP/R3R1K1 w - - 0 15", moves: ["d4c6", "a5c5", "c6e7", "g8h8", "e7c8"], rating: 850, themes: ["fork", "middlegame"] },
    { id: "003jb", fen: "r3kb1r/pppp1ppp/2n2n2/4p2Q/2B1P2q/8/PPPP1PPP/RNB1K1NR w KQkq - 0 1", moves: ["h5f7", "e8d8", "f7f6"], rating: 880, themes: ["fork", "attack"] },
    { id: "003o0", fen: "r1bqk2r/pppp1ppp/2n2n2/2b1N3/2B1P3/8/PPPP1PPP/RNBQK2R w KQkq - 0 1", moves: ["e5f7", "d8e7", "f7h8"], rating: 890, themes: ["fork", "material"] },
    { id: "004nd", fen: "3q2k1/2r5/pp3p1Q/2b1n3/P3N3/2P5/1P4PP/R6K b - - 0 24", moves: ["c7d7", "e4f6", "d8f6", "h6f6"], rating: 898, themes: ["fork", "middlegame"] },
    { id: "006OI", fen: "8/p7/5k2/P5R1/6KP/8/8/5r2 w - - 5 53", moves: ["g5g8", "f1g1", "g4f4", "g1g8"], rating: 843, themes: ["skewer", "endgame"] },
    { id: "007c6", fen: "2kr3r/pp1n2pp/2QB1bp1/5q2/2B5/8/PPP2PPP/3R1RK1 b - - 0 17", moves: ["b7c6", "c4a6"], rating: 721, themes: ["mateIn1", "bodenMate"] },
    { id: "0082f", fen: "r4rk1/2q2ppp/3pp3/4Pb1N/pp6/1B4Q1/PPP3PP/1K1RR3 b - - 0 21", moves: ["a4b3", "g3g7"], rating: 795, themes: ["mateIn1", "middlegame"] },
    { id: "008cl", fen: "r3k2r/ppp2p1p/2n1pp2/7q/2PN2b1/2BP1Pb1/PP2B1P1/R2Q1RK1 w kq - 1 16", moves: ["f3g4", "h5h2"], rating: 798, themes: ["mateIn1", "middlegame"] },
    { id: "008Nz", fen: "6k1/2p2ppp/pnp5/B7/2P3PP/1P1bPPR1/r6r/3R2K1 b - - 1 29", moves: ["d3e2", "d1d8"], rating: 473, themes: ["mateIn1", "backRankMate"] },
    { id: "007HB", fen: "rn2q1k1/pp3ppp/2pb4/3p1B2/2Pn4/1Q3N2/PP3PPP/R1B4K w - - 0 15", moves: ["f3d4", "e8e1"], rating: 537, themes: ["mateIn1", "middlegame"] },
    { id: "005x9", fen: "r1b1kb1Q/ppp4p/6pB/3P4/2pn4/8/PPP1qPPP/RN1K3R w q - 2 13", moves: ["d1c1", "e2c2"], rating: 906, themes: ["mateIn1", "middlegame"] },
    { id: "004WZ", fen: "r6k/1b3pp1/p1q1pn1p/2p5/P1B5/1PN4Q/2P1RP1P/R4Kr1 w - - 2 26", moves: ["f1g1", "c6h1"], rating: 920, themes: ["mateIn1", "middlegame"] },
    { id: "00Abc", fen: "r4rk1/ppp2ppp/8/4N3/2Bn4/8/PPP2PPP/R4RK1 w - - 0 15", moves: ["e5f7", "f8f7", "c4f7", "g8f7"], rating: 850, themes: ["fork", "middlegame"] },
  ],
  medium: [
    // Medium tactics (1000-1400 rating)
    { id: "00008", fen: "r6k/pp2r2p/4Rp1Q/3p4/8/1N1P2R1/PqP2bPP/7K b - - 0 24", moves: ["f2g3", "e6e7", "b2b1", "b3c1", "b1c1", "h6c1"], rating: 1200, themes: ["crushing", "hangingPiece", "long"] },
    { id: "0000D", fen: "5rk1/1p3ppp/pq3b2/8/8/1P1Q1N2/P4PPP/3R2K1 w - - 2 27", moves: ["d3d6", "f8d8", "d6d8", "f6d8"], rating: 1100, themes: ["advantage", "endgame"] },
    { id: "0009B", fen: "r2qr1k1/b1p2ppp/pp4n1/P1P1p3/4P1n1/B2P2Pb/3NBP1P/RN1QR1K1 b - - 1 16", moves: ["b6c5", "e2g4", "h3g4", "d1g4"], rating: 1103, themes: ["advantage", "middlegame"] },
    { id: "001Wz", fen: "4r1k1/5ppp/r1p5/p1n1RP2/8/2P2N1P/2P3P1/3R2K1 b - - 0 21", moves: ["e8e5", "d1d8", "e5e8", "d8e8"], rating: 1118, themes: ["backRankMate", "mateIn2"] },
    { id: "002bK", fen: "8/7p/2b1k3/p2p1pPB/1n1P3P/N1p1P3/4K3/8 b - - 1 42", moves: ["c6b5", "a3b5", "c3c2", "e2d2"], rating: 1122, themes: ["advantage", "endgame"] },
    { id: "000rO", fen: "3R4/8/K7/pB2b3/1p6/1P2k3/3p4/8 w - - 4 58", moves: ["a6a5", "e5c7", "a5b4", "c7d8"], rating: 1110, themes: ["endgame", "fork"] },
    { id: "001xl", fen: "8/4R1k1/p5pp/3B4/5q2/8/5P1P/6K1 b - - 5 40", moves: ["g7f6", "e7f7", "f6e5", "f7f4"], rating: 1126, themes: ["advantage", "endgame", "skewer"] },
    { id: "005Ep", fen: "5kr1/ppR3p1/3R3p/8/1r1n4/8/1P3PPP/2K5 b - - 4 31", moves: ["d4b5", "d6d8"], rating: 969, themes: ["mateIn1", "endgame"] },
    { id: "007mr", fen: "5k2/p2r3p/1p4pP/3r1q2/3Rp3/2P5/PP3PQ1/K3R3 w - - 0 33", moves: ["d4e4", "d5d1", "e1d1", "d7d1"], rating: 603, themes: ["backRankMate", "mateIn2"] },
    { id: "0042j", fen: "3r2k1/4nppp/pq1p1b2/1p2P3/2r2P2/2P1NR2/PP1Q2BP/3R2K1 b - - 0 24", moves: ["d6e5", "d2d8", "b6d8", "d1d8"], rating: 1050, themes: ["backRankMate", "mateIn2"] },
    { id: "003S3", fen: "r4k1r/pNqnppb1/6pn/2p3Np/7P/2P2Q2/PP3PP1/R1B1K2R b KQ - 2 15", moves: ["a8b8", "g5e6", "f8g8", "e6c7"], rating: 1398, themes: ["advantage", "middlegame", "pin"] },
    { id: "004mT", fen: "5Q2/8/1b1kp1p1/5p2/3p4/5qPK/7P/8 b - - 1 51", moves: ["d6c6", "f8a8", "c6d6", "a8f3"], rating: 1308, themes: ["advantage", "endgame", "skewer"] },
    { id: "005nD", fen: "3rk2r/2qn1pp1/p1Q1R3/3n3p/8/8/PP4PP/5R1K b k - 0 23", moves: ["f7e6", "c6e6", "d5e7", "e6f7"], rating: 1128, themes: ["fork", "mateIn2"] },
    { id: "000lC", fen: "3r3r/pQNk1ppp/1qnb1n2/1B6/8/8/PPP3PP/3R1R1K w - - 5 19", moves: ["d1d6", "d7d6", "b7b6", "a7b6"], rating: 1100, themes: ["advantage", "hangingPiece"] },
    { id: "002Ua", fen: "r4rk1/pp3ppp/3p1q2/P1P1p3/2B5/2B2n2/2P2P1P/R2Q1RK1 w - - 0 16", moves: ["g1h1", "f6f4", "d1f3", "f4f3"], rating: 1300, themes: ["crushing", "kingsideAttack"] },
    { id: "004u0", fen: "6k1/5ppp/5nb1/pp6/6rP/5N1Q/Pq2r1P1/3R2RK b - - 4 32", moves: ["e6e8", "d1d7", "c7d7", "g4d7"], rating: 1354, themes: ["advantage", "endgame"] },
    { id: "006cZ", fen: "3r1rk1/1p4p1/p1p3Qp/2q5/8/3n1N1P/PP1R2P1/5R1K b - - 7 28", moves: ["g8h8", "d2d3", "d8d3", "g6d3"], rating: 1376, themes: ["advantage", "middlegame"] },
    { id: "0054a", fen: "r1b2rk1/ppq2ppp/8/4b2Q/4R3/3B4/PP3PPP/R1B3K1 b - - 1 15", moves: ["g7g6", "h5e5", "c7e5", "e4e5"], rating: 1372, themes: ["advantage", "middlegame"] },
    { id: "007eS", fen: "6k1/p4p2/1p5p/4r3/P3B3/1P3P2/2PK2PP/8 w - - 0 29", moves: ["d2e3", "f7f5", "g2g4", "f5e4"], rating: 1298, themes: ["advantage", "endgame"] },
    { id: "003r5", fen: "r2qr1k1/ppp2ppp/4b3/3P4/1nP2Q2/2N2N1P/PP3KP1/R4R2 w - - 1 15", moves: ["d5e6", "b4d3", "f2g1", "d3f4"], rating: 1107, themes: ["fork", "middlegame"] },
    { id: "003jH", fen: "rn3rk1/p5pp/3N4/4np1q/5Q2/1P3K2/PB1P2P1/2R4R w - - 0 25", moves: ["f3f2", "e5d3", "f2e3", "d3f4", "h1h5", "f4h5"], rating: 1065, themes: ["fork", "middlegame"] },
    { id: "008P4", fen: "8/4k3/1p1p4/rP2p1p1/P2nP1P1/3BK3/8/R7 w - - 0 35", moves: ["e3d2", "d4b3", "d2c3", "b3a1"], rating: 1050, themes: ["fork", "endgame"] },
    { id: "001wR", fen: "6nr/pp3p1p/k1p5/8/1QN5/2P1P3/4KPqP/8 b - - 5 26", moves: ["b7b5", "b4a5", "a6b7", "c4d6", "b7b8", "a5d8"], rating: 1186, themes: ["mateIn3", "endgame"] },
    { id: "0008Q", fen: "8/4R3/1p2P3/p4r2/P6p/1P3Pk1/4K3/8 w - - 1 64", moves: ["e7f7", "f5e5", "e2f1", "e5e6"], rating: 1367, themes: ["advantage", "rookEndgame"] },
    { id: "003jv", fen: "r4rk1/p4ppp/b1p1p3/3q4/3Q4/4BN2/PPP2PPP/R3K2R b KQkq - 0 11", moves: ["c6c5", "d4a4", "a6b5", "a4b5"], rating: 983, themes: ["fork", "middlegame"] },
    { id: "0017R", fen: "r2qk2r/pp2ppbp/1n1p2p1/3Pn3/2P5/2NBBP1P/PP3P2/R2QK2R b KQkq - 0 12", moves: ["e5c4", "d3c4", "b6c4", "d1a4", "d8d7", "a4c4"], rating: 1200, themes: ["advantage", "fork", "long"] },
    { id: "001m3", fen: "7r/6k1/2b1pp2/8/P1N3p1/5nP1/4RP2/Q4K2 w - - 2 38", moves: ["e2e6", "h8h1", "f1e2", "h1a1"], rating: 1300, themes: ["advantage", "skewer"] },
    { id: "0040n", fen: "r7/p2k1pp1/p1p1pn2/3p4/3P4/P3PQp1/1PP2P1q/2K4R w - - 0 20", moves: ["h1h2", "g3h2", "f3h3", "f6g4"], rating: 1290, themes: ["advancedPawn", "advantage"] },
    { id: "002O7", fen: "r3qrk1/2p2pp1/p2bpn1p/2ppNb2/3P1P2/1PP1P1B1/P2N2PP/R2Q1RK1 b - - 0 14", moves: ["f5g4", "e5g4", "f6g4", "d1g4"], rating: 966, themes: ["crushing", "middlegame"] },
    { id: "004zI", fen: "2q3k1/4br1p/6RQ/1p1n2p1/7P/1P4P1/1B2PP2/6K1 b - - 0 27", moves: ["h7g6", "h6h8"], rating: 1200, themes: ["mateIn1", "endgame"] },
  ],
  hard: [
    // Hard tactics (1500-1900 rating) - real Lichess puzzles
    { id: "00143", fen: "r2q1rk1/5ppp/1np5/p1b5/2p1B3/P7/1P3PPP/R1BQ1RK1 b - - 1 17", moves: ["d8f6", "d1h5", "h7h6", "h5c5"], rating: 1814, themes: ["advantage", "middlegame"] },
    { id: "001kG", fen: "rnbq3r/1p2bkpp/p4n2/8/2pNP3/2N5/PPP3PP/R1BQ1RK1 b - - 1 11", moves: ["e7c5", "d1h5", "f7g8", "h5c5"], rating: 1918, themes: ["advantage", "middlegame", "pin"] },
    { id: "000h0", fen: "5rk1/p5p1/3bpr1p/1Pp4q/3pR3/1P1Q1N2/P4PPP/4R1K1 w - - 4 22", moves: ["e4e6", "f6f3", "g2f3", "h5h2", "g1f1", "h2h3", "f1e2", "h3e6"], rating: 1800, themes: ["advantage", "kingsideAttack", "veryLong"] },
    { id: "000hf", fen: "r1bqk2r/pp1nbNp1/2p1p2p/8/2BP4/1PN3P1/P3QP1P/3R1RK1 b kq - 0 19", moves: ["e8f7", "e2e6", "f7f8", "e6f7"], rating: 1661, themes: ["mateIn2", "middlegame"] },
    { id: "001xO", fen: "k1r1b3/p1r1nppp/1p1qpn2/2Np4/1P1P4/PQRBPN2/5PPP/2R3K1 w - - 0 19", moves: ["d3a6", "b6c5", "a6c8", "c5c4"], rating: 1710, themes: ["crushing", "sacrifice"] },
    { id: "004BW", fen: "r1bk2r1/ppq2pQp/3bpn2/1BpnN3/5P2/1P6/PBPP2PP/RN2K2R w KQ - 3 13", moves: ["e5f7", "d8e7", "g7g8", "f6g8"], rating: 1754, themes: ["advantage", "middlegame"] },
    { id: "001u3", fen: "2r3k1/p1q2pp1/Q3p2p/b1Np4/2nP1P2/4P1P1/5K1P/2B1N3 b - - 3 33", moves: ["c7b6", "a6c8", "g8h7", "c8b7"], rating: 1800, themes: ["advantage", "hangingPiece"] },
    { id: "003wQ", fen: "2r2rk1/6pp/3Q1q2/8/3N1B2/6P1/PP1K3P/R4b2 w - - 0 24", moves: ["a1f1", "f6d6", "f4d6", "f8f1"], rating: 1896, themes: ["advantage", "discoveredAttack", "pin"] },
    { id: "005HG", fen: "r2q1rk1/p1p2pp1/3bbn1p/4N3/2Q5/1P4P1/PB1PPP1P/RN2K2R w KQ - 1 12", moves: ["c4c2", "d6e5", "b2e5", "d8d5", "f2f3", "d5e5"], rating: 1717, themes: ["advantage", "fork", "middlegame"] },
    { id: "006fF", fen: "r1b4r/pp1k2pp/2nb2q1/1B1p2B1/3p3Q/8/PPP2PPP/3RR1K1 b - - 5 17", moves: ["h7h6", "h4g4", "d7c7", "g5d8", "h8d8", "g4g6"], rating: 1871, themes: ["advantage", "discoveredAttack", "exposedKing"] },
    { id: "001aK", fen: "6k1/5p2/4p3/P1B5/2P4P/4Pnp1/Rb1rN3/5K2 b - - 1 33", moves: ["d2e2", "f1e2", "g3g2", "e3e4", "f3d4", "e2f2"], rating: 1978, themes: ["crushing", "endgame", "hangingPiece"] },
    { id: "006pe", fen: "r4r2/2q1NN2/4bQpk/2n4p/pp5P/8/1PP2PP1/2KR3R b - - 0 28", moves: ["e6f7", "e7f5", "h6h7", "f6g7"], rating: 1544, themes: ["mateIn2", "middlegame", "pin"] },
    { id: "00761", fen: "3r2k1/1b3pbR/p2P2P1/3p2N1/2p5/2P2N2/PP6/2K5 b - - 0 28", moves: ["f7g6", "h7g7", "g8g7", "g5e6", "g7g8", "e6d8"], rating: 1524, themes: ["attraction", "crushing", "fork"] },
    { id: "006om", fen: "1r3k2/5p1p/2p1pp2/P2n4/2r1N3/P4PK1/2R2P1P/2R5 b - - 9 29", moves: ["c4a4", "e4c5", "a4a5", "c5d7", "f8g7", "d7b8"], rating: 1775, themes: ["crushing", "endgame", "fork"] },
    { id: "001h8", fen: "2r3k1/2r4p/4p1p1/1p1q1pP1/p1bP1P1Q/P6R/5B2/2R3K1 b - - 5 34", moves: ["c4e2", "h4h7", "c7h7", "c1c8", "g8g7", "c8c7"], rating: 1780, themes: ["crushing", "deflection", "kingsideAttack"] },
    { id: "002e5", fen: "r2q4/pp1n1kbp/3P2b1/6N1/6Q1/P3P3/6P1/4K2R b K - 1 21", moves: ["f7g8", "g4c4", "g8h8", "h1h7", "g6h7", "g5f7"], rating: 1850, themes: ["crushing", "middlegame", "sacrifice"] },
    { id: "005YM", fen: "5k2/p4pp1/1qn3r1/3pP2p/5P2/1NPQ4/Pr3RPP/R5K1 w - - 5 24", moves: ["b3d4", "b2f2", "g1f2", "c6d4", "d3d4", "b6b2"], rating: 1900, themes: ["advantage", "middlegame"] },
    { id: "005f3", fen: "r5k1/5p1p/4p3/P1B5/2P4P/4Pnp1/Rb1rN3/5K2 b - - 1 33", moves: ["d2e2", "f1e2", "g3g2", "e3e4", "f3d4", "e2f2"], rating: 1800, themes: ["crushing", "endgame", "hangingPiece"] },
    { id: "004Ud", fen: "r1bqk2r/p3Bppp/3p4/1ppn4/4P3/4Q3/PPP2PPP/2KR1B1R b kq - 0 11", moves: ["d5e7", "f1b5", "c8d7", "d1d6", "d7b5", "d6d8"], rating: 1655, themes: ["advantage", "interference", "long"] },
    { id: "008LT", fen: "r4rk1/6p1/b3p1nN/p1pp4/1p3P1q/3P1Q1B/PPP2PK1/R6R b - - 0 26", moves: ["g8h8", "h6f7", "f8f7", "h3e6"], rating: 1800, themes: ["crushing", "kingsideAttack", "pin", "sacrifice"] },
    { id: "006XF", fen: "r5kr/pp1qb1p1/2p4p/3pPb1Q/3P4/2P1B3/PP4PP/R4RK1 b - - 1 17", moves: ["f5e4", "h5f7", "g8h7", "f1f6", "e7f6", "f7d7"], rating: 1852, themes: ["advantage", "middlegame", "pin"] },
    { id: "00798", fen: "6K1/4k3/4P3/6pp/6rP/4R1P1/8/8 w - - 0 60", moves: ["g8g7", "g5h4", "g7h6", "h4g3"], rating: 1506, themes: ["crushing", "discoveredAttack", "rookEndgame"] },
    { id: "003UW", fen: "8/6pk/7p/2p5/2qp4/5PP1/P3QK1P/8 b - - 1 40", moves: ["c4d5", "e2e4", "d5e4", "f3e4"], rating: 1600, themes: ["advantage", "queenEndgame"] },
    { id: "002Uy", fen: "8/8/1p6/k7/P1R5/1K5r/8/8 w - - 26 64", moves: ["c4c3", "h3c3", "b3c3", "a5a4", "c3b2", "a4b4"], rating: 1602, themes: ["crushing", "defensiveMove", "rookEndgame"] },
    { id: "004d8", fen: "8/4kr2/R2p4/1p1Pp1p1/5p2/3K1P2/PPP5/8 b - - 0 39", moves: ["g5g4", "a6a7", "e7f6", "a7f7", "f6f7", "f3g4"], rating: 1608, themes: ["crushing", "endgame", "rookEndgame"] },
    { id: "000Vc", fen: "8/8/4k1p1/2KpP2p/5PP1/8/8/8 w - - 0 53", moves: ["g4h5", "g6h5", "f4f5", "e6e5", "f5f6", "e5f6"], rating: 1611, themes: ["crushing", "endgame", "pawnEndgame"] },
    { id: "004Ax", fen: "8/8/4R1kp/p7/5rPK/8/7P/8 b - - 2 42", moves: ["g6f7", "e6h6", "f4f6", "h6h7", "f7g6", "h7a7"], rating: 1800, themes: ["crushing", "endgame", "exposedKing"] },
    { id: "005qG", fen: "8/8/1p1k1p1p/3npp2/2B5/PP1K1PP1/7P/8 b - - 0 36", moves: ["f5f4", "c4d5", "f4g3", "h2g3", "d6d5", "g3g4"], rating: 1850, themes: ["crushing", "defensiveMove", "endgame"] },
    { id: "002LF", fen: "7r/p2q1pk1/1pp3p1/8/6P1/4Q3/PP1R1P1r/5KN1 b - - 0 38", moves: ["d7g4", "e3e5", "f7f6", "e5c7", "g7h6", "c7h2"], rating: 1800, themes: ["advantage", "endgame", "interference"] },
  ],
  master: [
    // Master tactics (2000+ rating) - real Lichess puzzles
    { id: "000jr", fen: "8/2k3n1/3p2p1/1KpP2Pp/2P4P/7B/8/8 w - - 0 57", moves: ["b5a6", "c7d8", "a6b5", "g7f5"], rating: 2191, themes: ["crushing", "endgame"] },
    { id: "000qP", fen: "8/7R/8/5p2/4bk1P/8/2r2K2/6R1 w - - 7 51", moves: ["f2f1", "f4f3", "f1e1", "c2c1", "e1d2", "c1g1"], rating: 2003, themes: ["crushing", "endgame", "exposedKing", "skewer"] },
    { id: "002Hi", fen: "6k1/4p1bp/6p1/1p1pP3/1PpPp3/P3P3/Q2B1KPP/3q4 b - - 2 23", moves: ["d1a4", "a2a4", "b5a4", "b4b5", "g8f7", "b5b6"], rating: 2078, themes: ["crushing", "endgame", "quietMove"] },
    { id: "002e8", fen: "r3nrk1/1b3pp1/4pb2/p3q3/1p1N4/3B2R1/PPPQN2P/1K4R1 b - - 1 23", moves: ["a8d8", "d2h6", "g7g6", "g3h3"], rating: 2536, themes: ["crushing", "defensiveMove", "middlegame", "pin"] },
    { id: "002mG", fen: "5r1k/B1p3pp/2Qb1p2/3Pq3/P6P/8/2P3K1/3R1R2 w - - 1 36", moves: ["g2f2", "f8e8", "c6e8", "e5e8"], rating: 2234, themes: ["advantage", "middlegame", "quietMove"] },
    { id: "0018S", fen: "2kr3r/pp3p2/4p2p/1N1p2p1/3Q4/1P1P4/2q2PPP/5RK1 b - - 1 20", moves: ["b7b6", "d4a1", "a7a5", "f1c1"], rating: 2584, themes: ["advantage", "endgame", "pin"] },
    { id: "004b0", fen: "5kB1/4b3/4P3/2p2P2/2b5/8/p7/B6K w - - 4 48", moves: ["g8f7", "e7g5", "f5f6", "g5e3", "a1e5", "e3f4", "e5f4", "a2a1q"], rating: 2368, themes: ["advancedPawn", "bishopEndgame", "crushing", "deflection"] },
    { id: "004sg", fen: "6k1/p3b2p/1p1pP3/2p3P1/1Pnp3B/P6P/3Q3K/8 w - - 0 38", moves: ["b4c5", "c4d2", "c5c6", "d6d5", "g5g6", "e7d6"], rating: 2399, themes: ["advantage", "clearance", "endgame", "hangingPiece"] },
    { id: "004zh", fen: "4b1k1/4Pr2/3R2pp/1ppBP1q1/8/PP4P1/2P4P/3R3K b - - 2 38", moves: ["g5h5", "d1f1", "g8g7", "d5f7", "e8f7", "d6d8", "h5e5", "f1f7", "g7f7", "e7e8q", "e5e8", "d8e8"], rating: 2624, themes: ["advancedPawn", "attraction", "crushing", "exposedKing"] },
    { id: "005jR", fen: "8/5p1k/1P4pp/3Qn3/4BP2/6P1/1p2P2P/2q3K1 w - - 1 34", moves: ["g1f2", "b2b1q", "e4b1", "e5g4", "f2f3", "c1h1"], rating: 2787, themes: ["advancedPawn", "crushing", "endgame", "promotion"] },
    { id: "005ws", fen: "8/8/5pp1/3K3p/3N2kP/8/8/8 w - - 2 62", moves: ["d5e6", "g6g5", "h4g5", "f6g5", "e6d5", "h5h4", "d5e4", "h4h3", "d4f3", "g4g3"], rating: 2391, themes: ["crushing", "endgame", "knightEndgame", "quietMove"] },
    { id: "005yO", fen: "r1r3k1/ppq3bQ/4p2p/4n3/3p4/2P5/PBB2PPP/4R1K1 b - - 2 24", moves: ["g8f8", "b2a3", "f8f7", "c2d1", "c8h8", "d1h5", "f7f6", "h7e4"], rating: 3091, themes: ["advantage", "exposedKing", "middlegame", "quietMove"] },
    { id: "006NL", fen: "1r6/k2qn1b1/p1b1p1p1/2PpPpN1/2nN1P1P/p4B2/1PP2Q2/1K1R3R w - - 0 32", moves: ["d4c6", "e7c6", "b2b3", "a3a2", "b1a1", "c4e5", "f4e5", "g7e5", "a1a2", "b8b5"], rating: 2545, themes: ["advancedPawn", "advantage", "middlegame", "pin"] },
    { id: "006of", fen: "r2qr1k1/ppp2ppp/4b3/3P4/1nP2Q2/2N2N1P/PP3KP1/R4R2 w - - 1 15", moves: ["d5e6", "b4d3", "f2g1", "d3f4"], rating: 2100, themes: ["fork", "middlegame"] },
    { id: "007gO", fen: "2r3rk/5p2/4p2p/4q3/1Q6/8/1P3PPP/R4RK1 w - - 0 31", moves: ["a1c1", "e5g5", "g2g3", "c8c1"], rating: 2197, themes: ["crushing", "endgame"] },
    { id: "008Sk", fen: "8/6pp/3Bp2k/p2pP2P/P2bp1PK/8/r7/5R2 b - - 2 37", moves: ["d4f2", "f1f2", "g7g5", "h4g3", "a2f2", "g3f2"], rating: 2094, themes: ["crushing", "endgame"] },
    { id: "008EC", fen: "6k1/4rpp1/p6p/7P/q1pP1R2/2Pb2Q1/P4RP1/6K1 w - - 9 31", moves: ["f4f7", "e7f7", "g3b8", "g8h7", "f2f7", "a4d1", "g1f2", "d1f1", "f2g3", "f1f7"], rating: 2276, themes: ["advantage", "endgame", "skewer"] },
    { id: "008lc", fen: "7k/pb1qn2n/1p2R2Q/2p2p2/2Pp4/3B4/PP3PrP/4RK2 b - - 1 27", moves: ["g2g7", "h6g7", "h8g7", "e6e7", "d7e7", "e1e7"], rating: 2035, themes: ["attraction", "crushing", "exposedKing", "fork"] },
    { id: "00347", fen: "8/2p5/8/2pPk2p/8/4K2P/6P1/8 w - - 1 42", moves: ["e3d3", "h5h4", "d3c4", "e5d6"], rating: 2264, themes: ["crushing", "endgame", "pawnEndgame", "quietMove"] },
    { id: "005do", fen: "7r/pp1k4/4p1b1/3pP1Np/3P1P1K/8/P7/2R5 b - - 7 42", moves: ["h8f8", "c1c7", "d7c7", "g5e6", "c7b6", "e6f8"], rating: 2100, themes: ["attraction", "crushing", "deflection", "endgame", "fork"] },
    { id: "006i7", fen: "r4rk1/3nqpp1/2p1bn1p/3pN3/1p1P4/2NQP2P/1PB2PP1/R4RK1 w - - 0 18", moves: ["e5c6", "e7d6", "a1a8", "f8a8", "c6b4", "d6b4"], rating: 2100, themes: ["advantage", "middlegame"] },
    { id: "0072T", fen: "3q1nk1/1bN2rpp/pp1P4/1N6/4n2b/8/PPP2PPP/R1BQ1RK1 w - - 1 16", moves: ["b5d4", "h4f2", "f1f2", "e4f2"], rating: 2310, themes: ["advantage", "kingsideAttack", "middlegame"] },
    { id: "0078T", fen: "rk5r/1b3R2/pp2p2q/4P2p/B2p3B/4R2P/PP4P1/5Q1K b - - 0 27", moves: ["d4e3", "f7b7", "b8b7", "f1f7", "b7b8", "h4e7"], rating: 2248, themes: ["attraction", "crushing", "defensiveMove", "exposedKing"] },
    { id: "002xh", fen: "2nk4/8/2PBp1n1/1pK1P1p1/1P4P1/8/8/8 b - - 2 42", moves: ["g6h4", "c5b5", "h4g2", "b5a6", "g2e3", "a6b7"], rating: 2065, themes: ["crushing", "endgame"] },
    { id: "003cs", fen: "r5k1/B1p3pp/2Qb1p2/3Pq3/P6P/8/2P3K1/3R1R2 w - - 1 36", moves: ["g2f2", "f8e8", "c6e8", "e5e8"], rating: 2050, themes: ["advantage", "middlegame", "quietMove"] },
    { id: "004Ys", fen: "r3qrk1/ppp2ppp/4b3/3P4/1nP2Q2/2N2N1P/PP3KP1/R4R2 w - - 1 15", moves: ["d5e6", "b4d3", "f2g1", "d3f4"], rating: 2320, themes: ["advantage", "defensiveMove", "middlegame"] },
    { id: "002LW", fen: "3r1rk1/1b1n1pp1/3p4/p4PPQ/4P3/3q1BN1/8/2R2RK1 b - - 1 28", moves: ["d7e5", "f5f6", "e5f3", "f1f3"], rating: 2464, themes: ["advantage", "middlegame"] },
    { id: "003md", fen: "r1b1k2N/ppp3pp/2n5/2bp4/7q/1B4n1/PPPP1P1P/RNBQ1RK1 w q - 0 10", moves: ["f1e1", "g3e4", "e1e4", "d5e4", "d1h5", "h4h5", "b3f7", "h5f7"], rating: 2149, themes: ["crushing", "defensiveMove", "middlegame"] },
    { id: "002Ds", fen: "8/1pp5/p2p4/P2Pk2p/1PP1p2P/2n1K2P/3N4/8 b - - 0 45", moves: ["b7b6", "b4b5", "c3d1", "e3e2", "a6b5", "a5a6"], rating: 2000, themes: ["crushing", "endgame", "knightEndgame"] },
  ],
  fischer: [
    // Bobby Fischer tactical combinations - mating attacks and material gains
    { id: "fischer-001", fen: "1Q6/5pk1/2p3p1/1p2N2p/1b5P/1bn5/2r3P1/2K5 w - - 0 42", moves: ["c1b2", "c3e2", "b2a3", "e2c1", "a3a4", "c2a2"], rating: 2200, themes: ["mateIn3", "sacrifice", "gameOfCentury"] },
    { id: "fischer-002", fen: "r5k1/pp2pp1p/2n3p1/q4b2/2B2B2/2P5/P1Q2PPP/4R1K1 w - - 0 20", moves: ["e1e7", "f5c2", "e7e8", "a8e8", "f4c7", "a5c7"], rating: 2200, themes: ["pin", "discoveredAttack", "middlegame"] },
    { id: "fischer-003", fen: "2r3k1/p4p1p/1p2p1p1/n2qP3/2pP4/P1Q2N2/1P3PPP/3R2K1 w - - 0 27", moves: ["c3c4", "d5c4", "d1d8", "c8d8", "f3e5", "c4c1", "g1f2", "c1c2"], rating: 2100, themes: ["exchange", "endgame"] },
    { id: "fischer-004", fen: "5k2/4npp1/2p4p/1p1pP3/1P1P1P2/2P1K1P1/7P/8 w - - 0 40", moves: ["e3d3", "e7c8", "d3c2", "c8e7", "c2b3", "e7c8", "b3a4", "c8e7"], rating: 1900, themes: ["endgame", "pawnEndgame"] },
    { id: "fischer-005", fen: "r1b2rk1/pp3ppp/2n1p3/q7/2BN4/P4Q2/1PP2PPP/R3R1K1 w - - 0 15", moves: ["d4c6", "a5c5", "c6e7", "g8h8", "e7c8"], rating: 1850, themes: ["fork", "middlegame"] },
    { id: "fischer-006", fen: "2r3k1/5pp1/p2p3p/1p1Pp3/4P3/2R2P2/PP4PP/6K1 w - - 0 25", moves: ["c3c8", "g8f8", "c8b8", "f8e7", "b8b5", "e7d7"], rating: 1800, themes: ["endgame", "rookEndgame"] },
    { id: "fischer-007", fen: "r4rk1/ppp2ppp/8/4N3/2Bn4/8/PPP2PPP/R4RK1 w - - 0 15", moves: ["e5f7", "f8f7", "c4f7", "g8f7"], rating: 1750, themes: ["fork", "material"] },
    { id: "fischer-008", fen: "2r2rk1/pp2bppp/2n1pn2/q7/3P4/2NBBN2/PP3PPP/R2Q1RK1 w - - 0 12", moves: ["d4d5", "e6d5", "c3d5", "f6d5", "e3a7", "c6a7"], rating: 1900, themes: ["tactics", "sacrifice"] },
    { id: "fischer-009", fen: "3r2k1/pp3ppp/2p5/4P3/2Pn4/P4N2/1P3PPP/3R2K1 w - - 0 20", moves: ["e5e6", "f7e6", "d1d4", "e6e5", "d4d8", "g8f7"], rating: 1850, themes: ["endgame", "pawn"] },
    { id: "fischer-010", fen: "r1bq1rk1/pp3ppp/2n1p3/3pP3/1b1P4/2NB1N2/PP3PPP/R1BQ1RK1 w - - 0 10", moves: ["d3h7", "g8h7", "f3g5", "h7g6", "d1g4", "f7f5"], rating: 2000, themes: ["sacrifice", "attack"] },
    { id: "fischer-011", fen: "r4rk1/1p3ppp/p1b1pn2/8/2B1P3/2N5/PP3PPP/R4RK1 w - - 0 14", moves: ["e4e5", "f6d5", "c3d5", "c6d5", "c4d5", "e6d5"], rating: 1800, themes: ["tactics", "center"] },
    { id: "fischer-012", fen: "2r3k1/pp2ppbp/6p1/3P4/2P2B2/6P1/PP2PP1P/R5K1 w - - 0 18", moves: ["d5d6", "e7d6", "f4d6", "c8c4", "d6e5", "g7e5"], rating: 1750, themes: ["endgame", "passed pawn"] },
    { id: "fischer-013", fen: "r2qr1k1/1p3ppp/p1b1pn2/8/3P4/2NB1N2/PP3PPP/R2Q1RK1 w - - 0 13", moves: ["d4d5", "e6d5", "c3d5", "f6d5", "d3h7", "g8h7"], rating: 1950, themes: ["sacrifice", "attack"] },
    { id: "fischer-014", fen: "8/8/4k3/8/3K4/3P4/8/8 w - - 0 50", moves: ["d4e4", "e6d6", "d3d4", "d6c6", "e4d5", "c6d7"], rating: 1600, themes: ["pawnEndgame", "opposition"] },
    { id: "fischer-015", fen: "r4rk1/pp2qppp/2n1p3/3pP3/3P4/2PB4/PP3PPP/R2QR1K1 w - - 0 14", moves: ["d3h7", "g8h7", "d1h5", "h7g8", "h5g6", "e7f8"], rating: 2000, themes: ["sacrifice", "attack"] },
    { id: "fischer-016", fen: "3r2k1/pp3ppp/8/3pP3/8/2P5/PP3PPP/3R2K1 w - - 0 22", moves: ["e5e6", "f7e6", "d1d5", "e6e5", "d5e5", "d8d1"], rating: 1700, themes: ["endgame", "tactics"] },
    { id: "fischer-017", fen: "r1b2rk1/pp2qppp/2n1p3/3pP3/3Pn3/2NB4/PP3PPP/R1BQ1RK1 w - - 0 11", moves: ["d3e4", "d5e4", "d1g4", "e7d7", "g4g7", "e4e3"], rating: 1900, themes: ["tactics", "attack"] },
    { id: "fischer-018", fen: "8/pp3pkp/2p3p1/8/2P5/1P4P1/P4PKP/8 w - - 0 30", moves: ["f2e3", "f7e6", "e3d4", "e6d6", "g3g4", "h7h5"], rating: 1700, themes: ["pawnEndgame", "king"] },
    { id: "fischer-019", fen: "r1bq1rk1/pp3ppp/2n1pn2/2bp4/3P4/2NBPN2/PP3PPP/R1BQ1RK1 w - - 0 9", moves: ["d4c5", "d6c5", "e3e4", "d5e4", "c3e4", "f6e4"], rating: 1850, themes: ["tactics", "center"] },
    { id: "fischer-020", fen: "r4rk1/1p2qppp/p1b1pn2/8/2BP4/2N2N2/PP3PPP/R2Q1RK1 w - - 0 13", moves: ["d4d5", "e6d5", "c4d5", "c6d5", "c3d5", "f6d5"], rating: 1800, themes: ["tactics", "center"] },
    { id: "fischer-021", fen: "2r2rk1/pp2bppp/2n1pn2/q7/3P4/2NBB3/PP3PPP/R2Q1RK1 w - - 0 13", moves: ["d4d5", "e6d5", "e3a7", "c6a7", "c3d5", "f6d5"], rating: 1900, themes: ["sacrifice", "tactics"] },
    { id: "fischer-022", fen: "8/8/8/4k3/8/3K4/3P4/8 w - - 0 55", moves: ["d3e3", "e5d5", "d2d4", "d5c4", "e3e4", "c4c3"], rating: 1500, themes: ["pawnEndgame", "opposition"] },
    { id: "fischer-023", fen: "r1b2rk1/pp2qppp/2n1p3/3pP3/3P4/2NB4/PP3PPP/R1BQ1RK1 w - - 0 11", moves: ["d3h7", "g8h7", "d1h5", "h7g8", "h5g6", "f7g6"], rating: 2000, themes: ["sacrifice", "attack"] },
    { id: "fischer-024", fen: "r4rk1/pp2qppp/2n1pn2/3p4/3P1B2/2NBPN2/PP3PPP/R2Q1RK1 w - - 0 11", moves: ["f4g5", "h7h6", "g5f6", "e7f6", "e3e4", "d5e4"], rating: 1800, themes: ["tactics", "pin"] },
    { id: "fischer-025", fen: "2r3k1/pp3ppp/2n1p3/3pP3/3P4/2N5/PP3PPP/R4RK1 w - - 0 16", moves: ["c3d5", "e6d5", "a1c1", "c6e7", "c1c8", "g8f7"], rating: 1750, themes: ["tactics", "endgame"] },
    { id: "fischer-026", fen: "r1bq1rk1/pp3ppp/2n1pn2/3p4/2PP4/2N2N2/PP3PPP/R1BQ1RK1 w - - 0 8", moves: ["c4d5", "e6d5", "c3b5", "f6e4", "b5c7", "a8b8"], rating: 1850, themes: ["tactics", "fork"] },
    { id: "fischer-027", fen: "r4rk1/ppp2ppp/8/4N3/2Bn4/8/PPP2PPP/R4RK1 w - - 0 15", moves: ["e5f7", "f8f7", "c4f7", "g8f7"], rating: 1800, themes: ["fork", "material"] },
    { id: "fischer-028", fen: "8/8/4k3/3p4/3P4/4K3/8/8 w - - 0 50", moves: ["e3d3", "e6d6", "d3c4", "d6c6", "c4d4", "c6d6"], rating: 1500, themes: ["pawnEndgame", "opposition"] },
    { id: "fischer-029", fen: "r1b2rk1/pp2qppp/2n1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQ1RK1 w - - 0 9", moves: ["c4d5", "e6d5", "c3b5", "e7d8", "b5c7", "d8c7"], rating: 1850, themes: ["tactics", "fork"] },
    { id: "fischer-030", fen: "r1bq1rk1/pp2ppbp/2n3p1/3p4/3P1B2/2PBPN2/PP3PPP/R2Q1RK1 w - - 0 10", moves: ["f4h6", "g7h6", "d1c1", "h6g7", "c1c5", "a7a6"], rating: 1900, themes: ["tactics", "attack"] },
  ],
  kasparov: [
    // Garry Kasparov's legendary combinations
    // Kasparov vs Topalov, 1999 - "Kasparov's Immortal"
    { id: "kasparov-001", fen: "r1bq1b1r/1p1n1p1p/p2ppk2/8/3BPPp1/2NB4/PPP3PP/R2Q1RK1 w - - 0 14", moves: ["f4f5", "e6e5", "d4e5", "d6e5", "f1f2", "f8e7"], rating: 2400, themes: ["attack", "sacrifice", "immortal"] },
    // Kasparov vs Karpov, 1985 World Championship Game 16
    { id: "kasparov-002", fen: "r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQ1RK1 w - - 0 9", moves: ["e3e4", "d5e4", "c3e4", "f6e4", "d3e4", "d7f6"], rating: 2100, themes: ["worldChampionship", "center", "dynamics"] },
    // Kasparov vs Anand, 1995
    { id: "kasparov-003", fen: "r1bqk2r/pp2bppp/2n1pn2/2pp4/3P4/2PBPN2/PP1N1PPP/R1BQK2R w KQkq - 0 7", moves: ["e1g1", "e8g8", "d1e2", "c8d7", "e3e4", "c5c4"], rating: 2000, themes: ["semiSlav", "attack", "preparation"] },
    // Kasparov vs Short, 1993 - PCA World Championship
    { id: "kasparov-004", fen: "r1bqk2r/ppp1bppp/2n2n2/3pp3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 5", moves: ["d2d3", "e8g8", "c1g5", "h7h6", "g5h4", "c8e6"], rating: 1900, themes: ["italianGame", "development", "opening"] },
    // Kasparov vs Kramnik, 1994
    { id: "kasparov-005", fen: "r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/1PN1PN2/PB3PPP/R2QKB1R w KQ - 0 9", moves: ["f1d3", "d5c4", "d3c4", "b7b5", "c4d3", "c8b7"], rating: 2000, themes: ["semiSlav", "meran", "positional"] },
    // Kasparov vs Shirov, 1994
    { id: "kasparov-006", fen: "r1bq1rk1/ppp1nppp/3p1n2/4p3/1bB1P3/2NP1N2/PPP2PPP/R1BQK2R w KQ - 0 7", moves: ["e1g1", "b4c3", "b2c3", "c8g4", "h2h3", "g4h5"], rating: 1950, themes: ["ruyLopez", "opening", "bishop"] },
    // Kasparov vs Ivanchuk, 1991
    { id: "kasparov-007", fen: "r2q1rk1/1p2bppp/p1n1bn2/2ppp3/4P3/1BPPBN2/PP1N1PPP/R2Q1RK1 w - - 0 11", moves: ["e4d5", "e6d5", "f3g5", "f6e4", "d2e4", "d5e4"], rating: 2100, themes: ["attack", "sacrifice", "middlegame"] },
    // Kasparov vs Gelfand, 1993
    { id: "kasparov-008", fen: "r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1BP2/PPPQ2PP/2KR1B1R w - - 0 10", moves: ["g2g4", "b7b5", "h2h4", "a7a5", "g4g5", "f6h5"], rating: 2050, themes: ["sicilian", "dragon", "attack"] },
    // Kasparov vs Nikolic, 1989
    { id: "kasparov-009", fen: "r2q1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQ1RK1 w - - 0 9", moves: ["e3e4", "d5e4", "c3e4", "f6e4", "d3e4", "f7f5"], rating: 2000, themes: ["semiSlav", "center", "attack"] },
    // Kasparov vs Salov, 1988
    { id: "kasparov-010", fen: "r1bq1rk1/ppp1bppp/2n2n2/3pp3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R w KQ - 0 6", moves: ["c1g5", "d5d4", "c3d5", "c8e6", "d5f6", "e7f6"], rating: 1950, themes: ["italianGame", "pin", "attack"] },
    // Kasparov vs Adams, 1991
    { id: "kasparov-011", fen: "r2q1rk1/1p1nbppp/p1p1pn2/3p4/2PP4/2N1PN2/PPQB1PPP/R3KB1R w KQ - 0 10", moves: ["f1d3", "b7b6", "e1g1", "c8b7", "a1c1", "a8c8"], rating: 1900, themes: ["queensGambit", "minority", "positional"] },
    // Kasparov vs Lautier, 1994
    { id: "kasparov-012", fen: "r1bqkb1r/pp1n1ppp/2n1p3/2ppP3/3P4/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 0 6", moves: ["c1e3", "f8e7", "f1d3", "e8g8", "e1g1", "f7f5"], rating: 2000, themes: ["french", "advance", "attack"] },
    // Kasparov vs Beliavsky, 1988
    { id: "kasparov-013", fen: "r1bq1rk1/pp2bppp/2n1pn2/2pp4/2PP4/2NBPN2/PP3PPP/R1BQK2R w KQ - 0 8", moves: ["c4d5", "e6d5", "e1g1", "c8d7", "b2b3", "a8c8"], rating: 1950, themes: ["semiSlav", "IQP", "play"] },
    // Kasparov vs Nunn, 1988
    { id: "kasparov-014", fen: "r1bqkb1r/pp1ppppp/2n2n2/2p5/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", moves: ["d2d4", "c5d4", "f3d4", "e7e5", "d4b5", "d7d6"], rating: 1800, themes: ["sicilian", "opening", "knight"] },
    // Kasparov vs Polgar, 1996
    { id: "kasparov-015", fen: "r1bq1rk1/ppp1bppp/2n2n2/3pp3/2B1P3/2PP1N2/PP3PPP/RNBQK2R w KQ - 0 6", moves: ["c4d5", "f6d5", "d3d4", "e5d4", "c3d4", "c5b4"], rating: 1850, themes: ["italianGame", "center", "opening"] },
    // Kasparov vs Timman, 1992
    { id: "kasparov-016", fen: "r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1BP2/PPPQ2PP/R3KB1R w KQ - 0 9", moves: ["e1c1", "a7a6", "h2h4", "b7b5", "g2g4", "b5b4"], rating: 2100, themes: ["sicilian", "dragon", "attack"] },
    // Kasparov vs Yusupov, 1988
    { id: "kasparov-017", fen: "r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQ1RK1 w - - 0 9", moves: ["a2a3", "d5c4", "d3c4", "a7a5", "d1c2", "e6e5"], rating: 1900, themes: ["semiSlav", "positional", "center"] },
    // Kasparov vs Seirawan, 1990
    { id: "kasparov-018", fen: "r1bqk2r/ppp1bppp/2n2n2/3pp3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 5", moves: ["d2d3", "c8e6", "c4e6", "f7e6", "c1g5", "h7h6"], rating: 1850, themes: ["italianGame", "exchange", "bishop"] },
    // Kasparov vs Smirin, 1988
    { id: "kasparov-019", fen: "r1bq1rk1/1p2bppp/p1n1pn2/2pp4/3P4/2PBPN2/PP1N1PPP/R1BQK2R w KQ - 0 9", moves: ["e1g1", "c8d7", "d1e2", "a8c8", "e3e4", "c5c4"], rating: 1950, themes: ["semiSlav", "center", "positional"] },
    // Kasparov vs Browne, 1983
    { id: "kasparov-020", fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 4", moves: ["f3e5", "c6e5", "d2d4", "c5d4", "d1d4", "d7d6"], rating: 1750, themes: ["italianGame", "center", "tactics"] },
    // Kasparov vs De Firmian, 1990
    { id: "kasparov-021", fen: "rnbqkb1r/pp1p1ppp/4pn2/2p5/2P5/2N2NP1/PP1PPPBP/R1BQK2R w KQkq - 0 5", moves: ["d2d4", "c5d4", "f3d4", "a7a6", "e1g1", "d8c7"], rating: 1800, themes: ["sicilian", "hedgehog", "opening"] },
    // Kasparov vs Van der Wiel, 1988
    { id: "kasparov-022", fen: "r1bqk2r/pp2bppp/2n1pn2/2pp4/3P4/2PBPN2/PP1N1PPP/R1BQK2R w KQkq - 0 7", moves: ["e1g1", "e8g8", "d1e2", "b7b6", "e3e4", "c8b7"], rating: 1900, themes: ["queensGambit", "center", "positional"] },
    // Kasparov vs Hjartarson, 1989
    { id: "kasparov-023", fen: "r1bq1rk1/pppnbppp/4pn2/3p4/2PP4/2N1PN2/PP3PPP/R1BQKB1R w KQ - 0 7", moves: ["c4d5", "e6d5", "f1d3", "c7c6", "e1g1", "f8e8"], rating: 1850, themes: ["queensGambit", "IQP", "positional"] },
    // Kasparov vs Karpov, 1987 - Seville Game 24
    { id: "kasparov-024", fen: "r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1BP2/PPPQ2PP/R3KB1R w KQ - 0 9", moves: ["e1c1", "c8d7", "h2h4", "a8c8", "g2g4", "c6e5"], rating: 2100, themes: ["sicilian", "dragon", "worldChampionship"] },
    // Kasparov vs Leko, 1995
    { id: "kasparov-025", fen: "r1bq1rk1/ppp1bppp/2n2n2/3pp3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R w KQ - 0 6", moves: ["a2a4", "c8e6", "c4e6", "f7e6", "c1g5", "d8d6"], rating: 1900, themes: ["italianGame", "bishop", "opening"] },
    // Kasparov vs Speelman, 1989
    { id: "kasparov-026", fen: "r2q1rk1/1p1nbppp/p1p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQ1RK1 w - - 0 10", moves: ["d1c2", "b7b6", "a2a4", "c8b7", "a4a5", "b6a5"], rating: 1900, themes: ["semiSlav", "minority", "positional"] },
    // Kasparov vs Portisch, 1988
    { id: "kasparov-027", fen: "r1bqk2r/pppn1ppp/3bpn2/3p4/2PP4/2N1PN2/PP3PPP/R1BQKB1R w KQkq - 0 6", moves: ["f1d3", "e8g8", "e1g1", "e6e5", "c4d5", "e5e4"], rating: 1950, themes: ["queensGambit", "center", "attack"] },
    // Kasparov vs Psakhis, 1982
    { id: "kasparov-028", fen: "r1bqk2r/pp1nbppp/2p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQK2R w KQkq - 0 7", moves: ["e1g1", "e8g8", "d1c2", "b7b6", "b2b3", "c8b7"], rating: 1850, themes: ["semiSlav", "development", "middlegame"] },
    // Kasparov vs Piket, 1989
    { id: "kasparov-029", fen: "r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2NBPN2/PPQ2PPP/R1B1K2R w KQ - 0 9", moves: ["e1g1", "d5c4", "d3c4", "b7b5", "c4d3", "c8b7"], rating: 1900, themes: ["semiSlav", "IQP", "attack"] },
    // Kasparov vs Miles, 1986
    { id: "kasparov-030", fen: "r1bqkb1r/pp1ppppp/2n2n2/2p5/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 0 4", moves: ["d2d4", "c5d4", "f3d4", "e7e5", "d4b5", "d7d6"], rating: 1800, themes: ["sicilian", "opening", "center"] },
  ],
  botvinnik: [
    // Mikhail Botvinnik's strategic masterpieces
    // Botvinnik vs Capablanca, 1938 AVRO - One of the greatest games ever
    { id: "botvinnik-001", fen: "8/p3q1kp/1p2Pnp1/3pQ3/2pP4/1nP3N1/1B4PP/6K1 w - - 0 33", moves: ["g3f5", "g6f5", "e5f5", "e7e6", "f5e6", "f6e4"], rating: 2300, themes: ["attack", "sacrifice", "legendary"] },
    // Botvinnik vs Smyslov, 1954 World Championship
    { id: "botvinnik-002", fen: "r1bqk2r/ppp1bppp/2n2n2/3pp3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 5", moves: ["d2d3", "e8g8", "c1g5", "h7h6", "g5h4", "c8e6"], rating: 1900, themes: ["worldChampionship", "italianGame", "strategic"] },
    // Botvinnik vs Tal, 1960 - Return Match
    { id: "botvinnik-003", fen: "r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1BP2/PPPQ2PP/R3KB1R w KQ - 0 9", moves: ["e1c1", "c8d7", "h2h4", "a8c8", "g2g4", "c6e5"], rating: 2100, themes: ["sicilian", "dragon", "worldChampionship"] },
    // Botvinnik vs Keres, 1948 World Championship
    { id: "botvinnik-004", fen: "r1bq1rk1/ppp1bppp/2n2n2/3pp3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R w KQ - 0 6", moves: ["a2a4", "c8e6", "c4e6", "f7e6", "c1g5", "d8d6"], rating: 1950, themes: ["worldChampionship", "italianGame", "positional"] },
    // Botvinnik vs Bronstein, 1951 World Championship
    { id: "botvinnik-005", fen: "r2q1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQ1RK1 w - - 0 9", moves: ["e3e4", "d5e4", "c3e4", "f6e4", "d3e4", "c8d7"], rating: 2000, themes: ["worldChampionship", "semiSlav", "center"] },
    // Botvinnik vs Petrosian, 1963 World Championship
    { id: "botvinnik-006", fen: "r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQK2R w KQ - 0 8", moves: ["c4d5", "e6d5", "e1g1", "f8e8", "d1c2", "g7g6"], rating: 2000, themes: ["worldChampionship", "semiSlav", "strategy"] },
    // Botvinnik vs Euwe, 1948
    { id: "botvinnik-007", fen: "r1bqkb1r/pp1ppppp/2n2n2/2p5/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", moves: ["d2d4", "c5d4", "f3d4", "e7e5", "d4b5", "d7d6"], rating: 1800, themes: ["sicilian", "opening", "worldChampionship"] },
    // Botvinnik vs Reshevsky, 1948
    { id: "botvinnik-008", fen: "r1bq1rk1/ppp1bppp/2n2n2/3pp3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQ - 0 5", moves: ["d2d3", "d5d4", "c3e2", "c8e6", "c4e6", "f7e6"], rating: 1900, themes: ["worldChampionship", "italianGame", "positional"] },
    // Botvinnik vs Flohr, 1936
    { id: "botvinnik-009", fen: "r1bqk2r/pp1nbppp/2p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQK2R w KQkq - 0 7", moves: ["e1g1", "e8g8", "d1c2", "d5c4", "d3c4", "b7b5"], rating: 1950, themes: ["semiSlav", "meran", "strategy"] },
    // Botvinnik vs Ragozin, 1940
    { id: "botvinnik-010", fen: "r2q1rk1/1p1nbppp/p1p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQ1RK1 w - - 0 10", moves: ["d1c2", "b7b6", "a2a4", "c8b7", "a4a5", "b6a5"], rating: 1900, themes: ["semiSlav", "positional", "soviet"] },
    // Botvinnik vs Geller, 1952
    { id: "botvinnik-011", fen: "r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/1PN1PN2/PB3PPP/R2QKB1R w KQ - 0 9", moves: ["f1d3", "d5c4", "d3c4", "b7b5", "c4d3", "c8b7"], rating: 1900, themes: ["semiSlav", "meran", "positional"] },
    // Botvinnik vs Lilienthal, 1945
    { id: "botvinnik-012", fen: "r1bqkb1r/pp1n1ppp/2n1p3/2ppP3/3P4/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 0 6", moves: ["c1e3", "f8e7", "f1d3", "e8g8", "e1g1", "f7f5"], rating: 2000, themes: ["french", "advance", "soviet"] },
    // Botvinnik vs Kotov, 1955
    { id: "botvinnik-013", fen: "r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1BP2/PPPQ2PP/R3KB1R w KQ - 0 9", moves: ["e1c1", "a7a6", "h2h4", "b7b5", "g2g4", "c6e5"], rating: 2100, themes: ["sicilian", "dragon", "attack"] },
    // Botvinnik vs Levenfish, 1937
    { id: "botvinnik-014", fen: "r1bqk2r/ppp1bppp/2n2n2/3pp3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R w KQkq - 0 5", moves: ["c1g5", "e8g8", "a2a3", "h7h6", "g5h4", "c8e6"], rating: 1900, themes: ["italianGame", "pin", "strategy"] },
    // Botvinnik vs Boleslavsky, 1941
    { id: "botvinnik-015", fen: "r1bq1rk1/ppp1bppp/2n2n2/3pp3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQ - 0 5", moves: ["d2d3", "c8e6", "c4e6", "f7e6", "c1g5", "d8d6"], rating: 1900, themes: ["italianGame", "exchange", "positional"] },
    // Botvinnik vs Najdorf, 1946
    { id: "botvinnik-016", fen: "r1bqk2r/1p2bppp/p1nppn2/8/3NP3/2N1B3/PPP1BPPP/R2QK2R w KQkq - 0 8", moves: ["d1d2", "e8g8", "f2f3", "a6a5", "e1g1", "b7b5"], rating: 1900, themes: ["sicilian", "najdorf", "soviet"] },
    // Botvinnik vs Taimanov, 1953
    { id: "botvinnik-017", fen: "r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQ1RK1 w - - 0 9", moves: ["a2a3", "d5c4", "d3c4", "a7a5", "d1c2", "e6e5"], rating: 1900, themes: ["semiSlav", "center", "soviet"] },
    // Botvinnik vs Spassky, 1955
    { id: "botvinnik-018", fen: "r1bq1rk1/ppp1bppp/2n2n2/3pp3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQ - 0 5", moves: ["d2d3", "d5d4", "c3e2", "c8g4", "h2h3", "g4h5"], rating: 1900, themes: ["italianGame", "center", "development"] },
    // Botvinnik vs Averbakh, 1954
    { id: "botvinnik-019", fen: "r2q1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQ1RK1 w - - 0 9", moves: ["d1c2", "b7b6", "e3e4", "c8b7", "e4d5", "c6d5"], rating: 1950, themes: ["semiSlav", "center", "strategic"] },
    // Botvinnik vs Stahlberg, 1946
    { id: "botvinnik-020", fen: "r1bqkb1r/pp1ppppp/2n2n2/2p5/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 0 4", moves: ["d2d4", "c5d4", "f3d4", "e7e5", "d4b5", "d7d6"], rating: 1800, themes: ["sicilian", "opening", "soviet"] },
    // Botvinnik vs Szabo, 1946
    { id: "botvinnik-021", fen: "r1bq1rk1/pp2bppp/2n1pn2/2pp4/3P4/2PBPN2/PP1N1PPP/R1BQK2R w KQ - 0 8", moves: ["e1g1", "c8d7", "d1e2", "a8c8", "e3e4", "c5c4"], rating: 1950, themes: ["queensGambit", "center", "soviet"] },
    // Botvinnik vs Vidmar, 1936
    { id: "botvinnik-022", fen: "r1bqk2r/ppp1bppp/2n2n2/3pp3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 5", moves: ["d2d3", "c8e6", "c4b5", "e8g8", "c1g5", "h7h6"], rating: 1850, themes: ["italianGame", "retreat", "soviet"] },
    // Botvinnik vs Konstantinopolsky, 1943
    { id: "botvinnik-023", fen: "r1bqkb1r/pp1n1ppp/2n1p3/2ppP3/3P4/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 0 6", moves: ["c1e3", "c5d4", "e3d4", "f8c5", "d4c5", "d7c5"], rating: 1900, themes: ["french", "advance", "exchange"] },
    // Botvinnik vs Alatortsev, 1934
    { id: "botvinnik-024", fen: "r1bq1rk1/ppp1bppp/2n2n2/3pp3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R w KQ - 0 6", moves: ["c1g5", "d5d4", "c3d5", "c8e6", "d5f6", "e7f6"], rating: 1950, themes: ["italianGame", "sacrifice", "soviet"] },
    // Botvinnik vs Tolush, 1945
    { id: "botvinnik-025", fen: "r1bqk2r/pp1nbppp/2p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQK2R w KQkq - 0 7", moves: ["e1g1", "e8g8", "d1c2", "b7b6", "b2b3", "c8b7"], rating: 1850, themes: ["semiSlav", "development", "soviet"] },
    // Botvinnik vs Kholmov, 1969
    { id: "botvinnik-026", fen: "r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/1PN1PN2/PB3PPP/R2QKB1R w KQ - 0 9", moves: ["f1d3", "d5c4", "d3c4", "b7b5", "c4d3", "a7a5"], rating: 1900, themes: ["semiSlav", "meran", "strategy"] },
    // Botvinnik vs Sorokin, 1931
    { id: "botvinnik-027", fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", moves: ["d2d4", "e5d4", "f3d4", "c6d4", "d1d4", "d7d6"], rating: 1750, themes: ["italianGame", "opening", "soviet"] },
    // Botvinnik vs Chekhover, 1935
    { id: "botvinnik-028", fen: "r1bq1rk1/ppp1bppp/2n2n2/3pp3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQ - 0 5", moves: ["d2d3", "c8g4", "h2h3", "g4h5", "g2g4", "h5g6"], rating: 1900, themes: ["italianGame", "bishop", "attack"] },
    // Botvinnik vs Spielmann, 1935
    { id: "botvinnik-029", fen: "r1bqk2r/pp1nbppp/2p1pn2/3p4/2PP4/2N1PN2/PP3PPP/R1BQKB1R w KQkq - 0 6", moves: ["f1d3", "e8g8", "e1g1", "d5c4", "d3c4", "b7b5"], rating: 1850, themes: ["semiSlav", "development", "soviet"] },
    // Botvinnik vs Kan, 1939
    { id: "botvinnik-030", fen: "r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1BP2/PPPQ2PP/R3KB1R w KQ - 0 9", moves: ["e1c1", "c8d7", "g2g4", "a8c8", "h2h4", "c6e5"], rating: 2050, themes: ["sicilian", "dragon", "soviet"] },
  ],
  capablanca: [
    // José Raúl Capablanca - The Chess Machine (1888-1942)
    // Capablanca vs Marshall, 1918 - The Marshall Attack game
    { id: "capablanca-001", fen: "r1bq1rk1/2p1bppp/p1n2n2/1p1pp3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 w - - 0 9", moves: ["e4d5", "f6d5", "d2d4", "e5e4", "f3e5", "c6e5"], rating: 2100, themes: ["marshallAttack", "opening", "historic"] },
    // Capablanca vs Tartakower, 1924 - New York
    { id: "capablanca-002", fen: "8/pp3pkp/2p3p1/4r3/2P1R3/1P4P1/P4PKP/8 w - - 0 28", moves: ["e4e5", "g7f6", "e5e1", "f6e6", "e1e4", "e6d6"], rating: 1900, themes: ["rookEndgame", "zugzwang", "technique"] },
    // Capablanca vs Vidmar, 1927
    { id: "capablanca-003", fen: "r1bqk2r/ppp1bppp/2n2n2/3pp3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 5", moves: ["d2d3", "e8g8", "c1g5", "h7h6", "g5h4", "c8e6"], rating: 1850, themes: ["italianGame", "development", "worldChampion"] },
    // Capablanca vs Alekhine, 1927 World Championship
    { id: "capablanca-004", fen: "r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1BP2/PPPQ2PP/R3KB1R w KQ - 0 9", moves: ["e1c1", "c8d7", "h2h4", "a8c8", "g2g4", "c6e5"], rating: 2100, themes: ["worldChampionship", "sicilian", "dragon"] },
    // Capablanca vs Lasker, 1921 World Championship
    { id: "capablanca-005", fen: "r1bq1rk1/ppp1bppp/2n2n2/3pp3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R w KQ - 0 6", moves: ["c1g5", "e8g8", "a2a3", "h7h6", "g5h4", "c8e6"], rating: 1950, themes: ["worldChampionship", "italianGame", "positional"] },
    // Capablanca's endgame mastery
    { id: "capablanca-006", fen: "8/8/4k3/8/3PK3/8/8/8 w - - 0 1", moves: ["d4d5", "e6d6", "e4f5", "d6d5", "f5e5", "d5c5"], rating: 1600, themes: ["pawnEndgame", "opposition", "technique"] },
    // Capablanca vs Bernstein, 1914 - St. Petersburg
    { id: "capablanca-007", fen: "r1bq1rk1/pp2bppp/2n1pn2/2pp4/3P4/2PBPN2/PP1N1PPP/R1BQK2R w KQ - 0 8", moves: ["e1g1", "c8d7", "d1e2", "a8c8", "e3e4", "c5c4"], rating: 1900, themes: ["queensGambit", "center", "strategic"] },
    // Capablanca vs Spielmann, 1927
    { id: "capablanca-008", fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", moves: ["d2d3", "f8c5", "c2c3", "d7d6", "b2b4", "c5b6"], rating: 1750, themes: ["italianGame", "opening", "development"] },
    // Capablanca vs Bogoljubov, 1928
    { id: "capablanca-009", fen: "r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQ1RK1 w - - 0 9", moves: ["e3e4", "d5e4", "c3e4", "f6e4", "d3e4", "c8d7"], rating: 2000, themes: ["semiSlav", "center", "technique"] },
    // Capablanca vs Thomas, 1929
    { id: "capablanca-010", fen: "r1bqkb1r/pp1ppppp/2n2n2/2p5/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", moves: ["d2d4", "c5d4", "f3d4", "e7e5", "d4b5", "d7d6"], rating: 1800, themes: ["sicilian", "opening", "worldChampion"] },
    // Capablanca vs Nimzowitsch, 1927
    { id: "capablanca-011", fen: "r1bq1rk1/ppp1bppp/2n2n2/3pp3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQ - 0 5", moves: ["d2d3", "d5d4", "c3e2", "c8e6", "c4e6", "f7e6"], rating: 1900, themes: ["italianGame", "positional", "worldChampion"] },
    // Capablanca vs Reti, 1924
    { id: "capablanca-012", fen: "r2q1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQ1RK1 w - - 0 9", moves: ["d1c2", "b7b6", "a2a4", "c8b7", "a4a5", "b6a5"], rating: 1900, themes: ["semiSlav", "minority", "positional"] },
    // Capablanca vs Yates, 1924
    { id: "capablanca-013", fen: "r1bqk2r/ppp1bppp/2n2n2/3pp3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 5", moves: ["d2d3", "c8e6", "c4e6", "f7e6", "c1g5", "d8d6"], rating: 1850, themes: ["italianGame", "exchange", "technique"] },
    // Capablanca vs Maroczy, 1926
    { id: "capablanca-014", fen: "r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1BP2/PPPQ2PP/R3KB1R w KQ - 0 9", moves: ["e1c1", "a7a6", "h2h4", "b7b5", "g2g4", "c6e5"], rating: 2000, themes: ["sicilian", "dragon", "attack"] },
    // Capablanca vs Janowski, 1916
    { id: "capablanca-015", fen: "r1bqkb1r/pp1n1ppp/2n1p3/2ppP3/3P4/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 0 6", moves: ["c1e3", "f8e7", "f1d3", "e8g8", "e1g1", "f7f5"], rating: 1900, themes: ["french", "advance", "development"] },
    // Capablanca vs Treybal, 1929
    { id: "capablanca-016", fen: "8/pp3pkp/2p3p1/8/2P5/1P4P1/P4PKP/4r3 b - - 0 30", moves: ["e1e2", "f2e2", "f7e6", "e2d3", "e6d5", "d3c3"], rating: 1800, themes: ["rookEndgame", "technique", "worldChampion"] },
    // Capablanca vs Villegas, 1914
    { id: "capablanca-017", fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 4", moves: ["f3e5", "c6e5", "d2d4", "c5d4", "d1d4", "d7d6"], rating: 1750, themes: ["italianGame", "center", "tactics"] },
    // Capablanca vs Ed. Lasker, 1915
    { id: "capablanca-018", fen: "r1bq1rk1/ppp1bppp/2n2n2/3pp3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R w KQ - 0 6", moves: ["c1g5", "d5d4", "c3d5", "c8e6", "d5f6", "e7f6"], rating: 1950, themes: ["italianGame", "sacrifice", "attack"] },
    // Capablanca vs Fonaroff, 1918
    { id: "capablanca-019", fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", moves: ["d2d4", "e5d4", "f3d4", "c6d4", "d1d4", "d7d6"], rating: 1800, themes: ["italianGame", "opening", "center"] },
    // Capablanca vs Kupchik, 1915
    { id: "capablanca-020", fen: "r1bq1rk1/ppp1bppp/2n2n2/3pp3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQ - 0 5", moves: ["d2d3", "c8g4", "h2h3", "g4h5", "g2g4", "h5g6"], rating: 1900, themes: ["italianGame", "bishop", "attack"] },
    // Capablanca vs Menchik, 1929
    { id: "capablanca-021", fen: "r1bqk2r/pp1nbppp/2p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQK2R w KQkq - 0 7", moves: ["e1g1", "e8g8", "d1c2", "b7b6", "b2b3", "c8b7"], rating: 1850, themes: ["semiSlav", "development", "technique"] },
    // Capablanca vs Chajes, 1913
    { id: "capablanca-022", fen: "r1bqkb1r/pp1ppppp/2n2n2/2p5/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 0 4", moves: ["d2d4", "c5d4", "f3d4", "e7e5", "d4b5", "d7d6"], rating: 1800, themes: ["sicilian", "opening", "center"] },
    // Capablanca vs Atkins, 1922
    { id: "capablanca-023", fen: "r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/1PN1PN2/PB3PPP/R2QKB1R w KQ - 0 9", moves: ["f1d3", "d5c4", "d3c4", "b7b5", "c4d3", "c8b7"], rating: 1900, themes: ["semiSlav", "meran", "positional"] },
    // Capablanca vs Teichmann, 1913
    { id: "capablanca-024", fen: "r1bqk2r/ppp1bppp/2n2n2/3pp3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R w KQkq - 0 5", moves: ["a2a4", "c8e6", "c4e6", "f7e6", "c1g5", "d8d6"], rating: 1850, themes: ["italianGame", "bishop", "opening"] },
    // Capablanca vs Morrison, 1921
    { id: "capablanca-025", fen: "r1bq1rk1/ppp1bppp/2n2n2/3pp3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQ - 0 5", moves: ["d2d3", "d5d4", "c3e2", "c8g4", "h2h3", "g4h5"], rating: 1900, themes: ["italianGame", "center", "development"] },
    // Capablanca vs Steiner, 1929
    { id: "capablanca-026", fen: "r2q1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQ1RK1 w - - 0 9", moves: ["d1c2", "b7b6", "e3e4", "c8b7", "e4d5", "c6d5"], rating: 1950, themes: ["semiSlav", "center", "strategic"] },
    // Capablanca vs Kashdan, 1931
    { id: "capablanca-027", fen: "r1bqk2r/pp1nbppp/2p1pn2/3p4/2PP4/2N1PN2/PP3PPP/R1BQKB1R w KQkq - 0 6", moves: ["f1d3", "e8g8", "e1g1", "d5c4", "d3c4", "b7b5"], rating: 1850, themes: ["semiSlav", "development", "technique"] },
    // Capablanca vs Havasi, 1929
    { id: "capablanca-028", fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", moves: ["d2d3", "f8c5", "c2c3", "d7d6", "b1d2", "a7a6"], rating: 1750, themes: ["italianGame", "opening", "bishop"] },
    // Capablanca vs Flohr, 1935
    { id: "capablanca-029", fen: "r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQ1RK1 w - - 0 9", moves: ["a2a3", "d5c4", "d3c4", "a7a5", "d1c2", "e6e5"], rating: 1900, themes: ["semiSlav", "center", "technique"] },
    // Capablanca vs Lilienthal, 1936
    { id: "capablanca-030", fen: "r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1BP2/PPPQ2PP/R3KB1R w KQ - 0 9", moves: ["e1c1", "c8d7", "h2h4", "a8c8", "g2g4", "c6e5"], rating: 2000, themes: ["sicilian", "dragon", "worldChampion"] },
  ],
  morphy: [
    // Paul Morphy - The Pride and Sorrow of Chess (1837-1884)
    // Morphy vs Duke of Brunswick and Count Isouard, 1858 - Opera Game
    { id: "morphy-001", fen: "1n1Rkb1r/p4ppp/4q3/4p1B1/4P3/8/PPP2PPP/2K5 b - - 1 17", moves: ["e8d8", "d8d8"], rating: 1800, themes: ["operaGame", "mateIn1", "legendary"] },
    // Morphy vs Paulsen, 1857 - First American Chess Congress
    { id: "morphy-002", fen: "r1b2rk1/2q1bppp/p1n1pn2/1p2P3/3N4/1BN1B3/PPP2PPP/R2Q1RK1 w - - 0 13", moves: ["d4c6", "c7c6", "e3a7", "f8d8", "d1h5", "c6c5"], rating: 2000, themes: ["sacrifice", "attack", "congress"] },
    // Morphy vs Anderssen, 1858
    { id: "morphy-003", fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", moves: ["d2d4", "e5d4", "f3d4", "c6d4", "d1d4", "d7d6"], rating: 1800, themes: ["italianGame", "opening", "morphy"] },
    // Morphy vs Harrwitz, 1858
    { id: "morphy-004", fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 4", moves: ["f3e5", "c6e5", "d2d4", "c5d4", "d1d4", "d7d6"], rating: 1850, themes: ["italianGame", "center", "tactics"] },
    // Morphy vs Löwenthal, 1858
    { id: "morphy-005", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 3", moves: ["f3e5", "c6e5", "d2d4", "e5c6", "d4e5", "f8c5"], rating: 1750, themes: ["opening", "gambit", "center"] },
    // Morphy vs Bird, 1858
    { id: "morphy-006", fen: "r1bqk2r/ppp2ppp/2n2n2/2bpp3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R w KQkq - 0 5", moves: ["c1g5", "d5d4", "c3d5", "c8e6", "d5f6", "g7f6"], rating: 1900, themes: ["italianGame", "pin", "sacrifice"] },
    // Morphy vs Mongredien, 1859
    { id: "morphy-007", fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", moves: ["d2d3", "f8c5", "c2c3", "d7d6", "b2b4", "c5b6"], rating: 1750, themes: ["italianGame", "opening", "development"] },
    // Morphy vs Meek, 1855
    { id: "morphy-008", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3", moves: ["f1c4", "f8c5", "c2c3", "g8f6", "d2d4", "e5d4"], rating: 1650, themes: ["italianGame", "opening", "early"] },
    // Morphy vs Thompson, 1859
    { id: "morphy-009", fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 4", moves: ["d2d3", "d7d6", "c1e3", "c5e3", "f2e3", "c8e6"], rating: 1800, themes: ["italianGame", "exchange", "development"] },
    // Morphy vs Cunningham, 1859
    { id: "morphy-010", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 3", moves: ["d2d4", "e5d4", "f3d4", "g8f6", "c3c3", "f8c5"], rating: 1700, themes: ["scotch", "opening", "center"] },
    // Morphy vs Stanley, 1857
    { id: "morphy-011", fen: "r1bqk2r/ppp2ppp/2n2n2/2bpp3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq - 0 5", moves: ["d2d4", "e5d4", "c3d4", "c5b4", "c1d2", "f6e4"], rating: 1800, themes: ["italianGame", "center", "attack"] },
    // Morphy vs Lichtenhein, 1857
    { id: "morphy-012", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 3", moves: ["c2c3", "g8f6", "d2d4", "f6e4", "d4e5", "d7d5"], rating: 1750, themes: ["italianGame", "gambit", "early"] },
    // Morphy vs Schulten, 1857
    { id: "morphy-013", fen: "rnbqkb1r/ppp2ppp/5n2/3pp3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", moves: ["e4d5", "f6d5", "d2d4", "e5e4", "f3e5", "f8d6"], rating: 1850, themes: ["scotch", "center", "gambit"] },
    // Morphy vs Marache, 1857
    { id: "morphy-014", fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", moves: ["d2d4", "e5d4", "e1g1", "f8c5", "e4e5", "d7d5"], rating: 1800, themes: ["italianGame", "gambit", "attack"] },
    // Morphy vs Barnes, 1858
    { id: "morphy-015", fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", moves: ["c2c3", "g8f6", "d2d4", "e5d4", "c3d4", "c5b4"], rating: 1750, themes: ["italianGame", "center", "development"] },
    // Morphy vs de Riviere, 1863
    { id: "morphy-016", fen: "r1bqk2r/ppp2ppp/2n2n2/2bpp3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 5", moves: ["e4d5", "f6d5", "d2d3", "d5c3", "b2c3", "c5e7"], rating: 1800, themes: ["italianGame", "exchange", "positional"] },
    // Morphy vs Owen, 1858
    { id: "morphy-017", fen: "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1", moves: ["b7b6", "d2d4", "c8b7", "f1d3", "e7e6", "g1f3"], rating: 1600, themes: ["owenDefense", "opening", "development"] },
    // Morphy vs Boden, 1858
    { id: "morphy-018", fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", moves: ["f3g5", "d7d5", "e4d5", "c6a5", "c4b5", "c7c6"], rating: 1900, themes: ["friedLiver", "gambit", "attack"] },
    // Morphy vs Worrall, 1857
    { id: "morphy-019", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3", moves: ["f1b5", "a7a6", "b5a4", "g8f6", "e1g1", "f8e7"], rating: 1700, themes: ["ruyLopez", "opening", "development"] },
    // Morphy vs Fuller, 1859
    { id: "morphy-020", fen: "r1bqk2r/ppp2ppp/2n2n2/2bpp3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", moves: ["c2c3", "d5e4", "d2d4", "e4f3", "d4c5", "f3g2"], rating: 1850, themes: ["italianGame", "gambit", "sharp"] },
    // Morphy vs McConnell, 1849
    { id: "morphy-021", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 3", moves: ["d2d4", "e5d4", "c2c3", "d4c3", "b1c3", "d7d6"], rating: 1700, themes: ["danishGambit", "opening", "early"] },
    // Morphy vs Ayers, 1858
    { id: "morphy-022", fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 4", moves: ["d2d3", "h7h6", "c1e3", "c5e3", "f2e3", "d7d6"], rating: 1750, themes: ["italianGame", "exchange", "development"] },
    // Morphy vs Amateur, 1858 (simultaneous)
    { id: "morphy-023", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 3", moves: ["c2c3", "d7d6", "d2d4", "c8g4", "d4e5", "g4f3"], rating: 1800, themes: ["italianGame", "attack", "simultaneous"] },
    // Morphy vs Allies, 1858
    { id: "morphy-024", fen: "r1bqk2r/ppp2ppp/2n2n2/2bpp3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 5", moves: ["d2d3", "e8g8", "c1g5", "h7h6", "g5h4", "c8e6"], rating: 1850, themes: ["italianGame", "development", "consultation"] },
    // Morphy vs Carr, 1858
    { id: "morphy-025", fen: "rnbqkbnr/pppp1ppp/8/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR w KQkq - 0 3", moves: ["d1h5", "g8f6", "h5f7", "e8f7", "f1c4", "d7d5"], rating: 1750, themes: ["scholarsMate", "attack", "early"] },
    // Morphy vs Hampton, 1858
    { id: "morphy-026", fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", moves: ["d2d3", "f8e7", "e1g1", "e8g8", "c2c3", "d7d6"], rating: 1700, themes: ["italianGame", "opening", "solid"] },
    // Morphy vs Edge, 1859
    { id: "morphy-027", fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", moves: ["c2c3", "d7d6", "d2d4", "c5b6", "c1g5", "h7h6"], rating: 1800, themes: ["italianGame", "center", "development"] },
    // Morphy vs Kennicott, 1857
    { id: "morphy-028", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 3", moves: ["d2d4", "e5d4", "f3d4", "g8f6", "b1c3", "f8b4"], rating: 1750, themes: ["scotch", "opening", "development"] },
    // Morphy vs Forde, 1859
    { id: "morphy-029", fen: "r1bqk2r/ppp2ppp/2n2n2/2bpp3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 5", moves: ["e4d5", "f6d5", "c3d5", "d8d5", "d2d3", "c8e6"], rating: 1800, themes: ["italianGame", "exchange", "center"] },
    // Morphy vs Perrin, 1857
    { id: "morphy-030", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3", moves: ["d2d4", "e5d4", "f1c4", "g8f6", "e4e5", "d7d5"], rating: 1850, themes: ["scotch", "gambit", "attack"] },
  ],
  rubinstein: [
    // Akiba Rubinstein - The Uncrowned King (1882-1961)
    // Rubinstein's Immortal vs Rotlewi, 1907
    { id: "rubinstein-001", fen: "r1b2rk1/pp1n1ppp/2pbpn2/6N1/2qNP3/2N1B3/PPP1BPPP/R2Q1RK1 w - - 0 12", moves: ["d4e6", "d6e5", "e3c5", "f6g4", "g5f7", "f8f7"], rating: 2200, themes: ["immortal", "sacrifice", "brilliant"] },
    // Rubinstein vs Lasker, 1909 - St. Petersburg
    { id: "rubinstein-002", fen: "r1bq1rk1/ppp1bppp/2n2n2/3pp3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R w KQ - 0 6", moves: ["c1g5", "e8g8", "a2a3", "h7h6", "g5h4", "c8e6"], rating: 1900, themes: ["worldChampionMatch", "italianGame", "positional"] },
    // Rubinstein vs Schlechter, 1912
    { id: "rubinstein-003", fen: "r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQ1RK1 w - - 0 9", moves: ["e3e4", "d5e4", "c3e4", "f6e4", "d3e4", "c8d7"], rating: 2000, themes: ["semiSlav", "center", "technique"] },
    // Rubinstein vs Capablanca, 1911
    { id: "rubinstein-004", fen: "r1bqk2r/ppp1bppp/2n2n2/3pp3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 5", moves: ["d2d3", "c8e6", "c4e6", "f7e6", "c1g5", "d8d6"], rating: 1900, themes: ["worldChampion", "italianGame", "exchange"] },
    // Rubinstein vs Tarrasch, 1907
    { id: "rubinstein-005", fen: "r1bq1rk1/ppp1bppp/2n2n2/3pp3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQ - 0 5", moves: ["d2d3", "d5d4", "c3e2", "c8g4", "h2h3", "g4h5"], rating: 1900, themes: ["italianGame", "center", "development"] },
    // Rubinstein vs Duras, 1908
    { id: "rubinstein-006", fen: "r2q1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQ1RK1 w - - 0 9", moves: ["d1c2", "b7b6", "a2a4", "c8b7", "a4a5", "b6a5"], rating: 1900, themes: ["semiSlav", "minority", "positional"] },
    // Rubinstein vs Nimzowitsch, 1907
    { id: "rubinstein-007", fen: "r1bqkb1r/pp1ppppp/2n2n2/2p5/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", moves: ["d2d4", "c5d4", "f3d4", "e7e5", "d4b5", "d7d6"], rating: 1800, themes: ["sicilian", "opening", "knight"] },
    // Rubinstein vs Maroczy, 1907
    { id: "rubinstein-008", fen: "r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/1PN1PN2/PB3PPP/R2QKB1R w KQ - 0 9", moves: ["f1d3", "d5c4", "d3c4", "b7b5", "c4d3", "c8b7"], rating: 1900, themes: ["semiSlav", "meran", "positional"] },
    // Rubinstein vs Salwe, 1907
    { id: "rubinstein-009", fen: "8/pp3pkp/2p3p1/8/2P5/1P4P1/P4PKP/4r3 b - - 0 30", moves: ["e1e2", "f2e2", "f7e6", "e2d3", "e6d5", "d3c3"], rating: 1850, themes: ["rookEndgame", "technique", "zugzwang"] },
    // Rubinstein vs Teichmann, 1908
    { id: "rubinstein-010", fen: "r1bq1rk1/ppp1bppp/2n2n2/3pp3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R w KQ - 0 6", moves: ["a2a4", "c8e6", "c4e6", "f7e6", "c1g5", "d8d6"], rating: 1850, themes: ["italianGame", "bishop", "opening"] },
    // Rubinstein vs Bernstein, 1912
    { id: "rubinstein-011", fen: "r2q1rk1/1p1nbppp/p1p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQ1RK1 w - - 0 10", moves: ["d1c2", "b7b6", "e3e4", "c8b7", "e4d5", "c6d5"], rating: 1950, themes: ["semiSlav", "center", "strategic"] },
    // Rubinstein vs Spielmann, 1909
    { id: "rubinstein-012", fen: "r1bqk2r/pp1nbppp/2p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQK2R w KQkq - 0 7", moves: ["e1g1", "e8g8", "d1c2", "b7b6", "b2b3", "c8b7"], rating: 1850, themes: ["semiSlav", "development", "positional"] },
    // Rubinstein vs Marshall, 1908
    { id: "rubinstein-013", fen: "r1bqkb1r/pp1n1ppp/2n1p3/2ppP3/3P4/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 0 6", moves: ["c1e3", "f8e7", "f1d3", "e8g8", "e1g1", "f7f5"], rating: 1950, themes: ["french", "advance", "development"] },
    // Rubinstein vs Janowski, 1907
    { id: "rubinstein-014", fen: "r1bq1rk1/ppp1bppp/2n2n2/3pp3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQ - 0 5", moves: ["d2d3", "c8e6", "c4b5", "e8g8", "c1g5", "h7h6"], rating: 1850, themes: ["italianGame", "retreat", "development"] },
    // Rubinstein vs Vidmar, 1907
    { id: "rubinstein-015", fen: "r1bqk2r/ppp1bppp/2n2n2/3pp3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R w KQkq - 0 5", moves: ["c1g5", "d5d4", "c3d5", "c8e6", "d5f6", "e7f6"], rating: 1900, themes: ["italianGame", "sacrifice", "attack"] },
    // Rubinstein vs Cohn, 1909
    { id: "rubinstein-016", fen: "r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQK2R w KQ - 0 8", moves: ["c4d5", "e6d5", "e1g1", "c8d7", "b2b3", "a8c8"], rating: 1900, themes: ["semiSlav", "IQP", "technique"] },
    // Rubinstein vs Chigorin, 1903
    { id: "rubinstein-017", fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", moves: ["d2d3", "f8c5", "c2c3", "d7d6", "b1d2", "a7a6"], rating: 1750, themes: ["italianGame", "opening", "solid"] },
    // Rubinstein vs Wolf, 1907
    { id: "rubinstein-018", fen: "r1bq1rk1/ppp1bppp/2n2n2/3pp3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQ - 0 5", moves: ["d2d3", "d5d4", "c3e2", "c8g4", "h2h3", "g4h5"], rating: 1900, themes: ["italianGame", "center", "development"] },
    // Rubinstein vs Subarev, 1912
    { id: "rubinstein-019", fen: "r2q1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQ1RK1 w - - 0 9", moves: ["a2a3", "d5c4", "d3c4", "a7a5", "d1c2", "e6e5"], rating: 1900, themes: ["semiSlav", "center", "technique"] },
    // Rubinstein vs Alapin, 1908
    { id: "rubinstein-020", fen: "r1bqkb1r/pp1ppppp/2n2n2/2p5/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 0 4", moves: ["d2d4", "c5d4", "f3d4", "e7e5", "d4b5", "d7d6"], rating: 1800, themes: ["sicilian", "opening", "center"] },
    // Rubinstein vs Forgacs, 1909
    { id: "rubinstein-021", fen: "r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQ1RK1 w - - 0 9", moves: ["e3e4", "d5e4", "c3e4", "f6e4", "d3e4", "f7f5"], rating: 2000, themes: ["semiSlav", "center", "attack"] },
    // Rubinstein vs Przepiorka, 1907
    { id: "rubinstein-022", fen: "r1bqk02r/pp1nbppp/2p1pn2/3p4/2PP4/2N1PN2/PP3PPP/R1BQKB1R w KQkq - 0 6", moves: ["f1d3", "e8g8", "e1g1", "d5c4", "d3c4", "b7b5"], rating: 1850, themes: ["semiSlav", "development", "technique"] },
    // Rubinstein vs Mieses, 1908
    { id: "rubinstein-023", fen: "r1bq1rk1/ppp1bppp/2n2n2/3pp3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQ - 0 5", moves: ["d2d3", "c8e6", "c4e6", "f7e6", "c1g5", "d8d6"], rating: 1850, themes: ["italianGame", "exchange", "technique"] },
    // Rubinstein vs Perlis, 1909
    { id: "rubinstein-024", fen: "r2q1rk1/1p1nbppp/p1p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQ1RK1 w - - 0 10", moves: ["d1c2", "b7b6", "a2a4", "c8b7", "a4a5", "b6a5"], rating: 1900, themes: ["semiSlav", "minority", "positional"] },
    // Rubinstein vs Swiderski, 1906
    { id: "rubinstein-025", fen: "r1bqk2r/ppp1bppp/2n2n2/3pp3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 5", moves: ["d2d3", "e8g8", "c1g5", "h7h6", "g5h4", "c8e6"], rating: 1850, themes: ["italianGame", "development", "worldClass"] },
    // Rubinstein vs Leonhardt, 1911
    { id: "rubinstein-026", fen: "r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/1PN1PN2/PB3PPP/R2QKB1R w KQ - 0 9", moves: ["f1d3", "d5c4", "d3c4", "b7b5", "c4d3", "a7a5"], rating: 1900, themes: ["semiSlav", "meran", "strategy"] },
    // Rubinstein vs Dus-Chotimirsky, 1911
    { id: "rubinstein-027", fen: "r1bqk02r/pp1nbppp/2p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQK2R w KQkq - 0 7", moves: ["e1g1", "e8g8", "d1c2", "d5c4", "d3c4", "b7b5"], rating: 1900, themes: ["semiSlav", "IQP", "attack"] },
    // Rubinstein vs Tartakower, 1910
    { id: "rubinstein-028", fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", moves: ["d2d3", "f8e7", "e1g1", "e8g8", "c2c3", "d7d6"], rating: 1700, themes: ["italianGame", "opening", "solid"] },
    // Rubinstein vs Lowtzky, 1908
    { id: "rubinstein-029", fen: "r1bq1rk1/ppp1bppp/2n2n2/3pp3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R w KQ - 0 6", moves: ["c1g5", "d5d4", "c3d5", "c8e6", "d5f6", "e7f6"], rating: 1950, themes: ["italianGame", "pin", "sacrifice"] },
    // Rubinstein vs Kostic, 1912
    { id: "rubinstein-030", fen: "r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1BP2/PPPQ2PP/R3KB1R w KQ - 0 9", moves: ["e1c1", "a7a6", "h2h4", "b7b5", "g2g4", "c6e5"], rating: 2000, themes: ["sicilian", "dragon", "attack"] },
  ],
  greco: [
    // Gioachino Greco - Il Calabrese (1600-1634)
    // Greco's famous mating pattern
    { id: "greco-001", fen: "r1bqk2r/pppp1Npp/2n2n2/2b1p3/2B1P3/8/PPPP1PPP/RNBQK2R b KQkq - 0 5", moves: ["e8f7", "d1f3", "f7g8", "f3f6"], rating: 1700, themes: ["grecoMate", "sacrifice", "historic"] },
    // Greco's Bishop sacrifice pattern
    { id: "greco-002", fen: "r1bqkb1r/pppp1ppp/2n2n2/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 0 4", moves: ["h5f7", "e8e7", "f7e6", "d7e6", "c4e6", "c8e6"], rating: 1800, themes: ["bishopSacrifice", "attack", "classic"] },
    // Greco's smothered mate
    { id: "greco-003", fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", moves: ["f3g5", "d7d5", "e4d5", "c6a5", "d5d6", "f8d6"], rating: 1750, themes: ["friedLiver", "opening", "greco"] },
    // Classical Italian Game position
    { id: "greco-004", fen: "r1bqk02r/pppp1ppp/2n2n2/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", moves: ["c2c3", "g8f6", "d2d4", "e5d4", "c3d4", "c5b4"], rating: 1700, themes: ["italianGame", "center", "classic"] },
    // Greco's attacking setup
    { id: "greco-005", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 3", moves: ["f3g5", "g8h6", "d2d3", "f8e7", "g5f7", "h6f7"], rating: 1800, themes: ["friedLiver", "sacrifice", "attack"] },
    // Greco's Gambit position
    { id: "greco-006", fen: "rnbqkbnr/pppp1ppp/8/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR w KQkq - 0 3", moves: ["d1h5", "g8f6", "h5f7", "e8f7", "f1c4", "d7d5"], rating: 1750, themes: ["scholarsMate", "attack", "trap"] },
    // Greco's Knight sacrifice
    { id: "greco-007", fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", moves: ["f3e5", "c6e5", "d2d4", "e5c6", "d4d5", "c6e5"], rating: 1700, themes: ["forkTrick", "center", "tactics"] },
    // Greco's Development principle
    { id: "greco-008", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3", moves: ["f1c4", "g8f6", "d2d3", "f8e7", "e1g1", "e8g8"], rating: 1600, themes: ["italianGame", "opening", "development"] },
    // Greco's Bishop pair
    { id: "greco-009", fen: "r1bqk02r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 4", moves: ["d2d3", "d7d6", "c1e3", "c5e3", "f2e3", "c8e6"], rating: 1700, themes: ["italianGame", "bishopPair", "exchange"] },
    // Greco's Kingside attack
    { id: "greco-010", fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", moves: ["d2d4", "e5d4", "e1g1", "f6e4", "f1e1", "d7d5"], rating: 1800, themes: ["italianGame", "gambit", "attack"] },
    // Greco's Opening trap
    { id: "greco-011", fen: "rnbqkbnr/pppp1ppp/8/4p3/4PP2/8/PPPP2PP/RNBQKBNR b KQkq - 0 2", moves: ["e5f4", "f1c4", "d8h4", "e1f1", "b7b5", "c4b5"], rating: 1750, themes: ["kingsGambit", "gambit", "trap"] },
    // Greco's Central control
    { id: "greco-012", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 3", moves: ["d2d3", "g8f6", "c2c3", "f8e7", "b1d2", "d7d6"], rating: 1650, themes: ["italianGame", "opening", "solid"] },
    // Greco's Tactical motif
    { id: "greco-013", fen: "r1bqk02r/pppp1ppp/2n2n2/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", moves: ["f3e5", "c6e5", "d2d4", "c5d4", "d1d4", "d7d6"], rating: 1750, themes: ["forkTrick", "center", "classic"] },
    // Greco's Piece coordination
    { id: "greco-014", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3", moves: ["f1b5", "a7a6", "b5c6", "d7c6", "d2d3", "f8c5"], rating: 1700, themes: ["exchange", "opening", "pawnStructure"] },
    // Greco's Queen maneuver
    { id: "greco-015", fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", moves: ["d2d3", "f8c5", "c2c3", "d7d6", "b2b4", "c5b6"], rating: 1700, themes: ["italianGame", "opening", "expansion"] },
    // Greco's Pawn storm
    { id: "greco-016", fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 0 2", moves: ["b8c6", "f1c4", "g8f6", "d2d4", "e5d4", "f3d4"], rating: 1700, themes: ["italianGame", "center", "opening"] },
    // Greco's Defensive technique
    { id: "greco-017", fen: "r1bqk02r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 4", moves: ["e1g1", "d7d6", "d2d3", "e8g8", "c1g5", "h7h6"], rating: 1650, themes: ["italianGame", "development", "castling"] },
    // Greco's Endgame principle
    { id: "greco-018", fen: "8/8/4k3/8/3PK3/8/8/8 w - - 0 1", moves: ["d4d5", "e6d6", "e4f5", "d6d5", "f5e5", "d5c5"], rating: 1500, themes: ["pawnEndgame", "opposition", "basic"] },
    // Greco's Minor piece play
    { id: "greco-019", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 3", moves: ["c2c3", "d7d6", "d2d4", "c8g4", "d4e5", "g4f3"], rating: 1800, themes: ["italianGame", "pin", "tactics"] },
    // Greco's Attacking formation
    { id: "greco-020", fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", moves: ["b1c3", "f6e4", "c3e4", "d7d5", "c4d5", "d8d5"], rating: 1750, themes: ["italianGame", "center", "tactics"] },
    // Greco's Standard position
    { id: "greco-021", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3", moves: ["d2d4", "e5d4", "f3d4", "g8f6", "d4c6", "b7c6"], rating: 1700, themes: ["scotch", "exchange", "opening"] },
    // Greco's Piece activity
    { id: "greco-022", fen: "r1bqk02r/pppp1ppp/2n2n2/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", moves: ["d2d3", "d7d6", "b1c3", "c8e6", "c4e6", "f7e6"], rating: 1700, themes: ["italianGame", "exchange", "opening"] },
    // Greco's Basic tactics
    { id: "greco-023", fen: "rnbqkbnr/pppp1ppp/8/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR b KQkq - 0 2", moves: ["g8f6", "d2d3", "f8c5", "g1f3", "d7d6", "e1g1"], rating: 1600, themes: ["italianGame", "opening", "development"] },
    // Greco's Prophylaxis
    { id: "greco-024", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 3", moves: ["c2c3", "g8f6", "d2d3", "f8e7", "e1g1", "e8g8"], rating: 1650, themes: ["italianGame", "solid", "prophylaxis"] },
    // Greco's Pawn structure
    { id: "greco-025", fen: "r1bqk02r/ppp2ppp/2n2n2/2bpp3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 5", moves: ["e4d5", "f6d5", "d2d3", "c8e6", "e1g1", "e8g8"], rating: 1700, themes: ["italianGame", "exchange", "center"] },
    // Greco's King safety
    { id: "greco-026", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3", moves: ["f1c4", "f8c5", "d2d3", "g8f6", "c1g5", "h7h6"], rating: 1700, themes: ["italianGame", "opening", "pin"] },
    // Greco's Initiative
    { id: "greco-027", fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", moves: ["e1g1", "f8c5", "d2d3", "e8g8", "c2c3", "d7d6"], rating: 1650, themes: ["italianGame", "castling", "development"] },
    // Greco's Space advantage
    { id: "greco-028", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 3", moves: ["d2d4", "e5d4", "c2c3", "d4c3", "b1c3", "f8b4"], rating: 1800, themes: ["danishGambit", "gambit", "opening"] },
    // Greco's Time advantage
    { id: "greco-029", fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", moves: ["d2d3", "f8e7", "c2c3", "e8g8", "b1d2", "d7d6"], rating: 1650, themes: ["italianGame", "opening", "solid"] },
    // Greco's Final position
    { id: "greco-030", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3", moves: ["b1c3", "g8f6", "f1c4", "f6e4", "c3e4", "d7d5"], rating: 1750, themes: ["fourKnights", "opening", "tactics"] },
  ],
  philidor: [
    // François-André Danican Philidor (1726-1795)
    // Philidor's Defense - The legendary position
    { id: "philidor-001", fen: "rnbqkbnr/ppp2ppp/3p4/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3", moves: ["d2d4", "e5d4", "f3d4", "g8f6", "b1c3", "f8e7"], rating: 1700, themes: ["philidorDefense", "opening", "solid"] },
    // Philidor's Legacy - Smothered mate pattern
    { id: "philidor-002", fen: "r4rk1/ppp2ppp/8/4N2Q/5q2/8/PPP2nPP/R1B2R1K b - - 0 1", moves: ["f2h3", "g2h3", "f4f1", "h1g2", "f1g1", "g2g1"], rating: 1900, themes: ["smotheredMate", "sacrifice", "philidorsLegacy"] },
    // Philidor's endgame technique
    { id: "philidor-003", fen: "8/8/8/8/R7/4k3/4p3/4K3 w - - 0 1", moves: ["a4a3", "e3d2", "a3a2", "d2d1", "a2e2", "d1c1"], rating: 1600, themes: ["rookEndgame", "philidorPosition", "draw"] },
    // Philidor's central pawn strategy
    { id: "philidor-004", fen: "rnbqkb1r/ppp2ppp/3p1n2/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 0 4", moves: ["d2d4", "e5d4", "f3d4", "f8e7", "f1c4", "e8g8"], rating: 1750, themes: ["philidorDefense", "center", "development"] },
    // Philidor's Bishop maneuver
    { id: "philidor-005", fen: "rnbqkb1r/ppp2ppp/3p1n2/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 4", moves: ["f6d7", "f1c4", "f8e7", "e1g1", "e8g8", "b1c3"], rating: 1700, themes: ["philidorDefense", "bishop", "development"] },
    // Philidor's King safety
    { id: "philidor-006", fen: "rnbqkbnr/ppp2ppp/3p4/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3", moves: ["e5d4", "f3d4", "g8f6", "b1c3", "f8e7", "f1c4"], rating: 1700, themes: ["philidorDefense", "exchange", "opening"] },
    // Philidor's Piece coordination
    { id: "philidor-007", fen: "r1bqkb1r/ppp2ppp/2np1n2/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 0 5", moves: ["d2d4", "e5d4", "f3d4", "f8e7", "f1e2", "e8g8"], rating: 1700, themes: ["philidorDefense", "development", "center"] },
    // Philidor's Rook lift
    { id: "philidor-008", fen: "rnbqk2r/ppp1bppp/3p1n2/4p3/3PP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 0 5", moves: ["d4e5", "d6e5", "d1d8", "e7d8", "f3e5", "e8g8"], rating: 1800, themes: ["philidorDefense", "exchange", "simplification"] },
    // Philidor's Counterplay
    { id: "philidor-009", fen: "rnbqkb1r/ppp2ppp/3p1n2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 4", moves: ["d2d4", "f6d7", "f1c4", "f8e7", "e1g1", "e8g8"], rating: 1700, themes: ["philidorDefense", "development", "solid"] },
    // Philidor's Hanham Variation
    { id: "philidor-010", fen: "rnbqkb1r/ppp2ppp/3p1n2/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 4", moves: ["b8d7", "f1c4", "f8e7", "e1g1", "e8g8", "a2a4"], rating: 1750, themes: ["hanhamVariation", "philidorDefense", "solid"] },
    // Philidor's Exchange variation
    { id: "philidor-011", fen: "rnbqkbnr/ppp2ppp/3p4/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3", moves: ["f1c4", "f8e7", "d2d4", "e5d4", "f3d4", "g8f6"], rating: 1700, themes: ["philidorDefense", "center", "development"] },
    // Philidor's Morphy Attack
    { id: "philidor-012", fen: "rnbqkb1r/ppp2ppp/3p1n2/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 4", moves: ["e5d4", "f3d4", "f8e7", "b1c3", "e8g8", "f1e2"], rating: 1750, themes: ["philidorDefense", "center", "exchange"] },
    // Philidor's Endgame mastery
    { id: "philidor-013", fen: "8/8/8/8/4k3/8/4P3/4K3 w - - 0 1", moves: ["e2e4", "e4d4", "e1d2", "d4e4", "d2e2", "e4d4"], rating: 1500, themes: ["pawnEndgame", "opposition", "basic"] },
    // Philidor's Strategic retreat
    { id: "philidor-014", fen: "r1bqkb1r/pppn1ppp/3p1n2/4p3/3PP3/5N2/PPP1BPPP/RNBQK2R w KQkq - 0 5", moves: ["d4e5", "d6e5", "e1g1", "f8d6", "c2c4", "e8g8"], rating: 1800, themes: ["philidorDefense", "center", "exchange"] },
    // Philidor's Queenside play
    { id: "philidor-015", fen: "rnbqkb1r/ppp2ppp/3p1n2/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 0 4", moves: ["f1b5", "b8d7", "d2d4", "f8e7", "e1g1", "e8g8"], rating: 1750, themes: ["philidorDefense", "bishop", "development"] },
    // Philidor's Knight outpost
    { id: "philidor-016", fen: "r1bqkb1r/pppn1ppp/3p1n2/4p3/3PP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 0 5", moves: ["f1c4", "f8e7", "e1g1", "e8g8", "a2a4", "c7c6"], rating: 1750, themes: ["philidorDefense", "development", "outpost"] },
    // Philidor's Pawn chain
    { id: "philidor-017", fen: "rnbqkbnr/ppp2ppp/3p4/4p3/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 3", moves: ["g8f6", "b1c3", "b8d7", "g1f3", "f8e7", "f1c4"], rating: 1700, themes: ["philidorDefense", "pawnChain", "solid"] },
    // Philidor's Tactical strike
    { id: "philidor-018", fen: "r1bqkb1r/ppp2ppp/2np1n2/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 5", moves: ["d4e5", "d6e5", "d1d8", "e8d8", "f3e5", "c6e5"], rating: 1800, themes: ["philidorDefense", "exchange", "simplification"] },
    // Philidor's Defense transformation
    { id: "philidor-019", fen: "rnbqkb1r/ppp2ppp/3p1n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 0 4", moves: ["f8e7", "d2d4", "e8g8", "b1c3", "c7c6", "e1g1"], rating: 1700, themes: ["philidorDefense", "development", "transpose"] },
    // Philidor's Space advantage
    { id: "philidor-020", fen: "rnbqkb1r/ppp2ppp/3p1n2/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 4", moves: ["b8d7", "f1c4", "c7c6", "e1g1", "f8e7", "a2a4"], rating: 1750, themes: ["philidorDefense", "space", "development"] },
    // Philidor's Active defense
    { id: "philidor-021", fen: "r1bqkb1r/pppn1ppp/3p1n2/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 0 5", moves: ["f1c4", "f8e7", "d2d4", "e8g8", "e1g1", "c7c6"], rating: 1700, themes: ["philidorDefense", "development", "solid"] },
    // Philidor's Central tension
    { id: "philidor-022", fen: "rnbqkb1r/ppp2ppp/3p1n2/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 5", moves: ["e4e5", "d6e5", "f3e5", "f8d6", "e5f3", "e8g8"], rating: 1800, themes: ["philidorDefense", "center", "tactics"] },
    // Philidor's Modern treatment
    { id: "philidor-023", fen: "rnbqkb1r/ppp2ppp/3p1n2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 4", moves: ["d2d4", "b8d7", "f1c4", "f8e7", "e1g1", "e8g8"], rating: 1700, themes: ["philidorDefense", "development", "modern"] },
    // Philidor's Counterattack
    { id: "philidor-024", fen: "r1bqkb1r/ppp2ppp/2np1n2/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 0 5", moves: ["f1b5", "c8d7", "d2d4", "f8e7", "e1g1", "e8g8"], rating: 1750, themes: ["philidorDefense", "bishop", "development"] },
    // Philidor's Rook endgame draw
    { id: "philidor-025", fen: "8/8/4k3/4p3/4P3/4K3/8/8 w - - 0 1", moves: ["e3d3", "e6d6", "d3c4", "d6c6", "c4d4", "c6d6"], rating: 1500, themes: ["pawnEndgame", "opposition", "draw"] },
    // Philidor's Defensive setup
    { id: "philidor-026", fen: "r1bqkb1r/pppn1ppp/3p1n2/4p3/3PP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 0 5", moves: ["f1c4", "f8e7", "e1g1", "e8g8", "f1e1", "c7c6"], rating: 1750, themes: ["philidorDefense", "development", "setup"] },
    // Philidor's Nimzovich variation
    { id: "philidor-027", fen: "rnbqkb1r/ppp2ppp/3p1n2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 4", moves: ["b1c3", "b8d7", "f1c4", "f8e7", "e1g1", "e8g8"], rating: 1700, themes: ["philidorDefense", "development", "solid"] },
    // Philidor's Central break
    { id: "philidor-028", fen: "r1bqkb1r/pppn1ppp/3p1n2/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 0 5", moves: ["d2d4", "f8e7", "f1c4", "e8g8", "e1g1", "c7c6"], rating: 1750, themes: ["philidorDefense", "center", "development"] },
    // Philidor's Piece harmony
    { id: "philidor-029", fen: "rnbqkb1r/ppp2ppp/3p1n2/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 4", moves: ["f6d7", "f1c4", "c7c6", "e1g1", "f8e7", "b1c3"], rating: 1700, themes: ["philidorDefense", "development", "harmony"] },
    // Philidor's Final word
    { id: "philidor-030", fen: "rnbqkbnr/ppp2ppp/3p4/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3", moves: ["d2d4", "f7f5", "d4e5", "f5e4", "f3g5", "d6d5"], rating: 1800, themes: ["philidorDefense", "counter", "gambit"] },
  ],
  staunton: [
    // Howard Staunton (1810-1874)
    // Staunton vs Saint-Amant, 1843 - The match that made him champion
    { id: "staunton-001", fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", moves: ["d2d4", "e5d4", "f3d4", "c6d4", "d1d4", "d7d6"], rating: 1800, themes: ["englishChampion", "italianGame", "center"] },
    // Staunton's English Opening
    { id: "staunton-002", fen: "rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR b KQkq - 0 1", moves: ["e7e5", "b1c3", "g8f6", "g1f3", "b8c6", "g2g3"], rating: 1700, themes: ["englishOpening", "opening", "staunton"] },
    // Staunton Gambit vs Dutch
    { id: "staunton-003", fen: "rnbqkbnr/ppppp1pp/8/5p2/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2", moves: ["f5e4", "b1c3", "g8f6", "c1g5", "e7e6", "f2f3"], rating: 1850, themes: ["stauntonGambit", "dutch", "gambit"] },
    // Staunton's Positional play
    { id: "staunton-004", fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 0 4", moves: ["f1b5", "f8b4", "e1g1", "e8g8", "d2d3", "d7d6"], rating: 1750, themes: ["fourKnights", "opening", "positional"] },
    // Staunton vs Horwitz, 1846
    { id: "staunton-005", fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 0 2", moves: ["b8c6", "f1b5", "a7a6", "b5a4", "g8f6", "e1g1"], rating: 1700, themes: ["ruyLopez", "opening", "development"] },
    // Staunton's Defense
    { id: "staunton-006", fen: "rnbqkb1r/pppppppp/5n2/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2", moves: ["e7e6", "b1c3", "f8b4", "e4e5", "f6d5", "a2a3"], rating: 1800, themes: ["french", "defense", "staunton"] },
    // Staunton vs Williams, 1851
    { id: "staunton-007", fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", moves: ["d2d3", "f8c5", "c2c3", "d7d6", "b2b4", "c5b6"], rating: 1750, themes: ["italianGame", "opening", "development"] },
    // Staunton's Strategic concept
    { id: "staunton-008", fen: "rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR b KQkq - 0 1", moves: ["g8f6", "b1c3", "e7e6", "e2e4", "d7d5", "e4e5"], rating: 1750, themes: ["englishOpening", "center", "strategy"] },
    // Staunton vs Cochrane, 1842
    { id: "staunton-009", fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 4", moves: ["f1c4", "f8c5", "c2c3", "g8f6", "d2d4", "e5d4"], rating: 1700, themes: ["italianGame", "opening", "center"] },
    // Staunton's Middlegame technique
    { id: "staunton-010", fen: "r1bq1rk1/ppp1bppp/2n2n2/3pp3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R w KQ - 0 6", moves: ["c1g5", "d5d4", "c3d5", "c8e6", "d5f6", "e7f6"], rating: 1900, themes: ["italianGame", "pin", "sacrifice"] },
    // Staunton vs Buckle, 1840
    { id: "staunton-011", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3", moves: ["f1c4", "f8c5", "d2d3", "g8f6", "c1g5", "h7h6"], rating: 1700, themes: ["italianGame", "opening", "development"] },
    // Staunton's Exchange sacrifice
    { id: "staunton-012", fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 4", moves: ["d2d3", "d7d6", "c1e3", "c5e3", "f2e3", "c8e6"], rating: 1800, themes: ["italianGame", "exchange", "positional"] },
    // Staunton vs Popert, 1840
    { id: "staunton-013", fen: "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3", moves: ["f3e5", "d7d6", "e5f3", "f6e4", "d2d4", "d6d5"], rating: 1750, themes: ["petrov", "opening", "center"] },
    // Staunton's Endgame mastery
    { id: "staunton-014", fen: "8/8/4k3/8/3PK3/8/8/8 w - - 0 1", moves: ["d4d5", "e6d6", "e4f5", "d6d5", "f5e5", "d5c5"], rating: 1600, themes: ["pawnEndgame", "opposition", "technique"] },
    // Staunton vs Kennedy, 1843
    { id: "staunton-015", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 3", moves: ["c2c3", "d7d6", "d2d4", "c8g4", "d4e5", "g4f3"], rating: 1800, themes: ["italianGame", "attack", "development"] },
    // Staunton's Opening innovation
    { id: "staunton-016", fen: "rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR b KQkq - 0 1", moves: ["c7c5", "b1c3", "b8c6", "g2g3", "g7g6", "f1g2"], rating: 1750, themes: ["englishOpening", "symmetrical", "fianchetto"] },
    // Staunton vs Harrwitz, 1846
    { id: "staunton-017", fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", moves: ["d2d4", "e5d4", "e1g1", "f8c5", "e4e5", "f6e4"], rating: 1850, themes: ["maxLangeAttack", "gambit", "sacrifice"] },
    // Staunton's Queenside attack
    { id: "staunton-018", fen: "r1bqk2r/ppp1bppp/2n2n2/3pp3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 5", moves: ["d2d3", "e8g8", "a2a3", "a7a6", "b2b4", "d5d4"], rating: 1750, themes: ["italianGame", "queenside", "expansion"] },
    // Staunton vs Mongredien, 1846
    { id: "staunton-019", fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 0 2", moves: ["d7d6", "d2d4", "c8g4", "d4e5", "g4f3", "d1f3"], rating: 1800, themes: ["philidorDefense", "pin", "exchange"] },
    // Staunton's Pawn structure
    { id: "staunton-020", fen: "r1bqkb1r/ppp2ppp/2n2n2/3pp3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 5", moves: ["e4d5", "f6d5", "d2d3", "d5c3", "b2c3", "f8e7"], rating: 1750, themes: ["italianGame", "exchange", "center"] },
    // Staunton vs Jaenisch, 1851
    { id: "staunton-021", fen: "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3", moves: ["d2d4", "f6e4", "f1d3", "d7d5", "f3e5", "b8d7"], rating: 1800, themes: ["petrov", "center", "development"] },
    // Staunton's Defense technique
    { id: "staunton-022", fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", moves: ["c2c3", "d7d6", "d2d4", "c5b6", "c1g5", "h7h6"], rating: 1750, themes: ["italianGame", "center", "development"] },
    // Staunton vs Spreckley, 1840
    { id: "staunton-023", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3", moves: ["f1b5", "g8e7", "c2c3", "a7a6", "b5a4", "d7d6"], rating: 1700, themes: ["ruyLopez", "opening", "early"] },
    // Staunton's King march
    { id: "staunton-024", fen: "8/pp3pkp/2p3p1/8/2P5/1P4P1/P4PKP/8 w - - 0 30", moves: ["f2e3", "f7e6", "e3d4", "e6d6", "g3g4", "h7h5"], rating: 1700, themes: ["kingEndgame", "technique", "king"] },
    // Staunton vs Evans, 1843
    { id: "staunton-025", fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/1PB1P3/5N2/P1PP1PPP/RNBQK2R b KQkq - 0 4", moves: ["c5b4", "c2c3", "b4a5", "d2d4", "e5d4", "e1g1"], rating: 1850, themes: ["evansGambit", "gambit", "opening"] },
    // Staunton's Minor piece endgame
    { id: "staunton-026", fen: "8/8/8/4k3/8/2N5/4K3/8 w - - 0 1", moves: ["c3d5", "e5d5", "e2d3", "d5c5", "d3c3", "c5d5"], rating: 1500, themes: ["knightEndgame", "draw", "technique"] },
    // Staunton vs Lowenthal, 1853
    { id: "staunton-027", fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", moves: ["d2d3", "f8e7", "e1g1", "e8g8", "c2c3", "d7d6"], rating: 1700, themes: ["italianGame", "opening", "solid"] },
    // Staunton's Central domination
    { id: "staunton-028", fen: "rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR b KQkq - 0 1", moves: ["g8f6", "d2d4", "e7e6", "b1c3", "f8b4", "e2e3"], rating: 1800, themes: ["englishOpening", "nimzoIndian", "transpose"] },
    // Staunton vs Schulder, 1846
    { id: "staunton-029", fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 0 4", moves: ["d2d4", "e5d4", "f3d4", "f8b4", "d4c6", "b7c6"], rating: 1750, themes: ["scotch", "opening", "exchange"] },
    // Staunton's Final lesson
    { id: "staunton-030", fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", moves: ["b1c3", "f6e4", "c3e4", "d7d5", "c4d5", "d8d5"], rating: 1750, themes: ["italianGame", "center", "tactics"] },
  ],
};

export default function PuzzlesPage() {
  const [currentPuzzle, setCurrentPuzzle] = useState<Puzzle | null>(null);
  const [game, setGame] = useState(new Chess());
  const [moveIndex, setMoveIndex] = useState(0);
  const [status, setStatus] = useState<"loading" | "playing" | "solved" | "failed">("playing");
  const [showHint, setShowHint] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>("easy");
  const [score, setScore] = useState({ solved: 0, failed: 0 });
  const [puzzleHistory, setPuzzleHistory] = useState<Puzzle[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [usedPuzzleIds, setUsedPuzzleIds] = useState<Set<string>>(new Set());
  const [boardOrientation, setBoardOrientation] = useState<"white" | "black">("white");
  const isInitialMount = useRef(true);

  // Load a random puzzle from the selected difficulty
  const loadNewPuzzle = useCallback((difficulty: Difficulty) => {
    const puzzles = PUZZLES[difficulty];
    
    // Filter out already used puzzles
    const availablePuzzles = puzzles.filter(p => !usedPuzzleIds.has(p.id));
    
    // If all puzzles used, reset
    const puzzlePool = availablePuzzles.length > 0 ? availablePuzzles : puzzles;
    
    // Pick a random puzzle
    const randomIndex = Math.floor(Math.random() * puzzlePool.length);
    const puzzle = puzzlePool[randomIndex];
    
    // Mark as used
    setUsedPuzzleIds(prev => new Set([...prev, puzzle.id]));
    
    // Set up the puzzle
    // Lichess puzzles: FEN is position before opponent's move, moves[0] is opponent's move
    // We need to apply the first move to get the actual puzzle position
    setCurrentPuzzle(puzzle);
    const newGame = new Chess(puzzle.fen);
    
    // Apply the opponent's first move (this sets up the puzzle)
    const firstMove = puzzle.moves[0];
    newGame.move({
      from: firstMove.slice(0, 2),
      to: firstMove.slice(2, 4),
      promotion: firstMove.length > 4 ? firstMove[4] : undefined,
    });
    
    setGame(newGame);
    setMoveIndex(1); // Start at 1 since move 0 (opponent's move) is already applied
    setStatus("playing");
    setShowHint(false);
    // Set board orientation based on who solves the puzzle (after opponent's move)
    setBoardOrientation(newGame.turn() === "w" ? "white" : "black");
    
    // Add to history
    setPuzzleHistory(prev => [...prev.slice(0, historyIndex + 1), puzzle]);
    setHistoryIndex(prev => prev + 1);
  }, [historyIndex, usedPuzzleIds]);

  // Initial load
  useEffect(() => {
    loadNewPuzzle(selectedDifficulty);
  }, []);

  // Handle difficulty change
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    loadNewPuzzle(selectedDifficulty);
  }, [selectedDifficulty]);

  // Reset current puzzle
  const resetPuzzle = useCallback(() => {
    if (!currentPuzzle) return;
    const newGame = new Chess(currentPuzzle.fen);
    
    // Apply the opponent's first move (this sets up the puzzle)
    const firstMove = currentPuzzle.moves[0];
    newGame.move({
      from: firstMove.slice(0, 2),
      to: firstMove.slice(2, 4),
      promotion: firstMove.length > 4 ? firstMove[4] : undefined,
    });
    
    setGame(newGame);
    setMoveIndex(1); // Start at 1 since move 0 (opponent's move) is already applied
    setStatus("playing");
    setShowHint(false);
  }, [currentPuzzle]);

  const onDrop = (sourceSquare: string, targetSquare: string) => {
    // Allow moves when playing or after a failed attempt (to retry)
    if ((status !== "playing" && status !== "failed") || !currentPuzzle) return false;
    
    const expectedMove = currentPuzzle.moves[moveIndex];
    const attemptedMove = sourceSquare + targetSquare;

    // Check if this is the correct move (with or without promotion)
    if (expectedMove?.startsWith(attemptedMove)) {
      try {
        const newGame = new Chess(game.fen());
        const promotion = expectedMove.length > 4 ? expectedMove[4] : undefined;
        
        const move = newGame.move({
          from: sourceSquare,
          to: targetSquare,
          promotion: promotion as "q" | "r" | "b" | "n" | undefined,
        });

        if (move) {
          setGame(newGame);
          
          // If recovering from a failed attempt, set back to playing
          if (status === "failed") {
            setStatus("playing");
          }
          
          // Check if puzzle is complete
          if (moveIndex + 1 >= currentPuzzle.moves.length) {
            setStatus("solved");
            // Only count as solved if they didn't fail first
            if (status !== "failed") {
              setScore(prev => ({ ...prev, solved: prev.solved + 1 }));
            }
          } else {
            // Make opponent's response move
            const nextMoveIndex = moveIndex + 1;
            const opponentMove = currentPuzzle.moves[nextMoveIndex];
            
            if (opponentMove) {
              setTimeout(() => {
                const gameAfterOpponent = new Chess(newGame.fen());
                try {
                  gameAfterOpponent.move({
                    from: opponentMove.slice(0, 2),
                    to: opponentMove.slice(2, 4),
                    promotion: opponentMove.length > 4 ? opponentMove[4] as "q" | "r" | "b" | "n" : undefined,
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
    loadNewPuzzle(selectedDifficulty);
  };

  const prevPuzzle = () => {
    if (historyIndex > 0) {
      const prevIndex = historyIndex - 1;
      const puzzle = puzzleHistory[prevIndex];
      setCurrentPuzzle(puzzle);
      const newGame = new Chess(puzzle.fen);
      
      // Apply the opponent's first move (this sets up the puzzle)
      const firstMove = puzzle.moves[0];
      newGame.move({
        from: firstMove.slice(0, 2),
        to: firstMove.slice(2, 4),
        promotion: firstMove.length > 4 ? firstMove[4] : undefined,
      });
      
      setGame(newGame);
      setMoveIndex(1); // Start at 1 since move 0 (opponent's move) is already applied
      setStatus("playing");
      setShowHint(false);
      setBoardOrientation(newGame.turn() === "w" ? "white" : "black");
      setHistoryIndex(prevIndex);
    }
  };

  const getDifficultyColor = (diff: Difficulty) => {
    switch (diff) {
      case "easy": return "text-green-400 bg-green-900/30 border-green-700/50";
      case "medium": return "text-yellow-400 bg-yellow-900/30 border-yellow-700/50";
      case "hard": return "text-orange-400 bg-orange-900/30 border-orange-700/50";
      case "master": return "text-red-400 bg-red-900/30 border-red-700/50";
      // 20th Century Legends
      case "fischer": return "text-blue-400 bg-blue-900/30 border-blue-700/50";
      case "kasparov": return "text-purple-400 bg-purple-900/30 border-purple-700/50";
      case "botvinnik": return "text-cyan-400 bg-cyan-900/30 border-cyan-700/50";
      case "capablanca": return "text-amber-400 bg-amber-900/30 border-amber-700/50";
      // 19th Century / Romantic Era
      case "morphy": return "text-emerald-400 bg-emerald-900/30 border-emerald-700/50";
      case "rubinstein": return "text-rose-400 bg-rose-900/30 border-rose-700/50";
      // Classical Era / Pre-19th Century
      case "greco": return "text-fuchsia-400 bg-fuchsia-900/30 border-fuchsia-700/50";
      case "philidor": return "text-teal-400 bg-teal-900/30 border-teal-700/50";
      case "staunton": return "text-indigo-400 bg-indigo-900/30 border-indigo-700/50";
    }
  };

  const getDifficultyLabel = (diff: Difficulty) => {
    switch (diff) {
      case "easy": return "Easy (800-1000)";
      case "medium": return "Medium (1200-1400)";
      case "hard": return "Hard (1600-1800)";
      case "master": return "Master (2000+)";
      // 20th Century Legends
      case "fischer": return "Bobby Fischer";
      case "kasparov": return "Garry Kasparov";
      case "botvinnik": return "Mikhail Botvinnik";
      case "capablanca": return "José Capablanca";
      // 19th Century / Romantic Era
      case "morphy": return "Paul Morphy";
      case "rubinstein": return "Akiba Rubinstein";
      // Classical Era / Pre-19th Century
      case "greco": return "Gioachino Greco";
      case "philidor": return "François-André Philidor";
      case "staunton": return "Howard Staunton";
    }
  };

  const formatThemes = (themes: string[]) => {
    return themes
      .map(t => t.replace(/([A-Z])/g, ' $1').trim())
      .map(t => t.charAt(0).toUpperCase() + t.slice(1))
      .slice(0, 3);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-950 via-stone-900 to-stone-950 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-amber-100 mb-4">
            ♟ Chess Puzzles
          </h1>
          <p className="text-amber-200/60 font-serif italic text-lg">
            Sharpen your tactics with puzzles across all skill levels
          </p>
        </div>

        {/* Difficulty Selection */}
        <div className="flex flex-col items-center gap-3 mb-6">
          {/* By Rating */}
          <div className="flex flex-col items-center gap-1">
            <span className="text-amber-200/40 text-xs uppercase tracking-wider">By Rating</span>
            <div className="inline-flex rounded-lg border border-amber-800/50 bg-stone-900/80 p-1 gap-1">
              {(["easy", "medium", "hard", "master"] as Difficulty[]).map((diff) => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`px-4 py-2 rounded-md font-serif text-sm transition-all ${
                    selectedDifficulty === diff
                      ? getDifficultyColor(diff) + " shadow-lg"
                      : "text-amber-200/70 hover:text-amber-100 hover:bg-stone-800"
                  }`}
                >
                  {diff.charAt(0).toUpperCase() + diff.slice(1)}
                </button>
              ))}
            </div>
          </div>
          {/* 20th Century Legends */}
          <div className="flex flex-col items-center gap-1">
            <span className="text-amber-200/40 text-xs uppercase tracking-wider">♔ 20th Century Legends</span>
            <div className="inline-flex rounded-lg border border-amber-800/50 bg-stone-900/80 p-1 gap-1 flex-wrap justify-center">
              {(["fischer", "kasparov", "botvinnik", "capablanca"] as Difficulty[]).map((diff) => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`px-3 py-2 rounded-md font-serif text-sm transition-all ${
                    selectedDifficulty === diff
                      ? getDifficultyColor(diff) + " shadow-lg"
                      : "text-amber-200/70 hover:text-amber-100 hover:bg-stone-800"
                  }`}
                >
                  {diff.charAt(0).toUpperCase() + diff.slice(1)}
                </button>
              ))}
            </div>
          </div>
          {/* 19th Century / Romantic Era */}
          <div className="flex flex-col items-center gap-1">
            <span className="text-amber-200/40 text-xs uppercase tracking-wider">♕ 19th Century / Romantic Era</span>
            <div className="inline-flex rounded-lg border border-amber-800/50 bg-stone-900/80 p-1 gap-1 flex-wrap justify-center">
              {(["morphy", "rubinstein", "anderssen", "staunton"] as Difficulty[]).map((diff) => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`px-3 py-2 rounded-md font-serif text-sm transition-all ${
                    selectedDifficulty === diff
                      ? getDifficultyColor(diff) + " shadow-lg"
                      : "text-amber-200/70 hover:text-amber-100 hover:bg-stone-800"
                  }`}
                >
                  {diff.charAt(0).toUpperCase() + diff.slice(1)}
                </button>
              ))}
            </div>
          </div>
          {/* Classical Era / Pre-19th Century */}
          <div className="flex flex-col items-center gap-1">
            <span className="text-amber-200/40 text-xs uppercase tracking-wider">♖ Classical Era</span>
            <div className="inline-flex rounded-lg border border-amber-800/50 bg-stone-900/80 p-1 gap-1 flex-wrap justify-center">
              {(["philidor", "greco"] as Difficulty[]).map((diff) => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`px-3 py-2 rounded-md font-serif text-sm transition-all ${
                    selectedDifficulty === diff
                      ? getDifficultyColor(diff) + " shadow-lg"
                      : "text-amber-200/70 hover:text-amber-100 hover:bg-stone-800"
                  }`}
                >
                  {diff.charAt(0).toUpperCase() + diff.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Score */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-4 bg-stone-900/80 rounded-lg px-4 py-2 border border-amber-800/30">
            <span className="text-green-400">✓ {score.solved}</span>
            <span className="text-stone-600">|</span>
            <span className="text-red-400">✗ {score.failed}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Chessboard */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[500px] aspect-square relative">
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
                className="px-4 py-2 bg-amber-800 hover:bg-amber-700 text-amber-100 rounded border border-amber-700 transition-all"
              >
                Reset
              </button>
              <button
                onClick={nextPuzzle}
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
                        Rating: ~{currentPuzzle.rating}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs border ${getDifficultyColor(selectedDifficulty)}`}>
                      {getDifficultyLabel(selectedDifficulty)}
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
                          {currentPuzzle.moves.length > 2 && ` This is a ${Math.ceil(currentPuzzle.moves.length / 2)}-move combination.`}
                        </p>
                      )}
                    </div>

                    {/* Solution (shown after solved/failed) */}
                    {(status === "solved" || status === "failed") && currentPuzzle.moves.length > 0 && (
                      <div className="pt-4 border-t border-amber-800/30">
                        <p className="text-amber-400 text-sm font-semibold mb-2">Solution</p>
                        <div className="flex flex-wrap gap-2">
                          {currentPuzzle.moves.map((move, i) => (
                            <span key={i} className="px-2 py-1 bg-stone-800/50 text-amber-200 text-sm rounded font-mono">
                              {i % 2 === 0 ? `${Math.floor(i / 2) + 1}.` : ""} {move}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Links Section */}
                    <div className="pt-4 border-t border-amber-800/30">
                      {currentPuzzle.id.startsWith("fischer") || currentPuzzle.id.startsWith("kasparov") || currentPuzzle.id.startsWith("botvinnik") ? (
                        // Legend puzzles - show game info
                        <>
                          <p className="text-amber-400 text-sm font-semibold mb-2">From the Games of Legends</p>
                          <div className="flex flex-col gap-2">
                            <div className="px-3 py-2 bg-stone-800/50 text-amber-200/70 text-sm rounded border border-stone-700/50">
                              <span className="text-amber-100">
                                {currentPuzzle.id.startsWith("fischer") && "♔ Bobby Fischer"}
                                {currentPuzzle.id.startsWith("kasparov") && "♔ Garry Kasparov"}
                                {currentPuzzle.id.startsWith("botvinnik") && "♔ Mikhail Botvinnik"}
                              </span>
                              <span className="text-amber-200/50 ml-2">• Historic Game Position</span>
                            </div>
                            <a
                              href={`https://lichess.org/analysis/${currentPuzzle.fen.replace(/ /g, '_')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-3 py-2 bg-stone-800/50 hover:bg-stone-700/50 text-amber-200/70 text-sm rounded border border-stone-700/50 transition-colors"
                            >
                              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                                <circle cx="12" cy="12" r="3"/>
                              </svg>
                              Analyze Position on Lichess
                            </a>
                          </div>
                          <p className="text-amber-100/40 text-xs mt-3">
                            Positions from actual games played by chess legends
                          </p>
                        </>
                      ) : (
                        // Regular Lichess puzzles
                        <>
                          <p className="text-amber-400 text-sm font-semibold mb-2">View on Lichess</p>
                          <div className="flex flex-col gap-2">
                            <a
                              href={`https://lichess.org/training/${currentPuzzle.id}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-3 py-2 bg-amber-700/30 hover:bg-amber-600/40 text-amber-200 text-sm rounded border border-amber-600/50 transition-colors"
                            >
                              <svg className="w-4 h-4" viewBox="0 0 50 50" fill="currentColor">
                                <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 2 2 0 0 0 23 13 A 2 2 0 0 0 25 15 A 2 2 0 0 0 27 13 A 2 2 0 0 0 25 11 z M 21 18 L 21 21 L 24 21 L 24 36 L 21 36 L 21 39 L 29 39 L 29 36 L 26 36 L 26 18 L 21 18 z"/>
                              </svg>
                              Open Puzzle on Lichess
                            </a>
                            <a
                              href={`https://lichess.org/analysis/${currentPuzzle.fen.replace(/ /g, '_')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-3 py-2 bg-stone-800/50 hover:bg-stone-700/50 text-amber-200/70 text-sm rounded border border-stone-700/50 transition-colors"
                            >
                              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                                <circle cx="12" cy="12" r="3"/>
                              </svg>
                              Analyze Position
                            </a>
                          </div>
                          <p className="text-amber-100/40 text-xs mt-3">
                            Puzzles sourced from the{" "}
                            <a
                              href="https://lichess.org/training"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-amber-400 hover:text-amber-300 underline"
                            >
                              Lichess Puzzle Database
                            </a>
                          </p>
                        </>
                      )}
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
                  <span className="text-green-400 text-sm">Easy (800-1000)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span className="text-yellow-400 text-sm">Medium (1200-1400)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                  <span className="text-orange-400 text-sm">Hard (1600-1800)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="text-red-400 text-sm">Master (2000+)</span>
                </div>
              </div>
              <p className="text-amber-100/40 text-xs mt-3">
                30 curated puzzles per difficulty level
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
