import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-sm shadow-xl overflow-hidden">
          
          {/* Contact Info */}
          <div className="p-10 lg:p-16">
            <h2 className="text-3xl font-bold text-primary mb-6">تواصل معنا</h2>
            <p className="text-gray-600 mb-10">
              فريقنا الهندسي جاهز للإجابة على استفساراتكم وتقديم الاستشارات الفنية لمشاريعكم.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-lg">الموقع</h4>
                  <p className="text-gray-600">اليمن، صنعاء<br />الدائري – جوار شركة سويد للتجارة</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-lg">الهاتف</h4>
                  <a href="tel:777403614" className="text-gray-600 text-lg font-bold hover:text-accent block ltr text-right" dir="ltr">
                    777 403 614
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-lg">البريد الإلكتروني</h4>
                  <p className="text-gray-600">info@alariqi-eng.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-lg">ساعات العمل</h4>
                  <p className="text-gray-600">السبت - الخميس: 8:00 صباحاً - 5:00 مساءً</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-gray-200 relative min-h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3848.118809988!2d44.187!3d15.352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDIxJzA3LjIiTiA0NMKwMTEnMTMuMiJF!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen={true} 
              loading="lazy" 
              title="Location Map"
              className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;