import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-glass-border pt-20 pb-10 px-4 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <Link href="/" className="flex justify-center mb-8">
          <img
            src="/MagicFX_pro.png"
            alt="MagicFX Pro Logo"
            className="h-24 w-auto object-contain"
          />
        </Link>

        <p className="text-xl text-text-muted mb-8 max-w-2xl mx-auto font-serif italic">
          &quot;عنصر ثروت، به تسخیر درآمده.&quot;
        </p>

        <div className="flex flex-col items-center justify-center mb-10">
          <h4 className="text-sm uppercase tracking-widest text-text-muted mb-4">تماس با ما</h4>
          <a
            href="https://wa.me/+15019144353"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#25D366]/40 rounded-full text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 mb-6"
          >
            <MessageCircle size={20} />
            <span className="font-medium">ارتباط از طریق واتس‌اپ</span>
          </a>

          {/* Language Switcher */}
          <div className="flex items-center gap-4 text-xs tracking-widest uppercase">
            <a
              href="https://magicfx.pro"
              className="font-medium text-text-muted hover:text-text-color transition-colors duration-300 border-b border-transparent hover:border-text-muted/40 pb-0.5"
            >
              English (EN)
            </a>
            <span className="text-text-muted/20">|</span>
            <a
              href="https://tr.magicfx.pro"
              className="font-medium text-text-muted hover:text-text-color transition-colors duration-300 border-b border-transparent hover:border-text-muted/40 pb-0.5"
            >
              Türkçe (TR)
            </a>
            <span className="text-text-muted/20">|</span>
            <a
              href="https://fa.magicfx.pro"
              className="font-semibold text-accent-color transition-colors duration-300 border-b border-accent-color pb-0.5"
            >
              فارسی (FA)
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 mt-10">
          <p className="text-xs text-text-muted/60 leading-relaxed max-w-3xl mx-auto mb-6">
            <strong className="text-text-muted">هشدار ریسک:</strong> معامله در بازار ارزهای خارجی و فلزات گرانبها با اعتبار معاملاتی (مارجین) دارای سطح بالایی از ریسک است و ممکن است برای همه سرمایه‌گذاران مناسب نباشد. اهرم بالایی که در معامله استفاده می‌شود، می‌تواند هم به نفع شما و هم به ضرر شما عمل کند. عملکرد گذشته تضمینی برای نتایج آینده نیست. قبل از تصمیم‌گیری برای سرمایه‌گذاری در بازار ارزهای خارجی یا کپی‌تریدینگ، باید اهداف سرمایه‌گذاری، سطح تجربه و میزان ریسک‌پذیری خود را به دقت ارزیابی کنید.
          </p>
          <p className="text-xs text-text-muted/40">
            &copy; {new Date().getFullYear()} Magic FX Pro. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-32 bg-accent-color/5 blur-3xl rounded-[100%]" />
    </footer>
  );
}
