import { motion } from 'framer-motion';

const heroContent = {
  title: "Hablemos de tu Proyecto",
  description: "Estamos aquí para convertir tu visión en realidad. Contáctanos y comencemos a crear algo extraordinario juntos."
};

export function ContactHero() {
  return (
    <section className="min-h-[60vh] relative overflow-hidden flex items-center">
      {/* Animated Background */}
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
      
      <div className="container mx-auto px-4 pt-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            {heroContent.title}
          </h1>
          <p className="text-xl text-white/90">
            {heroContent.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}