import React from "react";
import { Code, Zap, Users, Target } from "lucide-react";
import { t } from "../lib/translations";
import { Language } from "../types";

interface AboutProps {
  language: Language;
}

export const About: React.FC<AboutProps> = ({ language }) => {
  const values = [
    {
      icon: <Code size={32} />,
      title: t("qualityCode", language),
      description: t("qualityCodeDesc", language),
    },
    {
      icon: <Zap size={32} />,
      title: t("performance", language),
      description: t("performanceDesc", language),
    },
    {
      icon: <Users size={32} />,
      title: t("collaboration", language),
      description: t("collaborationDesc", language),
    },
    {
      icon: <Target size={32} />,
      title: t("objectives", language),
      description: t("objectivesDesc", language),
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t("aboutTitle", language)}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t("aboutSubtitle", language)}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t("myJourney", language)}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t("aboutDescription1", language)}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t("aboutDescription2", language)}
              </p>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {t("workPhilosophy", language)}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    "{t("philosophyQuote", language)}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
