import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 250]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream-50" ref={containerRef}>

            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div
                    className="absolute inset-0 w-full h-full opacity-40"
                    style={{ y }}
                >
                    <img
                        src="/botanical_hero.webp"
                        alt="Serene Floral Arrangement"
                        className="w-full h-full object-cover scale-110"
                        onError={(e) => {
                            e.target.src = "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=1920&q=80";
                        }}
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-cream-50/20 via-transparent to-cream-50/80"></div>
            </div>


            <motion.div
                animate={{
                    y: [-20, 20, -20],
                    rotate: [0, 10, -10, 0]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-20 left-10 w-32 h-32 rounded-full bg-sage-light/20 blur-3xl"
            />
            <motion.div
                animate={{
                    y: [20, -20, 20],
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-blush-light/30 blur-3xl"
            />

            <motion.div
                className="relative z-10 text-center px-6 max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.div
                    className="mb-6 inline-block"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <span className="text-eucalyptus text-lg tracking-[0.3em] uppercase font-medium">
                        Artisan Floristry
                    </span>
                </motion.div>

                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-espresso mb-6 leading-tight overflow-hidden">
                    <motion.span
                        className="block"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
                    >
                        Freshness in <span className="italic text-eucalyptus">Bloom</span>
                    </motion.span>
                    <motion.span
                        className="block"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.45, ease: [0.33, 1, 0.68, 1] }}
                    >
                        Poetry in Petals
                    </motion.span>
                </h1>

                <motion.p
                    className="text-espresso-light text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    Experience the calm of nature through our hand-crafted botanical designs. Each arrangement is a testament to growth, beauty, and the art of the floral craft.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                >
                    <motion.a
                        href="#collections"
                        className="px-8 py-4 bg-eucalyptus text-white rounded-full font-semibold shadow-xl tracking-wide"
                        whileHover={{ scale: 1.05, backgroundColor: "#4A685B" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Explore Collections
                    </motion.a>
                    <motion.a
                        href="#contact"
                        className="px-8 py-4 border-2 border-eucalyptus text-eucalyptus rounded-full font-semibold shadow-sm tracking-wide"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(95, 133, 117, 0.05)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Book Consultation
                    </motion.a>
                </motion.div>
            </motion.div>

            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{ opacity }}
            >
                <svg className="w-6 h-6 text-eucalyptus/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </motion.div>
        </section>
    );
}
