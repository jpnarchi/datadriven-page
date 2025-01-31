import { motion } from 'framer-motion';
import { Code, Rocket, Palette, Search } from 'lucide-react';

const processSteps = [
  {
    id: 1,
    title: "Descubrimiento y Planificación",
    description: "Análisis detallado de objetivos y requerimientos",
    duration: "Día 1",
    icon: Search,
    details: [
      "Reunión inicial de kickoff",
      "Definición de objetivos",
      "Análisis de competencia",
      "Planificación del proyecto"
    ]
  },
  {
    id: 2,
    title: "Diseño UX/UI",
    description: "Creación de wireframes y diseño visual",
    duration: "Día 2",
    icon: Palette,
    details: [
      "Wireframing",
      "Diseño visual",
      "Revisión de cliente",
      "Ajustes finales"
    ]
  },
  {
    id: 3,
    title: "Desarrollo Frontend",
    description: "Implementación del diseño",
    duration: "Día 3-4",
    icon: Code,
    details: [
      "Maquetación",
      "Implementación de funcionalidades",
      "Optimización de rendimiento",
      "Testing"
    ]
  },
  {
    id: 4,
    title: "Lanzamiento",
    description: "Despliegue y optimización final",
    duration: "Día 5",
    icon: Rocket,
    details: [
      "Pruebas finales",
      "Despliegue",
      "Optimización SEO",
      "Entrega al cliente"
    ]
  }
];

export function ProcessTimeline() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#004db3]/5 to-[#60efff]/5" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.3 + 0.2
            }}
            animate={{
              y: [null, Math.random() * -100, null],
              opacity: [null, Math.random() * 0.2 + 0.1, null]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-blue-400" />
          
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-20 mb-16 last:mb-0"
            >
              <div className="absolute left-4 top-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center shadow-lg shadow-blue-500/25">
                <step.icon className="w-4 h-4 text-white" />
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  <span className="px-4 py-1 rounded-full bg-blue-50 text-blue-500 text-sm font-medium">
                    {step.duration}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{step.description}</p>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-gray-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}