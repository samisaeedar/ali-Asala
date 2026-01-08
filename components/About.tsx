import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-12 bg-accent"></div>
              <span className="text-primary font-bold uppercase tracking-wide">من نحن</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
              العريقي للخدمات الصناعية والهندسية
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              نحن شركة رائدة في مجال الهندسة الصناعية والحلول الكهربائية، نتميز بخبرة عريقة في تصميم وتنفيذ أنظمة التحكم والطاقة المعقدة. نلتزم بتقديم حلول تقنية مبتكرة تضمن استمرارية الأعمال وكفاءة التشغيل لعملائنا في القطاعات الصناعية المختلفة.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              يعمل لدينا نخبة من المهندسين والفنيين المؤهلين لضمان تنفيذ المشاريع وفق أعلى معايير الجودة والسلامة العالمية.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "خبرة هندسية واسعة",
                "التزام بمعايير السلامة",
                "كادر فني متخصص",
                "حلول مستدامة",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent-yellow w-6 h-6 flex-shrink-0" />
                  <span className="font-semibold text-secondary-light">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:w-1/2 order-1 lg:order-2 relative">
            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop" 
                alt="Industrial Engineer" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Background Accent */}
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-gray-100 -z-10 rounded-sm"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 -z-10 rounded-full blur-2xl"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;