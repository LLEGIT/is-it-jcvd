export default function IntroScreen({ onStart }) {
  return (
    <div className="max-w-2xl w-full text-center space-y-8 animate-fade-in">
      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
          Jean-Claude Van Damme
        </h1>
        <div className="text-2xl md:text-4xl font-bold text-amber-400 uppercase">
          ou
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
          Jean-Claude Sans Âme
        </h2>
      </div>
      
      <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
        Peux-tu distinguer les vraies perles philosophiques du maître des arts martiaux 
        des citations fictives ? Teste ta <span className="text-amber-400 font-bold">awareness</span> !
      </p>

      <button
        onClick={onStart}
        className="px-12 py-4 bg-amber-500 hover:bg-amber-600 text-black font-black text-xl uppercase tracking-wide rounded-lg transform transition hover:scale-105 shadow-2xl"
      >
        Commencer le Quiz
      </button>
    </div>
  );
}
