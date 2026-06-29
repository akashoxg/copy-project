import { motion } from 'framer-motion';
import Breadcrumb from '../../components/shared/Breadcrumb';
import PlanRankTable from '../../components/insurance/PlanRankTable';
import PremiumTable from '../../components/insurance/PremiumTable';
import RatingMethodology from '../../components/insurance/RatingMethodology';
import ConsultCTA from '../../components/consultation/ConsultCTA';
import ProConList from '../../components/shared/ProConList';
import { motorPlans, motorMethodology } from '../../data/motorPlans';

const MotorPlans = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-gradient-to-b from-emerald-50/50 to-transparent">
        <div className="max-w-container mx-auto px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Motor Insurance', href: '/motor-insurance' }, { label: 'Motor Plans', href: '/motor-insurance/plans' }]} />
          <div className="mb-12 max-w-4xl">
            <h1 className="font-display font-bold text-4xl text-brand-navy mb-4">Best Motor Insurance Plans for 2026</h1>
            <p className="text-lg text-brand-text-secondary leading-relaxed">We compared motor insurance plans across features, garage networks, claim settlement, and pricing. Here’s our unbiased ranking.</p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-container mx-auto px-4 md:px-8">
          <section className="mb-16">
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-6">The Overall Rankings</h2>
            <PlanRankTable plans={motorPlans} category="motor" />
          </section>

          <section className="mb-16">
            <div className="mb-6">
              <h2 className="font-display font-bold text-2xl text-brand-navy mb-2">Premium Comparison by Vehicle Type</h2>
              <p className="text-brand-text-secondary">Compare comprehensive insurance costs across vehicle categories.</p>
            </div>
            <PremiumTable plans={motorPlans} />
          </section>

          <ConsultCTA category="motor-plans" title="Need help choosing the right motor insurance?" subtitle="Our experts will compare garage networks, claim turnaround times, and add-on options for your vehicle." />

          <section className="mb-16 mt-16">
            <h2 className="font-display font-bold text-3xl text-brand-navy mb-8">Detailed Analysis of Top Picks</h2>
            <div className="space-y-12">
              {motorPlans.slice(0, 2).map(plan => (
                <div key={plan.name} className="bg-white p-8 rounded-2xl shadow-card border border-gray-100">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-100">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-brand-teal text-white font-bold w-8 h-8 rounded-full flex items-center justify-center font-data">#{plan.rank}</span>
                        <h3 className="font-display font-bold text-2xl text-brand-navy">{plan.name}</h3>
                      </div>
                      <p className="text-brand-text-secondary">by {plan.insurer} • CSR: <span className="font-data font-semibold text-brand-teal">{plan.claimSettlementRatio}%</span> • <span className="font-data font-semibold">{plan.networkHospitals?.toLocaleString()}+</span> garages</p>
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
                      {plan.rank === 1 ? 'HDFC Ergo leads with the widest garage network (8,500+), fastest claim settlements, and comprehensive add-on options. While premiums are slightly higher, the overall value and reliability make it our top recommendation.' : 'ICICI Lombard offers strong digital claim processing, competitive pricing, and good coverage options. Slightly behind on garage network size but excellent for tech-savvy users.'}
                    </p>
                  </div>
                  <ProConList pros={plan.pros} cons={plan.cons} />
                </div>
              ))}
            </div>
          </section>
        </div>
        <RatingMethodology methodology={motorMethodology} />
      </section>
    </motion.div>
  );
};

export default MotorPlans;
