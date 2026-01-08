import React from 'react';
import { ShieldCheck, Award, Clock, Users, Check } from 'lucide-react';

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-primary-dark text-white relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 animate-fade-in-up">
            <div className="inline-block border border-accent/30 bg-accent/10 px-4 py-1.5 rounded-full mb-6">
               <span className="text-accent font-bold tracking-wider uppercase text-sm">لماذا العريقي؟</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              نضع معايير جديدة <br />
              <span className="text-accent-yellow">للتميز الصناعي</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              لسنا مجرد مقاولين، نحن شركاء نجاحك. ندرك أن توقف دقيقة واحدة في مصنعك يعني خسارة، لذلك صممنا خدماتنا لتضمن لك راحة البال واستمرارية الإنتاج بأقصى كفاءة.
            </p>
            
            <ul className="space-y-4 mb-10">
              {["ضمان حقيقي على جميع الأعمال", "فريق طوارئ جاهز 24/7", "استخدام قطع غيار أصلية فقط"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg font-medium">
                  <div className="bg-green-500/20 p-1 rounded-full text-green-400">
                    <Check size={18} strokeWidth={3} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <a href="#contact" className="inline-block bg-white text-primary-dark hover:bg-gray-100 font-bold py-4 px-10 rounded-sm transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              ابدأ مشروعك معنا
            </a>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-up delay-200">
            <FeatureCard 
              icon={<Users size={32} />} 
              title="خبرة متراكمة" 
              desc="فريق هندسي يمتلك عقوداً من الخبرة في السوق اليمني." 
            />
            <FeatureCard 
              icon={<Award size={32} />} 
              title="جودة عالمية" 
              desc="التزام صارم بمعايير IEC و ISO في جميع التركيبات." 
            />
            <FeatureCard 
              icon={<ShieldCheck size={32} />} 
              title="أمان موثوق" 
              desc="أنظمة حماية متقدمة تضمن سلامة المعدات والأفراد." 
            />
            <FeatureCard 
              icon={<Clock size={32} />} 
              title="التزام بالوقت" 
              desc="تسليم المشاريع في المواعيد المحددة بدقة متناهية." 
            />
          </div>

        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group">
    <div className="text-accent mb-6 bg-white/5 w-14 h-14 flex items-center justify-center rounded-lg group-hover:bg-accent group-hover:text-white transition-colors shadow-lg">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default WhyUs;