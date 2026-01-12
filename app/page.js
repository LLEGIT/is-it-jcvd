'use client';

import { useState } from 'react';
import { quotes } from '@/data/quotes';
import IntroScreen from '@/components/IntroScreen';
import GameScreen from '@/components/GameScreen';
import AnswerScreen from '@/components/AnswerScreen';
import FinalScreen from '@/components/FinalScreen';

const TOTAL_QUESTIONS = 5;

export default function Home() {
  const [gameState, setGameState] = useState('intro'); // 'intro', 'playing', 'answered', 'finished'
  const [selectedQuotes, setSelectedQuotes] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);

  // Sélectionner 5 citations aléatoires au démarrage
  const startGame = () => {
    const shuffled = [...quotes].sort(() => Math.random() - 0.5);
    setSelectedQuotes(shuffled.slice(0, TOTAL_QUESTIONS));
    setGameState('playing');
    setCurrentQuestionIndex(0);
    setScore(0);
    setUserAnswer(null);
  };

  // Gérer la réponse de l'utilisateur
  const handleAnswer = (answer) => {
    const currentQuote = selectedQuotes[currentQuestionIndex];
    const isCorrect = answer === currentQuote.isJCVD;
    
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setUserAnswer({ answer, isCorrect });
    setGameState('answered');
  };

  // Passer à la question suivante
  const nextQuestion = () => {
    if (currentQuestionIndex < selectedQuotes.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setGameState('playing');
      setUserAnswer(null);
    } else {
      setGameState('finished');
    }
  };

  const currentQuote = selectedQuotes[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* IMAGE DE FOND JCVD */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ 
          backgroundImage: "url('/jcvd-background.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* OVERLAY POUR AMÉLIORER LA LISIBILITÉ */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-purple-900/20 to-slate-900/20" />
      
      {/* CONTENU */}
      <div className="relative z-10 w-full flex items-center justify-center">
        {gameState === 'intro' && <IntroScreen onStart={startGame} />}
        
        {gameState === 'playing' && currentQuote && (
          <GameScreen 
            currentQuote={currentQuote}
            currentIndex={currentQuestionIndex}
            totalQuestions={TOTAL_QUESTIONS}
            onAnswer={handleAnswer}
          />
        )}
        
        {gameState === 'answered' && currentQuote && userAnswer && (
          <AnswerScreen 
            currentQuote={currentQuote}
            userAnswer={userAnswer}
            currentIndex={currentQuestionIndex}
            totalQuestions={TOTAL_QUESTIONS}
            onNext={nextQuestion}
          />
        )}
        
        {gameState === 'finished' && (
          <FinalScreen 
            score={score}
            totalQuestions={TOTAL_QUESTIONS}
            onRestart={startGame}
          />
        )}
      </div>
    </div>
  );
}
