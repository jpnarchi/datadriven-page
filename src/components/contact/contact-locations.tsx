import { motion } from 'framer-motion';

const locations = [
  {
    city: "Ciudad de México",
    address: "Av. Paseo de la Reforma 222, Juárez",
    image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=800&h=400"
  },
  {
    city: "Guadalajara",
    address: "Av. México 2798, Ladrón de Guevara",
    image: "https://images.unsplash.com/photo-1512671631509-336e5467d9b3?auto=format&fit=crop&w=800&h=400"
  }
];

export function ContactLocations() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Nuestras Oficinas
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="aspect-video relative">
                <img
                  src={location.image}
                  alt={location.city}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold mb-2">{location.city}</h3>
                  <p className="text-gray-300">{location.address}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}