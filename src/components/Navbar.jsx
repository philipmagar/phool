import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Collections', href: '#collections' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
    ];

    return (
        <motion.nav
            className="fixed w-full z-50 transition-colors duration-300"
            animate={{
                backgroundColor: isScrolled ? "rgba(253, 251, 247, 0.95)" : "transparent",
                backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
                boxShadow: isScrolled ? "0 4px 15px -1px rgba(0, 0, 0, 0.05)" : "none",
                y: 0
            }}
            initial={{ y: -100 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center gap-3">
                        <motion.div
                            className="w-10 h-10 rounded-full bg-eucalyptus flex items-center justify-center shadow-lg"
                            whileHover={{ rotate: 180 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="text-white text-xl">✦</span>
                        </motion.div>
                        <span className={`font-serif text-2xl font-semibold tracking-wide transition-colors duration-300 ${isScrolled ? 'text-espresso' : 'text-espresso'}`}>
                            Phool
                        </span>
                    </div>

                    <div className="hidden md:flex space-x-10 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`transition-colors font-medium tracking-widest text-[11px] uppercase relative group ${isScrolled ? 'text-espresso/80 hover:text-eucalyptus' : 'text-espresso/80 hover:text-eucalyptus'
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-eucalyptus`}></span>
                            </a>
                        ))}
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-7 py-2.5 rounded-full shadow-lg text-[11px] uppercase tracking-widest font-bold transition-all ${isScrolled
                                ? 'bg-eucalyptus text-white hover:bg-eucalyptus-dark'
                                : 'bg-eucalyptus text-white hover:bg-eucalyptus-dark'
                                }`}
                        >
                            Enquire
                        </motion.a>
                    </div>

                    <button
                        className={`md:hidden focus:outline-none text-espresso`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>


            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-cream-50 border-t border-sage-light/20 overflow-hidden shadow-2xl"
                    >
                        <div className="px-6 py-8 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="block text-espresso text-sm tracking-widest uppercase font-medium hover:text-eucalyptus transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="block text-espresso text-sm tracking-widest uppercase font-medium hover:text-eucalyptus transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
