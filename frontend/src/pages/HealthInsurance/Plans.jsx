import Breadcrumb from '../../components/shared/Breadcrumb';
import PlanRankTable from '../../components/insurance/PlanRankTable';
import PremiumTable from '../../components/insurance/PremiumTable';
import RatingMethodology from '../../components/insurance/RatingMethodology';
import ConsultCTA from '../../components/consultation/ConsultCTA';
import ProConList from '../../components/shared/ProConList';
import { healthPlans, healthMethodology } from '../../data/healthPlans';

const HealthPlans = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-container mx-auto px-4 md:px-8">
        <Breadcrumb items={[
          { label: 'Health Insurance', href: '/health-insurance' },
          { label: 'Health Insurance Plans', href: '/health-insurance/plans' }
        ]} />

        <div className="mb-12 max-w-4xl">
          <h1 className="font-display font-bold text-4xl text-brand-navy mb-4">
            Best Health Insurance Plans for 2026
          </h1>
          <p className="text-lg text-brand-text-secondary leading-relaxed">
            We analyzed over 150 health insurance policies in India based on features, insurer reliability, and premium pricing. Here is our completely unbiased ranking of the top plans available today.
          </p>
        </div>

        {/* Master Ranking Table */}
        <section className="mb-16">
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-6">The Overall Rankings</h2>
          <PlanRankTable plans={healthPlans} category="health" />
        </section>

        {/* Premium Comparison */}
        <section className="mb-16">
          <div className="mb-6">
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-2">Premium Comparison Across Profiles</h2>
            <p className="text-brand-text-secondary">Compare how much these top plans cost for different age groups and family sizes.</p>
          </div>
          <PremiumTable plans={healthPlans} />
        </section>

        <ConsultCTA category="health-plans" title="Need help deciding between the top 3?" />

        {/* Detailed Analysis of Top 2 */}
        <section className="mb-16">
          <h2 className="font-display font-bold text-3xl text-brand-navy mb-8">Detailed Analysis of Top Picks</h2>
          
          <div className="space-y-12">
            {healthPlans.slice(0, 2).map(plan => (
              <div key={plan.name} className="bg-white p-8 rounded-2xl shadow-card border border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-100">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-brand-teal text-white font-bold w-8 h-8 rounded-full flex items-center justify-center">
                        #{plan.rank}
                      </span>
                      <h3 className="font-display font-bold text-2xl text-brand-navy">{plan.name}</h3>
                    </div>
                    <p className="text-brand-text-secondary">by {plan.insurer}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-sm text-brand-text-secondary">Our Score</div>
                      <div className="font-display font-bold text-2xl text-brand-teal">{plan.score}/5.0</div>
                    </div>
                    <a
                      href={plan.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-brand-navy text-white font-semibold rounded-xl hover:bg-brand-navy-light transition-colors"
                    >
                      View Details
                    </a>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-brand-navy mb-3">Why it ranked #{plan.rank}:</h4>
                  <p className="text-brand-text-secondary leading-relaxed mb-6">
                    {plan.rank === 1 ? 
                      "This plan consistently outperforms others in our feature analysis, offering zero sub-limits and unlimited restoration. Combined with HDFC Ergo's stellar claim settlement ratio, it provides the most robust protection in the market today." :
                      "A very close second, offering incredible value and comprehensive coverage. The automatic recharge feature ensures you're never left without cover, though premiums are slightly higher for younger individuals compared to the top pick."
                    }
                  </p>
                </div>

                <ProConList pros={plan.pros} cons={plan.cons} />
              </div>
            ))}
          </div>
        </section>
      </div>

      <RatingMethodology methodology={healthMethodology} />
    </div>
  );
};

export default HealthPlans;
