"use client";

import SchematicsPageHeader from "@/components/schematics/page-header";
import CoreInfra from "@/components/schematics/core-infra";
import StackV1 from "@/components/schematics/stack-v1";
import DatabaseNodes from "@/components/schematics/database-nodes";
import ToolChain from "@/components/schematics/tool-chain";

export default function SchematicsPage() {
  return (
    <section className="snap-start">
      <SchematicsPageHeader />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <CoreInfra />
        <StackV1 />
        <DatabaseNodes />
        <ToolChain />
      </div>
    </section>
  );
}
