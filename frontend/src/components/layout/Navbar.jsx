import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, ChevronDown, Shield, Phone } from 'lucide-react';
import { NAV_LINKS, BRAND } from '../../utils/constants';
import MobileDrawer from './MobileDrawer';
import BookingModal from '../consultation/BookingModal';

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
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group"
              aria-label={`${BRAND.name} — Home`}
            >
              <img 
                src="/logo.png" 
                alt={`${BRAND.name} Logo`} 
                className="h-14 md:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-110 drop-shadow-sm" 
              />
              <span className={`font-display font-extrabold text-2xl md:text-3xl tracking-tight ${
                isScrolled ? 'text-brand-navy' : 'text-white'
              }`}>
                {BRAND.name}
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-0.5" ref={dropdownRef}>
              {NAV_LINKS.map((link) => (
                <div 
                  key={link.label} 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.href}
                    className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 ${
                      isScrolled
                        ? 'text-brand-text-secondary hover:text-brand-teal hover:bg-brand-teal-light/50'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    } ${activeDropdown === link.label ? (isScrolled ? 'text-brand-teal bg-brand-teal-light/50' : 'text-white bg-white/10') : ''}`}
                    aria-expanded={activeDropdown === link.label}
                    aria-haspopup={link.children ? 'true' : undefined}
                  >
                    {link.label}
                    {link.children && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeDropdown === link.label ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {link.children && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-60 bg-white rounded-xl shadow-elevated border border-gray-100 overflow-hidden"
                      >
                        <div className="p-1.5">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className="block px-3.5 py-2.5 rounded-lg text-sm text-brand-text-secondary hover:bg-brand-teal-light/50 hover:text-brand-teal transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-inset font-medium"
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

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-brand-teal text-white text-sm font-semibold rounded-full hover:bg-brand-teal-hover transition-colors duration-200 shadow-sm hover:shadow-md focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Buy Insurance
              </button>

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
