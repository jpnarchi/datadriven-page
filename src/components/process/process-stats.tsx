import { motion } from 'framer-motion';

const stats = [
  { label: 'Proyectos Completados', value: '100+' },
  { label: 'Tiempo Promedio', value: '5 días' },
  { label: 'Satisfacción Cliente', value: '98%' },
  { label: 'Retorno Promedio', value: '3x' }
];

export function ProcessStats() {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-blue-900/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-400 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}