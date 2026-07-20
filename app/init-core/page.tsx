"use client";

import CorePageHeader from "@/components/core/page-header";
import Education from "@/components/core/education";
import Blueprint from "@/components/core/blueprint";
import TerminalForm from "@/components/core/terminal-form";
import ExternalNodes from "@/components/core/external-nodes";
import AudioDaemon from "@/components/shared/audio-daemon";
import SysBackup from "@/components/shared/sys-backup";
export default function CorePage() {
  return (
    <section className="snap-start">
      <CorePageHeader />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
        <div className="col-span-1 md:col-span-12 flex flex-col gap-6">
          <Education />
          <Blueprint />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="col-span-1 md:col-span-8">
          <TerminalForm />
        </div>
        <div className="col-span-1 md:col-span-4">
          <ExternalNodes />
        </div>
      </div>
    </section>
  );
}
