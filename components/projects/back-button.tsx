"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";

export default function BackButton() {
  const { t } = useLanguage();

  return (
    <Link
      href="/logs"
      className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-outline hover:text-tertiary transition-colors duration-150 mb-8 group"
    >
      <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">
        arrow_back
      </span>
      {t("projectDetail.back")}
    </Link>
  );
}
