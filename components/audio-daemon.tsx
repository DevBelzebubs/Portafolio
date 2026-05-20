"use client";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/language-context";

export default function AudioDaemon() {
  const { language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  // 1. Define tu lista de reproducción (Playlist) aquí
  const playlist = [
    { title: "Tornado of Souls - Remastered", src: "/audio/tornado.mp3" },
    { title: "Holy Wars... The Punishment Due", src: "/audio/holywars.mp3" },
    { title: "A Fine Day to Die", src: "/audio/afineday.mp3" }
  ];

  const text = {
    es: { subtitle: "PROCESO_EN_SEGUNDO_PLANO" },
    en: { subtitle: "BACKGROUND_PROCESS" },
    fr: { subtitle: "PROCESSUS_EN_ARRIÈRE_PLAN" }
  };
  const t = text[language as keyof typeof text] || text.es;

  // Manejador de Play/Pause
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % playlist.length);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch(e => console.log("Reproducción bloqueada por el navegador", e));
    }
  }, [currentTrack, isPlaying]);

  return (
    <div className="bg-surface-container-low border border-outline-variant/30 p-6 flex flex-col relative group overflow-hidden rounded-2xl">
      <audio 
        ref={audioRef} 
        src={playlist[currentTrack].src} 
        onEnded={nextTrack}
        preload="metadata" 
      />

      <div className="absolute top-0 left-0 w-full h-1 bg-tertiary/20 group-hover:bg-tertiary/40 transition-colors" />
      
      <h3 className="text-sm font-medium text-tertiary mb-4 tracking-wider flex items-center justify-between font-mono w-full">
        <span className="flex items-center gap-2">
          <span className={`w-2 h-2 bg-tertiary rounded-full shadow-[0_0_8px_rgba(var(--tertiary),0.8)] ${isPlaying ? 'animate-pulse' : 'opacity-50'}`} />
          AUDIO_DAEMON // {t.subtitle}
        </span>
        <span className="text-xs opacity-70">
          [{currentTrack + 1}/{playlist.length}]
        </span>
      </h3>
      
      <div className="relative z-10 w-full bg-black/40 border border-outline-variant/20 p-3 rounded-xl flex items-center gap-3">
        
        <div className="flex items-center gap-1 flex-shrink-0">
          <button 
            onClick={prevTrack}
            className="w-8 h-8 flex items-center justify-center text-tertiary/70 hover:text-tertiary hover:bg-tertiary/10 rounded-full transition-all active:scale-95"
          >
            <span className="material-symbols-outlined text-lg">skip_previous</span>
          </button>

          <button 
            onClick={togglePlay}
            className="w-10 h-10 bg-tertiary/10 hover:bg-tertiary/20 border border-tertiary/30 rounded-full flex items-center justify-center text-tertiary transition-all hover:scale-105 active:scale-95"
          >
            <span className="material-symbols-outlined text-xl">
              {isPlaying ? 'pause' : 'play_arrow'}
            </span>
          </button>

          <button 
            onClick={nextTrack}
            className="w-8 h-8 flex items-center justify-center text-tertiary/70 hover:text-tertiary hover:bg-tertiary/10 rounded-full transition-all active:scale-95"
          >
            <span className="material-symbols-outlined text-lg">skip_next</span>
          </button>
        </div>

        <div className="flex-1 overflow-hidden ml-2">
          <p className="font-mono text-xs text-primary font-bold truncate" title={playlist[currentTrack].title}>
            {playlist[currentTrack].title}
          </p>
          
          <div className="flex items-end gap-1 mt-1.5 h-3">
            {[...Array(12)].map((_, i) => (
              <div 
                key={i} 
                className="w-1 bg-tertiary/60 rounded-t-sm transition-all duration-150"
                style={{
                  height: isPlaying ? `${Math.max(20, Math.random() * 100)}%` : '20%'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}