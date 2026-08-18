import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Share2 } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

const blogPosts = {
  "future-of-ai": {
    title: "Exploring the Future of AI in Web Development",
    date: "Oct 12, 2024",
    readTime: "5 min read",
    category: "AI & Development",
    content: (
      <>
        <p>The landscape of web development is undergoing a seismic shift. As we navigate through 2026, the integration of Artificial Intelligence is no longer a luxury—it's the backbone of modern engineering workflows.</p>
        
        <h2>The Rise of "Intent-Based" Development</h2>
        <p>We are moving away from manual boilerplate generation toward intent-based development. Instead of writing every line of CSS or redundant API fetching logic, developers are now orchestrating high-level logic while AI agents handle the implementation details. This doesn't replace the developer; it elevates them to a system architect role.</p>
        
        <h2>My Hypothesis: The "Reliability Gap"</h2>
        <p>My core hypothesis is that as AI becomes better at generating code, the most valuable skill for a human developer will shift from <strong>production</strong> to <strong>validation</strong>. We will face a "Reliability Gap"—a period where AI can build features faster than humans can verify their safety and logic.</p>
        
        <p>To bridge this gap, the next generation of developers (myself included) must focus on:</p>
        <ul>
          <li>Advanced Debugging and System Observability</li>
          <li>AI Prompt Engineering for precise code architecture</li>
          <li>Security auditing of AI-generated components</li>
        </ul>

        <h2>Conclusion</h2>
        <p>The future isn't about AI replacing us; it's about AI allowing us to solve bigger problems. By focusing on the "reliable side" of software, we ensure that the rapid pace of AI development doesn't come at the cost of stability.</p>
      </>
    )
  },
  "scalable-backends": {
    title: "Building Scalable Backends with Python Flask",
    date: "Sep 28, 2024",
    readTime: "8 min read",
    category: "Backend",
    content: (
      <>
        <p>Python Flask has long been the favorite for microservices due to its lightweight nature. However, scaling it to handle millions of requests requires more than just standard routing.</p>
        
        <h2>Performance Optimization</h2>
        <p>During my projects, I've found that the bottleneck often isn't the Python code itself, but how it interacts with the database and the WSGI server. Moving toward asynchronous processing with tools like Celery and Redis is essential for any modern application.</p>
        
        <h2>Structure and Maintainability</h2>
        <p>A scalable backend is a maintainable one. I advocate for a strict separation of concerns, even in smaller Flask apps—using Blueprints, Repository patterns, and rigorous API documentation from day one.</p>
      </>
    )
  }
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <PageWrapper>
        <div className="text-center py-20">
          <h2 className="text-3xl font-serif mb-4">Post not found</h2>
          <Link to="/blog" className="text-purple-400 hover:underline">Back to blog</Link>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-muted hover:text-main transition-colors mb-8 group"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        Back to Blog
      </button>

      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-purple-500/10 text-purple-400 text-[10px] font-bold px-3 py-1 rounded-full border border-purple-500/20 uppercase tracking-widest">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight text-main">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-muted text-sm border-y border-[var(--card-border)] py-6">
            <div className="flex items-center gap-2">
              <User size={16} className="text-purple-500" />
              <span>Swetha K</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-purple-500" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-purple-500" />
              <span>{post.readTime}</span>
            </div>
            <button className="ml-auto flex items-center gap-2 hover:text-main transition-colors">
              <Share2 size={16} />
              Share
            </button>
          </div>
        </header>

        <div className="prose max-w-none">
          {post.content}
        </div>

        <footer className="mt-20 pt-10 border-t border-[var(--card-border)]">
          <div className="card-blur p-8 flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-serif font-bold text-2xl">
              S
            </div>
            <div>
              <h4 className="text-main font-serif text-xl mb-1">Written by Swetha K</h4>
              <p className="text-muted text-sm">Aspiring Full-Stack & AI Developer passionate about building reliable software solutions.</p>
            </div>
          </div>
        </footer>
      </article>
    </PageWrapper>
  );
};

export default BlogPost;
