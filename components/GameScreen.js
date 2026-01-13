import ProgressBar from './ProgressBar';
import QuoteCard from './QuoteCard';

const BASE_PATH = process.env.NODE_ENV === 'production' ? '/is-it-jcvd' : '';

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
          className="px-8 py-6 bg-amber-600 hover:bg-amber-500 text-slate-900 font-black text-2xl uppercase rounded-xl transform transition hover:scale-105 shadow-2xl border-2 border-amber-400"
        >
          <span className="flex items-center justify-center gap-2">
            <img src={`${BASE_PATH}/yes.png`} alt="JCVD" className="w-16 h-16 rounded-full inline-block" />
            JCVD
          </span>
        </button>
        <button
          onClick={() => onAnswer(false)}
          className="px-8 py-6 bg-slate-800 hover:bg-slate-700 text-white font-black text-2xl uppercase rounded-xl transform transition hover:scale-105 shadow-2xl border-2 border-slate-600"
        >
          <span className="flex items-center justify-center gap-2">
            <img src={`${BASE_PATH}/no.png`} alt="Not JCVD" className="w-16 h-16 rounded-full inline-block" />
            Pas JCVD
          </span>
        </button>
      </div>
    </div>
  );
}
