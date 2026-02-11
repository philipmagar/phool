import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-24 bg-cream-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div className="order-2 lg:order-1 relative" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}>
                        <div className="grid grid-cols-2 gap-4">
                            <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} src="" alt="Florist's studio" className="rounded-3xl shadow-lg w-full h-64 object-cover transform translate-y-8" />
                            <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} src="" alt="Fresh botanical arrangement" className="rounded-3xl shadow-lg w-full h-64 object-cover" />
                        </div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-sage-light/20 rounded-full blur-3xl"></div>
                    </motion.div>
                    <motion.div className="order-1 lg:order-2" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}>
                        <span className="text-eucalyptus tracking-[0.3em] uppercase text-sm font-semibold mb-4 block">Our Ethos</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-espresso mb-6">Rooted in Passion,<br />Blooming with Artistry</h2>
                        <p className="text-espresso-light text-lg mb-6 leading-relaxed">Founded in 2024, Phool began with a simple belief: flowers are nature's poetry, and every arrangement should tell a story. Our team of master florists combines classical techniques with contemporary design sensibilities.</p>
                        <p className="text-espresso-light/80 mb-8 leading-relaxed">We source only the finest blooms from sustainable farms, ensuring that every petal meets our exacting standards for beauty, fragrance, and longevity.</p>
                        <div className="grid grid-cols-3 gap-8 border-t border-sage-light/30 pt-8">
                            {[
                                { val: "12", label: "Artisans" },
                                { val: "50+", label: "Varieties" },
                                { val: "100%", label: "Sustainable" }
                            ].map((stat, idx) => (
                                <motion.div key={idx} className={`text-center ${idx > 0 ? 'border-l border-sage-light/30' : ''}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 * idx, duration: 0.5 }}>
                                    <p className="font-serif text-3xl text-eucalyptus mb-1">{stat.val}</p>
                                    <p className="text-espresso-light/60 text-[10px] uppercase tracking-wider">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
