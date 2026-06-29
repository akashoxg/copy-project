import { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, Search } from 'lucide-react';
import { FAQS } from '../../utils/constants';
import SectionHeader from '../shared/SectionHeader';

const FAQSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const generalFaqs = FAQS.filter(faq => faq.category === 'general');
  const filteredFaqs = searchQuery
    ? generalFaqs.filter(
        faq =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : generalFaqs;

  return (
    <section className="py-20 md:py-28 bg-gray-50/80 border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <SectionHeader
          eyebrow="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our platform and how we help you find the right insurance."
        />

        {/* Search filter */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-text-secondary pointer-events-none" aria-hidden="true" />
          <input
            type="search"
            placeholder="Search questions…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent text-sm transition-shadow placeholder:text-brand-text-secondary/50"
            aria-label="Search frequently asked questions"
          />
        </div>

        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 text-brand-text-secondary">
            <p className="mb-2 font-medium">No matching questions found.</p>
            <p className="text-sm">Try a different search term or browse all questions below.</p>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="mt-4 text-sm text-brand-teal font-semibold hover:underline"
            >
              Clear search
            </button>
          </div>
        ) : (
          <Accordion.Root type="single" collapsible className="space-y-3">
            {filteredFaqs.map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl shadow-soft overflow-hidden focus-within:ring-2 focus-within:ring-brand-teal focus-within:ring-offset-2 group border border-gray-100 hover:border-brand-teal/20 transition-colors duration-200"
              >
                <Accordion.Header className="flex">
                  <Accordion.Trigger className="flex-1 flex items-center gap-4 p-5 md:p-6 text-left focus:outline-none cursor-pointer">
                    <span className="w-7 h-7 rounded-full bg-brand-teal-light text-brand-teal font-data font-bold text-xs flex items-center justify-center flex-shrink-0 group-data-[state=open]:bg-brand-teal group-data-[state=open]:text-white transition-colors duration-200">
                      {index + 1}
                    </span>
                    <span className="font-display font-semibold text-brand-navy text-[15px] md:text-base flex-1 group-hover:text-brand-teal transition-colors duration-200 pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className="w-4 h-4 text-brand-text-secondary group-data-[state=open]:rotate-180 group-data-[state=open]:text-brand-teal transition-transform duration-300 flex-shrink-0"
                      aria-hidden="true"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                
                <Accordion.Content className="overflow-hidden text-brand-text-secondary text-sm md:text-base leading-relaxed data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                  <div className="px-5 md:px-6 pb-5 md:pb-6 pl-[4.25rem]">
                    {faq.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        )}
      </div>
    </section>
  );
};

export default FAQSection;
