import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            ¿Listo para transformar tu presencia digital?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Agenda una videollamada gratuita y descubre cómo podemos ayudarte
          </p>
          <motion.a
            href="https://wa.me/525655881674?text=Me%20gustaria%20agendar%20una%20videollamada"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium inline-flex items-center gap-2 shadow-lg hover:shadow-white/25 transition-shadow"
          >
            <Calendar className="w-5 h-5" />
            Reserva tu videollamada hoy
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
