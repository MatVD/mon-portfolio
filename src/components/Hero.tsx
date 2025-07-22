import React from "react";
import photoProfile from "../assets/images/photo-profile.png";
import { Github, Linkedin, Mail } from "lucide-react";
import { t } from "../lib/translations";
import { Language } from "../types";

interface HeroProps {
  language: Language;
}

export const Hero: React.FC<HeroProps> = ({ language }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10 mt-28">
        <div className="animate-fadeIn">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white text-4xl font-bold overflow-hidden shadow-lg">
              <img
                src={photoProfile}
                alt="Mathieu Van Damme"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            {t("heroTitle", language)}
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 max-w-4xl mx-auto">
            {t("heroSubtitle", language)}
          </p>

          <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {t("heroDescription", language)}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors transform hover:scale-105 duration-200"
            >
              {t("contactMe", language)}
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-colors transform hover:scale-105 duration-200"
            >
              {t("viewProjects", language)}
            </button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/MatVD"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors transform hover:scale-110 duration-200"
            >
              <Github size={24} className="text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/mathieu-vandamme"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors transform hover:scale-110 duration-200"
            >
              <Linkedin
                size={24}
                className="text-gray-700 dark:text-gray-300"
              />
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors transform hover:scale-110 duration-200"
            >
              <Mail size={24} className="text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-200 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
};
