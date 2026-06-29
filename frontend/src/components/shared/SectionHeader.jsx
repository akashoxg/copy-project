import { motion } from 'framer-motion';

const SectionHeader = ({ eyebrow, title, subtitle, align = 'center', theme = 'light', className = '' }) => {
  const alignClass = align === 'left' ? 'text-left' : 'text-center';
  const isDark = theme === 'dark' || className.includes('text-white');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`${align === 'left' ? 'max-w-2xl' : 'max-w-3xl mx-auto'} mb-12 md:mb-16 ${alignClass} ${className}`}
    >
      {eyebrow && (
        <span className={`inline-block text-label uppercase tracking-widest font-data mb-4 ${isDark ? 'text-teal-400' : 'text-brand-teal'}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display text-section-sm md:text-section mb-4 ${isDark ? 'text-white' : 'text-brand-navy'}`}>
        {title}
      </h2>
      {/* Gradient underline */}
      <div className={`h-0.5 w-12 bg-gradient-to-r from-brand-teal to-brand-teal/30 mb-5 ${align === 'center' ? 'mx-auto' : ''}`} aria-hidden="true" />
      {subtitle && (
        <p className={`text-lg leading-relaxed max-w-2xl ${isDark ? 'text-white/80' : 'text-brand-text-secondary'}`} style={{ margin: align === 'center' ? '0 auto' : undefined }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
