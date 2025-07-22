import React from "react";
import { Moon, Sun, Menu, X, Languages } from "lucide-react";
import photoProfile from "../assets/images/photo-profile.png";
import { useState } from "react";
import { t } from "../lib/translations";
import { Language } from "../types";

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  language: Language;
  changeLanguage: (newLanguage: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  isDarkMode,
  toggleDarkMode,
  language,
  changeLanguage,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleLanguageToggle = () => {
    const newLanguage = language === "fr" ? "en" : "fr";
    changeLanguage(newLanguage);
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white text-4xl font-bold overflow-hidden shadow-lg">
            <img
              src={photoProfile}
              alt="Mathieu Van Damme"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {t("about", language)}
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {t("projects", language)}
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {t("skills", language)}
            </button>
            <button
              onClick={() => scrollToSection("formations")}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {t("formations", language)}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {t("contact", language)}
            </button>

            {/* Language Toggle */}
            <button
              onClick={handleLanguageToggle}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-gray-700 dark:text-gray-200 flex items-center gap-1"
              aria-label={`Switch to ${
                language === "fr" ? "English" : "French"
              }`}
            >
              <Languages size={16} />
              <span className="text-sm font-medium uppercase">{language}</span>
            </button>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-gray-700 dark:text-gray-200"
              aria-label={
                isDarkMode
                  ? t("toggleLightMode", language)
                  : t("toggleDarkMode", language)
              }
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={handleLanguageToggle}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-gray-700 dark:text-gray-200 flex items-center gap-1"
              aria-label={`Switch to ${
                language === "fr" ? "English" : "French"
              }`}
            >
              <Languages size={16} />
              <span className="text-xs font-medium uppercase">{language}</span>
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-gray-700 dark:text-gray-200"
              aria-label={
                isDarkMode
                  ? t("toggleLightMode", language)
                  : t("toggleDarkMode", language)
              }
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-gray-700 dark:text-gray-200"
              aria-label={
                isMenuOpen ? t("closeMenu", language) : t("openMenu", language)
              }
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {t("about", language)}
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {t("projects", language)}
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {t("skills", language)}
              </button>
              <button
                onClick={() => scrollToSection("formations")}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {t("formations", language)}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {t("contact", language)}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
