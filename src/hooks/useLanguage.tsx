import { useState, useEffect, useCallback } from "react";
import { Language } from "../types";

const SUPPORTED_LANGUAGES: Language[] = ["fr", "en"];
const DEFAULT_LANGUAGE: Language = "en";
const STORAGE_KEY = "portfolio_language";

const detectLanguageFromBrowser = (): Language => {
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

    // Si ce n'est pas francophone, utiliser l'anglais
    return "en";
  } catch (error) {
    console.warn("Erreur lors de la détection de langue:", error);
    return DEFAULT_LANGUAGE;
  }
};

const getCountryFromCoordinates = async (
  lat: number,
  lon: number
): Promise<string | null> => {
  try {
    // Utiliser une API de géocodage inverse gratuite
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
    );
    const data = await response.json();
    return data.countryCode || null;
  } catch (error) {
    console.warn("Erreur lors de la géolocalisation:", error);
    return null;
  }
};

const detectLanguageFromGeolocation = async (): Promise<Language> => {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;

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

  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      console.warn("Géolocalisation non supportée");
      resolve(detectLanguageFromBrowser());
      return;
    }

    const timeoutId = setTimeout(() => {
      console.warn("Timeout géolocalisation");
      resolve(detectLanguageFromBrowser());
    }, 5000);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        clearTimeout(timeoutId);
        try {
          const { latitude, longitude } = position.coords;
          const countryCode = await getCountryFromCoordinates(
            latitude,
            longitude
          );

          if (countryCode && frenchSpeakingCountries.includes(countryCode)) {
            resolve("fr");
          } else {
            resolve("en");
          }
        } catch (error) {
          console.warn("Erreur lors de la détection du pays:", error);
          resolve(detectLanguageFromBrowser());
        }
      },
      (error) => {
        clearTimeout(timeoutId);
        console.warn("Erreur géolocalisation:", error.message);
        resolve(detectLanguageFromBrowser());
      },
      {
        timeout: 5000,
        maximumAge: 300000, // 5 minutes de cache
        enableHighAccuracy: false,
      }
    );
  });
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
      // Utiliser la détection basique en premier
      return detectLanguageFromBrowser();
    }
    return DEFAULT_LANGUAGE;
  });

  useEffect(() => {
    // Détecter la langue via géolocalisation en arrière-plan
    const detectAndSetLanguage = async () => {
      if (typeof window !== "undefined") {
        try {
          const saved = localStorage.getItem(STORAGE_KEY);
          // Si l'utilisateur n'a pas déjà une préférence sauvegardée
          if (!saved || !SUPPORTED_LANGUAGES.includes(saved as Language)) {
            const detectedLanguage = await detectLanguageFromGeolocation();
            setLanguage(detectedLanguage);
          }
        } catch (error) {
          console.warn("Erreur lors de la détection géolocalisée:", error);
        }
      }
    };

    detectAndSetLanguage();
  }, []);

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
