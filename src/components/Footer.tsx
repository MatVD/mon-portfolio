import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { t } from "../lib/translations";
import { Language } from "../types";

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Mathieu</h3>
              <p className="text-gray-400 mb-4">
                {t("footerDescription", language)}
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/MatVD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mathieu-vandamme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:contact@mat-site-web.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">
                {t("navigation", language)}
              </h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("about");
                      if (element)
                        element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t("about", language)}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("projects");
                      if (element)
                        element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t("projects", language)}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("skills");
                      if (element)
                        element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t("skills", language)}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("formations");
                      if (element)
                        element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t("formations", language)}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("contact");
                      if (element)
                        element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t("contact", language)}
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">
                {t("contact", language)}
              </h4>
              <p className="text-gray-400 mb-2">📧 contact@mat-site-web.com</p>
              <p className="text-gray-400 mb-4">
                🌍 {t("freelanceAvailable", language)}
              </p>
              <p className="text-gray-400 text-sm">
                {t("contactDiscuss", language)}
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 flex items-center justify-center">
              © Copyright {currentYear} - Van Damme Mathieu.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
