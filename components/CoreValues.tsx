"use client";

import { motion } from "framer-motion";
import { Shield, TrendingUp, Cpu } from "lucide-react";

export default function CoreValues() {
  const values = [
    {
      icon: <Cpu size={40} className="text-accent-color mb-6" />,
      title: "دقت الگوریتمی",
      description: "اجرای مبتنی بر داده بدون هیچ‌گونه دخالت احساسی، برای شکار بهترین حرکات طلا (XAU/USD).",
    },
    {
      icon: <Shield size={40} className="text-accent-color mb-6" />,
      title: "مدیریت ریسک",
      description: "حدود سخت‌گیرانه برای افت سرمایه و حجم‌گذاری پویا جهت محافظت از سرمایه شما در بازارهای پرنوسان.",
    },
    {
      icon: <TrendingUp size={40} className="text-accent-color mb-6" />,
      title: "رشد مستمر",
      description: "طراحی‌شده برای سودهای مستمر و مرکب در بلندمدت، به دور از شرط‌بندی‌های پرریسک.",
    },
  ];

  return (
    <section className="py-32 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="flex flex-col items-center group"
          >
            <div className="p-4 rounded-full bg-accent-color/5 group-hover:bg-accent-color/10 transition-colors duration-500">
              {value.icon}
            </div>
            <h4 className="font-serif text-xl mb-4 tracking-wide">{value.title}</h4>
            <p className="text-text-muted leading-relaxed">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
