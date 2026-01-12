export default function FinalScreen({ score, totalQuestions, onRestart }) {
  const getFinalMessage = (finalScore) => {
    if (finalScore === 5) return { 
      title: "AWARE MASTER 🥋", 
      text: "Tu es tellement aware que tu pourrais être le fils spirituel de JCVD !" 
    };
    if (finalScore === 4) return { 
      title: "PRESQUE AWARE 💪", 
      text: "Tu connais bien le maître. Encore un petit effort pour atteindre l'éveil total !" 
    };
    if (finalScore === 3) return { 
      title: "EN CHEMIN VERS L'AWARENESS 🤔", 
      text: "Pas mal, mais il faut encore méditer sur les paroles du maître." 
    };
    if (finalScore === 2) return { 
      title: "SANS ÂME DÉBUTANT 😅", 
      text: "Tu confonds encore trop souvent la sagesse et l'absurité. Continue à t'entraîner !" 
    };
    return { 
      title: "TOTALEMENT SANS ÂME 💀", 
      text: "Houston, on a un problème. Revoir toutes les interviews de JCVD de toute urgence !" 
    };
  };

  const message = getFinalMessage(score);

  return (
    <div className="max-w-2xl w-full text-center space-y-8">
      <div className="space-y-4">
        <div className="text-6xl md:text-8xl font-black text-amber-400 uppercase tracking-tighter">
          {message.title}
        </div>
        <div className="text-4xl md:text-6xl font-black text-white">
          {score} / {totalQuestions}
        </div>
      </div>

      <div className="bg-black/50 backdrop-blur-sm border-4 border-amber-500 rounded-2xl p-8 md:p-12 shadow-2xl">
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
          {message.text}
        </p>
      </div>

      <button
        onClick={onRestart}
        className="px-12 py-4 bg-amber-500 hover:bg-amber-600 text-black font-black text-xl uppercase tracking-wide rounded-lg transform transition hover:scale-105 shadow-2xl"
      >
        Rejouer
      </button>
    </div>
  );
}
