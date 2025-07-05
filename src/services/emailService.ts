import emailjs from '@emailjs/browser';
import { supabase } from '../lib/supabase';
import { ContactForm } from '../types';

// Configuration EmailJS
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

export class EmailService {
  static async initialize() {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }

  static async sendContactEmail(formData: ContactForm): Promise<boolean> {
    try {
      // Sauvegarder dans Supabase
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }
        ]);

      if (dbError) {
        console.warn('Erreur lors de la sauvegarde en base:', dbError);
        // Continue même si la sauvegarde échoue
      }

      // Envoyer l'email via EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'contact@mat-site-web.com',
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      return response.status === 200;
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      
      // Fallback: essayer de sauvegarder au moins en base
      try {
        await supabase
          .from('contact_submissions')
          .insert([
            {
              name: formData.name,
              email: formData.email,
              message: formData.message,
            }
          ]);
        return true; // Considérer comme succès si au moins la sauvegarde fonctionne
      } catch (fallbackError) {
        console.error('Erreur de fallback:', fallbackError);
        return false;
      }
    }
  }

  // Méthode de fallback utilisant mailto
  static openMailtoFallback(formData: ContactForm) {
    const subject = encodeURIComponent(`Contact depuis le portfolio - ${formData.name}`);
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:contact@mat-site-web.com?subject=${subject}&body=${body}`;
    window.open(mailtoUrl, '_blank');
  }
}