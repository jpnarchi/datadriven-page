import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function WhatsAppButton() {
  const message = encodeURIComponent('¡Hola! Me interesa crear mi página web con Data Driven');
  const whatsappUrl = `https://wa.me/1234567890?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-5 bottom-5 w-15 h-15 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-[#25D366]/50 transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <MessageCircle size={30} className="text-white" />
    </motion.a>
  );
}