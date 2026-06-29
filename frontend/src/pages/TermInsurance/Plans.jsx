import { motion } from 'framer-motion';
import Breadcrumb from '../../components/shared/Breadcrumb';
import PlanRankTable from '../../components/insurance/PlanRankTable';
import PremiumTable from '../../components/insurance/PremiumTable';
import RatingMethodology from '../../components/insurance/RatingMethodology';
import ConsultCTA from '../../components/consultation/ConsultCTA';
import ProConList from '../../components/shared/ProConList';
import { termPlans, termMethodology } from '../../data/termPlans';

const TermPlans = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-gradient-to-b from-blue-50/50 to-transparent">
        <div className="max-w-container mx-auto px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Life Insurance', href: '/life-insurance' }, { label: 'Term Plans', href: '/life-insurance/plans' }]} />
          <div className="mb-12 max-w-4xl">
            <h1 className="font-display font-bold text-4xl text-brand-navy mb-4">Best Term Insurance Plans for 2026</h1>
            <p className="text-lg text-brand-text-secondary leading-relaxed">We analyzed every major term plan in India based on insurer reliability, product features, and pricing. Here is our completely unbiased ranking.</p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-container mx-auto px-4 md:px-8">
          <section className="mb-16">
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-6">The Overall Rankings</h2>
            <PlanRankTable plans={termPlans} category="term" />
          </section>

          <section className="mb-16">
            <div className="mb-6">
              <h2 className="font-display font-bold text-2xl text-brand-navy mb-2">Premium Comparison Across Profiles</h2>
              <p className="text-brand-text-secondary">Compare how much these plans cost for different ages and genders (₹1 Crore cover).</p>
            </div>
            <PremiumTable plans={termPlans} />
          </section>

          <ConsultCTA category="term-plans" title="Need help deciding between the top 3?" subtitle="Our advisors will compare claim settlement data, riders, and payout options specific to your profile." />

          <section className="mb-16 mt-16">
            <h2 className="font-display font-bold text-3xl text-brand-navy mb-8">Detailed Analysis of Top Picks</h2>
            <div className="space-y-12">
              {termPlans.slice(0, 2).map(plan => (
                <div key={plan.name} className="bg-white p-8 rounded-2xl shadow-card border border-gray-100">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-100">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-brand-teal text-white font-bold w-8 h-8 rounded-full flex items-center justify-center font-data">#{plan.rank}</span>
                        <h3 className="font-display font-bold text-2xl text-brand-navy">{plan.name}</h3>
                      </div>
                      <p className="text-brand-text-secondary">by {plan.insurer} • CSR: <span className="font-data font-semibold text-brand-teal">{plan.claimSettlementRatio}%</span></p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-sm text-brand-text-secondary">Our Score</div>
                        <div className="font-display font-bold text-2xl text-brand-teal">{plan.score}/5.0</div>
                      </div>
                      <a href={plan.externalUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-brand-navy text-white font-semibold rounded-xl hover:bg-brand-navy-light transition-colors">View Details</a>
                    </div>
                  </div>
                  <div className="mb-8">
                    <h4 className="font-bold text-brand-navy mb-3">Why it ranked #{plan.rank}:</h4>
                    <p className="text-brand-text-secondary leading-relaxed mb-6">
                      {plan.rank === 1 ? 'Max Life leads with the industry’s highest claim settlement ratio at 99.51%, combined with excellent product features including terminal illness benefit, premium deferment, and flexible payout options. The slight premium over competitors is justified by unmatched insurer reliability.' : 'HDFC Life’s strong brand trust, comprehensive rider options, and excellent digital experience make it a very close second. The increasing sum assured option is a standout feature for long-term planning.'}
                    </p>
                  </div>
                  <ProConList pros={plan.pros} cons={plan.cons} />
                </div>
              ))}
            </div>
          </section>
        </div>
        <RatingMethodology methodology={termMethodology} />
      </section>
    </motion.div>
  );
};

export default TermPlans;
