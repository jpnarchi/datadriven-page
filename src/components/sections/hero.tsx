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

const clientLogos = [
  {
    name: "Grupo Televisa",
    url: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Logo_de_Grupo_Televisa.svg"
  },
  {
    name: "Tecnológico de Monterrey",
    url: "https://javier.rodriguez.org.mx/itesm/2014/tecnologico-de-monterrey-blue.png"
  }
];

export function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center">
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
      
      <div className="relative z-10 container mx-auto px-4 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
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
              className="space-y-8"
            >
              <motion.h1 
                variants={textVariants}
                className="text-4xl md:text-6xl font-bold text-white"
              >
                Tu Negocio Necesita<br />Una Página Web Profesional
              </motion.h1>
              
              <motion.p 
                variants={textVariants}
                className="text-xl md:text-2xl text-white/90"
              >
                La creamos en 24 horas, sin complicaciones y a un precio justo
              </motion.p>
              
              <motion.a
                href="https://calendar.app.google/CLAMNe5BcfDQzqeC8"
                target="_blank"
                rel="noopener noreferrer"
                variants={textVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-white/25 transition-shadow"
              >
                Reserva tu videollamada hoy
              </motion.a>

              {/* Client Logos Section */}
              <motion.div
                variants={textVariants}
                className="space-y-6"
              >
                <p className="text-white/80 text-sm uppercase tracking-wider">
                  Empresas que ya confiaron en nosotros
                </p>
                <div className="flex gap-8">
                  {clientLogos.map((client, index) => (
                    <motion.div
                      key={client.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 }}
                      className="w-48 h-24 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center p-4"
                    >
                      <img
                        src={client.url}
                        alt={client.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Hero Video */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-lg shadow-2xl overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/hero/hero-compress5.mp4" type="video/mp4" />
              </video>
            </div>
            <motion.div
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg"
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <div className="text-blue-600 font-bold text-center">
                5 días<br/>
                <span className="text-xs">garantía</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}