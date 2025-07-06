// Ce fichier aide à debugger les problèmes de déploiement
console.log("🚀 Portfolio loaded successfully!");
console.log("Environment check:");
console.log("- NODE_ENV:", import.meta.env.MODE);
console.log(
  "- VITE_SUPABASE_URL:",
  import.meta.env.VITE_SUPABASE_URL ? "✅ Set" : "❌ Missing"
);
console.log(
  "- VITE_SUPABASE_ANON_KEY:",
  import.meta.env.VITE_SUPABASE_ANON_KEY ? "✅ Set" : "❌ Missing"
);
console.log(
  "- VITE_EMAILJS_SERVICE_ID:",
  import.meta.env.VITE_EMAILJS_SERVICE_ID ? "✅ Set" : "❌ Missing"
);
console.log(
  "- VITE_EMAILJS_TEMPLATE_ID:",
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID ? "✅ Set" : "❌ Missing"
);
console.log(
  "- VITE_EMAILJS_PUBLIC_KEY:",
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY ? "✅ Set" : "❌ Missing"
);
