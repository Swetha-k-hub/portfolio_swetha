import { Mail, Phone, Linkedin, Send } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { portfolioData } from '../data/portfolio';
import swethaPhoto from '../assets/swetha.jpg';

const Contact = () => {
  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            {/* ✨ Profile Picture Section */}
            <div className="flex items-center gap-5 mb-8">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 blur-lg opacity-60"></div>
                <img
                  src={swethaPhoto}
                  alt="Swetha Kannan"
                  className="relative w-24 h-24 rounded-full object-cover border-2 border-purple-500/50"
                />
              </div>
              <div>
                <h2 className="text-2xl font-serif text-main">Swetha Kannan</h2>
                <p className="text-muted text-xs uppercase tracking-widest">Aspiring Developer</p>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-serif mb-8 text-main">
              Get in <span className="gradient-text italic">Touch</span>
            </h1>
            <p className="text-body text-lg mb-12 leading-relaxed">
              Have a project in mind or just want to say hi? I'm always open to discussing new opportunities, creative ideas, or partnerships in software development and AI.
            </p>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-muted text-xs uppercase tracking-widest mb-1">Email Me</p>
                  <a href={`mailto:${portfolioData.email}`} className="text-main text-lg font-medium hover:text-purple-400 transition-colors">
                    {portfolioData.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-muted text-xs uppercase tracking-widest mb-1">Call Me</p>
                  <a href={`tel:${portfolioData.phone}`} className="text-main text-lg font-medium hover:text-pink-400 transition-colors">
                    {portfolioData.phone}
                  </a>
                </div>
              </div>

              {/* ✅ FIXED LinkedIn */}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-muted text-xs uppercase tracking-widest mb-1">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/swetha-kannan-1b6977376/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-main text-lg font-medium hover:text-blue-400 transition-colors"
                  >
                    Swetha Kannan
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 card-blur border-purple-500/20">
              <h3 className="text-xl font-serif mb-4 italic text-main">"Growth is a continuous journey. Let's build something remarkable together."</h3>
              <p className="text-muted text-sm">— Swetha K</p>
            </div>
          </div>

          {/* Right side form */}
          <div className="card-blur p-8 md:p-12">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted ml-1">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-main focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted ml-1">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-main focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted ml-1">Subject</label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-main focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted ml-1">Message</label>
                <textarea
                  rows={5}
                  placeholder="Your message here..."
                  className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-main focus:outline-none focus:border-purple-500 transition-colors resize-none"
                ></textarea>
              </div>
              <button className="pill-button pill-button-primary w-full flex items-center justify-center gap-2 group">
                Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
