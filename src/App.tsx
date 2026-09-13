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
    "AI & ML Practitioner", 
    "Full-Stack Architect", 
    "0→1 Product Builder", 
    "CS & Business Systems Scholar", 
    "Cloud & Security Enthusiast"
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
    { label: 'Internships', value: '5' },
    { label: 'Projects', value: '12+' },
    { label: 'Cloud & Badges', value: '18+' },
    { label: 'CGPA', value: '7.8' }
  ];

  const values = [
    { title: 'Innovation', desc: 'Transforming novel research into resilient, scalable digital systems.' },
    { title: 'Precision', desc: 'Writing clean, test-driven code with meticulous attention to detail.' },
    { title: 'Impact', desc: 'Building high-value products that solve real problems with measurable outcomes.' },
    { title: 'Growth', desc: 'Relentless drive for learning across modern cloud, security, and AI paradigms.' }
  ];

  const services = [
    { 
      title: 'Full-Stack Engineering', 
      desc: 'Developing high-performance, end-to-end applications with modern architectures and clean APIs.',
      icon: <Cpu className="w-8 h-8 text-sky-600" />
    },
    { 
      title: 'Applied AI & Intelligence', 
      desc: 'Integrating state-of-the-art LLMs and ML pipelines to automate complex workflows and surface insights.',
      icon: <Brain className="w-8 h-8 text-sky-600" />
    },
    { 
      title: 'Cloud & Resilient Systems', 
      desc: 'Designing cloud-native infrastructure with zero-trust security and robust operational efficiency.',
      icon: <Cloud className="w-8 h-8 text-sky-600" />
    }
  ];

  const experience = [
    { 
      date: 'May 2026 - Present', 
      title: 'Open Source Software Engineering Contributor', 
      company: 'GirlScript Summer of Code (GSSoC)',
      location: 'Remote',
      points: [
        'Contributing core features and bug fixes to developer and security tooling open-source repositories via Git/GitHub.',
        'Configured automated GitHub Actions CI/CD workflows for linting, unit testing, and branch validation, cutting review cycles by 25%.',
        'Collaborating with distributed engineering teams on modern pull request reviews and semantic versioning.'
      ]
    },
    { 
      date: 'Oct 2025 - Dec 2025', 
      title: 'Network Security Engineering Intern', 
      company: 'Fortinet (via AICTE & EduSkills)',
      location: 'Virtual',
      points: [
        'Graduated from 10-week enterprise security engineering program with Grade O (Outstanding, 90-100%).',
        'Configured stateful firewall inspection policies, Zero-Trust Network Access (ZTNA), and simulated enterprise attack vectors.',
        'Hardened virtualized network perimeters and conducted automated threat-surface audits.'
      ]
    },
    { 
      date: 'Jan 2025 - Mar 2025', 
      title: 'Cybersecurity Engineering Intern', 
      company: 'Palo Alto Networks (via AICTE & EduSkills)',
      location: 'Virtual',
      points: [
        'Completed 10-week intensive cybersecurity track, achieving Grade E (Excellent, 80-89%).',
        'Analyzed real-time network traffic telemetry, investigated simulated SOC alarms, and mitigated perimeter vulnerabilities.',
        'Constructed threat-modeling topologies and incident response automation playbooks for hybrid cloud workloads.'
      ]
    },
    { 
      date: 'Nov 2024 - Dec 2024', 
      title: 'AI Product Intern', 
      company: 'TechSaksham (Microsoft & SAP CSR Initiative)',
      location: 'Remote',
      points: [
        'Engineered deep learning computer vision pipelines for sustainable agriculture, achieving 94% prediction accuracy.',
        'Optimized model inference latency for real-time edge processing across 10,000+ agricultural data records.',
        'Collaborated with cross-functional product leads to translate business requirements into production ML architecture.'
      ]
    },
    { 
      date: 'Oct 2024 - Dec 2024', 
      title: 'Cloud Infrastructure Engineering Intern', 
      company: 'AWS Academy',
      location: 'Remote',
      points: [
        'Architected resilient, highly available cloud infrastructures utilizing AWS Core Services (EC2, S3, VPC, RDS, IAM) with Grade A evaluation.',
        'Engineered multi-AZ subnet topologies, routing tables, and security group policies for scalable microservice hosting.',
        'Implemented CloudWatch monitoring alarms and cloud cost-optimization strategies.'
      ]
    }
  ];

  const certifications = [
    'Google Cloud ACE', '18+ GCP Skill Badges',
    'AWS Academy Cloud Architect', 'Fortinet Network Security (FCA)', 
    'Palo Alto Networks Cyber', 'Postman API Student Expert',
    'Vertex AI Prompt Design', 'Data Analytics Specialist'
  ];

  const projects = [
    {
      title: 'RazorOps AI',
      tag: 'FinTech / Automated Reconciliation',
      desc: 'Cloud-native financial operations portal simulating transaction batch clearing, status lifecycles, and liquidity forecasting. Automated API test suites with Postman validate idempotency and cut manual auditing overhead by 40%.',
      img: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96',
      tech: ['React 19', 'JavaScript', 'Firebase', 'SQL', 'Postman API', 'Tailwind CSS']
    },
    {
      title: 'Eco-Track Logistics',
      tag: 'Logistics / Gemini 2.5 Flash',
      desc: 'AI-assisted logistics intelligence platform for supply chain disruption risk detection and recovery routing. Integrates Google Gemini 2.5 Flash reasoning with real-time IoT sensor telemetry in Firebase (+25% routing resilience). Built for Google Solution Challenge 2026.',
      img: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/eco-track-logistics',
      live: 'https://techspire-13303696-1c68d.web.app',
      tech: ['React', 'Gemini AI', 'Firebase', 'Google Maps API', 'CI/CD']
    },
    {
      title: 'Smart Farmer Connect',
      tag: 'AgriTech / Next.js Platform',
      desc: 'Scalable full-stack marketplace and crop intelligence portal connecting farmers to agronomy analytics and direct commercial buyers. Features dynamic pricing models and localized weather analytics (+40% user engagement).',
      img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/smart-farm-connect',
      live: 'https://v0-smart-farm-connect-ui.vercel.app/',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'REST API']
    },
    {
      title: 'VotX Protocol',
      tag: 'Web3 / Cryptography',
      desc: 'Decentralized electronic voting platform deploying gas-optimized Solidity smart contracts on Polygon with Zero-Knowledge proofs (ZK-proofs) for complete voter anonymity and tamper-proof ballot verification across 10,000+ simulated voters.',
      img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96',
      tech: ['Solidity', 'Polygon', 'ZK-Proofs', 'Web3.js', 'Smart Contracts']
    },
    {
      title: 'Student Success Dashboard',
      tag: 'EdTech / MLOps',
      desc: 'Interactive predictive machine learning portal analyzing educational indicators to forecast student retention and graduation outcomes in real time with feature-importance visual explainability.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/Student-Success-Dashboard',
      tech: ['Python', 'Streamlit', 'Scikit-Learn', 'Pandas', 'Matplotlib']
    },
    {
      title: 'Soul Journal',
      tag: 'Mobile / Flutter & Cloud',
      desc: 'Cross-platform mental wellness and habit-building mobile application engineered in Flutter with Riverpod state architecture, biometric security, and real-time Cloud Firestore synchronization.',
      img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/soul_journal',
      live: 'https://soul-journal-65327.web.app/',
      tech: ['Flutter', 'Firebase', 'Riverpod', 'Cloud Firestore', 'Dart']
    },
    {
      title: 'AI Text Summarizer',
      tag: 'NLP / GenAI Engine',
      desc: 'High-throughput document intelligence workspace leveraging Google Gemini LLM API to parse, summarize, and extract sentiment and core action items from dense documents and meeting transcripts.',
      img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/aitextsummarizer',
      tech: ['Node.js', 'Express', 'Gemini AI', 'React 19', 'Tailwind CSS']
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#f0f6fc] text-slate-800 selection:bg-sky-500/20 selection:text-sky-700 font-sans">
      {/* Calm & Confident Light Blue Atmospheric Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-sky-200/40 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-blue-200/35 blur-[140px] rounded-full" />
        <div className="absolute top-[40%] right-[10%] w-[35%] h-[35%] bg-indigo-100/40 blur-[150px] rounded-full" />
      </div>
      
      {/* Navbar */}
      <header className={`fixed top-0 w-full z-50 bg-[#f0f6fc]/80 backdrop-blur-xl border-b border-sky-100 transition-transform duration-500 ${isNavVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <nav className="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
          <motion.a 
            href="#header" 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-black tracking-tighter text-slate-900 hover:text-sky-600 transition-colors"
          >
            DEEKSHA G<span className="text-sky-600">.</span>
          </motion.a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600">
            <a href="#about" className="hover:text-sky-600 transition-colors">About</a>
            <a href="#projects" className="hover:text-sky-600 transition-colors">Works</a>
            <a href="#experience" className="hover:text-sky-600 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-sky-600 transition-colors">Contact</a>
            <div className="flex items-center gap-6 pl-6 border-l border-sky-200">
              <a href="https://github.com/DeekshaG96" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-sky-600 transition-colors" title="GitHub"><Github size={17} /></a>
              <a href="https://linkedin.com/in/deeksha-g-cybersec" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-sky-600 transition-colors" title="LinkedIn"><Linkedin size={17} /></a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-800 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile Nav Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-[#f0f6fc] border-b border-sky-200 p-8 flex flex-col gap-8 md:hidden shadow-xl"
            >
              <div className="flex flex-col gap-6 text-sm font-bold uppercase tracking-widest text-slate-700">
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-sky-600">About</a>
                <a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-sky-600">Works</a>
                <a href="#experience" onClick={() => setIsMenuOpen(false)} className="hover:text-sky-600">Experience</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-sky-600">Contact</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Hero Section */}
        <section id="header" className="min-h-screen flex flex-col justify-center items-center text-center pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10 max-w-4xl"
          >
            <div className="space-y-2 py-4">
              <h1 className="font-cursive text-7xl sm:text-8xl md:text-[9rem] lg:text-[11rem] font-normal leading-[1.15] tracking-normal text-slate-900 select-none drop-shadow-sm">
                Deeksha <span className="aesthetic-gradient">G.</span>
              </h1>
            </div>
            
            <p className="text-slate-600 text-xl md:text-2xl max-w-2xl mx-auto font-normal leading-relaxed min-h-[3rem]">
              I am a <span className="text-slate-900 font-semibold italic border-r-2 border-sky-600 pr-1 animate-pulse">{typingText}</span>
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <a href="#projects" className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest bg-slate-900 text-white px-10 py-5 rounded-full hover:bg-sky-600 transition-all shadow-xl shadow-sky-900/10 hover:shadow-sky-600/25">
                Explore My Impact <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
              </a>
              <a href="./Deeksha_G_Resume.pdf" download="Deeksha_G_Resume.pdf" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest border border-sky-300 bg-white/80 text-slate-800 px-10 py-5 rounded-full hover:border-sky-500 hover:text-sky-600 hover:bg-white transition-all shadow-sm">
                Download CV <Download size={18} className="group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </section>

        {/* Bento Grid About & Philosophy */}
        <section id="about" className="py-32">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white/80 backdrop-blur-xl border border-sky-100 rounded-3xl p-12 space-y-8 shadow-lg shadow-sky-900/5">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-sky-600">Mission Statement</h2>
              <div className="space-y-6 text-2xl md:text-3xl font-light leading-relaxed text-slate-700">
                <p>
                  Driven by a calm focus and technical conviction, I am <span className="text-slate-900 font-medium">Deeksha G.</span>—a Software Engineer dedicated to architecting reliable, intelligent digital systems.
                </p>
                <p>
                  My mission is to transform intricate challenges into <span className="text-slate-900 font-medium">elegant, high-performance software</span> that powers real-world progress and dependable business value.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-50 via-white to-blue-50/50 border border-sky-200/80 rounded-3xl p-12 flex flex-col justify-between relative overflow-hidden shadow-lg shadow-sky-900/5 group">
              <div className="relative z-10 space-y-6">
                {stats.map((stat, i) => (
                  <div key={i} className="flex justify-between items-end border-b border-sky-200/70 pb-3">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-sky-700">{stat.label}</span>
                    <span className="text-3xl font-black text-slate-900">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-3 bg-white/80 backdrop-blur-xl border border-sky-100 rounded-3xl p-12 shadow-lg shadow-sky-900/5">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {values.map((val, i) => (
                  <div key={i} className="space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-sky-600">{val.title}</h3>
                    <p className="text-slate-600 text-sm font-normal leading-relaxed">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What I Do Section */}
        <section className="py-32">
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-sky-600">Core Expertise</h2>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900">DRIVING<br/>INNOVATION.</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <div key={i} className="bg-white/85 backdrop-blur-xl border border-sky-100 rounded-3xl p-12 space-y-6 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-900/10 transition-all group hover:-translate-y-2 duration-500 shadow-md shadow-sky-900/5">
                  <div className="p-4 bg-sky-50 rounded-2xl w-fit group-hover:bg-sky-100 transition-colors">
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 tracking-tight">{service.title}</h4>
                  <p className="text-slate-600 font-normal leading-relaxed text-sm">{service.desc}</p>
                </div>
              ))}
            </div>

            {/* Technical Stack */}
            <div className="pt-16">
              <div className="bg-white/80 backdrop-blur-xl border border-sky-100 rounded-[3rem] p-12 md:p-20 space-y-14 shadow-lg shadow-sky-900/5">
                <div className="text-center space-y-4">
                  <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-sky-600">Technical Stack</h2>
                  <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900">TOOLS & TECHNOLOGIES.</h3>
                </div>
                <div className="flex flex-wrap justify-center gap-3.5">
                  {['Python', 'Java', 'TypeScript', 'JavaScript', 'React 19', 'Next.js', 'Node.js', 'AWS', 'Google Cloud', 'Docker', 'Git', 'Tailwind CSS', 'Postman', 'Firebase', 'SQL'].map((tech) => (
                    <span key={tech} className="px-7 py-3.5 bg-sky-50/80 rounded-full text-xs font-bold uppercase tracking-widest text-slate-700 border border-sky-200/70 hover:border-sky-500 hover:text-sky-700 hover:bg-white transition-all cursor-default shadow-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Works / Projects */}
        <section id="projects" className="py-32">
          <div className="space-y-24">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-sky-200/80 pb-12">
              <div className="space-y-4">
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-sky-600">Selected Works</h2>
                <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900">CREATIVE<br/>ENGINEERING.</h3>
              </div>
              <p className="text-slate-600 text-lg font-normal max-w-md leading-relaxed">
                A curation of 0→1 platforms demonstrating scalable architecture, modern UX, and applied AI systems.
              </p>
            </div>

            <div className="grid gap-28">
              {projects.map((project, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group relative grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center"
                >
                  <div 
                    className="relative aspect-[16/10] rounded-[2rem] overflow-hidden bg-sky-100/60 border border-sky-200/80 shadow-lg shadow-sky-900/5 group"
                    onMouseEnter={() => setHoveredProject(i)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-slate-900/35 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="bg-white text-slate-900 px-6 py-3 rounded-full text-[11px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-sky-500 hover:text-white transition-colors shadow-md"
                      >
                        Code <Github size={14} />
                      </a>
                      {project.live && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noreferrer"
                          className="bg-sky-600 text-white px-6 py-3 rounded-full text-[11px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-sky-700 transition-colors shadow-md"
                        >
                          Live Demo <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-sky-600">{project.tag}</span>
                      <h4 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 group-hover:text-sky-600 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-slate-600 text-lg font-normal leading-relaxed">
                        {project.desc}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[11px] font-semibold uppercase tracking-wider text-sky-800 bg-sky-100/70 border border-sky-200/80 px-4 py-1.5 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-6 pt-3">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600 hover:text-sky-600 flex items-center gap-2 transition-colors"
                      >
                        View Code <Github size={15} />
                      </a>
                      {project.live && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600 hover:text-sky-800 flex items-center gap-2 transition-colors"
                        >
                          Live Demo <ArrowUpRight size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section id="experience" className="py-32">
          <div className="max-w-4xl mx-auto space-y-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-sky-600 text-center">Professional Experience</h2>
            <div className="space-y-14">
              {experience.map((exp, i) => (
                <div key={i} className="bg-white/80 backdrop-blur-xl border border-sky-100 rounded-3xl p-10 space-y-4 shadow-lg shadow-sky-900/5 group hover:border-sky-300 transition-all">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-3 border-b border-sky-100 pb-4">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">{exp.title}</h3>
                      <p className="text-base font-semibold text-slate-700">{exp.company}</p>
                    </div>
                    <div className="text-left md:text-right">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-sky-600">{exp.date}</span>
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 pt-2">
                    {exp.points.map((point, idx) => (
                      <li key={idx} className="flex gap-3 text-slate-600 font-normal leading-relaxed text-sm">
                        <span className="text-sky-600 font-bold mt-0.5">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Validated Certifications */}
        <section className="py-32">
          <div className="bg-white/80 backdrop-blur-xl border border-sky-100 rounded-[3rem] p-12 md:p-20 space-y-14 shadow-lg shadow-sky-900/5">
            <div className="text-center space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-sky-600">Validated Skills</h2>
              <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900">CERTIFICATIONS & BADGES.</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert) => (
                <span key={cert} className="px-8 py-4 bg-sky-50/80 rounded-full text-xs font-bold uppercase tracking-widest text-slate-700 border border-sky-200/70 hover:border-sky-500 hover:text-sky-700 hover:bg-white transition-all cursor-default shadow-xs">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-40">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12 text-left">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="space-y-6"
              >
                <h2 className="text-7xl md:text-[8rem] font-black tracking-tighter text-slate-900 leading-none">
                  LET'S<br/>TALK.
                </h2>
                <p className="text-slate-600 text-xl font-normal max-w-xl leading-relaxed">
                  Available for high-impact software engineering roles, cloud architecting, and AI product innovation.
                </p>
              </motion.div>
              
              <div className="flex flex-col gap-6">
                <button 
                  onClick={copyEmail}
                  className="group flex items-center gap-4 text-xl font-bold text-slate-900 hover:text-sky-600 transition-colors relative w-fit"
                  title="Click to copy email"
                >
                  <div className="p-3 bg-sky-100/70 rounded-xl text-sky-600">
                    <Mail size={22} />
                  </div>
                  deekshagpbangera@gmail.com
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-widest text-sky-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    {copied ? 'Copied!' : 'Click to Copy'}
                  </span>
                  {copied ? <Check size={18} className="text-sky-600" /> : <Copy size={18} className="opacity-30 group-hover:opacity-100 transition-opacity text-slate-600" />}
                </button>
                <a href="https://linkedin.com/in/deeksha-g-cybersec" target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-xl font-bold text-slate-900 hover:text-sky-600 transition-colors w-fit">
                  <div className="p-3 bg-sky-100/70 rounded-xl text-sky-600">
                    <Linkedin size={22} />
                  </div>
                  LinkedIn Profile
                </a>
                <a href="https://github.com/DeekshaG96" target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-xl font-bold text-slate-900 hover:text-sky-600 transition-colors w-fit">
                  <div className="p-3 bg-sky-100/70 rounded-xl text-sky-600">
                    <Github size={22} />
                  </div>
                  GitHub Profile
                </a>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-xl border border-sky-100 rounded-[3rem] p-12 space-y-8 shadow-xl shadow-sky-900/5">
              <h3 className="text-2xl font-bold text-slate-900">Send a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Full Name</label>
                  <input type="text" placeholder="Your Name" className="w-full bg-sky-50/50 border border-sky-200 rounded-xl px-6 py-4 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-sky-500 outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                  <input type="email" placeholder="your.email@example.com" className="w-full bg-sky-50/50 border border-sky-200 rounded-xl px-6 py-4 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-sky-500 outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Message</label>
                  <textarea rows={4} placeholder="How can we collaborate?" className="w-full bg-sky-50/50 border border-sky-200 rounded-xl px-6 py-4 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-sky-500 outline-none transition-colors resize-none" />
                </div>
                <button className="w-full bg-slate-900 text-white py-5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-sky-600 transition-all flex items-center justify-center gap-3 shadow-md shadow-sky-900/10 hover:shadow-sky-600/25">
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
            className="fixed bottom-8 right-8 z-50 bg-slate-900 text-white p-4 rounded-full shadow-2xl hover:bg-sky-600 transition-all group"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ChevronUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-16 border-t border-sky-200/70 text-center bg-white/40">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-semibold uppercase tracking-[0.2em]">
            © 2026 DEEKSHA G • ARCHITECTED WITH CALM CONFIDENCE & PRECISION.
          </p>
          <div className="flex gap-8 text-slate-500 text-xs font-semibold uppercase tracking-[0.2em]">
            <a href="#header" className="hover:text-sky-600 transition-colors">Back to Top</a>
            <span>Mangaluru, India</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
