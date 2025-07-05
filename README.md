# Portfolio Mathieu Van Damme

Portfolio personnel développé avec React, TypeScript et Tailwind CSS.

## Fonctionnalités

- ✨ Design moderne et responsive
- 🌙 Mode sombre/clair
- 📱 Navigation mobile optimisée
- 📧 Formulaire de contact opérationnel
- 🎨 Animations et micro-interactions
- ⚡ Performance optimisée

## Configuration du formulaire de contact

Le formulaire de contact utilise deux services :

### 1. Supabase (Base de données)
1. Créez un compte sur [Supabase](https://supabase.com)
2. Créez un nouveau projet
3. Copiez l'URL et la clé anonyme de votre projet
4. Exécutez la migration SQL dans l'éditeur SQL de Supabase

### 2. EmailJS (Envoi d'emails)
1. Créez un compte sur [EmailJS](https://www.emailjs.com)
2. Créez un service email (Gmail, Outlook, etc.)
3. Créez un template d'email avec les variables :
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
   - `{{to_email}}`
4. Récupérez votre Service ID, Template ID et Public Key

### 3. Variables d'environnement
Créez un fichier `.env` à la racine du projet :

```env
# Supabase
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

# EmailJS
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Installation

```bash
npm install
npm run dev
```

## Déploiement

```bash
npm run build
```

## Technologies utilisées

- React 18
- TypeScript
- Tailwind CSS
- Supabase
- EmailJS
- Lucide React (icônes)
- Vite