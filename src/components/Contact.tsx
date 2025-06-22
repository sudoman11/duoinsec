import { Mail, Phone, MapPin } from 'lucide-react';
import ConsultationForm from './consultation/ConsultationForm';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-theme-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-theme-text mb-4">Contact Us</h2>
          <p className="text-theme-text-secondary max-w-2xl mx-auto">
            Ready to transform your digital security? Get in touch with our team of experts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ConsultationForm />

          <div className="bg-theme-navy/50 p-8 rounded-lg border border-blue-900/20">
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-400 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-theme-text">Email</h3>
                  <p className="text-theme-text-secondary">infoduoinsecgroups@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-blue-400 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-theme-text">Phone</h3>
                  <p className="text-theme-text-secondary">+91 (912) 35 47492, +91 (739) 70 29212</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-400 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-theme-text">Address</h3>
                  <p className="text-theme-text-secondary">Namakkal, Tamil Nadu<br />India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}