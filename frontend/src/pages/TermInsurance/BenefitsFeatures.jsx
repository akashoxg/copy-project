import { motion } from 'framer-motion';
import { Shield, CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/shared/Breadcrumb';
import SectionHeader from '../../components/shared/SectionHeader';
import ConsultCTA from '../../components/consultation/ConsultCTA';
import { termPlans } from '../../data/termPlans';

const riderComparison = [
  { rider: 'Critical Illness Cover', description: 'Lump sum payout on diagnosis of specified critical illnesses (cancer, heart attack, etc.).' },
  { rider: 'Waiver of Premium', description: 'If you become disabled, future premiums are waived but coverage continues.' },
  { rider: 'Accidental Death Benefit', description: 'Additional payout if death occurs due to an accident.' },
];

const BenefitsFeatures = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-gradient-to-b from-blue-50/50 to-transparent">
        <div className="max-w-container mx-auto px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Life Insurance', href: '/life-insurance' }, { label: 'Benefits & Features', href: '/life-insurance/benefits' }]} />
          <div className="max-w-3xl">
            <div className="w-14 h-14 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-6"><Shield className="w-7 h-7" /></div>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-brand-navy mb-4">Benefits & Features</h1>
            <p className="text-xl text-brand-text-secondary leading-relaxed">Understand what features and riders to look for in a term insurance plan.</p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-container mx-auto px-4 md:px-8">
          {/* Riders Comparison */}
          <SectionHeader eyebrow="Key Riders" title="Essential Add-Ons to Consider" subtitle="Riders provide additional protection beyond the basic death benefit." />

          <div className="space-y-4 mb-16">
            {riderComparison.map((rider) => (
              <div key={rider.rider} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-soft">
                <h3 className="font-display font-bold text-lg text-brand-navy mb-2">{rider.rider}</h3>
                <p className="text-sm text-brand-text-secondary mb-4">{rider.description}</p>
                <div className="flex flex-wrap gap-3">
                  {termPlans.slice(0, 3).map((plan) => {
                    const hasRider = rider.rider === 'Critical Illness Cover' ? plan.riders.criticalIllness :
                      rider.rider === 'Waiver of Premium' ? plan.riders.waiverOfPremium : plan.riders.disability;
                    return (
                      <div key={plan.name} className="flex items-center gap-2 text-xs">
                        {hasRider ? <CheckCircle className="w-4 h-4 text-brand-green" /> : <XCircle className="w-4 h-4 text-brand-red" />}
                        <span className={hasRider ? 'text-brand-navy font-medium' : 'text-brand-text-secondary'}>{plan.insurer}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <ConsultCTA title="Not sure which riders you need?" subtitle="Our advisors will recommend the right riders based on your health, occupation, and family situation." category="term-benefits" />

          <div className="mt-16 text-center">
            <Link to="/life-insurance/plans" className="inline-flex items-center gap-2 text-brand-teal font-bold hover:text-brand-teal-hover transition-colors">
              See Our Top-Ranked Plans <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default BenefitsFeatures;
