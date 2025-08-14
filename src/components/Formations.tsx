import React from "react";
import {
  Download,
  BookOpen,
  Clock,
  Users,
  MapPinIcon,
  Award,
} from "lucide-react";
import cataloguePdf from "../assets/documents/Catalogue de formations.pdf";
import { t } from "../lib/translations";
import { Language } from "../types";

interface Formation {
  titleKey: keyof import("../types").Translations;
  descriptionKey: keyof import("../types").Translations;
  duration: string;
  participants: string;
  levelKey: keyof import("../types").Translations;
  tjm: string;
  technologies: string[];
}

interface FormationsProps {
  language: Language;
}

export const Formations: React.FC<FormationsProps> = ({ language }) => {
  const handleDownloadCatalogue = () => {
    const link = document.createElement("a");
    link.href = cataloguePdf;
    link.download = "Catalogue de formations.pdf";
    link.click();
  };

  const formations: Formation[] = [
    {
      titleKey: "webDevTitle",
      descriptionKey: "webDevDesc",
      duration: t("custom", language),
      participants: "6-12",
      levelKey: "beginnerToAdvanced",
      tjm: "395€",
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
      titleKey: "web3Title",
      descriptionKey: "web3Desc",
      duration: t("custom", language),
      participants: "4-8",
      levelKey: "beginnerToIntermediate",
      tjm: "445€",
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
      titleKey: "aiTitle",
      descriptionKey: "aiDesc",
      duration: t("custom", language),
      participants: "8-10",
      levelKey: "beginnerToIntermediate",
      tjm: "445€",
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
      titleKey: "securityTitle",
      descriptionKey: "securityDesc",
      duration: t("custom", language),
      participants: "6-10",
      levelKey: "beginnerToIntermediate",
      tjm: "495€",
      technologies: [
        "Qualys",
        "OWASP ZAP",
        "Slither",
        "Solhint",
        "Web3 Security",
        language === "fr" ? "Audit de sécurité" : "Security Audit",
      ],
    },
    {
      titleKey: "englishTitle",
      descriptionKey: "englishDesc",
      duration: t("custom", language),
      participants: "10-12",
      levelKey: "beginnerToIntermediate",
      tjm: "340€",
      technologies: [
        language === "fr" ? "Anglais business" : "Business English",
        language === "fr" ? "Prise de parole" : "Public speaking",
        language === "fr" ? "Rédaction" : "Writing",
        language === "fr" ? "Compte rendu" : "Reports",
        "Communication",
      ],
    },
    {
      titleKey: "projectMgmtTitle",
      descriptionKey: "projectMgmtDesc",
      duration: t("custom", language),
      participants: "10-15",
      levelKey: "beginnerToIntermediate",
      tjm: "350€",
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
            {t("formationsTitle", language)}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            {t("formationsDescription", language)}
          </p>

          <button
            onClick={handleDownloadCatalogue}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <Download size={20} />
            {t("downloadCatalog", language)}
          </button>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {formations.map((formation, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {t(formation.titleKey, language)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t(formation.descriptionKey, language)}
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
                    {formation.participants} {t("participants", language)}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Award size={16} />
                  <span className="text-sm">
                    {t("level", language)} : {t(formation.levelKey, language)}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 font-semibold">
                  <span className="text-sm">💰</span>
                  <span className="text-sm">
                    {t("tjm", language)} : {formation.tjm}
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  {t("technologiesCovered", language)}
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

        <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            {t("practicalInfo", language)}
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
                {t("personalizedTraining", language)}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {t("personalizedDesc", language)}
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
                {t("groupOrIndividual", language)}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {t("groupDesc", language)}
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
                {t("inPersonOrRemote", language)}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {t("locationDesc", language)}
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
                {t("certification", language)}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {t("certificationDesc", language)}
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {t("interestedInTraining", language)}
            </p>
                        <button
                          onClick={handleDownloadCatalogue}
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
                        >
                          <Download size={20} />
                          {t("downloadCatalog", language)}
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              );
            };
