import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "How long do your floral arrangements typically last?",
        answer: "Most of our signature arrangements stay fresh for 7-10 days. We include a care guide and flower food with every delivery to ensure maximum longevity. Varieties like lilies and orchids can often last up to two weeks with proper care."
    },
    {
        question: "Do you offer same-day delivery?",
        answer: "Yes, we offer same-day delivery for orders placed before 1:00 PM local time. For weekend deliveries, we recommend booking at least 24 hours in advance to guarantee the selection of specific seasonal blooms."
    },
    {
        question: "Can I customize a subscription plan?",
        answer: "Absolutely. Our subscription service is fully tailored to your preferences. You can choose the frequency (weekly, bi-weekly, or monthly), the style (minimalist, lush, or architectural), and even specific color palettes to match your sanctuary."
    },
    {
        question: "What is your sustainable sourcing policy?",
        answer: "We are committed to ethical floristry. We prioritize local growers who use organic practices and avoid harmful pesticides. 100% of our packaging is biodegradable or recyclable, and we use floral foam alternatives for all our installations."
    },
    {
        question: "Do you provide floral styling for corporate events?",
        answer: "Yes, we handle large-scale botanical installations for corporate dinners, product launches, and editorial styling. Our team works closely with event planners to ensure the botanical narrative aligns perfectly with the brand identity."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="py-24 bg-cream-50 overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-eucalyptus tracking-[0.3em] uppercase text-xs font-bold mb-4 block underline decoration-blush decoration-2 underline-offset-8">Common Inquiries</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-espresso mb-6">Frequently Asked <span className="italic font-light">Questions</span></h2>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div 
                            key={index}
                            className={`rounded-3xl border border-sage-light/20 transition-all duration-500 overflow-hidden ${
                                openIndex === index ? 'bg-white shadow-xl' : 'bg-transparent'
                            }`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                className="w-full px-8 py-7 flex items-center justify-between text-left focus:outline-none group"
                            >
                                <span className={`font-serif text-xl md:text-2xl transition-colors duration-300 ${
                                    openIndex === index ? 'text-eucalyptus' : 'text-espresso/80 group-hover:text-espresso'
                                }`}>
                                    {faq.question}
                                </span>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                                    openIndex === index ? 'bg-eucalyptus text-white rotate-180' : 'bg-sage-light/10 text-espresso/40'
                                }`}>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>
                            </button>
                            
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                    >
                                        <div className="px-8 pb-8">
                                            <p className="text-espresso-light text-lg leading-relaxed max-w-3xl">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
