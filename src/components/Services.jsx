import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function Services() {
    return (
        <section id="services" className="py-32 bg-eucalyptus relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <motion.span variants={fadeInUp} className="text-sage-light tracking-[0.4em] uppercase text-xs font-bold mb-6 block">
                            Our Expertise
                        </motion.span>
                        <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-6xl text-white mb-8 leading-tight">
                            Bespoke Floral<br /><span className="italic font-light">Experiences</span>
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-cream-50/80 text-lg mb-12 leading-relaxed max-w-lg">
                            From intimate gatherings to grand celebrations, we craft botanical narratives that transform spaces and create moments of pure, natural calm.
                        </motion.p>

                        <motion.div variants={staggerContainer} className="space-y-8">
                            {[
                                { title: "Artisan Weddings", desc: "Cohesive floral styling that captures the unique heartbeat of your union.", path: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
                                { title: "Editorial Styling", desc: "Sophisticated botanical installations for brands and luxury publications.", path: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
                                { title: "Curated Subscriptions", desc: "The elegance of Phool, delivered weekly to your sanctuary.", path: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" }
                            ].map((service, idx) => (
                                <motion.div key={idx} variants={fadeInUp} className="flex gap-6 items-start group">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: -10 }}
                                        className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blush/30 transition-all duration-500"
                                    >
                                        <svg className="w-6 h-6 text-blush" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={service.path}></path></svg>
                                    </motion.div>
                                    <div>
                                        <h3 className="text-white font-serif text-2xl mb-2">{service.title}</h3>
                                        <p className="text-cream-50/60 text-sm leading-relaxed">{service.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.button
                            variants={fadeInUp}
                            whileHover={{ scale: 1.05, backgroundColor: "#E6B8B8", color: "#3D3635" }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-14 px-10 py-5 bg-white text-eucalyptus rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-xl flex items-center gap-3"
                        >
                            Start Your Journey
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </motion.button>
                    </motion.div>

                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl skew-y-1">
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.8 }}
                                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80"
                                alt="Floral Arrangement Process"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-eucalyptus-dark/40 to-transparent"></div>
                        </div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="absolute -bottom-10 -right-10 bg-cream-50 p-8 rounded-[2rem] shadow-2xl max-w-xs hidden xl:block border border-sage-light/20"
                        >
                            <div className="flex items-center gap-5 mb-4">
                                <div className="w-14 h-14 rounded-full bg-sage-light/30 flex items-center justify-center">
                                    <span className="text-2xl">🌱</span>
                                </div>
                                <div>
                                    <p className="font-serif text-espresso text-2xl font-bold">100%</p>
                                    <p className="text-espresso-light text-[10px] uppercase tracking-widest font-bold">Organic Growth</p>
                                </div>
                            </div>
                            <p className="text-espresso-light text-sm italic leading-relaxed">"Their designs feel alive, fresh, and deeply emotional."</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
