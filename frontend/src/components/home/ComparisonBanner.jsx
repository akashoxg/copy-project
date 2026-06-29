import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { useScrollReveal, fadeInUp } from '../../hooks/useScrollReveal';
import SectionHeader from '../shared/SectionHeader';
import { COMPARISON_DATA, BRAND } from '../../utils/constants';

const ComparisonBanner = () => {
  const { ref, controls } = useScrollReveal();

  return (
    <section className="py-20 md:py-28 bg-brand-navy text-white relative overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 bg-mesh-dark" aria-hidden="true" />
      <div className="absolute inset-0 dot-grid opacity-10" aria-hidden="true" />

      <div className="max-w-container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="The Unbiased Difference"
          subtitle="See how we stack up against traditional agents and commission-driven platforms."
          className="text-white"
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="max-w-4xl mx-auto bg-brand-navy-light/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-dramatic border border-white/5"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr>
                  <th className="p-6 text-white/40 font-medium text-sm uppercase tracking-wider w-1/3 border-b border-white/5">Features</th>
                  <th className="p-6 text-xl w-1/3 border-b border-brand-teal/20 relative">
                    <div className="absolute inset-0 bg-brand-teal/5" aria-hidden="true" />
                    <span className="relative font-display font-bold text-brand-teal">{BRAND.name}</span>
                  </th>
                  <th className="p-6 text-white/60 font-display font-bold text-xl w-1/3 border-b border-white/5">
                    Others
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_DATA.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="group hover:bg-white/[0.02] transition-colors duration-200"
                  >
                    <td className="p-6 text-white/60 font-medium text-sm border-b border-white/5">{row.feature}</td>
                    <td className="p-6 border-b border-white/5 relative">
                      <div className="absolute inset-0 bg-brand-teal/5" aria-hidden="true" />
                      <div className="relative flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-brand-teal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-brand-teal" aria-hidden="true" />
                        </div>
                        <span className="text-white font-medium text-sm">{row.us}</span>
                      </div>
                    </td>
                    <td className="p-6 text-white/40 border-b border-white/5">
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <X className="w-3 h-3 text-white/30" aria-hidden="true" />
                        </div>
                        <span className="text-sm">{row.them}</span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonBanner;
