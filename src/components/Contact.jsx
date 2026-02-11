import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    const [formState, setFormState] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState('sending');


        setTimeout(() => {
            setFormState('success');
            e.target.reset();

            setTimeout(() => {
                setFormState('idle');
            }, 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 bg-cream-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-eucalyptus tracking-[0.4em] uppercase text-xs font-bold mb-6 block underline decoration-blush decoration-2 underline-offset-8">Get in Touch</span>
                        <h2 className="font-serif text-4xl md:text-6xl text-espresso mb-8 leading-tight">Let's Create Something <span className="italic font-light">Beautiful</span></h2>
                        <p className="text-espresso-light mb-10 text-lg leading-relaxed">
                            Ready to transform your sanctuary with bespoke botanical designs? Reach out for a complimentary consultation.
                        </p>
                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-sage-light/10 flex items-center justify-center text-eucalyptus group-hover:bg-sage-light/30 transition-all duration-500">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </div>
                                <div>
                                    <p className="text-espresso-light/60 text-[10px] uppercase tracking-widest font-bold">Inquiries</p>
                                    <p className="text-espresso font-semibold">+1 (555) FLORAL-88</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-sage-light/10 flex items-center justify-center text-eucalyptus group-hover:bg-sage-light/30 transition-all duration-500">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div>
                                    <p className="text-espresso-light/60 text-[10px] uppercase tracking-widest font-bold">Email</p>
                                    <p className="text-espresso font-semibold">studio@phoolfloral.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-sage-light/10 flex items-center justify-center text-eucalyptus group-hover:bg-sage-light/30 transition-all duration-500">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </div>
                                <div>
                                    <p className="text-espresso-light/60 text-[10px] uppercase tracking-widest font-bold">Boutique Studio</p>
                                    <p className="text-espresso font-semibold">128 Bloom Street, Garden District</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="bg-white rounded-[3rem] shadow-2xl p-10 md:p-12 border border-sage-light/10"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <form id="contact-form" className="space-y-8" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-espresso text-[10px] font-bold mb-3 uppercase tracking-[0.2em]">First Name</label>
                                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-cream-50/50 border border-sage-light/30 focus:border-eucalyptus focus:outline-none transition-all placeholder:text-espresso/20" placeholder="Jane" required />
                                </div>
                                <div>
                                    <label className="block text-espresso text-[10px] font-bold mb-3 uppercase tracking-[0.2em]">Last Name</label>
                                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-cream-50/50 border border-sage-light/30 focus:border-eucalyptus focus:outline-none transition-all placeholder:text-espresso/20" placeholder="Doe" required />
                                </div>
                            </div>
                            <div>
                                <label className="block text-espresso text-[10px] font-bold mb-3 uppercase tracking-[0.2em]">Email</label>
                                <input type="email" className="w-full px-6 py-4 rounded-2xl bg-cream-50/50 border border-sage-light/30 focus:border-eucalyptus focus:outline-none transition-all placeholder:text-espresso/20" placeholder="jane@example.com" required />
                            </div>
                            <div>
                                <label className="block text-espresso text-[10px] font-bold mb-3 uppercase tracking-[0.2em]">Interest</label>
                                <select className="w-full px-6 py-4 rounded-2xl bg-cream-50/50 border border-sage-light/30 focus:border-eucalyptus focus:outline-none transition-all appearance-none cursor-pointer text-espresso/80">
                                    <option>Artisan Wedding Styling</option>
                                    <option>Editorial Botanical Design</option>
                                    <option>Private Residence Subscription</option>
                                    <option>Boutique Consultation</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-espresso text-[10px] font-bold mb-3 uppercase tracking-[0.2em]">Vision</label>
                                <textarea rows="4" className="w-full px-6 py-4 rounded-2xl bg-cream-50/50 border border-sage-light/30 focus:border-eucalyptus focus:outline-none transition-all resize-none placeholder:text-espresso/20" placeholder="Tell us about your atmosphere..."></textarea>
                            </div>
                            <motion.button
                                type="submit"
                                disabled={formState !== 'idle'}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.3em] transition-all shadow-xl flex items-center justify-center gap-3 group ${formState === 'success' ? 'bg-sage text-white' : 'bg-eucalyptus text-white hover:bg-eucalyptus-dark'
                                    }`}
                            >
                                {formState === 'idle' && (
                                    <>
                                        Reach Out
                                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </>
                                )}
                                {formState === 'sending' && (
                                    <>
                                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Connecting...
                                    </>
                                )}
                                {formState === 'success' && (
                                    <>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        Received with Love
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
