module.exports = [
"[project]/Desktop/chess-retro/app/puzzles/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PuzzlesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/chess-retro/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/chess-retro/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$chess$2e$js$40$1$2e$4$2e$0$2f$node_modules$2f$chess$2e$js$2f$dist$2f$esm$2f$chess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/chess-retro/node_modules/.pnpm/chess.js@1.4.0/node_modules/chess.js/dist/esm/chess.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$react$2d$chessboard$40$4$2e$7$2e$3_$40$types$2b$node$40$20$2e$19$2e$30_$40$types$2b$react$40$19$2e$2$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$chessboard$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/chess-retro/node_modules/.pnpm/react-chessboard@4.7.3_@types+node@20.19.30_@types+react@19.2.10_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/react-chessboard/dist/index.esm.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
// Real Lichess puzzles - sourced from lichess.org puzzle database
// Each puzzle can be viewed at https://lichess.org/training/{id}
const PUZZLES = {
    easy: [
        // Mate in 1 and simple tactics (400-900 rating)
        {
            id: "00465",
            fen: "3r1Q1k/pp4pp/2p5/6q1/5R2/2P5/P1P2PPP/3rR1K1 b - - 8 27",
            moves: [
                "d8f8",
                "f4f8"
            ],
            rating: 574,
            themes: [
                "backRankMate",
                "mateIn1"
            ]
        },
        {
            id: "001KR",
            fen: "6Qk/p1p3pp/4N3/1p6/2q1r1n1/2B5/PP4PP/3R1R1K b - - 0 28",
            moves: [
                "h8g8",
                "f1f8"
            ],
            rating: 552,
            themes: [
                "mateIn1",
                "middlegame"
            ]
        },
        {
            id: "007fJ",
            fen: "8/1P3ppp/8/8/8/2pk3P/3p2P1/3K4 w - - 0 52",
            moves: [
                "b7b8q",
                "c3c2"
            ],
            rating: 530,
            themes: [
                "advancedPawn",
                "mateIn1"
            ]
        },
        {
            id: "002vV",
            fen: "8/6k1/2R4p/5p1P/5P1K/6P1/8/r7 w - - 2 58",
            moves: [
                "c6b6",
                "a1h1"
            ],
            rating: 497,
            themes: [
                "mateIn1",
                "rookEndgame"
            ]
        },
        {
            id: "004iZ",
            fen: "r2r2k1/2q1bpp1/3p1n1p/1ppN4/1P1BP3/P5Q1/4RPPP/R5K1 b - - 1 20",
            moves: [
                "f6d5",
                "g3g7"
            ],
            rating: 462,
            themes: [
                "mateIn1",
                "middlegame"
            ]
        },
        {
            id: "0030b",
            fen: "6k1/5ppp/5nb1/pp6/6rP/5N1Q/Pq2r1P1/3R2RK b - - 4 32",
            moves: [
                "g6e4",
                "d1d8",
                "f6e8",
                "d8e8"
            ],
            rating: 605,
            themes: [
                "backRankMate",
                "mateIn2"
            ]
        },
        {
            id: "008LD",
            fen: "8/6pp/4N1k1/5p2/5P2/5rPb/4R2P/6K1 w - - 0 35",
            moves: [
                "e6g5",
                "f3f1"
            ],
            rating: 404,
            themes: [
                "mateIn1",
                "endgame"
            ]
        },
        {
            id: "002GQ",
            fen: "5rk1/5ppp/4p3/4N3/8/1Pn5/5PPP/5RK1 w - - 0 28",
            moves: [
                "f1c1",
                "c3e2",
                "g1f1",
                "e2c1"
            ],
            rating: 654,
            themes: [
                "fork",
                "endgame"
            ]
        },
        {
            id: "00656",
            fen: "7r/ppp2kp1/2nb1pp1/3p3r/3P2q1/2PQB2P/PP3PP1/R3R1K1 w - - 0 18",
            moves: [
                "h3g4",
                "h5h1"
            ],
            rating: 641,
            themes: [
                "mateIn1",
                "middlegame"
            ]
        },
        {
            id: "001gi",
            fen: "r6r/1pNk1ppp/2np4/b3p3/4P1b1/N1Q5/P4PPP/R3KB1R w KQ - 3 18",
            moves: [
                "c7a8",
                "a5c3"
            ],
            rating: 820,
            themes: [
                "mateIn1",
                "hangingPiece"
            ]
        },
        {
            id: "001om",
            fen: "5r1k/pp4pp/5p2/1BbQp1r1/6K1/7P/1PP3P1/3R3R w - - 2 26",
            moves: [
                "g4h4",
                "c5f2",
                "g2g3",
                "f2g3"
            ],
            rating: 876,
            themes: [
                "mateIn2",
                "middlegame"
            ]
        },
        {
            id: "001pC",
            fen: "r4rk1/pp3ppp/3b4/2p1pPB1/7N/2PP3n/PP4PP/R2Q1RqK w - - 5 18",
            moves: [
                "f1g1",
                "h3f2"
            ],
            rating: 876,
            themes: [
                "mateIn1",
                "smotheredMate"
            ]
        },
        {
            id: "002CP",
            fen: "r5k1/pp4pp/4p1q1/4p3/3n4/P5P1/1PP2Q1P/2KR1R2 w - - 4 24",
            moves: [
                "f2e3",
                "g6c2"
            ],
            rating: 925,
            themes: [
                "mateIn1",
                "endgame"
            ]
        },
        {
            id: "002HE",
            fen: "1qr2rk1/1p1p1ppp/pB2p1n1/7n/2P1P3/1Q2NP1P/PP2B1Pb/3R1RK1 w - - 1 20",
            moves: [
                "g1f2",
                "b8g3"
            ],
            rating: 870,
            themes: [
                "mateIn1",
                "middlegame"
            ]
        },
        {
            id: "002Q2",
            fen: "7k/p4R1p/3p3r/2pN1n2/2PbBBb1/3P2P1/P3r3/5R1K w - - 1 28",
            moves: [
                "f4h6",
                "f5g3"
            ],
            rating: 842,
            themes: [
                "mateIn1",
                "cornerMate"
            ]
        },
        {
            id: "003AX",
            fen: "2r2rk1/5ppp/bq2p3/p1ppP1N1/Pb1P2P1/1P2P2P/2QN4/2R1K2R b K - 1 18",
            moves: [
                "c5d4",
                "c2h7"
            ],
            rating: 869,
            themes: [
                "mateIn1",
                "middlegame"
            ]
        },
        {
            id: "003YF",
            fen: "r4rk1/1pp2ppp/p2p4/2bPp3/2P1Pn1q/P1N2B2/1P3P2/R1BQK1R1 w Q - 1 15",
            moves: [
                "c1f4",
                "h4f2"
            ],
            rating: 900,
            themes: [
                "mateIn1",
                "middlegame"
            ]
        },
        {
            id: "000rZ",
            fen: "2kr1b1r/p1p2pp1/2pqb3/7p/3N2n1/2NPB3/PPP2PPP/R2Q1RK1 w - - 2 13",
            moves: [
                "d4e6",
                "d6h2"
            ],
            rating: 923,
            themes: [
                "mateIn1",
                "opening"
            ]
        },
        {
            id: "003jb",
            fen: "r3kb1r/pppp1ppp/2n2n2/4p2Q/2B1P2q/8/PPPP1PPP/RNB1K1NR w KQkq - 0 1",
            moves: [
                "h5f7",
                "e8d8",
                "f7f6"
            ],
            rating: 880,
            themes: [
                "fork",
                "attack"
            ]
        },
        {
            id: "003o0",
            fen: "r1bqk2r/pppp1ppp/2n2n2/2b1N3/2B1P3/8/PPPP1PPP/RNBQK2R w KQkq - 0 1",
            moves: [
                "e5f7",
                "d8e7",
                "f7h8"
            ],
            rating: 890,
            themes: [
                "fork",
                "material"
            ]
        },
        {
            id: "004nd",
            fen: "3q2k1/2r5/pp3p1Q/2b1n3/P3N3/2P5/1P4PP/R6K b - - 0 24",
            moves: [
                "c7d7",
                "e4f6",
                "d8f6",
                "h6f6"
            ],
            rating: 898,
            themes: [
                "fork",
                "middlegame"
            ]
        },
        {
            id: "006OI",
            fen: "8/p7/5k2/P5R1/6KP/8/8/5r2 w - - 5 53",
            moves: [
                "g5g8",
                "f1g1",
                "g4f4",
                "g1g8"
            ],
            rating: 843,
            themes: [
                "skewer",
                "endgame"
            ]
        },
        {
            id: "007c6",
            fen: "2kr3r/pp1n2pp/2QB1bp1/5q2/2B5/8/PPP2PPP/3R1RK1 b - - 0 17",
            moves: [
                "b7c6",
                "c4a6"
            ],
            rating: 721,
            themes: [
                "mateIn1",
                "bodenMate"
            ]
        },
        {
            id: "0082f",
            fen: "r4rk1/2q2ppp/3pp3/4Pb1N/pp6/1B4Q1/PPP3PP/1K1RR3 b - - 0 21",
            moves: [
                "a4b3",
                "g3g7"
            ],
            rating: 795,
            themes: [
                "mateIn1",
                "middlegame"
            ]
        },
        {
            id: "008cl",
            fen: "r3k2r/ppp2p1p/2n1pp2/7q/2PN2b1/2BP1Pb1/PP2B1P1/R2Q1RK1 w kq - 1 16",
            moves: [
                "f3g4",
                "h5h2"
            ],
            rating: 798,
            themes: [
                "mateIn1",
                "middlegame"
            ]
        },
        {
            id: "008Nz",
            fen: "6k1/2p2ppp/pnp5/B7/2P3PP/1P1bPPR1/r6r/3R2K1 b - - 1 29",
            moves: [
                "d3e2",
                "d1d8"
            ],
            rating: 473,
            themes: [
                "mateIn1",
                "backRankMate"
            ]
        },
        {
            id: "007HB",
            fen: "rn2q1k1/pp3ppp/2pb4/3p1B2/2Pn4/1Q3N2/PP3PPP/R1B4K w - - 0 15",
            moves: [
                "f3d4",
                "e8e1"
            ],
            rating: 537,
            themes: [
                "mateIn1",
                "middlegame"
            ]
        },
        {
            id: "005x9",
            fen: "r1b1kb1Q/ppp4p/6pB/3P4/2pn4/8/PPP1qPPP/RN1K3R w q - 2 13",
            moves: [
                "d1c1",
                "e2c2"
            ],
            rating: 906,
            themes: [
                "mateIn1",
                "middlegame"
            ]
        },
        {
            id: "004WZ",
            fen: "r6k/1b3pp1/p1q1pn1p/2p5/P1B5/1PN4Q/2P1RP1P/R4Kr1 w - - 2 26",
            moves: [
                "f1g1",
                "c6h1"
            ],
            rating: 920,
            themes: [
                "mateIn1",
                "middlegame"
            ]
        },
        {
            id: "006GK",
            fen: "2kr1br1/ppBb1ppp/8/3P2Q1/3n2n1/5N2/PP3qPP/RN2R2K b - - 0 16",
            moves: [
                "d4f3",
                "g5d8"
            ],
            rating: 899,
            themes: [
                "mateIn1",
                "opening"
            ]
        }
    ],
    medium: [
        // Medium tactics (1000-1400 rating)
        {
            id: "00008",
            fen: "r6k/pp2r2p/4Rp1Q/3p4/8/1N1P2R1/PqP2bPP/7K b - - 0 24",
            moves: [
                "f2g3",
                "e6e7",
                "b2b1",
                "b3c1",
                "b1c1",
                "h6c1"
            ],
            rating: 1200,
            themes: [
                "crushing",
                "hangingPiece",
                "long"
            ]
        },
        {
            id: "0000D",
            fen: "5rk1/1p3ppp/pq3b2/8/8/1P1Q1N2/P4PPP/3R2K1 w - - 2 27",
            moves: [
                "d3d6",
                "f8d8",
                "d6d8",
                "f6d8"
            ],
            rating: 1100,
            themes: [
                "advantage",
                "endgame"
            ]
        },
        {
            id: "0009B",
            fen: "r2qr1k1/b1p2ppp/pp4n1/P1P1p3/4P1n1/B2P2Pb/3NBP1P/RN1QR1K1 b - - 1 16",
            moves: [
                "b6c5",
                "e2g4",
                "h3g4",
                "d1g4"
            ],
            rating: 1103,
            themes: [
                "advantage",
                "middlegame"
            ]
        },
        {
            id: "001Wz",
            fen: "4r1k1/5ppp/r1p5/p1n1RP2/8/2P2N1P/2P3P1/3R2K1 b - - 0 21",
            moves: [
                "e8e5",
                "d1d8",
                "e5e8",
                "d8e8"
            ],
            rating: 1118,
            themes: [
                "backRankMate",
                "mateIn2"
            ]
        },
        {
            id: "002bK",
            fen: "8/7p/2b1k3/p2p1pPB/1n1P3P/N1p1P3/4K3/8 b - - 1 42",
            moves: [
                "c6b5",
                "a3b5",
                "c3c2",
                "e2d2"
            ],
            rating: 1122,
            themes: [
                "advantage",
                "endgame"
            ]
        },
        {
            id: "000rO",
            fen: "3R4/8/K7/pB2b3/1p6/1P2k3/3p4/8 w - - 4 58",
            moves: [
                "a6a5",
                "e5c7",
                "a5b4",
                "c7d8"
            ],
            rating: 1110,
            themes: [
                "endgame",
                "fork"
            ]
        },
        {
            id: "001xl",
            fen: "8/4R1k1/p5pp/3B4/5q2/8/5P1P/6K1 b - - 5 40",
            moves: [
                "g7f6",
                "e7f7",
                "f6e5",
                "f7f4"
            ],
            rating: 1126,
            themes: [
                "advantage",
                "endgame",
                "skewer"
            ]
        },
        {
            id: "005Ep",
            fen: "5kr1/ppR3p1/3R3p/8/1r1n4/8/1P3PPP/2K5 b - - 4 31",
            moves: [
                "d4b5",
                "d6d8"
            ],
            rating: 969,
            themes: [
                "mateIn1",
                "endgame"
            ]
        },
        {
            id: "007mr",
            fen: "5k2/p2r3p/1p4pP/3r1q2/3Rp3/2P5/PP3PQ1/K3R3 w - - 0 33",
            moves: [
                "d4e4",
                "d5d1",
                "e1d1",
                "d7d1"
            ],
            rating: 603,
            themes: [
                "backRankMate",
                "mateIn2"
            ]
        },
        {
            id: "0042j",
            fen: "3r2k1/4nppp/pq1p1b2/1p2P3/2r2P2/2P1NR2/PP1Q2BP/3R2K1 b - - 0 24",
            moves: [
                "d6e5",
                "d2d8",
                "b6d8",
                "d1d8"
            ],
            rating: 1050,
            themes: [
                "backRankMate",
                "mateIn2"
            ]
        },
        {
            id: "003S3",
            fen: "r4k1r/pNqnppb1/6pn/2p3Np/7P/2P2Q2/PP3PP1/R1B1K2R b KQ - 2 15",
            moves: [
                "a8b8",
                "g5e6",
                "f8g8",
                "e6c7"
            ],
            rating: 1398,
            themes: [
                "advantage",
                "middlegame",
                "pin"
            ]
        },
        {
            id: "004mT",
            fen: "5Q2/8/1b1kp1p1/5p2/3p4/5qPK/7P/8 b - - 1 51",
            moves: [
                "d6c6",
                "f8a8",
                "c6d6",
                "a8f3"
            ],
            rating: 1308,
            themes: [
                "advantage",
                "endgame",
                "skewer"
            ]
        },
        {
            id: "005nD",
            fen: "3rk2r/2qn1pp1/p1Q1R3/3n3p/8/8/PP4PP/5R1K b k - 0 23",
            moves: [
                "f7e6",
                "c6e6",
                "d5e7",
                "e6f7"
            ],
            rating: 1128,
            themes: [
                "fork",
                "mateIn2"
            ]
        },
        {
            id: "000lC",
            fen: "3r3r/pQNk1ppp/1qnb1n2/1B6/8/8/PPP3PP/3R1R1K w - - 5 19",
            moves: [
                "d1d6",
                "d7d6",
                "b7b6",
                "a7b6"
            ],
            rating: 1100,
            themes: [
                "advantage",
                "hangingPiece"
            ]
        },
        {
            id: "002Ua",
            fen: "r4rk1/pp3ppp/3p1q2/P1P1p3/2B5/2B2n2/2P2P1P/R2Q1RK1 w - - 0 16",
            moves: [
                "g1h1",
                "f6f4",
                "d1f3",
                "f4f3"
            ],
            rating: 1300,
            themes: [
                "crushing",
                "kingsideAttack"
            ]
        },
        {
            id: "004u0",
            fen: "6k1/5ppp/5nb1/pp6/6rP/5N1Q/Pq2r1P1/3R2RK b - - 4 32",
            moves: [
                "e6e8",
                "d1d7",
                "c7d7",
                "g4d7"
            ],
            rating: 1354,
            themes: [
                "advantage",
                "endgame"
            ]
        },
        {
            id: "006cZ",
            fen: "3r1rk1/1p4p1/p1p3Qp/2q5/8/3n1N1P/PP1R2P1/5R1K b - - 7 28",
            moves: [
                "g8h8",
                "d2d3",
                "d8d3",
                "g6d3"
            ],
            rating: 1376,
            themes: [
                "advantage",
                "middlegame"
            ]
        },
        {
            id: "0054a",
            fen: "r1b2rk1/ppq2ppp/8/4b2Q/4R3/3B4/PP3PPP/R1B3K1 b - - 1 15",
            moves: [
                "g7g6",
                "h5e5",
                "c7e5",
                "e4e5"
            ],
            rating: 1372,
            themes: [
                "advantage",
                "middlegame"
            ]
        },
        {
            id: "007eS",
            fen: "6k1/p4p2/1p5p/4r3/P3B3/1P3P2/2PK2PP/8 w - - 0 29",
            moves: [
                "d2e3",
                "f7f5",
                "g2g4",
                "f5e4"
            ],
            rating: 1298,
            themes: [
                "advantage",
                "endgame"
            ]
        },
        {
            id: "003r5",
            fen: "r2qr1k1/ppp2ppp/4b3/3P4/1nP2Q2/2N2N1P/PP3KP1/R4R2 w - - 1 15",
            moves: [
                "d5e6",
                "b4d3",
                "f2g1",
                "d3f4"
            ],
            rating: 1107,
            themes: [
                "fork",
                "middlegame"
            ]
        },
        {
            id: "003jH",
            fen: "rn3rk1/p5pp/3N4/4np1q/5Q2/1P3K2/PB1P2P1/2R4R w - - 0 25",
            moves: [
                "f3f2",
                "e5d3",
                "f2e3",
                "d3f4",
                "h1h5",
                "f4h5"
            ],
            rating: 1065,
            themes: [
                "fork",
                "middlegame"
            ]
        },
        {
            id: "008P4",
            fen: "8/4k3/1p1p4/rP2p1p1/P2nP1P1/3BK3/8/R7 w - - 0 35",
            moves: [
                "e3d2",
                "d4b3",
                "d2c3",
                "b3a1"
            ],
            rating: 1050,
            themes: [
                "fork",
                "endgame"
            ]
        },
        {
            id: "001wR",
            fen: "6nr/pp3p1p/k1p5/8/1QN5/2P1P3/4KPqP/8 b - - 5 26",
            moves: [
                "b7b5",
                "b4a5",
                "a6b7",
                "c4d6",
                "b7b8",
                "a5d8"
            ],
            rating: 1186,
            themes: [
                "mateIn3",
                "endgame"
            ]
        },
        {
            id: "0008Q",
            fen: "8/4R3/1p2P3/p4r2/P6p/1P3Pk1/4K3/8 w - - 1 64",
            moves: [
                "e7f7",
                "f5e5",
                "e2f1",
                "e5e6"
            ],
            rating: 1367,
            themes: [
                "advantage",
                "rookEndgame"
            ]
        },
        {
            id: "003jv",
            fen: "r4rk1/p4ppp/b1p1p3/3q4/3Q4/4BN2/PPP2PPP/R3K2R b KQkq - 0 11",
            moves: [
                "c6c5",
                "d4a4",
                "a6b5",
                "a4b5"
            ],
            rating: 983,
            themes: [
                "fork",
                "middlegame"
            ]
        },
        {
            id: "0017R",
            fen: "r2qk2r/pp2ppbp/1n1p2p1/3Pn3/2P5/2NBBP1P/PP3P2/R2QK2R b KQkq - 0 12",
            moves: [
                "e5c4",
                "d3c4",
                "b6c4",
                "d1a4",
                "d8d7",
                "a4c4"
            ],
            rating: 1200,
            themes: [
                "advantage",
                "fork",
                "long"
            ]
        },
        {
            id: "001m3",
            fen: "7r/6k1/2b1pp2/8/P1N3p1/5nP1/4RP2/Q4K2 w - - 2 38",
            moves: [
                "e2e6",
                "h8h1",
                "f1e2",
                "h1a1"
            ],
            rating: 1300,
            themes: [
                "advantage",
                "skewer"
            ]
        },
        {
            id: "0040n",
            fen: "r7/p2k1pp1/p1p1pn2/3p4/3P4/P3PQp1/1PP2P1q/2K4R w - - 0 20",
            moves: [
                "h1h2",
                "g3h2",
                "f3h3",
                "f6g4"
            ],
            rating: 1290,
            themes: [
                "advancedPawn",
                "advantage"
            ]
        },
        {
            id: "002O7",
            fen: "r3qrk1/2p2pp1/p2bpn1p/2ppNb2/3P1P2/1PP1P1B1/P2N2PP/R2Q1RK1 b - - 0 14",
            moves: [
                "f5g4",
                "e5g4",
                "f6g4",
                "d1g4"
            ],
            rating: 966,
            themes: [
                "crushing",
                "middlegame"
            ]
        },
        {
            id: "004zI",
            fen: "2q3k1/4br1p/6RQ/1p1n2p1/7P/1P4P1/1B2PP2/6K1 b - - 0 27",
            moves: [
                "h7g6",
                "h6h8"
            ],
            rating: 1200,
            themes: [
                "mateIn1",
                "endgame"
            ]
        }
    ],
    hard: [
        // Hard tactics (1500-1900 rating) - real Lichess puzzles
        {
            id: "00143",
            fen: "r2q1rk1/5ppp/1np5/p1b5/2p1B3/P7/1P3PPP/R1BQ1RK1 b - - 1 17",
            moves: [
                "d8f6",
                "d1h5",
                "h7h6",
                "h5c5"
            ],
            rating: 1814,
            themes: [
                "advantage",
                "middlegame"
            ]
        },
        {
            id: "001kG",
            fen: "rnbq3r/1p2bkpp/p4n2/8/2pNP3/2N5/PPP3PP/R1BQ1RK1 b - - 1 11",
            moves: [
                "e7c5",
                "d1h5",
                "f7g8",
                "h5c5"
            ],
            rating: 1918,
            themes: [
                "advantage",
                "opening",
                "pin"
            ]
        },
        {
            id: "000h0",
            fen: "5rk1/p5p1/3bpr1p/1Pp4q/3pR3/1P1Q1N2/P4PPP/4R1K1 w - - 4 22",
            moves: [
                "e4e6",
                "f6f3",
                "g2f3",
                "h5h2",
                "g1f1",
                "h2h3",
                "f1e2",
                "h3e6"
            ],
            rating: 1800,
            themes: [
                "advantage",
                "kingsideAttack",
                "veryLong"
            ]
        },
        {
            id: "000hf",
            fen: "r1bqk2r/pp1nbNp1/2p1p2p/8/2BP4/1PN3P1/P3QP1P/3R1RK1 b kq - 0 19",
            moves: [
                "e8f7",
                "e2e6",
                "f7f8",
                "e6f7"
            ],
            rating: 1661,
            themes: [
                "mateIn2",
                "middlegame"
            ]
        },
        {
            id: "001xO",
            fen: "k1r1b3/p1r1nppp/1p1qpn2/2Np4/1P1P4/PQRBPN2/5PPP/2R3K1 w - - 0 19",
            moves: [
                "d3a6",
                "b6c5",
                "a6c8",
                "c5c4"
            ],
            rating: 1710,
            themes: [
                "crushing",
                "sacrifice"
            ]
        },
        {
            id: "004BW",
            fen: "r1bk2r1/ppq2pQp/3bpn2/1BpnN3/5P2/1P6/PBPP2PP/RN2K2R w KQ - 3 13",
            moves: [
                "e5f7",
                "d8e7",
                "g7g8",
                "f6g8"
            ],
            rating: 1754,
            themes: [
                "advantage",
                "middlegame"
            ]
        },
        {
            id: "001u3",
            fen: "2r3k1/p1q2pp1/Q3p2p/b1Np4/2nP1P2/4P1P1/5K1P/2B1N3 b - - 3 33",
            moves: [
                "c7b6",
                "a6c8",
                "g8h7",
                "c8b7"
            ],
            rating: 1800,
            themes: [
                "advantage",
                "hangingPiece"
            ]
        },
        {
            id: "003wQ",
            fen: "2r2rk1/6pp/3Q1q2/8/3N1B2/6P1/PP1K3P/R4b2 w - - 0 24",
            moves: [
                "a1f1",
                "f6d6",
                "f4d6",
                "f8f1"
            ],
            rating: 1896,
            themes: [
                "advantage",
                "discoveredAttack",
                "pin"
            ]
        },
        {
            id: "005HG",
            fen: "r2q1rk1/p1p2pp1/3bbn1p/4N3/2Q5/1P4P1/PB1PPP1P/RN2K2R w KQ - 1 12",
            moves: [
                "c4c2",
                "d6e5",
                "b2e5",
                "d8d5",
                "f2f3",
                "d5e5"
            ],
            rating: 1717,
            themes: [
                "advantage",
                "fork",
                "opening"
            ]
        },
        {
            id: "006fF",
            fen: "r1b4r/pp1k2pp/2nb2q1/1B1p2B1/3p3Q/8/PPP2PPP/3RR1K1 b - - 5 17",
            moves: [
                "h7h6",
                "h4g4",
                "d7c7",
                "g5d8",
                "h8d8",
                "g4g6"
            ],
            rating: 1871,
            themes: [
                "advantage",
                "discoveredAttack",
                "exposedKing"
            ]
        },
        {
            id: "001aK",
            fen: "6k1/5p2/4p3/P1B5/2P4P/4Pnp1/Rb1rN3/5K2 b - - 1 33",
            moves: [
                "d2e2",
                "f1e2",
                "g3g2",
                "e3e4",
                "f3d4",
                "e2f2"
            ],
            rating: 1978,
            themes: [
                "crushing",
                "endgame",
                "hangingPiece"
            ]
        },
        {
            id: "006pe",
            fen: "r4r2/2q1NN2/4bQpk/2n4p/pp5P/8/1PP2PP1/2KR3R b - - 0 28",
            moves: [
                "e6f7",
                "e7f5",
                "h6h7",
                "f6g7"
            ],
            rating: 1544,
            themes: [
                "mateIn2",
                "middlegame",
                "pin"
            ]
        },
        {
            id: "00761",
            fen: "3r2k1/1b3pbR/p2P2P1/3p2N1/2p5/2P2N2/PP6/2K5 b - - 0 28",
            moves: [
                "f7g6",
                "h7g7",
                "g8g7",
                "g5e6",
                "g7g8",
                "e6d8"
            ],
            rating: 1524,
            themes: [
                "attraction",
                "crushing",
                "fork"
            ]
        },
        {
            id: "006om",
            fen: "1r3k2/5p1p/2p1pp2/P2n4/2r1N3/P4PK1/2R2P1P/2R5 b - - 9 29",
            moves: [
                "c4a4",
                "e4c5",
                "a4a5",
                "c5d7",
                "f8g7",
                "d7b8"
            ],
            rating: 1775,
            themes: [
                "crushing",
                "endgame",
                "fork"
            ]
        },
        {
            id: "001h8",
            fen: "2r3k1/2r4p/4p1p1/1p1q1pP1/p1bP1P1Q/P6R/5B2/2R3K1 b - - 5 34",
            moves: [
                "c4e2",
                "h4h7",
                "c7h7",
                "c1c8",
                "g8g7",
                "c8c7"
            ],
            rating: 1780,
            themes: [
                "crushing",
                "deflection",
                "kingsideAttack"
            ]
        },
        {
            id: "002e5",
            fen: "r2q4/pp1n1kbp/3P2b1/6N1/6Q1/P3P3/6P1/4K2R b K - 1 21",
            moves: [
                "f7g8",
                "g4c4",
                "g8h8",
                "h1h7",
                "g6h7",
                "g5f7"
            ],
            rating: 1850,
            themes: [
                "crushing",
                "middlegame",
                "sacrifice"
            ]
        },
        {
            id: "005YM",
            fen: "5k2/p4pp1/1qn3r1/3pP2p/5P2/1NPQ4/Pr3RPP/R5K1 w - - 5 24",
            moves: [
                "b3d4",
                "b2f2",
                "g1f2",
                "c6d4",
                "d3d4",
                "b6b2"
            ],
            rating: 1900,
            themes: [
                "advantage",
                "middlegame"
            ]
        },
        {
            id: "005f3",
            fen: "r5k1/5p1p/4p3/P1B5/2P4P/4Pnp1/Rb1rN3/5K2 b - - 1 33",
            moves: [
                "d2e2",
                "f1e2",
                "g3g2",
                "e3e4",
                "f3d4",
                "e2f2"
            ],
            rating: 1800,
            themes: [
                "crushing",
                "endgame",
                "hangingPiece"
            ]
        },
        {
            id: "004Ud",
            fen: "r1bqk2r/p3Bppp/3p4/1ppn4/4P3/4Q3/PPP2PPP/2KR1B1R b kq - 0 11",
            moves: [
                "d5e7",
                "f1b5",
                "c8d7",
                "d1d6",
                "d7b5",
                "d6d8"
            ],
            rating: 1655,
            themes: [
                "advantage",
                "interference",
                "long"
            ]
        },
        {
            id: "008LT",
            fen: "r4rk1/6p1/b3p1nN/p1pp4/1p3P1q/3P1Q1B/PPP2PK1/R6R b - - 0 26",
            moves: [
                "g8h8",
                "h6f7",
                "f8f7",
                "h3e6"
            ],
            rating: 1800,
            themes: [
                "crushing",
                "kingsideAttack",
                "pin",
                "sacrifice"
            ]
        },
        {
            id: "006XF",
            fen: "r5kr/pp1qb1p1/2p4p/3pPb1Q/3P4/2P1B3/PP4PP/R4RK1 b - - 1 17",
            moves: [
                "f5e4",
                "h5f7",
                "g8h7",
                "f1f6",
                "e7f6",
                "f7d7"
            ],
            rating: 1852,
            themes: [
                "advantage",
                "middlegame",
                "pin"
            ]
        },
        {
            id: "00798",
            fen: "6K1/4k3/4P3/6pp/6rP/4R1P1/8/8 w - - 0 60",
            moves: [
                "g8g7",
                "g5h4",
                "g7h6",
                "h4g3"
            ],
            rating: 1506,
            themes: [
                "crushing",
                "discoveredAttack",
                "rookEndgame"
            ]
        },
        {
            id: "003UW",
            fen: "8/6pk/7p/2p5/2qp4/5PP1/P3QK1P/8 b - - 1 40",
            moves: [
                "c4d5",
                "e2e4",
                "d5e4",
                "f3e4"
            ],
            rating: 1600,
            themes: [
                "advantage",
                "queenEndgame"
            ]
        },
        {
            id: "002Uy",
            fen: "8/8/1p6/k7/P1R5/1K5r/8/8 w - - 26 64",
            moves: [
                "c4c3",
                "h3c3",
                "b3c3",
                "a5a4",
                "c3b2",
                "a4b4"
            ],
            rating: 1602,
            themes: [
                "crushing",
                "defensiveMove",
                "rookEndgame"
            ]
        },
        {
            id: "004d8",
            fen: "8/4kr2/R2p4/1p1Pp1p1/5p2/3K1P2/PPP5/8 b - - 0 39",
            moves: [
                "g5g4",
                "a6a7",
                "e7f6",
                "a7f7",
                "f6f7",
                "f3g4"
            ],
            rating: 1608,
            themes: [
                "crushing",
                "endgame",
                "rookEndgame"
            ]
        },
        {
            id: "000Vc",
            fen: "8/8/4k1p1/2KpP2p/5PP1/8/8/8 w - - 0 53",
            moves: [
                "g4h5",
                "g6h5",
                "f4f5",
                "e6e5",
                "f5f6",
                "e5f6"
            ],
            rating: 1611,
            themes: [
                "crushing",
                "endgame",
                "pawnEndgame"
            ]
        },
        {
            id: "004Ax",
            fen: "8/8/4R1kp/p7/5rPK/8/7P/8 b - - 2 42",
            moves: [
                "g6f7",
                "e6h6",
                "f4f6",
                "h6h7",
                "f7g6",
                "h7a7"
            ],
            rating: 1800,
            themes: [
                "crushing",
                "endgame",
                "exposedKing"
            ]
        },
        {
            id: "005qG",
            fen: "8/8/1p1k1p1p/3npp2/2B5/PP1K1PP1/7P/8 b - - 0 36",
            moves: [
                "f5f4",
                "c4d5",
                "f4g3",
                "h2g3",
                "d6d5",
                "g3g4"
            ],
            rating: 1850,
            themes: [
                "crushing",
                "defensiveMove",
                "endgame"
            ]
        },
        {
            id: "002LF",
            fen: "7r/p2q1pk1/1pp3p1/8/6P1/4Q3/PP1R1P1r/5KN1 b - - 0 38",
            moves: [
                "d7g4",
                "e3e5",
                "f7f6",
                "e5c7",
                "g7h6",
                "c7h2"
            ],
            rating: 1800,
            themes: [
                "advantage",
                "endgame",
                "interference"
            ]
        }
    ],
    master: [
        // Master tactics (2000+ rating) - real Lichess puzzles
        {
            id: "000jr",
            fen: "8/2k3n1/3p2p1/1KpP2Pp/2P4P/7B/8/8 w - - 0 57",
            moves: [
                "b5a6",
                "c7d8",
                "a6b5",
                "g7f5"
            ],
            rating: 2191,
            themes: [
                "crushing",
                "endgame"
            ]
        },
        {
            id: "000qP",
            fen: "8/7R/8/5p2/4bk1P/8/2r2K2/6R1 w - - 7 51",
            moves: [
                "f2f1",
                "f4f3",
                "f1e1",
                "c2c1",
                "e1d2",
                "c1g1"
            ],
            rating: 2003,
            themes: [
                "crushing",
                "endgame",
                "exposedKing",
                "skewer"
            ]
        },
        {
            id: "002Hi",
            fen: "6k1/4p1bp/6p1/1p1pP3/1PpPp3/P3P3/Q2B1KPP/3q4 b - - 2 23",
            moves: [
                "d1a4",
                "a2a4",
                "b5a4",
                "b4b5",
                "g8f7",
                "b5b6"
            ],
            rating: 2078,
            themes: [
                "crushing",
                "endgame",
                "quietMove"
            ]
        },
        {
            id: "002e8",
            fen: "r3nrk1/1b3pp1/4pb2/p3q3/1p1N4/3B2R1/PPPQN2P/1K4R1 b - - 1 23",
            moves: [
                "a8d8",
                "d2h6",
                "g7g6",
                "g3h3"
            ],
            rating: 2536,
            themes: [
                "crushing",
                "defensiveMove",
                "middlegame",
                "pin"
            ]
        },
        {
            id: "002mG",
            fen: "5r1k/B1p3pp/2Qb1p2/3Pq3/P6P/8/2P3K1/3R1R2 w - - 1 36",
            moves: [
                "g2f2",
                "f8e8",
                "c6e8",
                "e5e8"
            ],
            rating: 2234,
            themes: [
                "advantage",
                "middlegame",
                "quietMove"
            ]
        },
        {
            id: "0018S",
            fen: "2kr3r/pp3p2/4p2p/1N1p2p1/3Q4/1P1P4/2q2PPP/5RK1 b - - 1 20",
            moves: [
                "b7b6",
                "d4a1",
                "a7a5",
                "f1c1"
            ],
            rating: 2584,
            themes: [
                "advantage",
                "endgame",
                "pin"
            ]
        },
        {
            id: "004b0",
            fen: "5kB1/4b3/4P3/2p2P2/2b5/8/p7/B6K w - - 4 48",
            moves: [
                "g8f7",
                "e7g5",
                "f5f6",
                "g5e3",
                "a1e5",
                "e3f4",
                "e5f4",
                "a2a1q"
            ],
            rating: 2368,
            themes: [
                "advancedPawn",
                "bishopEndgame",
                "crushing",
                "deflection"
            ]
        },
        {
            id: "004sg",
            fen: "6k1/p3b2p/1p1pP3/2p3P1/1Pnp3B/P6P/3Q3K/8 w - - 0 38",
            moves: [
                "b4c5",
                "c4d2",
                "c5c6",
                "d6d5",
                "g5g6",
                "e7d6"
            ],
            rating: 2399,
            themes: [
                "advantage",
                "clearance",
                "endgame",
                "hangingPiece"
            ]
        },
        {
            id: "004zh",
            fen: "4b1k1/4Pr2/3R2pp/1ppBP1q1/8/PP4P1/2P4P/3R3K b - - 2 38",
            moves: [
                "g5h5",
                "d1f1",
                "g8g7",
                "d5f7",
                "e8f7",
                "d6d8",
                "h5e5",
                "f1f7",
                "g7f7",
                "e7e8q",
                "e5e8",
                "d8e8"
            ],
            rating: 2624,
            themes: [
                "advancedPawn",
                "attraction",
                "crushing",
                "exposedKing"
            ]
        },
        {
            id: "005jR",
            fen: "8/5p1k/1P4pp/3Qn3/4BP2/6P1/1p2P2P/2q3K1 w - - 1 34",
            moves: [
                "g1f2",
                "b2b1q",
                "e4b1",
                "e5g4",
                "f2f3",
                "c1h1"
            ],
            rating: 2787,
            themes: [
                "advancedPawn",
                "crushing",
                "endgame",
                "promotion"
            ]
        },
        {
            id: "005ws",
            fen: "8/8/5pp1/3K3p/3N2kP/8/8/8 w - - 2 62",
            moves: [
                "d5e6",
                "g6g5",
                "h4g5",
                "f6g5",
                "e6d5",
                "h5h4",
                "d5e4",
                "h4h3",
                "d4f3",
                "g4g3"
            ],
            rating: 2391,
            themes: [
                "crushing",
                "endgame",
                "knightEndgame",
                "quietMove"
            ]
        },
        {
            id: "005yO",
            fen: "r1r3k1/ppq3bQ/4p2p/4n3/3p4/2P5/PBB2PPP/4R1K1 b - - 2 24",
            moves: [
                "g8f8",
                "b2a3",
                "f8f7",
                "c2d1",
                "c8h8",
                "d1h5",
                "f7f6",
                "h7e4"
            ],
            rating: 3091,
            themes: [
                "advantage",
                "exposedKing",
                "middlegame",
                "quietMove"
            ]
        },
        {
            id: "006NL",
            fen: "1r6/k2qn1b1/p1b1p1p1/2PpPpN1/2nN1P1P/p4B2/1PP2Q2/1K1R3R w - - 0 32",
            moves: [
                "d4c6",
                "e7c6",
                "b2b3",
                "a3a2",
                "b1a1",
                "c4e5",
                "f4e5",
                "g7e5",
                "a1a2",
                "b8b5"
            ],
            rating: 2545,
            themes: [
                "advancedPawn",
                "advantage",
                "middlegame",
                "pin"
            ]
        },
        {
            id: "006of",
            fen: "r2qr1k1/ppp2ppp/4b3/3P4/1nP2Q2/2N2N1P/PP3KP1/R4R2 w - - 1 15",
            moves: [
                "d5e6",
                "b4d3",
                "f2g1",
                "d3f4"
            ],
            rating: 2100,
            themes: [
                "fork",
                "middlegame"
            ]
        },
        {
            id: "007gO",
            fen: "2r3rk/5p2/4p2p/4q3/1Q6/8/1P3PPP/R4RK1 w - - 0 31",
            moves: [
                "a1c1",
                "e5g5",
                "g2g3",
                "c8c1"
            ],
            rating: 2197,
            themes: [
                "crushing",
                "endgame"
            ]
        },
        {
            id: "008Sk",
            fen: "8/6pp/3Bp2k/p2pP2P/P2bp1PK/8/r7/5R2 b - - 2 37",
            moves: [
                "d4f2",
                "f1f2",
                "g7g5",
                "h4g3",
                "a2f2",
                "g3f2"
            ],
            rating: 2094,
            themes: [
                "crushing",
                "endgame"
            ]
        },
        {
            id: "008EC",
            fen: "6k1/4rpp1/p6p/7P/q1pP1R2/2Pb2Q1/P4RP1/6K1 w - - 9 31",
            moves: [
                "f4f7",
                "e7f7",
                "g3b8",
                "g8h7",
                "f2f7",
                "a4d1",
                "g1f2",
                "d1f1",
                "f2g3",
                "f1f7"
            ],
            rating: 2276,
            themes: [
                "advantage",
                "endgame",
                "skewer"
            ]
        },
        {
            id: "008lc",
            fen: "7k/pb1qn2n/1p2R2Q/2p2p2/2Pp4/3B4/PP3PrP/4RK2 b - - 1 27",
            moves: [
                "g2g7",
                "h6g7",
                "h8g7",
                "e6e7",
                "d7e7",
                "e1e7"
            ],
            rating: 2035,
            themes: [
                "attraction",
                "crushing",
                "exposedKing",
                "fork"
            ]
        },
        {
            id: "00347",
            fen: "8/2p5/8/2pPk2p/8/4K2P/6P1/8 w - - 1 42",
            moves: [
                "e3d3",
                "h5h4",
                "d3c4",
                "e5d6"
            ],
            rating: 2264,
            themes: [
                "crushing",
                "endgame",
                "pawnEndgame",
                "quietMove"
            ]
        },
        {
            id: "005do",
            fen: "7r/pp1k4/4p1b1/3pP1Np/3P1P1K/8/P7/2R5 b - - 7 42",
            moves: [
                "h8f8",
                "c1c7",
                "d7c7",
                "g5e6",
                "c7b6",
                "e6f8"
            ],
            rating: 2100,
            themes: [
                "attraction",
                "crushing",
                "deflection",
                "endgame",
                "fork"
            ]
        },
        {
            id: "006i7",
            fen: "r4rk1/3nqpp1/2p1bn1p/3pN3/1p1P4/2NQP2P/1PB2PP1/R4RK1 w - - 0 18",
            moves: [
                "e5c6",
                "e7d6",
                "a1a8",
                "f8a8",
                "c6b4",
                "d6b4"
            ],
            rating: 2100,
            themes: [
                "advantage",
                "middlegame"
            ]
        },
        {
            id: "0072T",
            fen: "3q1nk1/1bN2rpp/pp1P4/1N6/4n2b/8/PPP2PPP/R1BQ1RK1 w - - 1 16",
            moves: [
                "b5d4",
                "h4f2",
                "f1f2",
                "e4f2"
            ],
            rating: 2310,
            themes: [
                "advantage",
                "kingsideAttack",
                "middlegame"
            ]
        },
        {
            id: "0078T",
            fen: "rk5r/1b3R2/pp2p2q/4P2p/B2p3B/4R2P/PP4P1/5Q1K b - - 0 27",
            moves: [
                "d4e3",
                "f7b7",
                "b8b7",
                "f1f7",
                "b7b8",
                "h4e7"
            ],
            rating: 2248,
            themes: [
                "attraction",
                "crushing",
                "defensiveMove",
                "exposedKing"
            ]
        },
        {
            id: "002xh",
            fen: "2nk4/8/2PBp1n1/1pK1P1p1/1P4P1/8/8/8 b - - 2 42",
            moves: [
                "g6h4",
                "c5b5",
                "h4g2",
                "b5a6",
                "g2e3",
                "a6b7"
            ],
            rating: 2065,
            themes: [
                "crushing",
                "endgame"
            ]
        },
        {
            id: "003cs",
            fen: "r5k1/B1p3pp/2Qb1p2/3Pq3/P6P/8/2P3K1/3R1R2 w - - 1 36",
            moves: [
                "g2f2",
                "f8e8",
                "c6e8",
                "e5e8"
            ],
            rating: 2050,
            themes: [
                "advantage",
                "middlegame",
                "quietMove"
            ]
        },
        {
            id: "004Ys",
            fen: "r3qrk1/ppp2ppp/4b3/3P4/1nP2Q2/2N2N1P/PP3KP1/R4R2 w - - 1 15",
            moves: [
                "d5e6",
                "b4d3",
                "f2g1",
                "d3f4"
            ],
            rating: 2320,
            themes: [
                "advantage",
                "defensiveMove",
                "middlegame"
            ]
        },
        {
            id: "002LW",
            fen: "3r1rk1/1b1n1pp1/3p4/p4PPQ/4P3/3q1BN1/8/2R2RK1 b - - 1 28",
            moves: [
                "d7e5",
                "f5f6",
                "e5f3",
                "f1f3"
            ],
            rating: 2464,
            themes: [
                "advantage",
                "middlegame"
            ]
        },
        {
            id: "003md",
            fen: "r1b1k2N/ppp3pp/2n5/2bp4/7q/1B4n1/PPPP1P1P/RNBQ1RK1 w q - 0 10",
            moves: [
                "f1e1",
                "g3e4",
                "e1e4",
                "d5e4",
                "d1h5",
                "h4h5",
                "b3f7",
                "h5f7"
            ],
            rating: 2149,
            themes: [
                "crushing",
                "defensiveMove",
                "middlegame"
            ]
        },
        {
            id: "002Ds",
            fen: "8/1pp5/p2p4/P2Pk2p/1PP1p2P/2n1K2P/3N4/8 b - - 0 45",
            moves: [
                "b7b6",
                "b4b5",
                "c3d1",
                "e3e2",
                "a6b5",
                "a5a6"
            ],
            rating: 2000,
            themes: [
                "crushing",
                "endgame",
                "knightEndgame"
            ]
        }
    ]
};
function PuzzlesPage() {
    const [currentPuzzle, setCurrentPuzzle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [game, setGame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$chess$2e$js$40$1$2e$4$2e$0$2f$node_modules$2f$chess$2e$js$2f$dist$2f$esm$2f$chess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Chess"]());
    const [moveIndex, setMoveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("playing");
    const [showHint, setShowHint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedDifficulty, setSelectedDifficulty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("easy");
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        solved: 0,
        failed: 0
    });
    const [puzzleHistory, setPuzzleHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [historyIndex, setHistoryIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [usedPuzzleIds, setUsedPuzzleIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [boardOrientation, setBoardOrientation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("white");
    const isInitialMount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    // Load a random puzzle from the selected difficulty
    const loadNewPuzzle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((difficulty)=>{
        const puzzles = PUZZLES[difficulty];
        // Filter out already used puzzles
        const availablePuzzles = puzzles.filter((p)=>!usedPuzzleIds.has(p.id));
        // If all puzzles used, reset
        const puzzlePool = availablePuzzles.length > 0 ? availablePuzzles : puzzles;
        // Pick a random puzzle
        const randomIndex = Math.floor(Math.random() * puzzlePool.length);
        const puzzle = puzzlePool[randomIndex];
        // Mark as used
        setUsedPuzzleIds((prev)=>new Set([
                ...prev,
                puzzle.id
            ]));
        // Set up the puzzle
        // Lichess puzzles: FEN is position before opponent's move, moves[0] is opponent's move
        // We need to apply the first move to get the actual puzzle position
        setCurrentPuzzle(puzzle);
        const newGame = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$chess$2e$js$40$1$2e$4$2e$0$2f$node_modules$2f$chess$2e$js$2f$dist$2f$esm$2f$chess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Chess"](puzzle.fen);
        // Apply the opponent's first move (this sets up the puzzle)
        const firstMove = puzzle.moves[0];
        newGame.move({
            from: firstMove.slice(0, 2),
            to: firstMove.slice(2, 4),
            promotion: firstMove.length > 4 ? firstMove[4] : undefined
        });
        setGame(newGame);
        setMoveIndex(1); // Start at 1 since move 0 (opponent's move) is already applied
        setStatus("playing");
        setShowHint(false);
        // Set board orientation based on who solves the puzzle (after opponent's move)
        setBoardOrientation(newGame.turn() === "w" ? "white" : "black");
        // Add to history
        setPuzzleHistory((prev)=>[
                ...prev.slice(0, historyIndex + 1),
                puzzle
            ]);
        setHistoryIndex((prev)=>prev + 1);
    }, [
        historyIndex,
        usedPuzzleIds
    ]);
    // Initial load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadNewPuzzle(selectedDifficulty);
    }, []);
    // Handle difficulty change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }
        loadNewPuzzle(selectedDifficulty);
    }, [
        selectedDifficulty
    ]);
    // Reset current puzzle
    const resetPuzzle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!currentPuzzle) return;
        const newGame = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$chess$2e$js$40$1$2e$4$2e$0$2f$node_modules$2f$chess$2e$js$2f$dist$2f$esm$2f$chess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Chess"](currentPuzzle.fen);
        // Apply the opponent's first move (this sets up the puzzle)
        const firstMove = currentPuzzle.moves[0];
        newGame.move({
            from: firstMove.slice(0, 2),
            to: firstMove.slice(2, 4),
            promotion: firstMove.length > 4 ? firstMove[4] : undefined
        });
        setGame(newGame);
        setMoveIndex(1); // Start at 1 since move 0 (opponent's move) is already applied
        setStatus("playing");
        setShowHint(false);
    }, [
        currentPuzzle
    ]);
    const onDrop = (sourceSquare, targetSquare)=>{
        if (status !== "playing" || !currentPuzzle) return false;
        const expectedMove = currentPuzzle.moves[moveIndex];
        const attemptedMove = sourceSquare + targetSquare;
        // Check if this is the correct move (with or without promotion)
        if (expectedMove?.startsWith(attemptedMove)) {
            try {
                const newGame = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$chess$2e$js$40$1$2e$4$2e$0$2f$node_modules$2f$chess$2e$js$2f$dist$2f$esm$2f$chess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Chess"](game.fen());
                const promotion = expectedMove.length > 4 ? expectedMove[4] : undefined;
                const move = newGame.move({
                    from: sourceSquare,
                    to: targetSquare,
                    promotion: promotion
                });
                if (move) {
                    setGame(newGame);
                    // Check if puzzle is complete
                    if (moveIndex + 1 >= currentPuzzle.moves.length) {
                        setStatus("solved");
                        setScore((prev)=>({
                                ...prev,
                                solved: prev.solved + 1
                            }));
                    } else {
                        // Make opponent's response move
                        const nextMoveIndex = moveIndex + 1;
                        const opponentMove = currentPuzzle.moves[nextMoveIndex];
                        if (opponentMove) {
                            setTimeout(()=>{
                                const gameAfterOpponent = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$chess$2e$js$40$1$2e$4$2e$0$2f$node_modules$2f$chess$2e$js$2f$dist$2f$esm$2f$chess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Chess"](newGame.fen());
                                try {
                                    gameAfterOpponent.move({
                                        from: opponentMove.slice(0, 2),
                                        to: opponentMove.slice(2, 4),
                                        promotion: opponentMove.length > 4 ? opponentMove[4] : undefined
                                    });
                                    setGame(gameAfterOpponent);
                                    setMoveIndex(nextMoveIndex + 1);
                                } catch  {
                                    setMoveIndex(nextMoveIndex);
                                }
                            }, 300);
                        } else {
                            setMoveIndex(nextMoveIndex);
                        }
                    }
                    return true;
                }
            } catch  {
                return false;
            }
        } else {
            // Wrong move
            setStatus("failed");
            setScore((prev)=>({
                    ...prev,
                    failed: prev.failed + 1
                }));
        }
        return false;
    };
    const nextPuzzle = ()=>{
        loadNewPuzzle(selectedDifficulty);
    };
    const prevPuzzle = ()=>{
        if (historyIndex > 0) {
            const prevIndex = historyIndex - 1;
            const puzzle = puzzleHistory[prevIndex];
            setCurrentPuzzle(puzzle);
            const newGame = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$chess$2e$js$40$1$2e$4$2e$0$2f$node_modules$2f$chess$2e$js$2f$dist$2f$esm$2f$chess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Chess"](puzzle.fen);
            // Apply the opponent's first move (this sets up the puzzle)
            const firstMove = puzzle.moves[0];
            newGame.move({
                from: firstMove.slice(0, 2),
                to: firstMove.slice(2, 4),
                promotion: firstMove.length > 4 ? firstMove[4] : undefined
            });
            setGame(newGame);
            setMoveIndex(1); // Start at 1 since move 0 (opponent's move) is already applied
            setStatus("playing");
            setShowHint(false);
            setBoardOrientation(newGame.turn() === "w" ? "white" : "black");
            setHistoryIndex(prevIndex);
        }
    };
    const getDifficultyColor = (diff)=>{
        switch(diff){
            case "easy":
                return "text-green-400 bg-green-900/30 border-green-700/50";
            case "medium":
                return "text-yellow-400 bg-yellow-900/30 border-yellow-700/50";
            case "hard":
                return "text-orange-400 bg-orange-900/30 border-orange-700/50";
            case "master":
                return "text-red-400 bg-red-900/30 border-red-700/50";
        }
    };
    const getDifficultyLabel = (diff)=>{
        switch(diff){
            case "easy":
                return "Easy (800-1000)";
            case "medium":
                return "Medium (1200-1400)";
            case "hard":
                return "Hard (1600-1800)";
            case "master":
                return "Master (2000+)";
        }
    };
    const formatThemes = (themes)=>{
        return themes.map((t)=>t.replace(/([A-Z])/g, ' $1').trim()).map((t)=>t.charAt(0).toUpperCase() + t.slice(1)).slice(0, 3);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-b from-amber-950 via-stone-900 to-stone-950 py-12 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-serif text-4xl md:text-5xl font-bold text-amber-100 mb-4",
                            children: "♟ Chess Puzzles"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                            lineNumber: 364,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-amber-200/60 font-serif italic text-lg",
                            children: "Sharpen your tactics with puzzles across all skill levels"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                            lineNumber: 367,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                    lineNumber: 363,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex rounded-lg border border-amber-800/50 bg-stone-900/80 p-1 gap-1",
                        children: [
                            "easy",
                            "medium",
                            "hard",
                            "master"
                        ].map((diff)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedDifficulty(diff),
                                className: `px-4 py-2 rounded-md font-serif text-sm transition-all ${selectedDifficulty === diff ? getDifficultyColor(diff) + " shadow-lg" : "text-amber-200/70 hover:text-amber-100 hover:bg-stone-800"}`,
                                children: diff.charAt(0).toUpperCase() + diff.slice(1)
                            }, diff, false, {
                                fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                lineNumber: 376,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                        lineNumber: 374,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                    lineNumber: 373,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 bg-stone-900/80 rounded-lg px-4 py-2 border border-amber-800/30",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-green-400",
                                children: [
                                    "✓ ",
                                    score.solved
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                lineNumber: 394,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-stone-600",
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                lineNumber: 395,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-400",
                                children: [
                                    "✗ ",
                                    score.failed
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                lineNumber: 396,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                        lineNumber: 393,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                    lineNumber: 392,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full max-w-[500px] aspect-square relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$react$2d$chessboard$40$4$2e$7$2e$3_$40$types$2b$node$40$20$2e$19$2e$30_$40$types$2b$react$40$19$2e$2$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$chessboard$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Chessboard"], {
                                        position: game.fen(),
                                        onPieceDrop: onDrop,
                                        boardOrientation: boardOrientation,
                                        customBoardStyle: {
                                            borderRadius: "4px",
                                            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)"
                                        },
                                        customDarkSquareStyle: {
                                            backgroundColor: "#b58863"
                                        },
                                        customLightSquareStyle: {
                                            backgroundColor: "#f0d9b5"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                        lineNumber: 404,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                    lineNumber: 403,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 text-center",
                                    children: [
                                        status === "playing" && currentPuzzle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-amber-300 font-serif",
                                            children: [
                                                game.turn() === "w" ? "White" : "Black",
                                                " to move - Find the best move!"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                            lineNumber: 420,
                                            columnNumber: 17
                                        }, this),
                                        status === "solved" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-green-400 font-serif text-xl",
                                            children: "✓ Brilliant! Puzzle Solved!"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                            lineNumber: 425,
                                            columnNumber: 17
                                        }, this),
                                        status === "failed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-400 font-serif text-xl",
                                            children: "✗ Not quite - Try again!"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                            lineNumber: 430,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                    lineNumber: 418,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: prevPuzzle,
                                            disabled: historyIndex <= 0,
                                            className: "px-4 py-2 bg-stone-800 hover:bg-stone-700 disabled:bg-stone-900 disabled:text-stone-600 text-amber-100 rounded border border-stone-700 transition-all",
                                            children: "← Prev"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                            lineNumber: 438,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: resetPuzzle,
                                            className: "px-4 py-2 bg-amber-800 hover:bg-amber-700 text-amber-100 rounded border border-amber-700 transition-all",
                                            children: "Reset"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                            lineNumber: 445,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: nextPuzzle,
                                            className: "px-4 py-2 bg-stone-800 hover:bg-stone-700 text-amber-100 rounded border border-stone-700 transition-all",
                                            children: "Next →"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                            lineNumber: 451,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                    lineNumber: 437,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                            lineNumber: 402,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-br from-amber-950/60 to-stone-900/80 rounded-lg border border-amber-800/30 p-6",
                                    children: currentPuzzle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "font-serif text-2xl font-bold text-amber-100",
                                                                children: [
                                                                    "Puzzle #",
                                                                    currentPuzzle.id
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                                lineNumber: 468,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-amber-400/60 text-sm mt-1",
                                                                children: [
                                                                    "Rating: ~",
                                                                    currentPuzzle.rating
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                                lineNumber: 471,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                        lineNumber: 467,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `px-3 py-1 rounded-full text-xs border ${getDifficultyColor(selectedDifficulty)}`,
                                                        children: getDifficultyLabel(selectedDifficulty)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                        lineNumber: 475,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                lineNumber: 466,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-amber-400 text-sm font-semibold mb-2",
                                                                children: "Themes"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                                lineNumber: 482,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap gap-2",
                                                                children: formatThemes(currentPuzzle.themes).map((theme, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "px-3 py-1 bg-amber-900/40 text-amber-300 text-sm rounded-full border border-amber-700/30",
                                                                        children: [
                                                                            "♔ ",
                                                                            theme
                                                                        ]
                                                                    }, i, true, {
                                                                        fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                                        lineNumber: 485,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                                lineNumber: 483,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                        lineNumber: 481,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setShowHint(!showHint),
                                                                className: "text-amber-400 text-sm hover:text-amber-300 transition-colors",
                                                                children: showHint ? "Hide Hint ▲" : "Show Hint ▼"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                                lineNumber: 494,
                                                                columnNumber: 23
                                                            }, this),
                                                            showHint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-amber-200/60 text-sm mt-2 italic border-l-2 border-amber-700 pl-3",
                                                                children: [
                                                                    "💡 Look for ",
                                                                    formatThemes(currentPuzzle.themes)[0]?.toLowerCase() || "tactics",
                                                                    "!",
                                                                    currentPuzzle.moves.length > 2 && ` This is a ${Math.ceil(currentPuzzle.moves.length / 2)}-move combination.`
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                                lineNumber: 501,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                        lineNumber: 493,
                                                        columnNumber: 21
                                                    }, this),
                                                    (status === "solved" || status === "failed") && currentPuzzle.moves.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pt-4 border-t border-amber-800/30",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-amber-400 text-sm font-semibold mb-2",
                                                                children: "Solution"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                                lineNumber: 511,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap gap-2",
                                                                children: currentPuzzle.moves.map((move, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "px-2 py-1 bg-stone-800/50 text-amber-200 text-sm rounded font-mono",
                                                                        children: [
                                                                            i % 2 === 0 ? `${Math.floor(i / 2) + 1}.` : "",
                                                                            " ",
                                                                            move
                                                                        ]
                                                                    }, i, true, {
                                                                        fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                                        lineNumber: 514,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                                lineNumber: 512,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                        lineNumber: 510,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pt-4 border-t border-amber-800/30",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-amber-400 text-sm font-semibold mb-2",
                                                                children: "View on Lichess"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                                lineNumber: 524,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: `https://lichess.org/training/${currentPuzzle.id}`,
                                                                        target: "_blank",
                                                                        rel: "noopener noreferrer",
                                                                        className: "inline-flex items-center gap-2 px-3 py-2 bg-amber-700/30 hover:bg-amber-600/40 text-amber-200 text-sm rounded border border-amber-600/50 transition-colors",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                className: "w-4 h-4",
                                                                                viewBox: "0 0 50 50",
                                                                                fill: "currentColor",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    d: "M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 2 2 0 0 0 23 13 A 2 2 0 0 0 25 15 A 2 2 0 0 0 27 13 A 2 2 0 0 0 25 11 z M 21 18 L 21 21 L 24 21 L 24 36 L 21 36 L 21 39 L 29 39 L 29 36 L 26 36 L 26 18 L 21 18 z"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                                                    lineNumber: 533,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                                                lineNumber: 532,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            "Open Puzzle on Lichess"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                                        lineNumber: 526,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: `https://lichess.org/analysis/${currentPuzzle.fen.replace(/ /g, '_')}`,
                                                                        target: "_blank",
                                                                        rel: "noopener noreferrer",
                                                                        className: "inline-flex items-center gap-2 px-3 py-2 bg-stone-800/50 hover:bg-stone-700/50 text-amber-200/70 text-sm rounded border border-stone-700/50 transition-colors",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                className: "w-4 h-4",
                                                                                viewBox: "0 0 24 24",
                                                                                fill: "none",
                                                                                stroke: "currentColor",
                                                                                strokeWidth: "2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                        d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                                                        lineNumber: 544,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                        cx: "12",
                                                                                        cy: "12",
                                                                                        r: "3"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                                                        lineNumber: 545,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                                                lineNumber: 543,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            "Analyze Position"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                                        lineNumber: 537,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                                lineNumber: 525,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-amber-100/40 text-xs mt-3",
                                                                children: [
                                                                    "Puzzles sourced from the",
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "https://lichess.org/training",
                                                                        target: "_blank",
                                                                        rel: "noopener noreferrer",
                                                                        className: "text-amber-400 hover:text-amber-300 underline",
                                                                        children: "Lichess Puzzle Database"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                                        lineNumber: 552,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                                lineNumber: 550,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                        lineNumber: 523,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                lineNumber: 480,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center py-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-amber-200/60",
                                            children: "Loading puzzle..."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                            lineNumber: 566,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                        lineNumber: 565,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                    lineNumber: 463,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-stone-900/50 rounded-lg border border-stone-700/30 p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-serif text-lg font-bold text-amber-100 mb-3",
                                            children: "♜ Puzzle Tips"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                            lineNumber: 573,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2 text-amber-100/60 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-amber-600",
                                                            children: "•"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                            lineNumber: 578,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Look for checks, captures, and threats first"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                    lineNumber: 577,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-amber-600",
                                                            children: "•"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                            lineNumber: 582,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Consider what your opponent wants to do"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                    lineNumber: 581,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-amber-600",
                                                            children: "•"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                            lineNumber: 586,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Look for pins, forks, and skewers"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                    lineNumber: 585,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-amber-600",
                                                            children: "•"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                            lineNumber: 590,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Don't rush - visualization is key!"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                    lineNumber: 589,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                            lineNumber: 576,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                    lineNumber: 572,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-stone-900/50 rounded-lg border border-stone-700/30 p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-serif text-lg font-bold text-amber-100 mb-3",
                                            children: "Difficulty Levels"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                            lineNumber: 598,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-3 h-3 rounded-full bg-green-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                            lineNumber: 603,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-green-400 text-sm",
                                                            children: "Easy (800-1000)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                            lineNumber: 604,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                    lineNumber: 602,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-3 h-3 rounded-full bg-yellow-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                            lineNumber: 607,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-yellow-400 text-sm",
                                                            children: "Medium (1200-1400)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                            lineNumber: 608,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                    lineNumber: 606,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-3 h-3 rounded-full bg-orange-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                            lineNumber: 611,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-orange-400 text-sm",
                                                            children: "Hard (1600-1800)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                            lineNumber: 612,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                    lineNumber: 610,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-3 h-3 rounded-full bg-red-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                            lineNumber: 615,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-400 text-sm",
                                                            children: "Master (2000+)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                            lineNumber: 616,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                                    lineNumber: 614,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                            lineNumber: 601,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-amber-100/40 text-xs mt-3",
                                            children: "30 curated puzzles per difficulty level"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                            lineNumber: 619,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                                    lineNumber: 597,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                            lineNumber: 461,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
                    lineNumber: 400,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
            lineNumber: 361,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/chess-retro/app/puzzles/page.tsx",
        lineNumber: 360,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_chess-retro_app_puzzles_page_tsx_45ca969d._.js.map