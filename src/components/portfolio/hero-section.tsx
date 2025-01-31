import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const portfolioProjects = [
  {
    title: "TechVision Pro",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&h=300"
  },
  {
    title: "EcoStore",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=500&h=300"
  },
  {
    title: "InnovateLab",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=500&h=300"
  },
  {
    title: "FitLife Pro",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=500&h=300"
  },
  {
    title: "CloudSync",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&h=300"
  },
  {
    title: "ArtGallery",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=500&h=300"
  }
];

// Duplicate the projects array for seamless infinite scroll
const duplicatedProjects = [...portfolioProjects, ...portfolioProjects];

export function HeroSection() {
  return (
    <section className="min-h-[80vh] relative overflow-hidden">
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
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        className="container mx-auto px-4 pt-32 relative z-10"
      >
        <motion.h1 
          variants={textVariants}
          className="text-4xl md:text-7xl font-bold mb-6 text-white"
        >
          Nuestros Proyectos
        </motion.h1>
        <motion.p 
          variants={textVariants}
          className="text-xl md:text-2xl text-white/90 max-w-2xl mb-12"
        >
          Transformando ideas en experiencias digitales excepcionales. Explora nuestra colección de sitios web personalizados que han revolucionado la presencia digital de nuestros clientes.
        </motion.p>

        {/* Infinite Carousel */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: ["0%", "-50%"]
            }}
            transition={{
              x: {
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }
            }}
            style={{
              width: "fit-content"
            }}
          >
            {duplicatedProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                className="relative w-[300px] h-[200px] rounded-xl overflow-hidden group shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-white font-semibold">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}