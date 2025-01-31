import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

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

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10 }}
      onClick={onClick}
      className="group cursor-pointer relative rounded-xl overflow-hidden bg-white shadow-lg border border-gray-100"
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent" />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-500 transition-colors">
            {project.title}
          </h3>
          <span className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-500">
            {project.category}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-sm rounded-md bg-blue-50 text-blue-500"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          Ver proyecto <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}