import { motion } from 'framer-motion';

export default function Gallery() {
    const images = [
    ];

    return (
        <section className="py-24 bg-eucalyptus">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}   transition={{ duration: 0.6 }}>
                    <h2 className="font-serif text-4xl text-cream-50 mb-4">Follow Our Growth</h2>
                    <p className="text-sage-light tracking-[0.2em] uppercase text-sm font-medium">@phoolfloral</p>
                </motion.div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {images.map((src, index) => (
                        <motion.div key={index} className="aspect-[4/5] overflow-hidden group cursor-pointer relative rounded-2xl" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }} whileHover={{ y: -5 }}>
                            <motion.img src={src} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" alt={`Botanical inspiration ${index + 1}`} whileHover={{ scale: 1.1 }} transition={{ duration: 0.8 }} />
                            <div className="absolute inset-0 bg-eucalyptus-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white text-xs tracking-widest uppercase">View</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
