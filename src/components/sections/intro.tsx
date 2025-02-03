import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

const websiteImages = [
  {
    url: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1200&h=800",
    title: "E-commerce Platform"
  },
  {
    url: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&h=800",
    title: "Corporate Website"
  },
  {
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=800",
    title: "SaaS Dashboard"
  }
];

export function Intro() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === websiteImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              La Página Web que Tu Negocio Merece
            </h2>
            <p className="text-xl text-gray-700">
              Sabemos que estás ocupado dirigiendo tu negocio. Por eso nos encargamos de todo el proceso técnico, mientras tú te enfocas en lo que mejor sabes hacer: atender a tus clientes.
            </p>
            <p className="text-xl text-gray-700">
              Sin términos técnicos complicados, sin esperas interminables. Solo resultados profesionales que harán que tu negocio destaque en internet y atraiga más clientes.
            </p>
            <motion.a
              href="https://wa.me/525655881674?text=Me%20gustaria%20agendar%20una%20videollamada"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all"
            >
              <Calendar className="w-5 h-5" />
              Agendar Videollamada Inicial
            </motion.a>
          </motion.div>

          <div className="relative h-[600px] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full"
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={websiteImages[currentImageIndex].url}
                    alt={websiteImages[currentImageIndex].title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/80 to-transparent flex items-end">
                    <p className="p-6 text-lg font-medium text-white">
                      {websiteImages[currentImageIndex].title}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {websiteImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
