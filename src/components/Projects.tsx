import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Plateforme e-commerce complète avec gestion des commandes, paiements et tableau de bord administrateur.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Symfony", "API Platform", "React", "TypeScript", "PostgreSQL"],
      githubUrl: "https://github.com/mathieu/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.com"
    },
    {
      id: 2,
      title: "DeFi Dashboard",
      description: "Tableau de bord pour la finance décentralisée avec intégration de smart contracts et suivi de portefeuille.",
      image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "TypeScript", "Solidity", "Hardhat", "Web3.js"],
      githubUrl: "https://github.com/mathieu/defi-dashboard",
      liveUrl: "https://defi-dashboard.com"
    },
    {
      id: 3,
      title: "Task Management API",
      description: "API RESTful pour la gestion de tâches avec authentification JWT et documentation OpenAPI.",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Symfony", "API Platform", "JWT", "Doctrine", "OpenAPI"],
      githubUrl: "https://github.com/mathieu/task-management-api"
    },
    {
      id: 4,
      title: "NFT Marketplace",
      description: "Marketplace pour les NFTs avec fonctionnalités de mint, achat/vente et enchères.",
      image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "TypeScript", "Solidity", "IPFS", "Metamask"],
      githubUrl: "https://github.com/mathieu/nft-marketplace",
      liveUrl: "https://nft-marketplace.com"
    },
    {
      id: 5,
      title: "Real Estate Platform",
      description: "Plateforme immobilière avec recherche avancée, cartographie et gestion des annonces.",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Symfony", "React", "TypeScript", "PostgreSQL", "Leaflet"],
      githubUrl: "https://github.com/mathieu/real-estate-platform"
    },
    {
      id: 6,
      title: "Learning Management System",
      description: "Système de gestion d'apprentissage avec cours en ligne, quiz et suivi de progression.",
      image: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Symfony", "API Platform", "React", "TypeScript", "MySQL"],
      githubUrl: "https://github.com/mathieu/lms-platform",
      liveUrl: "https://lms-demo.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Mes Projets
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Découvrez une sélection de projets récents qui illustrent 
              mon expertise en développement web et blockchain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <Github size={16} />
                        <span className="text-sm">Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};