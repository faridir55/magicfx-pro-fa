"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "حداقل موجودی برای شروع کپی‌تریدینگ چقدر است؟",
      answer: "حداقل سرمایه مورد نیاز ۱۰۰ دلار است. این موضوع حجم‌گذاری ایمن و مدیریت ریسک مناسب را در حساب شما تضمین می‌کند.",
    },
    {
      question: "آیا نیاز به تجربه معامله‌گری دارم؟",
      answer: "خیر، نیازی به تجربه نیست. پس از اشتراک، الگوریتم به طور خودکار از طرف شما معامله می‌کند؛ نیازی به بررسی نمودارها یا ثبت سفارش به صورت دستی ندارید.",
    },
    {
      question: "آیا باید کامپیوترم را روشن نگه دارم؟",
      answer: "خیر. این استراتژی ۲۴ ساعت شبانه‌روز و ۵ روز هفته روی سرورهای ما اجرا می‌شود. کامپیوتر شما می‌تواند کاملاً خاموش باشد و معاملات همچنان به طور عادی انجام خواهند شد.",
    },
    {
      question: "آیا می‌توانم در هر زمان سرمایه خود را برداشت کنم؟",
      answer: "بله. سرمایه شما در حساب بروکر GTC خودتان نگهداری می‌شود و هرگز قفل نمی‌شود. شما می‌توانید در هر زمان و بدون جریمه آن را برداشت کنید.",
    },
    {
      question: "کارمزد عملکرد (Performance Fee) چگونه محاسبه می‌شود؟",
      answer: "کارمزد عملکرد فقط از سودهای کسب‌شده کسر می‌شود. اگر استراتژی بازدهی نداشته باشد، هیچ کارمزدی پرداخت نمی‌کنید. جزئیات کامل کارمزد در صفحه پروفایل استراتژی موجود است.",
    },
  ];

  return (
    <section className="py-32 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="font-serif text-4xl md:text-5xl text-accent-gradient inline-block pb-4 border-b border-glass-border">
          سوالات متداول
        </h2>
      </motion.div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border border-glass-border rounded bg-white/5 overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-5 flex justify-between items-center text-right hover:bg-white/5 transition-colors"
            >
              <span className="font-medium text-lg text-accent-color">{faq.question}</span>
              {openIndex === index ? (
                <Minus className="text-accent-color flex-shrink-0" size={20} />
              ) : (
                <Plus className="text-text-muted flex-shrink-0" size={20} />
              )}
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6 text-text-muted leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
