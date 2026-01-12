export default function QuoteCard({ text, className = "" }) {
  return (
    <div className={`bg-black/50 backdrop-blur-sm border-4 border-amber-500 rounded-2xl p-8 md:p-12 shadow-2xl ${className}`}>
      <blockquote className="text-2xl md:text-3xl font-bold text-white text-center leading-relaxed italic">
        "{text}"
      </blockquote>
    </div>
  );
}
