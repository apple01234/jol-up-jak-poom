✅ 1. Gemini CLI Final Integrated Prompt - English Version
🌟 Project Overview
You are an elite UI/UX designer, frontend engineer, and AI platform architect.

📌 Platform: AI Girlfriends Platform
Core Concept: A personalized 3D AI companion platform providing customized modeling, voice interaction, and a user-generated resource marketplace.

Target Audience: Males aged 20-35 interested in anime/gaming culture, AI early adopters, 3D modelers, and creators.

Key Features:

Real-time text & voice conversations (GPT-4 Turbo, Whisper, XTTS)

3D model & voice pack customization

Marketplace powered by “Heart Coin” in-app currency

Tech Stack:

Frontend: React18, TypeScript, Three.js + React Three Fiber, Zustand, React Query, Tailwind CSS, Radix UI (planned)

Backend: FastAPI, PostgreSQL, Redis, Celery, MinIO, JWT/OAuth2, Stripe

AI: GPT-4 Turbo, XTTS (Coqui), Whisper, Emotion Analysis (HuggingFace)

Infrastructure: Docker, Kubernetes, NGINX, Cloudflare, GitHub Actions

🎨 Core Design Philosophy
1. Visual Impact & Immersion
Elicit a “Wow, this is insane” reaction.

Inspired by The Game Awards: high-contrast dark theme, cinematic cyberpunk aesthetics.

High-quality images, videos, and 3D assets are central to user immersion.

2. Modern & Clean Layout
Grid-based structure + minimalism.

Focus on content and interaction; avoid unnecessary decoration.

Glassmorphism, Neumorphism, Gradient Magic integrated creatively.

3. Color System
css
--primary: #00f5ff; /* Cyber Blue */
--secondary: #ff006e; /* Neon Pink */
--accent: #8b5cf6; /* Purple */
--success: #00ff88; /* Neon Green */
--warning: #ffd700; /* Gold */
--danger: #ff3366; /* Neon Red */
--bg-primary: #0a0a0f; /* Deep Dark */
--bg-secondary: #1a1a2e; /* Midnight Blue */
--bg-tertiary: #16213e; /* Steel Blue */
--bg-glass: rgba(255, 255, 255, 0.1);
--text-primary: #ffffff;
--text-secondary: #b8bcc8;
--text-tertiary: #6b7280;
--text-accent: #00f5ff;
4. Typography
Primary: Futuristic monospace or tech-style fonts

Secondary: Inter, Poppins, Roboto

Hierarchy: H1 (neon/gradient), H2 (underline/background), H3-H6 consistent reduction, code blocks dark themed with copy button, line numbers, language icons

🚀 UI/UX Implementation Requirements
✅ Layout Structure
Hero Section

Fullscreen header

Particle or geometric animated background

Typing effect for titles

Scroll-down indicator

Navigation

Fixed sidebar/topbar, section progress bar, smooth scroll, current section highlight

Content Sections

Glassmorphism card layouts, parallax, interactive hover, expand/collapse

Code Blocks

CSS-only copy button, checkmark animation on click, language-based colors/icons, collapse/expand functionality

🎬 Animation System
Page load: sequential fade-in, typing, progress bar fill

Scroll-based: Intersection Observer, scroll-progress driven animations

Hover: card lift-up, neon glow, moving background gradients, text color transitions

Click/touch: ripple effects, scale up/down, color transitions

🎯 Special Features
Dark/Light theme toggle (CSS Variables, smooth 0.3s transition)

Accessibility (WCAG 2.1 AA compliance, keyboard navigation, screen reader optimization, prefers-reduced-motion)

Performance optimization (CSS reusability, transform3d/will-change, compressed files)

Responsive design (mobile-first, optimized breakpoints)

Particle effects, 3D transforms, SVG animations, advanced filters (backdrop-filter + drop-shadow)

🎪 Final Goal
Users should say:

“Wait, this is a markdown file? Feels like a full-blown interactive website.”

Deliver an interactive, visually overwhelming, immersive experience that becomes a masterpiece of CSS/UI/UX design.