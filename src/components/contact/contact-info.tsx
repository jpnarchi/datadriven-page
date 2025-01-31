import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: "Llámanos",
    content: "+1 (234) 567-890",
    link: "tel:+1234567890"
  },
  {
    icon: Mail,
    title: "Escríbenos",
    content: "contacto@datadriven.com",
    link: "mailto:contacto@datadriven.com"
  },
  {
    icon: MapPin,
    title: "Visítanos",
    content: "Ciudad de México, México",
    link: "https://maps.google.com"
  },
  {
    icon: Clock,
    title: "Horario",
    content: "Lun - Vie: 9:00 - 18:00",
    link: null
  }
];

export function ContactInfo() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              {item.link ? (
                <a
                  href={item.link}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {item.content}
                </a>
              ) : (
                <p className="text-gray-300">{item.content}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}