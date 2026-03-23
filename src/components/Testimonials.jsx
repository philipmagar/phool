import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        name: "Eleanor Sterling",
        role: "Estate Curator",
        content: "Phool transformed our gala into an ethereal sanctuary. The architectural precision of their eucalyptus installations is simply unmatched in the industry.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
        name: "Julian Vane",
        role: "Creative Director",
        content: "What sets Phool apart is their ability to capture emotion through botany. Every arrangement tells a specific, poetic story that resonates deep within.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
        name: "Sienna Rivers",
        role: "Luxury Event Designer",
        content: "The level of freshness and the curated color palettes are astounding. It's not just floristry; it's high-art botanical design for the modern era.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 500 : -500,
            opacity: 0,
            scale: 0.9
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 500 : -500,
            opacity: 0,
            scale: 0.9
        })
    };

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="testimonials" className="py-32 bg-espresso relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }}></div>
            </div>
            
            <motion.div 
                className="absolute top-1/4 -right-20 w-96 h-96 bg-eucalyptus/10 rounded-full blur-[100px]"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 10, repeat: Infinity }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-sage-light tracking-[0.4em] uppercase text-xs font-bold mb-6 block"
                    >
                        Echoes of Beauty
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="font-serif text-4xl md:text-6xl text-white leading-tight"
                    >
                        Voices from the <span className="italic font-light">Sanctuary</span>
                    </motion.h2>
                </div>

                <div className="relative h-[450px] md:h-[400px] flex items-center justify-center">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.4 }
                            }}
                            className="absolute w-full max-w-4xl"
                        >
                            <div className="flex flex-col items-center text-center px-4">
                                <div className="mb-10 relative">
                                    <div className="absolute -inset-4 bg-eucalyptus/20 rounded-full blur-xl"></div>
                                    <img 
                                        src={testimonials[currentIndex].image} 
                                        alt={testimonials[currentIndex].name}
                                        className="w-24 h-24 rounded-full object-cover border-2 border-sage-light/30 relative z-10 shadow-2xl"
                                    />
                                    <div className="absolute -right-2 -bottom-2 w-10 h-10 bg-blush rounded-full flex items-center justify-center text-white text-xl z-20 shadow-lg">
                                        “
                                    </div>
                                </div>
                                <p className="font-serif text-2xl md:text-3xl text-cream-50/90 mb-10 leading-relaxed italic max-w-3xl">
                                    {testimonials[currentIndex].content}
                                </p>
                                <div>
                                    <h4 className="text-white font-bold tracking-widest uppercase text-sm mb-1">
                                        {testimonials[currentIndex].name}
                                    </h4>
                                    <p className="text-sage-light text-[11px] uppercase tracking-[0.2em] font-medium">
                                        {testimonials[currentIndex].role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-12 z-20">
                        <button 
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-all duration-300 group"
                        >
                            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                            </svg>
                        </button>
                        
                        <div className="flex gap-3">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setDirection(idx > currentIndex ? 1 : -1);
                                        setCurrentIndex(idx);
                                    }}
                                    className={`h-1 rounded-full transition-all duration-500 ${
                                        idx === currentIndex ? 'w-12 bg-blush' : 'w-4 bg-white/10 hover:bg-white/30'
                                    }`}
                                />
                            ))}
                        </div>

                        <button 
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-all duration-300 group"
                        >
                            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
