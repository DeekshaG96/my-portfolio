# Personal Portfolio Website | Deeksha G

A responsive personal portfolio website engineered to showcase full-stack applications, applied artificial intelligence systems, cloud architectures, enterprise internships, and engineering credentials.

## Overview

- Candidate: Deeksha G
- Degree: Bachelor of Engineering (B.E.) in Computer Science and Business Systems (CSBS)
- Institution: Srinivas Institute of Technology (SIT), Mangaluru (Affiliated with VTU Belagavi)
- Academic Standing: 7.8 / 10.0 CGPA (Graduating June 2026)
- Live Production URL: https://deekshag96.github.io/my-portfolio/
- Netlify Production Mirror: https://iitsmedeeksha.netlify.app/

## Architectural Foundation

- Core Framework: React 19 with Vite 6 build system
- Language: TypeScript with strict mode enabled
- Styling: Tailwind CSS v4 with design tokens and responsive utilities
- Icons: Lucide React icon library
- Deployment Target: GitHub Pages (Automated via GitHub Actions CI/CD) and Netlify

## Key Sections and Capabilities

### 1. Navigation and Identity
- Floating navigation bar with responsive mobile menu drawer.
- Quick action button for direct PDF resume retrieval (`./Deeksha_G_Resume.pdf`).
- Direct navigation anchors across all functional portfolio sections.

### 2. Hero Presentation
- Developer portrait card integrated with an automated continuous circular SVG badge.
- Quantified metrics overview highlighting 5 enterprise internships, 10 production projects, and academic standing.
- Direct dual action paths for communication and curriculum vitae download.

### 3. About and Engineering Philosophy
- Comprehensive overview bridging technical computer science concepts with enterprise business systems.
- Core capability highlights across algorithms, cloud infrastructure, machine learning, and cybersecurity.

### 4. Technical Skills
- Programming Languages: Python, Java, C++, TypeScript, JavaScript (ES6+), Solidity, SQL, Dart
- Frontend Development: React 19, Next.js, Tailwind CSS v4, HTML5, CSS3, Vite, Redux Toolkit, Flutter
- Backend and APIs: Node.js, Express, FastAPI, RESTful APIs, JWT Authentication, Postman
- Cloud and Infrastructure: Amazon Web Services (EC2, S3, VPC, IAM), Google Cloud Platform, Firebase, Docker, GitHub Actions CI/CD
- Databases and Storage: MongoDB Atlas, PostgreSQL, Supabase, Cloud Firestore, MySQL
- Security and Machine Learning: Google Gemini AI, Scikit-Learn, PyTorch, Zero-Trust (ZTNA), Fortinet Firewalls

### 5. Work Experience and Internships
Chronological track record of five enterprise internships:
- GirlScript Summer of Code (GSSoC 2024): Open Source Software Contributor
- Fortinet (via AICTE and EduSkills): Network Security Engineering Intern (Grade O Outstanding, 90-100%)
- Palo Alto Networks (via AICTE and EduSkills): Cybersecurity Engineering Intern (Grade E Excellent, 80-89%)
- TechSaksham (Microsoft and SAP CSR Initiative): AI and Cloud Product Intern (94% ML Accuracy Honors)
- AWS Academy: Cloud Infrastructure Engineering Intern (Grade A Evaluation)

### 6. Formal Education
- Degree: Bachelor of Engineering (B.E.)
- Major: Computer Science and Business Systems (CSBS)
- Institution: Srinivas Institute of Technology (SIT), Mangaluru
- University Affiliation: Visvesvaraya Technological University (VTU), Belagavi
- Timeline: 2022 to 2026 (Graduating June 2026)
- Academic Standing: 7.8 CGPA

## Repository Structure

