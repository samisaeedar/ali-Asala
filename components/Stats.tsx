import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { number: "150+", label: "مشروع صناعي", sub: "تم تنفيذه بنجاح" },
    { number: "50k", label: "ساعة عمل", sub: "بدون توقف" },
    { number: "98%", label: "نسبة الرضا", sub: "من عملائنا" },
    { number: "24/7", label: "دعم فني", sub: "استجابة فورية" },
  ];

  return (
    <div className="relative py-20 bg-primary-dark overflow-hidden">
      {/* Background Image Parallax Effect */}
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-fixed bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop")' }}
      ></div>
      
      {/* Blue Overlay */}
      <div className="absolute inset-0 z-0 bg-blue-900/80 mix-blend-multiply"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors group">
              <div className="text-5xl md:text-6xl font-black text-white mb-2 font-sans tracking-tight group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                {stat.number}
              </div>
              <div className="h-1 w-12 bg-accent mx-auto mb-4 rounded-full group-hover:w-20 transition-all"></div>
              <div className="text-xl font-bold text-gray-200 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-400 font-medium">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;