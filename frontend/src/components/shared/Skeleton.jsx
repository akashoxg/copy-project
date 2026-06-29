const Skeleton = ({ className = '', variant = 'rect' }) => {
  const baseClasses = 'animate-pulse bg-gray-200 rounded';

  const variants = {
    rect: 'rounded-xl',
    circle: 'rounded-full',
    text: 'rounded h-4',
  };

  return <div className={`${baseClasses} ${variants[variant]} ${className}`} aria-hidden="true" />;
};

export const SkeletonCard = () => (
  <div className="bg-white rounded-2xl p-6 shadow-card space-y-4">
    <Skeleton className="h-6 w-3/4" variant="text" />
    <Skeleton className="h-4 w-full" variant="text" />
    <Skeleton className="h-4 w-5/6" variant="text" />
    <Skeleton className="h-10 w-1/3 mt-4" />
  </div>
);

export const SkeletonTable = ({ rows = 5, cols = 4 }) => (
  <div className="space-y-3">
    {Array.from({ length: rows }, (_, i) => (
      <div key={i} className="flex gap-4">
        {Array.from({ length: cols }, (_, j) => (
          <Skeleton key={j} className="h-10 flex-1" />
        ))}
      </div>
    ))}
  </div>
);

export default Skeleton;
