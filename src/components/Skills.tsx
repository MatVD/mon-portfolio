import React from "react";
import { Code, Database, Wrench, Layers, Shield, Globe } from "lucide-react";
import { Language } from "../types";
import { t } from "../lib/translations";

interface SkillsProps {
  language: Language;
}

export const Skills: React.FC<SkillsProps> = ({ language }) => {
  const skillCategories = [
    {
      title: t("frontend", language),
      icon: <Code size={24} />,
      color: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300",
      skills: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "Vite",
      ],
    },
    {
      title: t("backend", language),
      icon: <Layers size={24} />,
      color:
        "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300",
      skills: [
        "Symfony",
        "API Platform",
        "PHP",
        "Node.js",
        "RESTful APIs",
        "GraphQL",
        "JWT",
        "OAuth",
      ],
    },
    {
      title: t("blockchain", language),
      icon: <Shield size={24} />,
      color:
        "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300",
      skills: [
        "Solidity",
        "Hardhat",
        "Web3.js",
        "Ethers.js",
        "Smart Contracts",
        "DeFi",
        "NFTs",
        "IPFS",
      ],
    },
    {
      title: t("database", language),
      icon: <Database size={24} />,
      color:
        "bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300",
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "Doctrine ORM",
        "Prisma",
        "SQL",
        "NoSQL",
      ],
    },
    {
      title: t("toolsDevops", language),
      icon: <Wrench size={24} />,
      color: "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300",
      skills: [
        "Git",
        "Docker",
        "CI/CD",
        "GitHub Actions",
        "Webpack",
        "ESLint",
        "Prettier",
        "Jest",
      ],
    },
    {
      title: t("cloudHosting", language),
      icon: <Globe size={24} />,
      color:
        "bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300",
      skills: [
        "AWS",
        "Google Cloud",
        "Vercel",
        "Netlify",
        "Heroku",
        "DigitalOcean",
        "Cloudflare",
        "Firebase",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t("skillsTitle", language)}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t("skillsDescription", language)}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg ${category.color} mr-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {t("alwaysLearning", language)}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t("learningDescription", language)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
