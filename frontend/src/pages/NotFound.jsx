import Breadcrumb from '../components/shared/Breadcrumb';
import ConsultCTA from '../components/consultation/ConsultCTA';

const NotFound = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-container mx-auto px-4 md:px-8">
        <Breadcrumb items={[
          { label: 'NotFound', href: '#' }
        ]} />
        
        <div className="max-w-3xl mb-12">
          <h1 className="font-display font-bold text-4xl text-brand-navy mb-6">
            NotFound
          </h1>
          <p className="text-lg text-brand-text-secondary leading-relaxed">
            Detailed content for this section is currently being updated by our expert advisors. Check back soon for comprehensive guides and insights.
          </p>
        </div>

        <div className="bg-brand-teal-light/20 p-8 rounded-2xl border border-brand-teal/10 min-h-[300px] flex items-center justify-center text-brand-text-secondary">
          Content coming soon...
        </div>

        <ConsultCTA />
      </div>
    </div>
  );
};

export default NotFound;
