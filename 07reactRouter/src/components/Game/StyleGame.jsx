import React, { useState, useEffect } from 'react';

// Custom animation keyframes and styles
const styles = `
@keyframes flip {
    0% { transform: rotateY(0deg); }
    100% { transform: rotateY(180deg); }
}

@keyframes unflip {
    0% { transform: rotateY(180deg); }
    100% { transform: rotateY(0deg); }
}

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

@keyframes glow {
    0%, 100% { filter: brightness(1); }
    50% { filter: brightness(1.5); }
}

@keyframes celebrate {
    0% { transform: scale(1) rotate(0deg); }
    25% { transform: scale(1.2) rotate(-5deg); }
    50% { transform: scale(1.2) rotate(5deg); }
    75% { transform: scale(1.1) rotate(-3deg); }
    100% { transform: scale(1) rotate(0deg); }
}

@keyframes sparkle {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.8); }
}

.flip-card {
    animation: flip 0.6s ease-in-out forwards;
    transform-style: preserve-3d;
}

.unflip-card {
    animation: unflip 0.6s ease-in-out forwards;
    transform-style: preserve-3d;
}

.match-celebrate {
    animation: celebrate 0.8s ease-in-out;
}

.sparkle-effect {
    animation: sparkle 1.5s infinite;
}

.bounce-effect {
    animation: bounce 0.5s ease-in-out;
}

.glow-effect {
    animation: glow 2s infinite;
}
`;

