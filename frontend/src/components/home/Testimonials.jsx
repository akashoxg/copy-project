import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../utils/constants';
import ScoreStars from '../shared/ScoreStars';
import SectionHeader from '../shared/SectionHeader';

const planColors = {
  'Health Insurance': { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-100' },
  'Term Life Insurance': { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100' },
  'Motor Insurance': { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-100' },
};

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-20 md:py-28 bg-brand-white overflow-hidden">
      <div className="max-w-container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <SectionHeader
            eyebrow="Real Stories"
            title="Trusted by 10,000+ Families"
            align="left"
            className="mb-0"
          />
          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-brand-navy hover:bg-brand-teal hover:text-white hover:border-brand-teal transition-all duration-200 focus-visible:ring-2 focus-visible:ring-brand-teal"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              onClick={scrollNext}
              className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-brand-navy hover:bg-brand-teal hover:text-white hover:border-brand-teal transition-all duration-200 focus-visible:ring-2 focus-visible:ring-brand-teal"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex -ml-4 md:-ml-6">
            {TESTIMONIALS.map((testimonial, index) => {
              const colors = planColors[testimonial.plan] || planColors['Health Insurance'];
              const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=1B6B5A&color=fff&size=80&font-size=0.4&bold=true`;
              
              return (
                <div
                  key={index}
                  className="embla__slide pl-4 md:pl-6 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <div className="bg-white p-7 rounded-2xl shadow-soft hover:shadow-card transition-shadow duration-300 h-full border border-gray-50 flex flex-col relative overflow-hidden group">
                    {/* Subtle accent line at top */}
                    <div className={`absolute top-0 left-0 right-0 h-0.5 ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} aria-hidden="true" />
                    
                    <div className="flex items-center justify-between mb-5">
                      <ScoreStars rating={testimonial.rating} size="sm" />
                      <Quote className="w-7 h-7 text-brand-teal/10" aria-hidden="true" />
                    </div>
                    <p className="text-brand-text-secondary mb-7 flex-1 text-[15px] leading-relaxed">
                      “{testimonial.text}”
                    </p>
                    <div className="border-t border-gray-100 pt-5 mt-auto flex items-center gap-3">
                      <img
                        src={avatarUrl}
                        alt=""
                        width="40"
                        height="40"
                        className="w-10 h-10 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-brand-navy text-sm">{testimonial.name}</p>
                        <p className="text-xs text-brand-text-secondary">{testimonial.city}</p>
                      </div>
                      <span className={`text-xs px-2.5 py-1 rounded-full ${colors.bg} ${colors.text} font-medium whitespace-nowrap`}>
                        {testimonial.plan}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