```text
my-portfolio/
|-- .github/
|   `-- workflows/
|       `-- deploy.yml          # Automated GitHub Pages CI/CD workflow
|-- public/
|   |-- assets/
|   |   `-- avatar.jpg          # Developer portrait asset
|   |-- Deeksha_G_Resume.pdf    # Downloadable resume document
|   |-- Deeksha_G_Resume.tex    # LaTeX resume source
|   `-- Deeksha_G_Resume.txt    # Plaintext resume version
|-- src/
|   |-- App.tsx                 # Core application layout and section components
|   |-- index.css               # Global typography, tokens, and custom styling
|   |-- main.tsx                # Application mounting entry point
|   `-- vite-env.d.ts           # Vite TypeScript definitions
|-- index.html                  # HTML5 document entry and metadata
|-- package.json                # Project dependencies and script definitions
|-- tsconfig.json               # TypeScript compiler configuration
|-- tsconfig.app.json           # Application-level TypeScript settings
|-- tsconfig.node.json          # Build tooling TypeScript settings
`-- vite.config.ts              # Vite configuration and build parameters
```

## Featured Projects Catalog

Categorized filtering across Full-Stack, AI & Cloud, Security & Web3, and Mobile:

| Index | Project Name | Category | Primary Tech Stack | Live Demo | Repository |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 01 | RazorOps AI | AI & Cloud | React 19, Gemini AI, Firebase, E2E Testing, Tailwind | https://razorops-ai.web.app | https://github.com/DeekshaG96/razorops-ai |
| 02 | NaanStop Food Delivery & Kitchen OS | Full-Stack | React 18, Node.js, Express, MongoDB Atlas, Capacitor Android, JWT | https://naanstop-customer.vercel.app | https://github.com/DeekshaG96/food-delivery-app |
| 03 | Eco-Track Resilient | AI & Cloud | Google Gemini 1.5 Flash, React, Google Maps API, Firebase | https://techspire-13303696-1c68d.web.app | https://github.com/DeekshaG96/eco-track-logistics |
| 04 | The Architectural Ledger | Full-Stack | React 19, Vite, Tailwind CSS v4, Firebase, Recharts | https://the-architectural-ledger.netlify.app/ | https://github.com/DeekshaG96/the-architectural-ledger |
| 05 | SIT Global Success Hub | AI & Cloud | Python, Streamlit, Scikit-Learn, Gemini 1.5 Pro, Bcrypt | https://student-success-dashboard-cpnswmcahqbt6zwqkhwghy.streamlit.app/ | https://github.com/DeekshaG96/Student-Success-Dashboard |
| 06 | VotX Decentralized Voting System | Security & Web3 | Solidity, Ethereum Sepolia, Hardhat, Ethers.js, React | https://blockchainproj-7nj1.vercel.app | https://github.com/DeekshaG96/blockchain_proj |
| 07 | Smart Farmer Connect | Full-Stack | Next.js, React, TypeScript, Tailwind CSS, REST API | https://v0-smart-farm-connect-ui.vercel.app/ | https://github.com/DeekshaG96/smart-farm-connect |
| 08 | Netflix Platform (Clean Architecture) | Full-Stack | React 18, TypeScript, Tailwind CSS, Firebase Auth, TMDB API | https://netflix-clone-eight-liard-22.vercel.app | https://github.com/DeekshaG96/_netflix-clone_ |
| 09 | PlantGuard AI Diagnostics | AI & Cloud | Python, PyTorch, TensorFlow, CNN, OpenCV, Jupyter | N/A | https://github.com/DeekshaG96/Plant-Disease-Detection-System-for-Sustainable-Agriculture-P2- |
| 10 | Soul Journal & Mental Wellness | Mobile | Flutter, Dart, Firebase, Cloud Firestore, Biometrics | https://soul-journal-65327.web.app/ | https://github.com/DeekshaG96/soul_journal |

## Local Setup and Build Instructions

### Prerequisites
- Node.js: version 18.0 or higher
- npm: version 9.0 or higher

### Commands

1. Clone the repository:
   ```bash
   git clone https://github.com/DeekshaG96/my-portfolio.git
   cd my-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Build production bundle:
   ```bash
   npm run build
   ```

5. Preview production build locally:
   ```bash
   npm run preview
   ```

## Deployment Configuration

This repository includes continuous deployment configurations for both GitHub Pages and Netlify:
- GitHub Pages: Triggered automatically upon push to main via `.github/workflows/deploy.yml`.
- Netlify: Configured with `netlify.toml` for Single Page Application routing and header caching.

## License

Distributed under the MIT License. See the LICENSE file for details.
