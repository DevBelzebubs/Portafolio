"use client";

import { useState, useRef, useEffect, useCallback } from "react";

export interface Track {
  title: string;
  src: string;
}

export function useAudioPlayer(playlist: Track[]) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(0.6);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [shuffle, setShuffle] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);

  const togglePlay = useCallback(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const playTrack = useCallback((index: number) => {
    setCurrentTrack(index);
    setIsPlaying(true);
  }, []);

  const nextTrack = useCallback(() => {
    if (shuffle) {
      const next = Math.floor(Math.random() * playlist.length);
      setCurrentTrack(next);
    } else {
      setCurrentTrack((prev) => (prev + 1) % playlist.length);
    }
    setIsPlaying(true);
  }, [shuffle, playlist.length]);

  const prevTrack = useCallback(() => {
    if (shuffle) {
      const prev = Math.floor(Math.random() * playlist.length);
      setCurrentTrack(prev);
    } else {
      setCurrentTrack((prev) => (prev - 1 + playlist.length) % playlist.length);
    }
    setIsPlaying(true);
  }, [shuffle, playlist.length]);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    }
  }, [currentTrack, isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleTimeUpdate = useCallback(() => {
    if (!audioRef.current) return;
    setProgress(audioRef.current.currentTime);
    setDuration(audioRef.current.duration || 0);
  }, []);

  const handleEnded = useCallback(() => {
    nextTrack();
  }, [nextTrack]);

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = pct * duration;
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  return {
    audioRef,
    isPlaying, setIsPlaying,
    currentTrack, setCurrentTrack,
    volume, setVolume,
    progress, setProgress,
    duration, setDuration,
    shuffle, setShuffle,
    showPlaylist, setShowPlaylist,
    togglePlay,
    playTrack,
    nextTrack,
    prevTrack,
    handleTimeUpdate,
    handleEnded,
    seek,
    formatTime,
  };
}
