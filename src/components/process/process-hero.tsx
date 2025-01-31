import { motion } from 'framer-motion';

const heroContent = {
  title: "Nuestro Proceso de Desarrollo",
  subtitle: "De idea a realidad en 5 días",
  description: "Un enfoque ágil y eficiente para crear tu presencia digital"
};

export function ProcessHero() {
  return (
    <section className="min-h-[70vh] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#004db3] via-[#0061ff] to-[#60efff] opacity-60" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.3
            }}
            animate={{
              y: [null, Math.random() * -100, null],
              opacity: [null, Math.random() * 0.3 + 0.2, null]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      {/* Animated Gradient Mesh */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at center, rgba(96,239,255,0.2) 0%, rgba(0,77,179,0.2) 100%)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 pt-32 relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          {heroContent.title}
        </h1>
        <p className="text-2xl text-white/90 mb-4">{heroContent.subtitle}</p>
        <p className="text-xl text-white/80 max-w-2xl">{heroContent.description}</p>
      </motion.div>
    </section>
  );
}