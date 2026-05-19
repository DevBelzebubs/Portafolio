"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";

export default function Sidebar() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navItems = [
    { href: "/", icon: "rebase_edit", label: t("sidebar.infrastructure") },
    { href: "/schematics", icon: "account_tree", label: t("sidebar.schematics") },
    { href: "/logs", icon: "receipt_long", label: t("sidebar.logs") },
    { href: "/init-core", icon: "memory", label: t("sidebar.coreInit") },
  ];

  return (
    <nav className="hidden md:flex flex-col py-8 fixed left-0 top-16 h-[calc(100vh-8rem)] w-64 z-40 bg-[#1c1c1e] shadow-[2px_0_0_0_rgba(46,91,255,0.1)] justify-between">
      <div className="flex flex-col">
        <div className="px-6 mb-12 flex flex-col gap-1">
          <span className="font-bold tracking-[0.2em] text-primary-container text-xs">{t("sidebar.name")}</span>
          <span className="font-mono text-[9px] text-outline tracking-widest">{t("sidebar.version")}</span>
        </div>
        <ul className="flex flex-col w-full font-mono text-[10px] tracking-widest">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`w-full flex items-center px-6 py-4 transition-transform active:scale-95 ${
                    isActive
                      ? "bg-primary-container/10 text-primary-container border-r-4 border-primary-container"
                      : "text-gray-600 grayscale hover:grayscale-0 hover:bg-background hover:text-tertiary border-r-4 border-transparent"
                  }`}
                >
                  <span className="material-symbols-outlined mr-4 text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="px-6 w-full">
        <button className="w-full border border-outline-variant text-on-surface hover:bg-primary/10 font-mono text-[10px] tracking-widest py-3 flex items-center justify-center gap-2 transition-colors">
          <span className="material-symbols-outlined text-sm">hub</span>
          {t("sidebar.connectNodes")}
        </button>
      </div>
    </nav>
  );
}
