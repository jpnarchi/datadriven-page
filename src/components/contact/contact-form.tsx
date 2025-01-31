import { motion } from 'framer-motion';
import { useState } from 'react';
import { supabase } from '../../lib/supabase';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const defaultFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const validateForm = (data: FormData) => {
    if (!data.name.trim()) return 'El nombre es requerido';
    if (!data.email.trim()) return 'El email es requerido';
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email.trim())) {
      return 'Email inválido';
    }
    if (!data.subject.trim()) return 'El asunto es requerido';
    if (!data.message.trim()) return 'El mensaje es requerido';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    // Validate form
    const validationError = validateForm(formData);
    if (validationError) {
      setErrorMessage(validationError);
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const { error } = await supabase
        .from('contact_form_submissions')
        .insert({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || null,
          subject: formData.subject.trim(),
          message: formData.message.trim()
        });

      if (error) throw error;

      setSubmitStatus('success');
      setFormData(defaultFormData);

      // Track form submission with Facebook Pixel
      if (window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: 'Contact Form',
          content_category: 'Form Submission'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('Error al enviar el formulario. Por favor, intenta nuevamente.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#004db3] via-[#0061ff] to-[#60efff] opacity-10" />
      
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
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

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">
          Comienza Tu Proyecto
        </h2>

        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center"
          >
            ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center"
          >
            {errorMessage}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100">
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Información Personal</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100">
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Mensaje</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tu mensaje
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                placeholder="Describe tu proyecto..."
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg font-semibold text-white shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 transition-all"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}