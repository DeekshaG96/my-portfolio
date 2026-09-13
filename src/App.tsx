import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Mail, 
  Linkedin,
  ArrowRight, 
  Menu, 
  X,
  ArrowUpRight,
  Download,
  Copy,
  Check,
  ChevronUp,
  Briefcase,
  Zap,
  GraduationCap,
  Award,
  Sparkles,
  ExternalLink,
  Code2
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const copyEmail = () => {
    navigator.clipboard.writeText('deekshagpbangera@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const stats = [
    { label: 'Internships', value: '5', note: 'AICTE & Industry' },
    { label: 'Projects', value: '7', note: 'Full 0→1 Deployments' },
    { label: 'Cloud Badges', value: '18+', note: 'Google Cloud & AWS' },
    { label: 'Degree CGPA', value: '7.8', note: 'B.E. CSBS (SIT)' }
  ];

  const skillDomains = [
    {
      category: 'Languages',
      items: ['Python', 'Java', 'C++', 'TypeScript', 'JavaScript', 'SQL', 'Solidity']
    },
    {
      category: 'Frontend & Web',
      items: ['React 19', 'Next.js', 'Tailwind CSS', 'Vite', 'HTML5 / CSS3', 'Framer Motion']
    },
    {
      category: 'Backend & APIs',
      items: ['Node.js', 'Express.js', 'REST APIs', 'Postman API', 'Firebase', 'Firestore']
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS (EC2, S3, VPC, IAM)', 'Google Cloud Platform (ACE)', 'Docker', 'Git / GitHub', 'GitHub Actions CI/CD']
    },
    {
      category: 'AI & Security',
      items: ['Google Gemini 2.5 Flash', 'Prompt Engineering', 'Scikit-Learn ML', 'Zero-Trust (ZTNA)', 'Fortinet Firewalls']
    }
  ];

  const experience = [
    { 
      date: 'May 2026 - Present', 
      title: 'Open Source Software Contributor', 
      company: 'GirlScript Summer of Code (GSSoC)',
      location: 'Remote',
      badge: 'Open Source',
      points: [
        'Contributing core features and bug fixes to developer and security tooling open-source repositories.',
        'Configured automated GitHub Actions CI/CD workflows for linting, testing, and branch validation, cutting review cycles by 25%.',
        'Collaborating with distributed engineering teams on modern pull request reviews and semantic releases.'
      ]
    },
    { 
      date: 'Oct 2025 - Dec 2025', 
      title: 'Network Security Engineering Intern', 
      company: 'Fortinet (via AICTE & EduSkills)',
      location: 'Virtual',
      badge: 'Grade O (90-100%)',
      points: [
        'Completed 10-week enterprise security program with Grade O (Outstanding, 90-100%).',
        'Configured stateful firewall inspection rules, Zero-Trust Network Access (ZTNA), and simulated threat vectors.',
        'Hardened virtualized network perimeters and conducted automated vulnerability assessments.'
      ]
    },
    { 
      date: 'Jan 2025 - Mar 2025', 
      title: 'Cybersecurity Engineering Intern', 
      company: 'Palo Alto Networks (via AICTE & EduSkills)',
      location: 'Virtual',
      badge: 'Grade E (80-89%)',
      points: [
        'Completed intensive 10-week cybersecurity track, achieving Grade E (Excellent, 80-89%).',
        'Analyzed real-time network traffic telemetry, investigated simulated SOC alarms, and mitigated perimeter risks.',
        'Constructed threat-modeling topologies and incident response automation playbooks.'
      ]
    },
    { 
      date: 'Nov 2024 - Dec 2024', 
      title: 'AI Product Intern', 
      company: 'TechSaksham (Microsoft & SAP Initiative)',
      location: 'Remote',
      badge: '94% ML Accuracy',
      points: [
        'Engineered deep learning computer vision pipelines for sustainable agriculture, achieving 94% prediction accuracy.',
        'Optimized model inference latency for edge processing across 10,000+ agricultural data records.',
        'Collaborated with cross-functional product leads to translate business requirements into production ML architecture.'
      ]
    },
    { 
      date: 'Oct 2024 - Dec 2024', 
      title: 'Cloud Infrastructure Engineering Intern', 
      company: 'AWS Academy',
      location: 'Remote',
      badge: 'Grade A Evaluation',
      points: [
        'Architected resilient cloud infrastructures utilizing AWS Core Services (EC2, S3, VPC, RDS, IAM) with Grade A evaluation.',
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

  const projectCategories = ['All', 'AI & Cloud', 'Full-Stack', 'Security & Web3', 'Mobile'];

  const projects = [
    {
      title: 'RazorOps AI',
      tag: 'FinTech / Automated Reconciliation',
      category: 'Full-Stack',
      metric: '-40% Audit Overhead',
      desc: 'Financial operations portal simulating transaction batch clearing, status lifecycles, and liquidity forecasting. Automated API test suites with Postman validate idempotency and cut manual auditing overhead by 40%.',
      img: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96',
      tech: ['React 19', 'JavaScript', 'Firebase', 'SQL', 'Postman API', 'Tailwind CSS']
    },
    {
      title: 'Eco-Track Logistics',
      tag: 'Logistics / Gemini 2.5 Flash',
      category: 'AI & Cloud',
      metric: '+25% Route Resilience',
      desc: 'AI-assisted logistics intelligence platform for supply chain disruption detection and recovery routing. Integrates Google Gemini 2.5 Flash reasoning with real-time IoT sensor telemetry in Firebase (+25% routing resilience). Built for Google Solution Challenge 2026.',
      img: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/eco-track-logistics',
      live: 'https://techspire-13303696-1c68d.web.app',
      tech: ['React', 'Gemini AI', 'Firebase', 'Google Maps API', 'CI/CD']
    },
    {
      title: 'Smart Farmer Connect',
      tag: 'AgriTech / Next.js Platform',
      category: 'Full-Stack',
      metric: '+40% User Engagement',
      desc: 'Scalable full-stack marketplace and crop intelligence portal connecting farmers to agronomy analytics and direct commercial buyers. Features dynamic pricing models and localized weather analytics (+40% user engagement).',
      img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/smart-farm-connect',
      live: 'https://v0-smart-farm-connect-ui.vercel.app/',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'REST API']
    },
    {
      title: 'VotX Protocol',
      tag: 'Web3 / Cryptography',
      category: 'Security & Web3',
      metric: '10,000+ Anonymous Ballots',
      desc: 'Decentralized electronic voting platform deploying gas-optimized Solidity smart contracts on Polygon with Zero-Knowledge proofs (ZK-proofs) for complete voter anonymity and tamper-proof ballot verification across 10,000+ simulated voters.',
      img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96',
      tech: ['Solidity', 'Polygon', 'ZK-Proofs', 'Web3.js', 'Smart Contracts']
    },
    {
      title: 'Student Success Dashboard',
      tag: 'EdTech / MLOps',
      category: 'AI & Cloud',
      metric: 'Real-Time ML Forecasting',
      desc: 'Interactive predictive machine learning portal analyzing educational indicators to forecast student retention and graduation outcomes in real time with feature-importance visual explainability.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/Student-Success-Dashboard',
      tech: ['Python', 'Streamlit', 'Scikit-Learn', 'Pandas', 'Matplotlib']
    },
    {
      title: 'Soul Journal',
      tag: 'Mobile / Flutter & Cloud',
      category: 'Mobile',
      metric: 'Riverpod & Biometrics',
      desc: 'Cross-platform mental wellness and habit-building mobile application engineered in Flutter with Riverpod state architecture, biometric security, and real-time Cloud Firestore synchronization.',
      img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/soul_journal',
      live: 'https://soul-journal-65327.web.app/',
      tech: ['Flutter', 'Firebase', 'Riverpod', 'Cloud Firestore', 'Dart']
    },
    {
      title: 'AI Text Summarizer',
      tag: 'NLP / GenAI Engine',
      category: 'AI & Cloud',
      metric: 'Sub-Second LLM Ingestion',
      desc: 'High-throughput document intelligence workspace leveraging Google Gemini LLM API to parse, summarize, and extract sentiment and core action items from dense documents and meeting transcripts.',
      img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/aitextsummarizer',
      tech: ['Node.js', 'Express', 'Gemini AI', 'React 19', 'Tailwind CSS']
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-sky-100 selection:text-sky-800">
      {/* Sticky Clean Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Side Logo with requested signature script font */}
          <a 
            href="#header" 
            className="font-cursive text-3xl text-slate-900 hover:text-sky-600 transition-colors select-none"
          >
            Deeksha G<span className="text-sky-600 font-sans">.</span>
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-slate-600">
            <a href="#about" className="hover:text-sky-600 transition-colors">About</a>
            <a href="#projects" className="hover:text-sky-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-sky-600 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-sky-600 transition-colors">Experience</a>
            <a href="#education" className="hover:text-sky-600 transition-colors">Education</a>
            <a href="#contact" className="hover:text-sky-600 transition-colors">Contact</a>
            
            <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
              <a href="https://github.com/DeekshaG96" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-900" title="GitHub">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/in/deeksha-g-cybersec" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-sky-600" title="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a 
                href="./Deeksha_G_Resume.pdf" 
                download="Deeksha_G_Resume.pdf" 
                className="bg-slate-900 text-white hover:bg-sky-600 px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-xs"
              >
                Resume <Download size={13} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-700 p-1" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-5 flex flex-col gap-4 text-sm font-semibold">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-sky-600">About</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-sky-600">Projects</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="hover:text-sky-600">Skills</a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)} className="hover:text-sky-600">Experience</a>
            <a href="#education" onClick={() => setIsMenuOpen(false)} className="hover:text-sky-600">Education</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-sky-600">Contact</a>
            <a 
              href="./Deeksha_G_Resume.pdf" 
              download="Deeksha_G_Resume.pdf" 
              className="bg-slate-900 text-white text-center py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider"
            >
              Download Resume (PDF)
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section: Simple, Balanced & Best */}
      <header id="header" className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Available for Full-Time Software Engineering & Cloud Roles • Immediate Joining
        </div>

        {/* Clean, Refined Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Hi, I'm <span className="text-sky-600">Deeksha G.</span>
        </h1>

        {/* Professional Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-700 font-medium mt-4 max-w-2xl mx-auto leading-relaxed">
          Software Engineer specializing in Cloud Infrastructure, Applied AI, and Scalable Web Systems.
        </p>

        {/* Concise Credibility Bio */}
        <p className="text-sm md:text-base text-slate-500 mt-3 max-w-xl mx-auto leading-relaxed">
          Final-year Computer Science & Business Systems student at SIT Mangaluru (7.8 CGPA). Open source contributor at GSSoC '26, Google Cloud ACE & AWS certified with 5 completed internships.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-3.5 mt-8">
          <a 
            href="#projects" 
            className="bg-slate-900 text-white hover:bg-sky-600 px-6 py-3 rounded-xl text-sm font-semibold transition-colors shadow-sm flex items-center gap-2"
          >
            View Projects <ArrowRight size={16} />
          </a>
          <a 
            href="./Deeksha_G_Resume.pdf" 
            download="Deeksha_G_Resume.pdf" 
            className="bg-white text-slate-800 border border-slate-300 hover:border-sky-500 hover:text-sky-600 px-6 py-3 rounded-xl text-sm font-semibold transition-colors shadow-xs flex items-center gap-2"
          >
            Download Resume <Download size={16} />
          </a>
          <button 
            onClick={copyEmail}
            className="bg-sky-50 text-sky-800 border border-sky-200 hover:bg-sky-100 px-5 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center gap-2"
          >
            {copied ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
            {copied ? 'Email Copied!' : 'Copy Email'}
          </button>
        </div>

        {/* Clean 4-Item Quick Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-200/80 text-left">
          {stats.map((s, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-xs">
              <span className="text-2xl font-bold text-slate-900">{s.value}</span>
              <p className="text-xs font-semibold text-slate-700 mt-0.5">{s.label}</p>
              <p className="text-[11px] text-slate-400">{s.note}</p>
            </div>
          ))}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-6 space-y-24 pb-24">
        {/* About Section */}
        <section id="about" className="space-y-6 pt-6">
          <div className="space-y-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-600">About Me</h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Engineering with focus, precision, and purpose.</h3>
          </div>
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 space-y-4 text-slate-600 leading-relaxed text-base shadow-xs">
            <p>
              I am a final-year Computer Science & Business Systems engineer who builds reliable, test-driven software systems. My background spans cloud architecture on AWS and Google Cloud, applied AI pipelines with Google Gemini, and modern web applications built on React 19 and Next.js.
            </p>
            <p>
              Having completed 5 technical internships—including enterprise security at Fortinet (Grade O), Palo Alto Networks (Grade E), AI development at TechSaksham (Microsoft & SAP), and active contributions to GirlScript Summer of Code—I bring immediate practical value and disciplined engineering habits to any technical team.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-sky-600">Featured Work</h2>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Flagship Projects</h3>
            </div>
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    activeCategory === cat
                      ? 'bg-slate-900 text-white'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((p) => (
              <div 
                key={p.title} 
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                    <img 
                      src={p.img} 
                      alt={p.title} 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-emerald-700 border border-emerald-200 shadow-xs">
                      {p.metric}
                    </span>
                  </div>
                  
                  <div className="p-6 space-y-3">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <span className="text-[11px] font-semibold text-sky-600 uppercase tracking-wider block">{p.tag}</span>
                        <h4 className="text-xl font-bold text-slate-900">{p.title}</h4>
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {p.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {p.tech.map((t) => (
                        <span key={t} className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex gap-4 border-t border-slate-100">
                  <a 
                    href={p.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-xs font-semibold text-slate-700 hover:text-sky-600 flex items-center gap-1.5 transition-colors"
                  >
                    <Github size={15} /> Source Code
                  </a>
                  {p.live && (
                    <a 
                      href={p.live} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-xs font-semibold text-sky-600 hover:text-sky-800 flex items-center gap-1 transition-colors"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills Section */}
        <section id="skills" className="space-y-6">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-600">Competencies</h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Technical Skills</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillDomains.map((domain, i) => (
              <div key={i} className="bg-white border border-slate-200/80 rounded-xl p-5 space-y-3 shadow-xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">
                  {domain.category}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {domain.items.map((skill) => (
                    <span key={skill} className="px-2.5 py-1 bg-slate-50 border border-slate-200/70 rounded-md text-xs font-medium text-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience Section */}
        <section id="experience" className="space-y-6">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-600">Career History</h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Internships & Open Source</h3>
          </div>

          <div className="space-y-4">
            {experience.map((exp, i) => (
              <div key={i} className="bg-white border border-slate-200/80 rounded-xl p-6 space-y-3 shadow-xs hover:border-slate-300 transition-colors">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1 border-b border-slate-100 pb-3">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h4 className="text-lg font-bold text-slate-900">{exp.title}</h4>
                      {exp.badge && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-slate-700">{exp.company}</p>
                  </div>
                  <div className="text-left sm:text-right text-xs text-slate-500 font-medium">
                    <span>{exp.date}</span> • <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-2 text-sm text-slate-600">
                  {exp.points.map((p, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-sky-600 font-bold">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Academic Honors */}
        <section id="education" className="space-y-6">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-600">Academic Foundation</h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Education & Honors</h3>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start gap-6 shadow-xs">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Bachelor of Engineering (B.E.)</span>
              <h4 className="text-xl sm:text-2xl font-bold text-slate-900">
                Computer Science & Business Systems (CSBS)
              </h4>
              <p className="text-sm font-semibold text-slate-700">
                Srinivas Institute of Technology (SIT), Mangaluru • VTU
              </p>
              <p className="text-xs text-slate-500 max-w-xl leading-relaxed pt-1">
                <span className="font-semibold text-slate-700">Core Coursework:</span> Data Structures & Algorithms, Object-Oriented Programming (Java/C++), Database Systems (SQL), Operating Systems, Computer Networks, Cloud Computing, Artificial Intelligence & Machine Learning.
              </p>
            </div>

            <div className="sm:text-right shrink-0">
              <span className="text-xs text-slate-500 font-medium">2022 – 2026 (Final Year)</span>
              <p className="text-3xl font-black text-slate-900 mt-1">7.8 <span className="text-sm font-normal text-slate-500">/ 10 CGPA</span></p>
              <span className="inline-block mt-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                Expected: June 2026
              </span>
            </div>
          </div>

          {/* Certifications Row */}
          <div className="bg-white border border-slate-200/80 rounded-xl p-6 space-y-3 shadow-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Industry Certifications & Credentials
            </h4>
            <div className="flex flex-wrap gap-2">
              {certifications.map((c) => (
                <span key={c} className="text-xs font-medium bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-slate-700">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-6">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-600">Get in Touch</h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Let's Connect</h3>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
            <p className="text-slate-600 text-base max-w-2xl leading-relaxed">
              I am actively looking for software engineering, cloud, and AI development opportunities. Reach out via email or LinkedIn to discuss engineering roles or collaborative projects.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={copyEmail} 
                className="bg-slate-900 text-white hover:bg-sky-600 px-5 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center gap-2"
              >
                <Mail size={16} />
                deekshagpbangera@gmail.com
                {copied && <span className="text-xs text-emerald-300 font-normal ml-1">Copied!</span>}
              </button>

              <a 
                href="https://linkedin.com/in/deeksha-g-cybersec" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-white border border-slate-300 text-slate-800 hover:border-sky-500 hover:text-sky-600 px-5 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center gap-2"
              >
                <Linkedin size={16} /> LinkedIn
              </a>

              <a 
                href="https://github.com/DeekshaG96" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-white border border-slate-300 text-slate-800 hover:border-slate-900 px-5 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center gap-2"
              >
                <Github size={16} /> GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Clean Minimal Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 Deeksha G • Software Engineer • Mangaluru, India</p>
          <div className="flex gap-6 font-medium">
            <a href="#header" className="hover:text-sky-600">Back to Top ↑</a>
            <a href="https://github.com/DeekshaG96" target="_blank" rel="noreferrer" className="hover:text-sky-600">GitHub</a>
            <a href="https://linkedin.com/in/deeksha-g-cybersec" target="_blank" rel="noreferrer" className="hover:text-sky-600">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
