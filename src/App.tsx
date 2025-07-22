import { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Formations } from "./components/Formations";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useDarkMode } from "./hooks/useDarkMode";

function App() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  useEffect(() => {
    // Vérifier si les variables d'environnement sont définies
    const missingVars = [];
    if (
      !import.meta.env.VITE_SUPABASE_URL ||
      import.meta.env.VITE_SUPABASE_URL === "https://your-project.supabase.co"
    ) {
      missingVars.push("VITE_SUPABASE_URL");
    }
    if (
      !import.meta.env.VITE_SUPABASE_ANON_KEY ||
      import.meta.env.VITE_SUPABASE_ANON_KEY === "your-anon-key"
    ) {
      missingVars.push("VITE_SUPABASE_ANON_KEY");
    }
    if (
      !import.meta.env.VITE_EMAILJS_SERVICE_ID ||
      import.meta.env.VITE_EMAILJS_SERVICE_ID === "your_service_id"
    ) {
      missingVars.push("VITE_EMAILJS_SERVICE_ID");
    }
    if (
      !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID === "your_template_id"
    ) {
      missingVars.push("VITE_EMAILJS_TEMPLATE_ID");
    }
    if (
      !import.meta.env.VITE_EMAILJS_PUBLIC_KEY ||
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY === "your_public_key"
    ) {
      missingVars.push("VITE_EMAILJS_PUBLIC_KEY");
    }

    if (missingVars.length > 0) {
      console.warn("Variables d'environnement manquantes:", missingVars);
      // En production, on peut continuer à fonctionner avec des valeurs par défaut
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Formations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
