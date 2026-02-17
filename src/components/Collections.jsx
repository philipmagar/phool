import { motion as Motion } from "framer-motion";

import tulip from "../assets/images/tulip.png";
import cosmos from "../assets/images/cosmos.jpg";
import boquiet from "../assets/images/boquiet.jpg";

const collections = [
  {
    title: "The Eucalyptus Serenity",
    description: "Fresh sage and silver dollar eucalyptus branches",
    price: "From $145",
    image: tulip,
    tag: "Fresh Growth",
  },
  {
    title: "Blush Morning",
    description: "Soft ranunculus and dusty rose peonies",
    price: "From $180",
    image: cosmos,
    tag: "Boutique Choice",
  },
  {
    title: "Artisanal Ivory",
    description: "Premium white lilies and eucalyptus accents",
    price: "From $210",
    image: boquiet,
    tag: "Premium",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Collections() {
  return (
    <section
      id="collections"
      className="py-24 bg-cream-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-cream-100/50 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-eucalyptus tracking-[0.3em] uppercase text-sm font-semibold mb-4 block underline decoration-blush decoration-2 underline-offset-8">
            Our Collections
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso mb-6">
            Signature Arrangements
          </h2>
        </Motion.div>

        <Motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {collections.map((item, index) => (
            <Motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-[2.5rem] bg-white shadow-xl hover:shadow-2xl transition-all duration-500"
              whileHover={{ y: -10 }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <Motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-serif text-2xl text-espresso mb-1">
                      {item.title}
                    </h3>
                    <p className="text-espresso-light text-sm italic">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-blush-dark font-serif text-xl">
                    {item.price}
                  </span>
                  <button className="text-eucalyptus font-bold text-xs uppercase tracking-widest hover:text-eucalyptus-dark transition-colors">
                    Details
                  </button>
                </div>
              </div>
              {item.tag && (
                <div
                  className={`absolute top-6 left-6 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 ${item.tag === "Premium" ? "bg-eucalyptus/80 shadow-lg" : "bg-blush/80 shadow-lg"}`}
                >
                  <span
                    className={`text-white text-[10px] font-bold uppercase tracking-widest`}
                  >
                    {item.tag}
                  </span>
                </div>
              )}
            </Motion.div>
          ))}
        </Motion.div>

        <Motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-3 text-espresso hover:text-eucalyptus font-bold text-xs uppercase tracking-[0.3em] transition-all group"
          >
            View Entire Catalog
            <Motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </Motion.svg>
          </a>
        </Motion.div>
      </div>
    </section>
  );
}
