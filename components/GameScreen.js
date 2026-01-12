import ProgressBar from './ProgressBar';
import QuoteCard from './QuoteCard';

export default function GameScreen({ 
  currentQuote, 
  currentIndex, 
  totalQuestions, 
  onAnswer 
}) {
  return (
    <div className="max-w-3xl w-full space-y-8">
      <ProgressBar current={currentIndex + 1} total={totalQuestions} />
      
      <QuoteCard text={currentQuote.text} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={() => onAnswer(true)}
          className="px-8 py-6 bg-green-600 hover:bg-green-700 text-white font-black text-2xl uppercase rounded-xl transform transition hover:scale-105 shadow-xl"
        >
          ✊ JCVD
        </button>
        <button
          onClick={() => onAnswer(false)}
          className="px-8 py-6 bg-red-600 hover:bg-red-700 text-white font-black text-2xl uppercase rounded-xl transform transition hover:scale-105 shadow-xl"
        >
          💀 Pas JCVD
        </button>
      </div>
    </div>
  );
}
