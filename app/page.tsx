import AudioDaemon from "@/components/audio-daemon";
import HeroSection from "@/components/hero-section";
import StatusCard from "@/components/status-card";
import StatsCard from "@/components/stats-card";
import SysBackup from "@/components/sys-backup";

export default function Home() {
  return (
    <div className="grid grid-cols-4 lg:grid-cols-14 gap-6">
      <div className="lg:col-span-9">
        <HeroSection />
      </div>
      <div className="lg:col-span-4 flex flex-col gap-6 h-full">
        <StatusCard />
        <StatsCard />
        <SysBackup />
      </div>
    </div>
  );
}
