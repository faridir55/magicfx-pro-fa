"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      number: "۰۱",
      title: "ایجاد حساب بروکر",
      description: "برای اطمینان از اجرای روان معاملات و تاخیر (Latency) پایین، در کارگزاری شریک انحصاری ما ثبت‌نام کنید.",
      link: "https://mygtcportal.com/getview?view=register&token=Ai9beowwqowwwwww",
      linkText: "ثبت‌نام"
    },
    {
      number: "۰۲",
      title: "شارژ کیف پول",
      description: "حداقل سرمایه مورد نیاز ۱۰۰ دلار است تا مارجین کافی برای مدیریت ریسک ما حفظ شود.",
      link: "https://mygtcfx.com/getview?view=fund/deposit",
      linkText: "شارژ حساب"
    },

    {
      number: "۰۳",
      title: "اتصال به حساب مستر",
      description: "حساب خود را از طریق پورتال کپی به الگوریتم مستر ما متصل کنید و معاملات را به طور خودکار کپی نمایید.",
      link: "https://gtccopy.com/portal/registration/subscription/86494/magicfx",
      linkText: "اتصال"
    },
  ];

  return (
    <section id="how-it-works" className="py-16 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="font-serif text-4xl md:text-5xl text-accent-gradient inline-block pb-4 border-b border-glass-border">
          چگونه کار می‌کند
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="glass-panel p-12 relative group hover:-translate-y-2 transition-transform duration-500 hover:border-accent-color"
          >
            <div className="font-serif text-7xl text-accent-color/10 absolute top-6 right-8 font-bold leading-none group-hover:text-accent-color/20 transition-colors duration-500">
              {step.number}
            </div>
            <h3 className="font-serif text-2xl mb-4 relative z-10">{step.title}</h3>
            <p className="text-text-muted relative z-10">
              {step.description}
            </p>
            {step.link && (
              <a
                href={step.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 inline-block mt-6 border border-accent-color text-accent-color px-6 py-2 font-medium uppercase tracking-widest text-xs hover:bg-accent-color hover:text-bg-color transition-colors"
              >
                {step.linkText}
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
