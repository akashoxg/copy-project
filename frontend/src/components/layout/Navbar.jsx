import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, ChevronDown, Shield, Phone } from 'lucide-react';
import { NAV_LINKS, BRAND } from '../../utils/constants';
import MobileDrawer from './MobileDrawer';
import BookingModal from '../consultation/BookingModal';
import LineHoverLink from '@/components/ui/line-hover-link';
import AnimatedButton from '@/components/ui/animated-button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileOpen(false);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-soft border-b border-gray-100/50'
            : 'bg-brand-navy/80 backdrop-blur-md border-b border-white/5'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20 md:h-24 gap-4">
            {/* Left: Desktop Nav Links with LineHoverLink */}
            <div className="hidden lg:flex items-center gap-6" ref={dropdownRef}>
              {NAV_LINKS.map((link) => (
                <div 
                  key={link.label} 
                  className="relative group py-2"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <LineHoverLink
                    to={link.href}
                    variant="slide"
                    className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-200 ${
                      isScrolled ? 'text-brand-navy hover:text-brand-teal' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.children && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 ml-0.5 inline transition-transform duration-200 ${
                          activeDropdown === link.label ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    )}
                  </LineHoverLink>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {link.children && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-60 bg-white rounded-xl shadow-elevated border border-gray-100 overflow-hidden z-50"
                      >
                        <div className="p-1.5">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className="block px-3.5 py-2.5 rounded-lg text-sm text-brand-text-secondary hover:bg-brand-teal-light/50 hover:text-brand-teal transition-colors duration-150 font-medium"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Center/Left: CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <AnimatedButton
                onClick={() => setBookingOpen(true)}
                className="hidden md:inline-flex px-5 py-2.5 text-xs md:text-sm"
              >
                <Phone className="w-4 h-4 mr-1.5 inline" aria-hidden="true" />
                Buy Insurance
              </AnimatedButton>

              <button
                type="button"
                className={`lg:hidden p-2 rounded-lg transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-brand-teal ${
                  isScrolled ? 'text-brand-navy hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Extreme Right: Logo + Brand Name */}
            <Link
              to="/"
              className="flex items-center gap-3 group ml-auto"
              aria-label={`${BRAND.name} — Home`}
            >
              <span className={`font-display font-extrabold text-2xl md:text-3xl tracking-tight ${
                isScrolled ? 'text-brand-navy' : 'text-white'
              }`}>
                {BRAND.name}
              </span>
              <img 
                src="/logo.png" 
                alt={`${BRAND.name} Logo`} 
                className="h-14 md:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-110 drop-shadow-sm" 
              />
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onBooking={() => {
          setMobileOpen(false);
          setBookingOpen(true);
        }}
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </>
  );
};

export default Navbar;
