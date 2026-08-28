import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.from('contact_messages').insert([formData]);
      if (error) throw error;
      setSent(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      alert('Could not send message. Please check connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-darkBlue uppercase tracking-wide">Contact Great King Academy</h1>
          <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information Card */}
          <div className="space-y-6">
            <div className="bg-brand-lightBg p-6 rounded-2xl border border-gray-200 space-y-4">
              <h2 className="font-extrabold text-lg text-brand-darkBlue uppercase border-b border-gray-200 pb-2">School Address & Contact</h2>
              
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <MapPin className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <span>Peter's Farm, Unity Town Community, Johnsonville, Montserrado County, Monrovia, Liberia.</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-700">
                <Phone className="w-5 h-5 text-brand-blue shrink-0" />
                <span>Phone / WhatsApp: Available upon request</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-700">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <span>info@greatkingacademy.edu.lr</span>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <a href="tel:+231000000000" className="bg-brand-blue text-white px-4 py-2 rounded-md font-bold text-xs uppercase">CALL US</a>
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 text-white px-4 py-2 rounded-md font-bold text-xs uppercase">WHATSAPP US</a>
                <a href="mailto:info@greatkingacademy.edu.lr" className="bg-brand-darkBlue text-white px-4 py-2 rounded-md font-bold text-xs uppercase">SEND EMAIL</a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-2xl border border-gray-200 p-8 text-center space-y-2">
              <MapPin className="w-8 h-8 text-gray-400 mx-auto" />
              <h3 className="font-bold text-brand-darkBlue text-sm">Johnsonville, Montserrado County</h3>
              <p className="text-xs text-gray-500">Unity Town Community, Peter's Farm</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <h2 className="font-extrabold text-lg text-brand-darkBlue uppercase border-b border-gray-200 pb-2">Send Us a Message</h2>
            
            {sent && <div className="p-3 bg-emerald-50 text-emerald-800 text-xs rounded border border-emerald-200">Message sent successfully!</div>}

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Your Name *</label>
              <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full p-2.5 rounded border border-gray-300 text-sm" />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email / Phone *</label>
              <input type="text" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full p-2.5 rounded border border-gray-300 text-sm" />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Subject *</label>
              <input type="text" required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full p-2.5 rounded border border-gray-300 text-sm" />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Message *</label>
              <textarea rows={4} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full p-2.5 rounded border border-gray-300 text-sm" />
            </div>

            <button type="submit" disabled={loading} className="w-full bg-brand-blue text-white font-bold text-xs uppercase tracking-wider py-3 rounded shadow hover:bg-brand-darkBlue">
              {loading ? 'Sending...' : 'SEND MESSAGE'}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
          }
