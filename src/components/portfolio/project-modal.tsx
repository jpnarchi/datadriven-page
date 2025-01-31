import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  challenge: string;
  solution: string;
  results: string;
  link: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-2xl overflow-hidden max-w-4xl w-full shadow-xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            <img
              src={project.image}
              alt={project.title}
              className="w-full aspect-video object-cover"
            />

            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold text-gray-900">{project.title}</h3>
                <span className="px-4 py-1 rounded-full bg-blue-50 text-blue-500">
                  {project.category}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-blue-500">El Desafío</h4>
                  <p className="text-gray-600">{project.challenge}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-blue-500">La Solución</h4>
                  <p className="text-gray-600">{project.solution}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-blue-500">Resultados</h4>
                  <p className="text-gray-600">{project.results}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-shadow"
              >
                Visitar sitio web
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}