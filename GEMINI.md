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