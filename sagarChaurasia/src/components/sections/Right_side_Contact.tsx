import React from 'react'
import { Mail, Linkedin, Github, Send } from "lucide-react";
  
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
const Right_side_Contact = () => {
  return (
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
  )
}

export default Right_side_Contact