import React from 'react';
import { Settings, Facebook, Twitter, Linkedin, ChevronLeft } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-gray-700 pb-12">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Settings className="text-accent-yellow" size={32} />
              <h2 className="text-2xl font-bold">العريقي</h2>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              شركة رائدة في مجال الهندسة الصناعية وأنظمة الطاقة، نسعى دائماً لتقديم حلول مبتكرة وآمنة تخدم القطاع الصناعي في اليمن.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-700 hover:bg-accent p-2 rounded-sm transition-colors"><Facebook size={20} /></a>
              <a href="#" className="bg-gray-700 hover:bg-accent p-2 rounded-sm transition-colors"><Twitter size={20} /></a>
              <a href="#" className="bg-gray-700 hover:bg-accent p-2 rounded-sm transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-r-4 border-accent pr-3">روابط سريعة</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"><ChevronLeft size={16} /> من نحن</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"><ChevronLeft size={16} /> خدماتنا</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"><ChevronLeft size={16} /> المشاريع</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"><ChevronLeft size={16} /> تواصل معنا</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-r-4 border-accent pr-3">الخدمات</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">أنظمة التحكم PLC</li>
              <li className="text-gray-400 text-sm">لوحات التوزيع الكهربائية</li>
              <li className="text-gray-400 text-sm">أنظمة الطاقة الشمسية</li>
              <li className="text-gray-400 text-sm">صيانة المولدات</li>
              <li className="text-gray-400 text-sm">أنظمة ATS والمزامنة</li>
            </ul>
          </div>

          {/* Contact Short */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-r-4 border-accent pr-3">اتصل بنا</h3>
            <p className="text-gray-400 mb-2">صنعاء، اليمن</p>
            <p dir="ltr" className="text-gray-400 text-right mb-2 font-mono hover:text-accent cursor-pointer">+967 777 403 614</p>
            <p className="text-gray-400 text-sm">info@alariqi-eng.com</p>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm pt-4">
          &copy; {new Date().getFullYear()} العريقي للخدمات الصناعية والهندسية. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
};

export default Footer;