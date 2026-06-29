import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-1.5 text-sm flex-wrap" role="list">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 text-brand-text-secondary hover:text-brand-teal transition-colors focus-visible:ring-2 focus-visible:ring-brand-teal rounded"
          >
            <Home className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" aria-hidden="true" />
            {index === items.length - 1 ? (
              <span className="text-brand-navy font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.href}
                className="text-brand-text-secondary hover:text-brand-teal transition-colors focus-visible:ring-2 focus-visible:ring-brand-teal rounded"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
