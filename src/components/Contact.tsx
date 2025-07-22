import React, { useState, useEffect } from "react";
import {
  Mail,
  MessageSquare,
  User,
  Send,
  CheckCircle,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { ContactForm, Language } from "../types";
import { EmailService } from "../services/emailService";
import { t } from "../lib/translations";

interface ContactProps {
  language: Language;
}

export const Contact: React.FC<ContactProps> = ({ language }) => {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Partial<ContactForm>>({});

  useEffect(() => {
    EmailService.initialize();
  }, []);

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactForm> = {};

    if (!formData.name.trim()) {
      newErrors.name = t("nameRequired", language);
    } else if (formData.name.trim().length < 2) {
      newErrors.name = t("nameMinLength", language);
    }

    if (!formData.email.trim()) {
      newErrors.email = t("emailRequired", language);
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("emailInvalid", language);
    }

    if (!formData.message.trim()) {
      newErrors.message = t("messageRequired", language);
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t("messageMinLength", language);
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const success = await EmailService.sendContactEmail(formData);

      if (success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });

        // Reset success message after 8 seconds
        setTimeout(() => setIsSubmitted(false), 8000);
      } else {
        throw new Error("Échec de l'envoi");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setSubmitError(t("submitError", language));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof ContactForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }

    // Clear submit error when user modifies form
    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleMailtoFallback = () => {
    EmailService.openMailtoFallback(formData);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-8">
              <CheckCircle
                size={64}
                className="text-green-600 dark:text-green-400 mx-auto mb-4"
              />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {t("messageSuccess", language)}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t("messageSuccessDesc", language)}
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
              >
                {t("sendAnother", language)}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t("contactTitle", language)}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("contactDescription", language)}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  {t("letsDiscuss", language)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t("contactIntro", language)}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <Mail
                      className="text-blue-600 dark:text-blue-300"
                      size={20}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {t("email", language)}
                    </h4>
                    <a
                      href="mailto:contact@mat-site-web.com"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      contact@mat-site-web.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                    <MessageSquare
                      className="text-green-600 dark:text-green-300"
                      size={20}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {t("response", language)}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t("responseTime", language)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {submitError && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertCircle
                      className="text-red-600 dark:text-red-400 mt-0.5 mr-3"
                      size={20}
                    />
                    <div className="flex-1">
                      <p className="text-red-800 dark:text-red-200 text-sm mb-2">
                        {submitError}
                      </p>
                      <button
                        type="button"
                        onClick={handleMailtoFallback}
                        className="inline-flex items-center text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200 text-sm font-medium"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        {t("openEmailClient", language)}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t("name", language)} *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${
                      errors.name
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                    placeholder={t("fullName", language)}
                    disabled={isSubmitting}
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t("email", language)} *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${
                      errors.email
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                    placeholder={t("emailPlaceholder", language)}
                    disabled={isSubmitting}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t("message", language)} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`block w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                  placeholder={t("messagePlaceholder", language)}
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>{t("sending", language)}</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>{t("sendMessage", language)}</span>
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                {t("privacyNote", language)}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
