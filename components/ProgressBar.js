export default function ProgressBar({ current, total }) {
  const percentage = (current / total) * 100;
  
  return (
    <div className="text-center space-y-4">
      <div className="text-amber-400 font-bold text-lg">
        Question {current} / {total}
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3">
        <div 
          className="bg-amber-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
