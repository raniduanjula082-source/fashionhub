import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl mb-8 text-center">Contact Us</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Have a question or need assistance? We're here to help! Reach out to us through any of the methods below.
      </p>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl mb-6">Send us a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a6b]"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a6b]"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-2">Phone Number (Optional)</label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a6b]"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block mb-2">Subject</label>
              <select
                id="subject"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a6b]"
              >
                <option>General Inquiry</option>
                <option>Order Support</option>
                <option>Product Question</option>
                <option>Return/Exchange</option>
                <option>Partnership Opportunity</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a6b]"
                placeholder="How can we help you?"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#1a3a6b] text-white rounded-lg hover:bg-[#2a4a7b] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl mb-6">Contact Information</h2>
          
          <div className="space-y-6 mb-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#1a3a6b] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-[#1a3a6b]" />
              </div>
              <div>
                <h3 className="mb-1">Email</h3>
                <p className="text-gray-600">support@fashionhub.com</p>
                <p className="text-gray-600">sales@fashionhub.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#1a3a6b] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-[#1a3a6b]" />
              </div>
              <div>
                <h3 className="mb-1">Phone</h3>
                <p className="text-gray-600">+1 (800) 123-4567</p>
                <p className="text-gray-600">Mon-Fri: 9AM - 6PM EST</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#1a3a6b] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#1a3a6b]" />
              </div>
              <div>
                <h3 className="mb-1">Address</h3>
                <p className="text-gray-600">123 Fashion Avenue</p>
                <p className="text-gray-600">New York, NY 10001</p>
                <p className="text-gray-600">United States</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#1a3a6b] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-[#1a3a6b]" />
              </div>
              <div>
                <h3 className="mb-1">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Customer Service Image */}
          <div className="rounded-lg overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1712159018726-4564d92f3ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjBzdXBwb3J0fGVufDF8fHx8MTc2NzQxNjUxMnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Customer Service"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-3xl mb-8 text-center">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="mb-3">What is your return policy?</h3>
            <p className="text-gray-700">
              We offer a 30-day return policy for all unworn items with original tags. Please contact our support team to initiate a return.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="mb-3">How long does shipping take?</h3>
            <p className="text-gray-700">
              Standard shipping takes 5-7 business days. Express shipping is available for 2-3 business days delivery.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="mb-3">Do you ship internationally?</h3>
            <p className="text-gray-700">
              Yes! We ship to over 25 countries worldwide. International shipping times vary by location.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="mb-3">How can I track my order?</h3>
            <p className="text-gray-700">
              Once your order ships, you'll receive a tracking number via email. You can also track your order in your account dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
