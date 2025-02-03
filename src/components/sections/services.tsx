import { motion } from 'framer-motion';

export function Services() {
  return (
    <section className="pt-0 pb-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-gray-900"
        >
          Tu Página Web en Tiempo Récord
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-transparent" />
            
            <div className="relative z-10 text-center space-y-6">
              <h3 className="text-2xl text-gray-400">Página Web</h3>
              <p className="text-sm text-gray-300">Totalmente optimizada para vender</p>
              <div className="text-5xl font-bold text-white">1 día</div>
              
              <div className="space-y-4 text-gray-300">
                <p className="text-lg">Todo lo que necesitas para empezar a vender online:</p>
                <ul className="space-y-2 text-left max-w-lg mx-auto">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    Diseño profesional adaptado a tu marca
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    Optimizada para móviles y tablets
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    Formularios de contacto y WhatsApp
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    Integración con redes sociales
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    Optimización SEO básica
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    Hosting y dominio incluidos
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <motion.a
                  href="https://wa.me/525655881674?text=Me%20gustaria%20agendar%20una%20videollamada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold rounded-lg shadow-lg hover:shadow-yellow-500/25 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Agendar llamada
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
