import { useState } from "react";
import { profile } from "../../data/profile";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In production, you would send this to a backend or email service
    console.log("Form submitted:", formData);

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-4xl mx-auto px-1 md:px-0">
      {/* File header */}
      <div className="text-ide-text-muted text-xs md:text-sm mb-3 md:mb-4">
        <span className="syntax-comment">{`// contact.sh - Get in touch`}</span>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
        <span className="syntax-comment"># </span>
        Contact Me
      </h1>

      {/* Shell script style - hidden on small mobile */}
      <div className="hidden sm:block bg-ide-sidebar rounded-lg p-3 md:p-4 border border-ide-border mb-4 md:mb-6 font-mono text-xs md:text-sm">
        <div className="text-ide-text-muted">#!/bin/bash</div>
        <div className="text-ide-text-muted"># Contact Information</div>
        <div className="mt-2">
          <span className="syntax-variable">LOCATION</span>
          <span className="text-ide-text">=</span>
          <span className="syntax-string">"{profile.personal.location}"</span>
        </div>
        <div className="mt-2 text-ide-text-muted">
          # Run: ./contact.sh --connect
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Contact Info */}
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-ide-text mb-3 md:mb-4">
            <span className="syntax-comment">## </span>
            Let's Connect
          </h2>

          <p className="text-ide-text-muted mb-4 md:mb-6 text-sm md:text-base">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology. Feel free to reach
            out!
          </p>

          <div className="space-y-3 md:space-y-4">
            <a
              href={profile.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-center gap-3 md:gap-4 hover:border-ide-accent/50 transition-colors"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-ide-accent-purple/20 rounded-lg flex items-center justify-center text-lg md:text-xl flex-shrink-0">
                💼
              </div>
              <div>
                <div className="text-xs md:text-sm text-ide-text-muted">
                  LinkedIn
                </div>
                <div className="text-ide-accent-purple text-sm md:text-base">
                  Connect on LinkedIn
                </div>
              </div>
            </a>

            <a
              href={profile.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-center gap-3 md:gap-4 hover:border-ide-accent/50 transition-colors"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-ide-accent-pink/20 rounded-lg flex items-center justify-center text-lg md:text-xl flex-shrink-0">
                🐙
              </div>
              <div>
                <div className="text-xs md:text-sm text-ide-text-muted">
                  GitHub
                </div>
                <div className="text-ide-accent-pink text-sm md:text-base">
                  View my code
                </div>
              </div>
            </a>

            <div className="card flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-ide-accent-yellow/20 rounded-lg flex items-center justify-center text-lg md:text-xl flex-shrink-0">
                📍
              </div>
              <div>
                <div className="text-xs md:text-sm text-ide-text-muted">
                  Location
                </div>
                <div className="text-ide-accent-yellow text-sm md:text-base">
                  {profile.personal.location}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-ide-text mb-3 md:mb-4">
            <span className="syntax-comment">## </span>
            Send a Message
          </h2>

          {submitted ? (
            <div className="card bg-ide-accent-green/10 border-ide-accent-green/30">
              <div className="text-center py-6 md:py-8">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">✅</div>
                <h3 className="text-base md:text-lg font-semibold text-ide-accent-green mb-2">
                  Message Sent!
                </h3>
                <p className="text-ide-text-muted text-sm">
                  Thanks for reaching out. I'll get back to you soon!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-ghost mt-4 text-sm"
                >
                  Send another message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div>
                <label className="block text-xs md:text-sm text-ide-text-muted mb-1.5 md:mb-2">
                  <span className="syntax-property">name</span>
                  <span className="text-ide-text">:</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-2.5 bg-ide-terminal border border-ide-border rounded-lg 
                           text-ide-text text-sm md:text-base focus:border-ide-accent focus:outline-none focus:ring-1 focus:ring-ide-accent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm text-ide-text-muted mb-1.5 md:mb-2">
                  <span className="syntax-property">email</span>
                  <span className="text-ide-text">:</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-2.5 bg-ide-terminal border border-ide-border rounded-lg 
                           text-ide-text text-sm md:text-base focus:border-ide-accent focus:outline-none focus:ring-1 focus:ring-ide-accent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm text-ide-text-muted mb-1.5 md:mb-2">
                  <span className="syntax-property">message</span>
                  <span className="text-ide-text">:</span>
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={4}
                  className="w-full px-3 md:px-4 py-2 md:py-2.5 bg-ide-terminal border border-ide-border rounded-lg 
                           text-ide-text text-sm md:text-base focus:border-ide-accent focus:outline-none focus:ring-1 focus:ring-ide-accent
                           resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full flex items-center justify-center gap-2 text-sm md:text-base"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>📤</span>
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Availability status */}
      <div className="mt-6 md:mt-8 p-4 md:p-6 bg-ide-accent-green/10 border border-ide-accent-green/30 rounded-lg text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 md:w-3 md:h-3 bg-ide-accent-green rounded-full animate-pulse" />
          <span className="text-ide-accent-green font-semibold text-sm md:text-base">
            Currently Available
          </span>
        </div>
        <p className="text-ide-text-muted text-xs md:text-sm">
          I'm open to new opportunities and interesting projects. Let's talk!
        </p>
      </div>
    </div>
  );
}
