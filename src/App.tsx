import { useState } from 'react';
import { 
  Github, 
  Mail, 
  Linkedin, 
  ArrowRight, 
  ArrowDown,
  ArrowUpRight,
  ExternalLink, 
  Download, 
  Copy, 
  Check, 
  Menu, 
  X,
  Cpu, 
  Brain, 
  Cloud, 
  ShieldCheck, 
  GraduationCap, 
  Award,
  Layers,
  Sparkles,
  MapPin
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

  const projectCategories = ['All', 'Full-Stack', 'AI & Cloud', 'Security & Web3', 'Mobile'];

  const projects = [
    {
      num: '01',
      title: 'RazorOps AI | Autonomous Reconciliation',
      tag: 'Razorpay AI Buildathon 2026 (Track 4)',
      category: 'AI & Cloud',
      metric: 'Razorpay Buildathon • 93.4% Match',
      desc: 'Autonomous financial reconciliation and liquidity intelligence engine built for Razorpay AI Buildathon 2026. Segregates deterministic math from Gemini Copilot reasoning, detecting MDR variances and modeling RBI nodal settlement cycles.',
      img: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/razorops-ai',
      live: 'https://razorops-ai.web.app',
      tech: ['React 19', 'Gemini AI', 'Firebase', 'E2E Testing', 'Tailwind CSS']
    },
    {
      num: '02',
      title: 'NaanStop Food Delivery & Kitchen OS',
      tag: 'Full-Stack / Restaurant ERP',
      category: 'Full-Stack',
      metric: 'Customer + Admin KDS + Android',
      desc: 'Full-stack multi-tier food ordering & restaurant ERP with real-time table reservations, live Kitchen Display System (KDS Kanban), JWT auth, and Capacitor Android mobile app.',
      img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/food-delivery-app',
      live: 'https://naanstop-customer.vercel.app',
      tech: ['React 18', 'Node.js', 'Express', 'MongoDB Atlas', 'Capacitor Android', 'JWT']
    },
    {
      num: '03',
      title: 'Eco-Track Resilient',
      tag: 'Google Solution Challenge 2026',
      category: 'AI & Cloud',
      metric: 'Gemini 1.5 Flash + Maps',
      desc: 'AI-assisted logistics intelligence prototype for Google Solution Challenge 2026. Predicts supply-chain disruption risks, calculates Scope 3 GLEC emissions, and simulates war room disaster drills.',
      img: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/eco-track-logistics',
      live: 'https://techspire-13303696-1c68d.web.app',
      tech: ['Gemini 1.5 Flash', 'React', 'Vite', 'Google Maps API', 'Firebase', 'Tailwind CSS']
    },
    {
      num: '04',
      title: 'The Architectural Ledger',
      tag: 'Enterprise HRMS & Payroll',
      category: 'Full-Stack',
      metric: 'Enterprise RBAC & Payroll',
      desc: 'Modern Human Resources Management Suite engineered for enterprise administration, role-based departmental oversight, interactive Recharts analytics, and automated payroll ledgers.',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/the-architectural-ledger',
      live: 'https://the-architectural-ledger.netlify.app/',
      tech: ['React 19', 'Vite', 'Tailwind CSS v4', 'Firebase', 'Recharts', 'Lucide React']
    },
    {
      num: '05',
      title: 'SIT Global Success Hub',
      tag: 'EdTech / MLOps Portal',
      category: 'AI & Cloud',
      metric: 'Random Forest + Gemini AI',
      desc: 'Institutional student success platform for Srinivas Institute of Technology CSBS scholars. Implements scikit-learn Random Forest outcome prediction, Google Gemini 1.5 Pro AI mentor, and zero-leak bcrypt auth.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/Student-Success-Dashboard',
      live: 'https://student-success-dashboard-cpnswmcahqbt6zwqkhwghy.streamlit.app/',
      tech: ['Python', 'Streamlit', 'Scikit-Learn', 'Gemini 1.5 Pro', 'Bcrypt', 'Pandas']
    },
    {
      num: '06',
      title: 'VotX Decentralized Voting System',
      tag: 'Web3 / Smart Contracts',
      category: 'Security & Web3',
      metric: 'Sepolia Ethereum dApp',
      desc: 'Tamper-proof electronic voting dApp with Solidity ^0.8.24 smart contracts on Sepolia Testnet. Employs MetaMask decentralized identity (DID) to eliminate double-voting and record immutable ballots.',
      img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/blockchain_proj',
      live: 'https://blockchainproj-7nj1.vercel.app',
      tech: ['Solidity', 'Ethereum Sepolia', 'Hardhat', 'Ethers.js', 'React', 'Tailwind CSS']
    },
    {
      num: '07',
      title: 'Smart Farmer Connect',
      tag: 'Agritech / Srinathon 2.0',
      category: 'Full-Stack',
      metric: '24-Hr Hackathon Build',
      desc: 'Agritech marketplace platform developed at Srinathon 2.0 International Hackathon bridging farmers directly with consumers. Features real-time crop market pricing and localized weather analytics.',
      img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/smart-farm-connect',
      live: 'https://v0-smart-farm-connect-ui.vercel.app/',
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'REST API', 'Vercel']
    },
    {
      num: '08',
      title: 'Netflix Platform (Clean Architecture)',
      tag: 'Clean Architecture / Streaming',
      category: 'Full-Stack',
      metric: 'Clean Architecture & TMDB',
      desc: 'High-fidelity video streaming web application designed with Clean Architecture principles. Features Firebase Auth, dynamic TMDB API integration, real-time movie search, and responsive video overlay.',
      img: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/_netflix-clone_',
      live: 'https://netflix-clone-eight-liard-22.vercel.app',
      tech: ['React 18', 'TypeScript', 'Tailwind CSS', 'Firebase Auth', 'TMDB API', 'Framer Motion']
    },
    {
      num: '09',
      title: 'PlantGuard AI Diagnostics',
      tag: 'Computer Vision / TechSaksham',
      category: 'AI & Cloud',
      metric: 'Microsoft & SAP 94% Honors',
      desc: 'AICTE-TechSaksham (Microsoft & SAP) capstone deep learning model utilizing Convolutional Neural Networks (CNN) to detect agricultural crop diseases from leaf imagery with high accuracy.',
      img: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/Plant-Disease-Detection-System-for-Sustainable-Agriculture-P2-',
      tech: ['Python', 'PyTorch', 'TensorFlow', 'CNN', 'OpenCV', 'Jupyter']
    },
    {
      num: '10',
      title: 'Soul Journal & Mental Wellness',
      tag: 'Mobile / Flutter & Cloud',
      category: 'Mobile',
      metric: 'Cross-Platform Flutter & Web',
      desc: 'Cross-platform mindful journaling and wellness mobile application engineered in Flutter. Features biometric security, mood tracking analytics, Pomodoro focus timer, and Cloud Firestore sync.',
      img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/soul_journal',
      live: 'https://soul-journal-65327.web.app/',
      tech: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'Biometrics', 'Web']
    },
    {
      num: '11',
      title: 'AI Text Summarizer',
      tag: 'NLP / GenAI Engine',
      category: 'AI & Cloud',
      metric: 'Transformer NLP API',
      desc: 'High-throughput document intelligence workspace integrating Hugging Face transformer models to parse, synthesize, and extract key action items from lengthy technical documents.',
      img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/aitextsummarizer',
      live: 'https://aitextsummarizer-omega.vercel.app',
      tech: ['JavaScript', 'Hugging Face API', 'HTML5', 'CSS3', 'Vercel']
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const services = [
    {
      title: 'Full-Stack Engineering',
      desc: 'Developing high-performance, responsive applications with React 19, Next.js, Node.js, and clean RESTful APIs.',
      icon: <Cpu className="w-6 h-6 text-emerald-400" />
    },
    {
      title: 'Applied AI & GenAI Systems',
      desc: 'Integrating Google Gemini 2.5 Flash, structured prompt design, and machine learning models for production workflows.',
      icon: <Brain className="w-6 h-6 text-emerald-400" />
    },
    {
      title: 'Cloud & Infrastructure',
      desc: 'Architecting resilient AWS and Google Cloud environments with automated CI/CD and cost-optimized compute.',
      icon: <Cloud className="w-6 h-6 text-emerald-400" />
    },
    {
      title: 'Network Security & ZTNA',
      desc: 'Configuring enterprise firewalls, Zero-Trust Network Access (ZTNA), and automated threat surface assessments.',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />
    }
  ];

  const skillDomains = [
    {
      category: 'Frontend',
      items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React 19', 'Next.js', 'Tailwind CSS', 'Flutter']
    },
    {
      category: 'Backend & Cloud',
      items: ['Python', 'Java', 'C++', 'Node.js', 'Express', 'AWS (EC2/S3/VPC)', 'Google Cloud', 'Docker', 'SQL']
    },
    {
      category: 'AI & Security',
      items: ['Google Gemini AI', 'Prompt Design', 'Scikit-Learn', 'Zero-Trust (ZTNA)', 'Fortinet Security', 'Postman API']
    }
  ];

  const experience = [
    { 
      date: 'May 2026 - Present', 
      title: 'Open Source Software Contributor', 
      company: 'GirlScript Summer of Code (GSSoC)',
      badge: 'Open Source',
      points: [
        'Contributing core features and bug fixes to developer and security tooling open-source repositories.',
        'Configured automated GitHub Actions CI/CD workflows for linting, testing, and branch validation, cutting review cycles by 25%.'
      ]
    },
    { 
      date: 'Oct 2025 - Dec 2025', 
      title: 'Network Security Engineering Intern', 
      company: 'Fortinet (via AICTE & EduSkills)',
      badge: 'Grade O (90-100%)',
      points: [
        'Graduated with Grade O (Outstanding, 90-100%) across enterprise network security engineering curriculum.',
        'Configured stateful firewall inspection rules, Zero-Trust Network Access (ZTNA), and simulated enterprise attack vectors.'
      ]
    },
    { 
      date: 'Jan 2025 - Mar 2025', 
      title: 'Cybersecurity Engineering Intern', 
      company: 'Palo Alto Networks (via AICTE & EduSkills)',
      badge: 'Grade E (80-89%)',
      points: [
        'Completed 10-week intensive cybersecurity track, achieving Grade E (Excellent, 80-89%).',
        'Analyzed real-time network traffic telemetry, investigated simulated SOC alarms, and mitigated perimeter vulnerabilities.'
      ]
    },
    { 
      date: 'Nov 2024 - Dec 2024', 
      title: 'AI Product Intern', 
      company: 'TechSaksham (Microsoft & SAP CSR)',
      badge: '94% ML Accuracy',
      points: [
        'Engineered deep learning computer vision pipelines for sustainable agriculture, achieving 94% prediction accuracy.',
        'Optimized model inference latency for edge processing across 10,000+ agricultural data records.'
      ]
    },
    { 
      date: 'Oct 2024 - Dec 2024', 
      title: 'Cloud Infrastructure Engineering Intern', 
      company: 'AWS Academy',
      badge: 'Grade A Evaluation',
      points: [
        'Architected resilient cloud infrastructures utilizing AWS Core Services (EC2, S3, VPC, RDS, IAM) with Grade A evaluation.',
        'Engineered multi-AZ subnet topologies, routing tables, and security group policies for scalable microservice hosting.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#090d0a] text-[#94a3b8] font-sans antialiased selection:bg-emerald-500/20 selection:text-emerald-400">
      
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[5%] left-[50%] -translate-x-1/2 w-[550px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full" />
        <div className="absolute top-[40%] right-[-5%] w-[450px] h-[450px] bg-emerald-600/5 blur-[150px] rounded-full" />
      </div>

      {/* Floating Pill Header & Nav (Bedimcode style) */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-5 pb-3">
        <nav className="max-w-4xl mx-auto bg-[#111612]/90 backdrop-blur-xl border border-emerald-500/20 rounded-full px-6 py-3 flex justify-between items-center shadow-xl shadow-black/40">
          <a href="#home" className="font-cursive text-2xl text-white hover:text-emerald-400 transition-colors select-none">
            Deeksha G<span className="text-emerald-400 font-sans">.</span>
          </a>

          <div className="hidden md:flex items-center gap-7 text-xs font-medium uppercase tracking-wider text-slate-300">
            <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
            <a href="#work" className="hover:text-emerald-400 transition-colors">Works</a>
            <a href="#services" className="hover:text-emerald-400 transition-colors">My Services</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#journey" className="hover:text-emerald-400 transition-colors">Career</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a 
              href="#contact" 
              className="bg-emerald-400 hover:bg-emerald-300 text-black font-semibold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-all shadow-md shadow-emerald-400/20 hover:shadow-emerald-400/30"
            >
              Contact me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-1" 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Nav Drawer */}
        {isMenuOpen && (
          <div className="md:hidden max-w-sm mx-auto mt-2 bg-[#111612] border border-emerald-500/20 rounded-3xl p-6 flex flex-col gap-4 text-sm font-medium shadow-2xl">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-emerald-400">Home</a>
            <a href="#work" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-emerald-400">Works</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-emerald-400">My Services</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-emerald-400">Skills</a>
            <a href="#journey" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-emerald-400">Career</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-emerald-400">Contact</a>
            <a 
              href="./Deeksha_G_Resume.pdf" 
              download="Deeksha_G_Resume.pdf" 
              className="bg-emerald-400 text-black text-center py-2.5 rounded-full text-xs font-bold uppercase tracking-wider mt-2"
            >
              Download Resume (PDF)
            </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-24 space-y-28">

        {/* ==================== HOME SECTION ==================== */}
        <section id="home" className="text-center space-y-8">
          {/* Subtitle pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-medium tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Hi! I'm Deeksha — Based in Mangaluru, India
          </div>

          {/* Main Title (Bedimcode headline style) */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight font-headline">
            Creative Engineer & <br />
            <span className="text-gradient">Software Developer</span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            I build resilient cloud architectures, scalable full-stack applications, and applied AI systems that solve real-world problems.
          </p>

          {/* Centerpiece: Bedimcode Portrait Card with Rotating Circular Badge */}
          <div className="relative w-64 sm:w-72 h-80 sm:h-96 mx-auto my-8">
            {/* Ambient emerald backlight */}
            <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full" />

            {/* Rounded Card Container */}
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border-2 border-emerald-400/40 shadow-2xl shadow-emerald-500/20 bg-gradient-to-b from-emerald-900/40 via-[#111612] to-[#090d0a]">
              <img 
                src="./assets/avatar.jpg" 
                alt="Deeksha G" 
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Circular Rotating Badge (Bedimcode Signature) */}
            <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-full bg-[#111612] border-2 border-emerald-400/60 flex items-center justify-center shadow-xl shadow-black/80">
              <svg className="w-full h-full animate-spin-slow p-1" viewBox="0 0 100 100">
                <path 
                  id="circlePath" 
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" 
                  fill="transparent" 
                />
                <text className="text-[9.5px] font-bold uppercase tracking-[0.22em] fill-emerald-400">
                  <textPath href="#circlePath">
                    EXPLORE • MORE • LET'S BUILD •
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-emerald-400">
                <ArrowDown size={16} />
              </div>
            </div>
          </div>

          {/* About Me Split Block below Avatar (Bedimcode structure) */}
          <div className="grid md:grid-cols-2 gap-8 text-left pt-6 max-w-2xl mx-auto border-t border-emerald-500/10">
            <div className="space-y-2">
              <p className="text-sm text-slate-300 leading-relaxed">
                <span className="font-semibold text-white">About Me:</span> CSBS Engineer (7.8 CGPA) at SIT Mangaluru who enjoys <span className="text-emerald-400 font-medium">cloud architecture</span> and <span className="text-emerald-400 font-medium">applied AI engineering</span>, disciplined, and passionate about reliable software.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-slate-400 leading-relaxed">
                If you have an engineering role or project in mind, explore my work below and let's connect to build together.
              </p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-black text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all shadow-md shadow-emerald-400/20"
                >
                  Contact me <ArrowRight size={14} />
                </a>
                <a 
                  href="./Deeksha_G_Resume.pdf" 
                  download="Deeksha_G_Resume.pdf" 
                  className="inline-flex items-center gap-2 bg-[#161d17] hover:bg-[#1f2a20] text-slate-200 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-full transition-all"
                >
                  Resume <Download size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== WORK SECTION ==================== */}
        <section id="work" className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-headline">
              View My <span className="text-gradient">Work</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              A curation of 0→1 engineering platforms demonstrating scalable architecture, modern UX, and applied AI.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-emerald-400 text-black font-semibold shadow-md shadow-emerald-400/20'
                      : 'bg-[#111612] text-slate-400 border border-emerald-500/20 hover:text-white hover:border-emerald-400/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 3-Column Work Grid (Bedimcode cards) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((p) => (
              <div 
                key={p.title} 
                className="bedim-card rounded-3xl p-4 flex flex-col justify-between group"
              >
                <div>
                  {/* Image container with view arrow */}
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black/40 border border-emerald-500/20">
                    <img 
                      src={p.img} 
                      alt={p.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded-md text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
                      {p.metric}
                    </span>
                    <a 
                      href={p.live || p.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-emerald-400 hover:bg-emerald-300 text-black flex items-center justify-center transition-all shadow-md"
                      title={p.live ? "Live Demo" : "View Code"}
                    >
                      <ArrowUpRight size={15} />
                    </a>
                  </div>

                  {/* Card Details */}
                  <div className="pt-4 pb-2 space-y-1.5">
                    <span className="text-xs font-bold text-emerald-400 font-headline block">
                      {p.num}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors font-headline">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-emerald-500/10 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500 truncate max-w-[140px]">{p.tech.slice(0, 2).join(', ')}</span>
                  <div className="flex items-center gap-3">
                    {p.live && (
                      <a 
                        href={p.live} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
                      >
                        Live <ExternalLink size={12} />
                      </a>
                    )}
                    <a 
                      href={p.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-slate-400 hover:text-white font-semibold flex items-center gap-1"
                    >
                      Code <Github size={12} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== SERVICES SECTION ==================== */}
        <section id="services" className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-headline">
              <span className="text-gradient">My</span> Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Specialized technical disciplines I deliver for enterprise software and modern web applications.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((s, idx) => (
              <div key={idx} className="bedim-card rounded-3xl p-6 space-y-3 group">
                <div className="w-12 h-12 rounded-2xl bg-[#1a231b] border border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-white font-headline">{s.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== SKILLS SECTION ==================== */}
        <section id="skills" className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-headline">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Toolchains and technologies learned through dedicated coursework, project building, and 5 completed internships.
            </p>
          </div>

          <div className="space-y-4">
            {skillDomains.map((d, i) => (
              <div key={i} className="bedim-card rounded-3xl p-6 space-y-3">
                <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider font-headline">
                  <Layers size={16} className="text-emerald-400" />
                  <span>{d.category}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {d.items.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 rounded-xl bg-[#182019] text-slate-200 border border-emerald-500/20 text-xs font-medium hover:border-emerald-400/60 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== CAREER & INTERNSHIPS ==================== */}
        <section id="journey" className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-headline">
              <span className="text-gradient">Career</span> Journey
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Track record of 5 enterprise & open source internships, certifications, and academic foundation.
            </p>
          </div>

          {/* Education Card */}
          <div className="bedim-card rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start gap-4">
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <GraduationCap size={15} /> Bachelor of Engineering (B.E.)
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-headline">
                Computer Science & Business Systems (CSBS)
              </h3>
              <p className="text-sm text-slate-300">
                Srinivas Institute of Technology (SIT), Mangaluru • VTU
              </p>
              <p className="text-xs text-slate-400 pt-1">
                Core: DSA, DBMS, Operating Systems, Computer Networks, Cloud Computing, Artificial Intelligence.
              </p>
            </div>
            <div className="sm:text-right shrink-0">
              <span className="text-xs text-slate-400">2022 – 2026</span>
              <p className="text-2xl font-bold text-emerald-400 font-headline">7.8 CGPA</p>
              <span className="inline-block mt-1 text-[11px] font-semibold text-emerald-300 bg-emerald-950/70 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                Graduating June 2026
              </span>
            </div>
          </div>

          {/* 5 Internships */}
          <div className="space-y-4">
            {experience.map((exp, idx) => (
              <div key={idx} className="bedim-card rounded-3xl p-6 space-y-3">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1 border-b border-emerald-500/10 pb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base sm:text-lg font-bold text-white font-headline">{exp.title}</h4>
                      {exp.badge && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-medium text-slate-300">{exp.company}</p>
                  </div>
                  <span className="text-xs text-emerald-400 font-medium">{exp.date}</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-400">
                  {exp.points.map((pt, pidx) => (
                    <li key={pidx} className="flex gap-2">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== CONTACT SECTION ==================== */}
        <section id="contact" className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-headline">
              Contact <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Have a full-time engineering opportunity or collaboration in mind? Let's connect!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bedim-card rounded-3xl p-6 sm:p-8 space-y-4">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your name" 
                    className="w-full bg-[#182019] border border-emerald-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-emerald-400 outline-none transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Email</label>
                  <input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="w-full bg-[#182019] border border-emerald-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-emerald-400 outline-none transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell me about the engineering opportunity or project..." 
                    className="w-full bg-[#182019] border border-emerald-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-emerald-400 outline-none transition-colors resize-none"
                  />
                </div>
                <button 
                  className="w-full bg-emerald-400 hover:bg-emerald-300 text-black font-bold uppercase tracking-wider text-xs py-3.5 rounded-xl transition-all shadow-md shadow-emerald-400/20 flex items-center justify-center gap-2"
                >
                  Send Message <ArrowRight size={15} />
                </button>
              </form>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 flex flex-col justify-between">
              <button 
                onClick={copyEmail}
                className="bedim-card rounded-2xl p-5 text-left flex items-center justify-between group hover:border-emerald-400/60 w-full"
              >
                <div className="space-y-0.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <Mail size={13} /> Email Address
                  </span>
                  <p className="text-sm font-semibold text-white">deekshagpbangera@gmail.com</p>
                </div>
                <span className="text-xs font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full">
                  {copied ? 'Copied!' : 'Copy Email'}
                </span>
              </button>

              <a 
                href="https://linkedin.com/in/deeksha-g-cybersec" 
                target="_blank" 
                rel="noreferrer" 
                className="bedim-card rounded-2xl p-5 flex items-center justify-between group hover:border-emerald-400/60"
              >
                <div className="space-y-0.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <Linkedin size={13} /> Professional Profile
                  </span>
                  <p className="text-sm font-semibold text-white">LinkedIn: deeksha-g-cybersec</p>
                </div>
                <ArrowUpRight size={18} className="text-slate-400 group-hover:text-emerald-400 transition-colors" />
              </a>

              <a 
                href="https://github.com/DeekshaG96" 
                target="_blank" 
                rel="noreferrer" 
                className="bedim-card rounded-2xl p-5 flex items-center justify-between group hover:border-emerald-400/60"
              >
                <div className="space-y-0.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <Github size={13} /> Open Source Code
                  </span>
                  <p className="text-sm font-semibold text-white">GitHub: DeekshaG96</p>
                </div>
                <ArrowUpRight size={18} className="text-slate-400 group-hover:text-emerald-400 transition-colors" />
              </a>

              <div className="bedim-card rounded-2xl p-5 flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <MapPin size={13} /> Location & Availability
                  </span>
                  <p className="text-sm font-semibold text-white">Mangaluru, India • Open to Relocate & Remote</p>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ==================== FOOTER ==================== */}
      <footer className="border-t border-emerald-500/10 bg-[#070a08] py-14 text-center space-y-6">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider text-white font-headline max-w-xl mx-auto leading-snug">
            COLLABORATE WITH DEEKSHA AND START YOUR JOURNEY IN CREATIVE ENGINEERING TODAY.
          </h2>

          <div className="flex justify-center gap-6 text-xs uppercase tracking-wider font-semibold text-slate-400 pt-2">
            <a href="#work" className="hover:text-emerald-400 transition-colors">Work</a>
            <a href="#services" className="hover:text-emerald-400 transition-colors">Services</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#journey" className="hover:text-emerald-400 transition-colors">Career</a>
            <a href="./Deeksha_G_Resume.pdf" download="Deeksha_G_Resume.pdf" className="text-emerald-400 hover:text-emerald-300">Resume PDF</a>
          </div>

          <div className="flex justify-center gap-4 pt-2">
            <a href="https://github.com/DeekshaG96" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[#111612] border border-emerald-500/20 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-400 transition-colors">
              <Github size={16} />
            </a>
            <a href="https://linkedin.com/in/deeksha-g-cybersec" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[#111612] border border-emerald-500/20 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-400 transition-colors">
              <Linkedin size={16} />
            </a>
            <button onClick={copyEmail} className="w-9 h-9 rounded-full bg-[#111612] border border-emerald-500/20 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-400 transition-colors" title="Copy Email">
              <Mail size={16} />
            </button>
          </div>

          <p className="text-xs text-slate-500 pt-4">
            © 2026 Deeksha G. All Rights Reserved. Built with React 19 & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
