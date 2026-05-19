"use client";

import { useLanguage } from "@/contexts/language-context";

export default function ToolChain() {
  const { t, tArray } = useLanguage();
  const tools = tArray("schematics.toolChain.tools") as string[];

  return (
    <div className="col-span-1 md:col-span-6 bg-surface-container-lowest p-6 border border-outline-variant/20 relative">
      <div className="absolute top-0 left-0 w-full h-6 bg-surface-container-high border-b border-outline-variant/20 flex items-center px-4 gap-2">
        <span className="w-2 h-2 bg-error/50"></span>
        <span className="w-2 h-2 bg-tertiary/50"></span>
        <span className="w-2 h-2 bg-primary-container/50"></span>
        <span className="ml-2 font-mono text-[8px] text-outline tracking-widest">{t("schematics.toolChain.title")}</span>
      </div>
      <div className="mt-8 font-mono text-xs text-on-surface-variant space-y-2">
        <div className="flex"><span className="text-tertiary mr-2">&gt;</span> <span>{t("schematics.toolChain.cmd1")}</span></div>
        <div className="text-outline">{t("schematics.toolChain.out1")}</div>
        <div className="flex"><span className="text-tertiary mr-2">&gt;</span> <span>{t("schematics.toolChain.cmd2")}</span></div>
        <div className="text-outline">{t("schematics.toolChain.out2")}</div>
        <div className="flex"><span className="text-tertiary mr-2">&gt;</span> <span>{t("schematics.toolChain.cmd3")}</span></div>
        <div className="flex flex-wrap gap-2 mt-4">
          {tools.map((tool) => (
            <span
              key={tool}
              className="border border-outline-variant/40 px-2 py-1 text-[10px] hover:bg-primary-container/10 hover:text-primary-container transition-colors cursor-default"
            >
              {tool}
            </span>
          ))}
        </div>
        <div className="flex mt-4 animate-pulse">
          <span className="text-tertiary mr-2">&gt;</span>
          <span className="w-2 h-4 bg-on-surface"></span>
        </div>
      </div>
    </div>
  );
}