export default function StyleGame() {
    // Add style tag to document head
    useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);
        return () => styleSheet.remove();
    }, []);

    // Game state management
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState([]);
    const [score, setScore] = useState(0);
    const [moves, setMoves] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [isMatched, setIsMatched] = useState(false);

    // Hairstyle cards data - each style appears twice for matching
    const hairstyles = [
        { id: 1, name: 'Classic Bob', emoji: '👱‍♀️' },
        { id: 2, name: 'Beach Waves', emoji: '👩‍🦱' },
        { id: 3, name: 'Elegant Updo', emoji: '👸' },
        { id: 4, name: 'Pixie Cut', emoji: '🧑' },
        { id: 5, name: 'Long Straight', emoji: '👩' },
        { id: 6, name: 'Curly Style', emoji: '👩‍🦱' },
    ];

    // Initialize game by shuffling cards
    const startGame = () => {
        // Create pairs of cards and shuffle them
        const cardPairs = [...hairstyles, ...hairstyles].map((card, index) => ({
            ...card,
            uniqueId: index,
            isFlipped: false,
            isMatched: false
        }));
        
        // Fisher-Yates shuffle algorithm
        for (let i = cardPairs.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cardPairs[i], cardPairs[j]] = [cardPairs[j], cardPairs[i]];
        }
        
        setCards(cardPairs);
        setFlippedCards([]);
        setMatchedPairs([]);
        setScore(0);
        setMoves(0);
        setGameStarted(true);
        setIsMatched(false);
    };

    // Handle card click with animations
    const handleCardClick = (clickedCard) => {
        // Prevent clicking if card is already flipped or matched
        if (
            flippedCards.length === 2 || 
            flippedCards.includes(clickedCard.uniqueId) ||
            matchedPairs.includes(clickedCard.id)
        ) {
            return;
        }

        // Flip the card
        const newFlippedCards = [...flippedCards, clickedCard.uniqueId];
        setFlippedCards(newFlippedCards);

        // If two cards are flipped, check for match
        if (newFlippedCards.length === 2) {
            setMoves(moves + 1);
            const [firstId, secondId] = newFlippedCards;
            const firstCard = cards.find(card => card.uniqueId === firstId);
            const secondCard = cards.find(card => card.uniqueId === secondId);

            if (firstCard.id === secondCard.id) {
                // Match found
                setIsMatched(true);
                setMatchedPairs([...matchedPairs, firstCard.id]);
                setScore(score + 100);
                setFlippedCards([]);
                setTimeout(() => setIsMatched(false), 1000);
            } else {
                // No match, flip cards back after delay
                setTimeout(() => {
                    setFlippedCards([]);
                }, 1000);
            }
        }
    };

    // Check for game completion
    useEffect(() => {
        if (gameStarted && matchedPairs.length === hairstyles.length) {
            // Game completed
            const finalScore = score - (moves * 10); // Deduct points for number of moves
            setScore(finalScore);
        }
    }, [matchedPairs, gameStarted]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-4 sm:py-8 lg:py-16 overflow-x-hidden">
            <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 lg:px-8">
                {/* Game title and description */}
                <div className="text-center mb-6 sm:mb-8 lg:mb-12">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600 hover:scale-105 transition-transform duration-300">
                        Hairstyle Memory Match
                    </h1>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto px-2 transform hover:scale-105 transition-transform duration-300">
                        Match the hairstyle pairs to win! Test your memory and learn about different styles.
                    </p>
                </div>

                {/* Game stats */}
                <div className="flex justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
                    <div className={`text-xl sm:text-2xl font-bold text-amber-400 ${score > 0 ? 'bounce-effect' : ''}`}>
                        Score: {score}
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-gray-300">
                        Moves: {moves}
                    </div>
                </div>

                {/* Game board */}
                {!gameStarted ? (
                    <div className="text-center">
                        <button
                            onClick={startGame}
                            className="px-6 py-3 text-base sm:text-lg text-slate-900 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg hover:from-amber-500 hover:to-amber-600 transition-all duration-300 font-medium transform hover:scale-110 hover:rotate-2"
                        >
                            Start New Game
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                        {cards.map((card) => (
                            <button
                                key={card.uniqueId}
                                onClick={() => handleCardClick(card)}
                                disabled={matchedPairs.includes(card.id)}
                                className={`aspect-square rounded-xl border-2 transition-all duration-300 flex items-center justify-center text-2xl sm:text-4xl transform perspective-1000
                                    ${flippedCards.includes(card.uniqueId) ? 'flip-card' : 'unflip-card'}
                                    ${matchedPairs.includes(card.id) && isMatched ? 'match-celebrate' : ''}
                                    ${flippedCards.includes(card.uniqueId) || matchedPairs.includes(card.id)
                                        ? 'bg-amber-400/20 border-amber-400 glow-effect'
                                        : 'bg-slate-800/50 border-slate-700 hover:border-amber-400/50 hover:scale-105 hover:rotate-3'
                                    }`}
                            >
                                {(flippedCards.includes(card.uniqueId) || matchedPairs.includes(card.id)) ? (
                                    <div className="text-center transform transition-transform duration-300 hover:scale-110 p-2">
                                        <div className="text-2xl sm:text-4xl mb-1 sm:mb-2">{card.emoji}</div>
                                        <div className="text-xs sm:text-sm text-amber-400">{card.name}</div>
                                    </div>
                                ) : (
                                    <span className="text-amber-400 sparkle-effect">✨</span>
                                )}
                            </button>
                        ))}
                    </div>
                )}

                {/* Game instructions */}
                <div className="mt-8 sm:mt-12 bg-slate-800/50 rounded-xl border border-slate-700 p-4 sm:p-8 transform hover:scale-105 transition-transform duration-300">
                    <h2 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-4">How to Play</h2>
                    <ul className="text-sm sm:text-base text-gray-300 space-y-2">
                        <li className="hover:text-amber-400 transition-colors duration-200">1. Click cards to flip them and reveal hairstyles</li>
                        <li className="hover:text-amber-400 transition-colors duration-200">2. Match pairs of identical hairstyles</li>
                        <li className="hover:text-amber-400 transition-colors duration-200">3. Each match earns you 100 points</li>
                        <li className="hover:text-amber-400 transition-colors duration-200">4. Each move (two flips) costs 10 points</li>
                        <li className="hover:text-amber-400 transition-colors duration-200">5. Match all pairs to complete the game!</li>
                    </ul>
                </div>

                {matchedPairs.length === hairstyles.length && (
                    <div className="mt-8 text-center animate-bounce">
                        <div className="text-2xl sm:text-3xl font-bold text-amber-400 mb-4 glow-effect">
                            🎉 Congratulations! Game Complete! 🎉
                        </div>
                        <button
                            onClick={startGame}
                            className="px-6 py-3 text-base sm:text-lg text-slate-900 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg hover:from-amber-500 hover:to-amber-600 transition-all duration-300 font-medium transform hover:scale-110 hover:rotate-2"
                        >
                            Play Again
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
} 