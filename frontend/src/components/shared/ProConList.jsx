import { Check, X } from 'lucide-react';

const ProConList = ({ pros = [], cons = [] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Pros */}
      {pros.length > 0 && (
        <div>
          <h4 className="font-display font-semibold text-brand-green mb-3 flex items-center gap-2">
            <Check className="w-5 h-5" aria-hidden="true" />
            Pros
          </h4>
          <ul className="space-y-2" role="list">
            {pros.map((pro, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-brand-text-secondary">
                <Check className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Cons */}
      {cons.length > 0 && (
        <div>
          <h4 className="font-display font-semibold text-brand-red mb-3 flex items-center gap-2">
            <X className="w-5 h-5" aria-hidden="true" />
            Cons
          </h4>
          <ul className="space-y-2" role="list">
            {cons.map((con, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-brand-text-secondary">
                <X className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProConList;
