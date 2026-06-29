import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle } from 'lucide-react';
import { useScrollReveal, fadeInUp } from '../../hooks/useScrollReveal';
import BookingModal from '../consultation/BookingModal';

const ConsultCTA = ({ title = "Confused which plan is right for you?", subtitle = "Our experts have analyzed the fine print of 150+ policies. Let us help you find your perfect match.", category = "general" }) => {
  const { ref, controls } = useScrollReveal({ threshold: 0 });
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
        className="expert-note my-12"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex-1">
            <h4 className="font-display font-bold text-xl text-brand-navy mb-2">
              {title}
            </h4>
            <p className="text-brand-text-secondary">
              {subtitle}
            </p>
            <ul className="mt-4 flex flex-col sm:flex-row gap-4">
              <li className="flex items-center gap-1.5 text-sm font-medium text-brand-teal">
                <CheckCircle className="w-4 h-4" /> 100% Free
              </li>
              <li className="flex items-center gap-1.5 text-sm font-medium text-brand-teal">
                <CheckCircle className="w-4 h-4" /> No Spam Calls
              </li>
              <li className="flex items-center gap-1.5 text-sm font-medium text-brand-teal">
                <CheckCircle className="w-4 h-4" /> Unbiased Advice
              </li>
            </ul>
          </div>
          <div className="w-full md:w-auto">
            <button
              onClick={() => setBookingOpen(true)}
              className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-brand-teal text-white font-semibold rounded-xl hover:bg-brand-teal-hover transition-colors shadow-md focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
            >
              <Phone className="w-4 h-4" />
              Talk to an Expert
            </button>
          </div>
        </div>
      </motion.div>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} source={`cta-${category}`} />
    </>
  );
};

export default ConsultCTA;
