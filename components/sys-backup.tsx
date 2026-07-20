"use client";
import { useLanguage } from "@/contexts/language-context";

export default function SysBackup() {
  const { lang } = useLanguage();
  const text = {
    es: {
      title: "EXPORTAR_DATOS",
      status: "ESTADO: SISTEMA_LISTO",
      target: "OBJETIVO: PERFIL_JDGR.PDF",
      btn: "EJECUTAR DESCARGA"
    },
    en: {
      title: "EXPORT_DATA",
      status: "STATUS: SYSTEM_READY",
      target: "TARGET: PROFILE_JDGR.PDF",
      btn: "EXECUTE DOWNLOAD"
    },
    fr: {
      title: "EXPORTER_DONNÉES",
      status: "STATUT: SYSTÈME_PRÊT",
      target: "CIBLE: PROFIL_JDGR.PDF",
      btn: "EXÉCUTER TÉLÉCHARGEMENT"
    }
  };
  const t = text[lang as keyof typeof text] || text.es;

  return (
    <div className="bg-surface-container-low border border-outline-variant/30 p-6 flex flex-col relative group overflow-hidden">
      {/* Acento lateral */}
      <div className="absolute top-0 right-0 w-1 h-full bg-primary/20 group-hover:bg-primary/40 transition-colors" />
      
      <h3 className="text-sm font-medium text-primary mb-4 tracking-wider flex items-center gap-2">
        <span className="material-symbols-outlined text-base">terminal</span>
        SYS_BACKUP // {t.title}
      </h3>
      
      <div className="flex flex-col gap-5">
        <div className="font-mono text-xs text-on-surface-variant space-y-1 opacity-80">
          <p className="flex items-center gap-2">
            <span className="text-primary font-bold">{">"}</span> {t.status}
          </p>
          <p className="flex items-center gap-2">
            <span className="text-primary font-bold">{">"}</span> {t.target}
          </p>
        </div>
        
        <a 
          href="/documents/CV-Juan_Diego_Gabriel_Rios.pdf" 
          download="CV-Juan_Diego_Gabriel_Rios.pdf"
          className="w-full flex items-center justify-between bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary px-4 py-3 transition-all duration-300 group/btn hover:shadow-[0_0_15px_rgba(46,91,255,0.15)] active:scale-95 cursor-pointer select-none"
        >
          <span className="font-mono text-sm font-bold tracking-widest">{t.btn}</span>
          <span className="material-symbols-outlined transform group-hover/btn:-translate-y-1 group-hover/btn:text-white transition-all">download</span>
        </a>
      </div>
    </div>
  );
}