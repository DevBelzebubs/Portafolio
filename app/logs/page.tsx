"use client";

import { useLanguage } from "@/contexts/language-context";
import LogsPageHeader from "@/components/logs/page-header";
import SectionDivider from "@/components/logs/section-divider";
import FullCard from "@/components/logs/full-card";
import HalfCard from "@/components/logs/half-card";

export default function LogsPage() {
  const { t, tObj } = useLanguage();
  const w = tObj("logs.work") as any;
  const p = tObj("logs.projects") as any;

  return (
    <section>
      <LogsPageHeader />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="hidden md:block absolute top-0 bottom-0 left-[50%] w-px bg-outline-variant/10 -z-10"></div>
        <FullCard
          refId={w.ref1}
          title={w.title1}
          subtitle={w.sub1}
          description={w.desc1}
          tags={w.tags1}
          metrics={w.metrics1}
        />
        <HalfCard
          refId={w.ref2}
          title={w.title2}
          subtitle={w.sub2}
          icon="dns"
          description={w.desc2}
          tags={w.tags2}
        />
        <HalfCard
          refId={w.ref3}
          title={w.title3}
          subtitle={w.sub3}
          icon="hub"
          description={w.desc3}
          tags={w.tags3}
        />

        <SectionDivider
          refId={p.sectionRef}
          title={p.sectionTitle}
          subtitle={p.sectionSub}
        />

        <FullCard
          refId={p.ref1}
          title={p.title1}
          subtitle={p.sub1}
          description={p.desc1}
          tags={p.tags1}
          metrics={p.metrics1}
        />
        <HalfCard
          refId={p.ref2}
          title={p.title2}
          subtitle={p.sub2}
          icon="api"
          description={p.desc2}
          tags={p.tags2}
        />
        <HalfCard
          refId={p.ref3}
          title={p.title3}
          subtitle={p.sub3}
          icon="terminal"
          description={p.desc3}
          tags={p.tags3}
        />
        <FullCard
          refId={p.ref4}
          title={p.title4}
          subtitle={p.sub4}
          metrics={p.metrics4}
          description={p.desc4}
          tags={p.tags4}
        />
        <HalfCard
          refId={p.ref5}
          title={p.title5}
          subtitle={p.sub5}
          icon="science"
          description={p.desc5}
          tags={p.tags5}
        />
      </div>
    </section>
  );
}
