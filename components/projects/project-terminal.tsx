"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/language-context";

interface ProjectTerminalProps {
  lines: string[];
}

export default function ProjectTerminal({ lines }: ProjectTerminalProps) {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, []);

  return (
    <div className="p-4 bg-black font-mono text-[10px] text-primary/60 border border-primary/10 overflow-hidden">
      <div className="flex justify-between mb-2 pb-1 border-b border-primary/10">
        <span>
          {t("projectDetail.terminalRecv")}: 0x44F
        </span>
        <span>
          {t("projectDetail.cpuUsage")}: 14%
        </span>
      </div>
      <div ref={scrollRef} className="space-y-1 h-32 overflow-hidden">
        {lines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
        <div className="flex items-center">
          <span>&gt; SYSTEM_READY_</span>
          <span className="w-1.5 h-3 bg-primary/60 ml-1 animate-pulse"></span>
        </div>
      </div>
    </div>
  );
}
