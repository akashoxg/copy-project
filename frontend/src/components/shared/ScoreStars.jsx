import { Star } from 'lucide-react';

const ScoreStars = ({ rating, maxRating = 5, size = 'sm' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`${rating} out of ${maxRating} stars`}>
      {Array.from({ length: maxRating }, (_, i) => (
        <Star
          key={i}
          className={`${sizeClasses[size]} ${
            i < Math.floor(rating)
              ? 'text-brand-amber fill-brand-amber'
              : i < rating
              ? 'text-brand-amber fill-brand-amber/50'
              : 'text-gray-300'
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

export default ScoreStars;
