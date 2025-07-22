import { useState, useEffect, useCallback } from "react";
import { Language } from "../types";

const SUPPORTED_LANGUAGES: Language[] = ["fr", "en"];
const DEFAULT_LANGUAGE: Language = "fr";
const STORAGE_KEY = "portfolio_language";

const detectLanguageFromLocation = (): Language => {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;

  try {
    // Détecter la langue depuis l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const langFromUrl = urlParams.get("lang");

    if (langFromUrl && SUPPORTED_LANGUAGES.includes(langFromUrl as Language)) {
      return langFromUrl as Language;
    }

    // Pays francophones
    const frenchSpeakingCountries = [
      "FR",
      "BE",
      "CH",
      "CA",
      "LU",
      "MC",
      "AD",
      "DZ",
      "MA",
      "TN",
      "SN",
      "CI",
      "ML",
      "BF",
      "NE",
      "TD",
      "CF",
      "CM",
      "CG",
      "CD",
      "GA",
      "GQ",
      "DJ",
      "KM",
      "MG",
      "MU",
      "SC",
      "VU",
      "PF",
      "NC",
      "WF",
      "PM",
      "RE",
      "YT",
      "GF",
      "GP",
      "MQ",
      "BL",
      "MF",
    ];

    // Détecter depuis le navigateur
    const userLanguage = navigator.language || navigator.languages[0];
    const countryCode = userLanguage.split("-")[1]?.toUpperCase();

    // Vérifier si la langue du navigateur est française
    if (userLanguage.toLowerCase().startsWith("fr")) {
      return "fr";
    }

    // Vérifier si le code pays est francophone
    if (countryCode && frenchSpeakingCountries.includes(countryCode)) {
      return "fr";
    }

    return DEFAULT_LANGUAGE;
  } catch (error) {
    console.warn("Erreur lors de la détection de langue:", error);
    return DEFAULT_LANGUAGE;
  }
};

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && SUPPORTED_LANGUAGES.includes(saved as Language)) {
          return saved as Language;
        }
      } catch (error) {
        console.warn(
          "Erreur lors du chargement de la langue sauvegardée:",
          error
        );
      }
      return detectLanguageFromLocation();
    }
    return DEFAULT_LANGUAGE;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
      document.documentElement.setAttribute("lang", language);
    } catch (error) {
      console.warn("Erreur lors de la sauvegarde de la langue:", error);
    }
  }, [language]);

  const changeLanguage = useCallback((newLanguage: string) => {
    if (SUPPORTED_LANGUAGES.includes(newLanguage as Language)) {
      setLanguage(newLanguage as Language);
    } else {
      console.warn(`Langue non supportée: ${newLanguage}`);
    }
  }, []);

  return [language, changeLanguage] as const;
};
