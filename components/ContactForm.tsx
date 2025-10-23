"use client";

import { useState } from "react";
import { trackContactSubmit } from "@/lib/analytics";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    projectType: "one-page"
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Submit to Formspree
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

      if (!formspreeId) {
        console.error("Formspree ID not configured");
        setSubmitStatus("error");
        return;
      }

      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        trackContactSubmit('contact_form');
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          projectType: "one-page"
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <section id="contact" className="bg-[#f5f0e9] py-12 md:pt-8 md:pb-20 lg:pt-12 lg:pb-28">
      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Heading */}
        <div className="mb-12">
          <p className="font-jetbrains text-xs md:text-sm text-[#073742] uppercase tracking-wider mb-4">
            Get Started
          </p>
          <h2 className="font-axel font-bold text-4xl md:text-5xl lg:text-6xl text-[#073742] uppercase mb-4 leading-[0.9] md:leading-normal">
            Let's Build Your Website
          </h2>
          <p className="font-riposte text-[#073742]/70 text-lg max-w-2xl">
            Tell us about your project and we'll get back to you within 24 hours
          </p>
          <p className="font-riposte text-[#073742]/60 text-sm mt-3">
            Have questions first? <a href="/faq" className="text-[#073742] underline hover:text-accent transition-colors">Check our FAQ</a>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-[#073742] rounded-3xl p-8 md:p-12">
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block font-jetbrains text-sm text-cream uppercase tracking-wide mb-2">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-4 rounded-lg border-2 ${
                  errors.name ? 'border-accent' : 'border-cream/20'
                } focus:border-cream focus:outline-none transition-colors font-riposte bg-white/95`}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-accent font-riposte">{errors.name}</p>
              )}
            </div>

            {/* Email & Phone Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block font-jetbrains text-sm text-cream uppercase tracking-wide mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-4 rounded-lg border-2 ${
                    errors.email ? 'border-accent' : 'border-cream/20'
                  } focus:border-cream focus:outline-none transition-colors font-riposte bg-white/95`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-accent font-riposte">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block font-jetbrains text-sm text-cream uppercase tracking-wide mb-2">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-lg border-2 border-cream/20 focus:border-cream focus:outline-none transition-colors font-riposte bg-white/95"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            {/* Project Type */}
            <div>
              <label htmlFor="projectType" className="block font-jetbrains text-sm text-cream uppercase tracking-wide mb-2">
                I'm Interested In
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-lg border-2 border-cream/20 focus:border-cream focus:outline-none transition-colors font-riposte bg-white/95"
              >
                <option value="one-page">One-Page Website ($750 USD)</option>
                <option value="multi-page">Multi-Page Website (Custom Quote)</option>
                <option value="care-hosting">Care & Hosting Only ($18 USD/mo)</option>
                <option value="other">Something Else</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block font-jetbrains text-sm text-cream uppercase tracking-wide mb-2">
                Tell Us About Your Project *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-4 rounded-lg border-2 ${
                  errors.message ? 'border-accent' : 'border-cream/20'
                } focus:border-cream focus:outline-none transition-colors font-riposte resize-none bg-white/95`}
                placeholder="What are you looking to build? Any specific features or requirements?"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-accent font-riposte">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#ff6b35] text-[#073742] font-riposte px-10 py-4 rounded-full text-base md:text-lg uppercase tracking-tight transition-all duration-300 hover:bg-[#ff8555] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed font-bold"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {/* Success/Error Messages with aria-live for screen readers */}
            <div
              role="status"
              aria-live="polite"
              aria-atomic="true"
            >
              {submitStatus === "success" && (
                <div className="bg-[#c8e3da] border-2 border-cream rounded-lg p-4 text-center">
                  <p className="font-riposte text-[#073742] font-bold">
                    Thanks! We'll get back to you within 24 hours.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-accent border-2 border-cream rounded-lg p-4 text-center">
                  <p className="font-riposte text-[#073742] font-bold">
                    Something went wrong. Please try again or email us directly.
                  </p>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
