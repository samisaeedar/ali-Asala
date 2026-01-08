import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "نظام أتمتة مصنع تعبئة",
      category: "تحكم صناعي",
      img: "https://images.unsplash.com/photo-1565515267326-b8735c363b64?q=80&w=800&auto=format&fit=crop",
      size: "lg:col-span-2"
    },
    {
      title: "محطة توزيع فرعية",
      category: "ضغط عالي",
      img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b0?q=80&w=800&auto=format&fit=crop",
      size: "lg:col-span-1"
    },
    {
      title: "لوحة مزامنة 4 مولدات",
      category: "توليد الطاقة",
      img: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=800&auto=format&fit=crop",
      size: "lg:col-span-1"
    },
    {
      title: "غرفة تحكم مركزية SCADA",
      category: "مراقبة",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      size: "lg:col-span-2"
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 animate-fade-in-up">
          <div className="max-w-2xl">
            <span className="text-accent font-bold tracking-widest uppercase mb-2 block">سجل النجاح</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">معرض مشاريعنا</h2>
            <p className="text-gray-600 text-lg">
              جولة في أحدث إنجازاتنا الهندسية التي تعكس دقة التنفيذ والالتزام بأعلى معايير الجودة العالمية.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-bold rounded-sm hover:bg-primary hover:text-white transition-all duration-300">
            عرض كل المشاريع <ArrowLeft size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${project.size} shadow-lg animate-fade-in-up`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-bold uppercase rounded-sm mb-3 shadow-md">
                  {project.category}
                </span>
                <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
                <div className="h-1 w-0 bg-white group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-sm shadow-lg">
            عرض كل المشاريع <ArrowLeft size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;