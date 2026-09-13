import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Mail, 
  Linkedin,
  Brain, 
  ArrowRight, 
  Menu, 
  X,
  Cloud,
  Cpu,
  ArrowUpRight,
  Sparkles,
  Download,
  Copy,
  Check,
  ChevronUp
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const typingStrings = [
    "AI Enthusiast", 
    "Web Developer", 
    "ML Practitioner", 
    "AI & DS Student", 
    "Data Enthusiast"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowScrollTop(currentScrollY > 400);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % typingStrings.length;
      const fullText = typingStrings[i];

      setTypingText(isDeleting 
        ? fullText.substring(0, typingText.length - 1) 
        : fullText.substring(0, typingText.length + 1)
      );

      if (!isDeleting && typingText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && typingText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [typingText, isDeleting, loopNum]);

  const copyEmail = () => {
    navigator.clipboard.writeText('deekshagpbangera@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const skills = [
    { name: 'Python', category: 'Core' },
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'C++', category: 'Core' },
    { name: 'Java', category: 'Core' },
    { name: 'MySQL', category: 'Database' },
    { name: 'GCP', category: 'Cloud' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Tailwind', category: 'Styling' }
  ];

  const stats = [
    { label: 'Internships', value: '2+' },
    { label: 'Projects', value: '10+' },
    { label: 'Certifications', value: '8+' },
    { label: 'CGPA', value: '7.8' }
  ];

  const values = [
    { title: 'Innovation', desc: 'Pushing boundaries with cutting-edge tech.' },
    { title: 'Precision', desc: 'Crafting code with meticulous attention.' },
    { title: 'Impact', desc: 'Building solutions that matter.' },
    { title: 'Growth', desc: 'Relentless pursuit of new knowledge.' }
  ];

  const services = [
    { 
      title: 'Full-Stack Engineering', 
      desc: 'Developing high-performance, end-to-end applications with modern architectures.',
      icon: <Cpu className="w-8 h-8 text-primary" />
    },
    { 
      title: 'AI & Intelligence', 
      desc: 'Integrating advanced machine learning to automate and optimize complex workflows.',
      icon: <Brain className="w-8 h-8 text-primary" />
    },
    { 
      title: 'Strategic Systems', 
      desc: 'Designing business-aligned technical systems for maximum operational efficiency.',
      icon: <Cloud className="w-8 h-8 text-primary" />
    }
  ];

  const experience = [
    { 
      date: 'Jan 2024 - Present', 
      title: 'AI Product Intern', 
      company: 'TechSaksham (Microsoft & SAP)',
      location: 'Remote',
      points: [
        'Developing AI-driven solutions for sustainable agriculture using advanced machine learning models.',
        'Collaborating with cross-functional teams to integrate business logic with technical implementations.',
        'Optimizing model performance for real-time data processing in agricultural IoT devices.'
      ]
    },
    { 
      date: 'Jun 2024 - Aug 2024', 
      title: 'Cybersecurity Intern', 
      company: 'AICTE & EduSkills',
      location: 'Virtual',
      points: [
        'Conducted network security audits and implemented cloud architecture best practices.',
        'Simulated cyber-attack scenarios to test system resilience and vulnerability.',
        'Configured secure communication protocols for enterprise-level cloud deployments.'
      ]
    }
  ];

  const certifications = [
    'AWS Cloud Architect', 'Google Cybersecurity', 
    'IBM ML with Python', 'Vertex AI Prompt Design',
    'Data Analytics Specialist'
  ];

  const projects = [
    {
      title: 'Eco-Track Resilient',
      tag: 'Logistics / AI',
      desc: 'AI-assisted logistics intelligence prototype for disruption risk detection and recovery routing. Built for Google Solution Challenge 2026.',
      img: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/eco-track-logistics',
      live: 'https://techspire-13303696-1c68d.web.app',
      tech: ['React', 'Gemini AI', 'Firebase', 'Google Maps API']
    },
    {
      title: 'Smart Farmer Connect',
      tag: 'AgriTech / UI',
      desc: 'Scalable full-stack platform bridging the digital divide in agriculture with real-time analytics and resource access.',
      img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/smart-farm-connect',
      live: 'https://v0-smart-farm-connect-ui.vercel.app/',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel']
    },
    {
      title: 'Student Success Dashboard',
      tag: 'EdTech / MLOps',
      desc: 'Interactive MLOps portal analyzing factors for student academic success and dropout rates with real-time visualizations.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/Student-Success-Dashboard',
      tech: ['Python', 'Streamlit', 'Scikit-Learn', 'Pandas']
    },
    {
      title: 'AI Text Summarizer',
      tag: 'NLP / AI',
      desc: 'Sleek AI-powered workspace for summarizing text into clear insights using Gemini AI with sentiment analysis.',
      img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/aitextsummarizer',
      tech: ['Node.js', 'Express', 'Gemini AI', 'React']
    },
    {
      title: 'Soul Journal',
      tag: 'Mobile / Flutter',
      desc: 'Comprehensive journaling, mood tracking, and habit building application with cloud sync and secure auth.',
      img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/soul_journal',
      live: 'https://soul-journal-65327.web.app/',
      tech: ['Flutter', 'Firebase', 'Riverpod', 'Cloud Firestore']
    },
    {
      title: 'Aura Mental Wellbeing',
      tag: 'HealthTech / AI',
      desc: 'AI-powered mental health companion for mood tracking and personalized wellness insights.',
      img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/aura-mental-wellbeing',
      tech: ['React', 'Python', 'Flask', 'ML']
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#e5e5e5] selection:bg-primary/30 font-sans">
      {/* Creative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none" />
      </div>
      
      {/* Navbar */}
      <header className={`fixed top-0 w-full z-50 bg-[#050505]/50 backdrop-blur-xl border-b border-white/5 transition-transform duration-500 ${isNavVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <nav className="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
          <motion.a 
            href="#header" 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-black tracking-tighter hover:text-primary transition-colors"
          >
            DG.
          </motion.a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Works</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <div className="flex items-center gap-6 pl-6 border-l border-white/10">
              <a href="https://github.com/DeekshaG96" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><Github size={16} /></a>
              <a href="https://linkedin.com/in/deeksha-g-cybersec" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><Linkedin size={16} /></a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Nav Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-[#050505] border-b border-white/5 p-8 flex flex-col gap-8 md:hidden shadow-2xl"
            >
              <div className="flex flex-col gap-8 text-sm font-bold uppercase tracking-widest">
                <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#projects" onClick={() => setIsMenuOpen(false)}>Works</a>
                <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Hero Section - Centered & Airy Aesthetic */}
        <section id="header" className="min-h-screen flex flex-col justify-center items-center text-center pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10 max-w-4xl"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest"
              >
                <Sparkles size={14} /> Driven by Excellence
              </motion.div>
                <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.85] text-white">
                  DEEKSHA<br/>
                  <span className="aesthetic-gradient">G.</span>
                </h1>
            </div>
            <p className="text-white/50 text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed min-h-[3rem]">
              I am a <span className="text-white font-medium italic border-r-2 border-primary pr-1 animate-pulse">{typingText}</span>
            </p>
            <div className="flex flex-wrap justify-center gap-8 pt-4">
              <a href="#projects" className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest bg-white text-black px-10 py-5 rounded-full hover:bg-primary hover:text-white transition-all shadow-xl shadow-primary/10">
                Explore My Impact <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </a>
              <a href="/Deeksha_G_Resume.txt" download className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest border border-white/10 px-10 py-5 rounded-full hover:border-primary hover:text-primary transition-all">
                Download CV <Download size={18} className="group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </section>

        {/* Bento Grid About & Skills */}
        <section id="about" className="py-40">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-12 space-y-8">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Mission Statement</h2>
              <div className="space-y-6 text-2xl md:text-3xl font-light leading-tight text-white/80">
                <p>
                  Driven by a relentless pursuit of excellence, I am <span className="text-white font-medium">Deeksha G.</span>—a Software Engineer dedicated to architecting the next generation of digital systems.
                </p>
                <p>
                  My mission is to transform complex challenges into <span className="text-white font-medium">elegant, high-performance solutions</span> that drive real-world progress and measurable business value.
                </p>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/10 rounded-3xl p-12 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 space-y-6">
                {stats.map((stat, i) => (
                  <div key={i} className="flex justify-between items-end border-b border-primary/10 pb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60">{stat.label}</span>
                    <span className="text-3xl font-black text-white">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-3 bg-white/5 border border-white/10 rounded-3xl p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                {values.map((val, i) => (
                  <div key={i} className="space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-primary">{val.title}</h3>
                    <p className="text-white/40 text-sm font-light leading-relaxed">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What I Do Section */}
        <section className="py-40">
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Core Expertise</h2>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-white">DRIVING<br/>INNOVATION.</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-12 space-y-6 hover:border-primary/40 transition-all group hover:-translate-y-2 duration-500">
                  <div className="p-4 bg-primary/10 rounded-2xl w-fit group-hover:bg-primary/20 transition-colors">
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-white tracking-tight">{service.title}</h4>
                  <p className="text-white/40 font-light leading-relaxed text-sm">{service.desc}</p>
                </div>
              ))}
            </div>

            {/* Technical Stack */}
            <div className="pt-20">
              <div className="bg-white/5 border border-white/10 rounded-[3rem] p-12 md:p-20 space-y-16">
                <div className="text-center space-y-4">
                  <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Technical Stack</h2>
                  <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-white">TOOLS & TECH.</h3>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  {['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker', 'Git', 'Tailwind CSS', 'Framer Motion', 'MongoDB', 'TensorFlow', 'PyTorch'].map((tech) => (
                    <span key={tech} className="px-8 py-4 bg-white/5 rounded-full text-xs font-bold uppercase tracking-widest text-white/60 border border-white/10 hover:border-primary hover:text-white transition-all cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Improvised Projects Section */}
        <section id="projects" className="py-40">
          <div className="space-y-24">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
              <div className="space-y-4">
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Selected Works</h2>
                <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-white">CREATIVE<br/>ENGINEERING.</h3>
              </div>
              <p className="text-white/40 text-lg font-light max-w-md leading-relaxed">
                A curation of projects that demonstrate my ability to solve complex problems with elegant code.
              </p>
            </div>

            <div className="grid gap-32">
              {projects.map((project, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group relative grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center"
                >
                  <div 
                    className="relative aspect-[16/10] rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 cursor-none"
                    onMouseEnter={() => setHoveredProject(i)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="bg-white text-black px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 scale-90 group-hover:scale-100 transition-transform duration-500"
                      >
                        Code <Github size={14} />
                      </a>
                      {project.live && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noreferrer"
                          className="bg-primary text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 scale-90 group-hover:scale-100 transition-transform duration-500"
                        >
                          Live Demo <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-primary/60">{project.tag}</span>
                      <h4 className="text-4xl md:text-6xl font-black tracking-tighter text-white group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-white/50 text-xl font-light leading-relaxed">
                        {project.desc}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[10px] font-bold uppercase tracking-widest text-white/30 border border-white/10 px-4 py-2 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-6 pt-4">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-primary flex items-center gap-2 transition-colors"
                      >
                        View Code <Github size={14} />
                      </a>
                      {project.live && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary hover:text-white flex items-center gap-2 transition-colors"
                        >
                          Live Demo <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience - Resume Style */}
        <section id="experience" className="py-40">
          <div className="max-w-4xl mx-auto space-y-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary text-center">Professional Experience</h2>
            <div className="space-y-16">
              {experience.map((exp, i) => (
                <div key={i} className="group space-y-4">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{exp.title}</h3>
                      <p className="text-lg font-medium text-white/60">{exp.company}</p>
                    </div>
                    <div className="text-left md:text-right">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{exp.date}</span>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.points.map((point, idx) => (
                      <li key={idx} className="flex gap-3 text-white/40 font-light leading-relaxed text-sm">
                        <span className="text-primary mt-1.5">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications - Bento Style */}
        <section className="py-40">
          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-12 md:p-20 space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Validated Skills</h2>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-white">CERTIFICATIONS.</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert) => (
                <span key={cert} className="px-8 py-4 bg-white/5 rounded-full text-xs font-bold uppercase tracking-widest text-white/60 border border-white/10 hover:border-primary hover:text-white transition-all cursor-default">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section - Bold & Improvised */}
        <section id="contact" className="py-60">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-16 text-left">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="space-y-8"
              >
                <h2 className="text-7xl md:text-[8rem] font-black tracking-tighter text-white leading-none">
                  LET'S<br/>TALK.
                </h2>
                <p className="text-white/40 text-xl font-light max-w-xl leading-relaxed">
                  Available for internships, freelance projects, or just a deep conversation about the future of AI.
                </p>
              </motion.div>
              
              <div className="flex flex-col gap-8">
                <button 
                  onClick={copyEmail}
                  className="group flex items-center gap-4 text-2xl font-bold hover:text-primary transition-colors relative w-fit"
                >
                  <Mail size={24} /> 
                  deekshagpbangera@gmail.com
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    {copied ? 'Copied!' : 'Click to Copy'}
                  </span>
                  {copied ? <Check size={18} className="text-primary" /> : <Copy size={18} className="opacity-20 group-hover:opacity-100 transition-opacity" />}
                </button>
                <a href="https://linkedin.com/in/deeksha-g-cybersec" target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-2xl font-bold hover:text-primary transition-colors w-fit">
                  <Linkedin size={24} /> LinkedIn
                </a>
                <a href="https://github.com/DeekshaG96" target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-2xl font-bold hover:text-primary transition-colors w-fit">
                  <Github size={24} /> GitHub
                </a>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[3rem] p-12 space-y-8">
              <h3 className="text-2xl font-bold text-white">Send a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/30">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:border-primary outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/30">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:border-primary outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/30">Message</label>
                  <textarea rows={4} placeholder="How can I help you?" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:border-primary outline-none transition-colors resize-none" />
                </div>
                <button className="w-full bg-white text-black py-5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-3">
                  Send Message <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-white text-black p-4 rounded-full shadow-2xl hover:bg-primary hover:text-white transition-all group"
          >
            <ChevronUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">
            © 2026 DEEKSHA G. ARCHITECTED WITH PRECISION.
          </p>
          <div className="flex gap-8 text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">
            <a href="#header" className="hover:text-white transition-colors">Back to Top</a>
            <span>Mangaluru, IN</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
