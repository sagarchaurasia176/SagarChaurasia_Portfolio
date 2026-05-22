import { useState } from 'react';
import Right_side_Contact from './Right_side_Contact';

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const apiKey= import.meta.env.VITE_EMAIL_KEY as string;



  const onSubmit = async (event: any) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", apiKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult("success");
        event.target.reset();
        setTimeout(() => setResult(""), 5000);
      } else {
        setResult("error");
        setTimeout(() => setResult(""), 5000);
      }
    } catch (error) {
      setResult("error");
      setTimeout(() => setResult(""), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto p-6">
      {/* Form Section */}
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        
        <form onSubmit={onSubmit} className="space-y-5">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Your message..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {/* Status Messages */}
          {result === "success" && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 text-sm">
                Message sent successfully! I'll get back to you soon.
              </p>
            </div>
          )}

          {result === "error" && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 text-sm">
                Something went wrong. Please try again.
              </p>
            </div>
          )}
        </form>
      </div>

      {/* Right Side Component */}
      <div className="flex-1">
        <Right_side_Contact />
      </div>
    </div>
  );
}