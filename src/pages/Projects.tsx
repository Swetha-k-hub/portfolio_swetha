import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { portfolioData } from '../data/portfolio';

const Projects = () => {
  return (
    <PageWrapper>
      <div className="mb-16">
        <h1 className="text-5xl md:text-6xl font-serif mb-6 text-main">Portfolio <span className="gradient-text italic">Projects</span></h1>
        <p className="text-muted text-lg max-w-2xl">
          A collection of web applications, AI integrations, and technical experiments I've worked on during my studies and internships.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card-blur flex flex-col group hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.2)] transition-all duration-500"
          >
            <div className="h-56 bg-gradient-to-br from-purple-900/20 to-pink-900/20 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
              <Code2 size={80} className="text-main/10 group-hover:scale-110 group-hover:text-purple-500/20 transition-all duration-700" />
              
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a href={project.link} className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                  <ExternalLink size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/10 text-white backdrop-blur-md flex items-center justify-center border border-white/20 hover:scale-110 transition-transform">
                  <Github size={20} />
                </a>
              </div>

              {project.status === "In Progress" && (
                <div className="absolute top-4 right-4 bg-yellow-500/10 text-yellow-500 text-[10px] font-bold px-3 py-1 rounded-full border border-yellow-500/20 backdrop-blur-md">
                  IN PROGRESS
                </div>
              )}
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-serif mb-3 group-hover:text-purple-400 transition-colors text-main">{project.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="text-[10px] uppercase tracking-wider font-semibold bg-[var(--card-bg)] border border-[var(--card-border)] px-3 py-1 rounded-full text-muted group-hover:border-purple-500/30 group-hover:text-purple-300 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Projects;
