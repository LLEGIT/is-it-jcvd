export default function AnswerScreen({ 
  currentQuote, 
  userAnswer, 
  currentIndex, 
  totalQuestions, 
  onNext 
}) {
  const isLastQuestion = currentIndex >= totalQuestions - 1;
  
  return (
    <div className="max-w-3xl w-full space-y-8">
      <div className="text-center">
        {userAnswer.isCorrect ? (
          <div className="text-6xl md:text-8xl font-black text-green-400 animate-bounce">
            ✓ CORRECT !
          </div>
        ) : (
          <div className="text-6xl md:text-8xl font-black text-red-400 animate-shake">
            ✗ FAUX !
          </div>
        )}
      </div>

      <div className="bg-black/50 backdrop-blur-sm border-4 border-amber-500 rounded-2xl p-8 md:p-12 shadow-2xl space-y-6">
        <div className="text-center">
          <div className="text-amber-400 font-bold text-xl mb-4">
            {currentQuote.isJCVD ? "C'EST BIEN DU JCVD ! 🥋" : "C'ÉTAIT FAUX ! 🎭"}
          </div>
          <blockquote className="text-xl md:text-2xl text-white italic mb-6">
            "{currentQuote.text}"
          </blockquote>
        </div>

        <div className="border-t-2 border-amber-500/30 pt-6">
          <h3 className="text-amber-400 font-bold text-lg mb-3 uppercase">
            📝 Preuve à l'appui
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            {currentQuote.proof}
          </p>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={onNext}
          className="px-12 py-4 bg-amber-500 hover:bg-amber-600 text-black font-black text-xl uppercase tracking-wide rounded-lg transform transition hover:scale-105 shadow-2xl"
        >
          {isLastQuestion ? 'Voir mon Score' : 'Question Suivante'}
        </button>
      </div>
    </div>
  );
}
