import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../../utils/constants';
import BookingModal from '../consultation/BookingModal';

const MobileBottomBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the bar after scrolling down a bit (e.g., past the hero section)
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="fixed bottom-0 left-0 right-0 z-40 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.05)] border-t border-gray-200 p-3 md:hidden pb-[env(safe-area-inset-bottom,12px)]"
          >
            <div className="flex gap-3">
              <a
                href={getWhatsAppUrl('mobile-bottom-bar')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-green-50 text-green-600 font-semibold rounded-xl border border-green-200"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat</span>
              </a>
              <button
                onClick={() => setBookingOpen(true)}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-brand-teal text-white font-semibold rounded-xl"
              >
                <Phone className="w-5 h-5" />
                <span>Call Us</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} source="mobile-bottom-bar" />
    </>
  );
};

export default MobileBottomBar;
