import { motion } from 'framer-motion';
import { Car, CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/shared/Breadcrumb';
import SectionHeader from '../../components/shared/SectionHeader';
import ConsultCTA from '../../components/consultation/ConsultCTA';

const keyFeatures = [
  { title: 'Zero Depreciation Cover', description: 'Get full claim value without depreciation deduction on vehicle parts.', good: 'Full claim on bumper, glass, tyres', bad: '40–50% deduction on rubber/plastic parts' },
  { title: 'Engine Protection', description: 'Covers engine damage due to water ingress, oil leakage, or hydrostatic lock.', good: 'Full engine repair/replacement covered', bad: 'Engine damage excluded from standard policy' },
  { title: 'Cashless Garage Network', description: 'The number of garages where you can get repairs without paying upfront.', good: '8,000+ network garages', bad: 'Less than 5,000 garages' },
  { title: 'Roadside Assistance', description: '24/7 emergency support including towing, battery jump-start, and flat tyre.', good: 'Unlimited assistance, 24/7', bad: 'Limited to 2–4 times/year' },
  { title: 'NCB Protection', description: 'Keeps your No Claim Bonus intact even if you make one small claim.', good: 'NCB protected up to 1 claim/year', bad: 'NCB lost on any claim' },
  { title: 'Personal Accident Cover', description: 'Covers personal injury or death to the owner-driver while driving.', good: '₹15L PA cover included', bad: 'PA cover often inadequate' },
];

const BenefitsFeatures = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-gradient-to-b from-emerald-50/50 to-transparent">
        <div className="max-w-container mx-auto px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Motor Insurance', href: '/motor-insurance' }, { label: 'Benefits & Features', href: '/motor-insurance/benefits' }]} />
          <div className="max-w-3xl">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mb-6"><Car className="w-7 h-7" /></div>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-brand-navy mb-4">Benefits & Features</h1>
            <p className="text-xl text-brand-text-secondary leading-relaxed">Understand what features and add-ons make the difference in a motor insurance plan.</p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-container mx-auto px-4 md:px-8">
          <SectionHeader eyebrow="What Matters" title="Key Features to Compare" subtitle="These features separate a good motor insurance plan from an average one." />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {keyFeatures.map((feature, i) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-soft">
                <h3 className="font-display font-bold text-lg text-brand-navy mb-2">{feature.title}</h3>
                <p className="text-sm text-brand-text-secondary mb-4 leading-relaxed">{feature.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm"><CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" /><span className="text-brand-green font-medium">{feature.good}</span></div>
                  <div className="flex items-center gap-2 text-sm"><XCircle className="w-4 h-4 text-brand-red flex-shrink-0" /><span className="text-brand-red/80">{feature.bad}</span></div>
                </div>
              </motion.div>
            ))}
          </div>

          <ConsultCTA title="Need help choosing the right motor insurance add-ons?" subtitle="Our experts will recommend the essential add-ons based on your vehicle and city." category="motor-benefits" />

          <div className="mt-16 text-center">
            <Link to="/motor-insurance/plans" className="inline-flex items-center gap-2 text-brand-teal font-bold hover:text-brand-teal-hover transition-colors">See Our Top-Ranked Plans <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default BenefitsFeatures;
