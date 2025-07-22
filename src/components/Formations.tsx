import React from "react";
import { Download, BookOpen, Clock, Users, MapPinIcon, Award } from "lucide-react";
import cataloguePdf from "../assets/documents/Catalogue de formations.pdf";

interface Formation {
  title: string;
  description: string;
  duration: string;
  participants: string;
  level: string;
  tjm: string;
  technologies: string[];
}

export const Formations: React.FC = () => {
  const handleDownloadCatalogue = () => {
    const link = document.createElement("a");
    link.href = cataloguePdf;
    link.download = "Catalogue de formations.pdf";
    link.click();
  };

  const formations: Formation[] = [
    {
      title: "Développement Web",
      description:
        "Formation complète front-end et back-end : des bases HTML/CSS aux technologies modernes comme REACT, SYMFONY ou API REST",
      duration: "Sur mesure",
      participants: "6-12",
      level: "Débutant à Avancé",
      tjm: "390€",
      technologies: [
        "HTML/CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "PHP/Symfony",
        "Git",
        "GitHub",
        "GitLab",
        "CI/CD",
        "Docker",
      ],
    },
    {
      title: "Web3 - Blockchain - Crypto",
      description:
        "Développement blockchain et crypto : smart contracts, dApps et écosystème Web3",
      duration: "Sur mesure",
      participants: "4-8",
      level: "Débutant à intermédiaire",
      tjm: "440€",
      technologies: [
        "Solidity",
        "NFTs",
        "Ethereum",
        "Sepolia",
        "ZKSync",
        "Avalanche",
        "Hardhat",
        "Foundry",
        "Bitcoin",
        "ETH",
        "XRP",
        "SOL",
        "BNB",
      ],
    },
    {
      title: "Formation IA",
      description:
        "Maîtrise des outils d'Intelligence Artificielle pour développeurs et professionnels",
      duration: "Sur mesure",
      participants: "8-10",
      level: "Débutant à intermédiaire",
      tjm: "490€",
      technologies: [
        "Microsoft Copilot",
        "ChatGPT",
        "Claude",
        "Gemini",
        "Perplexity",
        "GitHub Copilot",
      ],
    },
    {
      title: "Sécurité Web et Blockchain",
      description:
        "Sécurité informatique web2 et web3, audit de sécurité et recherche de vulnérabilités",
      duration: "Sur mesure",
      participants: "6-10",
      level: "Débutant à intermédiaire",
      tjm: "440€",
      technologies: [
        "Qualys",
        "OWASP ZAP",
        "Slither",
        "Solhint",
        "Web3 Security",
        "Audit de sécurité",
      ],
    },
    {
      title: "Anglais Professionnel",
      description:
        "Cours de langue anglaise en contexte professionnel : prise de parole, rédaction, comptes rendus",
      duration: "Sur mesure",
      participants: "10-12",
      level: "Débutant à intermédiaire",
      tjm: "320€",
      technologies: [
        "Anglais business",
        "Prise de parole",
        "Rédaction",
        "Compte rendu",
        "Communication",
      ],
    },
    {
      title: "Gestion de Projets",
      description:
        "Méthodes Agile et SCRUM, outils de gestion de projet pour équipes tech",
      duration: "Sur mesure",
      participants: "10-15",
      level: "Débutant à Intermédiaire",
      tjm: "340€",
      technologies: [
        "Agile",
        "SCRUM",
        "Jira",
        "Miro",
        "Confluence",
        "Notion",
        "GitLab",
      ],
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
            Formations professionnelles sur mesure en développement web,
            blockchain, IA, sécurité, anglais et gestion de projets. Programmes
            adaptés avec tarification journalière transparente.
          </p>

          {/* Bouton de téléchargement du catalogue */}
          <button
            onClick={handleDownloadCatalogue}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <Download size={20} />
            Télécharger le catalogue de formations
          </button>
        </div>

        {/* Grid des formations */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {formations.map((formation, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
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
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Award size={16} />
                  <span className="text-sm">Niveau : {formation.level}</span>
                </div>
                <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 font-semibold">
                  <span className="text-sm">💰</span>
                  <span className="text-sm">TJM : {formation.tjm}</span>
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

          <div className="grid md:grid-cols-4 gap-8">
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
                En groupe ou individuel
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Maximum 15 participants pour un suivi personnalisé optimal
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPinIcon
                  className="text-blue-600 dark:text-blue-400"
                  size={24}
                />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                En présentiel ou distanciel
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Formations disponibles en visio ou en centre. Pour des cours individuels, je peux venir à domicile
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
