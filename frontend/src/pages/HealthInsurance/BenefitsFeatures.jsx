import { motion } from 'framer-motion';
import { HeartPulse, CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/shared/Breadcrumb';
import SectionHeader from '../../components/shared/SectionHeader';
import ConsultCTA from '../../components/consultation/ConsultCTA';

const keyFeatures = [
  { title: 'Room Rent Coverage', description: 'Best plans offer no room rent limits — so you can pick any room without proportional deductions.', good: 'No limit on room rent', bad: 'Capped at 1% of sum insured' },
  { title: 'Restoration Benefit', description: 'If you exhaust your sum insured, restoration gives you a fresh amount for subsequent claims.', good: 'Unlimited restoration for all illnesses', bad: 'Limited or no restoration' },
  { title: 'Cashless Network', description: 'More network hospitals = easier cashless access. Top plans have 10,000+ hospitals.', good: '10,000+ network hospitals', bad: 'Less than 5,000 hospitals' },
  { title: 'Day-Care Procedures', description: 'Modern surgeries that don’t require 24-hour hospitalization. Top plans cover 500+ procedures.', good: '500+ day-care procedures covered', bad: 'Limited list of procedures' },
  { title: 'Pre-Existing Conditions', description: 'The waiting period before pre-existing conditions are covered. Shorter is better.', good: '2-year waiting period', bad: '4-year waiting period' },
  { title: 'No Claim Bonus', description: 'Your sum insured grows each claim-free year. Top plans offer up to 100% cumulative bonus.', good: 'Up to 100% cumulative bonus', bad: 'No or limited bonus' },
];

const comprehensiveVsBasic = [
  { feature: 'Sum Insured Options', comprehensive: '₹10L – ₹1 Cr', basic: '₹2L – ₹5L' },
  { feature: 'Room Rent Limit', comprehensive: 'No limit', basic: 'Capped' },
  { feature: 'Restoration', comprehensive: 'Unlimited', basic: 'Limited or none' },
  { feature: 'Pre/Post Hospitalization', comprehensive: '60/180 days', basic: '30/60 days' },
  { feature: 'Day-Care Procedures', comprehensive: '500+', basic: 'Limited' },
  { feature: 'Annual Premium (30yr)', comprehensive: '₹10,000–20,000', basic: '₹4,000–7,000' },
];

const BenefitsFeatures = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-gradient-to-b from-rose-50/50 to-transparent">
        <div className="max-w-container mx-auto px-4 md:px-8">
          <Breadcrumb items={[
            { label: 'Health Insurance', href: '/health-insurance' },
            { label: 'Benefits & Features', href: '/health-insurance/benefits' },
          ]} />
          <div className="max-w-3xl">
            <div className="w-14 h-14 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center mb-6">
              <HeartPulse className="w-7 h-7" />
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-brand-navy mb-4">
              Benefits & Features
            </h1>
            <p className="text-xl text-brand-text-secondary leading-relaxed">
              Understand what makes a good health insurance plan. Compare key features and learn what to look for before buying.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-container mx-auto px-4 md:px-8">
          {/* Key Features Grid */}
          <SectionHeader
            eyebrow="What Matters"
            title="Key Features to Compare"
            subtitle="These are the features that separate a great health plan from an average one."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {keyFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-soft"
              >
                <h3 className="font-display font-bold text-lg text-brand-navy mb-2">{feature.title}</h3>
                <p className="text-sm text-brand-text-secondary mb-4 leading-relaxed">{feature.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" aria-hidden="true" />
                    <span className="text-brand-green font-medium">{feature.good}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <XCircle className="w-4 h-4 text-brand-red flex-shrink-0" aria-hidden="true" />
                    <span className="text-brand-red/80">{feature.bad}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <ConsultCTA
            title="Need help understanding which features matter for you?"
            subtitle="Our advisors will explain which features are critical based on your age, city, and family situation."
            category="health-benefits"
          />

          {/* Comparison Table */}
          <div className="mt-16 mb-16">
            <SectionHeader
              eyebrow="Plan Types"
              title="Comprehensive vs Basic Plans"
              subtitle="Why spending a little more on a comprehensive plan can save lakhs in the long run."
            />

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden min-w-[500px]">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-4 text-left text-sm font-semibold text-brand-navy">Feature</th>
                    <th className="p-4 text-left text-sm font-semibold text-brand-teal">Comprehensive</th>
                    <th className="p-4 text-left text-sm font-semibold text-brand-text-secondary">Basic</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {comprehensiveVsBasic.map((row) => (
                    <tr key={row.feature} className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-sm text-brand-navy font-medium">{row.feature}</td>
                      <td className="p-4 text-sm font-data font-semibold text-brand-teal">{row.comprehensive}</td>
                      <td className="p-4 text-sm text-brand-text-secondary">{row.basic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA to Plans */}
          <div className="text-center">
            <Link
              to="/health-insurance/plans"
              className="inline-flex items-center gap-2 text-brand-teal font-bold hover:text-brand-teal-hover transition-colors"
            >
              See Our Top-Ranked Plans <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default BenefitsFeatures;
