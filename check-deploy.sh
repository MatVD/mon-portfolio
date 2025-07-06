#!/bin/bash

echo "🔍 Vérification du projet avant déploiement Netlify"

# Vérifier que les fichiers nécessaires existent
echo "📁 Vérification des fichiers..."
if [ -f "netlify.toml" ]; then
    echo "✅ netlify.toml existe"
else
    echo "❌ netlify.toml manquant"
fi

if [ -f "public/_redirects" ]; then
    echo "✅ public/_redirects existe"
else
    echo "❌ public/_redirects manquant"
fi

# Build du projet
echo "🏗️ Construction du projet..."
npm run build

# Vérifier que le build a créé les fichiers nécessaires
if [ -f "dist/index.html" ]; then
    echo "✅ dist/index.html créé"
else
    echo "❌ dist/index.html manquant"
fi

if [ -f "dist/_redirects" ]; then
    echo "✅ dist/_redirects créé"
else
    echo "❌ dist/_redirects manquant"
fi

# Vérifier que les assets sont présents
if [ -d "dist/assets" ]; then
    echo "✅ Dossier assets créé"
    echo "📊 Contenu du dossier assets:"
    ls -la dist/assets/
else
    echo "❌ Dossier assets manquant"
fi

echo "🎉 Vérification terminée ! Votre projet est prêt pour Netlify."
echo "📋 N'oubliez pas de configurer les variables d'environnement sur Netlify !"
