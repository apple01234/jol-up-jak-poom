import React, { useEffect, useRef, useState } from 'react';

const heroTitle = 'AI Girlfriends Platform';
const heroSubtitle = '개인화 3D AI 컴패니언 & 마켓플레이스';

// 타이핑 애니메이션 커스텀 훅
function useTyping(text: string, speed = 60) {
  const [display, setDisplay] = useState('');
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplay(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);
  return display;
}

const Home: React.FC = () => {
  const typedTitle = useTyping(heroTitle, 60);
  const typedSubtitle = useTyping(heroSubtitle, 24);

  // 파티클 효과 (CSS-only, 배경 SVG)
  // 실제 구현은 CSS/JS로 확장 가능, 여기선 SVG로 간단히 표현
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-tertiary animate-fade-in">
      {/* 파티클 SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 animate-pulse" style={{zIndex:0}}>
        <circle cx="20%" cy="30%" r="60" fill="#00f5ff55" />
        <circle cx="80%" cy="60%" r="90" fill="#8b5cf655" />
        <circle cx="50%" cy="80%" r="40" fill="#ff006e44" />
        <circle cx="70%" cy="20%" r="30" fill="#ffd70033" />
      </svg>
      {/* Hero Glassmorphism Card */}
      <div className="relative z-10 flex flex-col items-center justify-center px-8 py-14 rounded-3xl shadow-glass backdrop-blur-xl bg-bg-glass border border-[--color-border] max-w-2xl animate-fade-in" style={{boxShadow:'0 0 32px 0 #00f5ff33, 0 4px 32px 0 rgba(0,0,0,0.25)'}}>
        <h1 className="text-5xl md:text-6xl font-tech font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary drop-shadow-[0_0_24px_#00f5ff] animate-glow text-center select-none">
          {typedTitle}
        </h1>
        <p className="mt-6 text-xl md:text-2xl font-sans text-text-secondary text-center animate-fade-in" style={{animationDelay:'0.8s'}}>
          {typedSubtitle}
        </p>
        <a href="#main" className="mt-10 px-8 py-4 rounded-full bg-primary text-black font-bold text-lg shadow-neon hover:scale-105 hover:bg-accent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent animate-fade-in" style={{animationDelay:'1.2s'}}>
          시작하기
        </a>
      </div>
      {/* 스크롤 다운 인디케이터 */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center animate-fade-in" style={{animationDelay:'1.5s'}}>
        <span className="block w-2 h-2 rounded-full bg-accent mb-1 animate-bounce"></span>
        <span className="block w-1 h-8 rounded-full bg-accent opacity-60 animate-bounce"></span>
      </div>
    </div>
  );
}

export default Home;
