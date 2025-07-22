import React from "react";
import { Download, BookOpen, Clock, Users, Award } from "lucide-react";
import cataloguePdf from "../assets/documents/Catalogue de formations.pdf";

export const Formations: React.FC = () => {
  const handleDownloadCatalogue = () => {
    const link = document.createElement("a");
    link.href = cataloguePdf;
    link.download = "Catalogue de formations.pdf";
    link.click();
  };

  const formations = [
    {
      title: "Développement Web Full-Stack",
      description:
        "Formation complète en développement web moderne avec React, Node.js et bases de données",
      duration: "6 mois",
      participants: "8-12",
      level: "Débutant à Intermédiaire",
      technologies: ["React", "Node.js", "TypeScript", "MongoDB", "PostgreSQL"],
    },
    {
      title: "JavaScript Avancé & Frameworks",
      description:
        "Maîtrisez JavaScript ES6+ et les frameworks modernes pour créer des applications performantes",
      duration: "3 mois",
      participants: "6-10",
      level: "Intermédiaire",
      technologies: ["ES6+", "React", "Vue.js", "Next.js", "Vite"],
    },
    {
      title: "Bases de Données & API",
      description:
        "Conception et développement d'APIs robustes avec gestion optimale des bases de données",
      duration: "2 mois",
      participants: "8-12",
      level: "Intermédiaire à Avancé",
      technologies: [
        "REST API",
        "GraphQL",
        "PostgreSQL",
        "MongoDB",
        "Supabase",
      ],
    },
    {
      title: "DevOps & Déploiement",
      description:
        "Automatisation du déploiement et bonnes pratiques DevOps pour les applications web",
      duration: "1 mois",
      participants: "6-8",
      level: "Avancé",
      technologies: ["Docker", "CI/CD", "Netlify", "Vercel", "GitHub Actions"],
    },
  ];

  return (
    <section id="formations" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Catalogue de Formations
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Développez vos compétences en développement web avec nos formations
            sur mesure. Du niveau débutant à expert, découvrez nos programmes
            adaptés à vos besoins.
          </p>

          {/* Bouton de téléchargement du catalogue */}
          <button
            onClick={handleDownloadCatalogue}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <Download size={20} />
            Télécharger le catalogue complet
          </button>
        </div>

        {/* Grid des formations */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {formations.map((formation, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                  <BookOpen
                    className="text-blue-600 dark:text-blue-400"
                    size={24}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {formation.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {formation.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Clock size={16} />
                  <span className="text-sm">{formation.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Users size={16} />
                  <span className="text-sm">
                    {formation.participants} participants
                  </span>
                </div>
                <div className="col-span-2 flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Award size={16} />
                  <span className="text-sm">Niveau : {formation.level}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Technologies abordées :
                </h4>
                <div className="flex flex-wrap gap-2">
                  {formation.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section d'informations complémentaires */}
        <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Informations Pratiques
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <BookOpen
                  className="text-green-600 dark:text-green-400"
                  size={24}
                />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Formations Personnalisées
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Programmes adaptés à votre niveau et vos objectifs
                professionnels
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users
                  className="text-purple-600 dark:text-purple-400"
                  size={24}
                />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Groupes Restreints
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Maximum 12 participants pour un suivi personnalisé optimal
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 dark:bg-orange-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award
                  className="text-orange-600 dark:text-orange-400"
                  size={24}
                />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Certification
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Certificat de fin de formation reconnu par l'industrie
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Intéressé par une formation ? Téléchargez le catalogue complet
              pour plus de détails.
            </p>
            <button
              onClick={handleDownloadCatalogue}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200"
            >
              <Download size={16} />
              Catalogue PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
