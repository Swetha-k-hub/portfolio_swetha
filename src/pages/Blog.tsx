import { motion } from 'framer-motion';
import { Newspaper, ArrowRight, Clock } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const navigate = useNavigate();
  const posts = [
    {
      id: "future-of-ai",
      title: "Exploring the Future of AI in Web Development",
      excerpt: "How AI tools are changing the way we write code and build applications in 2026.",
      date: "Oct 12, 2024",
      readTime: "5 min read",
      category: "AI & Development"
    },
    {
      id: "scalable-backends",
      title: "Building Scalable Backends with Python Flask",
      excerpt: "A deep dive into creating reliable and efficient server-side architectures for modern web apps.",
      date: "Sep 28, 2024",
      readTime: "8 min read",
      category: "Backend"
    }
  ];

  return (
    <PageWrapper>
      <div className="mb-16">
        <h1 className="text-5xl md:text-6xl font-serif mb-6 text-main">Technical <span className="gradient-text italic">Insights</span></h1>
        <p className="text-muted text-lg max-w-2xl">
          Thoughts on software engineering, AI, and my journey as a developer.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => navigate(`/blog/${post.id}`)}
            className="card-blur p-8 group cursor-pointer hover:border-purple-500/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-purple-500/10 text-purple-400 text-[10px] font-bold px-3 py-1 rounded-full border border-purple-500/20 uppercase tracking-widest">
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-muted text-xs">
                <Clock size={14} />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <h3 className="text-2xl font-serif mb-4 text-main group-hover:text-purple-400 transition-colors">
              {post.title}
            </h3>
            
            <p className="text-muted text-sm mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between pt-6 border-t border-[var(--card-border)]">
              <span className="text-muted text-xs uppercase tracking-widest">{post.date}</span>
              <div className="flex items-center gap-2 text-purple-400 font-medium text-sm group-hover:translate-x-1 transition-transform">
                Read Article <ArrowRight size={16} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 text-center py-20 border border-dashed border-[var(--card-border)] rounded-3xl">
        <Newspaper size={48} className="mx-auto mb-6 text-muted opacity-20" />
        <h3 className="text-2xl font-serif text-muted mb-2">More articles coming soon</h3>
        <p className="text-muted max-w-md mx-auto">
          I'm currently working on some exciting technical deep dives. Stay tuned!
        </p>
      </div>
    </PageWrapper>
  );
};

export default Blog;
