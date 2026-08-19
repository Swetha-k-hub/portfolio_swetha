import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Award, Briefcase, GraduationCap, Code2 } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { portfolioData } from '../data/portfolio';
import GetInTouchModal from '../components/GetInTouchModal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = [
    { label: "CGPA", value: "8.52", icon: GraduationCap },
    { label: "Projects", value: "3+", icon: Code2 },
    { label: "Certifications", value: "3", icon: Award },
    { label: "Internship", value: "1", icon: Briefcase },
  ];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="py-12 md:py-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-medium tracking-wide flex items-center gap-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          Available for opportunities · 2026
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-serif max-w-4xl leading-[1.1] mb-6 text-main"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Learning to build the <span className="gradient-text italic">reliable side</span> of software.
        </motion.h1>

        <motion.div
          className="text-xl md:text-2xl text-body font-medium mb-8 h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I'm {portfolioData.name} — Aspiring Full-Stack & AI Developer
          <span className="inline-block w-0.5 h-6 bg-purple-500 ml-1 animate-pulse align-middle"></span>
        </motion.div>

        <motion.p 
          className="text-muted max-w-2xl text-lg mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {portfolioData.summary.substring(0, 160)}...
        </motion.p>

        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* ✨ CHANGED: Get Started button opens modal */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="pill-button pill-button-primary flex items-center gap-2"
          >
            Get Started <ArrowRight size={18} />
          </button>
          <Link to="/projects" className="pill-button pill-button-outline flex items-center gap-2">
            View Projects <ArrowRight size={18} />
          </Link>
          {/* ✨ CHANGED: Download Resume also opens modal */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="pill-button pill-button-outline flex items-center gap-2"
          >
            Download Resume <Download size={18} />
          </button>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="card-blur p-8 text-center group hover:border-purple-500/30 transition-colors"
            >
              <stat.icon className="mx-auto mb-4 text-purple-500/50 group-hover:text-purple-400 transition-colors" size={32} />
              <div className="text-3xl font-serif text-main mb-1">{stat.value}</div>
              <div className="text-muted text-sm uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif mb-4 text-main">Featured Projects</h2>
            <p className="text-muted">A selection of my recent work and experiments.</p>
          </div>
          <Link to="/projects" className="text-purple-400 hover:text-purple-300 font-medium flex items-center gap-2 group">
            See all projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="card-blur overflow-hidden group"
            >
              <div className="h-48 bg-gradient-to-br from-purple-900/20 to-pink-900/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
                <Code2 size={64} className="text-main/10 group-hover:scale-110 transition-transform duration-500" />
                {project.status === "In Progress" && (
                  <div className="absolute top-4 right-4 bg-yellow-500/10 text-yellow-500 text-[10px] font-bold px-2 py-1 rounded-full border border-yellow-500/20">
                    IN PROGRESS
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif mb-2 group-hover:text-purple-400 transition-colors text-main">{project.title}</h3>
                <p className="text-muted text-sm line-clamp-2 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded-full text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✨ Modal */}
      <GetInTouchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </PageWrapper>
  );
};

export default Home;
