import React from "react";

type ArticleHeaderProps = {
  frontmatter: {
    title: string;
    date: string;
    category: string;
    readingTime: string;
    excerpt: string;
  };
};

export function ArticleHeader({ frontmatter }: ArticleHeaderProps) {
  if (!frontmatter) return null;

  return (
    <header className="mb-16 not-prose">
      <div className="flex items-center flex-wrap gap-x-3 gap-y-2 text-xs font-medium uppercase tracking-widest text-accent-color mb-8">
        <span>{frontmatter.category}</span>
        <span className="w-1 h-1 rounded-full bg-accent-color/50"></span>
        <time>{frontmatter.date}</time>
        <span className="w-1 h-1 rounded-full bg-accent-color/50"></span>
        <span>{frontmatter.readingTime}</span>
      </div>
      
      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text-color leading-tight mb-8">
        {frontmatter.title}
      </h1>
      
      <p className="text-text-muted text-xl md:text-2xl leading-relaxed mb-12 max-w-3xl">
        {frontmatter.excerpt}
      </p>
      
      <div className="h-px w-full bg-gradient-to-l from-accent-color/50 via-accent-color/10 to-transparent"></div>
    </header>
  );
}
