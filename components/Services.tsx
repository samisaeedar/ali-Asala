import React from 'react';
import { Cpu, Zap, Activity, Repeat, Wrench, Server, ArrowUpLeft } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Cpu size={36} />,
      title: "أنظمة PLC / HMI",
      description: "تصميم وبرمجة أنظمة التحكم الذكية لخطوط الإنتاج بأحدث التقنيات العالمية."
    },
    {
      icon: <Zap size={36} />,
      title: "لوحات توزيع الطاقة",
      description: "تجميع لوحات MDB و SDB وفق معايير IEC لضمان السلامة والكفاءة العالية."
    },
    {
      icon: <Repeat size={36} />,
      title: "أنظمة ATS الذكية",
      description: "حلول التبديل التلقائي الموثوقة لضمان استمرارية الطاقة دون انقطاع لحظي."
    },
    {
      icon: <Activity size={36} />,
      title: "مزامنة المولدات",
      description: "أنظمة Synchronization متطورة لدمج القدرات وتوفير استهلاك الوقود."
    },
    {
      icon: <Wrench size={36} />,
      title: "الصيانة الصناعية",
      description: "عقود صيانة دورية وطارئة للمولدات ولوحات التحكم لتقليل فترات التوقف."
    },
    {
      icon: <Server size={36} />,
      title: "غرف SCADA",
      description: "أنظمة مراقبة وتحكم مركزية لإدارة المنشآت الصناعية عن بعد بدقة عالية."
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gray-200 rounded-full blur-3xl opacity-50 -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-50 -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 animate-fade-in-up">
            خدماتنا <span className="text-accent">الهندسية</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-accent to-accent-yellow mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-100">
            نقدم حزمة متكاملة من الحلول الصناعية التي تغطي كافة احتياجات منشأتك، من التصميم الأولي وحتى التشغيل والصيانة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden border border-gray-100 hover:border-accent/30 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gray-50 rounded-bl-full -mr-10 -mt-10 z-0 group-hover:bg-white/10 transition-colors"></div>

              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-lg bg-accent/10 text-accent group-hover:bg-white group-hover:text-accent transition-colors duration-300 shadow-sm">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-primary group-hover:text-white mb-4 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 group-hover:text-gray-200 leading-relaxed mb-6 transition-colors duration-300">
                  {service.description}
                </p>

                <div className="flex items-center text-accent font-bold text-sm group-hover:text-accent-yellow transition-colors">
                  <span>تفاصيل أكثر</span>
                  <ArrowUpLeft size={18} className="mr-2 group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;