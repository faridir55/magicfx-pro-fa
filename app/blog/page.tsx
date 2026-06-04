import Link from "next/link";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Post = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  readingTime: string;
};

function getBlogPosts(): Post[] {
  const blogDir = path.join(process.cwd(), "app", "blog");
  const entries = fs.readdirSync(blogDir, { withFileTypes: true });

  const posts: Post[] = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const mdxPath = path.join(blogDir, entry.name, "page.mdx");
      if (fs.existsSync(mdxPath)) {
        const fileContent = fs.readFileSync(mdxPath, "utf8");
        const { data } = matter(fileContent);

        if (data.title && data.date) {
          posts.push({
            id: entry.name,
            title: data.title,
            date: data.date,
            excerpt: data.excerpt || "",
            category: data.category || "Market Intelligence",
            readingTime: data.readingTime || "مطالعه کوتاه",
          });
        }
      }
    }
  }

  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function BlogHero() {
  return (
    <div className="text-center mb-20 relative z-10">
      <span className="text-accent-color text-sm uppercase tracking-widest font-medium mb-4 block">
        اطلاعات بازار
      </span>
      <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-accent-gradient inline-block pb-6 mb-6 border-b border-accent-color/30">
        بینش‌ها و تحلیل‌ها
      </h1>
      <p className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
        گزارش‌های ساختاریافته در مورد بازارهای طلا (XAU/USD)، اجرای الگوریتمی، مدیریت ریسک و استراتژی‌های کپی‌تریدینگ.
      </p>
    </div>
  );
}

function FeaturedPostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.id}`} className="block mb-24 group relative z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-color focus-visible:ring-offset-8 focus-visible:ring-offset-bg-color rounded-2xl">
      <div className="absolute inset-0 bg-accent-color/5 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      <article className="glass-panel p-8 md:p-12 lg:p-16 rounded-2xl hover:border-accent-color/40 transition-all duration-700 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-color/70 to-transparent"></div>
        <div className="flex-grow z-10 relative">
          <div className="flex items-center flex-wrap gap-x-3 gap-y-2 text-xs font-medium uppercase tracking-widest text-accent-color mb-6">
            <span>{post.category}</span>
            <span className="w-1 h-1 rounded-full bg-accent-color/50"></span>
            <time>{post.date}</time>
            <span className="w-1 h-1 rounded-full bg-accent-color/50"></span>
            <span>{post.readingTime}</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-text-color group-hover:text-accent-color transition-colors duration-500">
            {post.title}
          </h2>
          <p className="text-text-muted text-lg leading-relaxed mb-8 max-w-3xl">
            {post.excerpt}
          </p>
          <div className="text-accent-color text-sm font-medium uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
            خواندن تحلیل <span aria-hidden="true">&larr;</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.id}`} className="block h-full group z-10 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-color focus-visible:ring-offset-4 focus-visible:ring-offset-bg-color rounded-xl">
      <article className="glass-panel h-full p-8 rounded-xl hover:-translate-y-1 transition-all duration-500 hover:border-accent-color/40 hover:bg-white/[0.02] flex flex-col relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-color/50 to-transparent"></div>
        <div className="z-10 relative flex flex-col h-full">
        <div className="flex items-center flex-wrap gap-x-3 gap-y-2 text-xs font-medium uppercase tracking-widest text-accent-color mb-4">
          <span>{post.category}</span>
          <span className="w-1 h-1 rounded-full bg-accent-color/50"></span>
          <time>{post.date}</time>
          <span className="w-1 h-1 rounded-full bg-accent-color/50"></span>
          <span>{post.readingTime}</span>
        </div>
        <h3 className="font-serif text-2xl mb-4 group-hover:text-accent-color transition-colors duration-300">
          {post.title}
        </h3>
        <p className="text-text-muted leading-relaxed flex-grow">
          {post.excerpt}
        </p>
        <div className="mt-8 text-accent-color text-sm font-medium uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
          خواندن مقاله <span aria-hidden="true">&larr;</span>
        </div>
        </div>
      </article>
    </Link>
  );
}

export default function Blog() {
  const posts = getBlogPosts();

  if (posts.length === 0) {
    return <main className="flex-grow pt-32 pb-20 px-4 min-h-screen text-center">هیچ مقاله‌ای یافت نشد.</main>;
  }

  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <main className="flex-grow pt-32 pb-20 px-4 min-h-screen relative overflow-hidden isolate">
      {/* Background Treatments */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent-color/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-6xl mx-auto">
        <BlogHero />
        
        <FeaturedPostCard post={featuredPost} />
        
        {remainingPosts.length > 0 && (
          <section className="mt-20">
            <div className="mb-12">
              <span className="text-accent-color text-xs uppercase tracking-widest font-medium mb-2 block">
                آخرین یادداشت‌ها
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-text-color">
                تحقیقات و دیدگاه‌ها
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {remainingPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
