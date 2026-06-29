import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, Info, AlertTriangle } from 'lucide-react';
import Breadcrumb from '../../components/shared/Breadcrumb';
import ConsultCTA from '../../components/consultation/ConsultCTA';

const Basics = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-gradient-to-b from-emerald-50/50 to-transparent">
        <div className="max-w-container mx-auto px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Motor Insurance', href: '/motor-insurance' }, { label: 'Basics', href: '/motor-insurance/basics' }]} />
          <div className="max-w-3xl">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mb-6"><BookOpen className="w-7 h-7" /></div>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-brand-navy mb-4">Motor Insurance Basics</h1>
            <p className="text-xl text-brand-text-secondary leading-relaxed">Understand the types of motor insurance, key add-ons, and how to choose the right plan for your vehicle.</p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-container mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <div className="mb-16">
              <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">Types of Motor Insurance</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-soft">
                  <h3 className="font-display font-bold text-lg text-brand-navy mb-2">Third-Party Only (Mandatory)</h3>
                  <p className="text-sm text-brand-text-secondary mb-2">Covers damage you cause to others — their vehicle, property, or injuries. This is legally required. Does NOT cover your own vehicle’s damage.</p>
                  <p className="text-xs font-data text-brand-text-secondary">Premium: Fixed by IRDAI • ₹2,094 (car) or ₹714 (two-wheeler)</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-soft border-l-4 border-l-brand-teal">
                  <h3 className="font-display font-bold text-lg text-brand-teal mb-2">Comprehensive (Recommended)</h3>
                  <p className="text-sm text-brand-text-secondary mb-2">Covers third-party liability PLUS your own vehicle’s damage from accidents, theft, fire, natural calamities, etc. Add-ons like zero depreciation and engine protection make it much more valuable.</p>
                  <p className="text-xs font-data text-brand-text-secondary">Premium: Varies by vehicle, age, city • Typically ₹7,000–15,000/yr for cars</p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">Essential Add-Ons</h2>
              <ul className="space-y-3">
                {[
                  { name: 'Zero Depreciation', desc: 'Full claim amount without depreciation deduction on parts. Essential for new vehicles.' },
                  { name: 'Engine Protection', desc: 'Covers engine damage from waterlogging, oil leakage, etc. Critical in flood-prone cities.' },
                  { name: 'Roadside Assistance', desc: '24/7 breakdown help including towing, battery jump-start, flat tyre, and key lockout.' },
                  { name: 'NCB Protection', desc: 'Protects your No Claim Bonus even if you make a small claim during the year.' },
                  { name: 'Return to Invoice', desc: 'Gets you the full invoice value (not depreciated value) if your car is stolen or totally damaged.' },
                  { name: 'Consumables Cover', desc: 'Covers cost of engine oil, nuts, bolts, and other consumables used during repairs.' },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <span className="font-semibold text-brand-navy">{item.name}:</span>{' '}
                      <span className="text-brand-text-secondary">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <ConsultCTA title="Need help choosing the right add-ons?" subtitle="Our experts will recommend add-ons based on your vehicle age, city, and driving patterns." category="motor-basics" />

            <div className="mb-16 mt-16">
              <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">What is NCB (No Claim Bonus)?</h2>
              <p className="text-brand-text-secondary leading-relaxed mb-4">NCB is a reward for not making claims. Your premium discount increases each claim-free year:</p>
              <div className="callout-info mb-4">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-sm text-brand-navy"><strong>NCB Scale:</strong> Year 1: 20% → Year 2: 25% → Year 3: 35% → Year 4: 45% → Year 5+: 50% discount on your own damage premium.</p>
                </div>
              </div>
              <p className="text-brand-text-secondary leading-relaxed">Your NCB is transferable between insurers. Always ask for your NCB certificate when switching companies.</p>
            </div>

            <div className="mb-16">
              <h2 className="font-display font-bold text-2xl text-brand-navy mb-6">Common Mistakes</h2>
              <div className="callout-warning mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-brand-amber flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-sm text-brand-navy"><strong>Avoid these:</strong> They can lead to claim rejection or significant out-of-pocket expenses.</p>
                </div>
              </div>
              <ul className="space-y-3">
                {['Buying only third-party to save ₹3,000–5,000 and risking lakhs on own damage', 'Not adding zero depreciation on a new vehicle (depreciation can reduce claim by 40–50%)', 'Letting your policy lapse — you lose NCB and need vehicle inspection', 'Not disclosing vehicle modifications to the insurer', 'Filing too many small claims and losing your NCB'].map((m, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-text-secondary">
                    <span className="w-6 h-6 rounded-full bg-brand-red/10 text-brand-red font-data font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            <ConsultCTA title="Questions about your motor insurance?" subtitle="Our experts can help with renewals, NCB transfers, and claim guidance." category="motor-basics-bottom" />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Basics;
