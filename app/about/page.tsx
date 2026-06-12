"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Clock,
  ShieldCheck,
  Award,
  Zap,
  BookOpen,
  DollarSign,
  ArrowRightLeft,
  ChevronLeft,
  Info,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutUs() {
  // Calculator State
  const [initialCapital, setInitialCapital] = useState<number>(100);
  const [dailyRate, setDailyRate] = useState<number>(1.0);
  const [tradingDays, setTradingDays] = useState<number>(250);

  // Memoized compounding calculation and SVG path generation
  const calculations = useMemo(() => {
    const dataPoints: { day: number; amount: number }[] = [];
    let currentAmount = initialCapital;

    for (let day = 0; day <= tradingDays; day++) {
      if (day > 0) {
        currentAmount = currentAmount * (1 + dailyRate / 100);
      }
      dataPoints.push({ day, amount: Math.round(currentAmount * 100) / 100 });
    }

    const finalValue = Math.round(currentAmount);

    // SVG coordinates generation
    const width = 500;
    const height = 200;
    const padding = 10;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;

    const maxVal = Math.max(...dataPoints.map((d) => d.amount));
    const minVal = initialCapital;

    const points = dataPoints.map((d) => {
      const x = padding + (d.day / tradingDays) * chartWidth;
      // Invert Y axis for SVG (0 is top)
      const y =
        padding +
        chartHeight -
        ((d.amount - minVal) / (maxVal - minVal || 1)) * chartHeight;
      return `${x},${y}`;
    });

    const pathD = points.length > 0 ? `M ${points.join(" L ")}` : "";
    
    // Fill path to the bottom
    const fillD =
      points.length > 0
        ? `${pathD} L ${padding + chartWidth},${padding + chartHeight} L ${padding},${padding + chartHeight} Z`
        : "";

    return {
      finalValue,
      pathD,
      fillD,
      dataPoints,
    };
  }, [initialCapital, dailyRate, tradingDays]);

  const copyTradingBenefits = [
    {
      title: "صرفه‌جویی در زمان و انرژی",
      desc: "نیازی نیست ساعت‌ها وقت صرف تحلیل بازار کنید. فقط تریدر مناسب را انتخاب می‌کنید و معاملاتش به صورت خودکار در حساب شما کپی می‌شود.",
      icon: Clock,
    },
    {
      title: "استفاده از تجربه حرفه‌ای‌ها",
      desc: "با وصل شدن به یک تریدر با درصد موفقیت بالا، می‌توانید از تجربه و استراتژی‌های حرفه‌ای او بدون واسطه بهره‌مند شوید.",
      icon: ShieldCheck,
    },
    {
      title: "مدیریت هوشمندانه ریسک",
      desc: "بسیاری از پلتفرم‌های کپی‌ترید امکان تعیین مقدار سرمایه، حد ضرر و حداکثر ضرر روزانه را دارند، بنابراین شما کنترل کاملی بر ریسک خود دارید.",
      icon: Award,
    },
    {
      title: "آموزش غیرمستقیم و تجربی",
      desc: "با بررسی معاملات انجام شده توسط تریدرهای باسابقه، به صورت تجربی روش تحلیل و استراتژی‌های معاملاتی آنها را فرا می‌گیرید.",
      icon: BookOpen,
    },
    {
      title: "فرصت کسب سود بدون نیاز به تخصص",
      desc: "اگر تریدر انتخابی شما سابقه معاملاتی درخشانی داشته باشد، شانس کسب بازدهی بالا برای سرمایه شما نیز به شدت افزایش می‌یابد.",
      icon: Zap,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-4 min-h-screen relative overflow-hidden bg-bg-color isolate">
        {/* Background Radial Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent-color/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-accent-color/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* Header section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-accent-color text-sm uppercase tracking-widest font-medium mb-4 block">
              شناخت خدمات و اهداف ما
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-accent-gradient inline-block pb-6 mb-6 border-b border-accent-color/30">
              درباره ما
            </h1>
            <p className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed font-sans">
              راهنمای جامع بازار فارکس، کپی‌تریدینگ هوشمند و خدمات انحصاری گروه مجیک در بستری ایمن و پیشرفته.
            </p>
          </motion.div>

          {/* Section 1: Forex Market */}
          <section className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7 space-y-6 animate-fadeIn"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-color/10 border border-accent-color/20 text-accent-color text-xs font-semibold">
                  <TrendingUp size={14} />
                  <span>بزرگ‌ترین بازار مالی جهان</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-text-color leading-tight">
                  بازار فارکس چیست و چطور کار می‌کند؟
                </h2>
                <p className="text-text-muted leading-relaxed text-justify">
                  بازار فارکس (Forex) یا همان بازار تبادل ارزهای خارجی، بزرگ‌ترین بازار مالی دنیاست که در آن ارزهای مختلف دنیا با هم مبادله می‌شوند. مثلاً وقتی کسی دلار آمریکا را با یورو یا پوند انگلیس عوض می‌کند، در واقع وارد یک معامله در بازار فارکس شده است. فارکس به صورت ۲۴ ساعته و ۵ روز در هفته فعال است. این بازار مکان فیزیکی مشخصی ندارد و همه معاملات به صورت آنلاین و از طریق پلتفرم‌های معاملاتی پیشرفته انجام می‌شود.
                </p>
                <div className="p-5 rounded-xl bg-white/[0.02] border border-glass-border">
                  <h3 className="font-serif text-xl text-accent-color mb-3 flex items-center gap-2">
                    <ArrowRightLeft size={18} className="text-accent-color" />
                    مبنای کار فارکس ساده است:
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    شما یک ارز را می‌خرید و در مقابل آن، ارز دیگری را می‌فروشید. به این حالت جفت‌ارز (Currency Pair) گفته می‌شود. مثلاً در جفت‌ارز EUR/USD، اگر فکر کنید ارزش یورو نسبت به دلار بالا می‌رود، یورو می‌خرید و دلار می‌فروشید. اگر درست حدس زده باشید، سود می‌کنید؛ در غیر این صورت متضرر خواهید شد.
                  </p>
                </div>
                <p className="text-text-muted leading-relaxed">
                  اما فارکس فقط مخصوص ارزها نیست! در این بازار می‌توانید طلا (XAU/USD)، نقره، نفت و حتی شاخص‌های جهانی و ارزهای دیجیتال را هم معامله کنید. برای مثال، اگر فکر کنید قیمت طلا بالا می‌رود، می‌توانید طلا بخرید و وقتی بالا رفت، بفروشید و سود کنید.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-5 relative"
              >
                <div className="glass-panel p-8 rounded-2xl border border-glass-border relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-accent-color/10 rounded-full blur-2xl"></div>
                  <h3 className="font-serif text-2xl text-text-color mb-6 pb-3 border-b border-glass-border">شروع هوشمندانه</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent-color/10 flex items-center justify-center flex-shrink-0 text-accent-color">
                        <Info size={20} />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-text-color mb-1">نیاز به کارگزاری (Broker)</h4>
                        <p className="text-xs text-text-muted leading-relaxed">
                          برای شروع، به یک کارگزاری معتبر نیاز دارید که نرم‌افزار معاملاتی لازم جهت تحلیل و خرید و فروش جفت‌ارزها و سایر نمادها را در اختیارتان قرار دهد.
                        </p>
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-accent-color/5 border border-accent-color/20 mt-6 text-xs text-accent-color leading-relaxed">
                      <strong>هشدار ریسک:</strong> از آنجا که فارکس پرریسک است، باید با دقت، آموزش و مدیریت سرمایه وارد آن شد. موفقیت در این بازار بیشتر از شانس، به دانش، تجربه و تمرین بستگی دارد.
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Section 2: Copy Trading */}
          <section className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-accent-gradient inline-block pb-4 border-b border-glass-border">
                کپی‌تریدینگ چیست و چه مزایایی دارد؟
              </h2>
              <p className="text-text-muted text-base max-w-3xl mx-auto mt-6 leading-relaxed">
                کپی‌تریدینگ (Copy Trading) یک روش معامله‌گری مدرن در بازارهای مالی است که در آن افراد تازه‌کار یا کسانی که وقت کافی برای تحلیل ندارند، معاملات یک تریدر حرفه‌ای را به صورت خودکار کپی می‌کنند؛ بدون نیاز به تصمیم‌گیری شخصی یا تحلیل مداوم بازار.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {copyTradingBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-panel p-6 rounded-xl hover:border-accent-color/40 transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-lg bg-accent-color/10 flex items-center justify-center text-accent-color mb-6 group-hover:bg-accent-color group-hover:text-bg-color transition-colors duration-300">
                        <IconComponent size={24} />
                      </div>
                      <h3 className="font-serif text-xl text-text-color mb-4 group-hover:text-accent-color transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Section 3: Magic Group & GTCFX */}
          <section className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-5"
              >
                <div className="glass-panel p-8 rounded-2xl border border-glass-border relative overflow-hidden bg-gradient-to-br from-white/[0.01] to-accent-color/[0.02]">
                  <div className="absolute -top-12 -left-12 w-36 h-36 bg-accent-color/5 rounded-full blur-3xl"></div>
                  <h3 className="font-serif text-2xl text-accent-color mb-6">ویژگی‌های کپی‌ترید گروه مجیک</h3>
                  
                  <ul className="space-y-6">
                    <li className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent-color/15 flex items-center justify-center flex-shrink-0 text-accent-color mt-1">
                        <span className="text-xs font-bold">۱</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-text-color mb-1">عدم دسترسی تریدر به حساب سرمایه‌گذار</h4>
                        <p className="text-xs text-text-muted leading-relaxed">
                          سرمایه شما همواره در کنترل کامل خودتان است. در هر زمان می‌توانید بدون محدودیت روند کپی‌ترید را متوقف کرده و وجوه خود را برداشت کنید.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent-color/15 flex items-center justify-center flex-shrink-0 text-accent-color mt-1">
                        <span className="text-xs font-bold">۲</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-text-color mb-1">بازدهی اتاق ترید و بازده مرکب</h4>
                        <p className="text-xs text-text-muted leading-relaxed">
                          گروه مجیک با مدیریت هوشمند ریسک، بازده دلاری حدود ۲۰٪ در ماه (حدود ۱٪ در هر روز معاملاتی) را به عنوان برآیند مناسب استراتژی‌ها هدف‌گذاری کرده است.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7 space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-color/10 border border-accent-color/20 text-accent-color text-xs font-semibold">
                  <span>شریک معاملاتی مطمئن</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-text-color leading-tight">
                  گروه مجیک و کارگزاری معتبر GTCFX
                </h2>
                <p className="text-text-muted leading-relaxed text-justify">
                  گروه مجیک خدمات کپی‌تریدینگ خود را در بروکر معتبر <strong>GTCFX</strong> ارائه می‌کند. از این رو، علاقه‌مندان برای اتصال به این خدمات باید در این بروکر افتتاح حساب نمایند. بروکر GTCFX یکی از شناخته‌شده‌ترین کارگزاری‌ها در بازارهای مالی بین‌المللی است که با سال‌ها سابقه درخشان، بستری کاملاً امن و پیشرفته را برای تریدرها در سراسر جهان مهیا نموده است.
                </p>
                <p className="text-text-muted leading-relaxed text-justify text-sm">
                  این کارگزاری با ارائه انواع حساب‌های متنوع معاملاتی، پشتیبانی قوی فارسی، ابزارهای تحلیلی فوق‌العاده و فراهم کردن دسترسی به بازار فارکس، فلزات گرانبها، شاخص‌ها و رمزارزها، گزینه‌ای بی‌نقص برای فعالان مبتدی و حرفه‌ای است. ضمناً GTCFX با اخذ مجوز از نهادهای نظارتی معتبر بین‌المللی (Regulated) و ارائه اسپرد و کمیسیون‌های رقابتی، اعتماد کاربران بی‌شماری را در سراسر دنیا جلب کرده است.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Compound Interest Simulator Section */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-panel p-8 md:p-12 rounded-2xl border border-glass-border relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-color/5 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left controls */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl text-accent-gradient mb-4">
                      شبیه‌ساز اثر جادویی سود مرکب
                    </h3>
                    <p className="text-text-muted text-xs leading-relaxed font-sans">
                      در بازه زمانی طولانی، سود مرکب پتانسیل رشد سرمایه را چندین برابر می‌کند. این شبیه‌ساز اثر انباشت مستمر سودهای روزانه بر مانده اولیه را نشان می‌دهد.
                    </p>
                  </div>

                  <div className="space-y-4 pt-4">
                    {/* Control 1: Initial Capital */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-semibold text-text-color">
                        <span>سرمایه اولیه:</span>
                        <span className="text-accent-color" dir="ltr">${initialCapital.toLocaleString()}</span>
                      </div>
                      <input
                        type="range"
                        min="100"
                        max="10000"
                        step="100"
                        value={initialCapital}
                        onChange={(e) => setInitialCapital(Number(e.target.value))}
                        className="w-full accent-accent-color bg-white/10 rounded-lg h-2 cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-text-muted">
                        <span>$۱۰۰</span>
                        <span>$۱۰,۰۰۰</span>
                      </div>
                    </div>

                    {/* Control 2: Daily Rate */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-semibold text-text-color">
                        <span>سود روزانه هدف:</span>
                        <span className="text-accent-color" dir="ltr">{dailyRate}%</span>
                      </div>
                      <input
                        type="range"
                        min="0.1"
                        max="3.0"
                        step="0.1"
                        value={dailyRate}
                        onChange={(e) => setDailyRate(Number(e.target.value))}
                        className="w-full accent-accent-color bg-white/10 rounded-lg h-2 cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-text-muted">
                        <span>۰.۱٪</span>
                        <span>۳.۰٪</span>
                      </div>
                    </div>

                    {/* Control 3: Trading Days */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-semibold text-text-color">
                        <span>تعداد روزهای معاملاتی:</span>
                        <span className="text-accent-color">{tradingDays} روز</span>
                      </div>
                      <input
                        type="range"
                        min="30"
                        max="260"
                        step="10"
                        value={tradingDays}
                        onChange={(e) => setTradingDays(Number(e.target.value))}
                        className="w-full accent-accent-color bg-white/10 rounded-lg h-2 cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-text-muted">
                        <span>۳۰ روز (~۱.۵ ماه)</span>
                        <span>۲۶۰ روز (~۱ سال)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Results & Visual Chart */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full bg-white/[0.01] border border-glass-border/50 p-6 rounded-xl relative">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-[10px] text-text-muted uppercase tracking-wider block">کل موجودی پس از دوره</span>
                      <span className="text-3xl sm:text-4xl font-serif text-accent-color font-bold" dir="ltr">${calculations.finalValue.toLocaleString()}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-text-muted block">کل سود انباشته شده</span>
                      <span className="text-lg font-semibold text-emerald-500 font-sans" dir="ltr">+{Math.round(calculations.finalValue - initialCapital).toLocaleString()}$</span>
                    </div>
                  </div>

                  {/* SVG Chart Graphic */}
                  <div className="w-full relative h-[200px] border-b border-l border-glass-border mb-4">
                    <svg viewBox="0 0 500 200" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#d29f51" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#d29f51" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      
                      {/* Fill area */}
                      {calculations.fillD && (
                        <path d={calculations.fillD} fill="url(#chartGlow)" />
                      )}

                      {/* Line path */}
                      {calculations.pathD && (
                        <path
                          d={calculations.pathD}
                          fill="none"
                          stroke="#d29f51"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      )}
                    </svg>
                    
                    {/* SVG Axis Indicators */}
                    <div className="absolute bottom-1 right-2 text-[8px] text-text-muted">شروع (روز ۰)</div>
                    <div className="absolute bottom-1 left-2 text-[8px] text-text-muted">روز {tradingDays}</div>
                    <div className="absolute top-1 left-2 text-[8px] text-text-muted" dir="ltr">${calculations.finalValue.toLocaleString()}</div>
                  </div>

                  {/* Highlight text matching user source */}
                  <p className="text-text-muted text-[11px] leading-relaxed flex gap-2 items-start bg-white/5 p-3 rounded-lg border border-glass-border">
                    <Info size={16} className="text-accent-color flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>مثال واقعی در متن:</strong> در صورتی که سرمایه‌گذار در ابتدای دوره مبلغ <strong>۱۰۰ دلار</strong> به حساب خود واریز کند و هیچ برداشتی نداشته باشد، پس از یک سال با بازدهی مستمر و پیوسته <strong>۱٪ در روز</strong> (حدود ۲۵۰ روز معاملاتی)، کل موجودی وی بالغ بر <strong>۱۲۰۰ دلار</strong> خواهد شد.
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
