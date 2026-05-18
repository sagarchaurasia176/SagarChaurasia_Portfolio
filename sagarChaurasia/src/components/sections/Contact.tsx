import { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:sagarchaurasia176@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.open(mailtoLink, "_blank");
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "sagarchaurasia176@gmail.com",
      href: "mailto:sagarchaurasia176@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "sagarchaurasia74",
      href: "https://www.linkedin.com/in/sagarchaurasia74/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "sagarchaurasia176",
      href: "https://github.com/sagarchaurasia176",
    },
  ];

  const inputClasses =
    "w-full px-4 py-2.5 text-sm rounded-lg border border-surface-200 bg-white text-surface-900 placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all duration-200";

  return (
    <section id="contact" className="py-20 bg-surface-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind? Let's talk about it"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-xl bg-white border border-surface-200"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className={inputClasses}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-surface-700 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className={inputClasses}
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-surface-700 mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className={`${inputClasses} resize-none`}
                />
              </div>
              <Button type="submit" variant="primary" size="lg">
                <Send size={16} />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-surface-200 hover:border-primary-200 hover:shadow-sm transition-all duration-200"
              >
                <div className="p-2.5 rounded-lg bg-primary-50 text-primary-600">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-xs font-medium text-surface-400 uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-surface-800">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Availability Card */}
            <div className="p-6 rounded-xl bg-primary-600 text-white">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-medium text-primary-100">
                  Available for work
                </span>
              </div>
              <p className="text-sm text-primary-200 leading-relaxed">
                I'm currently open to new opportunities — freelance projects,
                full-time roles, or collaborations. Let's build something great
                together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
