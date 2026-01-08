import React from 'react';
import { ArrowLeft, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Dynamic Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] hover:scale-105"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop")',
        }}
      ></div>
      
      {/* Professional Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-l from-primary-dark via-primary-dark/90 to-primary-dark/60"></div>
      
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 z-10 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 pt-20">
        <div className="max-w-4xl animate-fade-in-up">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-accent p-1.5 rounded-sm animate-pulse">
               <Zap className="text-white w-4 h-4" fill="currentColor" />
            </div>
            <span className="text-accent-yellow font-bold uppercase tracking-widest text-sm">
              رواد الهندسة الصناعية في اليمن
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight drop-shadow-lg delay-100 animate-fade-in-up">
            القوة الهندسية <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-yellow to-accent">للتحكم والطاقة</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed font-light border-r-4 border-accent pr-6 delay-200 animate-fade-in-up">
            نقدم حلولاً ذكية ومتكاملة للقطاع الصناعي. نجمع بين الخبرة العريقة والتكنولوجيا الحديثة لضمان كفاءة تشغيلية لا مثيل لها.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 delay-300 animate-fade-in-up">
            <a 
              href="#contact" 
              className="group bg-accent hover:bg-accent-hover text-white px-10 py-4 rounded-sm font-bold text-lg transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_30px_rgba(234,88,12,0.6)] flex items-center justify-center gap-3"
            >
              اطلب استشارة
              <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={20} />
            </a>
            <a 
              href="#projects" 
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-10 py-4 rounded-sm font-bold text-lg transition-all flex items-center justify-center gap-3"
            >
              شاهد أعمالنا
              <div className="w-2 h-2 bg-accent-yellow rounded-full group-hover:scale-150 transition-transform"></div>
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar Design */}
      <div className="absolute bottom-0 left-0 w-full flex">
         <div className="h-2 bg-accent w-1/3"></div>
         <div className="h-2 bg-primary w-1/3"></div>
         <div className="h-2 bg-accent-yellow w-1/3"></div>
      </div>
    </section>
  );
};

export default Hero;