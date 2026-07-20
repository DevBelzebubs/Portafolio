"use client";

import { useAccessibility } from "@/contexts/accessibility-context";
import { useLanguage } from "@/contexts/language-context";
import { useAudioPlayer, type Track } from "@/hooks/use-audio-player";

const playlist = [
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

const text = {
  es: { title: "ACCESIBILIDAD", fontSize: "TAMAÑO", small: "A-", medium: "A", large: "A+", fontFamily: "TIPOGRAFÍA", sans: "Sans", mono: "Mono", contrast: "CONTRASTE", normal: "Normal", high: "Alto", music: "MÚSICA", nowPlaying: "AHORA SUENA", shuffle: "ALEATORIO", sequential: "SECUENCIAL", playlist: "PLAYLIST", volume: "VOLUMEN" },
  en: { title: "ACCESSIBILITY", fontSize: "FONT SIZE", small: "A-", medium: "A", large: "A+", fontFamily: "FONT", sans: "Sans", mono: "Mono", contrast: "CONTRAST", normal: "Normal", high: "High", music: "MUSIC", nowPlaying: "NOW PLAYING", shuffle: "SHUFFLE", sequential: "SEQUENTIAL", playlist: "PLAYLIST", volume: "VOLUME" },
  fr: { title: "ACCESSIBILITÉ", fontSize: "TAILLE", small: "A-", medium: "A", large: "A+", fontFamily: "POLICE", sans: "Sans", mono: "Mono", contrast: "CONTRASTE", normal: "Normal", high: "Élevé", music: "MUSIQUE", nowPlaying: "EN COURS", shuffle: "ALÉATOIRE", sequential: "SÉQUENTIEL", playlist: "PLAYLIST", volume: "VOLUME" },
};

function PanelContent({ onClose, player }: { onClose: () => void; player: ReturnType<typeof useAudioPlayer> }) {
  const { fontSize, fontFamily, highContrast, setFontSize, setFontFamily, setHighContrast } = useAccessibility();
  const { lang } = useLanguage();
  const t = text[lang as keyof typeof text] || text.en;

  return (
    <div className="flex flex-col max-h-[80vh]">
      <div className="flex items-center justify-between p-4 border-b border-outline-variant/20 shrink-0">
        <span className="font-mono text-xs text-primary tracking-widest">{t.title}</span>
        <button onClick={onClose} className="text-on-surface-variant hover:text-on-surface transition-colors">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        <div>
          <p className="font-mono text-[10px] text-outline tracking-widest mb-2">{t.fontSize}</p>
          <div className="flex gap-2">
            {(["sm", "base", "lg"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setFontSize(s)}
                className={`flex-1 py-2 text-xs font-mono tracking-wider border transition-all ${
                  fontSize === s
                    ? "bg-primary-container/20 border-primary-container text-primary-container"
                    : "border-outline-variant/30 text-on-surface-variant hover:border-outline-variant/60"
                }`}
              >
                {s === "sm" ? t.small : s === "base" ? t.medium : t.large}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="font-mono text-[10px] text-outline tracking-widest mb-2">{t.fontFamily}</p>
          <div className="flex gap-2">
            {(["sans", "mono"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFontFamily(f)}
                className={`flex-1 py-2 text-xs font-mono tracking-wider border transition-all ${
                  fontFamily === f
                    ? "bg-primary-container/20 border-primary-container text-primary-container"
                    : "border-outline-variant/30 text-on-surface-variant hover:border-outline-variant/60"
                }`}
              >
                {f === "sans" ? t.sans : t.mono}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="font-mono text-[10px] text-outline tracking-widest mb-2">{t.contrast}</p>
          <div className="flex gap-2">
            <button
              onClick={() => setHighContrast(false)}
              className={`flex-1 py-2 text-xs font-mono tracking-wider border transition-all ${
                !highContrast
                  ? "bg-primary-container/20 border-primary-container text-primary-container"
                  : "border-outline-variant/30 text-on-surface-variant hover:border-outline-variant/60"
              }`}
            >
              {t.normal}
            </button>
            <button
              onClick={() => setHighContrast(true)}
              className={`flex-1 py-2 text-xs font-mono tracking-wider border transition-all ${
                highContrast
                  ? "bg-primary-container/20 border-primary-container text-primary-container"
                  : "border-outline-variant/30 text-on-surface-variant hover:border-outline-variant/60"
              }`}
            >
              {t.high}
            </button>
          </div>
        </div>

        <div className="border-t border-outline-variant/20 pt-4">
          <p className="font-mono text-[10px] text-tertiary tracking-widest mb-3 flex items-center gap-2">
            <span className={`w-2 h-2 bg-tertiary rounded-full ${player.isPlaying ? "animate-pulse" : "opacity-50"}`} />
            {t.music}
          </p>

          <div className="bg-black/30 border border-outline-variant/20 p-3 mb-3">
            <p className="font-mono text-[9px] text-outline tracking-widest mb-1">{t.nowPlaying}</p>
            <p className="font-mono text-sm text-on-surface truncate">{playlist[player.currentTrack].title}</p>
            {player.duration > 0 && (
              <p className="font-mono text-[10px] text-outline mt-1">{player.formatTime(player.progress)} / {player.formatTime(player.duration)}</p>
            )}
          </div>

          <div className="w-full h-1.5 bg-outline-variant/20 mb-3 cursor-pointer group" onClick={player.seek}>
            <div
              className="h-full bg-tertiary transition-all duration-200 relative"
              style={{ width: player.duration ? `${(player.progress / player.duration) * 100}%` : "0%" }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-tertiary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-3">
            <button onClick={player.prevTrack} className="w-9 h-9 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-outline-variant/10 transition-all">
              <span className="material-symbols-outlined">skip_previous</span>
            </button>
            <button onClick={player.togglePlay} className="w-11 h-11 bg-tertiary/10 border border-tertiary/30 flex items-center justify-center text-tertiary hover:bg-tertiary/20 transition-all">
              <span className="material-symbols-outlined">{player.isPlaying ? "pause" : "play_arrow"}</span>
            </button>
            <button onClick={player.nextTrack} className="w-9 h-9 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-outline-variant/10 transition-all">
              <span className="material-symbols-outlined">skip_next</span>
            </button>
            <button
              onClick={() => player.setShuffle(!player.shuffle)}
              className={`w-9 h-9 flex items-center justify-center transition-all ${
                player.shuffle ? "text-tertiary bg-tertiary/10" : "text-on-surface-variant hover:text-on-surface hover:bg-outline-variant/10"
              }`}
              title={player.shuffle ? t.sequential : t.shuffle}
            >
              <span className="material-symbols-outlined">casino</span>
            </button>
          </div>

          {player.shuffle && (
            <div className="mb-3 font-mono text-[9px] text-tertiary tracking-widest text-center border border-tertiary/20 bg-tertiary/5 py-1">
              🎲 {t.shuffle}
            </div>
          )}

          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-sm text-outline">
              {player.volume === 0 ? "volume_off" : player.volume < 0.5 ? "volume_down" : "volume_up"}
            </span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={player.volume}
              onChange={(e) => player.setVolume(Number(e.target.value))}
              className="flex-1 h-1 accent-tertiary cursor-pointer"
            />
          </div>

          <button
            onClick={() => player.setShowPlaylist(!player.showPlaylist)}
            className="w-full flex items-center justify-between py-2 px-3 border border-outline-variant/20 text-xs font-mono tracking-wider text-on-surface-variant hover:bg-outline-variant/10 transition-all"
          >
            <span>{t.playlist} ({playlist.length})</span>
            <span className="material-symbols-outlined text-sm">{player.showPlaylist ? "expand_less" : "expand_more"}</span>
          </button>

          {player.showPlaylist && (
            <div className="mt-1 border border-outline-variant/20 max-h-48 overflow-y-auto">
              {playlist.map((track, i) => (
                <button
                  key={i}
                  onClick={() => player.playTrack(i)}
                  className={`w-full text-left px-3 py-2 font-mono text-[11px] tracking-wider transition-all flex items-center gap-2 ${
                    i === player.currentTrack
                      ? "bg-tertiary/10 text-tertiary border-l-2 border-tertiary"
                      : "text-on-surface-variant hover:bg-outline-variant/10 border-l-2 border-transparent"
                  } ${i % 2 === 0 ? "bg-black/10" : ""}`}
                >
                  <span className="material-symbols-outlined text-[14px]">
                    {i === player.currentTrack && player.isPlaying ? "play_arrow" : "music_note"}
                  </span>
                  <span className="truncate">{track.title}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AccessibilityPanel() {
  const { isPanelOpen, togglePanel, setPanelOpen } = useAccessibility();
  const player = useAudioPlayer(playlist);

  return (
    <>
      <audio
        ref={player.audioRef}
        src={playlist[player.currentTrack].src}
        onTimeUpdate={player.handleTimeUpdate}
        onEnded={player.handleEnded}
        onLoadedMetadata={player.handleTimeUpdate}
        preload="metadata"
      />

      {isPanelOpen && (
        <div
          className="fixed inset-0 z-[99] bg-black/40 animate-in fade-in duration-300"
          onClick={() => setPanelOpen(false)}
        />
      )}

      <div className="md:hidden fixed bottom-6 right-6 z-[100] flex flex-col items-end">
        <div
          className={`
            transition-all duration-300 ease-out origin-bottom-right overflow-hidden
            ${isPanelOpen
              ? "w-80 max-h-[80vh] bg-surface-container-low border border-outline-variant/20 shadow-2xl"
              : "w-12 h-12 bg-primary-container shadow-lg hover:bg-primary-container/80 cursor-pointer"
            }
          `}
        >
          {!isPanelOpen ? (
            <button
              onClick={togglePanel}
              className="w-full h-full flex items-center justify-center text-on-primary-container active:scale-95 transition-transform"
              aria-label="Accessibility"
            >
              <span className="material-symbols-outlined">settings_accessibility</span>
            </button>
          ) : (
            <PanelContent onClose={() => setPanelOpen(false)} player={player} />
          )}
        </div>
      </div>

      {isPanelOpen && (
        <div className="hidden md:block fixed left-64 bottom-8 z-[100] w-80 max-h-[80vh] bg-surface-container-low border border-outline-variant/20 shadow-2xl transition-all duration-200">
          <PanelContent onClose={() => setPanelOpen(false)} player={player} />
        </div>
      )}
    </>
  );
}
