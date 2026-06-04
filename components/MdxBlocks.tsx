import React from "react";

export function RiskNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 p-6 rounded-2xl border border-accent-color/30 bg-accent-color/5 flex flex-col not-prose">
      <span className="text-[10px] font-bold uppercase tracking-widest text-accent-color/80 mb-2">
        یادداشت ریسک
      </span>
      <div className="text-sm text-text-muted leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export function KeyTakeaway({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-10 p-8 glass-panel rounded-xl border-l-4 border-l-accent-color relative not-prose">
      <div className="font-serif text-xl md:text-2xl text-text-color leading-snug">
        {children}
      </div>
    </div>
  );
}

export function InsightBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="my-10 glass-panel rounded-xl overflow-hidden border border-glass-border not-prose">
      <div className="bg-accent-color/10 px-6 py-3 border-b border-glass-border">
        <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-color m-0">
          {title}
        </h4>
      </div>
      <div className="p-6 text-text-muted leading-relaxed text-base">
        {children}
      </div>
    </div>
  );
}
