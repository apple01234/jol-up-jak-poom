# AI Girlfriends Platform - Project Context for Gemini CLI

This document provides an overview of the "AI Girlfriends Platform" project, intended to guide the Gemini CLI in understanding its context, goals, and technical stack.

## 1. Project Overview
**Project Name:** AI 여친 플랫폼 (AI Girlfriends Platform)
**Core Concept:** A personalized 3D AI companion platform offering customized modeling and voice interactions, alongside a resource marketplace for user-generated content.
**Target Audience:** Primarily 20-35 year old males interested in anime/gaming culture, AI early adopters, users who enjoy customization, and 3D modeling artists/creators.

## 2. Core Functionality
The platform offers a tiered service model (Free, Premium, Premium Pro) with varying access to features. Key functionalities include:
*   **Dual Conversation Modes:** Real-time chat and voice interactions with AI companions.
*   **Customization:** Users can upload and customize 3D models (characters, outfits), voice packs, and animations.
*   **Resource Marketplace:** A platform for users to buy and sell 3D models, voice packs, animations, and AI persona templates using an in-app currency ("Heart Coin").
*   **AI Integration:** Utilizes advanced AI for text generation (GPT-4 Turbo), speech-to-text (Whisper), text-to-speech (XTTS), and emotion analysis.

## 3. Technology Stack
The project is built with a modern, scalable architecture:

### Frontend
*   **Framework:** React 18 + TypeScript
*   **3D Rendering:** Three.js + React Three Fiber
*   **State Management:** Zustand + React Query
*   **UI/Styling:** Tailwind CSS + Radix UI (Planned)
*   **Real-time Communication:** Socket.io-client, WebRTC

### Backend
*   **Framework:** FastAPI + Python 3.9
*   **Database:** PostgreSQL + SQLAlchemy
*   **Caching/Background Jobs:** Redis + Celery
*   **File Storage:** MinIO (S3 compatible)
*   **Authentication:** JWT + OAuth 2.0
*   **Payments:** Stripe API

### AI Services
*   **Text-to-Speech (TTS):** XTTS (Coqui TTS)
*   **Speech-to-Text (STT):** OpenAI Whisper
*   **Conversation AI:** OpenAI GPT-4 Turbo
*   **Emotion Analysis:** HuggingFace Transformers
*   **GPU Acceleration:** CUDA + PyTorch

### Infrastructure
*   **Containerization/Orchestration:** Docker + Kubernetes
*   **Load Balancing:** NGINX
*   **CDN:** CloudFlare
*   **CI/CD:** GitHub Actions

## 4. Development Status & Roadmap
The project is currently in its early phases, with a detailed roadmap outlined in `docs/README.md`. Key phases include:
*   **Phase 1 (MVP):** Basic 3D rendering, character system, authentication, chat mode, and initial AI integration.
*   **Phase 2 (Advanced Features):** Voice cloning, real-time voice chat, lip-sync, and advanced 3D model customization.
*   **Phase 3 (Marketplace):** Implementation of the in-app currency, payment system, and the full resource marketplace.
*   **Phase 4 (Launch & Optimization):** Final testing, performance tuning, and launch preparations.

## 5. Important Considerations for Gemini
*   **Primary Languages:** Python (Backend, AI), TypeScript (Frontend).
*   **Frontend Styling:** Tailwind CSS is the chosen UI framework for the frontend. When making frontend changes, prioritize using or integrating with Tailwind CSS.
*   **Project Structure:** The project is divided into `frontend/`, `backend/`, `ai-models/`, `unity-client/`, and `deployment/` directories.
*   **Error Handling:** Ensure robust error handling, especially for API integrations and real-time communication.
*   **Performance:** Optimization for 3D rendering, network, and AI processing is a critical aspect of the project.
*   **Security & Privacy:** Adherence to data protection regulations (GDPR/CCPA) and secure authentication practices are paramount.

## 🎨 Core Design Philosophy

This document outlines the design principles for a UI inspired by The Game Awards website. The goal is to create a visually impactful, modern, and immersive user experience that resonates with a gaming audience.

### 1. Visual Impact & Immersion
- **High-Contrast, Dark-Themed Aesthetic**: The UI will be built on a dark, near-black background to create a cinematic and immersive feel. This high-contrast environment will make key visual elements and text pop, drawing the user's attention to what matters most.
- **Focus on High-Quality Visuals**: The design will prioritize the use of high-quality imagery, videos, and game-related assets. Visuals are not just decorative; they are central to the user experience.

### 2. Modern & Clean Layout
- **Grid-Based Structure**: The layout will be clean, organized, and professional, likely using a grid system to ensure consistency and structure across all components.
- **Minimalist Approach**: While visually rich, the UI will avoid clutter. A minimalist approach to layout design will ensure that the focus remains on the content and user interaction.

### 3. Color Palette
- **Primary Background**: A very dark, near-black color will serve as the main background, creating a sophisticated and cinematic canvas.
- **Primary Text**: White (`#FFFFFF`) or a light off-white will be used for main text to ensure maximum readability and contrast.
- **Accent Colors**: Vibrant, neon-like colors will be used for interactive elements such as buttons, links, and highlights. These colors will be inspired by the cyberpunk and modern gaming genres.

### 4. Typography
- **Font Family**: A modern, clean, sans-serif typeface will be used for all text to enhance readability and contribute to the modern aesthetic.
- **Font Hierarchy**: A clear typographic hierarchy will be established using different font weights. Headings and key navigation elements will be bold to stand out, while body text will use a regular weight for comfortable reading.

### 5. Key Characteristics
- **Modern & Professional**: The overall look and feel will be polished and professional, reflecting the high standards of the gaming industry.
- **Visually Impactful**: The design will be bold and engaging, using strong visuals and high contrast to create a memorable experience.
- **Immersive & Cinematic**: The dark theme and focus on high-quality visuals will create an immersive, cinematic experience for the user.
