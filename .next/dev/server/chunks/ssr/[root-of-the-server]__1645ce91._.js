module.exports = [
"[project]/Desktop/chess-retro/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/chess-retro/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/chess-retro/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/chess-retro/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Desktop/chess-retro/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/chess-retro/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/chess-retro/app/classic-games/gameData.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getGameById",
    ()=>getGameById,
    "getLegendById",
    ()=>getLegendById,
    "legends",
    ()=>legends
]);
const legends = [
    {
        id: "bobby-fischer",
        name: "Bobby Fischer",
        years: "1943-2008",
        title: "11th World Champion",
        country: "🇺🇸 USA",
        description: "The greatest American chess player, known for his extraordinary talent, deep opening preparation, and uncompromising will to win. His 1972 World Championship victory against Spassky was dubbed 'The Match of the Century'.",
        style: "Universal, precise, relentless",
        peakRating: 2785,
        worldChampion: "1972-1975",
        games: [
            {
                id: "fischer-game-of-century",
                title: "Game of the Century",
                white: "Donald Byrne",
                black: "Bobby Fischer",
                year: 1956,
                event: "Rosenwald Memorial, New York",
                result: "0-1",
                description: "A 13-year-old Bobby Fischer stuns the chess world with a queen sacrifice that leads to a winning attack. This game announced Fischer's arrival as a chess genius.",
                opening: "Grünfeld Defense",
                keyMoves: "17...Be6!! 18. Bxb6 Bxc4+ 19. Kg1 Ne2+ 20. Kf1 Nxd4+",
                lessons: [
                    "Piece activity over material",
                    "The windmill tactic",
                    "Young talent can beat experience"
                ],
                pgn: "1. Nf3 Nf6 2. c4 g6 3. Nc3 Bg7 4. d4 O-O 5. Bf4 d5 6. Qb3 dxc4 7. Qxc4 c6 8. e4 Nbd7 9. Rd1 Nb6 10. Qc5 Bg4 11. Bg5 Na4 12. Qa3 Nxc3 13. bxc3 Nxe4 14. Bxe7 Qb6 15. Bc4 Nxc3 16. Bc5 Rfe8+ 17. Kf1 Be6 18. Bxb6 Bxc4+ 19. Kg1 Ne2+ 20. Kf1 Nxd4+ 21. Kg1 Ne2+ 22. Kf1 Nc3+ 23. Kg1 axb6 24. Qb4 Ra4 25. Qxb6 Nxd1 26. h3 Rxa2 27. Kh2 Nxf2 28. Re1 Rxe1 29. Qd8+ Bf8 30. Nxe1 Bd5 31. Nf3 Ne4 32. Qb8 b5 33. h4 h5 34. Ne5 Kg7 35. Kg1 Bc5+ 36. Kf1 Ng3+ 37. Ke1 Bb4+ 38. Kd1 Bb3+ 39. Kc1 Ne2+ 40. Kb1 Nc3+ 41. Kc1 Ra1# 0-1"
            },
            {
                id: "fischer-spassky-g6",
                title: "Fischer vs Spassky - Game 6",
                white: "Bobby Fischer",
                black: "Boris Spassky",
                year: 1972,
                event: "World Championship, Reykjavik",
                result: "1-0",
                description: "Considered one of the greatest games ever played. Fischer's masterful handling of the Queen's Gambit Declined led to a beautiful endgame victory that shifted the momentum of the match.",
                opening: "Queen's Gambit Declined",
                keyMoves: "21. Bf4! Qb7 22. a4! with a lasting queenside bind",
                lessons: [
                    "Positional mastery",
                    "Exploiting weak squares",
                    "Converting small advantages"
                ],
                pgn: "1. c4 e6 2. Nf3 d5 3. d4 Nf6 4. Nc3 Be7 5. Bg5 O-O 6. e3 h6 7. Bh4 b6 8. cxd5 Nxd5 9. Bxe7 Qxe7 10. Nxd5 exd5 11. Rc1 Be6 12. Qa4 c5 13. Qa3 Rc8 14. Bb5 a6 15. dxc5 bxc5 16. O-O Ra7 17. Be2 Nd7 18. Nd4 Qf8 19. Nxe6 fxe6 20. e4 d4 21. f4 Qe7 22. e5 Rb8 23. Bc4 Kh8 24. Qh3 Nf8 25. b3 a5 26. f5 exf5 27. Rxf5 Nh7 28. Rcf1 Qd8 29. Qg3 Re7 30. h4 Rbb7 31. e6 Rbc7 32. Qe5 Qe8 33. a4 Qd8 34. R1f2 Qe8 35. R2f3 Qd8 36. Bd3 Qe8 37. Qe4 Nf6 38. Rxf6 gxf6 39. Rxf6 Kg8 40. Bc4 Kh8 41. Qf4 1-0"
            },
            {
                id: "fischer-larsen",
                title: "Fischer's Immortal",
                white: "Bobby Fischer",
                black: "Bent Larsen",
                year: 1971,
                event: "Candidates Match, Denver",
                result: "1-0",
                description: "Fischer crushes Larsen with a devastating attack in the Sicilian. The combination starting with 23.Rxf7! is one of the most famous in chess history.",
                opening: "Sicilian Defense, Sozin Attack",
                keyMoves: "23. Rxf7!! Rxf7 24. e6! and White wins material with a crushing attack",
                lessons: [
                    "Piece coordination",
                    "Tactical alertness",
                    "Exploiting king safety"
                ],
                pgn: "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bc4 e6 7. Bb3 b5 8. O-O Be7 9. Be3 O-O 10. f4 b4 11. Na4 Nxe4 12. Bd5 Ra7 13. Bxe4 d5 14. Bd3 Qb6 15. Kh1 Nd7 16. Qf3 Nf6 17. Nb3 Qc7 18. f5 e5 19. Bf2 Bd7 20. Nc5 Bc6 21. Qg3 Kh8 22. Bg1 Rg8 23. Rxf6 gxf6 24. Bxh7 Kxh7 25. Qh4+ Kg7 26. Qxf6+ Kh7 27. Qf7+ Kh6 28. Ne6 1-0"
            }
        ]
    },
    {
        id: "garry-kasparov",
        name: "Garry Kasparov",
        years: "1963-",
        title: "13th World Champion",
        country: "🇷🇺 Russia",
        description: "Dominated chess for 20 years with his fierce competitive spirit and deep preparation. Known for his dynamic attacking style and contributions to opening theory.",
        style: "Dynamic, aggressive, deeply prepared",
        peakRating: 2851,
        worldChampion: "1985-2000",
        games: [
            {
                id: "kasparov-topalov",
                title: "Kasparov's Immortal",
                white: "Garry Kasparov",
                black: "Veselin Topalov",
                year: 1999,
                event: "Wijk aan Zee",
                result: "1-0",
                description: "Kasparov produces one of the greatest games of the modern era, sacrificing his rook for an unstoppable attack. The king hunt that follows is breathtaking.",
                opening: "Pirc Defense",
                keyMoves: "24. Rxd4!! cxd4 25. Re7+! Kb6 26. Qxd4+ Kxa5 27. b4+!",
                lessons: [
                    "Intuition in complex positions",
                    "King hunt",
                    "Spectacular sacrifices can be sound"
                ],
                pgn: "1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 Bg7 5. Qd2 c6 6. f3 b5 7. Nge2 Nbd7 8. Bh6 Bxh6 9. Qxh6 Bb7 10. a3 e5 11. O-O-O Qe7 12. Kb1 a6 13. Nc1 O-O-O 14. Nb3 exd4 15. Rxd4 c5 16. Rd1 Nb6 17. g3 Kb8 18. Na5 Ba8 19. Bh3 d5 20. Qf4+ Ka7 21. Rhe1 d4 22. Nd5 Nbxd5 23. exd5 Qd6 24. Rxd4 cxd4 25. Re7+ Kb6 26. Qxd4+ Kxa5 27. b4+ Ka4 28. Qc3 Qxd5 29. Ra7 Bb7 30. Rxb7 Qc4 31. Qxf6 Kxa3 32. Qxa6+ Kxb4 33. c3+ Kxc3 34. Qa1+ Kd2 35. Qb2+ Kd1 36. Bf1 Rd2 37. Rd7 Rxd7 38. Bxc4 bxc4 39. Qxh8 Rd3 40. Qa8 c3 41. Qa4+ Ke1 42. f4 f5 43. Kc1 Rd2 44. Qa7 1-0"
            },
            {
                id: "kasparov-karpov-1985",
                title: "Kasparov Becomes Champion",
                white: "Garry Kasparov",
                black: "Anatoly Karpov",
                year: 1985,
                event: "World Championship, Game 24",
                result: "1-0",
                description: "The game that made Kasparov the youngest World Champion in history at 22. A tense Sicilian battle where Kasparov's preparation and nerves proved superior.",
                opening: "Sicilian Scheveningen",
                keyMoves: "24. Nd5! exd5 25. exd5+ Kb8 26. Bf4 with a winning attack",
                lessons: [
                    "Preparation at the highest level",
                    "Nerves of steel",
                    "Dynamic piece play"
                ],
                pgn: "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nb5 d6 6. c4 Nf6 7. N1c3 a6 8. Na3 d5 9. cxd5 exd5 10. exd5 Nb4 11. Be2 Bc5 12. O-O O-O 13. Bf3 Bf5 14. Bg5 Re8 15. Qd2 b5 16. Rad1 Nd3 17. Nab1 h6 18. Bh4 b4 19. Na4 Bd6 20. Bg3 Rc8 21. b3 g5 22. Bxd6 Qxd6 23. g3 Nd7 24. Bg2 Qf6 25. a3 a5 26. axb4 axb4 27. Qa2 Bg6 28. d6 g4 29. Qd2 Kg7 30. f3 Qxd6 31. fxg4 Qd4+ 32. Kh1 Nf6 33. Rf4 Ne4 34. Qxd3 Nf2+ 35. Rxf2 Bxd3 36. Rfd2 Qe3 37. Rxd3 Rc1 38. Nb2 Qf2 39. Nd2 Rxd1+ 40. Nxd1 Re1+ 1-0"
            },
            {
                id: "kasparov-deep-blue",
                title: "Kasparov vs Deep Blue - Game 1",
                white: "Garry Kasparov",
                black: "Deep Blue",
                year: 1996,
                event: "Man vs Machine, Philadelphia",
                result: "1-0",
                description: "The first game of the historic match between Kasparov and IBM's Deep Blue. Kasparov showed that human creativity could still triumph over machine calculation.",
                opening: "Sicilian Defense",
                keyMoves: "44. Bd4! with a winning endgame technique",
                lessons: [
                    "Human intuition vs calculation",
                    "Endgame technique",
                    "Exploiting computer weaknesses"
                ],
                pgn: "1. e4 c5 2. c3 d5 3. exd5 Qxd5 4. d4 Nf6 5. Nf3 Bg4 6. Be2 e6 7. h3 Bh5 8. O-O Nc6 9. Be3 cxd4 10. cxd4 Bb4 11. a3 Ba5 12. Nc3 Qd6 13. Nb5 Qe7 14. Ne5 Bxe2 15. Qxe2 O-O 16. Rac1 Rac8 17. Bg5 Bb6 18. Bxf6 gxf6 19. Nc4 Rfd8 20. Nxb6 axb6 21. Rfd1 f5 22. Qe3 Qf6 23. d5 Rxd5 24. Rxd5 exd5 25. b3 Kh8 26. Qxb6 Rg8 27. Qc5 d4 28. Nd6 f4 29. Nxb7 Ne5 30. Qd5 f3 31. g3 Nd3 32. Rc7 Re8 33. Nd6 Re1+ 34. Kh2 Nxf2 35. Nxf7+ Kg7 36. Ng5+ Kh6 37. Rxh7+ 1-0"
            }
        ]
    },
    {
        id: "mikhail-tal",
        name: "Mikhail Tal",
        years: "1936-1992",
        title: "8th World Champion",
        country: "🇱🇻 Latvia/USSR",
        description: "Known as 'The Magician from Riga', Tal was famous for his daring sacrifices and combinational genius. His attacking style brought a new level of excitement to chess.",
        style: "Attacking, sacrificial, intuitive",
        peakRating: 2705,
        worldChampion: "1960-1961",
        games: [
            {
                id: "tal-larsen",
                title: "The Brilliancy Prize",
                white: "Mikhail Tal",
                black: "Bent Larsen",
                year: 1965,
                event: "Candidates Match",
                result: "1-0",
                description: "Tal the Magician produces one of his most spectacular games, with sacrifices that even computers struggle to fully understand.",
                opening: "Sicilian Defense",
                keyMoves: "17. exd5 f5 18. Rde1 Rf7 19. h4 Bb7 20. Bxf5!",
                lessons: [
                    "Sometimes sacrifices defy calculation",
                    "Piece coordination",
                    "Pressure leads to mistakes"
                ],
                pgn: "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 e6 5. Nc3 d6 6. Be3 Nf6 7. f4 Be7 8. Qf3 O-O 9. O-O-O Qc7 10. Ndb5 Qb8 11. g4 a6 12. Nd4 Nxd4 13. Bxd4 b5 14. g5 Nd7 15. Bd3 b4 16. Nd5 exd5 17. exd5 f5 18. Rde1 Rf7 19. h4 Bb7 20. Bxf5 Rxf5 21. Rxe7 Ne5 22. Qe4 Qf8 23. fxe5 Rf1+ 24. Rxf1 Qxe7 25. e6 Rc8 26. Qg4 Bc6 27. Rf7 Qe8 28. Be5 1-0"
            },
            {
                id: "tal-botvinnik-1960",
                title: "Tal's Championship Attack",
                white: "Mikhail Tal",
                black: "Mikhail Botvinnik",
                year: 1960,
                event: "World Championship, Game 6",
                result: "1-0",
                description: "From the match where Tal became World Champion. A typically wild Tal game with piece sacrifices leading to a beautiful mating attack.",
                opening: "French Defense",
                keyMoves: "21. Nf5!! gxf5 22. gxf5 and Black's position collapses",
                lessons: [
                    "Attacking the king",
                    "Piece sacrifice for initiative",
                    "Using all pieces in attack"
                ],
                pgn: "1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 Bxc3+ 6. bxc3 Ne7 7. Qg4 O-O 8. Bd3 Nbc6 9. Qh5 Ng6 10. Nf3 Qc7 11. Be3 Nce7 12. h4 c4 13. Bxg6 hxg6 14. Qg5 Bd7 15. h5 gxh5 16. Rxh5 Qd8 17. Qg3 Kh7 18. g4 Rg8 19. Kf1 Qf8 20. Rh4 Nf5 21. Nf5 gxf5 22. gxf5 exf5 23. Qh3+ Kg7 24. Bh6+ Kf6 25. Qg3 Be6 26. Bxf8 Raxf8 27. Qg5+ Ke7 28. Qxf5 1-0"
            },
            {
                id: "tal-smyslov",
                title: "Tal's Piece Sacrifice",
                white: "Mikhail Tal",
                black: "Vasily Smyslov",
                year: 1959,
                event: "Candidates Tournament, Yugoslavia",
                result: "1-0",
                description: "Tal sacrifices a full piece for an attack that seems to come from nothing. Pure Tal magic against a former World Champion.",
                opening: "Sicilian Defense, Najdorf",
                keyMoves: "15. Bxe6!! fxe6 16. Nxe6 Qc8 17. Nxc5!",
                lessons: [
                    "Intuitive sacrifices",
                    "Calculating complications",
                    "Exploiting uncastled king"
                ],
                pgn: "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 Nbd7 7. Bc4 Qa5 8. Qd2 e6 9. O-O-O Be7 10. Rhe1 Nc5 11. Bb3 h6 12. Bh4 Nxb3+ 13. cxb3 Qc5 14. f3 Bd7 15. Bxe6 fxe6 16. Nxe6 Qc8 17. Nxg7+ Kf8 18. e5 Bxg7 19. exf6 Bxf6 20. Re3 Bxh4 21. Qxh4 Qg4 22. Rxd6 Qxh4 23. Rxd7 Qg5+ 24. Kb1 Rh7 25. f4 Qg4 26. Nd5 Qd4 27. Re1 1-0"
            }
        ]
    },
    {
        id: "jose-capablanca",
        name: "José Raúl Capablanca",
        years: "1888-1942",
        title: "3rd World Champion",
        country: "🇨🇺 Cuba",
        description: "Known as 'The Chess Machine' for his seemingly effortless play. Capablanca had an extraordinary natural talent and was famous for his endgame mastery and clear positional style.",
        style: "Effortless, clear, endgame mastery",
        peakRating: 2725,
        worldChampion: "1921-1927",
        games: [
            {
                id: "capablanca-marshall",
                title: "Capablanca's Defense",
                white: "José Raúl Capablanca",
                black: "Frank Marshall",
                year: 1918,
                event: "New York",
                result: "1-0",
                description: "Marshall unveiled his secret weapon (the Marshall Attack) that he had prepared for 8 years. Capablanca refuted it over the board with cool precision.",
                opening: "Ruy Lopez, Marshall Attack",
                keyMoves: "22. Qh3! Rae8+ 23. Kd3 Qf1+ 24. Kc2 Bf2 25. Qf3",
                lessons: [
                    "Preparation meets talent",
                    "Defense can be beautiful",
                    "Endgame technique"
                ],
                pgn: "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 Nxd5 10. Nxe5 Nxe5 11. Rxe5 Nf6 12. Re1 Bd6 13. h3 Ng4 14. Qf3 Qh4 15. d4 Nxf2 16. Re2 Bg4 17. hxg4 Bh2+ 18. Kf1 Bg3 19. Rxf2 Qh1+ 20. Ke2 Bxf2 21. Bd2 Bh4 22. Qh3 Rae8+ 23. Kd3 Qf1+ 24. Kc2 Bf2 25. Qf3 Qg1 26. Bd5 c5 27. dxc5 Bxc5 28. b4 Bd6 29. a4 a5 30. axb5 axb4 31. Ra6 bxc3 32. Nxc3 Bb4 33. b6 Bxc3 34. Bxc3 h6 35. b7 Re3 36. Bxf7+ 1-0"
            },
            {
                id: "capablanca-bernstein",
                title: "The Exchange Sacrifice",
                white: "Ossip Bernstein",
                black: "José Raúl Capablanca",
                year: 1914,
                event: "Moscow",
                result: "0-1",
                description: "Capablanca demonstrates his legendary endgame technique, winning with an elegant combination after a long strategic battle.",
                opening: "Queen's Gambit Declined",
                keyMoves: "29...Qb2!! threatening both Rxc3 and Qb1+ winning the rook",
                lessons: [
                    "Queen power in the endgame",
                    "Tactical alertness",
                    "Simplification to winning endgames"
                ],
                pgn: "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Nf3 Be7 5. Bg5 O-O 6. e3 Nbd7 7. Rc1 b6 8. cxd5 exd5 9. Qa4 Bb7 10. Ba6 Bxa6 11. Qxa6 c5 12. Bxf6 Nxf6 13. dxc5 bxc5 14. O-O Qb6 15. Qe2 c4 16. Rfd1 Rfd8 17. Nd4 Bb4 18. b3 Rac8 19. bxc4 dxc4 20. Rc2 Bxc3 21. Rxc3 Nd5 22. Rc2 c3 23. Rdc1 Rc5 24. Nb3 Rc6 25. Na5 Rc5 26. Nb3 Rc4 27. Qa6 Qb4 28. Nd2 Rc7 29. Ne4 Qb2 30. Qd3 Rdc8 0-1"
            }
        ]
    },
    {
        id: "paul-morphy",
        name: "Paul Morphy",
        years: "1837-1884",
        title: "Unofficial World Champion",
        country: "🇺🇸 USA",
        description: "The pride of American chess, Morphy dominated the chess world in the 1850s with his extraordinary attacking genius. His games remain models of rapid development and piece coordination.",
        style: "Rapid development, open positions, attacking",
        games: [
            {
                id: "morphy-opera",
                title: "The Opera Game",
                white: "Paul Morphy",
                black: "Duke of Brunswick & Count Isouard",
                year: 1858,
                event: "Paris Opera House",
                result: "1-0",
                description: "Played during an opera performance, Morphy demonstrated the importance of rapid development against two consulting amateurs. The perfect teaching game.",
                opening: "Philidor Defense",
                keyMoves: "13. Rxd7! Rxd7 14. Rd1 Qe6 15. Bxd7+ Nxd7 16. Qb8+! Nxb8 17. Rd8#",
                lessons: [
                    "Develop all pieces quickly",
                    "Control the center",
                    "Open files for rooks"
                ],
                pgn: "1. e4 e5 2. Nf3 d6 3. d4 Bg4 4. dxe5 Bxf3 5. Qxf3 dxe5 6. Bc4 Nf6 7. Qb3 Qe7 8. Nc3 c6 9. Bg5 b5 10. Nxb5 cxb5 11. Bxb5+ Nbd7 12. O-O-O Rd8 13. Rxd7 Rxd7 14. Rd1 Qe6 15. Bxd7+ Nxd7 16. Qb8+ Nxb8 17. Rd8# 1-0"
            },
            {
                id: "morphy-paulsen",
                title: "The Queen Sacrifice",
                white: "Paul Morphy",
                black: "Louis Paulsen",
                year: 1857,
                event: "First American Chess Congress, New York",
                result: "1-0",
                description: "One of the most famous queen sacrifices in history. Morphy gives up his queen for a forced mate sequence.",
                opening: "Four Knights Game",
                keyMoves: "17. Qxf6!! gxf6 18. Bxf6 with unstoppable mate",
                lessons: [
                    "Queen sacrifice",
                    "Mating patterns",
                    "Piece coordination"
                ],
                pgn: "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Bc5 5. O-O O-O 6. Nxe5 Re8 7. Nxc6 dxc6 8. Bc4 b5 9. Be2 Nxe4 10. Nxe4 Rxe4 11. Bf3 Re6 12. c3 Qd3 13. b4 Bb6 14. a4 bxa4 15. Qxa4 Bd7 16. Ra2 Rae8 17. Qa6 Qxf3 18. gxf3 Rg6+ 19. Kh1 Bh3 20. Rd1 Bg2+ 21. Kg1 Bxf3+ 22. Kf1 Bg2+ 23. Kg1 Bh3+ 24. Kh1 Bxf2 25. Qf1 Bxf1 26. Rxf1 Re2 27. Ra1 Rh6 28. d4 Be3 0-1"
            }
        ]
    },
    {
        id: "adolf-anderssen",
        name: "Adolf Anderssen",
        years: "1818-1879",
        title: "Romantic Era Champion",
        country: "🇩🇪 Germany",
        description: "The leading chess player of the romantic era, famous for his brilliant sacrificial attacks. His games 'The Immortal' and 'The Evergreen' remain two of the most celebrated in chess history.",
        style: "Romantic, sacrificial, attacking",
        games: [
            {
                id: "anderssen-immortal",
                title: "The Immortal Game",
                white: "Adolf Anderssen",
                black: "Lionel Kieseritzky",
                year: 1851,
                event: "Casual game, London",
                result: "1-0",
                description: "The most famous chess game ever played. Anderssen sacrificed both rooks, his bishop, and his queen to deliver checkmate with just three minor pieces.",
                opening: "King's Gambit Accepted",
                keyMoves: "18. Bd6! Bxg1 19. e5! Qxa1+ 20. Ke2 Na6 21. Nxg7+ Kd8 22. Qf6+! Nxf6 23. Be7#",
                lessons: [
                    "Development over material",
                    "King safety is paramount",
                    "Attack with all pieces"
                ],
                pgn: "1. e4 e5 2. f4 exf4 3. Bc4 Qh4+ 4. Kf1 b5 5. Bxb5 Nf6 6. Nf3 Qh6 7. d3 Nh5 8. Nh4 Qg5 9. Nf5 c6 10. g4 Nf6 11. Rg1 cxb5 12. h4 Qg6 13. h5 Qg5 14. Qf3 Ng8 15. Bxf4 Qf6 16. Nc3 Bc5 17. Nd5 Qxb2 18. Bd6 Bxg1 19. e5 Qxa1+ 20. Ke2 Na6 21. Nxg7+ Kd8 22. Qf6+ Nxf6 23. Be7# 1-0"
            },
            {
                id: "anderssen-evergreen",
                title: "The Evergreen Game",
                white: "Adolf Anderssen",
                black: "Jean Dufresne",
                year: 1852,
                event: "Casual game, Berlin",
                result: "1-0",
                description: "Another Anderssen masterpiece featuring a stunning queen sacrifice that opens lines for a devastating attack. The game remains 'evergreen' in its brilliance.",
                opening: "Evans Gambit",
                keyMoves: "19. Rad1! Qxf3 20. Rxe7+! Nxe7 21. Qxd7+!! Kxd7 22. Bf5+ Ke8 23. Bd7+ Kf8 24. Bxe7#",
                lessons: [
                    "Coordinate your pieces",
                    "Sacrifices open lines",
                    "The king hunt"
                ],
                pgn: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O d3 8. Qb3 Qf6 9. e5 Qg6 10. Re1 Nge7 11. Ba3 b5 12. Qxb5 Rb8 13. Qa4 Bb6 14. Nbd2 Bb7 15. Ne4 Qf5 16. Bxd3 Qh5 17. Nf6+ gxf6 18. exf6 Rg8 19. Rad1 Qxf3 20. Rxe7+ Nxe7 21. Qxd7+ Kxd7 22. Bf5+ Ke8 23. Bd7+ Kf8 24. Bxe7# 1-0"
            }
        ]
    },
    {
        id: "magnus-carlsen",
        name: "Magnus Carlsen",
        years: "1990-",
        title: "16th World Champion",
        country: "🇳🇴 Norway",
        description: "The highest-rated player in history. Carlsen combines exceptional endgame technique with universal style and remarkable stamina, often winning seemingly drawn positions.",
        style: "Universal, endgame mastery, relentless",
        peakRating: 2882,
        worldChampion: "2013-2023",
        games: [
            {
                id: "carlsen-anand-g6",
                title: "Carlsen Becomes Champion",
                white: "Magnus Carlsen",
                black: "Viswanathan Anand",
                year: 2013,
                event: "World Championship, Chennai",
                result: "1-0",
                description: "The game that clinched Carlsen's first World Championship title. A masterclass in converting small advantages.",
                opening: "Ruy Lopez, Berlin Defense",
                keyMoves: "28. Qb3! followed by precise technique to convert the extra pawn",
                lessons: [
                    "Converting small advantages",
                    "Endgame technique",
                    "Patience and precision"
                ],
                pgn: "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. d3 Bc5 5. c3 O-O 6. O-O Re8 7. Re1 a6 8. Ba4 b5 9. Bb3 d6 10. Bg5 Be6 11. Nbd2 h6 12. Bh4 Bxb3 13. axb3 Nb8 14. h3 Nbd7 15. Nh2 Qe7 16. Ndf1 Bb6 17. Ne3 Qe6 18. b4 a5 19. bxa5 Bxa5 20. Nhg4 Bb6 21. Nxf6+ Nxf6 22. Bg3 Ra3 23. Nc4 Rxa1 24. Qxa1 Bc5 25. Qa2 Qd7 26. b3 Bf8 27. Qf2 c6 28. Qb3 Qe6 29. Qxe6 Rxe6 30. Ra1 Nd7 31. Ra8 Re8 32. Kf1 Kh7 33. Ra3 Kg8 34. Ke2 Nf6 35. f3 Kh7 36. h4 Kg8 37. Kd2 Kh7 38. Kc2 Kg8 39. Kb2 Re6 40. c4 bxc4 41. bxc4 Ne8 42. c5 d5 43. exd5 cxd5 44. Nxe5 Nc7 45. Ra8 Ne8 46. Rb8 Rc6 47. Rb5 Rd6 48. Kc3 g6 49. Kd4 Kg7 50. Rxd5 Rc6 51. Rc5 1-0"
            },
            {
                id: "carlsen-karjakin",
                title: "Carlsen's Endgame Magic",
                white: "Magnus Carlsen",
                black: "Sergey Karjakin",
                year: 2016,
                event: "World Championship, New York",
                result: "1-0",
                description: "A classic demonstration of Carlsen's endgame prowess, grinding down his opponent in what looked like a drawn position.",
                opening: "Italian Game",
                keyMoves: "51. Re1! activating the rook at the perfect moment",
                lessons: [
                    "Rook endgame technique",
                    "Creating winning chances from nothing",
                    "The will to win"
                ],
                pgn: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. O-O Nf6 5. d3 O-O 6. a4 d6 7. c3 a6 8. b4 Ba7 9. Re1 Ne7 10. Nbd2 Ng6 11. d4 c6 12. h3 exd4 13. cxd4 Nxe4 14. Bxf7+ Rxf7 15. Nxe4 d5 16. Nc5 h6 17. Rb1 Nf4 18. Bxf4 Rxf4 19. Qb3 Qf8 20. Nd3 Rf7 21. Nc5 g5 22. Nd3 Qg7 23. Re5 Raf8 24. Rc1 Bxd4 25. Nxd4 Qxd4 26. Qxd5+ Qxd5 27. Rxd5 Rxf2 28. Nf5 Bxf5 29. Rxf5 Rxf5 30. Rxc6 Rf1+ 31. Kh2 R8f2 32. Rc8+ Kh7 33. Rc7+ Kg6 34. Rxb7 R1f2 35. Ra7 Ra2 36. Rxa6+ Kf5 37. Ra5+ Ke4 38. Rb5 Kd4 39. a5 Rxa5 40. Rxa5 Kc4 41. Ra6 Kb5 42. Ra1 Kxb4 43. Kg3 Rb2 44. Kf3 Kc5 45. Ra5+ Kd6 46. Ke3 Rb1 47. Rxg5 Rb3+ 48. Kf4 Rb4+ 49. Kf5 Rb5+ 50. Kg6 Rb6+ 51. Kxh6 Rf6 52. Rg7 Rf2 53. g4 Rf6+ 54. Rg6 1-0"
            }
        ]
    }
];
function getLegendById(id) {
    return legends.find((l)=>l.id === id);
}
function getGameById(legendId, gameId) {
    const legend = getLegendById(legendId);
    return legend?.games.find((g)=>g.id === gameId);
}
}),
"[project]/Desktop/chess-retro/app/classic-games/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClassicGamesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/chess-retro/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/chess-retro/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$app$2f$classic$2d$games$2f$gameData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/chess-retro/app/classic-games/gameData.ts [app-rsc] (ecmascript)");
;
;
;
function ClassicGamesPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-b from-amber-950 via-stone-900 to-stone-950 py-12 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-serif text-4xl md:text-5xl font-bold text-amber-100 mb-4",
                            children: "Learn from the Legends"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/chess-retro/app/classic-games/page.tsx",
                            lineNumber: 9,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-amber-200/60 font-serif italic text-lg max-w-2xl mx-auto",
                            children: "Study the greatest games from chess history, played by the masters who defined the art"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/chess-retro/app/classic-games/page.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/chess-retro/app/classic-games/page.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6 md:grid-cols-2",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$app$2f$classic$2d$games$2f$gameData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["legends"].map((legend)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: `/classic-games/${legend.id}`,
                            className: "group bg-gradient-to-br from-amber-950/60 to-stone-900/80 rounded-lg border border-amber-800/30 overflow-hidden hover:border-amber-600/50 hover:shadow-xl hover:shadow-amber-900/20 transition-all",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "font-serif text-2xl font-bold text-amber-100 group-hover:text-amber-50 transition-colors",
                                                            children: legend.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/chess-retro/app/classic-games/page.tsx",
                                                            lineNumber: 27,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-amber-500 text-sm",
                                                            children: legend.years
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/chess-retro/app/classic-games/page.tsx",
                                                            lineNumber: 30,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/chess-retro/app/classic-games/page.tsx",
                                                    lineNumber: 26,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-2xl",
                                                    children: legend.country.split(" ")[0]
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/chess-retro/app/classic-games/page.tsx",
                                                    lineNumber: 32,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/chess-retro/app/classic-games/page.tsx",
                                            lineNumber: 25,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-1 bg-amber-900/40 text-amber-300 text-xs rounded border border-amber-700/30",
                                                    children: legend.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/chess-retro/app/classic-games/page.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 19
                                                }, this),
                                                legend.worldChampion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-1 bg-yellow-900/40 text-yellow-300 text-xs rounded border border-yellow-700/30",
                                                    children: [
                                                        "👑 ",
                                                        legend.worldChampion
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/chess-retro/app/classic-games/page.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 21
                                                }, this),
                                                legend.peakRating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-1 bg-stone-800/60 text-stone-300 text-xs rounded border border-stone-600/30",
                                                    children: [
                                                        "Peak: ",
                                                        legend.peakRating
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/chess-retro/app/classic-games/page.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/chess-retro/app/classic-games/page.tsx",
                                            lineNumber: 35,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-amber-100/70 text-sm mb-4 line-clamp-3",
                                            children: legend.description
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/chess-retro/app/classic-games/page.tsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between pt-4 border-t border-amber-800/20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-amber-400/60 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium text-amber-300",
                                                            children: legend.games.length
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/chess-retro/app/classic-games/page.tsx",
                                                            lineNumber: 57,
                                                            columnNumber: 21
                                                        }, this),
                                                        " classic games"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/chess-retro/app/classic-games/page.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1 text-amber-500 text-sm group-hover:text-amber-400 transition-colors",
                                                    children: [
                                                        "Study games",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "group-hover:translate-x-1 transition-transform",
                                                            children: "→"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/chess-retro/app/classic-games/page.tsx",
                                                            lineNumber: 61,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/chess-retro/app/classic-games/page.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/chess-retro/app/classic-games/page.tsx",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/chess-retro/app/classic-games/page.tsx",
                                    lineNumber: 24,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-stone-900/50 px-6 py-3 border-t border-amber-800/20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: legend.games.slice(0, 3).map((game)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-amber-200/60 bg-stone-800/50 px-2 py-1 rounded",
                                                children: game.title
                                            }, game.id, false, {
                                                fileName: "[project]/Desktop/chess-retro/app/classic-games/page.tsx",
                                                lineNumber: 70,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/chess-retro/app/classic-games/page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/chess-retro/app/classic-games/page.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, legend.id, true, {
                            fileName: "[project]/Desktop/chess-retro/app/classic-games/page.tsx",
                            lineNumber: 19,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/chess-retro/app/classic-games/page.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mt-12 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-amber-200/60 font-serif italic",
                            children: "Each legend has a unique style. Study them all to become a complete player."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/chess-retro/app/classic-games/page.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/play",
                            className: "inline-flex items-center gap-2 px-6 py-3 bg-amber-700 hover:bg-amber-600 text-amber-100 font-serif rounded border border-amber-600 transition-all",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$chess$2d$retro$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "♞"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/chess-retro/app/classic-games/page.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                "Practice Against Stockfish"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/chess-retro/app/classic-games/page.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/chess-retro/app/classic-games/page.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/chess-retro/app/classic-games/page.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/chess-retro/app/classic-games/page.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/chess-retro/app/classic-games/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/chess-retro/app/classic-games/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1645ce91._.js.map