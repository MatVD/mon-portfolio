# Déploiement sur Netlify

## Instructions pour configurer les variables d'environnement sur Netlify

1. **Connectez-vous à votre dashboard Netlify**
2. **Allez dans Site settings → Environment variables**
3. **Ajoutez les variables suivantes :**

```
VITE_SUPABASE_URL=your supabase url
VITE_SUPABASE_ANON_KEY=your anon key.
VITE_EMAILJS_SERVICE_ID=contact_service
VITE_EMAILJS_TEMPLATE_ID=contact_form
VITE_EMAILJS_PUBLIC_KEY=your public key
```

## Configuration du build sur Netlify

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: `18`

## Fichiers de configuration

- `netlify.toml` : Configuration Netlify
- `public/_redirects` : Redirections pour SPA
- `.env.example` : Exemple de variables d'environnement

## Résolution des problèmes

Si vous voyez une page blanche après le déploiement :

1. Vérifiez que les variables d'environnement sont correctement configurées
2. Regardez les logs de build sur Netlify
3. Consultez les outils de développement du navigateur pour voir les erreurs JavaScript
4. Vérifiez que le fichier `_redirects` est bien dans le dossier `public`

## Test local

```bash
npm run build
npm run preview
```

Le site sera accessible sur `http://localhost:4173`
