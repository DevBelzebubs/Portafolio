"use client";

import { createContext, useContext, useCallback, type ReactNode, type RefObject } from "react";
import { useAudioPlayer, type Track } from "@/hooks/use-audio-player";

export const playlist: Track[] = [
  { title: "Clarion - Taxidermy", src: "/audio/Clarion%20-%20Taxidermy.mp3" },
  { title: "Deftones - Acid Hologram", src: "/audio/Deftones%20-%20Acid%20Hologram.mp3" },
  { title: "Deftones - Battle-axe", src: "/audio/Deftones%20-%20Battle-axe.mp3" },
  { title: "Deftones - Gauze", src: "/audio/Deftones%20-%20Gauze.mp3" },
  { title: "Deftones - Hearts/Wires", src: "/audio/Deftones%20-%20Hearts%20Wires.mp3" },
  { title: "Deftones - Infinite/source", src: "/audio/Deftones%20-%20Infinite%20source.mp3" },
  { title: "Deftones - Prayers/Triangles", src: "/audio/Deftones%20-%20Prayers%20Triangles.mp3" },
  { title: "Deftones - Rivière", src: "/audio/Deftones%20-%20Rivi%C3%A8re.mp3" },
  { title: "Deftones - Sextape", src: "/audio/Deftones%20-%20Sextape.mp3" },
  { title: "Deftones - Xerces", src: "/audio/Deftones%20-%20Xerces.mp3" },
  { title: "GunsLikeGirls - Hand Control", src: "/audio/GunsLikeGirls%20-%20Hand%20Control.mp3" },
  { title: "My Chemical Romance - Drowning Lessons", src: "/audio/My%20Chemical%20Romance%20-%20Drowning%20Lessons.mp3" },
  { title: "My Chemical Romance - The Ghost of You", src: "/audio/My%20Chemical%20Romance%20-%20The%20Ghost%20of%20You.mp3" },
  { title: "My Chemical Romance - To the End", src: "/audio/My%20Chemical%20Romance%20-%20To%20the%20End.mp3" },
  { title: "Pierce The Veil - Circles", src: "/audio/Pierce%20The%20Veil%20-%20Circles.mp3" },
  { title: "Pierce The Veil - Disasterology", src: "/audio/Pierce%20The%20Veil%20-%20Disasterology.mp3" },
  { title: "Quannic - soil", src: "/audio/Quannic%20-%20soil.mp3" },
  { title: "Roving - Midnight Shimmer", src: "/audio/Roving%20-%20Midnight%20Shimmer.mp3" },
  { title: "Silverstein - Smile In Your Sleep", src: "/audio/Silverstein%20-%20Smile%20In%20Your%20Sleep.mp3" },
  { title: "Violent Vira - Common Decency", src: "/audio/Violent%20Vira%20-%20Common%20Decency.mp3" },
  { title: "Violent Vira - Frailty", src: "/audio/Violent%20Vira%20-%20Frailty.mp3" },
  { title: "Violent Vira - Tarantula Girl", src: "/audio/Violent%20Vira%20-%20Tarantula%20Girl.mp3" },
];

interface AudioContextValue {
  playlist: Track[];
  audioRef: RefObject<HTMLAudioElement | null>;
  isPlaying: boolean;
  setIsPlaying: (val: boolean) => void;
  currentTrack: number;
  setCurrentTrack: (val: number) => void;
  volume: number;
  setVolume: (val: number) => void;
  progress: number;
  setProgress: (val: number) => void;
  duration: number;
  setDuration: (val: number) => void;
  shuffle: boolean;
  setShuffle: (val: boolean) => void;
  showPlaylist: boolean;
  setShowPlaylist: (val: boolean) => void;
  togglePlay: () => void;
  playTrack: (index: number) => void;
  nextTrack: () => void;
  prevTrack: () => void;
  handleTimeUpdate: () => void;
  handleEnded: () => void;
  seek: (e: React.MouseEvent<HTMLDivElement>) => void;
  formatTime: (s: number) => string;
}

const AudioContext = createContext<AudioContextValue | undefined>(undefined);

export function AudioProvider({ children }: { children: ReactNode }) {
  const player = useAudioPlayer(playlist);

  const handleAudioError = useCallback(() => {
    player.setIsPlaying(false);
  }, [player]);

  return (
    <AudioContext.Provider value={{ ...player, playlist }}>
      <audio
        ref={player.audioRef}
        src={playlist[player.currentTrack].src}
        onTimeUpdate={player.handleTimeUpdate}
        onEnded={player.handleEnded}
        onLoadedMetadata={player.handleTimeUpdate}
        onError={handleAudioError}
        preload="metadata"
      />
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error("useAudio must be used within AudioProvider");
  return ctx;
}
