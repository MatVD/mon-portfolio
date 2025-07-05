import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Mathieu</h3>
              <p className="text-gray-400 mb-4">
                Développeur fullstack passionné par les technologies web modernes 
                et les solutions blockchain innovantes.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/mathieu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/mathieu"
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
              <h4 className="text-lg font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById('about');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    À propos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById('projects');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Projets
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById('skills');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Compétences
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400 mb-2">
                📧 contact@mat-site-web.com
              </p>
              <p className="text-gray-400 mb-4">
                🌍 Disponible pour missions freelance
              </p>
              <p className="text-gray-400 text-sm">
                N'hésitez pas à me contacter pour discuter de vos projets !
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 flex items-center justify-center">
              © {currentYear} Mathieu. Développé avec 
              <Heart size={16} className="text-red-500 mx-1" /> 
              et React + TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};