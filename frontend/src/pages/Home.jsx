import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import CategoryCards from '../components/home/CategoryCards';
import HowItWorks from '../components/home/HowItWorks';
import ComparisonBanner from '../components/home/ComparisonBanner';
import Testimonials from '../components/home/Testimonials';
import FAQSection from '../components/home/FAQSection';
import ConsultBanner from '../components/consultation/ConsultBanner';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <TrustBar />
      <CategoryCards />
      <HowItWorks />
      <ComparisonBanner />
      <Testimonials />
      <FAQSection />
      <ConsultBanner />
    </motion.div>
  );
};

export default Home;
