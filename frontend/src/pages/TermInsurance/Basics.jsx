import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, Info, AlertTriangle } from 'lucide-react';
import Breadcrumb from '../../components/shared/Breadcrumb';
import ConsultCTA from '../../components/consultation/ConsultCTA';

const Basics = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-gradient-to-b from-blue-50/50 to-transparent">
        <div className="max-w-container mx-auto px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Life Insurance', href: '/life-insurance' }, { label: 'Basics', href: '/life-insurance/basics' }]} />
          <div className="max-w-3xl">
            <div className="w-14 h-14 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-6"><BookOpen className="w-7 h-7" /></div>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-brand-navy mb-4">Term Insurance Basics</h1>
            <p className="text-xl text-brand-text-secondary leading-relaxed">Everything you need to know about term life insurance — the most affordable way to protect your family’s financial future.</p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-container mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <div className="mb-16">
              <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">What is Term Insurance?</h2>
              <p className="text-brand-text-secondary leading-relaxed mb-4">Term insurance is a pure protection plan that pays a large sum (the “sum assured”) to your family if you pass away during the policy term. Unlike investment-linked plans (ULIPs, endowments), term plans offer the highest cover at the lowest premium.</p>
              <p className="text-brand-text-secondary leading-relaxed mb-4">A 30-year-old non-smoking male can get ₹1 Crore of cover for as little as ₹8,000–10,000 per year. No other financial product offers this level of protection at this price.</p>
              <div className="callout-info">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-sm text-brand-navy"><strong>Rule of thumb:</strong> Your term cover should be at least 10–15 times your annual income, plus any outstanding loans (home loan, car loan, etc.).</p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">Why You Need Term Insurance</h2>
              <ul className="space-y-3">
                {['Protects your family’s lifestyle if you’re no longer there to earn', 'Covers outstanding home loans and other debts', 'Funds your children’s education and marriage', 'Tax benefits under Section 80C (premium) and 10(10D) (death benefit)', 'Extremely affordable — less than ₹1,000/month for ₹1 Cr cover', 'Peace of mind knowing your dependents are financially secure'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-text-secondary">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <ConsultCTA title="How much term cover do you need?" subtitle="Our experts can calculate the exact cover amount based on your income, debts, and family needs." category="term-basics" />

            <div className="mb-16 mt-16">
              <h2 className="font-display font-bold text-2xl text-brand-navy mb-6">Key Terms to Know</h2>
              <div className="space-y-4">
                {[
                  { term: 'Sum Assured', def: 'The amount your family receives if you pass away during the policy term. Choose 10–15x your annual income.' },
                  { term: 'Policy Term', def: 'How long the policy covers you. Typically, choose to cover until age 60–65 (your working years).' },
                  { term: 'Premium Paying Term', def: 'How long you pay premiums. Can be the same as policy term, or shorter (e.g., pay for 20 years, covered for 40).' },
                  { term: 'Claim Settlement Ratio (CSR)', def: 'Percentage of claims the insurer approved last year. Look for CSR above 97%.' },
                  { term: 'Riders', def: 'Add-on benefits like Critical Illness, Accidental Death, or Disability cover. Available for a small extra premium.' },
                  { term: 'Return of Premium', def: 'A variant where premiums are returned if you survive the policy term. Costs 2–3x more but appeals to those who don’t want to “lose” money.' },
                ].map((item) => (
                  <div key={item.term} className="bg-white rounded-xl p-5 border border-gray-100 shadow-soft">
                    <h4 className="font-display font-bold text-brand-navy mb-1.5">{item.term}</h4>
                    <p className="text-sm text-brand-text-secondary leading-relaxed">{item.def}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="font-display font-bold text-2xl text-brand-navy mb-6">Common Mistakes</h2>
              <div className="callout-warning mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-brand-amber flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-sm text-brand-navy"><strong>Avoid these:</strong> These mistakes can leave your family underprotected.</p>
                </div>
              </div>
              <ul className="space-y-3">
                {['Delaying purchase — premiums increase significantly with age', 'Choosing insufficient cover to save on premium', 'Not disclosing smoking/health conditions (leads to claim rejection)', 'Buying investment plans (ULIPs/endowments) instead of pure term', 'Ignoring the insurer’s claim settlement ratio', 'Not adding critical illness rider'].map((m, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-text-secondary">
                    <span className="w-6 h-6 rounded-full bg-brand-red/10 text-brand-red font-data font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            <ConsultCTA title="Ready to secure your family?" subtitle="Book a free consultation to compare term plans and find the best one for your profile." category="term-basics-bottom" />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Basics;
