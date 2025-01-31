import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const menuItems = [
    { title: 'Inicio', href: '/' },
    { title: 'Portafolio', href: '/portfolio' },
    { title: 'Proceso', href: '/process' },
    { title: 'Contáctanos', href: '/contact' }
  ];

  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div>
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Data Driven
            </Link>
            <p className="mt-4 text-gray-600">
              Transformamos tu visión en realidad digital con diseños únicos y desarrollo de alta calidad.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900">Menú</h3>
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li key={item.title}>
                  <Link 
                    to={item.href}
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:contacto@datadriven.com" 
                  className="text-gray-600 hover:text-blue-500 transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  contacto@datadriven.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+1234567890" 
                  className="text-gray-600 hover:text-blue-500 transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                Ciudad de México, México
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900">Síguenos</h3>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center hover:bg-blue-100 transition-colors"
              >
                <Instagram className="w-5 h-5 text-blue-500" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center hover:bg-blue-100 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-blue-500" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center hover:bg-blue-100 transition-colors"
              >
                <Twitter className="w-5 h-5 text-blue-500" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Data Driven. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}