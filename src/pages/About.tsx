import { motion } from 'framer-motion';
import { Calendar, MapPin, Mail, Phone, ExternalLink, Sparkles } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { portfolioData } from '../data/portfolio';
import swethaPhoto from '../assets/swetha.jpg';

const About = () => {
  return (
    <PageWrapper>
      {/* ✨ HERO SECTION WITH BIG PROFILE PHOTO */}
      <section className="mb-24">
        <div className="grid lg:grid-cols-[auto_1fr] gap-12 lg:gap-16 items-center">
          {/* Big Profile Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto lg:mx-0"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 blur-3xl opacity-50 animate-pulse"></div>
            <img
              src={swethaPhoto}
              alt="Swetha Kannan"
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-purple-500/40 shadow-2xl"
            />
          </motion.div>

          {/* Intro Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium mb-6">
              <Sparkles size={14} /> Available for opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 text-main leading-tight">
              Hi, I'm <span className="gradient-text italic">Swetha.</span>
            </h1>
            <p className="text-body text-xl leading-relaxed mb-6">
              Aspiring Full-Stack Developer & AI Enthusiast
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-muted text-sm">
                <MapPin size={16} className="text-purple-500" />
                Rajapalayam, Tamil Nadu
              </div>
              <div className="flex items-center gap-2 text-muted text-sm">
                <Mail size={16} className="text-pink-500" />
                {portfolioData.email}
              </div>
              <div className="flex items-center gap-2 text-muted text-sm">
                <Phone size={16} className="text-blue-500" />
                {portfolioData.phone}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ORIGINAL BIO + SKILLS SECTION */}
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Narrative Bio */}
        <div>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-main">About <span className="gradient-text italic">Swetha</span></h2>
          <div className="space-y-6 text-body text-lg leading-relaxed">
            <p>
              {portfolioData.summary}
            </p>
            <p>
              My journey in technology started with a curiosity for how software can simplify complex problems. Currently in my third year of B.Sc. Computer Science, I've dedicated myself to mastering the foundations of programming while exploring the cutting-edge fields of Full-Stack development and Artificial Intelligence.
            </p>
            <p>
              I believe in disciplined growth and continuous learning. Whether it's optimizing a backend API or crafting an intuitive user interface, I approach every challenge with a focus on reliability and user experience.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          <h2 className="text-3xl font-serif text-main">Technical <span className="text-purple-500">Skills</span></h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {portfolioData.skills.map((skillGroup, idx) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="card-blur p-6"
              >
                <h3 className="text-main font-medium mb-4 flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skillGroup.color}`}></div>
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map(skill => (
                    <span key={skill} className="text-xs bg-[var(--card-bg)] px-2.5 py-1 rounded-md text-body border border-[var(--card-border)]">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <section className="mt-32">
        <h2 className="text-4xl font-serif mb-16 text-center text-main">Education & <span className="gradient-text italic">Experience</span></h2>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[var(--card-border)] -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-20">
            {/* Experience */}
            {portfolioData.experience.map((exp, idx) => (
              <div key={idx} className="relative flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-[var(--bg-color)] z-10 transition-colors duration-300"></div>
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold mb-2">EXPERIENCE</div>
                  <h3 className="text-2xl font-serif text-main">{exp.role}</h3>
                  <p className="text-purple-400 font-medium mb-1">{exp.company}</p>
                  <p className="text-muted text-sm flex items-center md:justify-end gap-2">
                    <Calendar size={14} /> {exp.period}
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <ul className="space-y-2">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="text-body text-sm flex gap-2">
                        <span className="text-purple-500">•</span> {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Education */}
            {portfolioData.education.map((edu, idx) => (
              <div key={idx} className="relative flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-pink-500 border-4 border-[var(--bg-color)] z-10 transition-colors duration-300"></div>
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <div className="inline-block px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 text-xs font-bold mb-2">EDUCATION</div>
                  <h3 className="text-2xl font-serif text-main">{edu.degree}</h3>
                  <p className="text-muted text-sm flex items-center md:justify-end gap-2 mt-2">
                    <Calendar size={14} /> {edu.period}
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <p className="text-main font-medium mb-1">{edu.institution}</p>
                  <p className="text-purple-400 font-bold">{edu.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="mt-32">
        <h2 className="text-3xl font-serif mb-12 text-main">Certifications</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="card-blur p-6 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                <ExternalLink size={20} className="text-purple-500" />
              </div>
              <div>
                <h3 className="text-main font-medium mb-1 line-clamp-2">{cert.name}</h3>
                <p className="text-muted text-xs uppercase tracking-widest">{cert.provider}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
};

export default About;
