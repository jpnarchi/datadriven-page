import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from './project-card';
import { ProjectModal } from './project-modal';

const projects = [
  {
    id: 1,
    title: "TechVision Pro",
    category: "SaaS",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=630",
    description: "Plataforma de análisis de datos con IA",
    technologies: ["React", "Three.js", "TailwindCSS"],
    challenge: "Visualización de datos complejos en tiempo real",
    solution: "Implementación de gráficos 3D interactivos",
    results: "300% incremento en engagement",
    link: "https://example.com/techvision"
  },
  {
    id: 2,
    title: "EcoStore",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&h=630",
    description: "Tienda sostenible con impacto ambiental",
    technologies: ["React", "Shopify", "GSAP"],
    challenge: "Integración de métricas de impacto ambiental",
    solution: "Dashboard personalizado de sostenibilidad",
    results: "45% reducción en abandono de carrito",
    link: "https://example.com/ecostore"
  },
  {
    id: 3,
    title: "InnovateLab",
    category: "Corporativo",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&h=630",
    description: "Portal corporativo con integración de IA",
    technologies: ["React", "Node.js", "MongoDB"],
    challenge: "Unificación de sistemas internos",
    solution: "Portal centralizado con IA",
    results: "50% mejora en productividad",
    link: "https://example.com/innovatelab"
  },
  {
    id: 4,
    title: "FitLife Pro",
    category: "Landing Pages",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&h=630",
    description: "Landing page para app fitness",
    technologies: ["React", "GSAP", "Tailwind"],
    challenge: "Maximizar conversiones",
    solution: "Diseño orientado a conversión",
    results: "200% aumento en registros",
    link: "https://example.com/fitlife"
  },
  {
    id: 5,
    title: "CloudSync",
    category: "SaaS",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&h=630",
    description: "Plataforma de sincronización en la nube",
    technologies: ["React", "AWS", "Node.js"],
    challenge: "Sincronización en tiempo real",
    solution: "Arquitectura serverless",
    results: "99.99% uptime",
    link: "https://example.com/cloudsync"
  },
  {
    id: 6,
    title: "ArtGallery",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&h=630",
    description: "Galería de arte digital NFT",
    technologies: ["React", "Web3.js", "GSAP"],
    challenge: "Experiencia de compra NFT",
    solution: "Integración blockchain",
    results: "1M+ en ventas",
    link: "https://example.com/artgallery"
  }
];

export function ProjectShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['Todos', 'SaaS', 'E-commerce', 'Corporativo', 'Landing Pages'];

  const filteredProjects = selectedCategory === 'Todos'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Filter Bar */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-lg'
                  : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => {
                  setSelectedProject(project);
                  setIsModalOpen(true);
                }}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedProject(null);
          }}
        />
      </div>
    </section>
  );
}